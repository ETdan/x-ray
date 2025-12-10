package dto

import "github.com/google/uuid"

type Difficulty int

const (
	Easy Difficulty = iota + 1
	Medium
	Hard
	VeryHard
)

func (d Difficulty) IsValid() bool {
	switch d {
	case Easy, Medium, Hard, VeryHard:
		return true
	default:
		return false
	}
}

type CreateInterviewReq struct {
	CompanyID   string     `json:"company_id"`
	UserID      string     `json:"user_id"`
	JobTitle    string     `json:"job_title"`
	GotOffer    *bool      `json:"got_offer"`
	Difficulty  Difficulty `json:"difficulty"`
	Experience  int        `json:"experience"`
	Description string     `json:"description"`
}
type InterviewRes struct {
	ID          uuid.UUID  `json:"id"`
	CompanyID   string     `json:"company_id"`
	JobTitle    string     `json:"job_title"`
	GotOffer    bool       `json:"got_offer"`
	Difficulty  Difficulty `json:"difficulty"`
	Experience  int        `json:"experience"`
	Description string     `json:"description"`
}
