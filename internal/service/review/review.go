package review

import (
	"fmt"
	"log/slog"

	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/etdan/x-ray/internal/service"
	"github.com/etdan/x-ray/internal/storage"
	"github.com/gofiber/fiber/v2"
)

type ReviewService struct {
	reviewRepo  storage.ReviewRepository
	companyRepo storage.CompanyRepository
	userRepo    storage.UserRepository
}

// CreateReview implements [service.ReviewService].
func (r *ReviewService) CreateReview(ctx *fiber.Ctx, req *dto.CreateReviewReq) error {
	userID := ctx.Locals("user_id")
	userIDStr, _ := userID.(string)

	if _, err := r.userRepo.FindUserByUserID(ctx, userIDStr); err != nil {
		return fmt.Errorf("%s", localization.ErrorFetchingUser.Code)
	}
	if _, err := r.companyRepo.GetCompanyByID(ctx, req.CompanyID); err != nil {
		return fmt.Errorf("%s", localization.ErrorCompanyNotFound.Code)
	}
	if err := r.reviewRepo.CreateReview(ctx, req); err != nil {
		return fmt.Errorf("%s", localization.ErrorCreateReviewFailed.Code)
	}
	return nil
}

// GetReviewByCompanyID implements [service.ReviewService].
func (r *ReviewService) GetReviewByCompanyID(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]dto.ReviewRes], error) {
	reviews, err := r.reviewRepo.GetReviewByCompanyID(ctx, companyID, filter)
	if err != nil {
		slog.Error("[GetReviewByCompanyID] error getting reviews for company", "companyID", companyID, "err", err)
		return dto.PaginatedResponse[[]dto.ReviewRes]{}, fmt.Errorf("%s", localization.ErrorFetchingReviews.Code)
	}
	reviewDto := MapListModelToListDTOReview(reviews.Data)
	return dto.PaginatedResponse[[]dto.ReviewRes]{
		Data: reviewDto,
		Meta: reviews.Meta,
	}, nil
}

// GetReviewByID implements [service.ReviewService].
func (r *ReviewService) GetReviewByID(ctx *fiber.Ctx, reviewID string) (dto.ReviewRes, error) {
	review, err := r.reviewRepo.GetReviewByID(ctx, reviewID)
	if err != nil {
		slog.Error("[GetReviewByID] error getting review by ID", "reviewID", reviewID, "err", err)
		return dto.ReviewRes{}, fmt.Errorf("%s", localization.ErrorFetchingReviews.Code)
	}
	res := MapListModelToListDTOReview([]model.Review{review})
	return res[0], nil
}

// GetReviewByUserID implements [service.ReviewService].
func (r *ReviewService) GetReviewByUserID(ctx *fiber.Ctx, userID string, filter dto.Filter) (dto.PaginatedResponse[[]dto.ReviewRes], error) {
	reviews, err := r.reviewRepo.GetReviewByUserID(ctx, userID, filter)
	if err != nil {
		slog.Error("[GetReviewByUserID] error getting reviews for user", "userID", userID, "err", err)
		return dto.PaginatedResponse[[]dto.ReviewRes]{}, fmt.Errorf("%s", localization.ErrorFetchingReviews.Code)
	}
	reviewDto := MapListModelToListDTOReview(reviews.Data)
	return dto.PaginatedResponse[[]dto.ReviewRes]{
		Data: reviewDto,
		Meta: reviews.Meta,
	}, nil
}

// GetReviewsByPagination implements [service.ReviewService].
func (r *ReviewService) GetReviewsByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.Review], error) {
	reviews, err := r.reviewRepo.FindByPagination(ctx, filter)
	if err != nil {
		slog.Error("[GetReviewsByPagination] error paginating reviews", "err", err)
		return dto.PaginatedResponse[[]model.Review]{}, fmt.Errorf("%s", localization.ErrorFetchingReviews.Code)
	}
	return reviews, nil
}

func NewReviewService(reviewRepo storage.ReviewRepository, companyRepo storage.CompanyRepository, userRepo storage.UserRepository) service.ReviewService {
	return &ReviewService{
		reviewRepo:  reviewRepo,
		companyRepo: companyRepo,
		userRepo:    userRepo,
	}
}
