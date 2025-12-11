package port

import "github.com/gofiber/fiber/v2"

type OauthHandler interface {
	Login(ctx *fiber.Ctx)
	Callback(ctx *fiber.Ctx)
	RefreshToken(ctx *fiber.Ctx)
}

type UserHandler interface {
	GetUserByID(ctx *fiber.Ctx)
	GetUserByGoogleID(ctx *fiber.Ctx)
	GetUsersByPagination(ctx *fiber.Ctx)
}

type CompanyHandler interface {
	CreateCompany(ctx *fiber.Ctx)
	GetCompanyByID(ctx *fiber.Ctx)
	GetCompaniesByPagination(ctx *fiber.Ctx)
}
type ReviewHandler interface {
	CreateReview(ctx *fiber.Ctx)
	GetReviewByID(ctx *fiber.Ctx)
	GetReviewsByPagination(ctx *fiber.Ctx)
	GetReviewByCompanyID(ctx *fiber.Ctx)
	GetReviewByUserID(ctx *fiber.Ctx)
}
type InterviewHandler interface {
	CreateInterview(ctx *fiber.Ctx)
	GetInterviewByID(ctx *fiber.Ctx)
	GetInterviewsByPagination(ctx *fiber.Ctx)
	GetInterviewByCompanyID(ctx *fiber.Ctx)
	GetInterviewByUserID(ctx *fiber.Ctx)
}
type SalaryHandler interface {
	CreateSalary(ctx *fiber.Ctx)
	GetSalaryByID(ctx *fiber.Ctx)
	GetSalariesByPagination(ctx *fiber.Ctx)
	GetSalaryByCompanyID(ctx *fiber.Ctx)
	GetSalaryByUserID(ctx *fiber.Ctx)
}
