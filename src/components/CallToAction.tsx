"use client";

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
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="site-pad border-t border-line bg-surface py-12 sm:py-14"
      aria-labelledby="cta"
    >
      <div className="site-container-wide flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2
          data-cta
          id="cta"
          className="display max-w-[18ch] text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink"
          style={{ opacity: 0 }}
        >
          Log the hour you shared.
        </h2>
        <a
          data-cta
          href={volunteerForm.viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-accent shrink-0"
          style={{ opacity: 0 }}
        >
          Submit Hours
        </a>
      </div>
    </section>
  );
}
