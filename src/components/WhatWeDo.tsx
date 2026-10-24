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
      rows.forEach((row, index) => {
        gsap.fromTo(
          row,
          { opacity: 0, x: index === 0 ? 0 : 24, y: 20 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 86%",
              once: true,
            },
          },
        );
      });
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
        <h2 id="what-we-do" className="sr-only">
          What Sundays look like
        </h2>
        <ol className="space-y-12 md:space-y-16">
          {site.activities.map((activity, index) => (
            <li
              key={activity.title}
              data-step
              className="max-w-4xl"
              style={{
                marginLeft: `min(${index * 5}vw, 7rem)`,
                opacity: 0,
              }}
            >
              <p
                className={`stair-line ${
                  index === site.activities.length - 1 ? "text-accent" : "text-ink"
                }`}
              >
                {activity.opener}
              </p>
              <p className="mt-3 max-w-[36ch] text-[0.95rem] leading-relaxed text-muted">
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
