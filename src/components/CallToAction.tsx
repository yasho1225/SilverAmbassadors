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
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
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
      className="site-pad section-y border-t border-line bg-surface"
      aria-labelledby="cta"
    >
      <div className="site-container-wide flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2
            data-cta
            id="cta"
            className="display text-[clamp(2rem,4.2vw,3.4rem)] text-ink"
            style={{ opacity: 0 }}
          >
            Log the hour you{" "}
            <a
              href={volunteerForm.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-underline text-accent"
            >
              shared this Sunday
            </a>
            .
          </h2>
        </div>
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
