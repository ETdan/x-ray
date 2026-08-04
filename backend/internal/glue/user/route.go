package user_route

import (
	"net/http"

	port "github.com/etdan/x-ray/internal/constants/interface"
	"github.com/etdan/x-ray/internal/glue"
	"github.com/etdan/x-ray/middleware"
	"github.com/gofiber/fiber/v2"
)

func InitUserRoute(r fiber.Router, handler port.UserHandler, authMiddleware middleware.AuthMiddleware) {
	routes := []glue.Route{
		{
			Method:  http.MethodGet,
			Path:    "/user/{id}",
			Handler: handler.GetUserByID,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/user",
			Handler: handler.GetUsersByPagination,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
		{
			Method:  http.MethodGet,
			Path:    "/user/{google-id}",
			Handler: handler.GetUserByGoogleID,
			Middlewares: []fiber.Handler{
				authMiddleware.Authentication,
			},
		},
	}
	glue.RegisterRoutes(r, routes)
}
