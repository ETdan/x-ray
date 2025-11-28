package initiator

import (
	"log/slog"

	"github.com/etdan/x-ray/cmd/server"
	"github.com/etdan/x-ray/config"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/swagger"
)

func Init() {

	logger := slog.New(&ColorHandler{})
	slog.SetDefault(logger)

	cfg, err := config.Load()
	if err != nil {
		slog.Info("failed to load env")
	}
	slog.Info("initiating postgres...")
	db := config.InitPostgres(cfg)
	slog.Info("postgres initiated")
	defer config.ClosePostgres(db)
	// run migrations
	// if err := RunMigrations(db); err != nil {
	// 	slog.Error("failed to migrate database schema: " + err.Error())
	// 	// return
	// }
	cloudinaryClient := InitiateObjectStorage(cfg)
	slog.Info("Initiating Persistence Layer")
	persistence := InitPersistence(db)
	slog.Info("Persistence layer initiated")

	slog.Info("Initiating Service Layer")
	service := InitServiceLayer(persistence, cloudinaryClient, cfg)
	slog.Info("Service layer initiated")

	slog.Info("Initiating Handler Layer")
	handler := InitHandler(service, cfg)
	slog.Info("Handler layer initiated")

	app := fiber.New()

	slog.Info("Initiating Routing Layer")
	InitRoute(app, handler, cfg)
	slog.Info("Routing layer initiated")

	app.Get("/swagger/*", swagger.New(swagger.Config{ // custom
		URL:         "http://example.com/doc.json",
		DeepLinking: false,
		// Expand ("list") or Collapse ("none") tag groups by default
		DocExpansion: "none",
		// Prefill OAuth ClientId on Authorize popup
		OAuth: &swagger.OAuthConfig{
			AppName:  "OAuth Provider",
			ClientId: "21bb4edc-05a7-4afc-86f1-2e151e4ba6e2",
		},
		// Ability to change OAuth2 redirect uri location
		OAuth2RedirectUrl: "http://localhost:8080/swagger/oauth2-redirect.html",
	}))

	srv := server.NewServer(app)
	srv.StartServer(cfg.Port)
	srv.StopServer()
}
