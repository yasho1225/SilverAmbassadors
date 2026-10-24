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
      el.querySelectorAll<HTMLElement>("[data-hero], [data-line], [data-shutter]").forEach(
        (node) => {
          node.style.opacity = "1";
          node.style.transform = "none";
          node.style.clipPath = "none";
        },
      );
      return;
    }

    const ctx = gsap.context(() => {
      const shutter = el.querySelector<HTMLElement>("[data-shutter]");
      const img = el.querySelector<HTMLElement>("[data-shutter-img]");
      const lines = el.querySelectorAll<HTMLElement>("[data-line]");
      const rest = el.querySelectorAll<HTMLElement>("[data-hero]");

      gsap.set(shutter, { clipPath: "inset(0 0 100% 0)" });
      gsap.set(img, { scale: 1.14 });
      gsap.set(lines, { yPercent: 110 });
      gsap.set(rest, { opacity: 0, y: 14 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(lines, { yPercent: 0, duration: 0.9, stagger: 0.1 }, 0)
        .to(shutter, { clipPath: "inset(0)", duration: 1.1, ease: "power3.inOut" }, 0.12)
        .to(img, { scale: 1, duration: 1.35, ease: "power2.out" }, 0.12)
        .to(rest, { opacity: 1, y: 0, duration: 0.55, stagger: 0.06 }, 0.55);
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="site-pad relative flex min-h-[calc(100svh-var(--nav-h))] flex-col justify-center py-16"
    >
      <div className="site-container-wide">
        <p
          data-hero
          className="mb-8 text-sm font-semibold tracking-[-0.02em] text-muted"
          style={{ opacity: 0 }}
        >
          {site.name} · {site.school}
        </p>

        <h1 className="display text-[clamp(3.4rem,12vw,9rem)] text-ink">
          <span className="line-mask">
            <span data-line className="block">
              Students
            </span>
          </span>
          <span className="line-mask">
            <span
              data-line
              className="flex w-full flex-col items-stretch gap-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-[0.1em]"
            >
              <span
                data-shutter
                className="hero-inline-photo"
                aria-hidden="true"
              >
                <Image
                  data-shutter-img
                  src={site.atmosphere.heroStrip.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 92vw, 50vw"
                  className="object-cover"
                  priority
                />
              </span>
              <span>seniors.</span>
            </span>
          </span>
          <span className="line-mask">
            <span data-line className="block text-accent">
              Connected.
            </span>
          </span>
        </h1>

        <div
          data-hero
          className="mt-10 flex max-w-3xl flex-col gap-6 sm:mt-14 sm:flex-row sm:items-end sm:justify-between"
          style={{ opacity: 0 }}
        >
          <p className="max-w-[36ch] text-base leading-relaxed text-muted sm:text-lg">
            Weekly Tech Helps and shared joy with seniors in Alpharetta —
            mutual respect, real conversation, hours that add up.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={volunteerForm.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Submit Hours
            </a>
            <Link href="/gallery" className="btn btn-ghost">
              Real visits
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
