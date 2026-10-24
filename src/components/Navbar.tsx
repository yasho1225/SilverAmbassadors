"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { MobileNavigation } from "@/components/MobileNavigation";
import { volunteerForm } from "@/lib/config";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className="nav-shell sticky top-0 z-50">
        <div className="site-pad site-container-wide flex h-[var(--nav-h)] items-center justify-between gap-4">
          <BrandMark compact />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors duration-150 ${
                    active
                      ? "bg-ink font-semibold text-background"
                      : "text-muted hover:bg-surface-2 hover:text-ink"
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
              className="btn btn-accent !min-h-0 px-3 py-2 text-xs sm:px-4 sm:text-sm"
            >
              <span className="sm:hidden">Hours</span>
              <span className="hidden sm:inline">Submit Hours</span>
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-transform duration-150 active:scale-[0.97] lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
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
