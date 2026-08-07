import { forwardRef } from "react";

export const Input = forwardRef(
  ({ className = "", error, label, helperText, id, type = "text", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label htmlFor={id} className="text-sm font-bold text-ink uppercase tracking-wider">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          type={type}
          className={`flex h-12 w-full rounded-none border-2 border-ink bg-white px-4 py-2 text-base text-ink placeholder:text-neutral-400 shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] transition-all focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] focus:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? "border-accent-vermilion focus:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-sm font-bold text-accent-vermilion mt-1">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm font-mono text-neutral-500 mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
