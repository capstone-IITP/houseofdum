/**
 * Text + arch mark placeholder for the logo.
 * To use the real logo file, replace this component's body with:
 *   <img src="/images/logo.png" alt="House of Dum" className="h-10 w-auto" />
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
        <path d="M8 34V21C8 13 16 10 20 3C24 10 32 13 32 21V34" />
        <path d="M14 34V22C14 17 18 15 20 11C22 15 26 17 26 22V34" opacity=".6" />
        <path d="M4 34H36" />
      </svg>
      <span className="font-display text-[1.35rem] font-semibold leading-none tracking-[0.16em] text-gold">
        HOUSE OF DUM
      </span>
    </span>
  );
}
