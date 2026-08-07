import { forwardRef } from "react";

const variants = {
  primary: "bg-primary text-white border-primary hover:bg-primary-light hover:border-primary-light hover:-translate-y-0.5 hover:shadow-editorial-hover",
  secondary: "bg-paper text-ink border-ink/20 hover:bg-paper-dark hover:-translate-y-0.5 hover:shadow-editorial-hover",
  outline: "bg-transparent text-ink border-ink/20 hover:border-ink hover:bg-paper-dark hover:-translate-y-0.5 hover:shadow-editorial-hover",
  ghost: "bg-transparent text-ink border-transparent shadow-none hover:bg-paper-dark hover:border-ink/10",
  destructive: "bg-accent-vermilion text-white border-accent-vermilion hover:bg-red-500 hover:-translate-y-0.5 hover:shadow-editorial-hover",
  accent: "bg-accent-indigo text-white border-accent-indigo hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-editorial-hover"
};

const sizes = {
  sm: "px-4 py-2 text-sm font-medium",
  md: "px-6 py-2.5 text-base font-medium",
  lg: "px-8 py-3 text-lg font-medium",
};

export const Button = forwardRef(
  ({ className = "", variant = "primary", size = "md", children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`inline-flex items-center justify-center rounded-editorial-sm border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-paper disabled:opacity-50 disabled:pointer-events-none active:translate-y-0 active:shadow-editorial-sm shadow-editorial-sm ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
