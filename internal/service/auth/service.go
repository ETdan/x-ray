package auth_service

import (
	"errors"
	"log/slog"

	"github.com/etdan/x-ray/config"
	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/etdan/x-ray/internal/service"
	"github.com/etdan/x-ray/internal/service/auth/core"
	repository "github.com/etdan/x-ray/internal/storage"
	"github.com/google/uuid"
)

type AuthService struct {
	repo      repository.OauthRepository
	tokenRepo repository.RefreshTokenRepository
	cfg       config.Config
}

// CreateAccessToken implements service.OauthService.
func (a AuthService) CreateAccessToken(userID, hash string) (string, error) {
	slog.Info("create access token service", "userID:", userID, "hash", hash)

	if _, err := a.tokenRepo.GetRefreshTokenByUserIDAndHash(userID, hash); err != nil {
		slog.Info("Existing refresh token not found for user", "userID:", userID, " hash:", hash)
		return "", errors.New(localization.ErrorRefreshTokenNotFound.Code)
	}

	slog.Info("Creating new Access token for user", "userID:", userID, " hash:", hash)
	accessToken, err := core.GenerateAccessToken(userID, a.cfg.JWTSecret, a.cfg.JWTExpireDuration)
	if err != nil {
		slog.Info("error while generating access token", err)
		return "", errors.New(localization.ErrorGeneratingAccessToken.Code)
	}
	return accessToken, nil
}

// Create implements service.UserService.
func (a AuthService) Create(gc dto.GoogleIDTokenClaims) (dto.LoginResponse, error) {
	slog.Info("create user service", "claims:", gc)
	existingUser, err := a.repo.FindUserBySub(gc.Subject)
	if err != nil {
		if err.Error() != localization.ErrorRecordNotFound.Message {
			slog.Info("error while fetching user", err)
			return dto.LoginResponse{}, errors.New(localization.ErrorFetchingUser.Code)
		}
		slog.Warn("while fetching user", err)
	}
	var user_id uuid.UUID
	if existingUser.ID != uuid.Nil {
		user_id = existingUser.ID
		slog.Info("user already exists, generating tokens", "userID", existingUser.ID.String())
	} else {
		user_id, err = a.repo.CreateUser(gc)
		if err != nil {
			slog.Info("error while creating user", err)
			return dto.LoginResponse{}, errors.New(localization.ErrorCreatingUser.Code)
		}
	}

	accessToken, err := core.GenerateAccessToken(user_id.String(), a.cfg.JWTSecret, a.cfg.JWTExpireDuration)
	if err != nil {
		slog.Info("error while generating access accessToken", err)
		return dto.LoginResponse{}, errors.New(localization.ErrorGeneratingAccessToken.Code)
	}

	refreshToken, hash := core.GenerateRefreshToken(user_id.String(), a.cfg.JWTSecret, a.cfg.JWTExpireDuration)
	if err := a.tokenRepo.StoreRefreshTokenHash(user_id, hash, a.cfg.JWTExpireDuration); err != nil {
		slog.Info("error while storing refresh token", err)
	}

	response := dto.LoginResponse{
		AccessToken:  accessToken,
		RefreshToken: refreshToken,
	}
	return response, nil
}

func NewAuthService(repo repository.OauthRepository, tokenRepo repository.RefreshTokenRepository, cfg config.Config) service.OauthService {
	return AuthService{
		repo:      repo,
		tokenRepo: tokenRepo,
		cfg:       cfg,
	}
}
