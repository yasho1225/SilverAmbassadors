import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

const openers = ["First you show up.", "Then you share time.", "Hours add up."] as const;

export function WhatWeDo() {
  return (
    <section className="site-pad section-y" aria-labelledby="what-we-do">
      <div className="site-container-wide">
        <h2 id="what-we-do" className="sr-only">
          What we do
        </h2>
        <ol className="space-y-10 md:space-y-14">
          {site.activities.map((activity, index) => (
            <Reveal key={activity.title} delay={index * 0.05}>
              <li
                className="grid gap-3 md:grid-cols-12 md:items-start md:gap-6"
                style={{ paddingLeft: `min(${index * 4}vw, 8rem)` }}
              >
                <div className="md:col-span-8">
                  <p className="stair-line text-ink">
                    {openers[index] ?? activity.title}
                    {index === site.activities.length - 1 ? (
                      <span className="text-accent">.</span>
                    ) : null}
                  </p>
                  <p className="mt-3 max-w-[34ch] text-[0.95rem] leading-relaxed text-muted md:mt-4">
                    <span className="font-medium text-ink">{activity.title}. </span>
                    {activity.detail}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
