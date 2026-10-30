"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/content";
import { volunteerForm } from "@/lib/config";
export function MobileNavigation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!open) return;
    const el = dialog.current;
    el?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      el?.close();
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);
  return (
    <dialog
      ref={dialog}
      id="mobile-menu"
      aria-label="Navigation menu"
      data-lenis-prevent
      onCancel={onClose}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = event.currentTarget.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        );
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      onClick={(e) => {
        if (e.target === dialog.current) onClose();
      }}
      className="mobile-dialog"
    >
      <div className="mobile-dialog-top">
        <span>Silver Ambassadors</span>
        <button type="button" onClick={onClose} aria-label="Close menu">
          <X size={22} aria-hidden="true" />
        </button>
      </div>
      <nav aria-label="All pages">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href={volunteerForm.viewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-accent w-full mt-8"
        onClick={onClose}
      >
        Submit Hours ↗
      </a>
      <p className="mt-8 text-xs text-muted">
        Student-led service in Alpharetta, Georgia.
      </p>
    </dialog>
  );
}
