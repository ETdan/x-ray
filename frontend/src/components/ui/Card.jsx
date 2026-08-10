export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`bg-surface border border-border shadow-soft rounded-xl overflow-hidden relative transition-shadow duration-200 hover:shadow-hover ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return (
    <div className={`px-6 py-4 border-b border-border bg-surface ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children }) {
  return (
    <h3 className={`text-lg font-semibold text-text ${className}`}>
      {children}
    </h3>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ className = "", children }) {
  return (
    <div className={`px-6 py-4 bg-surface-secondary border-t border-border ${className}`}>
      {children}
    </div>
  );
}
