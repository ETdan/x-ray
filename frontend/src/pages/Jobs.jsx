import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { SearchBar } from "../components/common/SearchBar";
import { FiFilter, FiMapPin, FiClock, FiDollarSign } from "react-icons/fi";

const MOCK_JOBS = [
  { id: 1, title: "Senior Frontend Engineer", company: "TechCorp Ethiopia", location: "Addis Ababa (Hybrid)", type: "Full-time", salary: "40k - 60k ETB Net", posted: "2 hours ago" },
  { id: 2, title: "Product Manager", company: "Safaricom Ethiopia", location: "Addis Ababa", type: "Full-time", salary: "Confidential", posted: "1 day ago" },
  { id: 3, title: "UI/UX Designer", company: "Creative Solutions", location: "Remote", type: "Contract", salary: "25k - 35k ETB Net", posted: "3 days ago" },
  { id: 4, title: "Backend Developer (Go)", company: "Fintech Innovations", location: "Addis Ababa", type: "Full-time", salary: "45k - 70k ETB Net", posted: "1 week ago" },
];

export default function Jobs() {
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
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Job Type</label>
              <div className="flex flex-col gap-2 mt-2">
                {["Full-time", "Part-time", "Contract", "Internship"].map(type => (
                  <label key={type} className="flex items-center gap-2 text-sm text-neutral-600">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary border-neutral-300" />
                    {type}
                  </label>
                ))}
              </div>
            </div>
            <div className="border-t border-neutral-200 pt-4">
              <label className="text-sm font-medium text-neutral-800 mb-1 block">Location Model</label>
              <div className="flex flex-col gap-2 mt-2">
                {["On-site", "Hybrid", "Remote"].map(loc => (
                  <label key={loc} className="flex items-center gap-2 text-sm text-neutral-600">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary border-neutral-300" />
                    {loc}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-800 mb-2">Job Search</h1>
          <p className="text-neutral-500">Find your next role with companies that prioritize transparency.</p>
        </div>

        <SearchBar className="mb-2" />

        <div className="flex justify-between items-center text-sm text-neutral-500">
          <span>Showing {MOCK_JOBS.length} jobs</span>
          <select className="border-none bg-transparent font-medium text-neutral-800 focus:ring-0 cursor-pointer">
            <option>Sort by: Most Recent</option>
            <option>Sort by: Relevant</option>
          </select>
        </div>

        <div className="grid gap-4">
          {MOCK_JOBS.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1 hover:underline">{job.title}</h3>
                    <p className="font-medium text-neutral-800 mb-3">{job.company}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                      <span className="flex items-center gap-1"><FiMapPin size={14}/> {job.location}</span>
                      <span className="flex items-center gap-1"><FiClock size={14}/> {job.type}</span>
                      <span className="flex items-center gap-1"><FiDollarSign size={14}/> {job.salary}</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-end">
                    <span className="text-xs text-neutral-400">{job.posted}</span>
                    <Button variant="outline" size="sm" className="mt-4 sm:mt-0">Apply</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
