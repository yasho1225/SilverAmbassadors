import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get involved with Silver Ambassadors at Alpharetta High School.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Get involved"
        title={
          <>
            Make a little room
            <br />
            <em>for connection.</em>
          </>
        }
      >
        <p>
          A little time can make a meaningful difference. Start with a Sunday,
          and see where it takes you.
        </p>
      </PageIntro>
      <section className="site-pad section-y" aria-labelledby="first-visit">
        <div className="site-container-wide detail-layout">
          <div>
            <p className="section-label">Your first visit</p>
            <h2 id="first-visit" className="detail-heading">
              Good company.
              <br />
              <em>A simple start.</em>
            </h2>
            <Link href="/events" className="text-link">
              Find a volunteering opportunity{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <div className="contact-note">
              <p className="section-label">Our school community</p>
              <p>
                {site.school}
                <br />
                Alpharetta, Georgia
              </p>
              <p className="text-sm text-muted">
                Club email and advisor details will appear here once confirmed.
              </p>
            </div>
          </div>
          <dl className="detail-list">
            <div>
              <dt>Find a time that fits.</dt>
              <dd>
                Tech Helps are typically Sundays at 1:00 pm. Seasonal and social
                gatherings offer other ways to take part.
              </dd>
            </div>
            <div>
              <dt>Check before you go.</dt>
              <dd>
                Ask club leadership to confirm the time, location, and any
                joining details before your first visit.
              </dd>
            </div>
            <div>
              <dt>Make your time count.</dt>
              <dd>
                After volunteering, record your completed hours through the
                official form.
              </dd>
              <dd>
                <Link href="/volunteer-hours" className="text-link">
                  Log volunteer hours{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
