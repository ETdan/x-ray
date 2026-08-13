import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMapPin, FiBriefcase, FiFilter, FiCheckCircle, FiChevronRight, FiClock, FiStar, FiArrowRight } from "react-icons/fi";
import { MOCK_JOBS, MOCK_COMPANIES } from "../data/mockData";

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredJobs = MOCK_JOBS.filter((j) => {
    const matchesSearch =
      j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType ? j.workType === selectedType : true;
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-black text-text tracking-tight mb-2">
          Explore Jobs in Ethiopia
        </h1>
        <p className="text-text-muted text-base">
          Verified open vacancies with transparent net monthly salary ranges.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 bg-surface border border-border p-4 rounded-2xl shadow-soft">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3.5 top-3.5 text-text-muted" size={18} />
          <input
            type="text"
            placeholder="Search job title, role, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-secondary border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="bg-surface-secondary border border-border px-4 py-2.5 rounded-xl font-bold text-text text-sm focus:outline-none"
        >
          <option value="">All Work Arrangements</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      {/* Single-Column Full-Width Large Job Cards (One job per line) */}
      <div className="flex flex-col gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => {
            const company = MOCK_COMPANIES.find(c => c.id === job.companyId) || {};

            return (
              <div
                key={job.id}
                className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-hover transition-all duration-200 flex flex-col lg:flex-row justify-between lg:items-center gap-6 group"
              >
                {/* Left Job Content */}
                <div className="space-y-4 flex-1">

                  {/* Top Row: Logo + Title + Company Name + Featured Badge */}
                  <div className="flex items-start gap-4">
                    <div className={`h-16 w-16 rounded-2xl ${job.companyLogoBg} font-black text-xl flex items-center justify-center shrink-0 border border-border shadow-card`}>
                      {job.companyLogoText}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <Link
                          to={`/jobs/${job.id}`}
                          className="text-xl sm:text-2xl font-black text-text group-hover:text-primary transition-colors"
                        >
                          {job.title}
                        </Link>
                        {job.featured && (
                          <span className="px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 font-extrabold text-xs">
                            ★ Featured
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-extrabold text-primary">
                        <Link to={`/company/${job.companyId}`} className="hover:underline flex items-center gap-1">
                          {job.companyName}
                          {company.verified && <FiCheckCircle className="text-emerald-600" size={14} />}
                        </Link>
                        <span className="text-text-muted font-normal">•</span>
                        <span className="text-text-muted font-semibold text-xs">{job.department}</span>
                      </div>
                    </div>
                  </div>

                  {/* Metadata Chips Bar */}
                  <div className="flex flex-wrap gap-2 text-xs font-bold pt-1">
                    <span className="px-3.5 py-1.5 rounded-full bg-surface-secondary text-text-muted flex items-center gap-1.5 border border-border">
                      <FiMapPin className="text-primary" /> {job.location}
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

                  {/* Description preview */}
                  <p className="text-sm text-text-muted leading-relaxed max-w-4xl">
                    {job.description}
                  </p>

                  {/* Requirements List Preview */}
                  {job.requirements && (
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-text-muted pt-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-surface-secondary/80 border border-border">
                          ✓ {req}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

                {/* Right Action Column */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between border-t lg:border-t-0 pt-4 lg:pt-0 border-border/80 shrink-0 gap-4">
                  <div className="text-left lg:text-right">
                    <div className="font-extrabold text-emerald-800 text-lg">{job.salaryRange.split('/')[0]}</div>
                    <span className="text-xs text-text-muted font-medium block">Net Take-Home ETB</span>
                  </div>

                  <Link
                    to={`/jobs/${job.id}`}
                    className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-extrabold text-sm shadow-sm transition-all flex items-center gap-1.5"
                  >
                    View Job Details <FiArrowRight size={16} />
                  </Link>
                </div>

              </div>
            );
          })
        ) : (
          <div className="bg-surface border border-dashed border-border rounded-3xl p-12 text-center text-text-muted">
            <p className="font-semibold">No open jobs match your criteria.</p>
          </div>
        )}
      </div>

    </div>
  );
}
