package model

import (
	"time"

	"github.com/google/uuid"
)

type RefreshToken struct {
	ID        string    `gorm:"primaryKey"`  // uuid for token record
	UserID    uuid.UUID `gorm:"index"`       // FK to User
	TokenHash string    `gorm:"uniqueIndex"` // hashed refresh token
	ExpiresAt time.Time
	Revoked   bool
	CreatedAt time.Time
	UpdatedAt time.Time
}
