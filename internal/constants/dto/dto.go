package dto

type Filter struct {
	Page     int64
	Per_page int64
	Search   string
}
type MetaData struct {
	TotalCount int64 `json:"total_count"`
	Page       int64 `json:"page"`
	PerPage    int64 `json:"per_page"`
	TotalPage  int64 `json:"total_page"`
}
type PaginatedResponse[T any] struct {
	Meta MetaData `json:"meta"`
	Data T        `json:"data"`
}
