import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export function MissionSection() {
  return (
    <section className="site-pad section-y" aria-labelledby="mission">
      <div className="site-container-wide max-w-3xl">
        <Reveal>
          <h2
            id="mission"
            className="display text-[clamp(1.85rem,3.2vw,2.5rem)] text-ink"
          >
            Mutual joy across generations.
          </h2>
          <p className="mt-5 text-[1.05rem] leading-[1.7] text-muted sm:text-lg sm:leading-[1.7]">
            {site.mission}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
