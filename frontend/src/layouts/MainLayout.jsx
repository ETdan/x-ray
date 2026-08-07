import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface relative">
      <header className="bg-surface py-5 px-6 sticky top-0 z-50 shadow-neu-1">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center transition-transform hover:-translate-y-0.5 active:translate-y-0">
             <img src={logo} alt="X-Ray Logo" className="h-8 w-auto text-ink" />
          </Link>
          <div className="flex gap-8 font-medium text-sm text-ink/80">
            <Link to="/jobs" className="hover:text-primary transition-colors">Jobs</Link>
            <Link to="/companies" className="hover:text-primary transition-colors">Companies</Link>
            <Link to="/salaries" className="hover:text-primary transition-colors">Salaries</Link>
            <Link to="/reviews" className="hover:text-primary transition-colors">Reviews</Link>
            <Link to="/interviews" className="hover:text-primary transition-colors">Interviews</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-12 relative">
        <Outlet />
      </main>
      <footer className="bg-surface py-8 text-center mt-auto border-t border-neutral-200/50">
        <div className="container mx-auto font-mono text-sm text-neutral-500 tracking-wider">
          <p>&copy; {new Date().getFullYear()} X-Ray. Uncompromising Transparency.</p>
        </div>
      </footer>
    </div>
  );
}
