"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryPhotos } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/** Club visit photos — exclusive to `/gallery`. */
export function PhotoGallery() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const frames = el.querySelectorAll<HTMLElement>("[data-frame]");
    const ctx = gsap.context(() => {
      frames.forEach((frame) => {
        const img = frame.querySelector<HTMLElement>("[data-img]");
        gsap.fromTo(
          frame,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: frame, start: "top 90%", once: true },
          },
        );
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.06 },
            {
              scale: 1,
              duration: 1.15,
              ease: "power2.out",
              scrollTrigger: { trigger: frame, start: "top 90%", once: true },
            },
          );
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="pb-16 sm:pb-20" aria-labelledby="gallery-heading">
      <div className="site-pad site-container-wide mb-10 sm:mb-12">
        <h1
          id="gallery-heading"
          className="display max-w-[12ch] text-[clamp(2.6rem,7vw,4.75rem)] text-ink"
        >
          From our visits
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
          Photographs from Silver Ambassadors Sundays — only on this page.
        </p>
      </div>

      <div className="site-pad site-container-wide">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {galleryPhotos.map((photo, index) => (
            <figure
              key={photo.id}
              data-frame
              className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] bg-surface-2"
              style={{ opacity: 0 }}
            >
              <Image
                data-img
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
                style={{
                  objectPosition:
                    photo.id === "visit-lounge" ? "center 28%" : "center 40%",
                }}
                priority={index < 2}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-14 pb-4">
                <p className="text-sm text-white">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
