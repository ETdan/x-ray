package localization

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

type StandardResponse struct {
	Data       any       `json:"data,omitempty"`
	Message    string    `json:"message"`
	StatusCode int       `json:"status_code"`
	Time       time.Time `json:"time"`
}

func SendResponse(ctx *fiber.Ctx, response ResponseCode, data any) error {
	sr := StandardResponse{}
	if data == nil {
		sr = StandardResponse{
			Message:    response.Message,
			StatusCode: response.StatusCode,
			Time:       time.Now(),
		}
	} else {
		sr = StandardResponse{
			Data:       data,
			Message:    response.Message,
			StatusCode: response.StatusCode,
			Time:       time.Now(),
		}
	}

	if err := ctx.JSON(sr); err != nil {
		return ctx.JSON(map[string]string{
			"error":  "internal error",
			"status": "500",
		})
	}
	return nil
}

func SendErrorResponse(ctx *fiber.Ctx, code string) error {
	return mapCodeToResponseCode(ctx, code, nil)
}

func SendSuccessResponse(ctx *fiber.Ctx, code string, data any) error {
	return mapCodeToResponseCode(ctx, code, data)
}

func mapCodeToResponseCode(ctx *fiber.Ctx, code string, data any) error {
	for _, responseCode := range ResponseCodes {
		if code == responseCode.Code {
			return SendResponse(ctx, responseCode, data)
		}
	}
	return SendResponse(ctx, ErrorResponseCodeNotFound, data)
}
