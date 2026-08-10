import { SearchBar } from "../components/common/SearchBar";
import { Button } from "../components/ui/Button";
import { FiShield, FiBriefcase, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col gap-20 md:gap-32">

      {/* Hero Section - Clean SaaS */}
      <section className="pt-8 md:pt-16 pb-8 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Uncompromising Workplace Transparency
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text mb-6">
          See beyond the <span className="text-primary">job post.</span>
        </h1>

        <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl leading-relaxed">
          Read anonymous employee reviews, compare verified salaries, and discover the truth about your next employer.
        </p>

        <div className="w-full max-w-2xl mb-8">
          <SearchBar size="lg" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-text-muted">
          <span className="font-semibold">Popular:</span>
          <Link to="/companies" className="hover:text-primary transition-colors">Safaricom</Link>
          <span className="hidden sm:inline">•</span>
          <Link to="/companies" className="hover:text-primary transition-colors">CBE</Link>
          <span className="hidden sm:inline">•</span>
          <Link to="/jobs" className="hover:text-primary transition-colors">Software Engineer</Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto w-full border-y border-border py-12 bg-surface/50 backdrop-blur-sm rounded-3xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold text-primary mb-2">12k+</h2>
            <p className="text-sm font-medium text-text-muted uppercase tracking-wider">Salaries</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold text-text mb-2">8.5k</h2>
            <p className="text-sm font-medium text-text-muted uppercase tracking-wider">Reviews</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold text-text mb-2">1.2k</h2>
            <p className="text-sm font-medium text-text-muted uppercase tracking-wider">Companies</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold text-text mb-2">3.4k</h2>
            <p className="text-sm font-medium text-text-muted uppercase tracking-wider">Interviews</p>
          </div>
      </section>

      {/* Value Proposition */}
      <section className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
              <FiShield size={24} />
            </div>
            <h3 className="text-xl font-bold text-text">Uncompromising Trust</h3>
            <p className="text-text-muted leading-relaxed">
              Your identity is cryptographically detached from your posts. Speak truthfully without fear of retaliation.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-12 w-12 rounded-lg bg-accent-warning/10 text-accent-warning flex items-center justify-center mb-2">
              <FiTrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold text-text">Real Salary Data</h3>
            <p className="text-text-muted leading-relaxed">
              Compare net monthly take-home pay and accurate benefits to ensure you are being compensated fairly.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-12 w-12 rounded-lg bg-accent-success/10 text-accent-success flex items-center justify-center mb-2">
              <FiBriefcase size={24} />
            </div>
            <h3 className="text-xl font-bold text-text">Smarter Career Moves</h3>
            <p className="text-text-muted leading-relaxed">
              Read genuine interview experiences and cultural insights before you accept your next job offer.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="max-w-6xl mx-auto w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-text tracking-tight mb-2">Featured Companies</h2>
            <p className="text-text-muted">Top-rated workplaces in Ethiopia</p>
          </div>
          <Link to="/companies" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors">
            View All Companies <FiArrowRight />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-surface border border-border shadow-soft hover:shadow-hover rounded-xl p-6 flex flex-col justify-between transition-all duration-200 group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="h-14 w-14 rounded-lg bg-background border border-border flex items-center justify-center text-text font-bold text-xl">
                    C{i}
                  </div>
                  <div className="flex items-center gap-1 text-sm bg-background border border-border px-2.5 py-1 rounded-md">
                    <span className="font-semibold text-text">4.{6-i}</span>
                    <span className="text-accent-warning">★</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-text mb-1 group-hover:text-primary transition-colors">Company Name {i}</h3>
                <p className="text-sm text-text-muted mb-6">Technology • Addis Ababa</p>
              </div>
              <Button variant="outline" className="w-full mt-auto">View Profile</Button>
            </div>
          ))}
        </div>
        <Link to="/companies" className="sm:hidden flex items-center justify-center gap-2 mt-6 text-sm font-semibold text-primary hover:text-primary-hover transition-colors">
            View All Companies <FiArrowRight />
        </Link>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white rounded-2xl p-10 md:p-16 flex flex-col items-center text-center max-w-5xl mx-auto w-full shadow-glass">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-2xl">
          Help build a better job market
        </h2>
        <p className="text-lg text-white/80 max-w-xl mb-10">
          Join thousands of professionals anonymously sharing their workplace experiences. Your insight could help someone make the right career choice.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="lg" className="bg-white text-text hover:bg-surface-secondary shadow-sm">
            Share a Review
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
            Add Salary
          </Button>
        </div>
      </section>

    </div>
  );
}
