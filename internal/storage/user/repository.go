package user_storage

import (
	"errors"
	"log/slog"

	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/localization"
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
	slog.Info("find user by google id repository", "google_id:", googleID)
	var user model.User
	res := u.db.Where("google_id = ?", googleID).First(&user)
	if res.Error != nil {
		slog.Error("Failed to fetch user by google id", slog.String("google_id", googleID), slog.Any("error", res.Error))
		return model.User{}, errors.New(localization.ErrorRecordNotFound.Code)
	}
	slog.Info("User fetched by google id", slog.String("google_id", googleID))
	return user, nil
}

// FindUserByUserID implements [storage.UserRepository].
func (u UserRepository) FindUserByUserID(ctx *fiber.Ctx, userID string) (model.User, error) {
	slog.Info("find user by user id repository", "userID:", userID)
	var user model.User
	res := u.db.Where("id ?", userID).First(&user)
	if res.Error != nil {
		slog.Error("Failed to fetch user by user id", slog.String("userID", userID), slog.Any("error", res.Error))
		return model.User{}, errors.New(localization.ErrorRecordNotFound.Code)
	}
	slog.Info("User fetched by user id", slog.String("userID", userID))
	return user, nil
}

// GetUsersByPagination implements [storage.UserRepository].
func (u UserRepository) GetUsersByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.User], error) {
	slog.Info("get users by pagination repository", "filter:", filter)
	var total int64
	var users []model.User
	countRes := u.db.Model(&model.User{}).Where(
		"name ILIKE ? OR email ILIKE ?", "%"+filter.Search+"%", "%"+filter.Search+"%",
	).Count(&total)

	if countRes.Error != nil {
		slog.Error("Failed to count users for pagination", slog.Any("error", countRes.Error), slog.Any("filter", filter))
		return dto.PaginatedResponse[[]model.User]{}, countRes.Error
	}

	totalPage := (total + int64(filter.Per_page) - 1) / int64(filter.Per_page)

	if filter.Page*filter.Per_page > total {
		filter.Page = 1
		filter.Per_page = 10
		slog.Warn("Requested page exceeds total pages, resetting to default pagination", slog.Any("filter", filter), slog.Int64("total", total))

	}
	offset := int((filter.Page - 1) * filter.Per_page)

	res := u.db.Where(
		"name ILIKE ? OR email ILIKE ?", "%"+filter.Search+"%", "%"+filter.Search+"%",
	).Limit(int(filter.Per_page)).Offset(offset).Find(&users)

	if res.Error != nil {
		slog.Error("Failed to fetch users for pagination", slog.Any("error", res.Error), slog.Any("filter", filter))
		return dto.PaginatedResponse[[]model.User]{}, res.Error
	}

	slog.Info("Users fetched for pagination", slog.Any("filter", filter), slog.Int64("total", total), slog.Int("fetched", len(users)))

	return dto.PaginatedResponse[[]model.User]{
		Data: users,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  totalPage,
		},
	}, nil
}

func NewUserRepository(db *gorm.DB) storage.UserRepository {
	return UserRepository{
		db: db,
	}
}
