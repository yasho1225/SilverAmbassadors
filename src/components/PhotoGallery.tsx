"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

const tiles = [
  { word: "Sunday", caption: "Weekly" },
  { word: "Tech", caption: "Help sessions" },
  { word: "Joy", caption: "Shared" },
  { word: "Hours", caption: "Volunteer" },
  { word: "Games", caption: "Board night" },
  { word: "Silver", caption: "Ambassadors" },
  { word: "Carve", caption: "Pumpkins" },
  { word: "Serve", caption: "Ice cream" },
] as const;

type PhotoGalleryProps = {
  limit?: number;
  showViewAll?: boolean;
  title?: string;
};

export function PhotoGallery({
  limit,
  showViewAll = false,
  title = "The rhythm of the club",
}: PhotoGalleryProps) {
  const items = limit ? tiles.slice(0, limit) : tiles;

  return (
    <section className="site-pad section-y bg-surface" aria-labelledby="gallery">
      <div className="site-container-wide">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="gallery"
              className="display max-w-[14ch] text-[clamp(2.2rem,4.5vw,3.8rem)] text-ink"
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

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((tile, index) => {
            const inverse = index % 3 === 1;
            return (
              <Reveal key={tile.word} delay={index * 0.03}>
                <div
                  className={`relative aspect-square overflow-hidden ${
                    inverse ? "bg-ink text-background" : "tile text-ink"
                  }`}
                >
                  {index % 4 === 2 ? (
                    <div className="photo-slot absolute inset-0" />
                  ) : (
                    <p className="absolute inset-0 flex items-center justify-center font-display text-[clamp(2rem,7vw,4.5rem)] tracking-[-0.04em]">
                      {tile.word}
                    </p>
                  )}
                  <p
                    className={`absolute inset-x-0 bottom-3 text-center text-[0.8rem] ${
                      inverse || index % 4 === 2
                        ? "text-background/70"
                        : "text-muted"
                    }`}
                  >
                    {index % 4 === 2 ? "Event photo placeholder" : tile.caption}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
