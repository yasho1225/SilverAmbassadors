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
    if (reduce) {
      el.querySelectorAll<HTMLElement>("[data-hero], [data-line]").forEach((node) => {
        node.style.opacity = "1";
        node.style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      const lines = el.querySelectorAll<HTMLElement>("[data-line]");
      const rest = el.querySelectorAll<HTMLElement>("[data-hero]");
      gsap.set(lines, { yPercent: 105 });
      gsap.set(rest, { opacity: 0, y: 12 });
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(lines, { yPercent: 0, duration: 0.85, stagger: 0.09 })
        .to(rest, { opacity: 1, y: 0, duration: 0.55, stagger: 0.05 }, "-=0.4");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="site-pad border-b border-line">
      <div className="site-container-wide py-16 sm:py-20 lg:py-24">
        <h1 className="display max-w-[16ch] text-[clamp(2.75rem,6.5vw,4.5rem)] text-ink">
          <span className="line-mask">
            <span data-line className="block">
              Students and seniors,
            </span>
          </span>
          <span className="line-mask">
            <span data-line className="block">
              connected through service.
            </span>
          </span>
        </h1>

        <p data-hero className="mt-7 max-w-[38rem] text-[1.1rem] leading-relaxed text-muted" style={{ opacity: 0 }}>
          {site.name} brings {site.school} students together with senior
          citizens for weekly Tech Helps and shared community events.
        </p>

        <div data-hero className="mt-9 flex flex-wrap gap-3" style={{ opacity: 0 }}>
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
          <Link href="/gallery" className="btn btn-ghost">
            Gallery
          </Link>
        </div>

        <dl
          data-hero
          className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-8"
          style={{ opacity: 0 }}
        >
          <div>
            <dt className="text-xs tracking-wide text-muted">When</dt>
            <dd className="fact mt-2 text-ink">Sundays</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted">Tech Helps</dt>
            <dd className="fact mt-2 text-ink">1:00 pm</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted">Where</dt>
            <dd className="fact mt-2 text-ink">Alpharetta</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
