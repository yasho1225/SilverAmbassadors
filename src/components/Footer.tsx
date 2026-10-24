import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { volunteerForm } from "@/lib/config";
import { navLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-pad border-t border-line bg-background">
      <div className="site-container-wide section-y !py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              {site.description}
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm text-muted">Explore</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm text-muted">Members</p>
            <ul className="space-y-2.5 text-sm text-ink">
              <li>
                <a
                  href={volunteerForm.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line underline-offset-4 hover:decoration-accent"
                >
                  Submit volunteer hours
                </a>
              </li>
              <li>
                <Link href="/events" className="hover:text-accent">
                  View upcoming events
                </Link>
              </li>
              <li className="text-muted">{site.contactPlaceholders.note}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p>
              © 2026 {site.name} · {site.school}
            </p>
            <p>Student-led service in Alpharetta, Georgia</p>
          </div>
          <p className="max-w-sm sm:text-right">
            Atmosphere photos via{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-2 hover:decoration-accent"
            >
              Unsplash
            </a>
            {site.atmosphereCredits.map((credit, index) => (
              <span key={credit.href}>
                {index === 0 ? " · " : ", "}
                <a
                  href={credit.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line underline-offset-2 hover:decoration-accent"
                >
                  {credit.label}
                </a>
              </span>
            ))}
            . Club visit photos appear only in the gallery.
          </p>
        </div>
      </div>
    </footer>
  );
}
