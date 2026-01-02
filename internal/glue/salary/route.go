package salary_route

import (
	"net/http"

	port "github.com/etdan/x-ray/internal/constants/interface"
	"github.com/etdan/x-ray/internal/glue"
	"github.com/etdan/x-ray/middleware"
	"github.com/gofiber/fiber/v2"
)

func InitSalaryRoute(r fiber.Router, handler port.SalaryHandler, authMiddleware middleware.AuthMiddleware) {
	routes := []glue.Route{
		{
			Method:  http.MethodPost,
			Path:    "/salary",
			Handler: handler.CreateSalary,
			// Middlewares: []fiber.Handler{
			// 	authMiddleware.Authentication,
			// },
		},
		{
			Method:  http.MethodGet,
			Path:    "/salary",
			Handler: handler.GetSalariesByPagination,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/salary/{id}",
			Handler: handler.GetSalaryByID,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/salary/company/{id}",
			Handler: handler.GetSalaryByCompanyID,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/salary/user/{id}",
			Handler: handler.GetSalaryByUserID,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
	}
	glue.RegisterRoutes(r, routes)
}
