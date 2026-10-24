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
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Silver Ambassadors home"
    >
      <Image
        src={site.logo.src}
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 shrink-0 object-contain transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-active:scale-[0.97] sm:h-10 sm:w-10"
        priority
      />
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
