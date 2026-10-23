import Link from "next/link";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className = "", compact = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Silver Ambassadors home"
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-light-gray bg-off-white text-[0.7rem] font-semibold tracking-[0.08em] text-ink transition-colors group-hover:border-charcoal"
      >
        SA
      </span>
      <span className="min-w-0">
        <span className="block font-display text-lg leading-none tracking-tight text-ink sm:text-xl">
          Silver Ambassadors
        </span>
        {!compact ? (
          <span className="mt-1 block text-[0.7rem] font-medium tracking-[0.12em] text-muted uppercase">
            Alpharetta High School
          </span>
        ) : null}
      </span>
    </Link>
  );
}
