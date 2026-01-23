package user_storage

import (
	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/etdan/x-ray/internal/storage"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

type UserRepository struct {
	db *gorm.DB
}

// CreateUser implements [storage.UserRepository].
func (u UserRepository) CreateUser(ctx *fiber.Ctx, gc dto.GoogleIDTokenClaims) error {
	panic("unimplemented")
}

// FindUserByGoogleID implements [storage.UserRepository].
func (u UserRepository) FindUserByGoogleID(ctx *fiber.Ctx, googleID string) (model.User, error) {
	panic("unimplemented")
}

// FindUserBySub implements [storage.UserRepository].
func (u UserRepository) FindUserBySub(ctx *fiber.Ctx, sub string) (model.User, error) {
	panic("unimplemented")
}

// FindUserByUserID implements [storage.UserRepository].
func (u UserRepository) FindUserByUserID(ctx *fiber.Ctx, userID string) (model.User, error) {
	panic("unimplemented")
}

// GetUsersByPagination implements [storage.UserRepository].
func (u UserRepository) GetUsersByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.User], error) {
	panic("unimplemented")
}

func NewUserRepository(db *gorm.DB) storage.UserRepository {
	return UserRepository{
		db: db,
	}
}
