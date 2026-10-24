"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Home teaser only — photographs live exclusively on `/gallery`. */
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
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.09,
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
      className="relative overflow-hidden border-y border-line"
      style={{ background: "var(--ink)", color: "var(--bg)" }}
      aria-labelledby="gallery-teaser"
    >
      <div className="site-pad site-container-wide flex min-h-[48svh] flex-col justify-between gap-10 py-14 sm:py-16">
        <p
          data-teaser
          className="text-sm tracking-[0.14em] uppercase"
          style={{ opacity: 0, color: "color-mix(in srgb, var(--bg) 45%, transparent)" }}
        >
          Gallery
        </p>
        <div className="max-w-4xl">
          <h2
            data-teaser
            id="gallery-teaser"
            className="display text-[clamp(2.8rem,7vw,5.75rem)]"
            style={{ opacity: 0 }}
          >
            Four photographs.
            <span className="text-accent"> One place.</span>
          </h2>
          <p
            data-teaser
            className="mt-6 max-w-[40ch] text-base leading-relaxed sm:text-lg"
            style={{
              opacity: 0,
              color: "color-mix(in srgb, var(--bg) 62%, transparent)",
            }}
          >
            Lounge Sundays and the walk out after — every club photo lives on
            the gallery page, shown once and large.
          </p>
        </div>
        <Link
          data-teaser
          href="/gallery"
          className="btn w-fit"
          style={{
            opacity: 0,
            background: "var(--bg)",
            color: "var(--ink)",
          }}
        >
          Open gallery
        </Link>
      </div>
    </section>
  );
}
