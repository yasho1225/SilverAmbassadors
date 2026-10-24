import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export function MissionSection() {
  return (
    <section className="site-pad section-y" aria-labelledby="mission">
      <div className="site-container-wide grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start lg:gap-16">
        <Reveal>
          <h2
            id="mission"
            className="display text-[clamp(1.85rem,3.5vw,2.75rem)] text-ink"
          >
            Mutual joy across generations.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="text-[1.05rem] leading-relaxed text-muted sm:text-lg sm:leading-relaxed">
            {site.mission}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
