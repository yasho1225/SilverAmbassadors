"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { volunteerForm } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

export function CallToAction() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-cta]"),
        { opacity: 0, y: 20 },
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
      aria-labelledby="cta"
    >
      <div className="site-container-wide overflow-hidden rounded-[calc(var(--radius)+4px)] bg-accent px-8 py-14 text-accent-ink sm:px-12 sm:py-16">
        <h2
          data-cta
          id="cta"
          className="display max-w-[12ch] text-[clamp(2.4rem,6vw,4.25rem)] text-accent-ink"
          style={{ opacity: 0 }}
        >
          Ready this Sunday?
        </h2>
        <p
          data-cta
          className="mt-5 max-w-md text-base leading-relaxed text-accent-ink/70"
          style={{ opacity: 0 }}
        >
          Show up, share an hour, then log it. Come back next week.
        </p>
        <div
          data-cta
          className="mt-8 flex flex-wrap items-center gap-3"
          style={{ opacity: 0 }}
        >
          <a
            href={volunteerForm.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-accent-ink text-accent hover:opacity-90"
          >
            Submit Hours
          </a>
          <Link
            href="/events"
            className="btn border border-accent-ink/25 bg-transparent text-accent-ink hover:bg-accent-ink/10"
          >
            See events
          </Link>
          <Link href="/gallery" className="cta-underline ml-1 text-sm text-accent-ink/80">
            Browse visit photographs
          </Link>
        </div>
      </div>
    </section>
  );
}
