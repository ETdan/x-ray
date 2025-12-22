package model

import (
	"time"

	"github.com/google/uuid"
)

type Interview struct {
	ID          uuid.UUID
	UserID      uuid.UUID
	CompanyID   uuid.UUID
	JobTitle    string
	GotOffer    *bool
	Difficulty  int
	Experience  int
	Description string
	CreatedAT   time.Time
	UpdatedAT   time.Time
}
