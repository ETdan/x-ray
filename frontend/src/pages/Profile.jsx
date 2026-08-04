import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { FiUser, FiSettings, FiBookmark, FiMessageSquare, FiDollarSign, FiLogOut } from "react-icons/fi";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("contributions");

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-16 w-16 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-500 text-xl font-bold">
            JD
          </div>
          <div>
            <h2 className="font-bold text-neutral-800 text-lg">John Doe</h2>
            <p className="text-sm text-neutral-500">Joined Jan 2024</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setActiveTab("contributions")}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === "contributions" ? "bg-primary text-white" : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <FiMessageSquare size={18} />
            My Contributions
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === "saved" ? "bg-primary text-white" : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <FiBookmark size={18} />
            Saved Items
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === "settings" ? "bg-primary text-white" : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <FiSettings size={18} />
            Account Settings
          </button>
          <div className="my-2 border-t border-neutral-200" />
          <button className="flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-medium text-danger hover:bg-red-50 transition-colors">
            <FiLogOut size={18} />
            Sign Out
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {activeTab === "contributions" && (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-800">Your Anonymous Contributions</h2>
              <p className="text-sm text-neutral-500 mt-1">
                This history is visible only to you. Your public posts do not link back to this account.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <FiMessageSquare size={24} className="text-primary mb-2" />
                  <p className="text-2xl font-bold text-neutral-800">3</p>
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Reviews</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <FiDollarSign size={24} className="text-success mb-2" />
                  <p className="text-2xl font-bold text-neutral-800">1</p>
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Salaries</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <FiUser size={24} className="text-blue-500 mb-2" />
                  <p className="text-2xl font-bold text-neutral-800">0</p>
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Interviews</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="font-bold text-neutral-800 text-lg border-b border-neutral-200 pb-2">Recent Activity</h3>

            <div className="flex flex-col gap-4">
              {/* Placeholder Contribution 1 */}
              <Card>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-indigo-50 text-primary text-xs font-bold rounded">Review</span>
                      <span className="text-sm font-bold text-neutral-800">Software Engineer at TechCorp</span>
                    </div>
                    <span className="text-xs text-neutral-500">2 days ago</span>
                  </div>
                  <p className="text-sm text-neutral-600 mt-2 line-clamp-2">
                    "Great work-life balance and modern tech stack, but the compensation could be better compared to market rates..."
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="ghost" className="text-danger hover:bg-red-50 hover:text-danger" size="sm">Delete</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Placeholder Contribution 2 */}
              <Card>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-green-50 text-success text-xs font-bold rounded">Salary</span>
                      <span className="text-sm font-bold text-neutral-800">Frontend Developer at Innovate LLC</span>
                    </div>
                    <span className="text-xs text-neutral-500">1 month ago</span>
                  </div>
                  <p className="text-sm text-neutral-800 font-medium mt-2">
                    Net Monthly: 25,000 ETB
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="ghost" className="text-danger hover:bg-red-50 hover:text-danger" size="sm">Delete</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "saved" && (
          <div>
            <h2 className="text-2xl font-bold text-neutral-800">Saved Items</h2>
            <p className="text-sm text-neutral-500 mt-1 mb-6">Jobs and companies you've bookmarked.</p>
            <div className="py-12 text-center text-neutral-500 border-2 border-dashed border-neutral-200 rounded-lg">
              <FiBookmark size={48} className="mx-auto mb-4 text-neutral-300" />
              <p>You haven't saved any items yet.</p>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Account Settings</h2>
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-neutral-800">Email Address</label>
                  <input type="email" disabled value="john.doe@example.com" className="w-full rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-500" />
                </div>
                <Button className="w-fit mt-2">Update Password</Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
