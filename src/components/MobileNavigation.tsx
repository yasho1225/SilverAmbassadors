"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { navLinks } from "@/lib/content";
import { volunteerForm } from "@/lib/config";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-black/55"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className="menu-panel absolute inset-x-0 top-[var(--nav-h)] mx-4 overflow-hidden rounded-2xl border border-line bg-surface"
      >
        <ul className="flex flex-col p-3">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`block rounded-xl px-4 py-3 text-base transition-colors ${
                    active
                      ? "bg-ink font-semibold text-background"
                      : "text-ink hover:bg-surface-2"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="border-t border-line p-4">
          <a
            href={volunteerForm.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent w-full"
          >
            Submit Hours
          </a>
        </div>
      </nav>
    </div>
  );
}
