import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

const facts = [
  { value: "Sunday", label: "Every week" },
  { value: "1:00 pm", label: "Tech Helps" },
  { value: "AHS", label: "Alpharetta" },
] as const;

export function MissionSection() {
  return (
    <section className="site-pad section-y" aria-labelledby="mission">
      <div className="site-container-wide">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-14">
            <h2
              id="mission"
              className="display text-[clamp(2.2rem,4.5vw,3.5rem)] text-ink"
            >
              Mutual joy across generations.
            </h2>
            <p className="max-w-[46ch] text-base leading-relaxed text-muted sm:text-lg">
              {site.mission}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <p className="fact text-ink">{fact.value}</p>
                <p className="mt-1.5 text-sm text-muted">{fact.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
