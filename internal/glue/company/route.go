package company_route

import (
	"net/http"

	port "github.com/etdan/x-ray/internal/constants/interface"
	"github.com/etdan/x-ray/internal/glue"
	"github.com/etdan/x-ray/middleware"
	"github.com/gofiber/fiber/v2"
)

func InitCompanyRoute(r fiber.Router, handler port.CompanyHandler, authMiddleware middleware.AuthMiddleware) {
	routes := []glue.Route{
		{
			Method:  http.MethodPost,
			Path:    "/company",
			Handler: handler.CreateCompany,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/company/{id}",
			Handler: handler.GetCompanyByID,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/company",
			Handler: handler.GetCompaniesByPagination,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
	}
	glue.RegisterRoutes(r, routes)
}
