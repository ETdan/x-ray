import { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiSettings, FiBookmark, FiMessageSquare, FiDollarSign, FiLogOut, FiLock, FiBriefcase } from "react-icons/fi";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("contributions");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-text tracking-tight mb-1">My Account</h1>
        <p className="text-sm text-text-muted">Manage your private contributions, saved items, and security preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0 bg-surface border border-border p-6 rounded-3xl shadow-soft h-fit">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
            <Avatar className="h-14 w-14 rounded-2xl">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-extrabold text-text text-base">John Doe</h2>
              <p className="text-xs text-text-muted">Joined Feb 2026</p>
            </div>
          </div>

          <nav className="space-y-1.5 font-bold text-sm">
            <button
              onClick={() => setActiveTab("contributions")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors cursor-pointer ${
                activeTab === "contributions" ? "bg-primary text-white" : "text-text-muted hover:bg-surface-secondary hover:text-text"
              }`}
            >
              <FiMessageSquare size={16} />
              Anonymous Contributions
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors cursor-pointer ${
                activeTab === "saved" ? "bg-primary text-white" : "text-text-muted hover:bg-surface-secondary hover:text-text"
              }`}
            >
              <FiBookmark size={16} />
              Saved Items
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors cursor-pointer ${
                activeTab === "settings" ? "bg-primary text-white" : "text-text-muted hover:bg-surface-secondary hover:text-text"
              }`}
            >
              <FiSettings size={16} />
              Account Settings
            </button>
            <div className="pt-4 mt-4 border-t border-border">
              <Link to="/claim-company" className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-primary hover:bg-primary/10 transition-colors">
                <FiBriefcase size={16} />
                Employer Dashboard
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main Panel */}
        <div className="flex-1">
          
          {activeTab === "contributions" && (
            <div className="space-y-6">
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-start gap-3 text-xs text-text-muted">
                <FiLock className="text-primary text-base shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-text block mb-0.5">Private Activity Log</span>
                  This contribution history is visible strictly to you. Your public reviews, salaries, and interview logs on X-Ray do not expose your user identity or profile link to other users or employers.
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center p-5">
                  <div className="text-2xl font-black text-primary">2</div>
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Reviews</span>
                </Card>
                <Card className="text-center p-5">
                  <div className="text-2xl font-black text-emerald-700">1</div>
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Salaries</span>
                </Card>
                <Card className="text-center p-5">
                  <div className="text-2xl font-black text-amber-500">1</div>
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Interviews</span>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-text text-lg">Recent Contributions</h3>
                
                <Card className="p-5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <Badge variant="default">Review</Badge>
                    <span className="text-text-light">2 weeks ago</span>
                  </div>
                  <h4 className="font-bold text-text text-sm">Software Engineer at Safaricom Telecommunications Ethiopia</h4>
                  <p className="text-xs text-text-muted">"Best engineering culture and compensation in Addis..."</p>
                </Card>

                <Card className="p-5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <Badge variant="emerald">Salary Report</Badge>
                    <span className="text-text-light">1 month ago</span>
                  </div>
                  <h4 className="font-bold text-text text-sm">Fullstack React Developer at Kacha Digital Financial Services</h4>
                  <p className="text-xs font-bold text-emerald-700">ETB 62,000 / month Net</p>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "saved" && (
            <Card className="p-8 text-center text-text-muted space-y-3">
              <FiBookmark size={40} className="mx-auto text-text-light" />
              <h3 className="font-bold text-text text-base">No Saved Items Yet</h3>
              <p className="text-xs text-text-muted max-w-sm mx-auto">
                Bookmark companies or job postings while browsing to access them quickly here.
              </p>
            </Card>
          )}

          {activeTab === "settings" && (
            <Card className="p-6 sm:p-8 space-y-6">
              <h3 className="font-bold text-text text-lg">Account & Security Preferences</h3>
              
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1">Email Address</label>
                  <Input
                    type="email"
                    disabled
                    value="john.doe@example.et"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1">Display Pseudonym</label>
                  <Input
                    type="text"
                    disabled
                    value="John Doe (Private)"
                  />
                </div>
                <Button variant="default">
                  Update Security Credentials
                </Button>
              </div>
            </Card>
          )}

        </div>

      </div>
    </div>
  );
}
