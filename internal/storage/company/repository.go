package company_repository

import (
	"errors"
	"log/slog"
	"time"

	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/etdan/x-ray/internal/storage"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type CompanyRepository struct {
	db *gorm.DB
}

// CreateCompany implements [storage.CompanyRepository].
func (c *CompanyRepository) CreateCompany(ctx *fiber.Ctx, company *dto.CreateCompanyRepoReq) error {
	user_id, err := uuid.Parse(company.UserID)
	if err != nil {
		slog.Error("Invalid user id", slog.String("user_id", company.UserID), slog.Any("error", err))
		return errors.New("error in valid user id")
	}
	res := c.db.Create(&model.Company{
		ID:           uuid.New(),
		UserID:       user_id,
		Name:         company.Name,
		Website:      company.Website,
		Industry:     company.Industry,
		Size:         company.Size,
		Headquarters: company.Headquarters,
		Description:  company.Description,
		Logo:         company.Logo,
		Album:        company.Album,
		CreatedAt:    time.Now(),
	})

	if res.Error != nil {
		slog.Error("Failed to create company", slog.Any("error", res.Error), slog.Any("company", company))
		return res.Error
	}
	slog.Info("Company created successfully", slog.Any("company", company))

	return nil
}

// FindByPagination implements [storage.CompanyRepository].
func (c *CompanyRepository) FindByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.Company], error) {
	var total int64
	var companies []model.Company
	countRes := c.db.Model(&model.Company{}).Where(
		"name ILIKE ? OR industry ILIKE ? OR headquarters ILIKE ?",
		"%"+filter.Search+"%", "%"+filter.Search+"%", "%"+filter.Search+"%",
	).Count(&total)
	if countRes.Error != nil {
		slog.Error("Failed to count companies", slog.Any("error", countRes.Error), slog.String("search", filter.Search))
		return dto.PaginatedResponse[[]model.Company]{}, countRes.Error
	}
	if (filter.Page-1)*filter.Per_page > total {
		return dto.PaginatedResponse[[]model.Company]{
			Data: []model.Company{},
			Meta: dto.MetaData{
				TotalCount: total,
				Page:       filter.Page,
				PerPage:    filter.Per_page,
				TotalPage:  (total + int64(filter.Per_page) - 1) / int64(filter.Per_page),
			},
		}, nil

	}
	res := c.db.Where(
		"name ILIKE ? OR industry ILIKE ? OR headquarters ILIKE ?",
		"%"+filter.Search+"%", "%"+filter.Search+"%", "%"+filter.Search+"%",
	).Limit(int(filter.Per_page)).Offset(int(filter.Page)).Find(&companies)

	if res.Error != nil {
		slog.Error("Failed to fetch companies", slog.Any("error", res.Error), slog.String("search", filter.Search))
		return dto.PaginatedResponse[[]model.Company]{}, res.Error
	}

	slog.Info("Companies fetched successfully", slog.Int("count", len(companies)), slog.String("search", filter.Search))

	return dto.PaginatedResponse[[]model.Company]{
		Data: companies,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  (total + int64(filter.Per_page) - 1) / int64(filter.Per_page),
		},
	}, nil
}

// GetCompanyByID implements [storage.CompanyRepository].
func (c *CompanyRepository) GetCompanyByID(ctx *fiber.Ctx, companyID string) (model.Company, error) {
	id, err := uuid.Parse(companyID)
	if err != nil {
		slog.Error("Invalid company id", slog.String("company_id", companyID), slog.Any("error", err))
		return model.Company{}, errors.New("error in valid company id")
	}
	var company model.Company
	res := c.db.Where(&model.Company{ID: id}).First(&company)
	if res.Error != nil {
		slog.Error("Failed to fetch company by ID", slog.String("company_id", companyID), slog.Any("error", res.Error))
		return model.Company{}, res.Error
	}
	slog.Info("Company fetched by ID", slog.String("company_id", companyID))
	return company, nil
}

// GetCompanyByName implements [storage.CompanyRepository].
func (c *CompanyRepository) GetCompanyByName(ctx *fiber.Ctx, name string) (model.Company, error) {
	var company model.Company
	res := c.db.Where("name ?", name).First(&company)
	if res.Error != nil {
		slog.Error("Failed to fetch company by name", slog.String("name", name), slog.Any("error", res.Error))
		return model.Company{}, res.Error
	}
	slog.Info("Company fetched by name", slog.String("name", name))
	return company, nil
}

func NewCompanyRepository(db *gorm.DB) storage.CompanyRepository {
	return &CompanyRepository{
		db: db,
	}
}
