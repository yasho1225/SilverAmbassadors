"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { galleryPlaceholders } from "@/lib/content";

type PhotoGalleryProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  limit?: number;
};

export function PhotoGallery({
  eyebrow = "Photo highlights",
  title = "Moments from our community",
  description = "Authentic event photographs will replace these placeholders once club media is available.",
  limit,
}: PhotoGalleryProps) {
  const items = limit
    ? galleryPlaceholders.slice(0, limit)
    : galleryPlaceholders;
  const [activeId, setActiveId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const active = items.find((item) => item.id === activeId) ?? null;

  return (
    <section className="section-pad bg-off-white" aria-labelledby="gallery-heading">
      <div className="site-container-wide">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">{eyebrow}</p>
            <h2
              id="gallery-heading"
              className="font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-[2.75rem]"
            >
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[220px] lg:grid-cols-4 lg:auto-rows-[200px]">
          {items.map((item, index) => {
            const spanClass =
              item.span === "wide"
                ? "sm:col-span-2"
                : item.span === "tall"
                  ? "sm:row-span-2"
                  : "";

            return (
              <FadeIn key={item.id} delay={index * 0.04} className={spanClass}>
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="group relative h-full w-full overflow-hidden rounded-xl text-left focus-visible:outline-offset-4"
                  aria-label={`View ${item.caption}`}
                >
                  <div className="photo-placeholder absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-sm font-medium text-white">
                      {item.caption}
                    </p>
                    <p className="mt-1 text-xs text-white/70">
                      Replace with club photograph
                    </p>
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white"
              initial={reduceMotion ? false : { scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduceMotion ? undefined : { scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="photo-placeholder aspect-[16/10] w-full" />
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <p className="font-medium text-ink">{active.caption}</p>
                  <p className="mt-1 text-sm text-muted">{active.alt}</p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink hover:bg-off-white"
                  aria-label="Close photograph"
                  onClick={() => setActiveId(null)}
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
