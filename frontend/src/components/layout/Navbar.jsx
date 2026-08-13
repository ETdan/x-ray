import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.svg";

export default function Navbar({ onOpenSearch }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-surface/85 backdrop-blur-md border-b border-border/60 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Left Zone: Prominent Big Logo & Brand Text */}
        <div className="flex items-center gap-8 shrink-0">
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-105"
          >
            <img src={logo} alt="X-Ray Logo" className="h-10 sm:h-12 w-auto object-contain" />
          </Link>
        </div>

        {/* Center Zone: Clean & Spacious Navigation (No cramped inner box/pill) */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
          <Link
            to="/jobs"
            className={`text-base sm:text-lg font-bold transition-colors relative py-1.5 ${isActive("/jobs")
              ? "text-primary font-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
              : "text-text-muted hover:text-primary"
              }`}
          >
            Jobs
          </Link>
          <Link
            to="/companies"
            className={`text-base sm:text-lg font-bold transition-colors relative py-1.5 ${isActive("/companies") || isActive("/company")
              ? "text-primary font-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
              : "text-text-muted hover:text-primary"
              }`}
          >
            Companies
          </Link>
          <Link
            to="/salaries"
            className={`text-base sm:text-lg font-bold transition-colors relative py-1.5 ${isActive("/salaries")
              ? "text-primary font-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
              : "text-text-muted hover:text-text"
              }`}
          >
            Salaries
          </Link>
        </nav>

        {/* Right Zone: Global Search & Single Sign Up Button */}
        <div className="hidden md:flex items-center gap-5 shrink-0">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface-secondary hover:bg-surface-tertiary border border-border text-text-muted hover:text-text text-sm font-medium transition-all group"
            title="Search companies, jobs, roles..."
          >
            <FiSearch className="text-text-muted group-hover:text-primary transition-colors" size={18} />
            <span>Search...</span>
            <kbd className="hidden lg:inline-block px-2 py-0.5 text-xs font-mono bg-surface rounded border border-border text-text-light">
              ⌘K
            </kbd>
          </button>

          <Link
            to="/register"
            className="text-sm font-extrabold text-white bg-primary hover:bg-primary-hover px-7 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-full bg-surface-secondary border border-border text-text"
            aria-label="Search"
          >
            <FiSearch size={20} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-surface-secondary border border-border text-text"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-modal border-b border-border px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            <Link
              to="/companies"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl font-bold text-lg transition-colors ${isActive("/companies") || isActive("/company")
                ? "bg-primary/10 text-primary"
                : "text-text hover:bg-surface-secondary"
                }`}
            >
              Companies
            </Link>
            <Link
              to="/jobs"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl font-bold text-lg transition-colors ${isActive("/jobs")
                ? "bg-primary/10 text-primary"
                : "text-text hover:bg-surface-secondary"
                }`}
            >
              Jobs
            </Link>
            <Link
              to="/salaries"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl font-bold text-lg transition-colors ${isActive("/salaries")
                ? "bg-primary/10 text-primary"
                : "text-text hover:bg-surface-secondary"
                }`}
            >
              Salaries
            </Link>
          </div>

          <div className="pt-4 border-t border-border">
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center block rounded-xl font-extrabold text-white bg-primary shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
