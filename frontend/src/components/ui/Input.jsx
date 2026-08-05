import { forwardRef } from "react";

export const Input = forwardRef(
  ({ className = "", error, label, helperText, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-neutral-800">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={`flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? "border-danger focus:ring-danger" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="text-xs text-danger">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-xs text-neutral-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
