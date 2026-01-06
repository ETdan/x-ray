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
