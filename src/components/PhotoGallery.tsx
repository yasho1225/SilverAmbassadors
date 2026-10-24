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
  title = "Moments from the club",
}: PhotoGalleryProps) {
  const items = limit ? galleryPhotos.slice(0, limit) : galleryPhotos;

  return (
    <section className="site-pad section-y bg-surface" aria-labelledby="gallery">
      <div className="site-container-wide">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="gallery"
              className="display max-w-[16ch] text-[clamp(2.2rem,4.5vw,3.8rem)] text-ink"
            >
              {title}
            </h2>
            {showViewAll ? (
              <Link href="/gallery" className="btn btn-ghost">
                Full gallery
              </Link>
            ) : null}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((photo, index) => {
            const tall = photo.span === "tall";
            return (
              <Reveal
                key={photo.id}
                delay={index * 0.04}
                className={tall ? "sm:row-span-2" : undefined}
              >
                <figure
                  className={`group relative overflow-hidden border border-line bg-ink ${
                    tall
                      ? "aspect-[3/4] sm:h-full sm:min-h-[28rem] sm:aspect-auto"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
                    style={
                      photo.id === "visit-lounge"
                        ? { objectPosition: "center 35%" }
                        : undefined
                    }
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-4 pt-12 pb-4">
                    <p className="text-sm text-background/90">{photo.caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
