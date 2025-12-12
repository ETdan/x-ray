package localization

type ResponseCode struct {
	StatusCode int
	Message    string
	Code       string
}

var ResponseCodes = []ResponseCode{
	SuccessfulLogin,
	SuccessCompanyCreated,
	AccessTokenRefreshSuccessful,

	// review related success
	SuccessReviewCreated,

	// salary related success
	SuccessSalaryCreated,

	// company related success
	SuccessCompanyFetched,
	SuccessCompaniesFetched,

	// Interview related success
	SuccessInterviewCreated,
	SuccessGetInterviewByCompanyID,
	SuccessGetInterviewByUserID,
	SuccessGetInterviewByID,
	SuccessGetPaginatedInterviews,

	// user related success
	SuccessUserFetchedByPagination,
	SuccessUserFetchedByUserID,
	SuccessUserFetchedByGoogleID,

	// generic errors
	ErrorInvalidRequest,
	ErrorResponseCodeNotFound,
	ErrorRecordNotFound,
	ErrorInternalServerError,
	ErrorBadRequest,

	// user related errors
	ErrorFetchingUser,
	ErrorCreatingUser,
	ErrorUserAlreadyExists,

	// Error Company related errors
	ErrorCompanyNotFound,
	ErrorCompanyAlreadyExists,

	// interview related errors
	ErrorCreateInterviewFailed,
	ErrorInterviewNotFound,

	// review related errors
	ErrorCreateReviewFailed,

	// salary related errors
	ErrorCreateSalaryFailed,

	// authentication related errors
	ErrorLoginFailed,
	ErrorInvalidAuthCallback,
	ErrorGoogleAuthStateMismatch,
	ErrorGeneratingAccessToken,
	ErrorUserUnauthorized,
	ErrorRefreshTokenNotFound,
}

