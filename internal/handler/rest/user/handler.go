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

// GetUserByGoogleID retrieves a user by their Google ID
//
//	@Summary		Get User by Google ID
//	@Description	Retrieves user information using their Google OAuth ID
//	@Security		BearerAuth
//	@Tags			User
//	@Accept			json
//	@Produce		json
//	@Param			google_id	path		string							true	"Google OAuth ID"
//	@Success		200			{object}	localization.StandardResponse{data=dto.UserRes}	"User fetched successfully"
//	@Failure		400			{object}	localization.StandardResponse	"Missing google_id parameter"
//	@Failure		404			{object}	localization.StandardResponse	"User not found"
//	@Failure		500			{object}	localization.StandardResponse	"Internal server error"
//	@Router			/user/google/{google_id} [get]
//
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

// GetUserByID retrieves a user by their user ID
//
//	@Summary		Get User by ID
//	@Description	Retrieves user information using their user ID
//	@Security		BearerAuth
//	@Tags			User
//	@Accept			json
//	@Produce		json
//	@Param			user_id	path		string							true	"User ID (UUID)"
//	@Success		200		{object}	localization.StandardResponse{data=dto.UserRes}	"User fetched successfully"
//	@Failure		400		{object}	localization.StandardResponse	"Missing user_id parameter"
//	@Failure		404		{object}	localization.StandardResponse	"User not found"
//	@Failure		500		{object}	localization.StandardResponse	"Internal server error"
//	@Router			/user/{user_id} [get]
//
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

// GetUsersByPagination retrieves users with pagination and filtering
//
//	@Summary		Get Users by Pagination
//	@Description	Retrieves a paginated list of users with optional filters
//	@Security		BearerAuth
//	@Tags			User
//	@Accept			json
//	@Produce		json
//	@Param			page	query		int								false	"Page number"		default(1)
//	@Param			limit	query		int								false	"Items per page"	default(10)
//	@Param			sort	query		string							false	"Sort field"
//	@Param			order	query		string							false	"Sort order (asc/desc)"
//	@Success		200		{object}	localization.StandardResponse{data=[]dto.UserRes}	"Users fetched successfully"
//	@Failure		400		{object}	localization.StandardResponse	"Invalid filter parameters"
//	@Failure		500		{object}	localization.StandardResponse	"Internal server error"
//	@Router			/user [get]
//
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
