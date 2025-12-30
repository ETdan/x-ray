package model

import (
	"github.com/google/uuid"
)

type User struct {
	ID        uuid.UUID `gorm:"primarykey"`
	GoogleID  string    `gorm:"uniqueIndex"`
	Email     string    `gorm:"uniqueIndex"`
	Name      string
	AvatarURL string
	CreatedAt int64
	UpdatedAt int64
	LastLogin int64
	Position  string
}
