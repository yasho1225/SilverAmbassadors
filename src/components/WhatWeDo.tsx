"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function WhatWeDo() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const rows = el.querySelectorAll<HTMLElement>("[data-step]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        rows,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="site-pad section-y border-y border-line bg-surface"
      aria-labelledby="what-we-do"
    >
      <div className="site-container-wide">
        <h2
          id="what-we-do"
          className="display max-w-[18ch] text-[clamp(1.85rem,3.5vw,2.75rem)] text-ink"
        >
          How Sundays are structured
        </h2>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {site.activities.map((activity) => (
            <li
              key={activity.title}
              data-step
              className="grid gap-3 py-8 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:gap-10"
              style={{ opacity: 0 }}
            >
              <h3 className="font-display text-xl tracking-[-0.02em] text-ink sm:text-2xl">
                {activity.title}
              </h3>
              <p className="max-w-[40ch] text-[0.98rem] leading-relaxed text-muted md:pt-1">
                {activity.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
