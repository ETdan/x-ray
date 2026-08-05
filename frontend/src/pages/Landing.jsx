import { SearchBar } from "../components/common/SearchBar";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { FiShield, FiBriefcase, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-8 flex flex-col items-center text-center px-4 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 tracking-tight leading-tight mb-6">
          See beyond the <span className="text-primary">job post.</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl">
          Anonymous employee reviews, verified salaries, and interview insights for the Ethiopian job market. Know before you go.
        </p>
        <div className="w-full max-w-2xl mb-8">
          <SearchBar size="lg" />
        </div>
        <div className="flex gap-4 text-sm font-medium text-neutral-500">
          <p>Popular:</p>
          <div className="flex gap-2">
            <Link to="/companies" className="hover:text-primary transition-colors">Safaricom</Link>

            <span>•</span>
            <Link to="/jobs" className="hover:text-primary transition-colors">Software Engineer</Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white border-y border-neutral-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <div className="h-16 w-16 bg-indigo-50 text-primary rounded-full flex items-center justify-center mb-2">
                <FiShield size={32} />
              </div>
              <h3 className="text-xl font-bold text-neutral-800">Uncompromising Trust</h3>
              <p className="text-neutral-500 leading-relaxed">
                Your identity is cryptographically detached from your reviews and salaries. Speak truthfully without fear.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="h-16 w-16 bg-green-50 text-success rounded-full flex items-center justify-center mb-2">
                <FiTrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-neutral-800">Real Salary Data</h3>
              <p className="text-neutral-500 leading-relaxed">
                Compare net monthly take-home pay (ETB) and benefits to ensure you are being compensated fairly.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-2">
                <FiBriefcase size={32} />
              </div>
              <h3 className="text-xl font-bold text-neutral-800">Smarter Career Moves</h3>
              <p className="text-neutral-500 leading-relaxed">
                Read genuine interview experiences and company culture reviews before accepting your next job offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-neutral-800 mb-10">Powering Transparency in Ethiopia</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <Card>
            <CardContent className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">1.2k</p>
              <p className="text-neutral-500 font-medium">Companies</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">8.5k</p>
              <p className="text-neutral-500 font-medium">Reviews</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">12k</p>
              <p className="text-neutral-500 font-medium">Salaries</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">3.4k</p>
              <p className="text-neutral-500 font-medium">Interviews</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Companies Placeholder */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-neutral-800">Featured Companies</h2>
            <p className="text-neutral-500 mt-1">Highly rated workplaces</p>
          </div>
          <Link to="/companies" className="text-primary font-medium hover:underline text-sm">View all</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Placeholders for companies */}
          {[1, 2, 3].map((i) => (
            <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-neutral-100 rounded-md border border-neutral-200"></div>
                  <div>
                    <h3 className="font-bold text-neutral-800 flex items-center gap-1">
                      Company Name {i}
                      {i === 1 && <FiCheckCircle className="text-success" size={14} title="Verified" />}
                    </h3>
                    <p className="text-xs text-neutral-500">Technology • Addis Ababa</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-neutral-800">4.5</span>
                    <span className="text-warning">★</span>
                  </div>
                  <span className="text-neutral-500">120 reviews</span>
                </div>
                <Button variant="outline" className="w-full" size="sm">View Profile</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-neutral-800 text-white py-16 rounded-2xl container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-4">Help build a better job market</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-8 text-lg">
          Join thousands of professionals anonymously sharing their workplace experiences. Your insight could help someone make the right career choice.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary" size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100">
            Share a Review
          </Button>
          <Button variant="outline" size="lg" className="border-neutral-600 text-white hover:bg-neutral-700 hover:border-neutral-500">
            Add Salary
          </Button>
        </div>
      </section>
    </div>
  );
}
