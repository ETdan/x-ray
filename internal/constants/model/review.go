package model

import (
	"time"

	"github.com/google/uuid"
)

type Review struct {
	ID              uuid.UUID
	UserID          uuid.UUID
	CompanyID       uuid.UUID
	Pro             string
	Con             string
	CEOApproval     *bool
	Recommend       *bool
	BusinessOutlook string
	WorkLifeBalance int
	Compensation    int
	Benefit         int
	StarRating      int
	CreatedAT       time.Time
	UpdatedAT       time.Time
}
