import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { FiSearch, FiShield, FiTrendingUp, FiBriefcase, FiStar, FiArrowRight, FiCheckCircle, FiLock, FiUsers, FiAward } from "react-icons/fi";
import { MOCK_COMPANIES, MOCK_JOBS } from "../data/mockData";
import logo from "../assets/logo.svg";

export default function Landing() {
  const { openSearch } = useOutletContext() || {};
  const [heroQuery, setHeroQuery] = useState("");

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (openSearch) openSearch();
  };

  return (
    <div className="space-y-20 md:space-y-32 pb-20 relative overflow-hidden">

      {/* Section 1 & 2: Hero Section & Global Search */}
      <section className="relative z-10 pt-4 sm:pt-8 pb-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4">

        {/* Hero Title (First) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-text mb-4 leading-none">
          Know the company <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-primary via-indigo-600 to-amber-500 bg-clip-text text-transparent">
            before you join.
          </span>
        </h1>

        {/* Subtle Pill Motto Badge (Below Hero Title) */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 text-xs sm:text-sm font-bold tracking-wide shadow-soft">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="text-text font-extrabold">Uncompromising Workplace Intelligence in Ethiopia</span>
        </div>

        {/* Hero Subtitle Description */}
        <p className="text-base sm:text-xl text-text-muted mb-8 max-w-2xl leading-relaxed font-medium">
          Real workplace reviews, net ETB monthly salary benchmarks, interview experiences, and verified jobs from people who have actually been there.
        </p>

        {/* Global Search Bar Box */}
        <form
          onSubmit={handleHeroSearch}
          onClick={openSearch}
          className="w-full max-w-2xl bg-surface/90 backdrop-blur-md p-3 rounded-3xl border border-border shadow-modal flex items-center gap-3 cursor-pointer hover:border-primary/50 transition-all group mb-6"
        >
          <FiSearch className="text-text-muted group-hover:text-primary transition-colors ml-3" size={22} />
          <input
            type="text"
            readOnly
            placeholder="Search companies, jobs, roles, locations..."
            className="w-full bg-transparent text-text placeholder:text-text-light text-base font-medium focus:outline-none cursor-pointer"
          />
          <button
            type="button"
            className="px-6 py-3 bg-primary text-white font-extrabold text-sm rounded-2xl hover:bg-primary-hover transition-colors shadow-sm shrink-0"
          >
            Search
          </button>
        </form>

        {/* Popular Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-text-muted">
          <span className="text-text-light uppercase tracking-wider">Popular Searches:</span>
          {["Safaricom Ethiopia", "Commercial Bank of Ethiopia", "Software Engineer", "Fintech", "Addis Ababa"].map((tag) => (
            <button
              key={tag}
              onClick={openSearch}
              className="px-3.5 py-1.5 rounded-full bg-surface border border-border hover:border-primary hover:text-primary transition-all font-bold"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Section 3: Platform Live Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-surface/90 backdrop-blur-md border border-border rounded-3xl p-8 shadow-soft text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-primary mb-1">1,200+</div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-text-muted">Companies</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-text mb-1">8,500+</div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-text-muted">Reviews</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-800 mb-1">12,400+</div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-text-muted">Salary Reports</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-text mb-1">3,400+</div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-text-muted">Interviews</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl sm:text-4xl font-black text-amber-500 mb-1">450+</div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-text-muted">Open Vacancies</div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Companies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-primary block mb-1">Curated Workplaces</span>
            <h2 className="text-3xl font-black text-text tracking-tight">Featured Companies</h2>
          </div>
          <Link
            to="/companies"
            className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
          >
            Explore All Companies <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_COMPANIES.slice(0, 3).map((company) => (
            <Link
              key={company.id}
              to={`/company/${company.id}`}
              className="bg-surface border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="h-36 w-full relative bg-neutral-800">
                  <img src={company.bannerImage} alt={company.name} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-text flex items-center gap-1">
                    <span>{company.rating}</span>
                    <span className="text-amber-500">★</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Logo shifted up, text cleanly below on white surface */}
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className={`h-14 w-14 rounded-2xl ${company.logoBg} font-black text-lg flex items-center justify-center border-2 border-surface shadow-card shrink-0 -mt-10 relative z-10`}>
                      {company.logoText}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-text group-hover:text-primary transition-colors flex items-center gap-1">
                        {company.shortName}
                        {company.verified && <FiCheckCircle className="text-emerald-600" size={14} />}
                      </h3>
                      <p className="text-xs text-text-muted font-medium">{company.industry}</p>
                    </div>
                  </div>

                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed mb-4">
                    {company.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border/60 text-center text-xs">
                    <div>
                      <span className="font-bold text-text block">{company.reviewCount}</span>
                      <span className="text-text-light text-[11px]">Reviews</span>
                    </div>
                    <div>
                      <span className="font-bold text-emerald-800 block">{company.salaryCount}</span>
                      <span className="text-text-light text-[11px]">Salaries</span>
                    </div>
                    <div>
                      <span className="font-bold text-primary block">{company.openJobsCount}</span>
                      <span className="text-text-light text-[11px]">Jobs</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-3.5 bg-surface-secondary/50 border-t border-border flex items-center justify-between text-xs font-bold text-primary group-hover:bg-primary/5 transition-colors">
                <span>View Workplace Profile</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 5: Explore Workplace Data Entry Points */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-text tracking-tight mb-3">Explore Workplace Intelligence</h2>
          <p className="text-text-muted text-base">Direct discovery vectors tailored to your career priorities</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/companies?sort=rating" className="bg-surface border border-border p-6 rounded-3xl shadow-soft hover:shadow-hover transition-all group">
            <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold mb-4">
              <FiStar size={24} />
            </div>
            <h3 className="font-extrabold text-text text-lg mb-1 group-hover:text-primary transition-colors">Top Rated</h3>
            <p className="text-xs text-text-muted leading-relaxed">Workplaces with highest overall employee ratings</p>
          </Link>

          <Link to="/salaries" className="bg-surface border border-border p-6 rounded-3xl shadow-soft hover:shadow-hover transition-all group">
            <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold mb-4">
              <FiTrendingUp size={24} />
            </div>
            <h3 className="font-extrabold text-text text-lg mb-1 group-hover:text-primary transition-colors">Highest Paying</h3>
            <p className="text-xs text-text-muted leading-relaxed">Companies offering top net ETB monthly packages</p>
          </Link>

          <Link to="/companies" className="bg-surface border border-border p-6 rounded-3xl shadow-soft hover:shadow-hover transition-all group">
            <div className="h-12 w-12 rounded-2xl bg-indigo-100 text-indigo-900 flex items-center justify-center font-bold mb-4">
              <FiAward size={24} />
            </div>
            <h3 className="font-extrabold text-text text-lg mb-1 group-hover:text-primary transition-colors">Best Culture</h3>
            <p className="text-xs text-text-muted leading-relaxed">Top marks for work-life balance and mentorship</p>
          </Link>

          <Link to="/companies?sort=reviews" className="bg-surface border border-border p-6 rounded-3xl shadow-soft hover:shadow-hover transition-all group">
            <div className="h-12 w-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold mb-4">
              <FiUsers size={24} />
            </div>
            <h3 className="font-extrabold text-text text-lg mb-1 group-hover:text-primary transition-colors">Most Reviewed</h3>
            <p className="text-xs text-text-muted leading-relaxed">Highest volume of verified employee reports</p>
          </Link>
        </div>
      </section>

      {/* Section 6: How X-Ray Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-surface-secondary/70 border border-border rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-primary block mb-1">Simple & Powerful</span>
            <h2 className="text-3xl font-black text-text tracking-tight">How X-Ray Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface p-6 rounded-2xl border border-border flex flex-col items-center text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-primary text-white font-black text-lg flex items-center justify-center shadow-sm">
                1
              </div>
              <h3 className="font-extrabold text-text text-lg">Search Company</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Find any major employer or fintech in Ethiopia with instant live search.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-border flex flex-col items-center text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-primary text-white font-black text-lg flex items-center justify-center shadow-sm">
                2
              </div>
              <h3 className="font-extrabold text-text text-lg">Understand Culture</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Read anonymous reviews, compare net ETB monthly salaries, and check interview questions.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-border flex flex-col items-center text-center space-y-3">
              <div className="h-12 w-12 rounded-full bg-primary text-white font-black text-lg flex items-center justify-center shadow-sm">
                3
              </div>
              <h3 className="font-extrabold text-text text-lg">Decide & Apply</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Apply with complete confidence knowing exactly what it's like to work there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Trust / Anonymity Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-neutral-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-14 shadow-modal relative overflow-hidden">
          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold text-emerald-400 border border-white/10">
              <FiLock /> Cryptographic Anonymity Architecture
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Speak the truth <br className="hidden sm:inline" /> without fear of retaliation.
            </h2>

            <p className="text-white/80 text-base leading-relaxed">
              We store authentication credentials solely to verify real human users. Your public reviews, salaries, and interview logs are cryptographically detached from your personal account.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold pt-2">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-emerald-400" size={16} /> Zero link to your email/name
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-emerald-400" size={16} /> Employers cannot delete negative feedback
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-emerald-400" size={16} /> Anti-spam verification active
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-emerald-400" size={16} /> Moderated for non-executive privacy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: CTA Conversion Banner */}
      <section className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="bg-primary text-white rounded-3xl p-10 sm:p-16 shadow-modal space-y-6 relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-2xl mx-auto">
            Help bring transparency to the Ethiopian job market.
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Join thousands of professionals sharing their real workplace experiences. Your review could change someone's career path.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              to="/companies"
              className="px-8 py-3.5 rounded-full font-extrabold text-text bg-white hover:bg-surface-secondary shadow-sm transition-all text-sm"
            >
              Write Anonymous Review
            </Link>
            <Link
              to="/companies"
              className="px-8 py-3.5 rounded-full font-extrabold text-white border border-white/30 hover:bg-white/10 transition-all text-sm"
            >
              Share Salary Data
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
