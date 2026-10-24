import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { volunteerForm } from "@/lib/config";
import { navLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="site-container-wide section-pad !py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandMark inverse />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 !text-white/45">Explore</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 !text-white/45">Members</p>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <a
                  href={volunteerForm.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Submit volunteer hours
                </a>
              </li>
              <li>
                <Link
                  href="/events"
                  className="transition-colors hover:text-white"
                >
                  View upcoming events
                </Link>
              </li>
              <li className="text-white/45">{site.contactPlaceholders.note}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.name} · {site.school}
          </p>
          <p>Student-led service in Alpharetta, Georgia</p>
        </div>
      </div>
    </footer>
  );
}
