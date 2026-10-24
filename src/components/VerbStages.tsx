"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/** Full-bleed sticky verbs — Show / Share / Serve */
export function VerbStages() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>("[data-verb-panel]").forEach((panel) => {
        const img = panel.querySelector<HTMLElement>("[data-verb-img]");
        if (!img) return;
        gsap.fromTo(
          img,
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} aria-label="How Sundays work">
      {site.activities.map((activity) => (
        <div
          key={activity.verb}
          data-verb-panel
          className="relative h-[100svh] overflow-hidden"
        >
          <Image
            data-verb-img
            src={activity.image}
            alt={activity.imageAlt}
            fill
            sizes="100vw"
            className="object-cover will-change-transform"
            priority={activity.verb === "Show"}
          />
          <div className="absolute inset-0 bg-black/50" />

          <p className="verb-sticky display text-[clamp(4.5rem,17vw,12rem)] text-white">
            {activity.verb}
          </p>

          <div className="absolute inset-x-0 bottom-0 site-pad pb-10 pt-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
            <div className="site-container-wide max-w-xl">
              <p className="text-lg font-semibold tracking-[-0.02em] text-accent sm:text-xl">
                {activity.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                {activity.detail}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
