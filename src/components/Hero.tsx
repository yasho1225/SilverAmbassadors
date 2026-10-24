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
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-hero]"),
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.04,
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate min-h-[min(92svh,52rem)] overflow-hidden"
    >
      <Image
        src="/images/group-lounge.jpg"
        alt="Ambassadors visiting with a senior resident in the lounge"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_38%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      <div className="site-pad relative z-10 flex min-h-[min(92svh,52rem)] flex-col justify-end pb-10 pt-24 sm:pb-14">
        <div className="site-container-wide max-w-3xl">
          <div data-hero className="mb-5 flex items-center gap-3" style={{ opacity: 0 }}>
            <Image
              src={site.logo.src}
              alt=""
              width={56}
              height={56}
              className="h-12 w-12 object-contain drop-shadow-md sm:h-14 sm:w-14"
              priority
            />
            <p className="font-display text-2xl tracking-[-0.03em] text-background sm:text-3xl">
              {site.name}
            </p>
          </div>

          <h1
            data-hero
            className="display max-w-[11ch] text-[clamp(2.8rem,9vw,5.75rem)] text-background"
            style={{ opacity: 0 }}
          >
            Students and seniors,{" "}
            <span className="text-accent">connected.</span>
          </h1>

          <p
            data-hero
            className="mt-5 max-w-lg text-base leading-relaxed text-background/80 sm:text-lg"
            style={{ opacity: 0 }}
          >
            Weekly Tech Helps Sundays at 1:00 pm · {site.school}
          </p>

          <div
            data-hero
            className="mt-8 flex flex-wrap gap-3"
            style={{ opacity: 0 }}
          >
            <a
              href={volunteerForm.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Submit Hours
            </a>
            <Link href="/events" className="btn border border-background/35 bg-background/10 text-background backdrop-blur-sm hover:bg-background/20">
              View events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
