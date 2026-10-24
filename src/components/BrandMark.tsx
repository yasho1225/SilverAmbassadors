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
        className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[0.65rem] font-semibold tracking-[0.1em] text-accent-ink transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-active:scale-[0.97]"
      >
        SA
      </span>
      <span className="min-w-0">
        <span className="block font-display text-lg leading-none tracking-[-0.03em] text-ink sm:text-xl">
          Silver Ambassadors
        </span>
        {!compact ? (
          <span className="mt-1 block text-[0.68rem] tracking-[0.14em] text-muted uppercase">
            Alpharetta High School
          </span>
        ) : null}
      </span>
    </Link>
  );
}
