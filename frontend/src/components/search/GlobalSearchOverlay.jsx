import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiX, FiBriefcase, FiMapPin, FiStar, FiArrowRight, FiCheckCircle, FiDollarSign } from "react-icons/fi";
import { MOCK_COMPANIES, MOCK_JOBS } from "../../data/mockData";
import { Badge } from "../ui/badge";
import logo from "../../assets/logo.svg";

export default function GlobalSearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCompanies = MOCK_COMPANIES.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.industry.toLowerCase().includes(query.toLowerCase()) ||
      c.location.toLowerCase().includes(query.toLowerCase())
  );

  const filteredJobs = MOCK_JOBS.filter(
    (j) =>
      j.title.toLowerCase().includes(query.toLowerCase()) ||
      j.companyName.toLowerCase().includes(query.toLowerCase()) ||
      j.department.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-text/50 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="glass-modal border border-border/80 w-full max-w-3xl rounded-3xl shadow-modal overflow-hidden flex flex-col max-h-[82vh] animate-in zoom-in-95 duration-150 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Banner */}
        <div className="relative flex items-center px-6 py-5 border-b border-border bg-gradient-to-r from-primary/5 via-surface to-surface">
          <img src={logo} alt="X-Ray" className="h-7 w-auto mr-3 shrink-0" />
          <FiSearch className="text-primary shrink-0 mr-3" size={22} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search companies, jobs, net salaries, locations..."
            className="w-full bg-transparent text-text placeholder:text-text-light text-base sm:text-lg focus:outline-none font-bold"
          />
          {query && (
            <button 
              onClick={() => setQuery("")}
              className="text-text-light hover:text-text p-1.5 mr-2 rounded-full hover:bg-surface-secondary"
            >
              <FiX size={18} />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-extrabold bg-surface border border-border rounded-xl text-text-muted hover:text-text shrink-0"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Chips when empty */}
        {!query && (
          <div className="p-6 border-b border-border bg-surface/80">
            <h4 className="text-xs font-black uppercase tracking-wider text-text-muted mb-3">Popular Searches in Ethiopia</h4>
            <div className="flex flex-wrap gap-2">
              {["Safaricom Ethiopia", "Commercial Bank of Ethiopia", "Software Engineer", "Net Salary ETB", "Fintech", "Addis Ababa"].map((chip) => (
                <button
                  key={chip}
                  onClick={() => setQuery(chip)}
                  className="cursor-pointer"
                >
                  <Badge variant="secondary" className="hover:bg-primary/10 hover:text-primary transition-colors py-1.5 px-3">
                    {chip}
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="overflow-y-auto p-4 sm:p-6 flex flex-col gap-6 divide-y divide-border/60">
          
          {/* Companies (Highest Priority) */}
          {filteredCompanies.length > 0 && (
            <div className="pt-2 first:pt-0">
              <div className="flex items-center justify-between px-2 mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <FiBriefcase className="text-primary" /> Companies ({filteredCompanies.length})
                </span>
                <Link 
                  to="/companies" 
                  onClick={onClose}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  Explore All <FiArrowRight size={12}/>
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                {filteredCompanies.map((company) => (
                  <Link
                    key={company.id}
                    to={`/company/${company.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-surface-secondary border border-transparent hover:border-border transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-xl ${company.logoBg} font-black text-sm flex items-center justify-center shrink-0 border border-border shadow-card`}>
                        {company.logoText}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-text group-hover:text-primary transition-colors text-base flex items-center gap-1.5">
                          {company.name}
                          {company.verified && <FiCheckCircle className="text-emerald-600" size={14} />}
                        </h4>
                        <p className="text-xs text-text-muted flex items-center gap-2 font-medium">
                          <span>{company.industry}</span>
                          <span>•</span>
                          <span>{company.location}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-right">
                      <Badge variant="amber">
                        {company.rating} ★
                      </Badge>
                      <span className="text-xs font-semibold text-text-muted hidden sm:inline">{company.reviewCount} reviews</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Jobs (Second Priority) */}
          {filteredJobs.length > 0 && (
            <div className="pt-4">
              <div className="flex items-center justify-between px-2 mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <FiBriefcase className="text-primary" /> Open Vacancies ({filteredJobs.length})
                </span>
                <Link 
                  to="/jobs" 
                  onClick={onClose}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  View All <FiArrowRight size={12}/>
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                {filteredJobs.map((job) => (
                  <Link
                    key={job.id}
                    to={`/jobs/${job.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-surface-secondary border border-transparent hover:border-border transition-all group"
                  >
                    <div>
                      <h4 className="font-extrabold text-text group-hover:text-primary transition-colors text-sm">
                        {job.title}
                      </h4>
                      <p className="text-xs text-text-muted flex items-center gap-2 mt-0.5 font-medium">
                        <span className="font-bold text-text">{job.companyName}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </p>
                    </div>
                    <Badge variant="emerald" className="text-xs py-1 px-3">
                      {job.salaryRange.split('/')[0]}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredCompanies.length === 0 && filteredJobs.length === 0 && (
            <div className="p-12 text-center text-text-muted space-y-2">
              <p className="font-extrabold text-base text-text">No matching workplace intelligence for "{query}"</p>
              <p className="text-xs text-text-light">Try searching for "Safaricom", "CBE", "Engineer", "Fintech", or "Banking".</p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
