package initiator

import (
	"log/slog"

	"github.com/etdan/x-ray/config"
	auth_route "github.com/etdan/x-ray/internal/glue/auth"
	company_route "github.com/etdan/x-ray/internal/glue/company"
	interview_route "github.com/etdan/x-ray/internal/glue/interview"
	review_route "github.com/etdan/x-ray/internal/glue/review"
	salary_route "github.com/etdan/x-ray/internal/glue/salary"
	user_route "github.com/etdan/x-ray/internal/glue/user"
	"github.com/etdan/x-ray/middleware"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func InitRoute(app *fiber.App, handler Handler, cfg config.Config) {
	router := fiber.New()

	router.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
	}))
	// general middlewares
	// router.Use(csrf.New())
	// router.Use(logger.New())
	authMiddleware := middleware.NewAuthMiddleware(cfg)
	auth_route.InitOauthRouter(router, handler.AuthHandler, authMiddleware)
	user_route.InitUserRoute(router, handler.UserHandler, authMiddleware)
	company_route.InitCompanyRoute(router, handler.CompanyHandler, authMiddleware)
	interview_route.InitInterviewRoute(router, handler.InterviewHandler, authMiddleware)
	review_route.InitReviewRoute(router, handler.ReviewHandler, authMiddleware)
	salary_route.InitSalaryRoute(router, handler.SalaryHandler, authMiddleware)

	router.Get("/health_check", func(ctx *fiber.Ctx) error {
		return ctx.JSON(map[string]string{
			"status": "kicking ass and taking names",
		})
	})
	app.Mount("/x_ray", router)
	for _, route := range router.GetRoutes() {
		slog.Info("Route", "method", route.Method, "path", "/x_ray"+route.Path)
	}

}
