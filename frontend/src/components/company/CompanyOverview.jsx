import { Link } from "react-router-dom";
import { FiStar, FiArrowRight, FiCheckCircle, FiBriefcase, FiDollarSign, FiMessageSquare, FiImage, FiAward, FiShield, FiHeart } from "react-icons/fi";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { MOCK_REVIEWS, MOCK_SALARIES, MOCK_INTERVIEWS, MOCK_JOBS } from "../../data/mockData";

export default function CompanyOverview({ company, onWriteReview, onShareSalary, onShareInterview }) {
  const companyReviews = MOCK_REVIEWS.filter(r => r.companyId === company.id);
  const companySalaries = MOCK_SALARIES.filter(s => s.companyId === company.id);
  const companyInterviews = MOCK_INTERVIEWS.filter(i => i.companyId === company.id);
  const companyJobs = MOCK_JOBS.filter(j => j.companyId === company.id);

  const snapshot = company.ratingsSnapshot || {
    workLife: 4.2,
    management: 3.9,
    careerGrowth: 4.5,
    compensation: 4.6,
    culture: 4.3,
    ceoApproval: 90,
    recommendToFriend: 85
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
      
      {/* Left / Center Main Column (2 Cols) */}
      <div className="lg:col-span-2 space-y-8">

        {/* 1. About Company */}
        <Card>
          <CardHeader>
            <CardTitle>About {company.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-text-muted leading-relaxed text-base">{company.description}</p>
          </CardContent>
        </Card>

        {/* 2. Ratings Snapshot */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Workplace Rating Breakdown</CardTitle>
            <span className="text-xs font-extrabold text-text-muted uppercase tracking-wider">Based on {company.reviewCount} reviews</span>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Work-Life Balance", value: snapshot.workLife },
                { label: "Management & Leadership", value: snapshot.management },
                { label: "Career Growth & Mentorship", value: snapshot.careerGrowth },
                { label: "Compensation & Benefits", value: snapshot.compensation },
                { label: "Culture & Values", value: snapshot.culture },
              ].map((metric) => (
                <div key={metric.label} className="p-4 rounded-2xl bg-surface-secondary/60 border border-border flex items-center justify-between">
                  <span className="text-sm font-semibold text-text">{metric.label}</span>
                  <div className="flex items-center gap-1.5 font-black text-text text-sm">
                    <span>{metric.value}</span>
                    <span className="text-amber-500">★</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CEO & Recommendation stats */}
            <div className="pt-6 border-t border-border grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3.5 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl">
                <div className="h-10 w-10 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-black">
                  {snapshot.recommendToFriend}%
                </div>
                <div className="text-xs font-semibold text-text">
                  <span className="block font-bold text-emerald-900">Recommend to a Friend</span>
                  Positive recommendation rate
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-indigo-50/70 border border-indigo-200/80 rounded-2xl">
                <div className="h-10 w-10 bg-indigo-100 text-indigo-800 rounded-full flex items-center justify-center font-black">
                  {snapshot.ceoApproval}%
                </div>
                <div className="text-xs font-semibold text-text">
                  <span className="block font-bold text-indigo-900">Approve of Executive Team</span>
                  Leadership satisfaction
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. Salary Snapshot */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Net Monthly Salary Snapshot</CardTitle>
              <p className="text-xs text-text-muted mt-1">Take-home pay in ETB reported by real employees</p>
            </div>
            <Link 
              to={`/company/${company.id}/salaries`} 
              className="text-sm font-bold text-primary hover:underline flex items-center gap-1 shrink-0"
            >
              View all salaries <FiArrowRight size={14} />
            </Link>
          </CardHeader>

          <CardContent>
            {companySalaries.length > 0 ? (
              <div className="space-y-3">
                {companySalaries.slice(0, 3).map((sal) => (
                  <div key={sal.id} className="p-4 rounded-2xl border border-border bg-surface-secondary/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-extrabold text-text text-sm">{sal.role}</h4>
                      <span className="text-xs text-text-muted">{sal.experience} experience</span>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="font-black text-emerald-800 text-base">{sal.netMonthlySalary} <span className="text-xs font-normal text-text-muted">/ mo</span></div>
                      {sal.bonus && <span className="text-xs text-text-muted block">{sal.bonus}</span>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 border border-dashed border-border rounded-2xl">
                <p className="text-sm text-text-muted mb-3">No salary reports yet for {company.name}.</p>
                <Button 
                  onClick={onShareSalary} 
                  variant="secondary"
                  size="sm"
                >
                  Be the first to share salary
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 4. Recent Reviews Preview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Employee Reviews Preview</CardTitle>
              <p className="text-xs text-text-muted mt-1">Anonymous insights from current and past team members</p>
            </div>
            <Link 
              to={`/company/${company.id}/reviews`} 
              className="text-sm font-bold text-primary hover:underline flex items-center gap-1 shrink-0"
            >
              Read all reviews <FiArrowRight size={14} />
            </Link>
          </CardHeader>

          <CardContent>
            {companyReviews.length > 0 ? (
              <div className="space-y-4">
                {companyReviews.slice(0, 2).map((rev) => (
                  <div key={rev.id} className="p-5 rounded-2xl border border-border bg-surface-secondary/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="amber">
                          {rev.rating} ★
                        </Badge>
                        <span className="font-extrabold text-text text-sm">{rev.jobTitle}</span>
                      </div>
                      <span className="text-xs text-text-light">{rev.date}</span>
                    </div>
                    <h4 className="font-extrabold text-text text-base">"{rev.title}"</h4>
                    <div className="text-xs text-text-muted space-y-1">
                      <p><strong className="text-emerald-800 font-extrabold">Pros:</strong> {rev.pros}</p>
                      <p><strong className="text-rose-800 font-extrabold">Cons:</strong> {rev.cons}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 border border-dashed border-border rounded-2xl">
                <p className="text-sm text-text-muted mb-3">No reviews published yet for {company.name}.</p>
                <Button 
                  onClick={onWriteReview} 
                  variant="default"
                  size="sm"
                >
                  Write First Anonymous Review
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 5. Official Representative Response */}
        {company.officialResponse && (
          <div className="bg-gradient-to-r from-primary/5 via-indigo-50/40 to-surface border border-primary/20 rounded-3xl p-6 sm:p-8 shadow-soft">
            <div className="flex items-center gap-2 mb-3">
              <FiCheckCircle className="text-primary" size={18} />
              <span className="text-xs font-extrabold uppercase tracking-wider text-primary">Official Response from Verified Employer</span>
            </div>
            <p className="text-sm text-text italic leading-relaxed mb-3">"{company.officialResponse.text}"</p>
            <div className="text-xs font-bold text-text-muted">
              — {company.officialResponse.author} • {company.officialResponse.date}
            </div>
          </div>
        )}

      </div>

      {/* Right Sidebar Column */}
      <div className="space-y-6">

        {/* Open Jobs Widget */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <FiBriefcase className="text-primary"/> Open Positions
            </CardTitle>
            <Badge variant="default">{companyJobs.length}</Badge>
          </CardHeader>

          <CardContent>
            {companyJobs.length > 0 ? (
              <div className="space-y-3">
                {companyJobs.slice(0, 3).map((job) => (
                  <Link
                    key={job.id}
                    to={`/jobs/${job.id}`}
                    className="block p-3.5 rounded-2xl border border-border hover:bg-surface-secondary transition-colors group"
                  >
                    <h4 className="font-extrabold text-sm text-text group-hover:text-primary transition-colors">{job.title}</h4>
                    <div className="text-xs text-text-muted mt-1 flex justify-between">
                      <span>{job.workType}</span>
                      <span className="font-bold text-emerald-800">{job.salaryRange.split('/')[0]}</span>
                    </div>
                  </Link>
                ))}
                <Link
                  to={`/company/${company.id}/jobs`}
                  className="block text-center text-xs font-extrabold text-primary hover:underline pt-2"
                >
                  View all {companyJobs.length} openings →
                </Link>
              </div>
            ) : (
              <p className="text-xs text-text-muted">No active openings right now.</p>
            )}
          </CardContent>
        </Card>

        {/* Benefits Highlights */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FiAward className="text-amber-500" /> Benefits & Perks
            </CardTitle>
          </CardHeader>
          <CardContent>
            {company.benefits && company.benefits.length > 0 ? (
              <div className="space-y-3">
                {company.benefits.slice(0, 4).map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
                    <div>
                      <strong className="text-text block font-extrabold">{b.name}</strong>
                      <span className="text-text-muted">{b.detail}</span>
                    </div>
                  </div>
                ))}
                <Link to={`/company/${company.id}/benefits`} className="block text-xs font-extrabold text-primary hover:underline pt-2">
                  See all benefits →
                </Link>
              </div>
            ) : (
              <p className="text-xs text-text-muted">No specific benefits detailed yet.</p>
            )}
          </CardContent>
        </Card>

        {/* Workplace Photo Gallery Preview */}
        {company.photos && company.photos.length > 0 && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <FiImage className="text-primary" /> Photos
              </CardTitle>
              <Link to={`/company/${company.id}/photos`} className="text-xs font-extrabold text-primary hover:underline">
                View All
              </Link>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {company.photos.slice(0, 4).map((photo) => (
                  <Link key={photo.id} to={`/company/${company.id}/photos`} className="overflow-hidden rounded-2xl h-24 relative group">
                    <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

      </div>

    </div>
  );
}
