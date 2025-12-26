package model

import (
	"time"

	"github.com/google/uuid"
)

type Salary struct {
	ID         uuid.UUID
	UserID     uuid.UUID
	CompanyID  uuid.UUID
	JobTitle   string
	Experience int
	Position   string
	SalaryMin  uint64
	SalaryMax  uint64
	SalaryAvg  uint64
	Bonus      uint64
	Benefit    uint64
	CreatedAT  time.Time
	UpdatedAT  time.Time
}
