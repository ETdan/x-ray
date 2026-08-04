package review_storage

import (
	"log/slog"
	"time"

	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/etdan/x-ray/internal/storage"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type ReviewRepository struct {
	db *gorm.DB
}

// CreateReview implements [storage.ReviewRepository].
func (r *ReviewRepository) CreateReview(ctx *fiber.Ctx, review *dto.CreateReviewReq) error {
	slog.Info("create review repository", "review:", review)
	id := uuid.New()

	userID, err := uuid.Parse(review.UserID)
	if err != nil {
		slog.Error("Invalid user id", slog.String("user_id", review.UserID), slog.Any("error", err))
		return err
	}
	companyID, err := uuid.Parse(review.CompanyID)
	if err != nil {
		slog.Error("Invalid company id", slog.String("company_id", review.CompanyID), slog.Any("error", err))
		return err
	}
	res := r.db.Create(&model.Review{
		ID:              id,
		UserID:          userID,
		CompanyID:       companyID,
		Pro:             review.Pro,
		Con:             review.Con,
		CEOApproval:     review.CEOApproval,
		Recommend:       review.Recommend,
		BusinessOutlook: review.BusinessOutlook,
		WorkLifeBalance: review.WorkLifeBalance,
		Compensation:    review.Compensation,
		Benefit:         review.Benefit,
		StarRating:      review.StarRating,
		CreatedAT:       time.Now(),
	})
	if res.Error != nil {
		slog.Error("Failed to create review", slog.Any("error", res.Error), slog.Any("review", review))
		return res.Error
	}
	slog.Info("Review created successfully", slog.Any("review", review))
	return nil
}

// FindByPagination implements [storage.ReviewRepository].
func (r *ReviewRepository) FindByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.Review], error) {
	slog.Info("find reviews by pagination repository", "filter:", filter)
	var total int64
	var reviews []model.Review
	countRes := r.db.Model(&model.Review{}).Where(
		"summary ILIKE ? OR description ILIKE ?",
		"%"+filter.Search+"%", "%"+filter.Search+"%",
	).Count(&total)
	if countRes.Error != nil {
		slog.Error("Failed to count reviews", slog.Any("error", countRes.Error), slog.String("search", filter.Search))
		return dto.PaginatedResponse[[]model.Review]{}, countRes.Error
	}

	totalPages := (total + filter.Per_page - 1) / filter.Per_page

	if filter.Page*filter.Per_page > total {
		filter.Page = 1
		filter.Per_page = 10
		slog.Warn("Requested page exceeds total pages, resetting to default pagination", slog.Any("filter", filter), slog.Int64("total", total))

	}
	offset := (filter.Page - 1) * filter.Per_page

	res := r.db.Model(&model.Review{}).Where(
		"summary ILIKE ? OR description ILIKE ?",
		"%"+filter.Search+"%", "%"+filter.Search+"%",
	).Limit(int(filter.Per_page)).Offset(int(offset)).Find(&reviews)

	if res.Error != nil {
		slog.Error("Failed to fetch reviews", slog.Any("error", res.Error), slog.String("search", filter.Search))
		return dto.PaginatedResponse[[]model.Review]{}, res.Error
	}

	slog.Info("Reviews fetched successfully", slog.Int("count", len(reviews)), slog.String("search", filter.Search))
	return dto.PaginatedResponse[[]model.Review]{
		Data: reviews,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  totalPages,
		},
	}, nil
}

