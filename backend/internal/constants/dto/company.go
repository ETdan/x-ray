package dto

import (
	"mime/multipart"
	"time"

	"github.com/google/uuid"
)

type CreateCompanyReq struct {
	UserID       string                  `json:"user_id"`
	Name         string                  `json:"name"`
	Logo         *multipart.FileHeader   `json:"logo"`
	Website      string                  `json:"website"`
	Industry     string                  `json:"industry"`
	Size         string                  `json:"size"`
	Headquarters string                  `json:"headquarters"`
	Description  string                  `json:"description"`
	Album        []*multipart.FileHeader `json:"album"`
}

type CreateCompanyRepoReq struct {
	UserID       string   `json:"user_id"`
	Name         string   `json:"name"`
	Logo         string   `json:"logo"`
	Website      string   `json:"website"`
	Industry     string   `json:"industry"`
	Size         string   `json:"size"`
	Headquarters string   `json:"headquarters"`
	Description  string   `json:"description"`
	Album        []string `json:"album"`
}

type UpdateCompanyReq struct {
	Name         string                  `json:"name"`
	Logo         *multipart.FileHeader   `json:"logo"`
	Website      string                  `json:"website"`
	Industry     string                  `json:"industry"`
	Size         string                  `json:"size"`
	Headquarters string                  `json:"headquarters"`
	Description  string                  `json:"description"`
	Album        []*multipart.FileHeader `json:"album"`
}
type CompanyRes struct {
	ID           uuid.UUID `json:"id"`
	Name         string    `json:"name"`
	Website      string    `json:"website"`
	Industry     string    `json:"industry"`
	Size         string    `json:"size"`
	Headquarters string    `json:"headquarters"`
	Description  string    `json:"description"`
	Logo         string    `json:"logo"`
	Album        []string  `json:"album"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}

func (CreateCompanyReq) Validate() error {
	return nil
}
