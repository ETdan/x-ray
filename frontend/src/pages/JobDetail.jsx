import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiMapPin, FiBriefcase, FiCheckCircle, FiStar, FiArrowLeft, FiSend, FiShield, FiDollarSign, FiClock } from "react-icons/fi";
import { MOCK_JOBS, MOCK_COMPANIES, MOCK_REVIEWS } from "../data/mockData";

export default function JobDetail() {
  const { jobId } = useParams();
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [coverNote, setCoverNote] = useState("");

  const job = MOCK_JOBS.find((j) => j.id === jobId) || MOCK_JOBS[0];
  const company = MOCK_COMPANIES.find((c) => c.id === job.companyId) || MOCK_COMPANIES[0];
  const sampleReview = MOCK_REVIEWS.find((r) => r.companyId === company.id);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Back button */}
      <Link to="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
        <FiArrowLeft /> Back to All Job Vacancies
      </Link>

      {/* Main Grid: Left 2 Cols Job Info, Right 1 Col Company Intelligence & Apply Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Job Details) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Header Card */}
          <div className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-soft space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className={`h-16 w-16 rounded-2xl ${job.companyLogoBg} font-black text-xl flex items-center justify-center shrink-0 border border-border shadow-card`}>
                  {job.companyLogoText}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-text">{job.title}</h1>
                  <Link to={`/company/${company.id}`} className="text-sm font-extrabold text-primary hover:underline flex items-center gap-1.5 mt-0.5">
                    {job.companyName}
                    {company.verified && <FiCheckCircle className="text-emerald-600" size={14} />}
                  </Link>
                </div>
              </div>

              {job.featured && (
                <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 font-extrabold text-xs shrink-0">
                  ★ Featured Vacancy
                </span>
              )}
            </div>

            {/* Badges bar */}
            <div className="flex flex-wrap gap-3 text-xs font-bold pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-surface-secondary text-text-muted flex items-center gap-1.5 border border-border">
                <FiMapPin className="text-primary"/> {job.location}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                {job.workType}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-black border border-emerald-300">
                {job.salaryRange}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-surface-secondary text-text-muted flex items-center gap-1.5 border border-border">
                <FiClock /> Posted {job.postedDate}
              </span>
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-soft space-y-4">
            <h2 className="text-xl font-extrabold text-text border-b border-border pb-3">Role Overview</h2>
            <p className="text-text-muted text-base leading-relaxed">{job.description}</p>
          </div>

          {/* Requirements List */}
          {job.requirements && (
            <div className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-soft space-y-4">
              <h2 className="text-xl font-extrabold text-text border-b border-border pb-3">Key Qualifications & Requirements</h2>
              <ul className="space-y-3 text-sm text-text-muted font-medium">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Employer Benefits Callout */}
          {company.benefits && (
            <div className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-soft space-y-4">
              <h2 className="text-xl font-extrabold text-text border-b border-border pb-3">Company Benefits & Perks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {company.benefits.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-surface-secondary/70 border border-border space-y-1">
                    <strong className="text-text font-extrabold text-sm block">{b.name}</strong>
                    <span className="text-xs text-text-muted">{b.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Column (Company Intelligence & Application Form) */}
        <div className="space-y-6">

          {/* Company Snapshot Widget */}
          <div className="bg-surface border border-border rounded-3xl p-6 shadow-soft space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="font-extrabold text-text text-lg">Know Your Employer</h3>
              <div className="flex items-center gap-1 bg-amber-100 px-2.5 py-1 rounded-xl text-amber-900 font-extrabold text-xs">
                <span>{company.rating}</span>
                <span className="text-amber-500">★</span>
              </div>
            </div>

            <p className="text-xs text-text-muted leading-relaxed">
              Before applying, check real workplace reviews, net salaries, and culture feedback for <strong>{company.name}</strong>.
            </p>

            {sampleReview && (
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 text-xs italic space-y-1">
                <span className="font-extrabold text-indigo-900 block not-italic uppercase tracking-wider">Employee Quote</span>
                <p className="text-text">"{sampleReview.pros}"</p>
              </div>
            )}

            <div className="pt-2">
              <Link
                to={`/company/${company.id}`}
                className="w-full block text-center px-4 py-2.5 rounded-xl bg-surface-secondary hover:bg-surface-tertiary border border-border text-xs font-extrabold text-primary transition-colors"
              >
                View Full Company Intelligence Profile →
              </Link>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-soft space-y-5">
            <h3 className="font-extrabold text-text text-xl">Apply for this Position</h3>
            
            {applied ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-black mx-auto text-xl">✓</div>
                <h4 className="font-extrabold text-text text-base">Application Submitted!</h4>
                <p className="text-xs text-text-muted">
                  Your details have been transmitted directly to the hiring team at {company.name}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Abebe Bikila"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="abebe@example.com"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1">Brief Cover Note</label>
                  <textarea
                    rows={3}
                    placeholder="Highlight your relevant engineering or domain experience..."
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-extrabold text-sm text-white bg-primary hover:bg-primary-hover shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <FiSend size={16} /> Submit Application
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
