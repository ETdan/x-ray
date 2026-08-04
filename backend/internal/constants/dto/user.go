package dto

import "github.com/google/uuid"

type UserRes struct {
	ID        uuid.UUID `json:"id" gorm:"primarykey"`
	GoogleID  string    `json:"google_id" gorm:"uniqueIndex"`
	Email     string    `json:"email" gorm:"uniqueIndex"`
	Name      string    `json:"name"`
	AvatarURL string    `json:"avatar_url"`
	CreatedAt int64     `json:"created_at"`
	UpdatedAt int64     `json:"updated_at"`
	LastLogin int64     `json:"last_login"`
	Position  string    `json:"position"`
}
