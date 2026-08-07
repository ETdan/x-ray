import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper relative bg-dots">
      <div className="w-full max-w-md bg-paper border-2 border-ink shadow-brutal p-8 relative z-10">
        <div className="text-center mb-10 flex justify-center border-b-2 border-ink pb-6">
          <Link to="/" className="inline-block transition-transform hover:-translate-y-1">
            <img src={logo} alt="X-Ray Logo" className="h-14 w-auto mx-auto" />
          </Link>
        </div>
        <Outlet />
        <div className="mt-8 pt-6 border-t-2 border-ink border-dashed">
          <p className="text-sm font-mono text-ink text-center leading-relaxed">
            Privacy Notice: We store credentials solely to verify humanity. Your identity remains cryptographically detached.
          </p>
        </div>
      </div>
    </div>
  );
}
