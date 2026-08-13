import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-extrabold transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 cursor-pointer select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary-hover shadow-sm",
        destructive: "bg-accent-danger text-white hover:bg-accent-danger/90 shadow-sm",
        outline: "border border-border bg-surface text-text hover:bg-surface-secondary hover:text-primary",
        secondary: "bg-surface-secondary text-text hover:bg-surface-tertiary",
        ghost: "hover:bg-surface-secondary text-text-muted hover:text-text",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto font-bold",
        accent: "bg-accent text-amber-950 hover:bg-accent-hover shadow-sm font-black",
        emerald: "bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm font-extrabold",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 px-3.5 text-xs rounded-lg",
        lg: "h-13 px-8 text-base rounded-2xl",
        icon: "h-10 w-10 p-0 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
