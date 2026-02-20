package interview_route

import (
	"net/http"

	port "github.com/etdan/x-ray/internal/constants/interface"
	"github.com/etdan/x-ray/internal/glue"
	"github.com/etdan/x-ray/middleware"
	"github.com/gofiber/fiber/v2"
)

func InitInterviewRoute(r fiber.Router, handler port.InterviewHandler, authMiddleware middleware.AuthMiddleware) {
	routes := []glue.Route{
		{
			Method:  http.MethodPost,
			Path:    "/interview",
			Handler: handler.CreateInterview,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/interview",
			Handler: handler.GetInterviewsByPagination,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/interview/:interview_id",
			Handler: handler.GetInterviewByID,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/interview/company/:company_id",
			Handler: handler.GetInterviewByCompanyID,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/interview/user/:user_id",
			Handler: handler.GetInterviewByUserID,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
	}
	glue.RegisterRoutes(r, routes)
}
