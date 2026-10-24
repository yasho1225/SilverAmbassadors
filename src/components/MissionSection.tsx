import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export function MissionSection() {
  const facts = [
    { label: "Sundays", value: "Weekly" },
    { label: "Tech Helps", value: "1:00 pm" },
    { label: "Where", value: "Alpharetta" },
  ];

  return (
    <section className="site-pad section-y border-t border-line bg-surface" aria-labelledby="mission">
      <div className="site-container-wide">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <h2 id="mission" className="display text-[clamp(2.4rem,5vw,4.5rem)] text-ink">
              Mutual joy across generations.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-display text-[clamp(1.2rem,1rem+1vw,1.65rem)] leading-relaxed text-ink">
              {site.mission}
            </p>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
              {site.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16 grid gap-6 border-t border-line pt-10 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label}>
              <p className="fact text-ink">{fact.value}</p>
              <p className="mt-2 text-sm text-muted">{fact.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
