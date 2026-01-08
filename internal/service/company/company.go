package company_service

import (
	"errors"
	"mime/multipart"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/etdan/x-ray/internal/constants/dto"
	"github.com/etdan/x-ray/internal/constants/localization"
	"github.com/etdan/x-ray/internal/constants/model"
	"github.com/etdan/x-ray/internal/service"
	"github.com/etdan/x-ray/internal/storage"
	"github.com/etdan/x-ray/utils"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

type CompanyService struct {
	companyRepo      storage.CompanyRepository
	userRepo         storage.UserRepository
	cloudinaryClient *cloudinary.Cloudinary
}

// CreateCompany implements [service.CompanyService].
func (c *CompanyService) CreateCompany(ctx *fiber.Ctx, req *dto.CreateCompanyReq) error {

	if company, err := c.companyRepo.GetCompanyByName(ctx, req.Name); err != nil && err.Error() != localization.ErrorCompanyNotFound.Message {
		return errors.New(err.Error())
	} else if company.ID != uuid.Nil {
		return errors.New(localization.ErrorCompanyAlreadyExists.Message)
	}

	albumsUrl, err := utils.UploadFilesToCloudinary(ctx, c.cloudinaryClient, req.Album, "Company-Albums")
	if err != nil {
		return err
	}
	logoUrl, err := utils.UploadFilesToCloudinary(ctx, c.cloudinaryClient, []*multipart.FileHeader{req.Logo}, "Company-Logos")
	if err != nil {
		return err
	}

	repoReq := dto.CreateCompanyRepoReq{
		UserID:       req.UserID,
		Name:         req.Name,
		Logo:         logoUrl[0],
		Website:      req.Website,
		Industry:     req.Industry,
		Size:         req.Size,
		Headquarters: req.Headquarters,
		Description:  req.Description,
		Album:        albumsUrl,
	}

	if err := c.companyRepo.CreateCompany(ctx, &repoReq); err != nil {
		return err
	}
	return nil
}

// GetCompaniesByPagination implements [service.CompanyService].
func (c *CompanyService) GetCompaniesByPagination(ctx *fiber.Ctx, filter dto.Filter) (dto.PaginatedResponse[[]dto.CompanyRes], error) {
	companies, err := c.companyRepo.FindByPagination(ctx, filter)
	if err != nil {
		return dto.PaginatedResponse[[]dto.CompanyRes]{}, err
	}
	companiesDTO := MapCompanyModelToDTO(companies.Data)

	return dto.PaginatedResponse[[]dto.CompanyRes]{
		Data: companiesDTO,
		Meta: companies.Meta,
	}, nil
}

// GetCompanyByID implements [service.CompanyService].
func (c *CompanyService) GetCompanyByID(ctx *fiber.Ctx, companyID string) (dto.CompanyRes, error) {
	company, err := c.companyRepo.GetCompanyByID(ctx, companyID)
	if err != nil {
		return dto.CompanyRes{}, err
	}
	companyDTO := MapCompanyModelToDTO([]model.Company{company})
	if len(companyDTO) == 0 {
		return dto.CompanyRes{}, errors.New(localization.ErrorCompanyNotFound.Message)
	}
	return companyDTO[0], nil
}

func NewCompanyService(companyRepo storage.CompanyRepository, userRepo storage.UserRepository, cloudinaryClient *cloudinary.Cloudinary) service.CompanyService {
	return &CompanyService{
		companyRepo:      companyRepo,
		userRepo:         userRepo,
		cloudinaryClient: cloudinaryClient,
	}
}
