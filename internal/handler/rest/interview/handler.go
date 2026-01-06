package interview_handler

import (
	"log/slog"

	"github.com/etdan/x-ray/internal/constants/dto"
	port "github.com/etdan/x-ray/internal/constants/interface"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/etdan/x-ray/internal/service"
	"github.com/etdan/x-ray/utils"
	"github.com/gofiber/fiber/v2"
)

type interviewHandler struct {
	service service.InterviewService
}

// Interview implements port.UserHandler.
func (u *interviewHandler) CreateInterview(c *fiber.Ctx) {
	var req dto.CreateInterviewReq
	if err := c.BodyParser(&req); err != nil {
		slog.Error(err.Error())
		localization.SendErrorResponse(c, localization.ErrorBadRequest.Code)
		return
	}
	if req.Difficulty.IsValid() {
		slog.Info("invalid difficulty value")
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
	if err := u.service.CreateInterview(c, &req); err != nil {
		slog.Error("Failed to create interview", "error", err)
		localization.SendErrorResponse(c, err.Error())
		return
	}

	localization.SendSuccessResponse(c, localization.SuccessInterviewCreated.Code, nil)
}

// GetInterviewByCompanyID implements [port.InterviewHandler].
func (u *interviewHandler) GetInterviewByCompanyID(ctx *fiber.Ctx) {
	id := ctx.Params("company_id")
	if id == "" {
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
	interview, err := u.service.GetInterviewByCompanyID(ctx, id, filter)
	if err != nil {
		slog.Error("Failed to get interview by company ID", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessGetInterviewByCompanyID.Code, interview)
}

// GetInterviewByID implements [port.InterviewHandler].
func (u *interviewHandler) GetInterviewByID(ctx *fiber.Ctx) {
	id := ctx.Params("interview_id")
	if id == "" {
		slog.Error("interview_id is required")
		localization.SendErrorResponse(ctx, localization.ErrorBadRequest.Code)
		return
	}
	interview, err := u.service.GetInterviewByID(ctx, id)
	if err != nil {
		slog.Error("Failed to get interview by interview ID", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessGetInterviewByID.Code, interview)
}

// GetInterviewByUserID implements [port.InterviewHandler].
func (u *interviewHandler) GetInterviewByUserID(ctx *fiber.Ctx) {
	id := ctx.Params("user_id")
	if id == "" {
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
	interview, err := u.service.GetInterviewByUserID(ctx, id, filter)
	if err != nil {
		slog.Error("Failed to get interview by user ID", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessGetInterviewByUserID.Code, interview)
}

// GetInterviewsByPagination implements [port.InterviewHandler].
func (u *interviewHandler) GetInterviewsByPagination(ctx *fiber.Ctx) {
	q := ctx.Queries()

	filter, err := utils.BuildFilter(q)
	if err != nil {
		slog.Error("Failed to build filter", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	interviews, err := u.service.GetInterviewsByPagination(ctx, filter)
	if err != nil {
		slog.Error("Failed to get interviews by pagination", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessGetPaginatedInterviews.Code, interviews)
}

func NewInterviewHandler(service service.InterviewService) port.InterviewHandler {
	return &interviewHandler{
		service: service,
	}
}
