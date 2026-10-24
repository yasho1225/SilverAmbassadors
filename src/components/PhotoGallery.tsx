"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryPhotos } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * Exclusive home for club photographs.
 * Mount only on `/gallery` so images are never duplicated elsewhere.
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
        gsap.set(frame, { clipPath: "inset(100% 0 0 0)" });
        gsap.set(img, { scale: 1.12 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: frame,
            start: "top 88%",
            once: true,
          },
        });

        tl.to(frame, {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.05,
          ease: "power3.inOut",
        }).to(
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

  const tall = galleryPhotos.find((p) => p.layout === "tall");
  const wides = galleryPhotos.filter((p) => p.layout === "wide");

  return (
    <section ref={root} className="pb-16 sm:pb-20" aria-labelledby="gallery-heading">
      <div className="site-pad site-container-wide mb-10 sm:mb-12">
        <h1
          id="gallery-heading"
          className="display max-w-[12ch] text-[clamp(2.8rem,7vw,5.5rem)] text-ink"
        >
          From our visits
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Four photographs from Silver Ambassadors Sundays — shown here once,
          large, and nowhere else on the site.
        </p>
      </div>

      <div className="site-pad site-container-wide">
        <div className="grid gap-2 md:grid-cols-12 md:grid-rows-2 md:gap-2">
          {tall ? (
            <figure
              data-frame
              className="relative aspect-[3/4] overflow-hidden bg-ink md:col-span-5 md:row-span-2 md:aspect-auto md:min-h-[36rem]"
            >
              <Image
                data-img
                src={tall.src}
                alt={tall.alt}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-[center_30%]"
                priority
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-16 pb-4">
                <p className="text-sm text-background/90">{tall.caption}</p>
              </figcaption>
            </figure>
          ) : null}

          {wides.map((photo, index) => (
            <figure
              key={photo.id}
              data-frame
              className={`relative aspect-[4/3] overflow-hidden bg-ink md:col-span-7 md:aspect-auto md:min-h-[17.5rem] ${
                index === wides.length - 1 ? "md:col-span-7" : ""
              }`}
            >
              <Image
                data-img
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover object-[center_40%]"
                priority={index === 0}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-14 pb-4">
                <p className="text-sm text-background/90">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
