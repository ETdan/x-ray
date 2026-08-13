import { FiCheckCircle, FiGlobe, FiMapPin, FiBriefcase, FiUsers, FiStar, FiShare2, FiEdit3, FiDollarSign, FiMessageSquare } from "react-icons/fi";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function CompanyHero({
  company,
  onWriteReview,
  onShareSalary,
  onShareInterview,
}) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${company.name} on X-Ray`,
        text: `Check out real workplace reviews, salaries, and interview experiences for ${company.name} on X-Ray.`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Company profile URL copied to clipboard!");
    }
  };

  return (
    <div className="bg-surface border-b border-border shadow-soft relative overflow-hidden">
      
      {/* 3:1 Aspect Ratio Banner Image Cover */}
      <div className="h-44 sm:h-56 lg:h-64 w-full relative bg-neutral-900 overflow-hidden">
        <img
          src={company.bannerImage}
          alt={`${company.name} banner`}
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Surface Card for Company Info BELOW the image for 100% text contrast */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Logo & Company Identity Info (Clear Dark Text on White Surface) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className={`h-24 w-24 sm:h-28 sm:w-28 rounded-2xl ${company.logoBg} font-black text-2xl sm:text-3xl flex items-center justify-center border-4 border-surface shadow-card shrink-0 -mt-12 sm:-mt-14 relative z-10`}>
              {company.logoText}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl sm:text-4xl font-black text-text tracking-tight">
                  {company.name}
                </h1>
                {company.verified && (
                  <Badge variant="emerald" className="gap-1.5 py-1 px-3">
                    <FiCheckCircle size={14} /> Verified Employer
                  </Badge>
                )}
              </div>

              <p className="text-sm font-semibold text-text-muted italic">{company.tagline}</p>

              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-text-muted pt-1">
                <span className="flex items-center gap-1.5"><FiBriefcase className="text-primary"/> {company.industry}</span>
                <span className="flex items-center gap-1.5"><FiMapPin className="text-primary"/> {company.location}</span>
                <span className="flex items-center gap-1.5"><FiUsers className="text-primary"/> {company.size}</span>
                {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-primary hover:underline"
                  >
                    <FiGlobe /> Website
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Rating Summary & Action CTAs */}
          <div className="flex flex-col sm:flex-row items-start lg:items-center gap-4 shrink-0">
            
            {/* Rating Box */}
            <div className="flex items-center gap-4 bg-surface-secondary/90 p-4 rounded-2xl border border-border">
              <div className="text-center px-2">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-3xl font-black text-text">{company.rating}</span>
                  <span className="text-amber-500 text-2xl">★</span>
                </div>
                <span className="text-xs font-extrabold text-text-muted uppercase tracking-wider block mt-0.5">Overall</span>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div className="text-xs font-semibold text-text-muted space-y-1">
                <div><strong className="text-text">{company.reviewCount}</strong> Reviews</div>
                <div><strong className="text-emerald-700">{company.salaryCount}</strong> Salaries</div>
                <div><strong className="text-primary">{company.openJobsCount}</strong> Openings</div>
              </div>
            </div>

            {/* Action Buttons using Shadcn Button */}
            <div className="flex flex-wrap gap-2.5 w-full sm:w-auto">
              <Button onClick={onWriteReview} variant="default" size="default">
                <FiEdit3 size={16} /> Write Review
              </Button>
              <Button onClick={onShareSalary} variant="secondary" size="default">
                <FiDollarSign size={16} className="text-emerald-600" /> Share Salary
              </Button>
              <Button onClick={onShareInterview} variant="secondary" size="default">
                <FiMessageSquare size={16} className="text-amber-500" /> Interview
              </Button>
              <Button onClick={handleShare} variant="outline" size="icon">
                <FiShare2 size={18} />
              </Button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
