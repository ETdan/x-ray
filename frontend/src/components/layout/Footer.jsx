import { Link } from "react-router-dom";
import { FiShield, FiLock, FiEye } from "react-icons/fi";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-surface/90 backdrop-blur-md border-t border-border mt-auto pt-16 pb-12 text-text relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="X-Ray Logo" className="h-8 w-auto" />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              X-Ray brings radical workplace transparency to Ethiopia. We empower professionals to evaluate employers through genuine anonymous reviews, real net salaries, and actual interview experiences.
            </p>
            <div className="flex items-center gap-4 pt-2 text-xs font-semibold text-text-muted">
              <span className="flex items-center gap-1"><FiLock className="text-primary"/> 100% Cryptographic Anonymity</span>
              <span className="flex items-center gap-1"><FiShield className="text-accent-success"/> Verified Employer Profiles</span>
            </div>
          </div>

          {/* Core Product Column */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm text-text tracking-wider uppercase">Discover</h4>
            <Link to="/companies" className="text-sm text-text-muted hover:text-primary transition-colors">Top Companies</Link>
            <Link to="/jobs" className="text-sm text-text-muted hover:text-primary transition-colors">Tech & Banking Jobs</Link>
            <Link to="/salaries" className="text-sm text-text-muted hover:text-primary transition-colors">Ethiopian Salary Benchmarks</Link>
            <Link to="/companies?verified=true" className="text-sm text-text-muted hover:text-primary transition-colors">Verified Employers</Link>
          </div>

          {/* Employer & Contributions */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm text-text tracking-wider uppercase">Contribute</h4>
            <Link to="/companies" className="text-sm text-text-muted hover:text-primary transition-colors">Write Anonymous Review</Link>
            <Link to="/companies" className="text-sm text-text-muted hover:text-primary transition-colors">Share Salary Data</Link>
            <Link to="/companies" className="text-sm text-text-muted hover:text-primary transition-colors">Share Interview Questions</Link>
            <Link to="/claim-company" className="text-sm text-text-muted hover:text-primary transition-colors">Claim Employer Profile</Link>
          </div>

          {/* Privacy & Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm text-text tracking-wider uppercase">Platform & Privacy</h4>
            <span className="text-sm text-text-muted">No personal employee tracking</span>
            <span className="text-sm text-text-muted">Zero employer compensation edits</span>
            <span className="text-sm text-text-muted">Community Moderation</span>
            <span className="text-sm text-text-muted">Terms & Community Guidelines</span>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-text-light gap-4">
          <p>© {new Date().getFullYear()} X-Ray Transparency Inc. See beyond the job post.</p>
          <p className="font-mono">Built for Ethiopian Professionals</p>
        </div>
      </div>
    </footer>
  );
}
