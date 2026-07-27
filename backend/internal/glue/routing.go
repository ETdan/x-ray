package glue

import (
	"github.com/gofiber/fiber/v2"
)

type Route struct {
	Method      string
	Path        string
	Handler     func(*fiber.Ctx)
	Middlewares []fiber.Handler
}

func RegisterRoutes(r fiber.Router, routes []Route) {
	for _, route := range routes {
		fiber_router := func(c *fiber.Ctx) error {
			route.Handler(c)
			return nil
		}
		r.Add(route.Method, route.Path, append(route.Middlewares, fiber_router)...)

	}
}
