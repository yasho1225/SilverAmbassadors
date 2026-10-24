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

      gsap.set(lines, { yPercent: 110 });
      gsap.set(rest, { opacity: 0, y: 16 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(lines, {
        yPercent: 0,
        duration: 0.9,
        stagger: 0.11,
      }).to(
        rest,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.06,
        },
        "-=0.45",
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="site-pad relative overflow-hidden border-b border-line"
    >
      <div className="site-container-wide grid min-h-[calc(100svh-var(--nav-h))] gap-10 py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16 lg:py-16">
        <div className="flex flex-col justify-end">
          <div data-hero className="mb-8 flex items-center gap-3 lg:mb-14">
            <Image
              src={site.logo.src}
              alt=""
              width={56}
              height={56}
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              priority
            />
            <div>
              <p className="font-display text-xl leading-none tracking-[-0.03em] text-ink sm:text-2xl">
                {site.name}
              </p>
              <p className="mt-1.5 text-[0.7rem] tracking-[0.16em] text-muted uppercase">
                {site.school}
              </p>
            </div>
          </div>

          <p
            data-hero
            className="max-w-[24ch] text-[1.05rem] leading-snug text-muted sm:text-lg"
          >
            Weekly Tech Helps and shared hours with seniors in Alpharetta.
          </p>

          <div data-hero className="mt-8 flex flex-wrap gap-3">
            <a
              href={volunteerForm.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Submit Hours
            </a>
            <Link href="/gallery" className="btn btn-ghost">
              See visits
            </Link>
          </div>
        </div>

        <div className="pb-2">
          <h1 className="display text-[clamp(3.2rem,9.5vw,7.5rem)] text-ink">
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

          <div
            data-hero
            className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6"
          >
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
        </div>
      </div>
    </section>
  );
}
