import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <header className="bg-surface/70 backdrop-blur-md border-b border-border py-4 px-6 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
             <img src={logo} alt="X-Ray Logo" className="h-8 w-auto text-text" />
          </Link>
          <div className="flex gap-6 font-medium text-sm text-text-muted">
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
      <footer className="bg-surface border-t border-border py-8 text-center mt-auto">
        <div className="container mx-auto text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} X-Ray. Uncompromising Transparency.</p>
        </div>
      </footer>
    </div>
  );
}
