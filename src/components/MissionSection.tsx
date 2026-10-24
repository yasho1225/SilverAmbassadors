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
        { opacity: 0, y: 22 },
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
      className="site-pad section-y border-t border-line"
      aria-labelledby="mission"
    >
      <div className="site-container-wide">
        <div className="grid gap-10 lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-12">
          <aside
            data-mission
            className="flex gap-6 text-sm text-muted lg:flex-col lg:gap-5"
            style={{ opacity: 0 }}
          >
            <p>
              <span className="block text-ink">Alpharetta</span>
              Georgia
            </p>
            <p>
              <span className="block text-ink">Sundays</span>
              1:00 pm Tech Helps
            </p>
            <p>
              <span className="block text-ink">Est. 2026</span>
              AHS club
            </p>
          </aside>

          <div>
            <h2 id="mission" className="sr-only">
              Mission
            </h2>
            <p
              data-mission
              className="text-[clamp(1.35rem,2.4vw,2rem)] font-medium leading-[1.25] tracking-[-0.03em] text-ink"
              style={{ opacity: 0 }}
            >
              <span className="relative float-left mr-4 mb-1 h-[3.6em] w-[3.6em] overflow-hidden rounded-sm bg-surface-2">
                <Image
                  src={site.atmosphere.missionPortrait.src}
                  alt={site.atmosphere.missionPortrait.alt}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </span>
              {site.mission}
            </p>
            <div
              data-mission
              className="mt-8 clear-both space-y-4 text-base leading-relaxed text-muted sm:text-[1.05rem]"
              style={{ opacity: 0 }}
            >
              {site.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
