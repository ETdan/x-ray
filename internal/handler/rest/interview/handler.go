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

// CreateInterview creates a new interview experience entry
//
//	@Summary		Create Interview
//	@Description	Creates a new interview experience for a company (requires authentication)
//	@Tags			Interview
//	@Accept			json
//	@Produce		json
//	@Security BearerToken
//	@Param			interview	body		dto.CreateInterviewReq			true	"Interview details (difficulty: 1=Easy, 2=Medium, 3=Hard, 4=VeryHard)"
//	@Success		200			{object}	localization.StandardResponse	"Interview created successfully"
//	@Failure		400			{object}	localization.StandardResponse		"Invalid request body or difficulty value"
//	@Failure		401			{object}	localization.StandardResponse		"Unauthorized - user not authenticated"
//	@Failure		500			{object}	localization.StandardResponse		"Internal server error"
//	@Router			/interview [post]
//
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

// GetInterviewByCompanyID retrieves all interviews for a specific company
//
//	@Summary		Get Interviews by Company ID
//	@Description	Retrieves all interview experiences for a specific company with pagination
//	@Tags			Interview
//	@Security BearerToken
//	@Accept			json
//	@Produce		json
//	@Param			company_id	path		string													true	"Company ID (UUID)"
//	@Param			page		query		int														false	"Page number"		default(1)
//	@Param			limit		query		int														false	"Items per page"	default(10)
//	@Param			sort		query		string													false	"Sort field"
//	@Param			order		query		string													false	"Sort order (asc/desc)"
//	@Success		200			{object}	localization.StandardResponse{data=[]dto.InterviewRes}	"Interviews fetched successfully"
//	@Failure		400			{object}	localization.StandardResponse								"Missing company_id or invalid filter parameters"
//	@Failure		500			{object}	localization.StandardResponse								"Internal server error"
//	@Router			/interview/company/{company_id} [get]
//
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

// GetInterviewByID retrieves a specific interview by ID
//
//	@Summary		Get Interview by ID
//	@Description	Retrieves detailed information about a specific interview experience
//	@Tags			Interview
//	@Security BearerToken
//	@Accept			json
//	@Produce		json
//	@Param			interview_id	path		string												true	"Interview ID (UUID)"
//	@Success		200				{object}	localization.StandardResponse{data=dto.InterviewRes}	"Interview fetched successfully"
//	@Failure		400				{object}	localization.StandardResponse							"Missing interview_id parameter"
//	@Failure		404				{object}	localization.StandardResponse							"Interview not found"
//	@Failure		500				{object}	localization.StandardResponse							"Internal server error"
//	@Router			/interview/{interview_id} [get]
//
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

// GetInterviewByUserID retrieves all interviews submitted by a specific user
//
//	@Summary		Get Interviews by User ID
//	@Description	Retrieves all interview experiences submitted by a specific user with pagination
//	@Tags			Interview
//	@Security BearerToken
//	@Accept			json
//	@Produce		json
//	@Param			user_id	path		string													true	"User ID (UUID)"
//	@Param			page	query		int														false	"Page number"		default(1)
//	@Param			limit	query		int														false	"Items per page"	default(10)
//	@Param			sort	query		string													false	"Sort field"
//	@Param			order	query		string													false	"Sort order (asc/desc)"
//	@Success		200		{object}	localization.StandardResponse{data=[]dto.InterviewRes}	"Interviews fetched successfully"
//	@Failure		400		{object}	localization.StandardResponse								"Missing user_id or invalid filter parameters"
//	@Failure		500		{object}	localization.StandardResponse								"Internal server error"
//	@Router			/interview/user/{user_id} [get]
//
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

// GetInterviewsByPagination retrieves interviews with pagination and filtering
//
//	@Summary		Get Interviews by Pagination
//	@Description	Retrieves a paginated list of interviews with optional filters
//	@Tags			Interview
//	@Security BearerToken
//	@Accept			json
//	@Produce		json
//	@Param			page	query		int														false	"Page number"		default(1)
//	@Param			limit	query		int														false	"Items per page"	default(10)
//	@Param			sort	query		string													false	"Sort field"
//	@Param			order	query		string													false	"Sort order (asc/desc)"
//	@Success		200		{object}	localization.StandardResponse{data=[]dto.InterviewRes}	"Interviews fetched successfully"
//	@Failure		400		{object}	localization.StandardResponse								"Invalid filter parameters"
//	@Failure		500		{object}	localization.StandardResponse								"Internal server error"
//	@Router			/interview [get]
//
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
