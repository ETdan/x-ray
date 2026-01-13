package salary_service

import (
	"fmt"
	"log/slog"

	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/etdan/x-ray/internal/service"
	"github.com/etdan/x-ray/internal/storage"
	"github.com/gofiber/fiber/v2"
)

type SalaryService struct {
	salaryRepo  storage.SalaryRepository
	companyRepo storage.CompanyRepository
	userRepo    storage.UserRepository
}

// CreateSalary implements [service.SalaryService].
func (s *SalaryService) CreateSalary(ctx *fiber.Ctx, req *dto.CreateSalaryReq) error {
	userID := ctx.Locals("user_id")
	userIDStr, _ := userID.(string)

	if _, err := s.userRepo.FindUserByUserID(ctx, userIDStr); err != nil {
		return fmt.Errorf("%s", localization.ErrorFetchingUser.Code)
	}
	if _, err := s.companyRepo.GetCompanyByID(ctx, req.CompanyID); err != nil {
		return fmt.Errorf("%s", localization.ErrorCompanyNotFound.Code)
	}
	if err := s.salaryRepo.CreateSalary(ctx, req); err != nil {
		return fmt.Errorf("%s", localization.ErrorCreateSalaryFailed.Code)
	}
	return nil
}

// GetSalariesByPagination implements [service.SalaryService].
func (s *SalaryService) GetSalariesByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]dto.SalaryRes], error) {
	salaries, err := s.salaryRepo.GetSalariesByPagination(ctx, filter)
	if err != nil {
		slog.Error("[GetSalariesByPagination] error paginating salaries", "err", err)
		return dto.PaginatedResponse[[]dto.SalaryRes]{}, fmt.Errorf("%s", localization.ErrorFetchingSalaries.Code)
	}
	salaryDto := MapListModelToListDTOSalary(salaries.Data)
	return dto.PaginatedResponse[[]dto.SalaryRes]{
		Data: salaryDto,
		Meta: salaries.Meta,
	}, nil
}

// GetSalaryByCompanyID implements [service.SalaryService].
func (s *SalaryService) GetSalaryByCompanyID(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]dto.SalaryRes], error) {
	salaries, err := s.salaryRepo.GetSalaryByCompanyID(ctx, companyID, filter)
	if err != nil {
		slog.Error("[GetSalaryByCompanyID] error getting salaries for company", "companyID", companyID, "err", err)
		return dto.PaginatedResponse[[]dto.SalaryRes]{}, fmt.Errorf("%s", localization.ErrorFetchingSalaries.Code)
	}
	salaryDto := MapListModelToListDTOSalary(salaries.Data)
	return dto.PaginatedResponse[[]dto.SalaryRes]{
		Data: salaryDto,
		Meta: salaries.Meta,
	}, nil
}

// GetSalaryByID implements [service.SalaryService].
func (s *SalaryService) GetSalaryByID(ctx *fiber.Ctx, salaryID string) (dto.SalaryRes, error) {
	salary, err := s.salaryRepo.GetSalaryByID(ctx, salaryID)
	if err != nil {
		slog.Error("[GetSalaryByID] error getting salary by ID", "salaryID", salaryID, "err", err)
		return dto.SalaryRes{}, fmt.Errorf("%s", localization.ErrorFetchingSalaries.Code)
	}
	res := MapListModelToListDTOSalary([]model.Salary{salary})
	return res[0], nil
}

// GetSalaryByUserID implements [service.SalaryService].
func (s *SalaryService) GetSalaryByUserID(ctx *fiber.Ctx, userID string, filter dto.Filter) (dto.PaginatedResponse[[]dto.SalaryRes], error) {
	salaries, err := s.salaryRepo.GetSalaryByUserID(ctx, userID, filter)
	if err != nil {
		slog.Error("[GetSalaryByUserID] error getting salaries for user", "userID", userID, "err", err)
		return dto.PaginatedResponse[[]dto.SalaryRes]{}, fmt.Errorf("%s", localization.ErrorFetchingSalaries.Code)
	}
	salaryDto := MapListModelToListDTOSalary(salaries.Data)
	return dto.PaginatedResponse[[]dto.SalaryRes]{
		Data: salaryDto,
		Meta: salaries.Meta,
	}, nil
}

func NewSalaryService(salaryRepo storage.SalaryRepository, companyRepo storage.CompanyRepository, userRepo storage.UserRepository) service.SalaryService {
	return &SalaryService{
		salaryRepo:  salaryRepo,
		companyRepo: companyRepo,
		userRepo:    userRepo,
	}
}
