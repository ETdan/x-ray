package auth_route

import (
	"net/http"

	port "github.com/etdan/x-ray/internal/constants/interface"
	"github.com/etdan/x-ray/internal/glue"
	"github.com/etdan/x-ray/middleware"
	"github.com/gofiber/fiber/v2"
)

func InitOauthRouter(r fiber.Router, handler port.OauthHandler, authMiddleware middleware.AuthMiddleware) {
	routes := []glue.Route{
		{
			Method:  http.MethodGet,
			Path:    "/auth/login",
			Handler: handler.Login,
		},
		{
			Method:  http.MethodGet,
			Path:    "/auth/callback",
			Handler: handler.Callback,
		},
		{
			Method:  http.MethodPost,
			Path:    "/auth/refresh",
			Handler: handler.RefreshToken,
			Middlewares: []fiber.Handler{
				authMiddleware.AuthenticationRefreshToken,
			},
		},
	}

	glue.RegisterRoutes(r, routes)
}
