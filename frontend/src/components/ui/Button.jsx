import { forwardRef } from "react";

const variants = {
  primary: "bg-primary text-white hover:bg-indigo-700 border border-transparent",
  secondary: "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 border border-transparent",
  outline: "bg-transparent text-neutral-800 border-2 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50",
  ghost: "bg-transparent text-neutral-800 hover:bg-neutral-100 border border-transparent",
  destructive: "bg-danger text-white hover:bg-red-600 border border-transparent",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = forwardRef(
  ({ className = "", variant = "primary", size = "md", children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