var (
	// success
	SuccessfulLogin = ResponseCode{
		StatusCode: StatusOK,
		Code:       "USER_LOGIN_SUCCESSFUL",
		Message:    MsgUserLoginSuccessful,
	}
	AccessTokenRefreshSuccessful = ResponseCode{
		StatusCode: StatusOK,
		Code:       "ACCESS_TOKEN_REFRESH_SUCCESSFUL",
		Message:    MsgAccessTokenRefreshSuccessful,
	}
	SuccessCompanyCreated = ResponseCode{
		StatusCode: StatusCreated,
		Code:       "COMPANY_CREATED_SUCCESSFULLY",
		Message:    "company created successfully",
	}
	SuccessReviewCreated = ResponseCode{
		StatusCode: StatusCreated,
		Code:       "REVIEW_CREATED_SUCCESSFULLY",
		Message:    "review created successfully",
	}
	SuccessSalaryCreated = ResponseCode{
		StatusCode: StatusCreated,
		Code:       "SALARY_CREATED_SUCCESSFULLY",
		Message:    "salary created successfully",
	}

	SuccessCompanyFetched = ResponseCode{
		StatusCode: StatusOK,
		Code:       "COMPANY_FETCHED_SUCCESSFULLY",
		Message:    "company fetched successfully",
	}
	SuccessCompaniesFetched = ResponseCode{
		StatusCode: StatusOK,
		Code:       "COMPANIES_FETCHED_SUCCESSFULLY",
		Message:    "companies fetched successfully",
	}
	// interview related success
	SuccessInterviewCreated = ResponseCode{
		StatusCode: StatusCreated,
		Code:       "INTERVIEW_CREATED_SUCCESSFULLY",
		Message:    "interview created successfully",
	}
	SuccessGetInterviewByCompanyID = ResponseCode{
		StatusCode: StatusOK,
		Code:       "INTERVIEWS_FETCHED_BY_COMPANY_ID_SUCCESSFULLY",
		Message:    "interviews fetched by company ID successfully",
	}
	SuccessGetInterviewByUserID = ResponseCode{
		StatusCode: StatusOK,
		Code:       "INTERVIEWS_FETCHED_BY_USER_ID_SUCCESSFULLY",
		Message:    "interviews fetched by user ID successfully",
	}
	SuccessGetInterviewByID = ResponseCode{
		StatusCode: StatusOK,
		Code:       "INTERVIEW_FETCHED_BY_ID_SUCCESSFULLY",
		Message:    "interview fetched by ID successfully",
	}
	SuccessGetPaginatedInterviews = ResponseCode{
		StatusCode: StatusOK,
		Code:       "PAGINATED_INTERVIEWS_FETCHED_SUCCESSFULLY",
		Message:    "paginated interviews fetched successfully",
	}

	// user related success
	SuccessUserFetchedByGoogleID = ResponseCode{
		StatusCode: StatusOK,
		Code:       "USER_FETCHED_BY_GOOGLE_ID_SUCCESSFULLY",
		Message:    "user fetched by google ID successfully",
	}

	SuccessUserFetchedByUserID = ResponseCode{
		StatusCode: StatusOK,
		Code:       "USER_FETCHED_BY_USER_ID_SUCCESSFULLY",
		Message:    "user fetched by user ID successfully",
	}

	SuccessUserFetchedByPagination = ResponseCode{
		StatusCode: StatusOK,
		Code:       "USERS_FETCHED_BY_PAGINATION_SUCCESSFULLY",
		Message:    "users fetched by pagination successfully",
	}

	// generic errors
	ErrorInternalServerError = ResponseCode{
		StatusCode: StatusInternalServerError,
		Code:       "INTERNAL_SERVER_ERROR",
		Message:    "internal server error",
	}
	ErrorInvalidRequest = ResponseCode{
		StatusCode: StatusBadRequest,
		Code:       "INVALID_REQUEST",
		Message:    "invalid request",
	}
	ErrorBadRequest = ResponseCode{
		StatusCode: StatusBadRequest,
		Code:       "BAD_REQUEST",
		Message:    "invalid request body",
	}

	// errors
	ErrorResponseCodeNotFound = ResponseCode{
		StatusCode: StatusInternalServerError,
		Code:       "INTERNAL_CODE_NOT_FOUND",
		Message:    MsgResponseCodeNotFound,
	}
	ErrorInvalidAuthCallback = ResponseCode{
		StatusCode: StatusBadRequest,
		Code:       "INVALID_CALLBACK_REQUEST",
		Message:    MsgInvalidCallBackRequest,
	}

	ErrorGoogleAuthStateMismatch = ResponseCode{
		StatusCode: StatusBadRequest,
		Code:       "AUTH_STATE_STRING_MISMATCH",
		Message:    MsgAuthStateStringMismatch,
	}

	// user related errors
	ErrorUserAlreadyExists = ResponseCode{
		StatusCode: StatusConflict,
		Code:       "USER_ALREADY_EXISTS",
		Message:    MsgUserAlreadyExists,
	}
	ErrorCreatingUser = ResponseCode{
		StatusCode: StatusInternalServerError,
		Code:       "ERROR_CREATING_USER",
		Message:    MsgErrorCreatingUser,
	}
	ErrorFetchingUser = ResponseCode{
		StatusCode: StatusInternalServerError,
		Code:       "ERROR_FETCHING_USER",
		Message:    MsgErrorFetchingUser,
	}
	ErrorRecordNotFound = ResponseCode{
		StatusCode: StatusNotFound,
		Code:       "RECORD_NOT_FOUND",
		Message:    MsgRecordNotFound,
	}

	// authentication related errors
	ErrorLoginFailed = ResponseCode{
		StatusCode: StatusConflict,
		Code:       "LOGIN_FAILED",
		Message:    MsgLoginFailed,
	}
	ErrorGeneratingAccessToken = ResponseCode{
		StatusCode: StatusInternalServerError,
		Code:       "ERROR_GENERATING_ACCESS_TOKEN",
		Message:    MsgErrorGeneratingAccessToken,
	}
	ErrorRefreshTokenNotFound = ResponseCode{
		StatusCode: StatusBadRequest,
		Code:       "ERROR_REFRESH_TOKEN_NOT_FOUND",
		Message:    MsgErrorRefreshTokenNotFound,
	}
	ErrorUserUnauthorized = ResponseCode{
		Code:       "ERROR_USER_UNAUTHORIZED",
		StatusCode: StatusUnauthorized,
		Message:    MsgUserUnauthorized,
	}

	// company related errors
	ErrorCompanyNotFound = ResponseCode{
		StatusCode: StatusNotFound,
		Code:       "COMPANY_NOT_FOUND",
		Message:    MsgCompanyNotFound,
	}
	ErrorCompanyAlreadyExists = ResponseCode{
		StatusCode: StatusConflict,
		Code:       "COMPANY_ALREADY_EXISTS",
		Message:    MsgCompanyAlreadyExists,
	}

	// interview related errors
	ErrorInterviewNotFound = ResponseCode{
		StatusCode: StatusNotFound,
		Code:       "INTERVIEW_NOT_FOUND",
		Message:    MsgInterviewNotFound,
	}
	ErrorFetchingInterviews = ResponseCode{
		StatusCode: StatusInternalServerError,
		Code:       "ERROR_FETCHING_INTERVIEWS",
		Message:    "Error fetching interviews",
	}
	ErrorCreateInterviewFailed = ResponseCode{
		StatusCode: StatusInternalServerError,
		Code:       "ERROR_CREATING_INTERVIEW",
		Message:    MsgErrorCreatingInterview,
	}
	// review related errors
	ErrorCreateReviewFailed = ResponseCode{
		StatusCode: StatusInternalServerError,
		Code:       "ERROR_CREATING_REVIEW",
		Message:    MsgErrorCreatingReview,
	}
	ErrorFetchingReviews = ResponseCode{
		StatusCode: StatusInternalServerError,
		Code:       "ERROR_FETCHING_REVIEWS",
		Message:    MessageErrorFetchingReviews,
	}
	// salary related errors
	ErrorCreateSalaryFailed = ResponseCode{
		StatusCode: StatusInternalServerError,
		Code:       "ERROR_CREATING_SALARY",
		Message:    MsgErrorCreatingSalary,
	}
	ErrorFetchingSalaries = ResponseCode{
		StatusCode: StatusInternalServerError,
		Code:       "ERROR_FETCHING_SALARIES",
		Message:    MessageErrorFetchingSalaries,
	}
)
