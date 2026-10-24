import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className = "", compact = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Silver Ambassadors home"
    >
      <Image
        src={site.logo.src}
        alt=""
        width={36}
        height={36}
        className="h-8 w-8 shrink-0 object-contain transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-active:scale-[0.97] sm:h-9 sm:w-9"
        priority
      />
      <span className="min-w-0">
        <span className="block font-[family-name:var(--font-display)] text-[0.95rem] font-semibold leading-none tracking-[-0.03em] text-ink sm:text-base">
          Silver Ambassadors
        </span>
        {!compact ? (
          <span className="mt-1 block text-[0.65rem] tracking-[0.12em] text-muted uppercase">
            Alpharetta High School
          </span>
        ) : null}
      </span>
    </Link>
  );
}
