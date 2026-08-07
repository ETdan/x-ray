export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`bg-paper border-2 border-ink shadow-brutal rounded-none overflow-hidden relative ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return (
    <div className={`px-6 py-5 border-b-2 border-ink bg-paper-dark ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children }) {
  return (
    <h3 className={`text-xl font-bold text-ink uppercase tracking-wide ${className}`}>
      {children}
    </h3>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={`p-6 md:p-8 ${className}`}>{children}</div>;
}

export function CardFooter({ className = "", children }) {
  return (
    <div className={`px-6 py-4 bg-paper-dark border-t-2 border-ink ${className}`}>
      {children}
    </div>
  );
}
