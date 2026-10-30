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
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center border border-line text-[0.65rem] font-semibold tracking-[0.04em] text-ink transition-transform duration-150 group-active:scale-[0.97]"
      >
        SA
      </span>
      <span className="min-w-0">
        <span className="block font-display text-base leading-none tracking-[-0.03em] text-ink sm:text-xl">
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
