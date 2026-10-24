import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { volunteerForm } from "@/lib/config";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get involved with Silver Ambassadors at Alpharetta High School.",
};

export default function ContactPage() {
  const { contactPlaceholders } = site;

  return (
    <>
      <section className="border-b border-border section-pad !pb-14 !pt-20">
        <div className="site-container">
          <FadeIn>
            <SectionHeading
              eyebrow="Contact"
              title="Get involved"
              description="Reach out through verified club channels once they are published, or start by joining a Sunday event and logging your hours."
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <div className="panel h-full border-dashed p-8">
              <p className="eyebrow mb-4">Verified details pending</p>
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-ink">Email</dt>
                  <dd className="mt-1 text-muted">{contactPlaceholders.email}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Staff advisor</dt>
                  <dd className="mt-1 text-muted">
                    {contactPlaceholders.advisor}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Location</dt>
                  <dd className="mt-1 text-muted">
                    {contactPlaceholders.location}
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                {contactPlaceholders.note}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="panel h-full bg-charcoal p-8 text-white">
              <h2 className="font-display text-3xl tracking-tight text-white">
                Ways to participate
              </h2>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-white/70">
                <li>
                  Attend a weekly Sunday event—typically Tech Helps at 1:00 pm.
                </li>
                <li>
                  Help facilitate special events such as pumpkin carving, serving
                  ice cream, and board games.
                </li>
                <li>
                  <a
                    href={volunteerForm.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                  >
                    Submit volunteer hours
                  </a>{" "}
                  after you serve.
                </li>
                <li>
                  Review the{" "}
                  <Link
                    href="/events"
                    className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                  >
                    events calendar
                  </Link>{" "}
                  for upcoming opportunities.
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
