"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { site } from "@/lib/content";
import { volunteerForm } from "@/lib/config";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.querySelectorAll<HTMLElement>("[data-hero]").forEach((node) => {
        node.style.opacity = "1";
        node.style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      const img = el.querySelector<HTMLElement>("[data-hero-img]");
      const parts = el.querySelectorAll<HTMLElement>("[data-hero]");

      gsap.set(img, { scale: 1.08 });
      gsap.set(parts, { opacity: 0, y: 22 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(img, { scale: 1, duration: 1.6, ease: "power2.out" }, 0)
        .to(parts, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.2);
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate min-h-[calc(100svh-var(--nav-h))] overflow-hidden"
      aria-labelledby="hero-brand"
    >
      <Image
        data-hero-img
        src={site.atmosphere.hero.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      <div className="site-pad relative z-10 flex min-h-[calc(100svh-var(--nav-h))] flex-col justify-end pb-12 pt-24 sm:pb-16 sm:pt-28">
        <div className="site-container-wide max-w-3xl text-white">
          <p
            data-hero
            id="hero-brand"
            className="display text-[clamp(2.6rem,8vw,5.75rem)] text-white"
            style={{ opacity: 0 }}
          >
            {site.name}
          </p>
          <h1
            data-hero
            className="mt-4 max-w-[18ch] text-[clamp(1.35rem,2.6vw,2rem)] font-medium leading-snug tracking-[-0.02em] text-white/95"
            style={{ opacity: 0 }}
          >
            {site.tagline}
          </h1>
          <p
            data-hero
            className="mt-5 max-w-[36ch] text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ opacity: 0 }}
          >
            Weekly Tech Helps and shared joy with seniors in Alpharetta —
            mutual respect, real conversation, hours that add up.
          </p>
          <div data-hero className="mt-8 flex flex-wrap gap-3" style={{ opacity: 0 }}>
            <a
              href={volunteerForm.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Submit Hours
            </a>
            <Link href="/gallery" className="btn btn-on-dark">
              See real visits
            </Link>
          </div>
          <p
            data-hero
            className="mt-8 text-sm tracking-wide text-white/55"
            style={{ opacity: 0 }}
          >
            {site.school} · Sundays · Alpharetta, GA
          </p>
        </div>
      </div>
    </section>
  );
}
