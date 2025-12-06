package dto

type AccessToken struct {
	UserID    string `json:"user_id"`
	Role      string `json:"role"`
	ExpiresIn int64  `json:"expires_in"`
}

type LoginResponse struct {
	AccessToken  string `json:"access_token"`
	RefreshToken string `json:"refresh_token"`
}
