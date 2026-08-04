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
type CompanyListResponse struct {
	Data []dto.CompanyRes `json:"data"`
	Meta dto.MetaData     `json:"meta"`
}

// CreateCompany creates a new company with logo and album images
//
//	@Summary		Create Company
//	@Description	Creates a new company with details, logo, and album images (multipart form data)
//	@Tags			Company
//	@Accept			multipart/form-data
//	@Produce		json
//	@Security BearerToken
//	@Param			name			formData	string							true	"Company name"
//	@Param			website			formData	string							false	"Company website URL"
//	@Param			industry		formData	string							false	"Industry type"
//	@Param			size			formData	string							false	"Company size"
//	@Param			headquarters	formData	string							false	"Headquarters location"
//	@Param			description		formData	string							false	"Company description"
//	@Param			logo			formData	file							false	"Company logo image"
//	@Param			album			formData	file							false	"Company album images (multiple files)"
//	@Success		200				{object}	localization.StandardResponse	"Company created successfully"
//	@Failure		400				{object}	localization.StandardResponse	"Invalid request body or form data"
//	@Failure		401				{object}	localization.StandardResponse	"Unauthorized - user not authenticated"
//	@Failure		500				{object}	localization.StandardResponse	"Internal server error"
//	@Router			/company [post]
//
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

// GetCompaniesByPagination retrieves companies with pagination and filtering
//
//	@Summary		Get Companies by Pagination
//	@Description	Retrieves a paginated list of companies with optional filters
//	@Tags			Company
//	@Accept			json
//	@Produce		json
//	@Security BearerToken
//	@Param			page	query		int														false	"Page number"		default(1)
//	@Param			limit	query		int														false	"Items per page"	default(10)
//	@Param			sort	query		string													false	"Sort field"
//	@Param			order	query		string													false	"Sort order (asc/desc)"
//	@Success		200		{object}	localization.StandardResponse{data=CompanyListResponse}	"Companies fetched successfully"
//	@Failure		400		{object}	localization.StandardResponse							"Invalid filter parameters"
//	@Failure		500		{object}	localization.StandardResponse							"Internal server error"
//	@Router			/company [get]
//
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
	localization.SendSuccessResponse(ctx, localization.SuccessCompaniesFetched.Code, CompanyListResponse{
		Data: companies.Data,
		Meta: companies.Meta,
	})
}

// GetCompanyByID retrieves a specific company by ID
//
//	@Summary		Get Company by ID
//	@Description	Retrieves detailed information about a specific company
//	@Tags			Company
//	@Accept			json
//	@Produce		json
//	@Security BearerToken
//	@Param			id	path	string	true	"Company ID (UUID)"
//	@Success		200	{object}	localization.StandardResponse{data=dto.CompanyRes}	"Company fetched successfully"
//	@Failure		400	{object}	localization.StandardResponse	"Missing or invalid company id path parameter"
//	@Failure		404	{object}	localization.StandardResponse	"Company not found"
//	@Failure		500	{object}	localization.StandardResponse	"Internal server error"
//	@Router		/company/{id} [get]
//
// GetCompanyByID implements [port.CompanyHandler].
func (c *companyHandler) GetCompanyByID(ctx *fiber.Ctx) {
	id := ctx.Params("id")
	if id == "" {
		slog.Error("company id path param is required")
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
