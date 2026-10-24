"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryPhotos } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/** Exclusive home for visit photographs — mount only on `/gallery`. */
export function PhotoGallery() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frames = el.querySelectorAll<HTMLElement>("[data-frame]");
    const imgs = el.querySelectorAll<HTMLElement>("[data-img]");
    if (reduce) return;

    const ctx = gsap.context(() => {
      frames.forEach((frame, i) => {
        const img = imgs[i];
        gsap.fromTo(
          frame,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: frame, start: "top 92%", once: true },
          },
        );
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.06 },
            {
              scale: 1,
              duration: 1.1,
              ease: "power2.out",
              scrollTrigger: { trigger: frame, start: "top 92%", once: true },
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
          className="display max-w-[14ch] text-[clamp(2.5rem,5.5vw,4rem)] text-ink"
        >
          From our visits
        </h1>
        <p className="mt-5 max-w-[38rem] text-[1.05rem] leading-relaxed text-muted">
          Photographs from Silver Ambassadors Sundays.
        </p>
      </div>

      <div className="site-pad site-container-wide">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {galleryPhotos.map((photo, index) => (
            <figure
              key={photo.id}
              data-frame
              className="relative aspect-[4/3] overflow-hidden bg-surface"
              style={{ opacity: 0 }}
            >
              <Image
                data-img
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
                style={{
                  objectPosition:
                    photo.id === "visit-lounge" ? "center 28%" : "center 40%",
                }}
                priority={index < 2}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-12 pb-4">
                <p className="text-sm text-white">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
