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
      el.querySelectorAll<HTMLElement>("[data-hero], [data-line]").forEach((node) => {
        node.style.opacity = "1";
        node.style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      const lines = el.querySelectorAll<HTMLElement>("[data-line]");
      const rest = el.querySelectorAll<HTMLElement>("[data-hero]");
      gsap.set(lines, { yPercent: 115 });
      gsap.set(rest, { opacity: 0, y: 18 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(lines, { yPercent: 0, duration: 0.95, stagger: 0.1 })
        .to(rest, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05 }, "-=0.5");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="site-pad relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-field"
      />

      <div className="site-container-wide relative flex min-h-[calc(100svh-var(--nav-h))] flex-col justify-between gap-12 py-10 sm:py-12">
        <div className="flex items-start justify-between gap-6">
          <div data-hero className="flex items-center gap-4">
            <Image
              src={site.logo.src}
              alt=""
              width={88}
              height={88}
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
              priority
            />
            <div>
              <p className="font-display text-2xl leading-none tracking-[-0.03em] text-ink sm:text-3xl">
                {site.name}
              </p>
              <p className="mt-2 text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                {site.school}
              </p>
            </div>
          </div>
          <p
            data-hero
            className="hidden max-w-[18ch] text-right text-sm leading-relaxed text-muted md:block"
          >
            Sundays at 1:00 · Tech Helps & shared hours
          </p>
        </div>

        <div>
          <h1 className="display max-w-[11ch] text-[clamp(3.6rem,11vw,8.75rem)] text-ink">
            <span className="line-mask">
              <span data-line className="block">
                Students
              </span>
            </span>
            <span className="line-mask">
              <span data-line className="block">
                and seniors,
              </span>
            </span>
            <span className="line-mask">
              <span data-line className="block text-accent">
                connected.
              </span>
            </span>
          </h1>
        </div>

        <div
          data-hero
          className="grid gap-8 border-t border-line pt-8 sm:grid-cols-[1.2fr_auto] sm:items-end"
        >
          <div className="grid grid-cols-3 gap-4 max-w-md">
            <div>
              <p className="fact text-ink">Sun</p>
              <p className="mt-1 text-xs text-muted">Every week</p>
            </div>
            <div>
              <p className="fact text-ink">1pm</p>
              <p className="mt-1 text-xs text-muted">Tech Helps</p>
            </div>
            <div>
              <p className="fact text-ink">AHS</p>
              <p className="mt-1 text-xs text-muted">Alpharetta</p>
            </div>
          </div>
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
              Open gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
