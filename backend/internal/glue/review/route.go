package review_route

import (
	"net/http"

	port "github.com/etdan/x-ray/internal/constants/interface"
	"github.com/etdan/x-ray/internal/glue"
	"github.com/etdan/x-ray/middleware"
	"github.com/gofiber/fiber/v2"
)

func InitReviewRoute(r fiber.Router, handler port.ReviewHandler, authMiddleware middleware.AuthMiddleware) {
	routes := []glue.Route{
		{
			Method:  http.MethodPost,
			Path:    "/review",
			Handler: handler.CreateReview,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/review",
			Handler: handler.GetReviewsByPagination,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/review/{id}",
			Handler: handler.GetReviewByID,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/review/company/{id}",
			Handler: handler.GetReviewByCompanyID,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/review/user/{id}",
			Handler: handler.GetReviewByUserID,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
	}
	glue.RegisterRoutes(r, routes)
}
