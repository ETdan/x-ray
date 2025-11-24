package config

import (
	"log/slog"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func InitPostgres(cfg Config) *gorm.DB {
	db, err := gorm.Open(postgres.Open(cfg.DSN), &gorm.Config{})
	if err != nil {
		slog.Error("failed to connect with postgres")
	}
	return db
}

func ClosePostgres(db *gorm.DB) {
	sqlDB, err := db.DB()
	if err != nil {
		slog.Error("failed closing postgres connection")
		return
	}
	defer sqlDB.Close()
}
