import { FiDollarSign, FiPlus, FiLock, FiCheckCircle } from "react-icons/fi";
import { MOCK_SALARIES } from "../../data/mockData";

export default function CompanySalariesTab({ company, onShareSalary }) {
  const salaries = MOCK_SALARIES.filter((s) => s.companyId === company.id);

  return (
    <div className="py-8 space-y-8">
      {/* Header & Share CTA */}
      <div className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-extrabold text-text mb-1">
            {company.name} Net Salaries (ETB)
          </h2>
          <p className="text-sm text-text-muted">
            All compensation amounts represent verified monthly take-home pay in ETB.
          </p>
        </div>
        <button
          onClick={onShareSalary}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary-hover shadow-sm transition-all"
        >
          <FiPlus size={16} /> Share Your Salary
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-border p-6 rounded-3xl shadow-soft">
          <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-1">Average Net Salary</span>
          <div className="text-3xl font-black text-emerald-800">ETB 68,000 <span className="text-xs font-normal text-text-muted">/ mo</span></div>
          <span className="text-xs text-text-light mt-1 block">Across engineering & product roles</span>
        </div>
        <div className="bg-surface border border-border p-6 rounded-3xl shadow-soft">
          <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-1">Reported Salary Range</span>
          <div className="text-2xl font-black text-text">ETB 28k – 85k</div>
          <span className="text-xs text-text-light mt-1 block">Entry level to senior lead roles</span>
        </div>
        <div className="bg-surface border border-border p-6 rounded-3xl shadow-soft">
          <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-1">Anonymity Model</span>
          <div className="flex items-center gap-2 text-sm font-bold text-text mt-1">
            <FiLock className="text-primary" /> Cryptographically Detached
          </div>
          <span className="text-xs text-text-light mt-1 block">Individual identity protected</span>
        </div>
      </div>

      {/* Visual Cards Grid (NO TABLES) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {salaries.length > 0 ? (
          salaries.map((s) => {
            const spectrumPercentage = Math.min(100, Math.max(20, (s.numericSalary / 100000) * 100));

            return (
              <div
                key={s.id}
                className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-soft space-y-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-text">{s.role}</h3>
                    <span className="text-xs text-text-muted font-semibold">{s.experience} experience</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-surface-secondary text-text-muted text-xs font-bold border border-border">
                    {s.payPeriod}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-900 block">Take-Home Pay</span>
                    <div className="text-2xl font-black text-emerald-800">{s.netMonthlySalary} <span className="text-xs font-semibold text-text-muted">/ mo</span></div>
                  </div>
                  {s.bonus && (
                    <div className="text-right text-xs font-bold text-emerald-900 bg-white/70 px-3 py-1 rounded-xl border border-emerald-200">
                      {s.bonus}
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-text-muted">
                    <span>Low (ETB 25k)</span>
                    <span>Median (ETB 60k)</span>
                    <span>High (ETB 100k)</span>
                  </div>
                  <div className="h-2.5 w-full bg-surface-secondary rounded-full overflow-hidden border border-border">
                    <div
                      className="h-full bg-emerald-600 rounded-full"
                      style={{ width: `${spectrumPercentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-text-light font-medium text-right">
                  Updated {s.updatedDate}
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-2 bg-surface border border-dashed border-border rounded-3xl p-12 text-center text-text-muted">
            <p className="font-semibold mb-3">No salary reports submitted for {company.name} yet.</p>
            <button
              onClick={onShareSalary}
              className="px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary-hover shadow-sm"
            >
              Share Salary Anonymously
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
