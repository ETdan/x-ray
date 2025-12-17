package model

import (
	"time"

	"github.com/google/uuid"
)

type Company struct {
	ID           uuid.UUID `json:"id"`
	UserID       uuid.UUID `json:"user_id"`
	Name         string    `json:"name"`
	Website      string    `json:"website"`
	Industry     string    `json:"industry"`
	Size         string    `json:"size"`
	Headquarters string    `json:"headquarters"`
	Description  string    `json:"description"`
	Logo         string    `json:"logo"`
	Album        []string  `json:"album"`
	CreatedAT    time.Time `json:"created_at"`
	UpdatedAT    time.Time `json:"updated_at"`
}
