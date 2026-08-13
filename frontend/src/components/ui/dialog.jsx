import * as React from "react";
import { FiX } from "react-icons/fi";
import { cn } from "../../utils/cn";

function Dialog({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text/50 backdrop-blur-sm animate-in fade-in">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />
      <div className="relative z-10 w-full max-w-2xl">
        {children}
      </div>
    </div>
  );
}

function DialogContent({ className, children, onClose, ...props }) {
  return (
    <div
      className={cn(
        "bg-surface border border-border w-full rounded-3xl shadow-modal overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150 relative",
        className
      )}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-text-light hover:text-text rounded-full hover:bg-surface-secondary border border-border z-20"
        >
          <FiX size={18} />
        </button>
      )}
      {children}
    </div>
  );
}

function DialogHeader({ className, ...props }) {
  return (
    <div
      className={cn("p-6 sm:p-8 border-b border-border bg-surface-secondary/50 flex flex-col gap-1", className)}
      {...props}
    />
  );
}

function DialogTitle({ className, ...props }) {
  return (
    <h3
      className={cn("text-xl sm:text-2xl font-black text-text tracking-tight", className)}
      {...props}
    />
  );
}

function DialogDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-xs sm:text-sm text-text-muted font-medium", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }) {
  return (
    <div
      className={cn("p-6 sm:p-8 border-t border-border flex items-center justify-end gap-3 bg-surface-secondary/30", className)}
      {...props}
    />
  );
}

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter };
