import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-paper relative">
      <header className="bg-paper-dark border-b-2 border-ink py-5 px-6 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center transition-transform hover:-translate-y-0.5 active:translate-y-0">
             <img src={logo} alt="X-Ray Logo" className="h-10 w-auto text-ink" />
          </Link>
          <div className="flex gap-8 font-bold tracking-wide uppercase text-sm">
            <Link to="/jobs" className="hover:text-accent-vermilion transition-colors">Jobs</Link>
            <Link to="/companies" className="hover:text-accent-vermilion transition-colors">Companies</Link>
            <Link to="/salaries" className="hover:text-accent-vermilion transition-colors">Salaries</Link>
            <Link to="/reviews" className="hover:text-accent-vermilion transition-colors">Reviews</Link>
            <Link to="/interviews" className="hover:text-accent-vermilion transition-colors">Interviews</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 relative">
        <Outlet />
      </main>
      <footer className="bg-ink text-paper border-t-2 border-ink p-8 text-center mt-auto">
        <div className="container mx-auto font-mono text-sm uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} X-Ray. Uncompromising Transparency.</p>
        </div>
      </footer>
    </div>
  );
}
