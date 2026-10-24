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
          scrollTrigger: { trigger: el, start: "top 75%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-between site-pad py-10 sm:py-12"
      aria-labelledby="cta"
    >
      <h2 id="cta" className="sr-only">
        Ready this Sunday?
      </h2>

      <p
        data-cta
        className="display mx-auto max-w-[10ch] text-center text-[clamp(2.8rem,11vw,7.5rem)] text-ink"
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        Ready this
      </p>

      <div
        data-cta
        className="mx-auto flex w-full max-w-lg flex-col items-center gap-4"
        style={{ opacity: 0 }}
      >
        <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-5">
          <a
            href={volunteerForm.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent min-w-[11rem]"
          >
            Submit Hours
          </a>
          <span className="text-center text-sm text-muted">or</span>
          <Link href="/events" className="btn btn-ghost min-w-[11rem]">
            See events
          </Link>
        </div>
        <p className="text-center text-sm text-muted">
          Show up Sunday · log the hours after · come back next week
        </p>
      </div>

      <p
        data-cta
        className="display mx-auto max-w-[8ch] text-center text-[clamp(2.8rem,11vw,7.5rem)] text-accent"
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        Sunday?
      </p>
    </section>
  );
}
