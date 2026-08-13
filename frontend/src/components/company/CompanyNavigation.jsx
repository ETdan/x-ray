import { Link } from "react-router-dom";

export default function CompanyNavigation({ companyId, activeTab }) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "reviews", label: "Reviews" },
    { id: "salaries", label: "Salaries" },
    { id: "interviews", label: "Interviews" },
    { id: "jobs", label: "Jobs" },
    { id: "benefits", label: "Benefits" },
    { id: "photos", label: "Photos" },
  ];

  return (
    <div className="sticky top-20 z-30 bg-surface/90 backdrop-blur-md border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-2 overflow-x-auto no-scrollbar py-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const targetUrl = tab.id === "overview" ? `/company/${companyId}` : `/company/${companyId}/${tab.id}`;
            return (
              <Link
                key={tab.id}
                to={targetUrl}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-150 ${isActive
                    ? "bg-primary text-white shadow-sm font-bold"
                    : "text-text-muted hover:text-text hover:bg-surface-secondary"
                  }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
