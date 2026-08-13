import * as React from "react";
import { cn } from "../../utils/cn";

function Select({ className, children, ...props }) {
  return (
    <select
      className={cn(
        "flex h-11 w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-bold text-text outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export { Select };
