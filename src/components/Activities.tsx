"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/** How Sundays work — Show / Share / Serve */
export function Activities() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-activity]"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 78%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="site-pad section-y border-y border-line bg-surface"
      aria-labelledby="how-sundays"
    >
      <div className="site-container-wide">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-silver uppercase">
            How Sundays work
          </p>
          <h2
            id="how-sundays"
            className="display mt-4 text-[clamp(2.2rem,5vw,3.5rem)] text-ink"
          >
            Show up. Share time. Serve often.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-12 md:gap-6">
          {site.activities.map((activity, index) => (
            <article
              key={activity.verb}
              data-activity
              className={`group flex flex-col ${
                index === 0 ? "md:col-span-6" : "md:col-span-3"
              }`}
              style={{ opacity: 0 }}
            >
              <div
                className={`relative overflow-hidden rounded-[var(--radius)] bg-surface-2 ${
                  index === 0 ? "aspect-[5/4] md:aspect-[4/3]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={activity.image}
                  alt={activity.imageAlt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 25vw"
                  }
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-5 display text-3xl text-ink sm:text-4xl">
                {activity.verb}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-ink">
                {activity.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {activity.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
