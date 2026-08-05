import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { SearchBar } from "../components/common/SearchBar";
import { FiCheckCircle, FiFilter, FiMapPin, FiBriefcase } from "react-icons/fi";

const MOCK_COMPANIES = [
  { id: 1, name: "Safaricom Ethiopia", industry: "Telecommunications", location: "Addis Ababa", rating: 4.5, reviews: 342, verified: true },
  { id: 2, name: "Commercial Bank of Ethiopia", industry: "Banking", location: "Addis Ababa", rating: 4.2, reviews: 890, verified: true },
  { id: 3, name: "Ethiopian Airlines", industry: "Aviation", location: "Addis Ababa", rating: 4.0, reviews: 1200, verified: true },
  { id: 4, name: "Kacha Digital Financial Services", industry: "Fintech", location: "Addis Ababa", rating: 4.8, reviews: 56, verified: false },
  { id: 5, name: "ZayRide", industry: "Transportation", location: "Addis Ababa", rating: 3.9, reviews: 120, verified: false },
];

export default function Companies() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 shrink-0 flex flex-col gap-6">
        <div>
          <h2 className="font-bold text-neutral-800 text-lg flex items-center gap-2 mb-4">
            <FiFilter /> Filters
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Industry</label>
              <select className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">All Industries</option>
                <option value="tech">Technology</option>
                <option value="finance">Banking & Finance</option>
                <option value="telecom">Telecommunications</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Location</label>
              <select className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">All Locations</option>
                <option value="addis">Addis Ababa</option>
                <option value="hawassa">Hawassa</option>
                <option value="dire-dawa">Dire Dawa</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Minimum Rating</label>
              <select className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="0">Any Rating</option>
                <option value="4">4.0 & up</option>
                <option value="3">3.0 & up</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="verified" className="rounded text-primary focus:ring-primary border-neutral-300" />
              <label htmlFor="verified" className="text-sm text-neutral-800">Verified Companies Only</label>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-800 mb-2">Explore Companies</h1>
          <p className="text-neutral-500">Find the right workplace for you based on verified reviews and real data.</p>
        </div>

        <SearchBar className="mb-2" />

        <div className="flex justify-between items-center text-sm text-neutral-500">
          <span>Showing {MOCK_COMPANIES.length} companies</span>
          <select className="border-none bg-transparent font-medium text-neutral-800 focus:ring-0 cursor-pointer">
            <option>Sort by: Popular</option>
            <option>Sort by: Highest Rated</option>
            <option>Sort by: Most Reviews</option>
          </select>
        </div>

        <div className="grid gap-4">
          {MOCK_COMPANIES.map((company) => (
            <Card key={company.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 shrink-0 bg-neutral-100 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-400 font-bold text-xl">
                    {company.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-800 flex items-center gap-1.5">
                      {company.name}
                      {company.verified && <FiCheckCircle className="text-success" size={16} title="Verified Company" />}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mt-1">
                      <span className="flex items-center gap-1"><FiBriefcase size={14}/> {company.industry}</span>
                      <span className="flex items-center gap-1"><FiMapPin size={14}/> {company.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-1 mt-4 sm:mt-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-neutral-800 text-lg">{company.rating.toFixed(1)}</span>
                    <span className="text-warning text-lg">★</span>
                  </div>
                  <span className="text-sm text-neutral-500">{company.reviews} Reviews</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
