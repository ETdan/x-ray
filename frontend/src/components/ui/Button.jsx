import { forwardRef } from "react";

const variants = {
  primary: "bg-primary text-white shadow-neu-primary hover:-translate-y-0.5 active:translate-y-0 active:shadow-neu-inset active:bg-primary-dark",
  secondary: "bg-surface text-ink shadow-neu-3 hover:-translate-y-0.5 active:translate-y-0 active:shadow-neu-inset",
  outline: "bg-surface text-ink border border-neutral-300 shadow-sm hover:bg-surface-light active:shadow-neu-inset active:border-transparent",
  ghost: "bg-transparent text-ink shadow-none hover:bg-neutral-100 active:bg-neutral-200",
  destructive: "bg-accent-danger text-white shadow-neu-3 active:shadow-neu-inset active:bg-red-700",
  accent: "bg-accent-success text-white shadow-neu-3 active:shadow-neu-inset active:bg-green-700"
};

const sizes = {
  sm: "px-4 py-2 text-sm font-medium",
  md: "px-6 py-3 text-base font-medium",
  lg: "px-8 py-4 text-lg font-medium",
};

export const Button = forwardRef(
  ({ className = "", variant = "primary", size = "md", children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`inline-flex items-center justify-center rounded-neu-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
