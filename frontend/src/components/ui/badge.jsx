import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold transition-all border border-transparent shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        secondary: "bg-surface-secondary text-text-muted border-border",
        outline: "border-border text-text bg-surface",
        amber: "bg-amber-100 text-amber-900 border-amber-200/80 font-black",
        emerald: "bg-emerald-100 text-emerald-900 border-emerald-300 font-black",
        indigo: "bg-indigo-100 text-indigo-900 border-indigo-200 font-bold",
        danger: "bg-rose-100 text-rose-900 border-rose-200 font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <span
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
