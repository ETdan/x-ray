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
      <div className="text-center pb-2">
        <h2 className="text-2xl font-bold tracking-tight text-text">Welcome back</h2>
        <p className="text-sm text-text-muted mt-2">Sign in to your account</p>
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
          <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
            />
            <span className="text-text">Remember me</span>
          </label>

          <a href="#" className="text-sm font-medium text-primary hover:text-primary-hover transition-colors">
            Forgot password?
          </a>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <div className="relative my-4 flex items-center justify-center">
        <div className="absolute w-full border-t border-border"></div>
        <span className="relative bg-surface px-4 text-xs font-medium text-text-muted">Or continue with</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="w-full flex items-center gap-2">
          <FcGoogle size={20} /> <span className="hidden sm:inline">Google</span>
        </Button>
        <Button variant="outline" className="w-full flex items-center gap-2">
          <FaTelegram size={20} className="text-[#26A5E4]" /> <span className="hidden sm:inline">Telegram</span>
        </Button>
      </div>

      <p className="text-center text-sm mt-4 text-text-muted">
        Don't have an account?{" "}
        <Link to="/register" className="font-medium text-primary hover:text-primary-hover transition-colors">
          Sign up
        </Link>
      </p>
    </div>
  );
}
