"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryPhotos } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * Exclusive home for club photographs.
 * Mount only on `/gallery` — never import photos into Home/About/Hero.
 */
export function PhotoGallery() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frames = el.querySelectorAll<HTMLElement>("[data-frame]");
    const images = el.querySelectorAll<HTMLElement>("[data-img]");

    if (reduce) {
      frames.forEach((f) => {
        f.style.clipPath = "inset(0)";
      });
      images.forEach((img) => {
        img.style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      frames.forEach((frame, index) => {
        const img = images[index];
        gsap.set(frame, { clipPath: "inset(10% 10% 10% 10%)" });
        gsap.set(img, { scale: 1.12 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: frame,
              start: "top 92%",
              once: true,
            },
          })
          .to(frame, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.05,
            ease: "power3.inOut",
          })
          .to(
            img,
            {
              scale: 1,
              duration: 1.35,
              ease: "power2.out",
            },
            0,
          );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="pb-16 sm:pb-20" aria-labelledby="gallery-heading">
      <div className="site-pad site-container-wide mb-8 sm:mb-10">
        <h1
          id="gallery-heading"
          className="display max-w-[12ch] text-[clamp(2.8rem,7vw,5.5rem)] text-ink"
        >
          From our visits
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          The only page that shows Silver Ambassadors photographs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {galleryPhotos.map((photo, index) => (
          <figure
            key={photo.id}
            data-frame
            className={`relative overflow-hidden bg-[var(--surface)] ${
              photo.layout === "tall"
                ? "aspect-[3/4] sm:aspect-[4/5]"
                : "aspect-[4/3] sm:aspect-[5/4]"
            }`}
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
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 pt-16 pb-4">
              <p className="text-sm font-medium text-white">{photo.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
