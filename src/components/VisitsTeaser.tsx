"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/** Atmosphere prints over a poster headline — club photos stay on /gallery. */
export function VisitsTeaser() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-print]"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 70%", once: true },
        },
      );
      gsap.fromTo(
        el.querySelector("[data-teaser-copy]"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 70%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const prints = [
    {
      src: site.atmosphere.heroStrip.src,
      alt: site.atmosphere.heroStrip.alt,
      className: "left-[8%] top-[18%] w-[42vw] max-w-[280px] rotate-[-8deg] sm:left-[18%] sm:w-[26vw]",
    },
    {
      src: site.atmosphere.missionPortrait.src,
      alt: site.atmosphere.missionPortrait.alt,
      className: "right-[6%] top-[28%] w-[44vw] max-w-[300px] rotate-[6deg] sm:right-[16%] sm:w-[26vw]",
    },
  ] as const;

  return (
    <section
      ref={root}
      className="relative flex min-h-[78svh] flex-col justify-end overflow-hidden bg-field py-10 text-field-ink sm:min-h-[100svh]"
      aria-labelledby="visits-teaser"
    >
      <h2
        id="visits-teaser"
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center display text-[clamp(3.5rem,14vw,11rem)] leading-[0.85] text-field-ink/90"
      >
        <span>Real</span>
        <span>visits</span>
      </h2>

      {prints.map((print, index) => (
        <figure
          key={print.src}
          data-print
          className={`print-frame absolute z-10 aspect-[3/4] overflow-hidden bg-surface shadow-none ${print.className}`}
          style={{ opacity: 0 }}
        >
          <Image
            src={print.src}
            alt={print.alt}
            fill
            sizes="(max-width: 640px) 44vw, 26vw"
            className="object-cover"
          />
          <span className="sr-only">Atmosphere print {index + 1}</span>
        </figure>
      ))}

      <div
        data-teaser-copy
        className="relative z-20 site-pad site-container-wide flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        style={{ opacity: 0 }}
      >
        <p className="max-w-sm text-sm leading-relaxed text-field-ink/70 sm:text-base">
          Photographs from Silver Ambassadors Sundays live on the gallery —
          faces, lounges, and the after-visit glow.
        </p>
        <Link href="/gallery" className="cta-underline font-semibold text-field-ink">
          Open the gallery
        </Link>
      </div>
    </section>
  );
}
