package dto

import "github.com/google/uuid"

type CreateSalaryReq struct {
	UserID     string `json:"user_id"`
	CompanyID  string `json:"company_id"`
	JobTitle   string `json:"job_title"`
	Experience int    `json:"experience"`
	Position   string `json:"position"`
	SalaryMin  uint64 `json:"salary_min"` // minimum net salary
	SalaryMax  uint64 `json:"salary_max"` // maximum net salary
	SalaryAvg  uint64 `json:"salary_avg"` // average net salary
	Bonus      uint64 `json:"bonus"`
	Benefit    uint64 `json:"benefit"`
}
type SalaryRes struct {
	ID         uuid.UUID `json:"id"`
	CompanyID  uuid.UUID `json:"company_id"`
	JobTitle   string    `json:"job_title"`
	Experience int       `json:"experience"`
	Position   string    `json:"position"`
	SalaryMin  uint64    `json:"salary_min"`
	SalaryMax  uint64    `json:"salary_max"`
	SalaryAvg  uint64    `json:"salary_avg"`
	Bonus      uint64    `json:"bonus"`
	Benefit    uint64    `json:"benefit"`
}
