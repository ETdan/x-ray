package auth_storage

import (
	"log/slog"
	"time"

	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/etdan/x-ray/internal/storage"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type AuthRepository struct {
	db *gorm.DB
}

// CreateUser implements storage.UserRepository.
func (a AuthRepository) CreateUser(gc dto.GoogleIDTokenClaims) (uuid.UUID, error) {
	slog.Info("create user repository", "google claim:", gc)
	uuid := uuid.New()
	tx := a.db.Create(model.User{
		ID:        uuid,
		GoogleID:  gc.Subject,
		Email:     gc.Email,
		CreatedAt: time.Now().Unix(),
		UpdatedAt: time.Now().Unix(),
		LastLogin: time.Now().Unix(),
	})

	if tx.Error != nil {
		slog.Info("error creating user:", tx.Error)
	}
	return uuid, tx.Error
}

// FindUserBySub implements storage.UserRepository.
func (a AuthRepository) FindUserBySub(sub string) (model.User, error) {
	slog.Info("user lookup repository by google sub:", sub)
	var user model.User
	err := a.db.Where(model.User{GoogleID: sub}).First(&user).Error
	if err != nil {
		slog.Info("user lookup for failed:", sub)
	}
	return user, err
}

func NewAuthRepository(db *gorm.DB) storage.OauthRepository {
	return AuthRepository{
		db: db,
	}
}
