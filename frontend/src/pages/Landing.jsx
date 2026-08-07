import { SearchBar } from "../components/common/SearchBar";
import { Button } from "../components/ui/Button";
import { FiShield, FiBriefcase, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col gap-12 md:gap-20">

      {/* Hero Section - Editorial Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
        {/* Main Hero Block */}
        <div className="md:col-span-8 bg-paper border-2 border-ink shadow-brutal p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-vermilion rounded-bl-full border-b-2 border-l-2 border-ink -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500"></div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6 relative z-10">
            SEE<br />
            BEYOND<br />
            THE <span className="text-accent-indigo">JOB POST.</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-ink max-w-lg mb-10 relative z-10 leading-snug">
            Anonymous employee reviews, verified salaries, and real interview insights for the Ethiopian market.
          </p>

          <div className="w-full max-w-xl relative z-10 mb-6">
            <SearchBar size="lg" />
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-sm uppercase relative z-10">
            <span className="font-bold">Trending:</span>
            <Link to="/companies" className="border border-ink px-2 py-1 hover:bg-ink hover:text-paper transition-colors">Safaricom</Link>
            <Link to="/companies" className="border border-ink px-2 py-1 hover:bg-ink hover:text-paper transition-colors">CBE</Link>
            <Link to="/jobs" className="border border-ink px-2 py-1 hover:bg-ink hover:text-paper transition-colors">Software Engineer</Link>
          </div>
        </div>

        {/* Side Bento Blocks */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="flex-1 bg-accent-ochre border-2 border-ink shadow-brutal p-6 flex flex-col justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-stripes opacity-20 pointer-events-none"></div>
             <h2 className="text-4xl font-bold text-ink mb-2">12k+</h2>
             <p className="font-mono uppercase font-bold text-ink/80 text-sm tracking-wider border-t-2 border-ink/20 pt-2">Verified Salaries</p>
          </div>
          <div className="flex-1 bg-accent-green border-2 border-ink shadow-brutal p-6 flex flex-col justify-center text-paper">
             <h2 className="text-4xl font-bold mb-2">8.5k</h2>
             <p className="font-mono uppercase font-bold text-paper/80 text-sm tracking-wider border-t-2 border-paper/30 pt-2">Honest Reviews</p>
          </div>
        </div>
      </section>

      {/* Value Proposition - Horizontal Bento */}
      <section className="border-y-4 border-ink py-12 md:py-16 bg-dots relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper border-2 border-ink px-6 py-2 shadow-brutal-sm">
          <h2 className="font-bold uppercase tracking-widest text-sm">Why X-Ray?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
          <div className="flex flex-col gap-4 bg-paper p-6 border-2 border-ink shadow-brutal">
            <div className="h-16 w-16 bg-accent-indigo border-2 border-ink flex items-center justify-center text-paper mb-2 shadow-brutal-sm">
              <FiShield size={32} />
            </div>
            <h3 className="text-2xl font-bold">Uncompromising Trust</h3>
            <p className="font-serif text-lg leading-relaxed text-ink/80">
              Identity is cryptographically detached from posts. Speak truthfully without fear.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-paper p-6 border-2 border-ink shadow-brutal">
            <div className="h-16 w-16 bg-accent-ochre border-2 border-ink flex items-center justify-center text-ink mb-2 shadow-brutal-sm">
              <FiTrendingUp size={32} />
            </div>
            <h3 className="text-2xl font-bold">Real Salary Data</h3>
            <p className="font-serif text-lg leading-relaxed text-ink/80">
              Compare net monthly take-home pay and benefits to ensure fair compensation.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-paper p-6 border-2 border-ink shadow-brutal">
            <div className="h-16 w-16 bg-accent-vermilion border-2 border-ink flex items-center justify-center text-paper mb-2 shadow-brutal-sm">
              <FiBriefcase size={32} />
            </div>
            <h3 className="text-2xl font-bold">Smarter Career Moves</h3>
            <p className="font-serif text-lg leading-relaxed text-ink/80">
              Read genuine interview experiences before accepting your next job offer.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Companies - Asymmetrical */}
      <section className="mb-8">
        <div className="flex justify-between items-end mb-8 border-b-2 border-ink pb-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Featured Companies</h2>
          <Link to="/companies" className="flex items-center gap-2 font-bold hover:text-accent-vermilion transition-colors font-mono text-sm uppercase">
            View All <FiArrowRight />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group bg-paper border-2 border-ink shadow-brutal p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-brutal-hover transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="h-16 w-16 bg-ink border-2 border-ink flex items-center justify-center text-paper font-bold text-2xl group-hover:bg-accent-vermilion transition-colors">
                    C{i}
                  </div>
                  <div className="flex items-center gap-1 bg-paper border-2 border-ink px-2 py-1 shadow-brutal-sm">
                    <span className="font-bold text-lg">4.{6-i}</span>
                    <span className="text-accent-vermilion">★</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">Company Name {i}</h3>
                <p className="font-mono text-sm text-ink/60 uppercase mb-6 border-b-2 border-ink/10 pb-4">Technology • Addis Ababa</p>
              </div>
              <Button variant="outline" className="w-full mt-auto">View Profile</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action - Magazine Spread Style */}
      <section className="bg-ink text-paper border-2 border-ink shadow-brutal p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-stripes opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-4 border-accent-ochre border-dashed animate-spin-slow"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-green rounded-tr-[100px]"></div>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 relative z-10 max-w-3xl leading-[1.1]">
          HELP BUILD A BETTER JOB MARKET
        </h2>
        <p className="font-serif text-xl md:text-2xl text-paper/80 max-w-2xl mb-10 relative z-10">
          Join thousands of professionals anonymously sharing their workplace experiences. Your insight matters.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <Button variant="secondary" size="lg" className="border-paper">
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
