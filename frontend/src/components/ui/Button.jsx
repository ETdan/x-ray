import { forwardRef } from "react";

const variants = {
  primary: "bg-ink text-paper hover:-translate-y-1 hover:shadow-brutal-hover",
  secondary: "bg-paper text-ink hover:bg-paper-dark hover:-translate-y-1 hover:shadow-brutal-hover",
  outline: "bg-transparent text-ink border-ink hover:bg-paper-dark hover:-translate-y-1 hover:shadow-brutal-hover",
  ghost: "bg-transparent text-ink border-transparent shadow-none hover:bg-paper-dark hover:border-ink hover:shadow-brutal-sm",
  destructive: "bg-accent-vermilion text-white border-ink hover:-translate-y-1 hover:shadow-brutal-hover",
  accent: "bg-accent-indigo text-white border-ink hover:-translate-y-1 hover:shadow-brutal-hover"
};

const sizes = {
  sm: "px-4 py-2 text-sm font-bold",
  md: "px-6 py-3 text-base font-bold",
  lg: "px-8 py-4 text-lg font-bold",
};

export const Button = forwardRef(
  ({ className = "", variant = "primary", size = "md", children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`inline-flex items-center justify-center rounded-none border-2 border-ink shadow-brutal transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-paper disabled:opacity-50 disabled:pointer-events-none active:translate-y-0 active:shadow-none ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
