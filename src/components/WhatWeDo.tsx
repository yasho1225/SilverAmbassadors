import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export function WhatWeDo() {
  return (
    <section className="site-pad section-y border-t border-line" aria-labelledby="what-we-do">
      <div className="site-container-wide">
        <Reveal>
          <h2
            id="what-we-do"
            className="display mb-8 text-[clamp(2rem,4vw,3.2rem)] text-ink"
          >
            What Sundays look like
          </h2>
        </Reveal>

        <ul className="divide-y divide-line border-y border-line md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {site.activities.map((activity, index) => (
            <Reveal key={activity.title} delay={index * 0.04}>
              <li className="py-6 md:px-6 md:py-2 md:first:pl-0 md:last:pr-0">
                <p className="font-display text-xl tracking-[-0.03em] text-ink sm:text-2xl">
                  {activity.title}
                </p>
                <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {activity.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
