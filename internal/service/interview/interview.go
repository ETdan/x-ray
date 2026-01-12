package interview_service

import (
	"fmt"

	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/etdan/x-ray/internal/service"
	"github.com/etdan/x-ray/internal/storage"
	"github.com/gofiber/fiber/v2"
)

type InterviewService struct {
	interviewRepo storage.InterviewRepository
	userRepo      storage.UserRepository
	companyRepo   storage.CompanyRepository
}

// CreateInterview implements [service.InterviewService].
func (i *InterviewService) CreateInterview(ctx *fiber.Ctx, req *dto.CreateInterviewReq) error {
	userID := ctx.Locals("user_id")
	userIDStr, _ := userID.(string)

	if _, err := i.userRepo.FindUserByUserID(ctx, userIDStr); err != nil {
		return fmt.Errorf("%s", localization.ErrorFetchingUser.Code)
	}
	if _, err := i.companyRepo.GetCompanyByID(ctx, req.CompanyID); err != nil {
		return fmt.Errorf("%s", localization.ErrorCompanyNotFound.Code)
	}
	if err := i.interviewRepo.CreateInterview(ctx, req); err != nil {
		return fmt.Errorf("%s", localization.ErrorCreateInterviewFailed.Code)
	}
	return nil
}

// GetInterviewByCompanyID implements [service.InterviewService].
func (i *InterviewService) GetInterviewByCompanyID(ctx *fiber.Ctx, companyID string, filter dto.Filter) (dto.PaginatedResponse[[]dto.InterviewRes], error) {
	interviews, err := i.interviewRepo.GetInterviewByCompanyID(ctx, companyID, filter)
	if err != nil {
		return dto.PaginatedResponse[[]dto.InterviewRes]{}, fmt.Errorf("%s", localization.ErrorFetchingInterviews.Code)
	}
	interviewDto := MapListModelToListDTOInterview(interviews.Data)
	return dto.PaginatedResponse[[]dto.InterviewRes]{
		Data: interviewDto,
		Meta: interviews.Meta,
	}, nil
}

// GetInterviewByID implements [service.InterviewService].
func (i *InterviewService) GetInterviewByID(ctx *fiber.Ctx, interviewID string) (dto.InterviewRes, error) {
	interview, err := i.interviewRepo.GetInterviewByID(ctx, interviewID)
	if err != nil {
		return dto.InterviewRes{}, err
	}
	res := MapListModelToListDTOInterview([]model.Interview{interview})
	return res[0], nil
}

// GetInterviewByUserID implements [service.InterviewService].
func (i *InterviewService) GetInterviewByUserID(ctx *fiber.Ctx, userID string, filter dto.Filter) (dto.PaginatedResponse[[]dto.InterviewRes], error) {
	interviews, err := i.interviewRepo.GetInterviewByUserID(ctx, userID, filter)
	if err != nil {
		return dto.PaginatedResponse[[]dto.InterviewRes]{}, fmt.Errorf("%s", localization.ErrorFetchingInterviews.Code)
	}
	interviewDto := MapListModelToListDTOInterview(interviews.Data)
	return dto.PaginatedResponse[[]dto.InterviewRes]{
		Data: interviewDto,
		Meta: interviews.Meta,
	}, nil
}

// GetInterviewsByPagination implements [service.InterviewService].
func (i *InterviewService) GetInterviewsByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]model.Interview], error) {
	interviews, err := i.interviewRepo.GetInterviewsByPagination(ctx, filter)
	if err != nil {
		return dto.PaginatedResponse[[]model.Interview]{}, fmt.Errorf("%s", localization.ErrorFetchingInterviews.Code)
	}
	return interviews, nil
}

func NewInterviewService(interviewRepo storage.InterviewRepository, userRepo storage.UserRepository, companyRepo storage.CompanyRepository) service.InterviewService {
	return &InterviewService{
		interviewRepo: interviewRepo,
		userRepo:      userRepo,
		companyRepo:   companyRepo,
	}
}
