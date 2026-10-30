import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { getSocialLinks } from "@/lib/config";
import { navLinks, site } from "@/lib/content";

export function Footer() {
  const socialLinks = getSocialLinks();
  return (
    <footer className="site-pad site-footer border-t border-line bg-background">
      <div className="site-container-wide">
        <div className="footer-grid">
          <div className="footer-brand">
            <BrandMark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Students and seniors, connected through service in Alpharetta.
            </p>
          </div>
          <nav aria-label="Footer pages">
            <p className="section-label mb-4 text-muted">Explore</p>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Social links">
            <p className="section-label mb-4 text-muted">Stay connected</p>
            <ul className="footer-links">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  {social.href ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      {social.label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="social-pending">
                      <span>{social.label}</span>
                      <small>Link coming soon</small>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            © 2026 {site.name} · {site.school}
          </p>
          <p>Different generations. Common ground.</p>
        </div>
      </div>
    </footer>
  );
}
