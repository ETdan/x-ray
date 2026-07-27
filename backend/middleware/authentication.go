package middleware

import (
	"encoding/json"
	"errors"
	"fmt"
	"log/slog"
	"strings"

	"github.com/etdan/x-ray/config"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/etdan/x-ray/utils"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
)

type AuthMiddleware struct {
	cfg config.Config
}

type RefreshTokenBody struct {
	UserID    string `json:"user_id"`
	Hash      string `json:"hash"`
	ExpiresIn int64  `json:"exp"`
}

type TokenBody struct {
	UserID    string `json:"user_id"`
	Role      string `json:"role"`
	ExpiresIn int64  `json:"expires_in"`
}

func (a *AuthMiddleware) Authentication(c *fiber.Ctx) error {
	authHeader := c.Get("Authorization")

	if authHeader == "" {
		c.Status(fiber.StatusForbidden).JSON(fiber.Map{
			"error": "missing or malformed token",
		})
		return errors.New("missing or malformed token")
	}
	if strings.ToUpper(authHeader[:7]) != "BEARER " {
		c.Status(fiber.StatusForbidden).JSON(fiber.Map{
			"error": "missing or malformed token",
		})
		return errors.New("missing or malformed token")
	}

	token, err := a.validateToken(authHeader[7:])
	if err != nil {
		c.Status(fiber.StatusForbidden).JSON(fiber.Map{
			"error": fmt.Sprintf("invalid or expired token: %v", err),
		})
		return err
	}

	decrepted, err := utils.DecryptData(token, a.cfg.JWTSecret)
	if err != nil {
		c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "internal server error",
		})
	}

	var body TokenBody
	if err := json.Unmarshal([]byte(decrepted), &body); err != nil {
		c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"error": "invalid payload body passed",
		})
		return nil
	}

	if body.ExpiresIn < utils.GetCurrentUnixTime() {
		c.Status(fiber.StatusForbidden).JSON(fiber.Map{
			"error": localization.ErrorUserUnauthorized.Code,
		})
		return errors.New(localization.ErrorUserUnauthorized.Code)
	}

	c.Locals("user_id", body.UserID)
	c.Locals("role", body.Role)
	c.Locals("expires_in", body.ExpiresIn)
	return c.Next()
}

func (a *AuthMiddleware) AuthenticationRefreshToken(c *fiber.Ctx) error {
	authHeader := c.Get("Authorization")

	if authHeader == "" {
		c.Status(fiber.StatusForbidden).JSON(fiber.Map{
			"error": "missing or malformed token",
		})
		return errors.New("missing or malformed token")
	}
	if strings.ToUpper(authHeader[:7]) != "BEARER " {
		c.Status(fiber.StatusForbidden).JSON(fiber.Map{
			"error": "missing or malformed token",
		})
		return errors.New("missing or malformed token")
	}

	decrepted, err := utils.DecryptData(authHeader[7:], a.cfg.JWTSecret)
	if err != nil {
		c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "internal server error",
		})
	}

	var body RefreshTokenBody
	if err := json.Unmarshal([]byte(decrepted), &body); err != nil {
		c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"error": "invalid payload body passed",
		})
		return nil
	}

	if body.ExpiresIn < utils.GetCurrentUnixTime() {
		c.Status(fiber.StatusForbidden).JSON(fiber.Map{
			"error": localization.ErrorUserUnauthorized.Code,
		})
		return errors.New(localization.ErrorUserUnauthorized.Code)
	}

	c.Locals("user_id", body.UserID)
	c.Locals("hash", body.Hash)
	c.Locals("expires_in", body.ExpiresIn)
	return c.Next()
}

func (a *AuthMiddleware) validateToken(tokenString string) (string, error) {
	jwtSecret := []byte(a.cfg.JWTSecret)

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			slog.Error("unexpected signing method used")
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return jwtSecret, nil
	})

	if err != nil || !token.Valid {
		slog.Error("invalid or expired token: %v", err)
		return "", errors.New(localization.ErrorUserUnauthorized.Code)
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		slog.Error("failed to cast to map claims")
		return "", errors.New(localization.ErrorUserUnauthorized.Code)
	}

	data, ok := claims["data"].(string)
	if !ok || data == "" {
		slog.Error("invalid token or data not present")
		return "", errors.New(localization.ErrorUserUnauthorized.Code)
	}

	return data, nil
}

func NewAuthMiddleware(cfg config.Config) AuthMiddleware {
	return AuthMiddleware{
		cfg: cfg,
	}
}
