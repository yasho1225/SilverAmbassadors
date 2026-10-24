import { Reveal } from "@/components/motion/Reveal";

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
          <Reveal>
            <div className="relative h-[38svh] overflow-hidden border border-line bg-surface md:h-[48svh]">
              <p className="absolute top-4 left-4 text-sm text-muted">Students</p>
              <p className="cut-word absolute top-1/2 left-0 -translate-y-1/2 text-ink">
                Students
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative h-[38svh] overflow-hidden border border-line bg-ink text-background md:h-[48svh]">
              <p className="absolute top-4 left-4 text-sm text-background/55">
                Seniors
              </p>
              <p className="cut-word absolute top-1/2 left-0 -translate-y-1/2 text-background">
                Seniors
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
