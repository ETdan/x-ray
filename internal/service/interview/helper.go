package interview_service

import (
	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/model"
)

func MapModelToDTOInterview(modelInterview model.Interview) dto.InterviewRes {
	return dto.InterviewRes{
		ID:          modelInterview.ID,
		CompanyID:   modelInterview.CompanyID.String(),
		GotOffer:    *modelInterview.GotOffer,
		Difficulty:  dto.Difficulty(modelInterview.Difficulty),
		Experience:  modelInterview.Experience,
		Description: modelInterview.Description,
	}
}

func MapListModelToListDTOInterview(modelInterview []model.Interview) []dto.InterviewRes {
	var interviews []dto.InterviewRes
	for _, interview := range modelInterview {
		interviews = append(interviews, dto.InterviewRes{
			ID:          interview.ID,
			CompanyID:   interview.CompanyID.String(),
			GotOffer:    *interview.GotOffer,
			Difficulty:  dto.Difficulty(interview.Difficulty),
			Experience:  interview.Experience,
			Description: interview.Description,
		})
	}
	return interviews
}
