package refreshtoken

import (
	"log/slog"
	"time"

	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/etdan/x-ray/internal/storage"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type RefreshTokenRepository struct {
	db *gorm.DB
}

// GetRefreshTokenByUserID implements storage.RefreshTokenRepository.
func (r RefreshTokenRepository) GetRefreshTokenByUserIDAndHash(userID string, hash string) (model.RefreshToken, error) {
	slog.Info("Fetching refresh token for user", "userID", userID)

	var token model.RefreshToken
	err := r.db.Where("user_id = ? AND revoked = false AND token_hash = ?", userID, hash).First(&token).Error
	if err != nil {
		slog.Error("No valid refresh token found", "userID", userID, "error", err)
	}
	return token, err
}

// RevokeAllTokensForUser implements storage.RefreshTokenRepository.
func (r RefreshTokenRepository) RevokeAllTokensForUser(userID uuid.UUID) error {
	slog.Info("Revoking all refresh tokens for user", "userID", userID.String())
	err := r.db.Model(&model.RefreshToken{}).Where("user_id = ? AND revoked = false", userID).Update("revoked", true).Error
	if err != nil {
		slog.Error("Failed to revoke all tokens", "userID", userID.String(), "error", err)
	}
	return err
}

// RevokeToken implements storage.RefreshTokenRepository.
func (r RefreshTokenRepository) RevokeToken(userID uuid.UUID, tokenHash string) error {
	slog.Info("Revoking refresh token", "userID", userID.String(), "tokenHash", tokenHash)
	err := r.db.Model(&model.RefreshToken{}).Where("user_id = ? AND token_hash = ? AND revoked = false", userID, tokenHash).Update("revoked", true).Error
	if err != nil {
		slog.Error("Failed to revoke token", "userID", userID.String(), "tokenHash", tokenHash, "error", err)
	}
	return err
}

// DeleteRefreshToken implements storage.RefreshTokenRepository.
func (r RefreshTokenRepository) DeleteRefreshToken(userID uuid.UUID, tokenHash string) error {
	slog.Info("Deleting refresh token", "userID", userID.String(), "tokenHash", tokenHash)
	err := r.db.Where("user_id = ? AND token_hash = ?", userID, tokenHash).Delete(&model.RefreshToken{}).Error
	if err != nil {
		slog.Error("Failed to delete token", "userID", userID.String(), "tokenHash", tokenHash, "error", err)
	}
	return err
}

// StoreRefreshTokenHash implements storage.RefreshTokenRepository.
func (r RefreshTokenRepository) StoreRefreshTokenHash(userID uuid.UUID, tokenHash string, expiration_duration string) error {
	slog.Info("Storing refresh token", "userID", userID.String(), "tokenHash", tokenHash, "expiration_duration", expiration_duration)
	duration, err := time.ParseDuration(expiration_duration)
	if err != nil {
		slog.Warn("Invalid expiration duration, using default", "expiration_duration", expiration_duration, "error", err)
		duration = 24 * time.Hour
	}

	token := model.RefreshToken{
		ID:        uuid.NewString(),
		UserID:    userID,
		TokenHash: tokenHash,
		ExpiresAt: time.Now().Add(duration),
		Revoked:   false,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}
	err = r.db.Create(&token).Error
	if err != nil {
		slog.Error("Failed to store token", "userID", userID.String(), "tokenHash", tokenHash, "error", err)
	}
	return err
}

// ValidateRefreshToken implements storage.RefreshTokenRepository.
func (r RefreshTokenRepository) ValidateRefreshToken(userID uuid.UUID, tokenHash string) (bool, error) {
	slog.Info("Validating refresh token", "userID", userID.String(), "tokenHash", tokenHash)
	var token model.RefreshToken
	err := r.db.Where("user_id = ? AND token_hash = ? AND revoked = false AND expires_at > ?", userID, tokenHash, time.Now()).First(&token).Error
	if err != nil {
		slog.Warn("Token validation failed", "userID", userID.String(), "tokenHash", tokenHash, "error", err)
		return false, err
	}
	slog.Info("Token is valid", "userID", userID.String(), "tokenHash", tokenHash)
	return true, nil
}

func NewRefreshTokenRepository(db *gorm.DB) storage.RefreshTokenRepository {
	return RefreshTokenRepository{
		db: db,
	}
}
