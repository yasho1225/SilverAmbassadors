import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: site.mission,
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About the club"
        title={
          <>
            Different generations.
            <br />
            <em>Shared purpose.</em>
          </>
        }
      >
        <p>
          A student-led organization at {site.school}, connecting students and
          senior citizens in Alpharetta through service.
        </p>
      </PageIntro>

      <section className="site-pad section-y bg-surface">
        <div className="site-container-wide grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="display text-[clamp(2.2rem,4vw,3.5rem)] text-ink">
              Why we gather
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-display text-[clamp(1.25rem,1rem+1vw,1.6rem)] leading-relaxed text-ink">
              {site.mission}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="site-pad section-y"
        aria-labelledby="about-activities"
      >
        <div className="site-container-wide detail-layout">
          <div>
            <p className="section-label">Time shared, well spent</p>
            <h2 id="about-activities" className="detail-heading">
              A place for your
              <br />
              <em>time and talents.</em>
            </h2>
            <Link href="/events" className="text-link">
              Explore volunteering <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <dl className="detail-list">
            {site.activities.map((activity) => (
              <div key={activity.title}>
                <dt>{activity.title}</dt>
                <dd>{activity.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
