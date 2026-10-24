import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

export function WhatWeDo() {
  return (
    <section className="section-pad" aria-labelledby="what-we-do">
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            eyebrow="What we do"
            title="Weekly service, lasting connection"
            description="Our activities come from the club’s real rhythm of Sunday volunteering and seasonal gatherings with seniors in Alpharetta."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {site.activities.map((activity, index) => (
            <FadeIn key={activity.title} delay={index * 0.06}>
              <article className="panel flex h-full flex-col p-7 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-charcoal/25">
                <span className="font-display text-4xl text-charcoal/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  id={index === 0 ? "what-we-do" : undefined}
                  className="mt-6 text-xl font-semibold tracking-tight text-ink"
                >
                  {activity.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {activity.detail}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
