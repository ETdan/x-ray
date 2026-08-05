import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-soft">
        <div className="text-center mb-6 flex justify-center">
          <Link to="/" className="inline-block transition-opacity hover:opacity-80">
            <img src={logo} alt="X-Ray Logo" className="h-12 w-auto mx-auto" />
          </Link>
        </div>
        <Outlet />
        <div className="mt-6 text-sm text-neutral-500 text-center">
          <p>Privacy Notice: We store your login credentials solely to verify you are a real person. Your account identity is cryptographically detached and never linked to your public reviews, salaries, or interview posts.</p>
        </div>
      </div>
    </div>
  );
}
