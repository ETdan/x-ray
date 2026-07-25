package initiator

import (
	"github.com/etdan/x-ray/config"
	port "github.com/etdan/x-ray/internal/constants/interface"
	auth_handler "github.com/etdan/x-ray/internal/handler/rest/auth"
	company_handler "github.com/etdan/x-ray/internal/handler/rest/company"
	interview_handler "github.com/etdan/x-ray/internal/handler/rest/interview"
	review_handler "github.com/etdan/x-ray/internal/handler/rest/review"
	salary_handler "github.com/etdan/x-ray/internal/handler/rest/salary"
	user_handler "github.com/etdan/x-ray/internal/handler/rest/user"
)

type Handler struct {
	UserHandler      port.UserHandler
	AuthHandler      port.OauthHandler
	CompanyHandler   port.CompanyHandler
	ReviewHandler    port.ReviewHandler
	InterviewHandler port.InterviewHandler
	SalaryHandler    port.SalaryHandler
}

func InitHandler(service Service, cfg config.Config) Handler {
	return Handler{
		UserHandler:      user_handler.NewUserHandler(service.user),
		AuthHandler:      auth_handler.NewAuthHandler(service.auth, cfg),
		CompanyHandler:   company_handler.NewCompanyHandler(service.company),
		ReviewHandler:    review_handler.NewReviewHandler(service.review),
		InterviewHandler: interview_handler.NewInterviewHandler(service.interview),
		SalaryHandler:    salary_handler.NewSalaryHandler(service.salary),
	}
}
