import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

const facts = [
  { label: "Rhythm", value: "Every Sunday" },
  { label: "Tech Helps", value: "1:00 pm" },
  { label: "Home", value: "Alpharetta" },
] as const;

export function MissionSection() {
  return (
    <section className="site-pad section-y" aria-labelledby="mission">
      <div className="site-container-wide">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-14">
          <Reveal>
            <h2
              id="mission"
              className="display text-[clamp(2rem,4.2vw,3.4rem)] text-ink"
            >
              Mutual joy across generations.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[48ch] text-base leading-relaxed text-muted sm:text-lg">
              {site.mission}
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.08}
          className="mt-10 grid gap-5 border-t border-line pt-8 sm:grid-cols-3"
        >
          {facts.map((fact) => (
            <div key={fact.label}>
              <p className="fact text-ink">{fact.value}</p>
              <p className="mt-1.5 text-sm text-muted">{fact.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
