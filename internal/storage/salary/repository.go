package salary_storage

import (
	"log/slog"
	"time"

	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/etdan/x-ray/internal/storage"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type SalaryRepository struct {
	db *gorm.DB
}

// CreateSalary implements [storage.SalaryRepository].
func (s *SalaryRepository) CreateSalary(ctx *fiber.Ctx, salary *dto.CreateSalaryReq) error {
	slog.Info("create salary repository", "salary:", salary)
	id := uuid.New()

	userID, err := uuid.Parse(salary.UserID)
	if err != nil {
		slog.Error("Invalid user id", slog.String("user_id", salary.UserID), slog.Any("error", err))
		return err
	}
	companyID, err := uuid.Parse(salary.CompanyID)
	if err != nil {
		slog.Error("Invalid company id", slog.String("company_id", salary.CompanyID), slog.Any("error", err))
		return err
	}
	res := s.db.Create(&model.Salary{
		ID:         id,
		UserID:     userID,
		CompanyID:  companyID,
		JobTitle:   salary.JobTitle,
		Experience: salary.Experience,
		Position:   salary.Position,
		SalaryMin:  salary.SalaryMin,
		SalaryMax:  salary.SalaryMax,
		SalaryAvg:  salary.SalaryAvg,
		Bonus:      salary.Bonus,
		Benefit:    salary.Benefit,
		CreatedAT:  time.Now(),
	})
	if res.Error != nil {
		slog.Error("Failed to create salary", slog.Any("error", res.Error), slog.Any("salary", salary))
		return res.Error
	}
	slog.Info("Salary created successfully", slog.Any("salary", salary))
	return nil
}

// FindByPagination implements [storage.SalaryRepository].
func (s *SalaryRepository) FindByPagination(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Salary], error) {
	slog.Info("find salaries by pagination repository", "companyID:", companyID, "filter:", filter)
	var total int64
	var salaries []model.Salary
	countRes := s.db.Model(&model.Salary{}).Where(
		"company_id = ? AND (job_title ILIKE ? OR experience ILIKE ? OR position ILIKE ?)",
		companyID, "%"+filter.Search+"%", "%"+filter.Search+"%", "%"+filter.Search+"%",
	).Count(&total)
	if countRes.Error != nil {
		slog.Error("Failed to count salaries", slog.Any("error", countRes.Error), slog.String("search", filter.Search), slog.String("company_id", companyID))
		return dto.PaginatedResponse[[]model.Salary]{}, countRes.Error
	}

	offset := (filter.Page - 1) * filter.Per_page
	totalPages := (total + filter.Per_page - 1) / filter.Per_page

	if offset >= total {
		return dto.PaginatedResponse[[]model.Salary]{
			Data: []model.Salary{},
			Meta: dto.MetaData{
				TotalCount: total,
				Page:       filter.Page,
				PerPage:    filter.Per_page,
				TotalPage:  totalPages,
			},
		}, nil
	}

	res := s.db.Where(
		"company_id = ? AND (job_title ILIKE ? OR experience ILIKE ? OR position ILIKE ?)",
		companyID, "%"+filter.Search+"%", "%"+filter.Search+"%", "%"+filter.Search+"%",
	).Limit(int(filter.Per_page)).Offset(int(offset)).Find(&salaries)

	if res.Error != nil {
		slog.Error("Failed to fetch salaries", slog.Any("error", res.Error), slog.String("search", filter.Search), slog.String("company_id", companyID))
		return dto.PaginatedResponse[[]model.Salary]{}, res.Error
	}

	slog.Info("Salaries fetched successfully", slog.Int("count", len(salaries)), slog.String("search", filter.Search), slog.String("company_id", companyID))

	return dto.PaginatedResponse[[]model.Salary]{
		Data: salaries,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  totalPages,
		},
	}, nil
}

// GetSalariesByPagination implements [storage.SalaryRepository].
func (s *SalaryRepository) GetSalariesByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.Salary], error) {
	slog.Info("get salaries by pagination repository", "filter:", filter)
	var total int64
	var salaries []model.Salary
	countRes := s.db.Model(&model.Salary{}).Where(
		"job_title ILIKE ? OR experience ILIKE ? OR position ILIKE ?",
		"%"+filter.Search+"%", "%"+filter.Search+"%", "%"+filter.Search+"%",
	).Count(&total)
	if countRes.Error != nil {
		slog.Error("Failed to count salaries", slog.Any("error", countRes.Error), slog.String("search", filter.Search))
		return dto.PaginatedResponse[[]model.Salary]{}, countRes.Error
	}

	offset := (filter.Page - 1) * filter.Per_page
	totalPages := (total + filter.Per_page - 1) / filter.Per_page

	if offset >= total {
		return dto.PaginatedResponse[[]model.Salary]{
			Data: []model.Salary{},
			Meta: dto.MetaData{
				TotalCount: total,
				Page:       filter.Page,
				PerPage:    filter.Per_page,
				TotalPage:  totalPages,
			},
		}, nil
	}

	res := s.db.Where(
		"job_title ILIKE ? OR experience ILIKE ? OR position ILIKE ?",
		"%"+filter.Search+"%", "%"+filter.Search+"%", "%"+filter.Search+"%",
	).Limit(int(filter.Per_page)).Offset(int(offset)).Find(&salaries)

	if res.Error != nil {
		slog.Error("Failed to fetch salaries", slog.Any("error", res.Error), slog.String("search", filter.Search))
		return dto.PaginatedResponse[[]model.Salary]{}, res.Error
	}

	slog.Info("Salaries fetched successfully", slog.Int("count", len(salaries)), slog.String("search", filter.Search))

	return dto.PaginatedResponse[[]model.Salary]{
		Data: salaries,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  totalPages,
		},
	}, nil
}

