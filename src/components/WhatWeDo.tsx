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
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            once: true,
          },
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
        <h2 id="what-we-do" className="sr-only">
          What Sundays look like
        </h2>
        <ol className="space-y-10 md:space-y-12">
          {site.activities.map((activity, index) => (
            <li
              key={activity.title}
              data-step
              className="grid gap-3 md:grid-cols-12 md:items-end md:gap-8"
              style={{ opacity: 0 }}
            >
              <p
                className={`stair-line md:col-span-8 ${
                  index === site.activities.length - 1 ? "text-accent" : "text-ink"
                }`}
                style={{ paddingLeft: `min(${index * 3.5}vw, 5.5rem)` }}
              >
                {activity.opener}
              </p>
              <p className="max-w-[34ch] text-[0.95rem] leading-relaxed text-muted md:col-span-4 md:justify-self-end md:pb-1">
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
