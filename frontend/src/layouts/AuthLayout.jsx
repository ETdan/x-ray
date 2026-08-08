import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface relative">
      <div className="w-full max-w-md bg-surface shadow-neu-2 rounded-neu-xl p-8 md:p-10 relative z-10">
        <div className="text-center mb-8 flex justify-center border-b border-neutral-200/50 pb-6">
          <Link to="/" className="inline-block transition-transform hover:-translate-y-0.5 active:translate-y-0">
            <img src={logo} alt="X-Ray Logo" className="h-10 w-auto mx-auto text-ink" />
          </Link>
        </div>
        <Outlet />
        <div className="mt-8 pt-6 border-t border-neutral-200/50">
          <p className="text-xs font-mono text-neutral-500 text-center leading-relaxed">
            Privacy Notice: We store credentials solely to verify humanity. Your identity remains cryptographically detached.
          </p>
        </div>
      </div>
    </div>
  );
}
