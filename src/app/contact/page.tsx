import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { volunteerForm } from "@/lib/config";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get involved with Silver Ambassadors at Alpharetta High School.",
};

export default function ContactPage() {
  const rows = [
    { label: site.name, href: undefined },
    {
      label: site.contactPlaceholders.location,
      href: undefined,
    },
    {
      label: site.contactPlaceholders.email,
      href: undefined,
      muted: true,
    },
    {
      label: site.contactPlaceholders.advisor,
      href: undefined,
      muted: true,
    },
    {
      label: "Sundays · Tech Helps typically 1:00 pm",
      href: "/events",
    },
  ] as const;

  return (
    <>
      <section className="site-pad section-y">
        <div className="site-container-wide">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.14em] text-silver uppercase">
              Contact
            </p>
            <h1 className="display mt-4 max-w-[10ch] text-[clamp(2.8rem,8vw,5.5rem)] text-ink">
              Get involved.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Verified contact channels will replace placeholders once club
              leadership publishes them. Until then, start with a Sunday event
              and submit hours after you serve.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line">
        {rows.map((row, index) => {
          const content = (
            <div
              className={`site-pad flex min-h-[6.5rem] items-end py-6 ${
                index % 2 === 0 ? "bg-surface" : "bg-background"
              }`}
            >
              <p
                className={`site-container-wide font-[family-name:var(--font-display)] text-[clamp(1.3rem,3.2vw,2.6rem)] font-semibold tracking-[-0.03em] leading-none ${
                  "muted" in row && row.muted ? "text-muted" : "text-ink"
                }`}
              >
                {row.label}
              </p>
            </div>
          );

          return (
            <Reveal key={row.label} delay={index * 0.04}>
              {row.href ? (
                <Link href={row.href} className="block transition-opacity hover:opacity-85">
                  {content}
                </Link>
              ) : (
                content
              )}
            </Reveal>
          );
        })}

        <Reveal delay={0.2}>
          <a
            href={volunteerForm.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="site-pad flex min-h-[6.5rem] items-center justify-between gap-4 bg-accent py-6 text-accent-ink transition-opacity hover:opacity-92"
          >
            <span className="site-container-wide flex w-full items-center justify-between gap-4 font-[family-name:var(--font-display)] text-[clamp(1.3rem,3.2vw,2.6rem)] font-semibold tracking-[-0.03em] leading-none">
              Submit hours
              <span aria-hidden="true" className="text-[0.9em]">
                →
              </span>
            </span>
          </a>
        </Reveal>
      </section>
    </>
  );
}
