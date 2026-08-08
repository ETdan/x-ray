import { forwardRef } from "react";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-soft",
  secondary: "bg-surface-secondary text-text hover:bg-border transition-colors",
  outline: "bg-surface text-text border border-border hover:bg-surface-secondary shadow-sm",
  ghost: "bg-transparent text-text-muted hover:text-text hover:bg-surface-secondary",
  destructive: "bg-accent-danger text-white hover:bg-red-700 shadow-sm",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm font-medium",
  md: "px-4 py-2 text-sm font-medium",
  lg: "px-6 py-3 text-base font-medium",
};

export const Button = forwardRef(
  ({ className = "", variant = "primary", size = "md", children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
