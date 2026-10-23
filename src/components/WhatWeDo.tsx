import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

export function WhatWeDo() {
  return (
    <section className="section-pad bg-off-white" aria-labelledby="what-we-do">
      <div className="site-container">
        <FadeIn>
          <SectionHeading
            eyebrow="What we do"
            title="Weekly service, lasting connection"
            description="Our activities come from the club’s real rhythm of Sunday volunteering and seasonal gatherings with seniors in Alpharetta."
          />
        </FadeIn>

        <ol className="mt-14 divide-y divide-border border-y border-border">
          {site.activities.map((activity, index) => (
            <FadeIn key={activity.title} delay={index * 0.06}>
              <li className="grid gap-4 py-8 sm:grid-cols-[5rem_1fr] sm:gap-10 md:py-10">
                <span className="font-display text-3xl text-muted/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    id={index === 0 ? "what-we-do" : undefined}
                    className="text-xl font-semibold tracking-tight text-ink"
                  >
                    {activity.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
                    {activity.detail}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
