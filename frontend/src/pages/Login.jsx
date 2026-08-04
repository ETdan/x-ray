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
    // Simulate login API call
    console.log("Login data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-neutral-800">Welcome back</h2>
        <p className="text-sm text-neutral-500 mt-1">Log in to your account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

        <div className="flex items-center justify-between mt-[-4px]">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-neutral-200 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-800">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-primary hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full mt-2">
          {isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <div className="relative my-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-neutral-500">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="w-full flex gap-2">
          <FcGoogle size={20} /> Google
        </Button>
        <Button variant="outline" className="w-full flex gap-2">
          <FaTelegram size={20} className="text-[#26A5E4]" /> Telegram
        </Button>
      </div>

      <p className="text-center text-sm text-neutral-500 mt-2">
        Don't have an account?{" "}
        <Link to="/register" className="font-medium text-primary hover:text-indigo-500">
          Sign up
        </Link>
      </p>
    </div>
  );
}
