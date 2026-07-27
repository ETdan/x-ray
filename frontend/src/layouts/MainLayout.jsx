import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <header className="bg-white shadow-soft p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-primary">X-Ray</div>
          <div className="flex gap-4">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="/jobs" className="hover:text-primary transition-colors">Jobs</a>
            <a href="/companies" className="hover:text-primary transition-colors">Companies</a>
            <a href="/salaries" className="hover:text-primary transition-colors">Salaries</a>
            <a href="/reviews" className="hover:text-primary transition-colors">Reviews</a>
            <a href="/interviews" className="hover:text-primary transition-colors">Interviews</a>
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
