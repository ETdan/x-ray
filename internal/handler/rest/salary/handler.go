package salary_handler

import (
	"log/slog"

	"github.com/etdan/x-ray/internal/constants/dto"
	port "github.com/etdan/x-ray/internal/constants/interface"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/etdan/x-ray/internal/service"
	"github.com/etdan/x-ray/utils"
	"github.com/gofiber/fiber/v2"
)

type salaryHandler struct {
	service service.SalaryService
}

// GetSalariesByPagination retrieves salaries with pagination and filtering
//
//	@Summary		Get Salaries by Pagination
//	@Description	Retrieves a paginated list of salaries with optional filters
//	@Security		BearerAuth
//	@Tags			Salary
//	@Accept			json
//	@Produce		json
//	@Param			page	query		int													false	"Page number"		default(1)
//	@Param			limit	query		int													false	"Items per page"	default(10)
//	@Param			sort	query		string												false	"Sort field"
//	@Param			order	query		string												false	"Sort order (asc/desc)"
//	@Success		200		{object}	localization.StandardResponse{data=[]dto.SalaryRes}	"Salaries fetched successfully"
//	@Failure		400		{object}	localization.StandardResponse						"Invalid filter parameters"
//	@Failure		500		{object}	localization.StandardResponse						"Internal server error"
//	@Router			/salary [get]
//
// GetSalariesByPagination implements [port.SalaryHandler].
func (u *salaryHandler) GetSalariesByPagination(ctx *fiber.Ctx) {
	q := ctx.Queries()
	filter, err := utils.BuildFilter(q)
	if err != nil {
		slog.Error("Failed to build filter", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	salaries, err := u.service.GetSalariesByPagination(ctx, filter)
	if err != nil {
		slog.Error("Failed to get salaries by pagination", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessSalaryCreated.Code, salaries)
}

// GetSalaryByCompanyID retrieves all salaries for a specific company
//
//	@Summary		Get Salaries by Company ID
//	@Description	Retrieves all salary information for a specific company with pagination
//	@Tags			Salary
//	@Security		BearerAuth
//	@Accept			json
//	@Produce		json
//	@Param			company_id	path		string												true	"Company ID (UUID)"
//	@Param			page		query		int													false	"Page number"		default(1)
//	@Param			limit		query		int													false	"Items per page"	default(10)
//	@Param			sort		query		string												false	"Sort field"
//	@Param			order		query		string												false	"Sort order (asc/desc)"
//	@Success		200			{object}	localization.StandardResponse{data=[]dto.SalaryRes}	"Salaries fetched successfully"
//	@Failure		400			{object}	localization.StandardResponse						"Missing company_id or invalid filter parameters"
//	@Failure		500			{object}	localization.StandardResponse						"Internal server error"
//	@Router			/salary/company/{company_id} [get]
//
// GetSalaryByCompanyID implements [port.SalaryHandler].
func (u *salaryHandler) GetSalaryByCompanyID(ctx *fiber.Ctx) {
	companyID := ctx.Params("company_id")
	if companyID == "" {
		slog.Error("company_id is required")
		localization.SendErrorResponse(ctx, localization.ErrorBadRequest.Code)
		return
	}
	filter, err := utils.BuildFilter(ctx.Queries())
	if err != nil {
		slog.Error("Failed to build filter", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	salaries, err := u.service.GetSalaryByCompanyID(ctx, companyID, filter)
	if err != nil {
		slog.Error("Failed to get salaries by company ID", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessSalaryCreated.Code, salaries)
}

// GetSalaryByID retrieves a specific salary entry by ID
//
//	@Summary		Get Salary by ID
//	@Description	Retrieves detailed information about a specific salary entry
//	@Security		BearerAuth
//	@Tags			Salary
//	@Accept			json
//	@Produce		json
//	@Param			salary_id	path		string												true	"Salary ID (UUID)"
//	@Success		200			{object}	localization.StandardResponse{data=dto.SalaryRes}	"Salary fetched successfully"
//	@Failure		400			{object}	localization.StandardResponse						"Missing salary_id parameter"
//	@Failure		404			{object}	localization.StandardResponse						"Salary not found"
//	@Failure		500			{object}	localization.StandardResponse						"Internal server error"
//	@Router			/salary/{salary_id} [get]
//
// GetSalaryByID implements [port.SalaryHandler].
func (u *salaryHandler) GetSalaryByID(ctx *fiber.Ctx) {
	salaryID := ctx.Params("salary_id")
	if salaryID == "" {
		slog.Error("salary_id is required")
		localization.SendErrorResponse(ctx, localization.ErrorBadRequest.Code)
		return
	}
	salary, err := u.service.GetSalaryByID(ctx, salaryID)
	if err != nil {
		slog.Error("Failed to get salary by ID", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessSalaryCreated.Code, salary)
}

// GetSalaryByUserID retrieves all salaries submitted by a specific user
//
//	@Summary		Get Salaries by User ID
//	@Description	Retrieves all salary entries submitted by a specific user with pagination
//	@Security		BearerAuth
//	@Tags			Salary
//	@Accept			json
//	@Produce		json
//	@Param			user_id	path		string												true	"User ID (UUID)"
//	@Param			page	query		int													false	"Page number"		default(1)
//	@Param			limit	query		int													false	"Items per page"	default(10)
//	@Param			sort	query		string												false	"Sort field"
//	@Param			order	query		string												false	"Sort order (asc/desc)"
//	@Success		200		{object}	localization.StandardResponse{data=[]dto.SalaryRes}	"Salaries fetched successfully"
//	@Failure		400		{object}	localization.StandardResponse						"Missing user_id or invalid filter parameters"
//	@Failure		500		{object}	localization.StandardResponse						"Internal server error"
//	@Router			/salary/user/{user_id} [get]
//
// GetSalaryByUserID implements [port.SalaryHandler].
func (u *salaryHandler) GetSalaryByUserID(ctx *fiber.Ctx) {
	userID := ctx.Params("user_id")
	if userID == "" {
		slog.Error("user_id is required")
		localization.SendErrorResponse(ctx, localization.ErrorBadRequest.Code)
		return
	}
	filter, err := utils.BuildFilter(ctx.Queries())
	if err != nil {
		slog.Error("Failed to build filter", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}

	salaries, err := u.service.GetSalaryByUserID(ctx, userID, filter)
	if err != nil {
		slog.Error("Failed to get salaries by user ID", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessSalaryCreated.Code, salaries)
}

// CreateSalary creates a new salary entry
//
//	@Summary		Create Salary
//	@Description	Creates a new salary information entry for a company (requires authentication)
//	@Security		BearerAuth
//	@Tags			Salary
//	@Accept			json
//	@Produce		json
//	@Security		BearerAuth
//	@Param			salary	body		dto.CreateSalaryReq				true	"Salary details"
//	@Success		200		{object}	localization.StandardResponse	"Salary created successfully"
//	@Failure		400		{object}	localization.StandardResponse	"Invalid request body"
//	@Failure		401		{object}	localization.StandardResponse	"Unauthorized - user not authenticated"
//	@Failure		500		{object}	localization.StandardResponse	"Internal server error"
//	@Router			/salary [post]
//
// Salary implements port.UserHandler.
func (u *salaryHandler) CreateSalary(c *fiber.Ctx) {
	var req dto.CreateSalaryReq

	if err := c.BodyParser(&req); err != nil {
		slog.Error(err.Error())
		localization.SendErrorResponse(c, localization.ErrorBadRequest.Code)
		return
	}
	user_id, err := c.Locals("user_id").(string)
	if !err {
		slog.Error("user_id not found in context")
		localization.SendErrorResponse(c, localization.ErrorUserUnauthorized.Code)
		return
	}
	req.UserID = user_id
	if err := u.service.CreateSalary(c, &req); err != nil {
		slog.Error("Failed to create salary", "error", err)
		localization.SendErrorResponse(c, localization.ErrorCreateSalaryFailed.Code)
		return
	}
	localization.SendSuccessResponse(c, localization.SuccessSalaryCreated.Code, nil)
}

func NewSalaryHandler(service service.SalaryService) port.SalaryHandler {
	return &salaryHandler{
		service: service,
	}
}
