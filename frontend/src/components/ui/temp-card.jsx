import * as React from "react";
import { cn } from "../../utils/cn";

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-surface text-text shadow-soft transition-all duration-200",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 p-6 sm:p-8 border-b border-border/60", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("text-xl sm:text-2xl font-black text-text tracking-tight", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-xs sm:text-sm text-text-muted font-medium leading-relaxed", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div
      className={cn("p-6 sm:p-8", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn("flex items-center p-6 sm:p-8 pt-0 border-t border-border/60 mt-auto", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
