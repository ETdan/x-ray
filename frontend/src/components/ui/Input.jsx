import { forwardRef } from "react";

export const Input = forwardRef(
  ({ className = "", error, label, helperText, id, type = "text", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-ink">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          type={type}
          className={`flex h-11 w-full rounded-editorial-sm border border-ink/20 bg-white px-4 py-2 text-sm text-ink placeholder:text-neutral-400 shadow-sm transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? "border-accent-vermilion focus:border-accent-vermilion focus:ring-accent-vermilion" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-sm font-medium text-accent-vermilion mt-0.5">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-neutral-500 mt-0.5">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
