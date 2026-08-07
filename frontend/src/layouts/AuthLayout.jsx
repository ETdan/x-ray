import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper relative bg-dots">
      <div className="w-full max-w-md bg-white border border-ink/10 shadow-editorial rounded-editorial p-8 relative z-10">
        <div className="text-center mb-8 flex justify-center border-b border-ink/10 pb-6">
          <Link to="/" className="inline-block transition-opacity hover:opacity-80">
            <img src={logo} alt="X-Ray Logo" className="h-10 w-auto mx-auto" />
          </Link>
        </div>
        <Outlet />
        <div className="mt-8 pt-6 border-t border-ink/10">
          <p className="text-sm font-mono text-neutral-500 text-center leading-relaxed">
            Privacy Notice: We store credentials solely to verify humanity. Your identity remains cryptographically detached.
          </p>
        </div>
      </div>
    </div>
  );
}
