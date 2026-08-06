export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`bg-white rounded-lg border border-neutral-200 shadow-soft overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return <div className={`px-6 py-4 border-b border-neutral-200 ${className}`}>{children}</div>;
}

export function CardTitle({ className = "", children }) {
  return <h3 className={`text-lg font-semibold text-neutral-800 ${className}`}>{children}</h3>;
}

export function CardContent({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ className = "", children }) {
  return <div className={`px-6 py-4 bg-neutral-50 border-t border-neutral-200 ${className}`}>{children}</div>;
}
