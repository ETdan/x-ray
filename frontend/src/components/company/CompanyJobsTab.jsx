import { Link } from "react-router-dom";
import { FiBriefcase, FiMapPin, FiClock, FiCheckCircle, FiChevronRight, FiArrowRight } from "react-icons/fi";
import { MOCK_JOBS } from "../../data/mockData";

export default function CompanyJobsTab({ company }) {
  const jobs = MOCK_JOBS.filter((j) => j.companyId === company.id);

  return (
    <div className="py-8 space-y-8">
      {/* Header */}
      <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-soft flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-text mb-1">
            Open Vacancies at {company.name}
          </h2>
          <p className="text-sm text-text-muted">
            Current job openings ({jobs.length} positions)
          </p>
        </div>
      </div>

      {jobs.length > 0 ? (
        <div className="flex flex-col gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-hover transition-all duration-200 flex flex-col lg:flex-row justify-between lg:items-center gap-6 group"
            >
              <div className="space-y-4 flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <Link
                      to={`/jobs/${job.id}`}
                      className="text-xl font-extrabold text-text group-hover:text-primary transition-colors block"
                    >
                      {job.title}
                    </Link>
                    <p className="text-xs font-bold text-text-muted mt-1">{job.department}</p>
                  </div>
                  {job.featured && (
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-extrabold text-xs">
                      ★ Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  <span className="px-3.5 py-1.5 rounded-full bg-surface-secondary text-text-muted flex items-center gap-1">
                    <FiMapPin size={12} /> {job.location}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary">
                    {job.workType}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-black">
                    {job.salaryRange}
                  </span>
                </div>

                <p className="text-sm text-text-muted leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between border-t lg:border-t-0 pt-4 lg:pt-0 border-border/80 shrink-0 gap-4">
                <div className="text-left lg:text-right">
                  <div className="font-extrabold text-emerald-800 text-lg">{job.salaryRange.split('/')[0]}</div>
                  <span className="text-xs text-text-muted font-medium block">Net Take-Home ETB</span>
                </div>

                <Link
                  to={`/jobs/${job.id}`}
                  className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-extrabold text-xs shadow-sm transition-all flex items-center gap-1"
                >
                  View Job Details <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-surface border border-dashed border-border rounded-2xl p-12 text-center text-text-muted">
          <p className="font-semibold">No active job openings listed for {company.name} at this moment.</p>
        </div>
      )}
    </div>
  );
}
