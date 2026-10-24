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
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 78%", once: true },
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
          className="display mb-10 text-[clamp(2rem,4vw,3.2rem)] text-ink"
        >
          What Sundays look like
        </h2>
        <ol className="space-y-8 md:space-y-10">
          {site.activities.map((activity, index) => (
            <li
              key={activity.title}
              data-step
              className="grid gap-2 md:grid-cols-12 md:items-end md:gap-6"
              style={{ opacity: 0 }}
            >
              <p
                className={`stair-line md:col-span-7 ${
                  index === site.activities.length - 1 ? "text-accent" : "text-ink"
                }`}
              >
                {activity.opener}
              </p>
              <p className="max-w-[36ch] text-sm leading-relaxed text-muted md:col-span-5 md:justify-self-end md:text-[0.95rem]">
                <span className="font-medium text-ink">{activity.title}. </span>
                {activity.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
