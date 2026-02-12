package auth_handler

import (
	"bytes"
	"crypto/rand"
	"encoding/json"
	"fmt"
	"io"
	"log/slog"
	"net/http"
	"net/url"
	"time"

	"github.com/etdan/x-ray/config"
	"github.com/etdan/x-ray/internal/constants/dto"
	port "github.com/etdan/x-ray/internal/constants/interface"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/etdan/x-ray/internal/handler/rest/auth/core"
	"github.com/etdan/x-ray/internal/service"
	"github.com/gofiber/fiber/v2"
)

type GoogleOauthRequestBody struct {
	Code         string `json:"code"`
	ClientID     string `json:"client_id"`
	ClientSecret string `json:"client_secret"`
	RedirectURL  string `json:"redirect_uri"`
	GrantType    string `json:"grant_type"`
}

type GoogleOauthResponseBody struct {
	AccessToken  string `json:"access_token"`
	ExpiresIn    int64  `json:"expires_in"`
	Scope        string `json:"scope"`
	TokenType    string `json:"token_type"`
	ID_Token     string `json:"id_token"`
	RefreshToken string `json:"refresh_token"`
}

type AuthHandler struct {
	service service.OauthService
	cfg     config.Config
}

// @Summary		Google OAuth Callback
// @Description	Handles the OAuth callback from Google, exchanges authorization code for tokens, and creates/authenticates user
// @Tags			Auth
// @Accept			json
// @Produce		json
// @Param			code	query		string							true	"Authorization code from Google"
// @Param			state	query		string							true	"State parameter for CSRF protection"
// @Success		200		{object}	localization.StandardResponse{data=dto.UserRes}	"Successful login with user data"
// @Failure		400		{object}	localization.StandardResponse		"Invalid callback parameters or state mismatch"
// @Failure		500		{object}	localization.StandardResponse		"Internal server error during OAuth process"
// @Router			/auth/callback [get]
func (a AuthHandler) Callback(c *fiber.Ctx) {
	queries := c.Queries()
	code := queries["code"]
	state := queries["state"]

	if code == "" || state == "" {
		localization.SendErrorResponse(c, localization.ErrorInvalidAuthCallback.Code)
		return
	}
	if state != c.Cookies(dto.GoogleStateCookieName) {
		localization.SendErrorResponse(c, localization.ErrorGoogleAuthStateMismatch.Code)
		return
	}
	reqBody := GoogleOauthRequestBody{
		Code:         code,
		ClientID:     a.cfg.ClientID,
		ClientSecret: a.cfg.ClientSecret,
		RedirectURL:  a.cfg.RedirectURL,
		GrantType:    "authorization_code",
	}

	jsonData, err := json.Marshal(reqBody)
	if err != nil {
		localization.SendErrorResponse(c, localization.ErrorInternalServerError.Code)
		return
	}
	requestBody := bytes.NewBuffer(jsonData)

	req, err := http.NewRequest(http.MethodPost, a.cfg.GOOGLE_TOKEN_URL, requestBody)
	if err != nil {
		slog.Info("error creating http request")
		localization.SendErrorResponse(c, localization.ErrorInternalServerError.Code)
		return
	}

	req.Header.Set("Content-Type", "application/json")

	client := http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		slog.Info("error making http request to google oauth")
		localization.SendErrorResponse(c, localization.ErrorInternalServerError.Code)
		return
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		slog.Error("failed to read response body")
		localization.SendErrorResponse(c, localization.ErrorInternalServerError.Code)
		return
	}

	var result GoogleOauthResponseBody
	if err := json.Unmarshal(body, &result); err != nil {
		slog.Error("failed to unmarshal result")
		localization.SendErrorResponse(c, localization.ErrorInternalServerError.Code)
		return
	}

	google_claim, err := core.DecodeIDToken(result.ID_Token)
	if err != nil {
		slog.Error("error decoding id_token")
		localization.SendErrorResponse(c, localization.ErrorInternalServerError.Code)
		return
	}

	response, err := a.service.Create(*google_claim)
	if err != nil {
		slog.Error("error creating oauth service")
		localization.SendErrorResponse(c, err.Error())
		return
	}
	localization.SendSuccessResponse(c, localization.SuccessfulLogin.Code, response)
}

// @Summary		Initiate Google OAuth Login
// @Description	Redirects user to Google OAuth consent screen
// @Tags			Auth
// @Produce		json
// @Success		302	{string}	string						"Redirect to Google OAuth"
// @Failure		500	{object}	localization.StandardResponse	"Missing environment variables"
// @Router			/auth/login [get]
func (a AuthHandler) Login(c *fiber.Ctx) {
	if a.cfg.ClientID == "" || a.cfg.RedirectURL == "" {
		slog.Info(a.cfg.ClientID, a.cfg.RedirectURL, "env values should be printed here")
		localization.SendErrorResponse(c, "enc variable missing")
		return
	}

	random_string := rand.Text()
	redirectUrl := fmt.Sprintf("https://accounts.google.com/o/oauth2/v2/auth?client_id=%s&redirect_uri=%s&response_type=code&scope="+url.QueryEscape("openid email profile")+"&state=%s", a.cfg.ClientID, a.cfg.RedirectURL, random_string)

	c.Cookie(&fiber.Cookie{
		Name:    dto.GoogleStateCookieName,
		Value:   random_string,
		Expires: time.Now().Add(24 * time.Hour),
	})
	c.Redirect(redirectUrl)
}

// @Summary		Refresh Access Token
// @Description	Generates a new access token from a valid refresh token
// @Tags			Auth
// @Accept			json
// @Produce		json
// @Security BearerToken
// @Success		200	{object}	localization.StandardResponse{data=string}	"New access token generated"
// @Failure		401	{object}	localization.StandardResponse					"Unauthorized - invalid or missing refresh token"
// @Failure		500	{object}	localization.StandardResponse					"Internal server error"
// @Router			/auth/refresh [post]
func (a AuthHandler) RefreshToken(c *fiber.Ctx) {
	userID := c.Locals("user_id").(string)
	if userID == "" {
		slog.Info("id not found for request")
		localization.SendErrorResponse(c, localization.ErrorUserUnauthorized.Code)
		return
	}
	hash := c.Locals("hash").(string)
	if hash == "" {
		slog.Info("error hash not found")
		localization.SendErrorResponse(c, localization.ErrorUserUnauthorized.Code)
		return
	}
	if data, err := a.service.CreateAccessToken(userID, hash); err != nil {
		slog.Info("error creating access token", "error", err)
		localization.SendErrorResponse(c, err.Error())
		return
	} else {
		localization.SendSuccessResponse(c, localization.AccessTokenRefreshSuccessful.Code, data)
	}
}

func NewAuthHandler(service service.OauthService, cfg config.Config) port.OauthHandler {
	return AuthHandler{
		service: service,
		cfg:     cfg,
	}
}
