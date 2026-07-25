package review

import (
	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/model"
)

func MapListModelToListDTOReview(reviews []model.Review) []dto.ReviewRes {
	reviewDTOs := make([]dto.ReviewRes, 0, len(reviews))
	for _, review := range reviews {
		reviewDTO := dto.ReviewRes{
			ID:              review.ID,
			CompanyID:       review.CompanyID,
			Pro:             review.Pro,
			Con:             review.Con,
			CEOApproval:     *review.CEOApproval,
			Recommend:       *review.Recommend,
			BusinessOutlook: review.BusinessOutlook,
			WorkLifeBalance: review.WorkLifeBalance,
			Compensation:    review.Compensation,
			Benefit:         review.Benefit,
			StarRating:      review.StarRating,
		}
		reviewDTOs = append(reviewDTOs, reviewDTO)
	}
	return reviewDTOs
}
