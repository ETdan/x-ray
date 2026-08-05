import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <header className="bg-white shadow-soft p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
             <img src={logo} alt="X-Ray Logo" className="h-8 w-auto fill-primary" />
          </Link>
          <div className="flex gap-4">
            <Link to="/jobs" className="hover:text-primary transition-colors">Jobs</Link>
            <Link to="/companies" className="hover:text-primary transition-colors">Companies</Link>
            <Link to="/salaries" className="hover:text-primary transition-colors">Salaries</Link>
            <Link to="/reviews" className="hover:text-primary transition-colors">Reviews</Link>
            <Link to="/interviews" className="hover:text-primary transition-colors">Interviews</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1 container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-neutral-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} X-Ray. All rights reserved.</p>
      </footer>
    </div>
  );
}
