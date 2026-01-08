package core

import (
	"encoding/json"
	"log/slog"
	"time"

	"github.com/etdan/x-ray/utils"
	"github.com/golang-jwt/jwt/v4"
)

func GenerateAccessToken(user_id, secret, expire_duration string) (string, error) {
	duration, err := time.ParseDuration(expire_duration)
	if err != nil {
		return "", err
	}
	attributes := map[string]interface{}{
		"user_id":    user_id,
		"role":       "user",
		"expires_in": time.Now().Add(time.Hour * duration).Unix(),
	}

	marshaled, err := json.Marshal(attributes)
	if err != nil {
		return "", err
	}
	encrypted, err := utils.EncryptData(string(marshaled), secret)
	if err != nil {
		slog.Error("error while encrypting token data", err)
		return "", err
	}

	claims := jwt.MapClaims{
		"data": encrypted,
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString([]byte(secret))
}

func GenerateRefreshToken(user_id, secret, expire_duration string) (string, string) {
	// Generate a SHA256 hash from sub and current time
	duration, err := time.ParseDuration(expire_duration)
	if err != nil {
		slog.Error("error while parsing duration for refresh token", err)
		return "", ""
	}

	hash := utils.GenerateSHA256(time.Now().String())
	attributes := map[string]interface{}{
		"user_id": user_id,
		"hash":    hash,
		"exp":     time.Now().Add(time.Hour * duration).Unix(),
	}

	m, err := json.Marshal(attributes)
	if err != nil {
		slog.Error("error while marshaling refresh token data", err)
		return "", ""
	}

	// Encrypt the hash using a secret (for example, use sub as key for demo)
	encrypted, err := utils.EncryptData(string(m), secret)
	if err != nil {
		slog.Error("error while encrypting refresh token", err)
		return "", ""
	}

	return string(encrypted), hash
}
