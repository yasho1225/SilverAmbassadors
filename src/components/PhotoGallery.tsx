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
        gsap.set(frame, { clipPath: "inset(12% 12% 12% 12%)" });
        gsap.set(img, { scale: 1.14 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: frame,
              start: "top 90%",
              once: true,
            },
          })
          .to(frame, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.1,
            ease: "power3.inOut",
          })
          .to(
            img,
            {
              scale: 1,
              duration: 1.4,
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

      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:grid-cols-4">
        {galleryPhotos.map((photo, index) => (
          <figure
            key={photo.id}
            data-frame
            className={`relative overflow-hidden bg-ink ${
              photo.layout === "tall"
                ? "aspect-[3/4] sm:aspect-[3/4] lg:col-span-1"
                : "aspect-[4/3] sm:aspect-[4/3]"
            } ${index === 0 ? "col-span-2 row-span-2 aspect-auto min-h-[22rem] sm:min-h-[28rem] lg:col-span-2 lg:row-span-2 lg:min-h-[36rem]" : ""}`}
          >
            <Image
              data-img
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
              style={{
                objectPosition:
                  photo.id === "visit-lounge" ? "center 28%" : "center 40%",
              }}
              priority={index < 2}
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pt-12 pb-3 sm:px-4 sm:pb-4">
              <p className="text-xs text-background/90 sm:text-sm">{photo.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
