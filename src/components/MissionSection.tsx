import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export function MissionSection() {
  return (
    <section className="site-pad section-y" aria-labelledby="mission">
      <div className="site-container-wide editorial-axis">
        <Reveal>
          <p className="editorial-note text-sm text-muted">Mission</p>
        </Reveal>
        <div>
          <Reveal>
            <h2
              id="mission"
              className="display max-w-[14ch] text-[clamp(2.2rem,4.5vw,3.6rem)] text-ink"
            >
              Mutual joy across generations.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-muted sm:text-lg">
              {site.mission}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
