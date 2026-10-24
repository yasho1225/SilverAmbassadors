"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Home teaser only — no photographs. All photos live on `/gallery`. */
export function GalleryTeaser() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-teaser]"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
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
      className="site-pad section-y bg-ink text-background"
      aria-labelledby="gallery-teaser"
    >
      <div className="site-container-wide flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2
            data-teaser
            id="gallery-teaser"
            className="display text-[clamp(2.4rem,5.5vw,4.5rem)] text-background"
            style={{ opacity: 0 }}
          >
            Visits, kept in one place.
          </h2>
          <p
            data-teaser
            className="mt-5 max-w-[40ch] text-base leading-relaxed text-background/65"
            style={{ opacity: 0 }}
          >
            Lounge Sundays, lobby selfies, and the walk out after — the club’s
            photographs live on the gallery page.
          </p>
        </div>
        <Link
          data-teaser
          href="/gallery"
          className="btn border border-background/30 bg-background text-ink hover:bg-background/90"
          style={{ opacity: 0 }}
        >
          Open gallery
        </Link>
      </div>
    </section>
  );
}