// GetSalaryByCompanyID implements [storage.SalaryRepository].
func (s *SalaryRepository) GetSalaryByCompanyID(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Salary], error) {
	slog.Info("get salaries by company ID repository", "companyID:", companyID, "filter:", filter)
	var total int64
	var salaries []model.Salary
	countRes := s.db.Model(&model.Salary{}).Where("company_id = ?", companyID).Count(&total)
	if countRes.Error != nil {
		slog.Error("Failed to count salaries", slog.Any("error", countRes.Error), slog.String("search", filter.Search), slog.String("company_id", companyID))
		return dto.PaginatedResponse[[]model.Salary]{}, countRes.Error
	}

	offset := (filter.Page - 1) * filter.Per_page
	totalPages := (total + filter.Per_page - 1) / filter.Per_page

	if offset >= total {
		return dto.PaginatedResponse[[]model.Salary]{
			Data: []model.Salary{},
			Meta: dto.MetaData{
				TotalCount: total,
				Page:       filter.Page,
				PerPage:    filter.Per_page,
				TotalPage:  totalPages,
			},
		}, nil
	}

	res := s.db.Model(&model.Salary{}).Where(
		"company_id = ?", companyID).Limit(int(filter.Per_page)).Offset(int(offset)).Find(&salaries)

	if res.Error != nil {
		slog.Error("Failed to fetch salaries", slog.Any("error", res.Error), slog.String("search", filter.Search), slog.String("company_id", companyID))
		return dto.PaginatedResponse[[]model.Salary]{}, res.Error
	}

	slog.Info("Salaries fetched successfully", slog.Int("count", len(salaries)), slog.String("search", filter.Search), slog.String("company_id", companyID))

	return dto.PaginatedResponse[[]model.Salary]{
		Data: salaries,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  totalPages,
		},
	}, nil
}

// GetSalaryByID implements [storage.SalaryRepository].
func (s *SalaryRepository) GetSalaryByID(ctx *fiber.Ctx, salaryID string) (model.Salary, error) {
	slog.Info("get salary by id repository", "id:", salaryID)
	var salary model.Salary
	salaryUUID, err := uuid.Parse(salaryID)
	if err != nil {
		slog.Error("Invalid salary id", slog.String("salary_id", salaryID), slog.Any("error", err))
		return model.Salary{}, err
	}
	res := s.db.Where(&model.Salary{ID: salaryUUID}).First(&salary)
	if res.Error != nil {
		slog.Error("Failed to fetch salary by ID", slog.String("salary_id", salaryID), slog.Any("error", res.Error))
		return model.Salary{}, res.Error
	}
	slog.Info("Salary fetched by ID", slog.String("salary_id", salaryID))
	return salary, nil
}

// GetSalaryByUserID implements [storage.SalaryRepository].
func (s *SalaryRepository) GetSalaryByUserID(ctx *fiber.Ctx, userID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Salary], error) {
	slog.Info("get salaries by user ID repository", "userID:", userID, "filter:", filter)
	var total int64
	var salaries []model.Salary
	userUUID, err := uuid.Parse(userID)
	if err != nil {
		slog.Error("Invalid user id", slog.String("user_id", userID), slog.Any("error", err))
		return dto.PaginatedResponse[[]model.Salary]{}, err
	}

	countErr := s.db.Model(&model.Salary{}).Where("user_id = ?", userUUID).Count(&total)
	if countErr.Error != nil {
		slog.Error("Failed to count salaries by user ID", slog.String("user_id", userID), slog.Any("error", countErr.Error))
		return dto.PaginatedResponse[[]model.Salary]{}, countErr.Error
	}
	offset := (filter.Page - 1) * filter.Per_page
	totalPages := (total + filter.Per_page - 1) / filter.Per_page
	if offset >= total {
		return dto.PaginatedResponse[[]model.Salary]{
			Data: []model.Salary{},
			Meta: dto.MetaData{
				TotalCount: total,
				Page:       filter.Page,
				PerPage:    filter.Per_page,
				TotalPage:  totalPages,
			},
		}, nil
	}

	res := s.db.Where("user_id = ?", userUUID).Limit(int(filter.Per_page)).Offset(int(offset)).Find(&salaries)
	if res.Error != nil {
		slog.Error("Failed to fetch salaries by user ID", slog.String("user_id", userID), slog.Any("error", res.Error))
		return dto.PaginatedResponse[[]model.Salary]{}, res.Error
	}
	slog.Info("Salaries fetched by user ID", slog.String("user_id", userID), slog.Int("count", len(salaries)))
	return dto.PaginatedResponse[[]model.Salary]{
		Data: salaries,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  totalPages,
		},
	}, nil
}

func NewSalaryRepository(db *gorm.DB) storage.SalaryRepository {
	return &SalaryRepository{
		db: db,
	}
}
