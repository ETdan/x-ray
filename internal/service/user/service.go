package user_service

import (
	"log/slog"

	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/service"
	"github.com/etdan/x-ray/internal/storage"
	"github.com/gofiber/fiber/v2"
)

type UserService struct {
	repo          storage.UserRepository
	companyRepo   storage.CompanyRepository
	interviewRepo storage.InterviewRepository
	reviewRepo    storage.ReviewRepository
	salaryRepo    storage.SalaryRepository
}

// GetUserByGoogleID implements [service.UserService].
func (u *UserService) GetUserByGoogleID(ctx *fiber.Ctx, googleID string) (dto.UserRes, error) {
	user, err := u.repo.FindUserByGoogleID(ctx, googleID)
	if err != nil {
		slog.Error("[GetUserByGoogleID] error finding user by GoogleID", "googleID", googleID, "err", err)
		return dto.UserRes{}, err
	}
	return dto.UserRes{
		ID: user.ID,
		// GoogleID:  user.GoogleID,
		Email:     user.Email,
		Name:      user.Name,
		AvatarURL: user.AvatarURL,
		CreatedAt: user.CreatedAt,
		UpdatedAt: user.UpdatedAt,
		LastLogin: user.LastLogin,
		Position:  user.Position,
	}, nil
}

// GetUserByID implements [service.UserService].
func (u *UserService) GetUserByID(ctx *fiber.Ctx, userID string) (dto.UserRes, error) {
	user, err := u.repo.FindUserByUserID(ctx, userID)
	if err != nil {
		slog.Error("[GetUserByID] error finding user by ID", "userID", userID, "err", err)
		return dto.UserRes{}, err
	}
	return dto.UserRes{
		ID: user.ID,
		// GoogleID:  user.GoogleID,
		Email:     user.Email,
		Name:      user.Name,
		AvatarURL: user.AvatarURL,
		CreatedAt: user.CreatedAt,
		UpdatedAt: user.UpdatedAt,
		LastLogin: user.LastLogin,
		Position:  user.Position,
	}, nil
}

// GetUsersByPagination implements [service.UserService].
func (u *UserService) GetUsersByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]dto.UserRes], error) {
	users, err := u.repo.GetUsersByPagination(ctx, filter)
	if err != nil {
		slog.Error("[GetUsersByPagination] error paginating users", "err", err)
		return dto.PaginatedResponse[[]dto.UserRes]{}, err
	}
	usersDto := MapListModelToListDTOUser(users.Data)
	res := dto.PaginatedResponse[[]dto.UserRes]{
		Data: usersDto,
		Meta: users.Meta,
	}
	return res, nil
}

func NewUserService(repo storage.UserRepository, companyRepo storage.CompanyRepository, interviewRepo storage.InterviewRepository) service.UserService {
	return &UserService{
		repo:          repo,
		companyRepo:   companyRepo,
		interviewRepo: interviewRepo,
	}
}
