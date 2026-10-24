import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const panels = [
  {
    src: "/images/group-lounge.jpg",
    alt: "Ambassadors and a senior resident sharing a moment in the lounge",
    label: "Visits",
    objectPosition: "center 42%",
  },
  {
    src: "/images/members-lobby.jpg",
    alt: "Silver Ambassadors members together in the building lobby",
    label: "Ambassadors",
    objectPosition: "center 40%",
  },
] as const;

/** Compact two-up photo band — used on About, not the home page. */
export function Showcase() {
  return (
    <section className="overflow-hidden" aria-label="Club photographs">
      <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-2">
        {panels.map((panel, index) => (
          <Reveal key={panel.src} delay={index * 0.05}>
            <div className="relative aspect-[4/3] overflow-hidden bg-ink sm:aspect-[5/4] md:aspect-[16/11]">
              <Image
                src={panel.src}
                alt={panel.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: panel.objectPosition }}
              />
              <p className="absolute bottom-3 left-3 text-sm text-background/90">
                {panel.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
