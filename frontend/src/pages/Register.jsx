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
    console.log("Register data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/login");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center border-b-2 border-ink pb-6 mb-2">
        <h2 className="text-3xl font-bold uppercase tracking-tight">Create Account</h2>
        <p className="font-mono text-sm text-ink/70 mt-2">JOIN X-RAY TODAY</p>
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
        <Input
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full text-lg mt-2">
          {isSubmitting ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
        </Button>
      </form>

      <div className="relative my-4 flex items-center justify-center">
        <div className="absolute w-full border-t-2 border-ink"></div>
        <span className="relative bg-paper px-4 font-mono text-sm font-bold uppercase text-ink/70">Or Register With</span>
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
        ALREADY HAVE AN ACCOUNT?{" "}
        <Link to="/login" className="font-bold text-accent-vermilion hover:text-ink hover:underline decoration-2 underline-offset-4 transition-colors">
          SIGN IN
        </Link>
      </p>
    </div>
  );
}
