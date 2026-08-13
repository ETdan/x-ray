import { FiMessageSquare, FiHelpCircle, FiCheckCircle, FiClock, FiPlus } from "react-icons/fi";
import { MOCK_INTERVIEWS } from "../../data/mockData";

export default function CompanyInterviewsTab({ company, onShareInterview }) {
  const interviews = MOCK_INTERVIEWS.filter((i) => i.companyId === company.id);

  return (
    <div className="py-8 space-y-8">
      {/* Header */}
      <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-extrabold text-text mb-1">
            {company.name} Interview Experiences
          </h2>
          <p className="text-sm text-text-muted">
            Learn what questions candidates were asked and how technical rounds are structured.
          </p>
        </div>
        <button
          onClick={onShareInterview}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary-hover shadow-sm transition-all"
        >
          <FiPlus size={16} /> Share Interview Experience
        </button>
      </div>

      {/* List */}
      <div className="space-y-6">
        {interviews.length > 0 ? (
          interviews.map((item) => (
            <article key={item.id} className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-soft space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
                <div>
                  <h3 className="font-extrabold text-text text-lg">{item.role} Interview</h3>
                  <div className="flex items-center gap-3 text-xs text-text-muted mt-1 font-medium">
                    <span>Difficulty: <strong className="text-text">{item.difficulty}</strong></span>
                    <span>•</span>
                    <span>Duration: <strong className="text-text">{item.duration}</strong></span>
                    <span>•</span>
                    <span className="text-emerald-700 font-bold">{item.outcome}</span>
                  </div>
                </div>
                <span className="text-xs text-text-light">{item.date}</span>
              </div>

              {/* Stages */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Interview Stages</h4>
                <div className="space-y-2">
                  {item.stages.map((stage, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-surface-secondary/50 border border-border text-xs font-semibold text-text">
                      <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <span>{stage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Questions */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2 flex items-center gap-1.5">
                  <FiHelpCircle className="text-primary" /> Questions Asked
                </h4>
                <div className="space-y-2">
                  {item.questions.map((q, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs font-medium text-text italic">
                      "{q}"
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              {item.tips && (
                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/80 text-xs text-amber-900 space-y-1">
                  <strong className="font-bold block uppercase tracking-wider">Candidate Advice</strong>
                  <p>{item.tips}</p>
                </div>
              )}
            </article>
          ))
        ) : (
          <div className="bg-surface border border-dashed border-border rounded-2xl p-12 text-center text-text-muted">
            <p className="font-semibold mb-4">No interview feedback shared for {company.name} yet.</p>
            <button
              onClick={onShareInterview}
              className="px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary-hover shadow-sm"
            >
              Share Your Interview Experience
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
