import Image from "next/image";
import { photographs, type PhotoKey } from "@/lib/photographs";
export function PhotoPlaceholder({
  asset,
  variant = "connection",
  className = "",
  sizes = "(max-width: 767px) calc(100vw - 40px), (max-width: 1439px) 45vw, 620px",
}: {
  asset: PhotoKey;
  variant?: "connection" | "orbit" | "arch";
  className?: string;
  sizes?: string;
}) {
  const photo = photographs[asset];
  return (
    <div
      className={`photo-composition art-${variant} ${photo.src ? "has-photo" : ""} ${className}`}
    >
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          preload={asset === "hero"}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: photo.position }}
        />
      ) : (
        <>
          <div className="art-grid" aria-hidden="true" />
          <div className="sculpture" aria-hidden="true">
            <span className="sculpture-loop loop-one" />
            <span className="sculpture-loop loop-two" />
          </div>
          {asset !== "hero" && (
            <span className="photo-label">Illustrated placeholder</span>
          )}
        </>
      )}
    </div>
  );
}
