import Image from "next/image";
import { photographs, type PhotoKey } from "@/lib/photographs";
export function PhotoPlaceholder({
  asset,
  variant = "connection",
  className = "",
}: {
  asset: PhotoKey;
  variant?: "connection" | "orbit" | "arch";
  className?: string;
}) {
  const photo = photographs[asset];
  return (
    <div className={`photo-composition art-${variant} ${className}`}>
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={asset === "hero"}
          sizes="(max-width: 767px) 100vw, 55vw"
          className="object-cover"
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
