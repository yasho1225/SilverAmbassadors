"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { photos, site } from "@/lib/content";
import { volunteerForm } from "@/lib/config";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.querySelectorAll<HTMLElement>("[data-hero], [data-line], [data-hero-img]").forEach(
        (node) => {
          node.style.opacity = "1";
          node.style.transform = "none";
          node.style.clipPath = "none";
        },
      );
      return;
    }

    const ctx = gsap.context(() => {
      const img = el.querySelector<HTMLElement>("[data-hero-img]");
      const lines = el.querySelectorAll<HTMLElement>("[data-line]");
      const rest = el.querySelectorAll<HTMLElement>("[data-hero]");

      gsap.set(img, { scale: 1.12 });
      gsap.set(lines, { yPercent: 110 });
      gsap.set(rest, { opacity: 0, y: 16 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(img, { scale: 1, duration: 1.45, ease: "power2.out" }, 0)
        .to(lines, { yPercent: 0, duration: 0.9, stagger: 0.1 }, 0.15)
        .to(rest, { opacity: 1, y: 0, duration: 0.55, stagger: 0.05 }, 0.45);
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate min-h-[min(100svh,56rem)] overflow-hidden"
    >
      <Image
        data-hero-img
        src={photos.hero.src}
        alt={photos.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_38%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35" />

      <div className="site-pad relative z-10 flex min-h-[min(100svh,56rem)] flex-col justify-end pb-10 pt-28 sm:pb-14">
        <div className="site-container-wide">
          <div
            data-hero
            className="mb-6 flex items-center gap-3"
            style={{ opacity: 0 }}
          >
            <Image
              src={site.logo.src}
              alt=""
              width={52}
              height={52}
              className="h-11 w-11 object-contain drop-shadow sm:h-12 sm:w-12"
              priority
            />
            <p className="font-display text-xl tracking-[-0.03em] text-white sm:text-2xl">
              {site.name}
            </p>
          </div>

          <h1 className="display max-w-[12ch] text-[clamp(3rem,9vw,6.5rem)] text-white">
            <span className="line-mask">
              <span data-line className="block">
                Students and
              </span>
            </span>
            <span className="line-mask">
              <span data-line className="block">
                seniors,{" "}
                <span className="text-accent">connected.</span>
              </span>
            </span>
          </h1>

          <p
            data-hero
            className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg"
            style={{ opacity: 0 }}
          >
            Weekly Tech Helps · Sundays 1:00 pm · {site.school}
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
            <Link
              href="#gallery"
              className="btn border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              See visits
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
