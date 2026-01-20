package interview_storage

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

type InterviewRepository struct {
	db *gorm.DB
}

// CreateInterview implements [storage.InterviewRepository].
func (i *InterviewRepository) CreateInterview(ctx *fiber.Ctx, interview *dto.CreateInterviewReq) error {
	id := uuid.New()
	companyID, err := uuid.Parse(interview.CompanyID)
	if err != nil {
		slog.Error("Invalid company id", slog.String("company_id", interview.CompanyID), slog.Any("error", err))
		return err
	}
	userID, err := uuid.Parse(interview.UserID)
	if err != nil {
		slog.Error("Invalid user id", slog.String("user_id", interview.UserID), slog.Any("error", err))
		return err
	}
	res := i.db.Create(&model.Interview{
		ID:          id,
		CompanyID:   companyID,
		UserID:      userID,
		JobTitle:    interview.JobTitle,
		GotOffer:    interview.GotOffer,
		Difficulty:  int(interview.Difficulty),
		Experience:  interview.Experience,
		Description: interview.Description,
		CreatedAT:   time.Now(),
	})

	if res.Error != nil {
		slog.Error("Failed to create interview", slog.Any("error", res.Error), slog.Any("interview", interview))
		return res.Error
	}
	slog.Info("Interview created successfully", slog.Any("interview", interview))

	return nil
}

// FindByPagination implements [storage.InterviewRepository].
func (i *InterviewRepository) FindByPagination(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Interview], error) {
	var total int64
	var interviews []model.Interview

	countRes := i.db.Model(&model.Interview{}).Where(
		"company_id = ? AND (title ILIKE ? OR description ILIKE ?)",
		companyID, "%"+filter.Search+"%", "%"+filter.Search+"%",
	).Count(&total)
	if countRes.Error != nil {
		slog.Error("Failed to count interviews", slog.Any("error", countRes.Error), slog.String("search", filter.Search), slog.String("company_id", companyID))
		return dto.PaginatedResponse[[]model.Interview]{}, countRes.Error
	}
	totalPage := (total + int64(filter.Per_page) - 1) / int64(filter.Per_page)
	if filter.Page*filter.Per_page > total {
		return dto.PaginatedResponse[[]model.Interview]{
			Data: []model.Interview{},
			Meta: dto.MetaData{
				TotalCount: total,
				Page:       filter.Page,
				PerPage:    filter.Per_page,
				TotalPage:  totalPage,
			},
		}, nil

	}
	offset := int((filter.Page - 1) * filter.Per_page)
	res := i.db.Where(
		"company_id = ? AND (title ILIKE ? OR description ILIKE ?)",
		companyID, "%"+filter.Search+"%", "%"+filter.Search+"%",
	).Limit(int(filter.Per_page)).Offset(offset).Find(&interviews)

	if res.Error != nil {
		slog.Error("Failed to fetch interviews", slog.Any("error", res.Error), slog.String("search", filter.Search), slog.String("company_id", companyID))
		return dto.PaginatedResponse[[]model.Interview]{}, res.Error
	}

	slog.Info("Interviews fetched successfully", slog.Int("count", len(interviews)), slog.String("search", filter.Search), slog.String("company_id", companyID))

	return dto.PaginatedResponse[[]model.Interview]{
		Data: interviews,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  totalPage,
		},
	}, nil
}

// GetInterviewByCompanyID implements [storage.InterviewRepository].
func (i *InterviewRepository) GetInterviewByCompanyID(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Interview], error) {
	var total int64
	companyUUID, err := uuid.Parse(companyID)
	if err != nil {
		slog.Error("Invalid company id", slog.String("company_id", companyID), slog.Any("error", err))
		return dto.PaginatedResponse[[]model.Interview]{}, err
	}

	countErr := i.db.Model(&model.Interview{}).Where(&model.Interview{CompanyID: companyUUID}).Count(&total)
	if countErr.Error != nil {
		slog.Error("Failed to count interviews by company ID", slog.String("company_id", companyID), slog.Any("error", countErr.Error))
		return dto.PaginatedResponse[[]model.Interview]{}, countErr.Error
	}
	totalPage := (total + int64(filter.Per_page) - 1) / int64(filter.Per_page)
	if filter.Page*filter.Per_page > total {
		return dto.PaginatedResponse[[]model.Interview]{
			Data: []model.Interview{},
			Meta: dto.MetaData{
				TotalCount: total,
				Page:       filter.Page,
				PerPage:    filter.Per_page,
				TotalPage:  totalPage,
			},
		}, nil
	}

	offset := int((filter.Page - 1) * filter.Per_page)

	var interviews []model.Interview
	res := i.db.Where(&model.Interview{CompanyID: companyUUID}).Limit(int(filter.Per_page)).Offset(offset).Find(&interviews)

	if res.Error != nil {
		slog.Error("Failed to fetch interviews by company ID", slog.String("company_id", companyID), slog.Any("error", res.Error))
		return dto.PaginatedResponse[[]model.Interview]{}, res.Error
	}

	slog.Info("Interviews fetched by company ID", slog.String("company_id", companyID), slog.Int("count", len(interviews)))
	return dto.PaginatedResponse[[]model.Interview]{
		Data: interviews,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  totalPage,
		},
	}, nil
}

