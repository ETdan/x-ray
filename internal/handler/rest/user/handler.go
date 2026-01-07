package user_handler

import (
	"log/slog"

	port "github.com/etdan/x-ray/internal/constants/interface"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/etdan/x-ray/internal/service"
	"github.com/etdan/x-ray/utils"
	"github.com/gofiber/fiber/v2"
)

type UserHandler struct {
	service service.UserService
}

// GetUserByGoogleID implements [port.UserHandler].
func (u *UserHandler) GetUserByGoogleID(ctx *fiber.Ctx) {
	id := ctx.Params("google_id")
	if id == "" {
		slog.Error("google_id is required")
		localization.SendErrorResponse(ctx, localization.ErrorBadRequest.Code)
		return
	}

	user, err := u.service.GetUserByGoogleID(ctx, id)
	if err != nil {
		slog.Error("Failed to get user by google ID", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessUserFetchedByGoogleID.Code, user)
}

// GetUserByID implements [port.UserHandler].
func (u *UserHandler) GetUserByID(ctx *fiber.Ctx) {
	id := ctx.Params("user_id")
	if id == "" {
		slog.Error("user_id is required")
		localization.SendErrorResponse(ctx, localization.ErrorBadRequest.Code)
		return
	}

	user, err := u.service.GetUserByID(ctx, id)
	if err != nil {
		slog.Error("Failed to get user by ID", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessUserFetchedByUserID.Code, user)
}

// GetUsersByPagination implements [port.UserHandler].
func (u *UserHandler) GetUsersByPagination(ctx *fiber.Ctx) {
	q := ctx.Queries()

	filter, err := utils.BuildFilter(q)
	if err != nil {
		slog.Error("Failed to build filter", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	user, err := u.service.GetUsersByPagination(ctx, filter)
	if err != nil {
		slog.Error("Failed to get users by pagination", "error", err)
		localization.SendErrorResponse(ctx, err.Error())
		return
	}
	localization.SendSuccessResponse(ctx, localization.SuccessUserFetchedByPagination.Code, user)
}

func NewUserHandler(service service.UserService) port.UserHandler {
	return &UserHandler{
		service: service,
	}
}
