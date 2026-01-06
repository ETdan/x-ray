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
