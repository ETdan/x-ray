import { useState } from "react";
import { Link } from "react-router-dom";
import { FiDollarSign, FiSearch, FiTrendingUp, FiLock, FiBriefcase, FiFilter, FiCheckCircle, FiArrowRight, FiSliders } from "react-icons/fi";
import { MOCK_SALARIES, MOCK_COMPANIES } from "../data/mockData";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";

export default function Salaries() {
  const [roleSearch, setRoleSearch] = useState("");
  const [companySearch, setCompanySearch] = useState("");
  const [salaryFilterMode, setSalaryFilterMode] = useState("all"); // all, greater_than, less_than, between
  const [minSalaryAmount, setMinSalaryAmount] = useState("");
  const [maxSalaryAmount, setMaxSalaryAmount] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");

  // Filtering logic
  const filteredSalaries = MOCK_SALARIES.filter((s) => {
    const matchesRole = s.role.toLowerCase().includes(roleSearch.toLowerCase());
    const matchesCompany = s.companyName.toLowerCase().includes(companySearch.toLowerCase());
    const matchesExperience = experienceFilter ? s.experience.includes(experienceFilter) : true;

    // Salary range filtering logic (greater than, less than, between)
    let matchesSalaryRange = true;
    const numSalary = s.numericSalary;

    if (salaryFilterMode === "greater_than" && minSalaryAmount) {
      matchesSalaryRange = numSalary >= parseInt(minSalaryAmount, 10);
    } else if (salaryFilterMode === "less_than" && maxSalaryAmount) {
      matchesSalaryRange = numSalary <= parseInt(maxSalaryAmount, 10);
    } else if (salaryFilterMode === "between") {
      const minVal = minSalaryAmount ? parseInt(minSalaryAmount, 10) : 0;
      const maxVal = maxSalaryAmount ? parseInt(maxSalaryAmount, 10) : Infinity;
      matchesSalaryRange = numSalary >= minVal && numSalary <= maxVal;
    }

    return matchesRole && matchesCompany && matchesExperience && matchesSalaryRange;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">

      {/* Page Heading */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-black text-text tracking-tight mb-2">
          Ethiopian Net Salary Benchmarks
        </h1>
        <p className="text-text-muted text-base">
          Verified net monthly take-home pay in ETB reported anonymously by employees.
        </p>
      </div>

      {/* Top Banner Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <span className="text-xs font-extrabold uppercase tracking-wider text-text-muted block mb-1">Highest Reported Tech Salary</span>
          <div className="text-3xl font-black text-emerald-800">ETB 85,000 <span className="text-xs font-normal text-text-muted">/ mo</span></div>
          <span className="text-xs text-text-light mt-1 block">Net monthly take-home pay (after tax)</span>
        </Card>
        <Card className="p-6">
          <span className="text-xs font-extrabold uppercase tracking-wider text-text-muted block mb-1">Median Software Developer Salary</span>
          <div className="text-2xl font-black text-text">ETB 62,000 / mo</div>
          <span className="text-xs text-text-light mt-1 block">Based on 1,200+ verified submissions</span>
        </Card>
        <Card className="p-6">
          <span className="text-xs font-extrabold uppercase tracking-wider text-text-muted block mb-1">Anonymity Model</span>
          <div className="flex items-center gap-2 text-sm font-bold text-text mt-1">
            <FiLock className="text-primary" /> Cryptographically Detached
          </div>
          <span className="text-xs text-text-light mt-1 block">Individual contributor identity strictly protected</span>
        </Card>
      </div>

      {/* Multi-Filter Bar Container with Shadcn Select and Salary Range */}
      <Card className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h2 className="font-extrabold text-text text-base flex items-center gap-2">
            <FiSliders className="text-primary" /> Filter Compensation Data
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setRoleSearch("");
              setCompanySearch("");
              setSalaryFilterMode("all");
              setMinSalaryAmount("");
              setMaxSalaryAmount("");
              setExperienceFilter("");
            }}
          >
            Reset Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* 1. Job Role Search */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1.5">Job Role / Keyword</label>
            <div className="relative">
              <FiSearch className="absolute left-3.5 top-3.5 text-text-muted" size={16} />
              <Input
                placeholder="e.g. Software Engineer"
                value={roleSearch}
                onChange={(e) => setRoleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* 2. Company Search Input */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1.5">Search Company Name</label>
            <div className="relative">
              <FiBriefcase className="absolute left-3.5 top-3.5 text-text-muted" size={16} />
              <Input
                placeholder="e.g. Safaricom, CBE, Kacha"
                value={companySearch}
                onChange={(e) => setCompanySearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* 3. Salary Range Filter Mode (Shadcn Select) */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1.5">Salary Range Mode</label>
            <Select
              value={salaryFilterMode}
              onChange={(e) => setSalaryFilterMode(e.target.value)}
            >
              <option value="all">All Amounts</option>
              <option value="greater_than">Greater Than ( &gt; )</option>
              <option value="less_than">Less Than ( &lt; )</option>
              <option value="between">Between Range ( Min – Max )</option>
            </Select>
          </div>

          {/* 4. Experience Level Filter (Shadcn Select) */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-text-muted mb-1.5">Experience Level</label>
            <Select
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
            >
              <option value="">All Experience Levels</option>
              <option value="1 - 2">1 - 2 years</option>
              <option value="3 - 5">3 - 5 years</option>
              <option value="5+">5+ years</option>
            </Select>
          </div>

        </div>

        {/* Dynamic Min / Max Range Amounts Inputs */}
        {salaryFilterMode !== "all" && (
          <div className="p-4 rounded-2xl bg-surface-secondary/70 border border-border flex flex-wrap items-center gap-4 animate-in fade-in">
            {salaryFilterMode === "greater_than" && (
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-text">Net Salary Greater Than:</span>
                <div className="relative w-48">
                  <span className="absolute left-3 top-2.5 text-xs font-bold text-text-muted">ETB</span>
                  <Input
                    type="number"
                    placeholder="e.g. 50000"
                    value={minSalaryAmount}
                    onChange={(e) => setMinSalaryAmount(e.target.value)}
                    className="pl-12 h-9 text-xs font-bold"
                  />
                </div>
              </div>
            )}

            {salaryFilterMode === "less_than" && (
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-text">Net Salary Less Than:</span>
                <div className="relative w-48">
                  <span className="absolute left-3 top-2.5 text-xs font-bold text-text-muted">ETB</span>
                  <Input
                    type="number"
                    placeholder="e.g. 60000"
                    value={maxSalaryAmount}
                    onChange={(e) => setMaxSalaryAmount(e.target.value)}
                    className="pl-12 h-9 text-xs font-bold"
                  />
                </div>
              </div>
            )}

            {salaryFilterMode === "between" && (
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-text">Min ETB:</span>
                  <Input
                    type="number"
                    placeholder="35000"
                    value={minSalaryAmount}
                    onChange={(e) => setMinSalaryAmount(e.target.value)}
                    className="w-32 h-9 text-xs font-bold"
                  />
                </div>
                <span className="text-xs font-bold text-text-muted">to</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-text">Max ETB:</span>
                  <Input
                    type="number"
                    placeholder="85000"
                    value={maxSalaryAmount}
                    onChange={(e) => setMaxSalaryAmount(e.target.value)}
                    className="w-32 h-9 text-xs font-bold"
                  />
                </div>
              </div>
            )}
          </div>
        )}

      </Card>

      {/* Results Header */}
      <div className="text-xs font-extrabold text-text-muted uppercase tracking-wider px-1">
        Showing {filteredSalaries.length} compensation reports
      </div>

      {/* Visual Salary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSalaries.length > 0 ? (
          filteredSalaries.map((s) => {
            const company = MOCK_COMPANIES.find((c) => c.id === s.companyId) || {};
            const spectrumPercentage = Math.min(100, Math.max(20, (s.numericSalary / 100000) * 100));

            return (
              <Card
                key={s.id}
                className="p-6 sm:p-8 hover:shadow-hover transition-all duration-200 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Top Row: Role + Company Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-text group-hover:text-primary transition-colors">
                        {s.role}
                      </h3>
                      <Link
                        to={`/company/${s.companyId}`}
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1 mt-0.5"
                      >
                        {s.companyName}
                        {company.verified && <FiCheckCircle className="text-emerald-600" size={12} />}
                      </Link>
                    </div>

                    <Badge variant="secondary">{s.experience}</Badge>
                  </div>

                  {/* Net Salary Highlight Callout */}
                  <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-900 block">Take-Home Pay</span>
                      <div className="text-2xl font-black text-emerald-800">{s.netMonthlySalary} <span className="text-xs font-semibold text-text-muted">/ month</span></div>
                    </div>
                    {s.bonus && (
                      <div className="text-right text-xs font-bold text-emerald-900 bg-white/70 px-3 py-1.5 rounded-xl border border-emerald-200">
                        {s.bonus}
                      </div>
                    )}
                  </div>

                  {/* Salary Spectrum Visual Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[11px] font-bold text-text-muted">
                      <span>Low (ETB 25k)</span>
                      <span>Market Median (ETB 60k)</span>
                      <span>High (ETB 100k+)</span>
                    </div>
                    <div className="h-3 w-full bg-surface-secondary rounded-full overflow-hidden p-0.5 border border-border">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-500"
                        style={{ width: `${spectrumPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="pt-4 border-t border-border/80 flex items-center justify-between text-xs">
                  <span className="text-text-light font-medium">Updated {s.updatedDate}</span>
                  <Link
                    to={`/company/${s.companyId}/salaries`}
                    className="font-extrabold text-primary hover:underline flex items-center gap-1"
                  >
                    View All {company.shortName || 'Company'} Salaries <FiArrowRight size={14} />
                  </Link>
                </div>

              </Card>
            );
          })
        ) : (
          <Card className="col-span-2 p-12 text-center text-text-muted">
            <p className="font-semibold text-base mb-2">No salary reports match your filters.</p>
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                setRoleSearch("");
                setCompanySearch("");
                setSalaryFilterMode("all");
                setMinSalaryAmount("");
                setMaxSalaryAmount("");
                setExperienceFilter("");
              }}
            >
              Reset Filters
            </Button>
          </Card>
        )}
      </div>

    </div>
  );
}
