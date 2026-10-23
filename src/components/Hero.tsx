"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { site } from "@/lib/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[calc(100svh-4.25rem)] overflow-hidden">
      <div className="absolute inset-0 hero-grain" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />

      <div className="site-container-wide relative flex min-h-[calc(100svh-4.25rem)] flex-col justify-end pb-16 pt-24 sm:pb-20 md:justify-center md:pb-24">
        <div className="max-w-3xl text-white">
          <motion.p
            className="mb-5 text-xs font-semibold tracking-[0.18em] text-white/70 uppercase"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.school}
          </motion.p>

          <motion.h1
            className="font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-tight"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.name}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.tagline} We bring students and senior citizens together through
            weekly service and shared moments of joy.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-[transform,opacity] hover:opacity-95 active:scale-[0.98]"
            >
              Explore Our Mission
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/12"
            >
              View Upcoming Events
            </Link>
          </motion.div>
        </div>

        <p className="absolute right-0 bottom-6 left-0 site-container-wide text-[0.7rem] tracking-wide text-white/45">
          Hero photograph placeholder — replace with an authentic club event image
        </p>
      </div>
    </section>
  );
}