// GetReviewByCompanyID implements [storage.ReviewRepository].
func (r *ReviewRepository) GetReviewByCompanyID(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Review], error) {
	slog.Info("get reviews by company ID repository", "companyID:", companyID, "filter:", filter)
	var total int64
	var reviews []model.Review
	countRes := r.db.Model(&model.Review{}).Where("company_id = ?", companyID).Count(&total)
	if countRes.Error != nil {
		slog.Error("Failed to count reviews", slog.Any("error", countRes.Error), slog.String("search", filter.Search), slog.String("company_id", companyID))
		return dto.PaginatedResponse[[]model.Review]{}, countRes.Error
	}

	totalPages := (total + filter.Per_page - 1) / filter.Per_page

	if filter.Page*filter.Per_page > total {
		filter.Page = 1
		filter.Per_page = 10
		slog.Warn("Requested page exceeds total pages, resetting to default pagination", slog.Any("filter", filter), slog.Int64("total", total))

	}
	offset := (filter.Page - 1) * filter.Per_page

	res := r.db.Model(&model.Review{}).Where(
		"company_id = ?", companyID).Limit(int(filter.Per_page)).Offset(int(offset)).Find(&reviews)

	if res.Error != nil {
		slog.Error("Failed to fetch reviews", slog.Any("error", res.Error), slog.String("search", filter.Search), slog.String("company_id", companyID))
		return dto.PaginatedResponse[[]model.Review]{}, res.Error
	}

	slog.Info("Reviews fetched successfully", slog.Int("count", len(reviews)), slog.String("search", filter.Search), slog.String("company_id", companyID))

	return dto.PaginatedResponse[[]model.Review]{
		Data: reviews,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  totalPages,
		},
	}, nil
}

// GetReviewByID implements [storage.ReviewRepository].
func (r *ReviewRepository) GetReviewByID(ctx *fiber.Ctx, reviewID string) (model.Review, error) {
	slog.Info("get review by id repository", "id:", reviewID)
	var review model.Review
	reviewUUID, err := uuid.Parse(reviewID)
	if err != nil {
		slog.Error("Invalid review id", slog.String("review_id", reviewID), slog.Any("error", err))
		return model.Review{}, err
	}
	res := r.db.Where(&model.Review{ID: reviewUUID}).First(&review)
	if res.Error != nil {
		slog.Error("Failed to fetch review by ID", slog.String("review_id", reviewID), slog.Any("error", res.Error))
		return model.Review{}, res.Error
	}
	slog.Info("Review fetched by ID", slog.String("review_id", reviewID))
	return review, nil
}

// GetReviewByUserID implements [storage.ReviewRepository].
func (r *ReviewRepository) GetReviewByUserID(ctx *fiber.Ctx, userID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Review], error) {
	slog.Info("get reviews by user ID repository", "userID:", userID, "filter:", filter)
	var total int64
	var reviews []model.Review
	userUUID, err := uuid.Parse(userID)
	if err != nil {
		slog.Error("Invalid user id", slog.String("user_id", userID), slog.Any("error", err))
		return dto.PaginatedResponse[[]model.Review]{}, err
	}

	countErr := r.db.Model(&model.Review{}).Where("user_id = ?", userUUID).Count(&total)
	if countErr.Error != nil {
		slog.Error("Failed to count reviews by user ID", slog.String("user_id", userID), slog.Any("error", countErr.Error))
		return dto.PaginatedResponse[[]model.Review]{}, countErr.Error
	}
	totalPages := (total + filter.Per_page - 1) / filter.Per_page

	if filter.Page*filter.Per_page > total {
		filter.Page = 1
		filter.Per_page = 10
		slog.Warn("Requested page exceeds total pages, resetting to default pagination", slog.Any("filter", filter), slog.Int64("total", total))

	}
	offset := (filter.Page - 1) * filter.Per_page

	res := r.db.Where("user_id = ?", userUUID).Limit(int(filter.Per_page)).Offset(int(offset)).Find(&reviews)
	if res.Error != nil {
		slog.Error("Failed to fetch reviews by user ID", slog.String("user_id", userID), slog.Any("error", res.Error))
		return dto.PaginatedResponse[[]model.Review]{}, res.Error
	}
	slog.Info("Reviews fetched by user ID", slog.String("user_id", userID), slog.Int("count", len(reviews)))
	return dto.PaginatedResponse[[]model.Review]{
		Data: reviews,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  totalPages,
		},
	}, nil
}

func NewReviewRepository(db *gorm.DB) storage.ReviewRepository {
	return &ReviewRepository{
		db: db,
	}
}
