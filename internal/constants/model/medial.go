package model

import "github.com/google/uuid"

type Media struct {
	ID          uuid.UUID
	OwnerID     uuid.UUID
	Name        string
	Description string
	URL         string
}
