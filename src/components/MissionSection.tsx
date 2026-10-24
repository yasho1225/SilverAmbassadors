"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function MissionSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-mission]"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
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
      className="site-pad section-y"
      aria-labelledby="mission"
    >
      <div className="site-container-wide grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p
            data-mission
            className="text-sm font-semibold tracking-[0.14em] text-silver uppercase"
            style={{ opacity: 0 }}
          >
            Our mission
          </p>
          <h2
            data-mission
            id="mission"
            className="display mt-4 max-w-[14ch] text-[clamp(2.2rem,5vw,3.75rem)] text-ink"
            style={{ opacity: 0 }}
          >
            Mutual joy. Real respect. Shared Sundays.
          </h2>
          <p
            data-mission
            className="mt-6 text-base leading-relaxed text-muted sm:text-lg"
            style={{ opacity: 0 }}
          >
            {site.mission}
          </p>
          <div
            data-mission
            className="mt-8 grid gap-4 sm:grid-cols-3"
            style={{ opacity: 0 }}
          >
            {[
              ["Alpharetta", "Georgia"],
              ["Sundays", "1:00 pm Tech Helps"],
              ["Est. 2026", "AHS club"],
            ].map(([title, detail]) => (
              <div key={title} className="border-t border-line pt-4">
                <p className="font-semibold text-ink">{title}</p>
                <p className="mt-1 text-sm text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-mission
          className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius)] bg-surface-2"
          style={{ opacity: 0 }}
        >
          <Image
            src={site.atmosphere.mission.src}
            alt={site.atmosphere.mission.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
