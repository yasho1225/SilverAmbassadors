"use client";

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
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-hero]"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.05,
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="site-pad relative flex min-h-[calc(100svh-var(--nav-h))] flex-col"
    >
      <div className="site-container-wide flex flex-1 flex-col justify-between py-10 sm:py-14">
        <div className="max-w-[18ch]">
          <h1
            data-hero
            className="display text-[clamp(3.4rem,12vw,8.5rem)] text-ink"
            style={{ opacity: 0 }}
          >
            Students and seniors,{" "}
            <span className="text-accent">connected.</span>
          </h1>
        </div>

        <div
          data-hero
          className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-[1.4fr_auto] sm:items-end"
          style={{ opacity: 0 }}
        >
          <div>
            <p className="font-display text-xl text-ink sm:text-2xl">
              {site.name}
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {site.tagline} Weekly Tech Helps and shared moments of service at{" "}
              {site.school}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={volunteerForm.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Submit Hours
            </a>
            <Link href="/events" className="btn btn-ghost">
              View events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
