import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiFilter, FiCheckCircle, FiBriefcase, FiMapPin, FiStar, FiArrowRight, FiUsers, FiDollarSign, FiMessageSquare, FiAward } from "react-icons/fi";
import { MOCK_COMPANIES, MOCK_REVIEWS, MOCK_SALARIES } from "../data/mockData";

export default function Companies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [minRating, setMinRating] = useState("0");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("popular");

  // Filtering logic
  const filteredCompanies = MOCK_COMPANIES.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry ? company.industry === selectedIndustry : true;
    const matchesLocation = selectedLocation ? company.location.includes(selectedLocation) : true;
    const matchesRating = company.rating >= parseFloat(minRating);
    const matchesVerified = verifiedOnly ? company.verified : true;
    return matchesSearch && matchesIndustry && matchesLocation && matchesRating && matchesVerified;
  });

  // Sorting logic
  const sortedCompanies = [...filteredCompanies].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "reviews") return b.reviewCount - a.reviewCount;
    if (sortBy === "salaries") return b.salaryCount - a.salaryCount;
    return b.reviewCount - a.reviewCount;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-text tracking-tight mb-2">
          Explore Workplace Intelligence in Ethiopia
        </h1>
        <p className="text-text-muted text-base">
          Evaluate top employers, compare verified net monthly salaries, and read candid anonymous reviews.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 shrink-0 bg-surface border border-border p-6 rounded-3xl shadow-soft space-y-6 h-fit">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <h2 className="font-extrabold text-text text-base flex items-center gap-2">
              <FiFilter className="text-primary" /> Filters
            </h2>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedIndustry("");
                setSelectedLocation("");
                setMinRating("0");
                setVerifiedOnly(false);
              }}
              className="text-xs font-bold text-primary hover:underline"
            >
              Reset All
            </button>
          </div>

          {/* Industry Filter */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Industry</label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary font-medium"
            >
              <option value="">All Industries</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Banking & Financial Services">Banking & Finance</option>
              <option value="Fintech">Fintech</option>
              <option value="Aviation & Logistics">Aviation & Logistics</option>
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary font-medium"
            >
              <option value="">All Locations</option>
              <option value="Addis Ababa">Addis Ababa</option>
              <option value="Bole">Bole</option>
              <option value="Kazanchis">Kazanchis</option>
            </select>
          </div>

          {/* Rating Filter */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Minimum Rating</label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary font-medium"
            >
              <option value="0">Any Rating</option>
              <option value="4.5">4.5 ★ & higher</option>
              <option value="4.0">4.0 ★ & higher</option>
              <option value="3.5">3.5 ★ & higher</option>
            </select>
          </div>

          {/* Verified Toggle */}
          <div className="pt-2 border-t border-border">
            <label className="flex items-center gap-2.5 cursor-pointer text-sm font-semibold text-text">
              <input
                type="checkbox"
                checked={verifiedOnly}
                onChange={(e) => setVerifiedOnly(e.target.checked)}
                className="h-4 w-4 rounded text-primary focus:ring-primary border-border"
              />
              <span>Verified Employers Only</span>
            </label>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 space-y-6">

          {/* Search bar & Sort controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-surface border border-border p-4 rounded-2xl shadow-soft">
            <div className="relative w-full sm:w-80">
              <FiSearch className="absolute left-3.5 top-3 text-text-muted" size={18} />
              <input
                type="text"
                placeholder="Search company name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-secondary border border-border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-text-muted shrink-0 w-full sm:w-auto justify-between sm:justify-end">
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-surface-secondary border border-border px-3 py-2 rounded-xl font-bold text-text focus:outline-none"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="salaries">Most Salary Reports</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="text-xs font-bold text-text-muted uppercase tracking-wider px-1">
            Showing {sortedCompanies.length} expanded workplace profiles
          </div>

          {/* Large Expanded Company Cards */}
          <div className="space-y-6">
            {sortedCompanies.length > 0 ? (
              sortedCompanies.map((company) => {
                const sampleReview = MOCK_REVIEWS.find(r => r.companyId === company.id);
                const sampleSalary = MOCK_SALARIES.find(s => s.companyId === company.id);
                const snapshot = company.ratingsSnapshot || {};

                return (
                  <div
                    key={company.id}
                    className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-hover transition-all duration-200 space-y-6 group"
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`h-20 w-20 rounded-2xl ${company.logoBg} font-black text-2xl flex items-center justify-center shrink-0 border border-border shadow-card`}>
                          {company.logoText}
                        </div>
                        <div className="space-y-1">
                          <Link
                            to={`/company/${company.id}`}
                            className="text-2xl font-black text-text group-hover:text-primary transition-colors flex items-center gap-2"
                          >
                            {company.name}
                            {company.verified && (
                              <FiCheckCircle className="text-emerald-600 shrink-0" size={18} title="Verified Employer" />
                            )}
                          </Link>
                          <p className="text-sm font-semibold text-text-muted italic">{company.tagline}</p>
                          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-text-muted pt-1">
                            <span className="flex items-center gap-1.5"><FiBriefcase className="text-primary" /> {company.industry}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5"><FiMapPin className="text-primary" /> {company.location}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5"><FiUsers className="text-primary" /> {company.size}</span>
                          </div>
                        </div>
                      </div>

                      {/* Overall Star Badge */}
                      <div className="flex items-center gap-3 bg-amber-50 border border-amber-200/80 p-3 rounded-2xl shrink-0">
                        <div className="text-center">
                          <div className="flex items-center gap-1">
                            <span className="text-2xl font-black text-text">{company.rating.toFixed(1)}</span>
                            <span className="text-amber-500 text-xl">★</span>
                          </div>
                          <span className="text-[10px] font-extrabold text-amber-900 uppercase tracking-wider block">Overall Rating</span>
                        </div>
                      </div>
                    </div>

                    {/* Company Description excerpt */}
                    <p className="text-sm text-text-muted leading-relaxed">
                      {company.description}
                    </p>

                    {/* Rich Data Preview Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">

                      {/* Rating Breakdown snapshot */}
                      <div className="p-4 rounded-2xl bg-surface-secondary/70 border border-border space-y-2">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-text-muted flex items-center gap-1">
                          <FiAward className="text-primary" /> Ratings Snapshot
                        </span>
                        <div className="space-y-1.5 text-xs font-medium">
                          <div className="flex justify-between">
                            <span>Work-Life Balance</span>
                            <strong className="font-bold text-text">{snapshot.workLife || 4.2} ★</strong>
                          </div>
                          <div className="flex justify-between">
                            <span>Career Growth</span>
                            <strong className="font-bold text-text">{snapshot.careerGrowth || 4.5} ★</strong>
                          </div>
                          <div className="flex justify-between">
                            <span>Compensation</span>
                            <strong className="font-bold text-text">{snapshot.compensation || 4.6} ★</strong>
                          </div>
                        </div>
                      </div>

                      {/* Salary & Open Jobs */}
                      <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 flex items-center gap-1">
                          <FiDollarSign className="text-emerald-700" /> Net Salary Benchmark
                        </span>
                        {sampleSalary ? (
                          <div>
                            <div className="text-lg font-black text-emerald-800">{sampleSalary.netMonthlySalary} <span className="text-xs font-normal text-text-muted">/ mo</span></div>
                            <span className="text-xs font-bold text-text-muted">{sampleSalary.role}</span>
                          </div>
                        ) : (
                          <div className="text-xs font-semibold text-emerald-800">Net monthly ETB take-home reports available</div>
                        )}
                        <div className="pt-2 text-xs font-bold text-primary">
                          {company.openJobsCount} Open Positions Available
                        </div>
                      </div>

                      {/* Recent Review Excerpt */}
                      <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 space-y-1.5">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-900 flex items-center gap-1">
                          <FiMessageSquare className="text-indigo-700" /> Employee Review Excerpt
                        </span>
                        {sampleReview ? (
                          <p className="text-xs text-text italic line-clamp-3 leading-relaxed">
                            "{sampleReview.pros}"
                          </p>
                        ) : (
                          <p className="text-xs text-text-muted italic">"Great modern workplace culture with fast-paced engineering teams."</p>
                        )}
                      </div>

                    </div>

                    {/* Action Bar Footer */}
                    <div className="pt-4 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4 text-xs font-bold text-text-muted">
                        <span><strong className="text-text">{company.reviewCount}</strong> Verified Reviews</span>
                        <span>•</span>
                        <span><strong className="text-emerald-700">{company.salaryCount}</strong> Salary Reports</span>
                        <span>•</span>
                        <span><strong className="text-amber-600">{company.interviewCount}</strong> Interview Reports</span>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <Link
                          to={`/company/${company.id}/jobs`}
                          className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-border text-xs font-bold text-text hover:bg-surface-secondary text-center"
                        >
                          View Open Jobs ({company.openJobsCount})
                        </Link>
                        <Link
                          to={`/company/${company.id}`}
                          className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-1.5"
                        >
                          Explore Full Workplace Profile <FiArrowRight size={14} />
                        </Link>
                      </div>
                    </div>

                  </div>
                );
              })
            ) : (
              <div className="bg-surface border border-dashed border-border rounded-3xl p-12 text-center text-text-muted">
                <p className="font-semibold text-base mb-2">No companies match your filters.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedIndustry("");
                    setSelectedLocation("");
                    setMinRating("0");
                    setVerifiedOnly(false);
                  }}
                  className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
