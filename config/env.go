package config

import (
	"log/slog"

	"github.com/spf13/viper"
)

type Config struct {
	Port                string `mapstructure:"PORT"`
	DSN                 string `mapstructure:"DSN"`
	ClientID            string `mapstructure:"CLIENT_ID"`
	ClientSecret        string `mapstructure:"CLIENT_SECRET"`
	GOOGLE_AUTH_URL     string `mapstructure:"GOOGLE_AUTH_URL"`
	GOOGLE_TOKEN_URL    string `mapstructure:"GOOGLE_TOKEN_URL"`
	RedirectURL         string `mapstructure:"REDIRECT_URL"`
	JWTSecret           string `mapstructure:"JWT_SECRET"`
	JWTExpireDuration   string `mapstructure:"JWT_EXPIRE_DURATION"`
	CloudinaryAPIKey    string `mapstructure:"CLOUDINARY_API_KEY"`
	CloudinaryAPISecret string `mapstructure:"CLOUDINARY_API_SECRET"`
	CloudinaryCloudName string `mapstructure:"CLOUDINARY_CLOUD_NAME"`
}

func Load() (Config, error) {
	var cfg Config

	// Use .env file
	viper.SetConfigFile(".env")
	viper.SetConfigType("env")

	// Read .env file (ignore error if file missing)
	if err := viper.ReadInConfig(); err != nil {
		slog.Warn("could not read .env file", "err", err.Error())
	}

	// Allow OS ENV to override .env
	viper.AutomaticEnv()

	// Map into struct
	if err := viper.Unmarshal(&cfg); err != nil {
		slog.Error("failed to unmarshal config", "error", err)
		return cfg, err
	}

	return cfg, nil
}
