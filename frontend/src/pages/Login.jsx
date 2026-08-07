import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { FcGoogle } from "react-icons/fc";
import { FaTelegram } from "react-icons/fa";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(1, "Password is required."),
});

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log("Login data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center border-b-2 border-ink pb-6 mb-2">
        <h2 className="text-3xl font-bold uppercase tracking-tight">Welcome Back</h2>
        <p className="font-mono text-sm text-ink/70 mt-2">ACCESS YOUR DASHBOARD</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Input
          id="email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          {...register("password")}
          error={errors.password?.message}
        />

        <div className="flex items-center justify-between -mt-1 mb-2">
          <label className="flex items-center gap-2 text-sm font-bold cursor-pointer group">
            <div className="relative flex items-center justify-center w-5 h-5 border-2 border-ink bg-white group-hover:shadow-brutal-sm transition-shadow">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="peer absolute opacity-0 w-full h-full cursor-pointer"
              />
              <svg className="hidden peer-checked:block w-3 h-3 text-ink" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>Remember me</span>
          </label>

          <a href="#" className="text-sm font-bold text-accent-indigo hover:text-ink hover:underline decoration-2 underline-offset-4 transition-colors">
            Forgot password?
          </a>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full text-lg">
          {isSubmitting ? "SIGNING IN..." : "SIGN IN"}
        </Button>
      </form>

      <div className="relative my-4 flex items-center justify-center">
        <div className="absolute w-full border-t-2 border-ink"></div>
        <span className="relative bg-paper px-4 font-mono text-sm font-bold uppercase text-ink/70">Or Continue With</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="w-full flex items-center gap-2">
          <FcGoogle size={20} /> <span className="hidden sm:inline">Google</span>
        </Button>
        <Button variant="outline" className="w-full flex items-center gap-2">
          <FaTelegram size={20} className="text-[#26A5E4]" /> <span className="hidden sm:inline">Telegram</span>
        </Button>
      </div>

      <p className="text-center font-mono text-sm mt-4">
        NEW TO X-RAY?{" "}
        <Link to="/register" className="font-bold text-accent-vermilion hover:text-ink hover:underline decoration-2 underline-offset-4 transition-colors">
          CREATE ACCOUNT
        </Link>
      </p>
    </div>
  );
}
