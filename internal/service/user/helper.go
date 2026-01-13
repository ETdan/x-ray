package user_service

import (
	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/model"
)

func MapListModelToListDTOUser(users []model.User) []dto.UserRes {
	userDTOs := make([]dto.UserRes, 0, len(users))
	for _, user := range users {
		userDTO := dto.UserRes{
			ID: user.ID,
			// GoogleID:  user.GoogleID,
			Email:     user.Email,
			Name:      user.Name,
			AvatarURL: user.AvatarURL,
			CreatedAt: user.CreatedAt,
			UpdatedAt: user.UpdatedAt,
			LastLogin: user.LastLogin,
			Position:  user.Position,
		}
		userDTOs = append(userDTOs, userDTO)
	}

	return userDTOs
}
