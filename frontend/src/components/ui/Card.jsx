export function Card({ className = "", children, elevation = 1, ...props }) {
  // Use elevation prop to determine the neumorphic shadow intensity
  const shadowClass = elevation === 2 ? 'shadow-neu-2' : elevation === 3 ? 'shadow-neu-3' : 'shadow-neu-1';

  return (
    <div
      className={`bg-surface rounded-neu-lg overflow-hidden relative transition-shadow duration-300 ${shadowClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return (
    <div className={`px-6 py-5 border-b border-neutral-200/50 bg-surface ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children }) {
  return (
    <h3 className={`text-xl font-bold text-ink tracking-tight ${className}`}>
      {children}
    </h3>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={`p-6 md:p-8 ${className}`}>{children}</div>;
}

export function CardFooter({ className = "", children }) {
  return (
    <div className={`px-6 py-5 bg-surface border-t border-neutral-200/50 ${className}`}>
      {children}
    </div>
  );
}
