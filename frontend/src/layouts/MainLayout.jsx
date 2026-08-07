import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-paper relative">
      <header className="bg-paper border-b border-ink/10 py-4 px-6 sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
             <img src={logo} alt="X-Ray Logo" className="h-8 w-auto text-ink" />
          </Link>
          <div className="flex gap-8 font-medium text-sm">
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
      <footer className="bg-paper border-t border-ink/10 p-8 text-center mt-auto">
        <div className="container mx-auto font-mono text-sm text-neutral-500 tracking-wider">
          <p>&copy; {new Date().getFullYear()} X-Ray. Uncompromising Transparency.</p>
        </div>
      </footer>
    </div>
  );
}
