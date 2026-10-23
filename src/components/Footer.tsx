import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { volunteerForm } from "@/lib/config";
import { navLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-off-white">
      <div className="site-container-wide section-pad !py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              {site.description}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Members</p>
            <ul className="space-y-2.5 text-sm text-charcoal">
              <li>
                <a
                  href={volunteerForm.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline decoration-light-gray underline-offset-4 transition-colors hover:decoration-ink"
                >
                  Submit volunteer hours
                </a>
              </li>
              <li>
                <Link
                  href="/events"
                  className="transition-colors hover:text-ink"
                >
                  View upcoming events
                </Link>
              </li>
              <li className="text-muted">{site.contactPlaceholders.note}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.name} · {site.school}
          </p>
          <p>Student-led service in Alpharetta, Georgia</p>
        </div>
      </div>
    </footer>
  );
}
