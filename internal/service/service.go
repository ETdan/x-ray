package service

import (
	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/gofiber/fiber/v2"
)

type OauthService interface {
	Create(dto.GoogleIDTokenClaims) (dto.LoginResponse, error)
	CreateAccessToken(user_id, hash string) (string, error)
}

type UserService interface {
	GetUserByGoogleID(ctx *fiber.Ctx, googleID string) (dto.UserRes, error)
	GetUserByID(ctx *fiber.Ctx, userID string) (dto.UserRes, error)
	GetUsersByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]dto.UserRes], error)
}

type CompanyService interface {
	CreateCompany(ctx *fiber.Ctx, req *dto.CreateCompanyReq) error
	GetCompanyByID(ctx *fiber.Ctx, companyID string) (dto.CompanyRes, error)
	GetCompaniesByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]dto.CompanyRes], error)
}

type ReviewService interface {
	CreateReview(ctx *fiber.Ctx, req *dto.CreateReviewReq) error
	GetReviewByID(ctx *fiber.Ctx, reviewID string) (dto.ReviewRes, error)
	GetReviewsByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.Review], error)
	GetReviewByCompanyID(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]dto.ReviewRes], error)
	GetReviewByUserID(ctx *fiber.Ctx, userID string, filter dto.Filter) (dto.PaginatedResponse[[]dto.ReviewRes], error)
}

type InterviewService interface {
	CreateInterview(ctx *fiber.Ctx, req *dto.CreateInterviewReq) error
	GetInterviewByID(ctx *fiber.Ctx, interviewID string) (dto.InterviewRes, error)
	GetInterviewsByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.Interview], error)
	GetInterviewByCompanyID(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]dto.InterviewRes], error)
	GetInterviewByUserID(ctx *fiber.Ctx, userID string, filter dto.Filter) (dto.PaginatedResponse[[]dto.InterviewRes], error)
}

type SalaryService interface {
	CreateSalary(ctx *fiber.Ctx, req *dto.CreateSalaryReq) error
	GetSalaryByID(ctx *fiber.Ctx, salaryID string) (dto.SalaryRes, error)
	GetSalariesByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]dto.SalaryRes], error)
	GetSalaryByCompanyID(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]dto.SalaryRes], error)
	GetSalaryByUserID(ctx *fiber.Ctx, userID string, filter dto.Filter) (dto.PaginatedResponse[[]dto.SalaryRes], error)
}
