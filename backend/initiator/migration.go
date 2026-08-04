package initiator

import (
	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/go-gormigrate/gormigrate/v2"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

func RunMigrations(db *gorm.DB) error {
	m := gormigrate.New(db, gormigrate.DefaultOptions, []*gormigrate.Migration{
		{
			ID: uuid.NewString(),
			Migrate: func(tx *gorm.DB) error {
				return tx.AutoMigrate(
					&model.User{},
					&model.Company{},
					&model.Interview{},
					&model.Media{},
					&model.RefreshToken{},
					&model.Review{},
					&model.Salary{},
				)
			},
			Rollback: func(tx *gorm.DB) error {
				return tx.Migrator().DropTable("users")
			},
		},
	})

	return m.Migrate()
}
