package utils

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"errors"
	"io"
	"log/slog"
	"mime/multipart"
	"strconv"
	"time"

	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/cloudinary/cloudinary-go/v2/api/uploader"
	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/gofiber/fiber/v2"
)

func EncryptData(data, encryption_key string) (string, error) {
	// Derive key from encryption_key
	hash := sha256.Sum256([]byte(encryption_key))
	key := hash[:]

	block, err := aes.NewCipher(key)
	if err != nil {
		return "", err
	}

	aead, err := cipher.NewGCM(block)
	if err != nil {
		return "", err
	}

	nonce := make([]byte, aead.NonceSize())
	if _, err := io.ReadFull(rand.Reader, nonce); err != nil {
		return "", err
	}

	ciphertext := aead.Seal(nonce, nonce, []byte(data), nil)
	encrypted := base64.StdEncoding.EncodeToString(ciphertext)
	return encrypted, nil
}

func DecryptData(encrypted_data, encryption_key string) (string, error) {
	// Derive key from encryption_key
	hash := sha256.Sum256([]byte(encryption_key))
	key := hash[:]
	block, err := aes.NewCipher(key)
	if err != nil {
		return "", err
	}
	aead, err := cipher.NewGCM(block)
	if err != nil {
		return "", err
	}
	ciphertext, err := base64.StdEncoding.DecodeString(encrypted_data)
	if err != nil {
		return "", err
	}
	nonceSize := aead.NonceSize()
	if len(ciphertext) < nonceSize {
		return "", err
	}
	nonce, ciphertext := ciphertext[:nonceSize], ciphertext[nonceSize:]
	plaintext, err := aead.Open(nil, nonce, ciphertext, nil)
	if err != nil {
		return "", err
	}
	return string(plaintext), nil
}

func GenerateSHA256(input string) string {
	hash := sha256.Sum256([]byte(input))
	return hex.EncodeToString(hash[:])
}

func GetCurrentUnixTime() int64 {
	return int64(time.Now().Unix())
}

func BuildFilter(filter map[string]string) (dto.Filter, error) {
	page, ok := filter["page"]
	if !ok {
		slog.Info("page query param not set")
	}

	pageSize, ok := filter["page_size"]
	if !ok {
		slog.Info("page_size query param not set")
	}

	p, err := strconv.Atoi(page)
	if err != nil || p <= 0 {
		p = 1
	}
	ps, err := strconv.Atoi(pageSize)
	if err != nil || ps <= 0 || ps > 100 {
		ps = 10
	}

	return dto.Filter{
		Page:     int64(p),
		Per_page: int64(ps),
		Search:   filter["search"],
	}, nil
}

func UploadFilesToCloudinary(ctx *fiber.Ctx, cloudinaryClient *cloudinary.Cloudinary, files []*multipart.FileHeader, folderName string) ([]string, error) {
	slog.Info("upload files to cloudinary", "folder name:", folderName)
	var fileURLs []string

	for _, fileHeader := range files {
		file, err := fileHeader.Open()
		if err != nil {
			slog.Error("Failed to open file", "filename", fileHeader.Filename, "error", err)
			return nil, errors.New(localization.ErrorInternalServerError.Code)
		}
		defer file.Close()

		key := time.Now().Format("20060102150405") + "_" + fileHeader.Filename

		// Upload to S3
		result, err := cloudinaryClient.Upload.Upload(ctx.Context(), file, uploader.UploadParams{
			Folder:   folderName,
			PublicID: key,
		})
		if err != nil {
			slog.Error("Failed to upload file to Cloudinary", "filename", fileHeader.Filename, "error", err)
			return nil, errors.New(localization.ErrorInternalServerError.Code)
		}

		url := result.SecureURL
		fileURLs = append(fileURLs, url)
	}

	return fileURLs, nil
}

func UploadFilesToS3(ctx *fiber.Ctx, s3Client *s3.Client, files []*multipart.FileHeader, bucketName string) ([]string, error) {

	var fileURLs []string

	for _, fileHeader := range files {
		file, err := fileHeader.Open()
		if err != nil {
			slog.Error("Failed to open file", "filename", fileHeader.Filename, "error", err)
			return nil, errors.New(localization.ErrorInternalServerError.Code)
		}
		defer file.Close()

		key := time.Now().Format("20060102150405") + "_" + fileHeader.Filename

		// Upload to S3
		_, err = s3Client.PutObject(ctx.Context(), &s3.PutObjectInput{
			Bucket:      &bucketName,
			Key:         &key,
			Body:        file,
			ContentType: &fileHeader.Header["Content-Type"][0],
		})
		if err != nil {
			slog.Error("Failed to upload file to S3", "filename", fileHeader.Filename, "error", err)
			return nil, errors.New(localization.ErrorInternalServerError.Code)
		}

		url := "https://" + bucketName + ".s3.amazonaws.com/" + key
		fileURLs = append(fileURLs, url)
	}

	return fileURLs, nil
}
