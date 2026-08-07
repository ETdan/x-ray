export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`bg-white border border-ink/10 shadow-editorial rounded-editorial overflow-hidden relative ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return (
    <div className={`px-6 py-5 border-b border-ink/10 bg-paper ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children }) {
  return (
    <h3 className={`text-lg font-bold text-ink ${className}`}>
      {children}
    </h3>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ className = "", children }) {
  return (
    <div className={`px-6 py-4 bg-paper border-t border-ink/10 ${className}`}>
      {children}
    </div>
  );
}
