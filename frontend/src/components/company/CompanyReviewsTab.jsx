import { useState } from "react";
import { FiStar, FiThumbsUp, FiMessageSquare, FiEdit3, FiFilter } from "react-icons/fi";
import { MOCK_REVIEWS } from "../../data/mockData";

export default function CompanyReviewsTab({ company, onWriteReview }) {
  const [filterRating, setFilterRating] = useState("all");
  const reviews = MOCK_REVIEWS.filter((r) => r.companyId === company.id);

  const filteredReviews = reviews.filter((r) => {
    if (filterRating === "all") return true;
    return Math.floor(r.rating) === parseInt(filterRating, 10);
  });

  return (
    <div className="py-8 space-y-8">
      {/* Header & Write CTA */}
      <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-extrabold text-text mb-1">
            {company.name} Reviews
          </h2>
          <p className="text-sm text-text-muted">
            Showing {filteredReviews.length} verified anonymous employee reviews
          </p>
        </div>
        <button
          onClick={onWriteReview}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary-hover shadow-sm transition-all"
        >
          <FiEdit3 size={16} /> Write Anonymous Review
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        <span className="text-xs font-bold text-text-muted uppercase tracking-wider flex items-center gap-1">
          <FiFilter /> Filter:
        </span>
        {["all", "5", "4", "3"].map((star) => (
          <button
            key={star}
            onClick={() => setFilterRating(star)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              filterRating === star
                ? "bg-primary text-white"
                : "bg-surface border border-border text-text-muted hover:text-text"
            }`}
          >
            {star === "all" ? "All Ratings" : `${star} ★`}
          </button>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((rev) => (
            <article key={rev.id} className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-soft space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-900 rounded-xl font-extrabold text-sm">
                    <span>{rev.rating.toFixed(1)}</span>
                    <span className="text-amber-500">★</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-text text-base">{rev.jobTitle}</h3>
                    <p className="text-xs text-text-muted">
                      {rev.employmentStatus} • {rev.department} • {rev.tenure}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-text-light font-medium">{rev.date}</span>
              </div>

              <h4 className="text-lg font-bold text-text">"{rev.title}"</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-1">
                  <span className="font-bold text-emerald-800 block text-xs uppercase tracking-wider">Pros</span>
                  <p className="text-text-muted leading-relaxed">{rev.pros}</p>
                </div>
                <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100 space-y-1">
                  <span className="font-bold text-rose-800 block text-xs uppercase tracking-wider">Cons</span>
                  <p className="text-text-muted leading-relaxed">{rev.cons}</p>
                </div>
              </div>

              {rev.adviceToManagement && (
                <div className="p-4 rounded-xl bg-surface-secondary border border-border text-xs space-y-1">
                  <span className="font-bold text-text block uppercase tracking-wider">Advice to Management</span>
                  <p className="text-text-muted italic">{rev.adviceToManagement}</p>
                </div>
              )}
            </article>
          ))
        ) : (
          <div className="bg-surface border border-dashed border-border rounded-2xl p-12 text-center">
            <p className="text-text-muted text-base font-semibold mb-4">No reviews match the selected filter.</p>
            <button
              onClick={onWriteReview}
              className="px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary-hover shadow-sm"
            >
              Share Your Experience
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
