import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { photographs, type PhotoKey } from "@/lib/photographs";

const frames: {
  asset: PhotoKey;
  title: string;
  variant: "connection" | "orbit" | "arch";
}[] = [
  { asset: "tech", title: "A helping hand.", variant: "arch" },
  { asset: "gatherings", title: "A shared story.", variant: "orbit" },
  { asset: "moments", title: "Time together.", variant: "connection" },
];

export function PhotoGallery({
  standalone = false,
  showViewAll = false,
}: {
  standalone?: boolean;
  showViewAll?: boolean;
}) {
  const photos = frames.filter((frame) => photographs[frame.asset].src);
  const Heading = standalone ? "h1" : "h2";
  return (
    <section
      className="site-pad section-y gallery-section"
      aria-labelledby="gallery-title"
    >
      <div className="site-container-wide">
        {photos.length ? (
          <>
            <div className="gallery-heading">
              <div>
                <p className="section-label">Life at Silver Ambassadors</p>
                <Heading
                  id="gallery-title"
                  className={standalone ? "page-title" : "editorial-heading"}
                >
                  {standalone
                    ? "Our shared moments."
                    : "The moments in between."}
                </Heading>
              </div>
              <p>Our story, through our lens.</p>
            </div>
            <div className="gallery-frames">
              {photos.map((frame) => (
                <figure key={frame.asset}>
                  <PhotoPlaceholder
                    asset={frame.asset}
                    variant={frame.variant}
                  />
                  <figcaption>{photographs[frame.asset].alt}</figcaption>
                </figure>
              ))}
            </div>
          </>
        ) : (
          <div className="gallery-preview">
            <div className="gallery-preview-copy">
              <p className="section-label">Life at Silver Ambassadors</p>
              <Heading
                id="gallery-title"
                className={standalone ? "page-title" : "editorial-heading"}
              >
                {standalone ? (
                  <>
                    Our shared
                    <br />
                    <em>moments.</em>
                  </>
                ) : (
                  <>
                    The moments
                    <br />
                    <em>in between.</em>
                  </>
                )}
              </Heading>
              <p className="gallery-empty-note">
                A place for the stories we share. Real photographs from our Tech
                Helps and community gatherings are coming soon.
              </p>
              {showViewAll ? (
                <Link href="/gallery" className="text-link">
                  Visit the gallery{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              ) : (
                <Link href="/events" className="text-link">
                  Explore our gatherings{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              )}
            </div>
            <div className="gallery-preview-art">
              <PhotoPlaceholder asset="moments" variant="arch" />
            </div>
          </div>
        )}
        {photos.length > 0 && showViewAll && (
          <Link href="/gallery" className="text-link">
            Visit the gallery <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}
