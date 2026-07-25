package initiator

import (
	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/etdan/x-ray/config"
	"github.com/etdan/x-ray/internal/service"
	auth_service "github.com/etdan/x-ray/internal/service/auth"
	company_service "github.com/etdan/x-ray/internal/service/company"
	interview_service "github.com/etdan/x-ray/internal/service/interview"
	"github.com/etdan/x-ray/internal/service/review"
	salary_service "github.com/etdan/x-ray/internal/service/salary"
	user_service "github.com/etdan/x-ray/internal/service/user"
)

type Service struct {
	auth      service.OauthService
	user      service.UserService
	company   service.CompanyService
	review    service.ReviewService
	interview service.InterviewService
	salary    service.SalaryService
}

func InitServiceLayer(persistence Persistence, cloudinaryClient *cloudinary.Cloudinary, cfg config.Config) Service {
	return Service{
		auth:      auth_service.NewAuthService(persistence.auth, persistence.refreshToken, cfg),
		user:      user_service.NewUserService(persistence.user, persistence.company, persistence.interview),
		company:   company_service.NewCompanyService(persistence.company, persistence.user, cloudinaryClient),
		review:    review.NewReviewService(persistence.Review, persistence.company, persistence.user),
		interview: interview_service.NewInterviewService(persistence.interview, persistence.user, persistence.company),
		salary:    salary_service.NewSalaryService(persistence.salary, persistence.company, persistence.user),
	}
}
