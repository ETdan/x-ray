package company_service

import (
	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/model"
)

func MapCompanyModelToDTO(comapnies []model.Company) []dto.CompanyRes {
	res := make([]dto.CompanyRes, len(comapnies))
	for _, company := range comapnies {
		c := dto.CompanyRes{
			ID:           company.ID,
			Name:         company.Name,
			Website:      company.Website,
			Industry:     company.Industry,
			Size:         company.Size,
			Headquarters: company.Headquarters,
			Description:  company.Description,
			Logo:         company.Logo,
			CreatedAt:    company.CreatedAT,
			UpdatedAt:    company.UpdatedAT,
		}
		res = append(res, c)
	}
	return res
}
