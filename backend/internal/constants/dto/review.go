package dto

import "github.com/google/uuid"

type CreateReviewReq struct {
	UserID          string `json:"user_id"`
	CompanyID       string `json:"company_id"`
	Pro             string `json:"pro"`
	Con             string `json:"con"`
	CEOApproval     *bool  `json:"ceo_approval"`
	Recommend       *bool  `json:"recommend"`
	BusinessOutlook string `json:"business_outlook"`
	WorkLifeBalance int    `json:"work_life_balance"` // rating out of 5
	Compensation    int    `json:"compensation"`      // rating out of 5
	Benefit         int    `json:"benefit"`           // rating out of 5
	StarRating      int    `json:"star_rating"`       // overall rating out of 5
}
type ReviewRes struct {
	ID              uuid.UUID `json:"id"`
	CompanyID       uuid.UUID `json:"company_id"`
	Pro             string    `json:"pro"`
	Con             string    `json:"con"`
	CEOApproval     bool      `json:"ceo_approval"`
	Recommend       bool      `json:"recommend"`
	BusinessOutlook string    `json:"business_outlook"`
	WorkLifeBalance int       `json:"work_life_balance"` // rating out of 5
	Compensation    int       `json:"compensation"`      // rating out of 5
	Benefit         int       `json:"benefit"`           // rating out of 5
	StarRating      int       `json:"star_rating"`       // overall rating out of 5
}
