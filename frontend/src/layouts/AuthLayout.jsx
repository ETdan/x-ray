import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      <div className="w-full max-w-md bg-surface shadow-glass border border-border rounded-xl p-8 md:p-10 relative z-10">
        <div className="text-center mb-8 flex justify-center border-b border-border pb-6">
          <Link to="/" className="inline-block transition-opacity hover:opacity-80">
            <img src={logo} alt="X-Ray Logo" className="h-10 w-auto mx-auto text-text" />
          </Link>
        </div>
        <Outlet />
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-text-muted text-center leading-relaxed">
            Privacy Notice: We store credentials solely to verify humanity. Your identity remains cryptographically detached.
          </p>
        </div>
      </div>
    </div>
  );
}
