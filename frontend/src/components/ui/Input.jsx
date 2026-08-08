import { forwardRef } from "react";

export const Input = forwardRef(
  ({ className = "", error, label, helperText, id, type = "text", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-text">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          type={type}
          className={`flex h-11 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text placeholder:text-text-muted shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? "border-accent-danger focus:ring-accent-danger focus:border-accent-danger" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-sm font-medium text-accent-danger mt-0.5">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-text-muted mt-0.5">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
