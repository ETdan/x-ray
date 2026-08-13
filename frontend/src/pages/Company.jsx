import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CompanyHero from "../components/company/CompanyHero";
import CompanyNavigation from "../components/company/CompanyNavigation";
import CompanyOverview from "../components/company/CompanyOverview";
import CompanyReviewsTab from "../components/company/CompanyReviewsTab";
import CompanySalariesTab from "../components/company/CompanySalariesTab";
import CompanyInterviewsTab from "../components/company/CompanyInterviewsTab";
import CompanyJobsTab from "../components/company/CompanyJobsTab";
import CompanyBenefitsTab from "../components/company/CompanyBenefitsTab";
import CompanyPhotosTab from "../components/company/CompanyPhotosTab";
import WriteReviewModal from "../components/modals/WriteReviewModal";
import ShareSalaryModal from "../components/modals/ShareSalaryModal";
import ShareInterviewModal from "../components/modals/ShareInterviewModal";
import { MOCK_COMPANIES } from "../data/mockData";

export default function Company() {
  const { id, tab } = useParams();
  const navigate = useNavigate();

  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [salaryModalOpen, setSalaryModalOpen] = useState(false);
  const [interviewModalOpen, setInterviewModalOpen] = useState(false);

  // Fallback to Safaricom Ethiopia if ID not found or default
  const company = MOCK_COMPANIES.find((c) => c.id === id) || MOCK_COMPANIES[0];
  const activeTab = tab || "overview";

  return (
    <div className="min-h-screen bg-background pb-16">

      {/* Hero Banner Header */}
      <CompanyHero
        company={company}
        onWriteReview={() => setReviewModalOpen(true)}
        onShareSalary={() => setSalaryModalOpen(true)}
        onShareInterview={() => setInterviewModalOpen(true)}
      />

      {/* Sticky Tab Sub-navigation */}
      <CompanyNavigation companyId={company.id} activeTab={activeTab} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === "overview" && (
          <CompanyOverview
            company={company}
            onWriteReview={() => setReviewModalOpen(true)}
            onShareSalary={() => setSalaryModalOpen(true)}
            onShareInterview={() => setInterviewModalOpen(true)}
          />
        )}

        {activeTab === "reviews" && (
          <CompanyReviewsTab
            company={company}
            onWriteReview={() => setReviewModalOpen(true)}
          />
        )}

        {activeTab === "salaries" && (
          <CompanySalariesTab
            company={company}
            onShareSalary={() => setSalaryModalOpen(true)}
          />
        )}

        {activeTab === "interviews" && (
          <CompanyInterviewsTab
            company={company}
            onShareInterview={() => setInterviewModalOpen(true)}
          />
        )}

        {activeTab === "jobs" && (
          <CompanyJobsTab company={company} />
        )}

        {activeTab === "benefits" && (
          <CompanyBenefitsTab company={company} />
        )}

        {activeTab === "photos" && (
          <CompanyPhotosTab company={company} />
        )}
      </main>

      {/* Interactive Submission Modals */}
      <WriteReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        company={company}
      />

      <ShareSalaryModal
        isOpen={salaryModalOpen}
        onClose={() => setSalaryModalOpen(false)}
        company={company}
      />

      <ShareInterviewModal
        isOpen={interviewModalOpen}
        onClose={() => setInterviewModalOpen(false)}
        company={company}
      />

    </div>
  );
}
