"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { photos } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/** Remaining club photos (hero owns group-lounge). Each image once sitewide. */
export function HomeGallery() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frames = el.querySelectorAll<HTMLElement>("[data-frame]");
    const imgs = el.querySelectorAll<HTMLElement>("[data-img]");

    if (reduce) {
      frames.forEach((f) => {
        f.style.clipPath = "inset(0)";
      });
      return;
    }

    const ctx = gsap.context(() => {
      frames.forEach((frame, i) => {
        const img = imgs[i];
        gsap.set(frame, { clipPath: "inset(8% 8% 8% 8%)" });
        gsap.set(img, { scale: 1.1 });
        gsap
          .timeline({
            scrollTrigger: { trigger: frame, start: "top 90%", once: true },
          })
          .to(frame, {
            clipPath: "inset(0%)",
            duration: 1,
            ease: "power3.inOut",
          })
          .to(img, { scale: 1, duration: 1.25, ease: "power2.out" }, 0);
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const [tall, ...rest] = photos.gallery;

  return (
    <section
      id="gallery"
      ref={root}
      className="scroll-mt-[var(--nav-h)]"
      aria-labelledby="gallery-heading"
    >
      <div className="site-pad site-container-wide section-y !pb-6">
        <h2
          id="gallery-heading"
          className="display text-[clamp(2.2rem,4.5vw,3.6rem)] text-ink"
        >
          From our visits
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-2">
        <figure
          data-frame
          className="relative aspect-[3/4] overflow-hidden bg-[var(--surface)] sm:row-span-2 sm:aspect-auto sm:min-h-[32rem]"
        >
          <Image
            data-img
            src={tall.src}
            alt={tall.alt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover object-[center_28%]"
            priority
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pt-14 pb-4">
            <p className="text-sm text-white">{tall.caption}</p>
          </figcaption>
        </figure>

        {rest.map((photo) => (
          <figure
            key={photo.id}
            data-frame
            className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)] sm:aspect-auto sm:min-h-[15.5rem]"
          >
            <Image
              data-img
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-[center_40%]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pt-12 pb-3">
              <p className="text-sm text-white">{photo.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
