import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export function MissionSection() {
  return (
    <section className="site-pad section-y" aria-labelledby="mission">
      <div className="site-container-wide">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <h2
              id="mission"
              className="display text-[clamp(2.4rem,5vw,4rem)] text-ink"
            >
              Mutual joy across generations.
            </h2>
            <p className="max-w-[46ch] self-end text-base leading-relaxed text-muted sm:text-lg">
              {site.mission}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
