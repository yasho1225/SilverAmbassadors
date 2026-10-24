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
        { opacity: 0, y: 20 },
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
      className="site-pad section-y bg-surface"
      aria-labelledby="cta"
    >
      <div className="site-container-wide editorial-axis">
        <p data-cta className="editorial-note text-sm text-muted" style={{ opacity: 0 }}>
          Members
        </p>
        <div>
          <h2
            data-cta
            id="cta"
            className="display max-w-[16ch] text-[clamp(2rem,4vw,3.25rem)] text-ink"
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
          <p
            data-cta
            className="mt-5 max-w-[40ch] text-base leading-relaxed text-muted"
            style={{ opacity: 0 }}
          >
            Use the club Google Form after Tech Helps or any special event.
          </p>
        </div>
      </div>
    </section>
  );
}
