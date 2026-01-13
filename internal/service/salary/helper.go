package salary_service

import (
	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/model"
)

func MapListModelToListDTOSalary(salaries []model.Salary) []dto.SalaryRes {
	salaryDTOs := make([]dto.SalaryRes, 0, len(salaries))
	for _, salary := range salaries {
		salaryDTO := dto.SalaryRes{
			ID:         salary.ID,
			CompanyID:  salary.CompanyID,
			JobTitle:   salary.JobTitle,
			Experience: salary.Experience,
			Position:   salary.Position,
			SalaryMin:  salary.SalaryMin,
			SalaryMax:  salary.SalaryMax,
			SalaryAvg:  salary.SalaryAvg,
			Bonus:      salary.Bonus,
			Benefit:    salary.Benefit,
		}
		salaryDTOs = append(salaryDTOs, salaryDTO)
	}
	return salaryDTOs
}
