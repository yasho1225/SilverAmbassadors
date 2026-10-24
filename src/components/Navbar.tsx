"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { MobileNavigation } from "@/components/MobileNavigation";
import { volunteerForm } from "@/lib/config";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-[background,border-color,box-shadow] ${
          scrolled
            ? "nav-blur border-border shadow-[0_1px_0_rgba(17,17,17,0.06)]"
            : "border-border/70 bg-background/75"
        }`}
      >
        <div className="site-container-wide flex h-[4.25rem] items-center justify-between gap-4">
          <BrandMark compact />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                    active
                      ? "bg-charcoal font-semibold text-white"
                      : "text-charcoal hover:bg-surface-elevated hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={volunteerForm.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-ink px-3 py-2 text-xs font-semibold text-white transition-[transform,opacity] hover:opacity-90 active:scale-[0.98] sm:px-4 sm:py-2.5 sm:text-sm"
            >
              <span className="sm:hidden">Hours</span>
              <span className="hidden sm:inline">Submit Hours</span>
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated text-ink transition-colors hover:border-charcoal/30 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation open={open} onClose={close} />
    </>
  );
}