// GetInterviewByID implements [storage.InterviewRepository].
func (i *InterviewRepository) GetInterviewByID(ctx *fiber.Ctx, interviewID string) (model.Interview, error) {
	interviewUUID, err := uuid.Parse(interviewID)
	if err != nil {
		slog.Error("Invalid interview id", slog.String("interview_id", interviewID), slog.Any("error", err))
		return model.Interview{}, err
	}
	var interview model.Interview
	res := i.db.Where(&model.Interview{ID: interviewUUID}).First(&interview)
	if res.Error != nil {
		slog.Error("Failed to fetch interview by ID", slog.String("interview_id", interviewID), slog.Any("error", res.Error))
		return model.Interview{}, res.Error
	}
	slog.Info("Interview fetched by ID", slog.String("interview_id", interviewID))
	return interview, nil
}

// GetInterviewByUserID implements [storage.InterviewRepository].
func (i *InterviewRepository) GetInterviewByUserID(ctx *fiber.Ctx, userID string, filter dto.Filter) (dto.PaginatedResponse[[]model.Interview], error) {
	var total int64
	userUUID, err := uuid.Parse(userID)
	if err != nil {
		slog.Error("Invalid user id", slog.String("user_id", userID), slog.Any("error", err))
		return dto.PaginatedResponse[[]model.Interview]{}, err
	}

	countErr := i.db.Model(&model.Interview{}).Where(&model.Interview{UserID: userUUID}).Count(&total)
	if countErr.Error != nil {
		slog.Error("Failed to count interviews by user ID", slog.String("user_id", userID), slog.Any("error", countErr.Error))
		return dto.PaginatedResponse[[]model.Interview]{}, countErr.Error
	}

	totalPage := (total + int64(filter.Per_page) - 1) / int64(filter.Per_page)
	if filter.Page*filter.Per_page > total {
		return dto.PaginatedResponse[[]model.Interview]{
			Data: []model.Interview{},
			Meta: dto.MetaData{
				TotalCount: total,
				Page:       filter.Page,
				PerPage:    filter.Per_page,
				TotalPage:  totalPage,
			},
		}, nil
	}
	var interviews []model.Interview
	offset := int((filter.Page - 1) * filter.Per_page)
	res := i.db.Where(&model.Interview{UserID: userUUID}).Limit(int(filter.Per_page)).Offset(offset).Find(&interviews)
	if res.Error != nil {
		slog.Error("Failed to fetch interviews by user ID", slog.String("user_id", userID), slog.Any("error", res.Error))
		return dto.PaginatedResponse[[]model.Interview]{}, res.Error
	}
	slog.Info("Interviews fetched by user ID", slog.String("user_id", userID), slog.Int("count", len(interviews)))
	return dto.PaginatedResponse[[]model.Interview]{
		Data: interviews,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  totalPage,
		},
	}, nil
}

// GetInterviewsByPagination implements [storage.InterviewRepository].
func (i *InterviewRepository) GetInterviewsByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.Interview], error) {
	var total int64
	var interviews []model.Interview
	countRes := i.db.Model(&model.Interview{}).Where(
		"job_title ILIKE ? OR description ILIKE ?",
		"%"+filter.Search+"%", "%"+filter.Search+"%",
	).Count(&total)
	if countRes.Error != nil {
		slog.Error("Failed to count interviews", slog.Any("error", countRes.Error), slog.String("search", filter.Search))
		return dto.PaginatedResponse[[]model.Interview]{}, countRes.Error
	}
	totalPage := (total + int64(filter.Per_page) - 1) / int64(filter.Per_page)
	if (filter.Page-1)*filter.Per_page > total {
		return dto.PaginatedResponse[[]model.Interview]{
			Data: []model.Interview{},
			Meta: dto.MetaData{
				TotalCount: total,
				Page:       filter.Page,
				PerPage:    filter.Per_page,
				TotalPage:  totalPage,
			},
		}, nil
	}

	offset := int((filter.Page - 1) * filter.Per_page)
	res := i.db.Where(
		"job_title ILIKE ? OR description ILIKE ?",
		"%"+filter.Search+"%", "%"+filter.Search+"%",
	).Limit(int(filter.Per_page)).Offset(offset).Find(&interviews)

	if res.Error != nil {
		slog.Error("Failed to fetch interviews", slog.Any("error", res.Error), slog.String("search", filter.Search))
		return dto.PaginatedResponse[[]model.Interview]{}, res.Error
	}

	slog.Info("Interviews fetched successfully", slog.Int("count", len(interviews)), slog.String("search", filter.Search))

	return dto.PaginatedResponse[[]model.Interview]{
		Data: interviews,
		Meta: dto.MetaData{
			TotalCount: total,
			Page:       filter.Page,
			PerPage:    filter.Per_page,
			TotalPage:  totalPage,
		},
	}, nil
}

func NewInterviewRepository(db *gorm.DB) storage.InterviewRepository {
	return &InterviewRepository{
		db: db,
	}
}
