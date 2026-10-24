"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { galleryPhotos } from "@/lib/content";

type PhotoGalleryProps = {
  limit?: number;
  showViewAll?: boolean;
  title?: string;
};

export function PhotoGallery({
  limit,
  showViewAll = false,
  title = "From our visits",
}: PhotoGalleryProps) {
  const items = limit ? galleryPhotos.slice(0, limit) : galleryPhotos;

  return (
    <section className="section-y !pt-0" aria-labelledby="gallery">
      <div className="site-pad site-container-wide mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <h2
            id="gallery"
            className="display text-[clamp(2rem,4.2vw,3.4rem)] text-ink"
          >
            {title}
          </h2>
        </Reveal>
        {showViewAll ? (
          <Reveal delay={0.04}>
            <Link href="/gallery" className="btn btn-ghost !min-h-0 px-4 py-2 text-sm">
              Full gallery
            </Link>
          </Reveal>
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:grid-cols-4 lg:gap-2">
        {items.map((photo, index) => (
          <Reveal key={photo.id} delay={index * 0.03} className="min-h-0">
            <figure className="group relative aspect-[4/5] overflow-hidden bg-ink sm:aspect-[3/4]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                style={
                  photo.id === "visit-lounge"
                    ? { objectPosition: "center 32%" }
                    : { objectPosition: "center 40%" }
                }
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-3 pt-10 pb-3">
                <p className="text-xs tracking-wide text-background/90 sm:text-sm">
                  {photo.caption}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
