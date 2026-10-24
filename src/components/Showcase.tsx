import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const panels = [
  {
    src: "/images/visit-lounge.jpg",
    alt: "A student volunteer sitting with senior residents around a lounge table",
    label: "Visits",
    word: "Together",
    // Portrait source in a landscape frame — keep faces in view
    objectPosition: "center 28%",
  },
  {
    src: "/images/group-lounge.jpg",
    alt: "Ambassadors and a senior resident sharing a moment in the lounge",
    label: "Company",
    word: "Present",
    objectPosition: "center 40%",
  },
] as const;

export function Showcase() {
  return (
    <section className="site-pad section-y overflow-hidden" aria-labelledby="who">
      <div className="site-container-wide">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            <div>
              <h2 id="who" className="font-display text-2xl text-ink sm:text-3xl">
                Who we bring together
              </h2>
            </div>
            <p className="max-w-[42ch] text-base leading-relaxed text-muted">
              Students earn volunteer hours and practice communication. Seniors
              receive company, tech help, and shared celebration.
            </p>
          </div>
        </Reveal>

        <div className="mt-[10vh] grid gap-10 md:grid-cols-2">
          {panels.map((panel, index) => (
            <Reveal key={panel.src} delay={index * 0.08}>
              <div className="group relative h-[38svh] overflow-hidden border border-line bg-surface md:h-[48svh]">
                  <Image
                  src={panel.src}
                  alt={panel.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                  style={{ objectPosition: panel.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <p className="absolute top-4 left-4 text-sm text-background/80">
                  {panel.label}
                </p>
                <p className="cut-word absolute bottom-4 left-0 text-background/90">
                  {panel.word}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
