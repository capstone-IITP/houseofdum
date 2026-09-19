export default function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.32em] text-gold ${className}`}>
      {children}
    </p>
  );
}

/** Thin gold rule with a small diamond at its centre. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-14 bg-gold/50" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="h-px w-14 bg-gold/50" />
    </div>
  );
}
