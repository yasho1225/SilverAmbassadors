import Link from "next/link";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
  inverse?: boolean;
};

export function BrandMark({
  className = "",
  compact = false,
  inverse = false,
}: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Silver Ambassadors home"
    >
      <span
        aria-hidden="true"
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-semibold tracking-[0.08em] transition-transform group-hover:scale-[1.03] ${
          inverse
            ? "border border-white/25 bg-white/10 text-white"
            : "border border-charcoal/20 bg-charcoal text-white"
        }`}
      >
        SA
      </span>
      <span className="min-w-0">
        <span
          className={`block font-display text-lg leading-none tracking-tight sm:text-xl ${
            inverse ? "text-white" : "text-ink"
          }`}
        >
          Silver Ambassadors
        </span>
        {!compact ? (
          <span
            className={`mt-1 block text-[0.7rem] font-medium tracking-[0.12em] uppercase ${
              inverse ? "text-white/50" : "text-muted"
            }`}
          >
            Alpharetta High School
          </span>
        ) : null}
      </span>
    </Link>
  );
}
