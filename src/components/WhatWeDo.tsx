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
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.07,
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
      <div className="site-container-wide max-w-3xl">
        <h2
          id="what-we-do"
          className="display text-[clamp(1.85rem,3.2vw,2.5rem)] text-ink"
        >
          How Sundays are structured
        </h2>

        <ul className="mt-10 space-y-0 divide-y divide-line border-y border-line">
          {site.activities.map((activity) => (
            <li
              key={activity.title}
              data-step
              className="py-7"
              style={{ opacity: 0 }}
            >
              <h3 className="font-display text-xl tracking-[-0.02em] text-ink sm:text-[1.35rem]">
                {activity.title}
              </h3>
              <p className="mt-2 max-w-[40rem] text-[0.98rem] leading-relaxed text-muted">
                {activity.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
