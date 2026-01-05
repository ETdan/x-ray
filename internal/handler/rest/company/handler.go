package company_handler

import (
	"log/slog"

	"github.com/etdan/x-ray/internal/constants/dto"
	port "github.com/etdan/x-ray/internal/constants/interface"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/etdan/x-ray/internal/service"
	"github.com/etdan/x-ray/utils"
	"github.com/gofiber/fiber/v2"
)

type companyHandler struct {
	service service.CompanyService
}

// CreateCompany implements [port.CompanyHandler].
func (c *companyHandler) CreateCompany(ctx *fiber.Ctx) {
	var req dto.CreateCompanyReq
	if err := ctx.BodyParser(&req); err != nil {
		slog.Error(err.Error())
		localization.SendErrorResponse(ctx, localization.ErrorInvalidRequest.Code)
		return
	}
	form, err := ctx.MultipartForm()
	if err != nil {
		slog.Error("error parsing multipart form", "error", err)
		localization.SendErrorResponse(ctx, localization.ErrorInvalidRequest.Code)
		return
	}
	album := form.File["album"]
	if len(album) > 0 {
		req.Album = album
	}
	logo := form.File["logo"]
	if len(logo) > 0 {
		req.Logo = logo[0]
	}
	userID := ctx.Locals("user_id")
	if userID == nil {
		slog.Error("user_id not found in context")
		localization.SendErrorResponse(ctx, localization.ErrorUserUnauthorized.Code)
		return
	}
	req.UserID = userID.(string)

	if err := c.service.CreateCompany(ctx, &req); err != nil {
		slog.Error("Failed to create company", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessCompanyCreated.Code, nil)
}

// GetCompaniesByPagination implements [port.CompanyHandler].
func (c *companyHandler) GetCompaniesByPagination(ctx *fiber.Ctx) {
	q := ctx.Queries()

	filter, err := utils.BuildFilter(q)
	if err != nil {
		slog.Error("Failed to build filter", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}

	companies, err := c.service.GetCompaniesByPagination(ctx, filter)
	if err != nil {
		slog.Error("Failed to get companies by pagination", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessCompaniesFetched.Code, companies)
}

// GetCompanyByID implements [port.CompanyHandler].
func (c *companyHandler) GetCompanyByID(ctx *fiber.Ctx) {
	q := ctx.Queries()

	id, ok := q["company_id"]
	if !ok {
		slog.Error("company_id query param is required")
		localization.SendErrorResponse(ctx, localization.ErrorBadRequest.Code)
		return
	}

	company, err := c.service.GetCompanyByID(ctx, id)
	if err != nil {
		slog.Error("Failed to get company by ID", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessCompanyFetched.Code, company)
}

func NewCompanyHandler(service service.CompanyService) port.CompanyHandler {
	return &companyHandler{
		service: service,
	}
}
