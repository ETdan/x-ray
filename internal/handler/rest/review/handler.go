package review_handler

import (
	"log/slog"

	"github.com/etdan/x-ray/internal/constants/dto"
	port "github.com/etdan/x-ray/internal/constants/interface"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/etdan/x-ray/internal/service"
	"github.com/etdan/x-ray/utils"
	"github.com/gofiber/fiber/v2"
)

type reviewHandler struct {
	service service.ReviewService
}

// CreateReview creates a new company review
//
//	@Summary		Create Review
//	@Description	Creates a new review for a company (requires authentication)
//	@Tags			Review
//	@Accept			json
//	@Produce		json
//	@Security BearerToken
//	@Param			review	body		dto.CreateReviewReq				true	"Review details"
//	@Success		200		{object}	localization.StandardResponse	"Review created successfully"
//	@Failure		400		{object}	localization.StandardResponse	"Invalid request body"
//	@Failure		401		{object}	localization.StandardResponse	"Unauthorized - user not authenticated"
//	@Failure		500		{object}	localization.StandardResponse	"Internal server error"
//	@Router			/review [post]
//
// Review implements port.UserHandler.
func (u *reviewHandler) CreateReview(c *fiber.Ctx) {
	var req dto.CreateReviewReq
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
	if err := u.service.CreateReview(c, &req); err != nil {
		slog.Error("Failed to create review", "error", err)
		localization.SendErrorResponse(c, err.Error())
		return
	}
	localization.SendSuccessResponse(c, localization.SuccessReviewCreated.Code, nil)
}

// GetReviewByID retrieves a specific review by ID
//
//	@Summary		Get Review by ID
//	@Description	Retrieves detailed information about a specific review
//	@Tags			Review
//	@Security BearerToken
//	@Accept			json
//	@Produce		json
//	@Param			review_id	path		string												true	"Review ID (UUID)"
//	@Success		200			{object}	localization.StandardResponse{data=dto.ReviewRes}	"Review fetched successfully"
//	@Failure		400			{object}	localization.StandardResponse						"Missing review_id parameter"
//	@Failure		404			{object}	localization.StandardResponse						"Review not found"
//	@Failure		500			{object}	localization.StandardResponse						"Internal server error"
//	@Router			/review/{review_id} [get]
//
// GetReviewByID implements [port.ReviewHandler].
func (u *reviewHandler) GetReviewByID(ctx *fiber.Ctx) {
	reviewID := ctx.Params("review_id")
	if reviewID == "" {
		slog.Error("review_id is required")
		localization.SendErrorResponse(ctx, localization.ErrorBadRequest.Code)
		return
	}
	review, err := u.service.GetReviewByID(ctx, reviewID)
	if err != nil {
		slog.Error("Failed to get review by ID", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessReviewCreated.Code, review)
}

// GetReviewsByPagination retrieves reviews with pagination and filtering
//
//	@Summary		Get Reviews by Pagination
//	@Description	Retrieves a paginated list of reviews with optional filters
//	@Tags			Review
//	@Security BearerToken
//	@Accept			json
//	@Produce		json
//	@Param			page	query		int													false	"Page number"		default(1)
//	@Param			limit	query		int													false	"Items per page"	default(10)
//	@Param			sort	query		string												false	"Sort field"
//	@Param			order	query		string												false	"Sort order (asc/desc)"
//	@Success		200		{object}	localization.StandardResponse{data=[]dto.ReviewRes}	"Reviews fetched successfully"
//	@Failure		400		{object}	localization.StandardResponse						"Invalid filter parameters"
//	@Failure		500		{object}	localization.StandardResponse						"Internal server error"
//	@Router			/review [get]
//
// GetReviewsByPagination implements [port.ReviewHandler].
func (u *reviewHandler) GetReviewsByPagination(ctx *fiber.Ctx) {
	q := ctx.Queries()
	filter, err := utils.BuildFilter(q)
	if err != nil {
		slog.Error("Failed to build filter", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	reviews, err := u.service.GetReviewsByPagination(ctx, filter)
	if err != nil {
		slog.Error("Failed to get reviews by pagination", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessReviewCreated.Code, reviews)
}

// GetReviewByCompanyID retrieves all reviews for a specific company
//
//	@Summary		Get Reviews by Company ID
//	@Description	Retrieves all reviews for a specific company with pagination
//	@Tags			Review
//	@Security BearerToken
//	@Accept			json
//	@Produce		json
//	@Param			company_id	path		string												true	"Company ID (UUID)"
//	@Param			page		query		int													false	"Page number"		default(1)
//	@Param			limit		query		int													false	"Items per page"	default(10)
//	@Param			sort		query		string												false	"Sort field"
//	@Param			order		query		string												false	"Sort order (asc/desc)"
//	@Success		200			{object}	localization.StandardResponse{data=[]dto.ReviewRes}	"Reviews fetched successfully"
//	@Failure		400			{object}	localization.StandardResponse						"Missing company_id or invalid filter parameters"
//	@Failure		500			{object}	localization.StandardResponse						"Internal server error"
//	@Router			/review/company/{company_id} [get]
//
// GetReviewByCompanyID implements [port.ReviewHandler].
func (u *reviewHandler) GetReviewByCompanyID(ctx *fiber.Ctx) {
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
	reviews, err := u.service.GetReviewByCompanyID(ctx, companyID, filter)
	if err != nil {
		slog.Error("Failed to get reviews by company ID", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessReviewCreated.Code, reviews)
}

// GetReviewByUserID retrieves all reviews created by a specific user
//
//	@Summary		Get Reviews by User ID
//	@Description	Retrieves all reviews created by a specific user with pagination
//	@Tags			Review
//	@Security BearerToken
//	@Accept			json
//	@Produce		json
//	@Param			user_id	path		string												true	"User ID (UUID)"
//	@Param			page	query		int													false	"Page number"		default(1)
//	@Param			limit	query		int													false	"Items per page"	default(10)
//	@Param			sort	query		string												false	"Sort field"
//	@Param			order	query		string												false	"Sort order (asc/desc)"
//	@Success		200		{object}	localization.StandardResponse{data=[]dto.ReviewRes}	"Reviews fetched successfully"
//	@Failure		400		{object}	localization.StandardResponse						"Missing user_id or invalid filter parameters"
//	@Failure		500		{object}	localization.StandardResponse						"Internal server error"
//	@Router			/review/user/{user_id} [get]
//
// GetReviewByUserID implements [port.ReviewHandler].
func (u *reviewHandler) GetReviewByUserID(ctx *fiber.Ctx) {
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
	reviews, err := u.service.GetReviewByUserID(ctx, userID, filter)
	if err != nil {
		slog.Error("Failed to get reviews by user ID", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessReviewCreated.Code, reviews)
}

func NewReviewHandler(service service.ReviewService) port.ReviewHandler {
	return &reviewHandler{
		service: service,
	}
}
