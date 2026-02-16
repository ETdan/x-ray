package storage

import (
	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

// below are repository related to authentication and user management
type OauthRepository interface {
	FindUserBySub(sub string) (model.User, error)
	CreateUser(gc dto.GoogleIDTokenClaims) (uuid.UUID, error)
}
type UserRepository interface {
	FindUserByUserID(ctx *fiber.Ctx, userID string) (model.User, error)
	FindUserByGoogleID(ctx *fiber.Ctx, googleID string) (model.User, error)
	GetUsersByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.User], error)
	CreateUser(ctx *fiber.Ctx, gc dto.GoogleIDTokenClaims) error
}
type RefreshTokenRepository interface {
	StoreRefreshTokenHash(userID uuid.UUID, tokenHash, expiration_duration string) error
	ValidateRefreshToken(userID uuid.UUID, refreshToken string) (bool, error)
	DeleteRefreshToken(userID uuid.UUID, tokenHash string) error
	RevokeAllTokensForUser(userID uuid.UUID) error
	RevokeToken(userID uuid.UUID, tokenHash string) error
	GetRefreshTokenByUserIDAndHash(userID string, hash string) (model.RefreshToken, error)
}

// below are repository related to business logic
type CompanyRepository interface {
	GetCompanyByName(ctx *fiber.Ctx, name string) (model.Company, error)
	GetCompanyByID(ctx *fiber.Ctx, companyID string) (model.Company, error)
	CreateCompany(ctx *fiber.Ctx, company *dto.CreateCompanyRepoReq) error
	FindByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.Company], error)
}

type InterviewRepository interface {
	CreateInterview(ctx *fiber.Ctx, interview *dto.CreateInterviewReq) error
	FindByPagination(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Interview], error)
	GetInterviewByCompanyID(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Interview], error)
	GetInterviewByID(ctx *fiber.Ctx, interviewID string) (model.Interview, error)
	GetInterviewByUserID(ctx *fiber.Ctx, userID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Interview], error)

	GetInterviewsByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.Interview], error)
}

type ReviewRepository interface {
	CreateReview(ctx *fiber.Ctx, review *dto.CreateReviewReq) error
	FindByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.Review], error)
	GetReviewByCompanyID(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Review], error)
	GetReviewByID(ctx *fiber.Ctx, reviewID string) (model.Review, error)
	GetReviewByUserID(ctx *fiber.Ctx, userID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Review], error)
}

type SalaryRepository interface {
	CreateSalary(ctx *fiber.Ctx, salary *dto.CreateSalaryReq) error
	FindByPagination(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Salary], error)
	GetSalariesByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.Salary], error)
	GetSalaryByCompanyID(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Salary], error)
	GetSalaryByID(ctx *fiber.Ctx, salaryID string) (model.Salary, error)
	GetSalaryByUserID(ctx *fiber.Ctx, userID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Salary], error)
}
