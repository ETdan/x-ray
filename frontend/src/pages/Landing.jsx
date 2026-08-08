import { SearchBar } from "../components/common/SearchBar";
import { Button } from "../components/ui/Button";
import { FiShield, FiBriefcase, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">

      {/* Hero Section - Neumorphic Bento Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
        {/* Main Hero Block */}
        <div className="lg:col-span-8 bg-surface rounded-neu-xl shadow-neu-2 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center border border-white/40">
          <div className="mb-6 font-mono text-sm tracking-widest text-primary uppercase font-bold">
            [ WORKPLACE DATA / {new Date().getFullYear()} ]
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1] mb-6 text-ink">
            THE REAL<br />
            WORKPLACE<br />
            <span className="text-primary">STORY.</span>
          </h1>

          <p className="text-xl md:text-2xl text-ink/70 max-w-xl mb-10 leading-relaxed font-medium">
            Anonymous experiences, verified salaries, and company insights for the Ethiopian market.
          </p>

          <div className="w-full max-w-xl mb-6">
            <SearchBar size="lg" />
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-sm uppercase text-neutral-500">
            <span className="font-bold">Trending:</span>
            <Link to="/companies" className="hover:text-primary transition-colors">Safaricom</Link>
            <Link to="/companies" className="hover:text-primary transition-colors">CBE</Link>
            <Link to="/jobs" className="hover:text-primary transition-colors">Software Engineer</Link>
          </div>
        </div>

        {/* Side Bento Blocks */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex-1 bg-surface rounded-neu-xl shadow-neu-2 p-8 flex flex-col justify-center relative overflow-hidden border border-white/40 group hover:shadow-neu-3 transition-shadow">
             <div className="relative z-10 text-center">
               <h2 className="text-5xl font-bold text-ink mb-2">12k+</h2>
               <p className="font-mono text-neutral-500 text-sm tracking-widest uppercase mt-2">Verified Salaries</p>
             </div>
          </div>
          <div className="flex-1 bg-surface rounded-neu-xl shadow-neu-2 p-8 flex flex-col justify-center relative overflow-hidden border border-white/40 group hover:shadow-neu-3 transition-shadow">
             <div className="relative z-10 text-center">
               <h2 className="text-5xl font-bold text-primary mb-2">8.5k</h2>
               <p className="font-mono text-neutral-500 text-sm tracking-widest uppercase mt-2">Honest Reviews</p>
             </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-500">01 / Why X-Ray?</h2>
          <div className="h-px bg-neutral-300 flex-1 ml-6 shadow-sm"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col gap-4 bg-surface p-8 rounded-neu-xl shadow-neu-1 border border-white/40">
            <div className="h-14 w-14 rounded-neu-md shadow-neu-inset bg-surface text-primary flex items-center justify-center mb-2">
              <FiShield size={24} />
            </div>
            <h3 className="text-xl font-bold">Uncompromising Trust</h3>
            <p className="text-base leading-relaxed text-neutral-600">
              Identity is cryptographically detached from posts. Speak truthfully without fear.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-surface p-8 rounded-neu-xl shadow-neu-1 border border-white/40">
            <div className="h-14 w-14 rounded-neu-md shadow-neu-inset bg-surface text-accent-warning flex items-center justify-center mb-2">
              <FiTrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold">Real Salary Data</h3>
            <p className="text-base leading-relaxed text-neutral-600">
              Compare net monthly take-home pay and benefits to ensure fair compensation.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-surface p-8 rounded-neu-xl shadow-neu-1 border border-white/40">
            <div className="h-14 w-14 rounded-neu-md shadow-neu-inset bg-surface text-accent-success flex items-center justify-center mb-2">
              <FiBriefcase size={24} />
            </div>
            <h3 className="text-xl font-bold">Smarter Career Moves</h3>
            <p className="text-base leading-relaxed text-neutral-600">
              Read genuine interview experiences before accepting your next job offer.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section>
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-500">02 / Featured Companies</h2>
          <div className="h-px bg-neutral-300 flex-1 mx-6 shadow-sm"></div>
          <Link to="/companies" className="flex items-center gap-2 font-mono text-sm uppercase text-primary hover:text-primary-light transition-colors">
            View All <FiArrowRight />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-surface border border-white/40 rounded-neu-lg shadow-neu-1 p-6 flex flex-col justify-between hover:shadow-neu-2 transition-shadow duration-300 group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="h-16 w-16 rounded-neu-md shadow-neu-inset bg-surface flex items-center justify-center text-primary font-bold text-2xl">
                    C{i}
                  </div>
                  <div className="flex items-center gap-1 font-mono text-sm bg-surface shadow-neu-inset px-3 py-1.5 rounded-neu-sm">
                    <span className="font-bold">4.{6-i}</span>
                    <span className="text-accent-warning">★</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">Company Name {i}</h3>
                <p className="text-sm text-neutral-500 mb-6">Technology • Addis Ababa</p>
              </div>
              <Button variant="secondary" className="w-full mt-auto">View Profile</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white rounded-neu-xl shadow-neu-primary p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden border border-white/20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 relative z-10 max-w-2xl leading-tight">
          Help Build A Better Job Market
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 relative z-10 font-medium">
          Join thousands of professionals anonymously sharing their workplace experiences. Your insight matters.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <Button variant="secondary" size="lg" className="border-transparent">
            Share a Review
          </Button>
          <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white border-transparent">
            Add Salary
          </Button>
        </div>
      </section>

    </div>
  );
}
