package server

import (
	"context"
	"fmt"
	"log/slog"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gofiber/fiber/v2"
)

type server struct {
	app *fiber.App
}

func NewServer(app *fiber.App) server {
	return server{
		app: app,
	}
}

func (s *server) StartServer(port string) {
	slog.Info("starting server....")
	go func() {
		if err := s.app.Listen(fmt.Sprintf("127.0.0.1:%s", port)); err != nil {
			slog.Error("error server down")
		}
		slog.Info("server is up and running")
	}()
}

func (s *server) StopServer() {
	q := make(chan os.Signal, 1)
	signal.Notify(q, syscall.SIGINT, syscall.SIGTERM)
	<-q
	slog.Info("stopping server...")
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
	if err := s.app.ShutdownWithContext(ctx); err != nil {
		slog.Info("server stopped by force")
	} else {
		slog.Info("server stopped by signal")
	}
}
