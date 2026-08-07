import { SearchBar } from "../components/common/SearchBar";
import { Button } from "../components/ui/Button";
import { FiShield, FiBriefcase, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">

      {/* Hero Section - Editorial Bento Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
        {/* Main Hero Block */}
        <div className="lg:col-span-8 bg-white border border-ink/10 rounded-editorial shadow-editorial p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
          <div className="mb-6 font-mono text-sm tracking-widest text-primary uppercase">
            [ WORKPLACE DATA / {new Date().getFullYear()} ]
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1] mb-6 font-sans">
            THE REAL<br />
            WORKPLACE<br />
            <span className="text-primary">STORY.</span>
          </h1>

          <p className="text-xl md:text-2xl text-ink/80 max-w-xl mb-10 font-serif leading-relaxed">
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
          <div className="flex-1 bg-paper border border-ink/10 rounded-editorial shadow-editorial p-8 flex flex-col justify-center relative overflow-hidden group hover:shadow-editorial-hover transition-shadow">
             <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none"></div>
             <div className="relative z-10">
               <h2 className="text-5xl font-bold text-ink mb-2">12k+</h2>
               <p className="font-mono text-neutral-600 text-sm tracking-wider border-t border-ink/10 pt-3 mt-2">Verified Salaries</p>
             </div>
          </div>
          <div className="flex-1 bg-primary border border-ink/10 rounded-editorial shadow-editorial p-8 flex flex-col justify-center text-white relative overflow-hidden group hover:shadow-editorial-hover transition-shadow">
             <div className="relative z-10">
               <h2 className="text-5xl font-bold mb-2">8.5k</h2>
               <p className="font-mono text-white/80 text-sm tracking-wider border-t border-white/20 pt-3 mt-2">Honest Reviews</p>
             </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-sm font-mono tracking-widest uppercase text-neutral-500">01 / Why X-Ray?</h2>
          <div className="h-px bg-ink/10 flex-1 ml-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
              <FiShield size={24} />
            </div>
            <h3 className="text-xl font-bold">Uncompromising Trust</h3>
            <p className="text-base leading-relaxed text-neutral-600">
              Identity is cryptographically detached from posts. Speak truthfully without fear.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-12 w-12 rounded-full bg-accent-ochre/10 text-accent-ochre flex items-center justify-center mb-2">
              <FiTrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold">Real Salary Data</h3>
            <p className="text-base leading-relaxed text-neutral-600">
              Compare net monthly take-home pay and benefits to ensure fair compensation.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-12 w-12 rounded-full bg-accent-vermilion/10 text-accent-vermilion flex items-center justify-center mb-2">
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
          <div className="h-px bg-ink/10 flex-1 mx-6"></div>
          <Link to="/companies" className="flex items-center gap-2 font-mono text-sm uppercase text-primary hover:text-primary-light transition-colors">
            View All <FiArrowRight />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border border-ink/10 rounded-editorial shadow-editorial p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-editorial-hover transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="h-14 w-14 rounded-editorial-sm bg-paper border border-ink/10 flex items-center justify-center text-ink font-bold text-xl">
                    C{i}
                  </div>
                  <div className="flex items-center gap-1 font-mono text-sm bg-neutral-50 px-2 py-1 rounded">
                    <span className="font-bold">4.{6-i}</span>
                    <span className="text-accent-ochre">★</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">Company Name {i}</h3>
                <p className="text-sm text-neutral-500 mb-6 border-b border-ink/10 pb-4">Technology • Addis Ababa</p>
              </div>
              <Button variant="outline" className="w-full mt-auto">View Profile</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-ink text-paper rounded-editorial p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-stripes opacity-10"></div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 relative z-10 max-w-2xl leading-tight">
          Help Build A Better Job Market
        </h2>
        <p className="font-serif text-lg md:text-xl text-paper/80 max-w-xl mb-10 relative z-10">
          Join thousands of professionals anonymously sharing their workplace experiences. Your insight matters.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <Button variant="primary" size="lg" className="bg-white text-ink border-transparent hover:bg-neutral-100 hover:-translate-y-1 transition-all">
            Share a Review
          </Button>
          <Button variant="outline" size="lg" className="border-paper text-paper hover:bg-paper hover:text-ink">
            Add Salary
          </Button>
        </div>
      </section>

    </div>
  );
}
