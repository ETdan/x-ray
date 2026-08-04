package initiator

import (
	"github.com/etdan/x-ray/internal/storage"
	auth_storage "github.com/etdan/x-ray/internal/storage/auth"
	company_storage "github.com/etdan/x-ray/internal/storage/company"
	interview_storage "github.com/etdan/x-ray/internal/storage/interview"
	refreshtoken "github.com/etdan/x-ray/internal/storage/refresh_token"
	review_storage "github.com/etdan/x-ray/internal/storage/review"
	salary_storage "github.com/etdan/x-ray/internal/storage/salary"
	user_storage "github.com/etdan/x-ray/internal/storage/user"
	"gorm.io/gorm"
)

type Persistence struct {
	auth         storage.OauthRepository
	user         storage.UserRepository
	company      storage.CompanyRepository
	Review       storage.ReviewRepository
	interview    storage.InterviewRepository
	refreshToken storage.RefreshTokenRepository
	salary       storage.SalaryRepository
}

func InitPersistence(db *gorm.DB) Persistence {
	return Persistence{
		auth:         auth_storage.NewAuthRepository(db),
		user:         user_storage.NewUserRepository(db),
		refreshToken: refreshtoken.NewRefreshTokenRepository(db),
		company:      company_storage.NewCompanyRepository(db),
		Review:       review_storage.NewReviewRepository(db),
		interview:    interview_storage.NewInterviewRepository(db),
		salary:       salary_storage.NewSalaryRepository(db),
	}
}
