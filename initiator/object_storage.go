package initiator

import (
	"fmt"
	"log/slog"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/etdan/x-ray/config"
)

func InitiateObjectStorage(env config.Config) *cloudinary.Cloudinary {

	cld, err := cloudinary.NewFromURL(fmt.Sprintf("cloudinary://%s:%s@%s", env.CloudinaryAPIKey, env.CloudinaryAPISecret, env.CloudinaryCloudName))

	if err != nil {
		slog.Error("Failed to init object storage", "error", err)
		return nil
	}

	return cld
}
