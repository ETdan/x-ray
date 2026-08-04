import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { FcGoogle } from "react-icons/fc";
import { FaTelegram } from "react-icons/fa";

const registerSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters long."),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    // Simulate registration API call
    console.log("Register data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/login");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-neutral-800">Create an account</h2>
        <p className="text-sm text-neutral-500 mt-1">Join X-Ray today</p>
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
        <Input
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full mt-2">
          {isSubmitting ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <div className="relative my-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-neutral-500">Or register with</span>
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
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-primary hover:text-indigo-500">
          Sign in
        </Link>
      </p>
    </div>
  );
}
