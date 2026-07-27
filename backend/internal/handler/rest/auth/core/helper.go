package core

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/etdan/x-ray/internal/constants/dto"
)

func DecodeIDToken(idToken string) (*dto.GoogleIDTokenClaims, error) {
	parts := strings.Split(idToken, ".")
	if len(parts) < 2 {
		return nil, fmt.Errorf("invalid id token")
	}

	payload, err := base64.RawURLEncoding.DecodeString(parts[1])
	if err != nil {
		return nil, err
	}

	var claims dto.GoogleIDTokenClaims
	if err := json.Unmarshal(payload, &claims); err != nil {
		return nil, err
	}

	return &claims, nil
}
