import { FiAward, FiShield, FiHeart, FiSmile, FiTrendingUp } from "react-icons/fi";

export default function CompanyBenefitsTab({ company }) {
  const benefits = company.benefits || [];

  return (
    <div className="py-8 space-y-8">
      <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-soft">
        <h2 className="text-2xl font-extrabold text-text mb-1">
          Employee Benefits & Perks at {company.name}
        </h2>
        <p className="text-sm text-text-muted">
          Perks verified by current and former employees.
        </p>
      </div>

      {benefits.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-surface border border-border p-6 rounded-2xl shadow-soft flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">
                <FiAward size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-text text-base">{b.name}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{b.detail}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-surface border border-dashed border-border rounded-2xl p-12 text-center text-text-muted">
          <p className="font-semibold">No detailed benefit items reported for {company.name}.</p>
        </div>
      )}
    </div>
  );
}
