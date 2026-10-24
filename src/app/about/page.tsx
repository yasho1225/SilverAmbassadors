import type { Metadata } from "next";
import { CallToAction } from "@/components/CallToAction";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: site.mission,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border section-pad !pb-16 !pt-20">
        <div className="site-container">
          <FadeIn>
            <p className="eyebrow mb-4">About</p>
            <h1 className="font-display max-w-3xl text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
              {site.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              A student organization at {site.school} dedicated to building
              mutual joy, respect, and community with senior citizens in
              Alpharetta.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <div className="panel overflow-hidden lg:grid lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn className="border-b border-border bg-charcoal px-8 py-10 text-white sm:px-10 lg:border-r lg:border-b-0">
              <p className="eyebrow mb-3 !text-white/55">Mission</p>
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Why we gather
              </h2>
            </FadeIn>
            <FadeIn delay={0.08} className="bg-surface-elevated px-8 py-10 sm:px-10">
              <p className="font-display text-2xl leading-relaxed text-ink sm:text-[1.75rem]">
                {site.mission}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-pad bg-stone/60">
        <div className="site-container">
          <FadeIn>
            <SectionHeading
              eyebrow="How we serve"
              title="Who we are for"
              description="Silver Ambassadors exists for Alpharetta High School students who want meaningful volunteer opportunities, and for senior citizens who welcome companionship, help, and shared activities."
            />
          </FadeIn>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <FadeIn>
              <article className="panel h-full p-7">
                <h3 className="text-xl font-semibold text-ink">Students</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Members earn valuable volunteer hours while improving
                  communication skills and sharing their time and talents—without
                  needing a large commitment all at once.
                </p>
              </article>
            </FadeIn>
            <FadeIn delay={0.06}>
              <article className="panel h-full p-7">
                <h3 className="text-xl font-semibold text-ink">
                  Senior citizens
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Neighbors in Alpharetta who join weekly Tech Helps and special
                  events for connection, practical help, and community.
                </p>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <FadeIn>
            <SectionHeading eyebrow="Activities" title="Our regular rhythm" />
          </FadeIn>
          <div className="mt-10 space-y-6">
            {site.aboutBody.map((paragraph, index) => (
              <FadeIn key={paragraph} delay={index * 0.05}>
                <p className="max-w-3xl text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1}>
            <ul className="panel mt-10 max-w-2xl space-y-5 p-7">
              {site.activities.map((activity) => (
                <li key={activity.title}>
                  <p className="font-semibold text-ink">{activity.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {activity.detail}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
