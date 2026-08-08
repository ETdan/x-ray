import { forwardRef } from "react";

export const Input = forwardRef(
  ({ className = "", error, label, helperText, id, type = "text", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-ink ml-1">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          type={type}
          className={`flex h-12 w-full rounded-neu-sm bg-surface px-4 py-2 text-base text-ink placeholder:text-neutral-400 shadow-neu-inset transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? "ring-2 ring-accent-danger/50" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-sm font-medium text-accent-danger mt-1 ml-1">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-neutral-500 mt-1 ml-1">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
