import * as React from "react";
import { cn } from "../../utils/cn";

function Avatar({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "relative flex h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-border shadow-card font-black text-base items-center justify-center select-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function AvatarImage({ src, alt, className, ...props }) {
  if (!src) return null;
  return (
    <img
      src={src}
      alt={alt || "Avatar"}
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  );
}

function AvatarFallback({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-primary text-white font-black",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Avatar, AvatarImage, AvatarFallback };
