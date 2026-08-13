import * as React from "react";
import { cn } from "../../utils/cn";

function Tabs({ value, onValueChange, children, className, ...props }) {
  return (
    <div className={cn("space-y-6", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, { value, onValueChange });
      })}
    </div>
  );
}

function TabsList({ className, children, value, onValueChange, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 p-1.5 rounded-2xl bg-surface-secondary/80 border border-border overflow-x-auto max-w-full",
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          selectedValue: value,
          onSelect: onValueChange,
        });
      })}
    </div>
  );
}

function TabsTrigger({
  value,
  selectedValue,
  onSelect,
  className,
  children,
  ...props
}) {
  const isActive = selectedValue === value;
  return (
    <button
      onClick={() => onSelect && onSelect(value)}
      className={cn(
        "px-5 py-2.5 rounded-xl text-sm font-extrabold whitespace-nowrap transition-all duration-150 cursor-pointer select-none",
        isActive
          ? "bg-primary text-white shadow-sm"
          : "text-text-muted hover:text-text hover:bg-surface/60",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, selectedValue, children, className, ...props }) {
  if (value !== selectedValue) return null;
  return (
    <div className={cn("animate-in fade-in duration-200", className)} {...props}>
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
