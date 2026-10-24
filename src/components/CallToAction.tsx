import { Reveal } from "@/components/motion/Reveal";
import { volunteerForm } from "@/lib/config";

export function CallToAction() {
  return (
    <section
      className="site-pad relative flex min-h-[85svh] items-stretch bg-ink text-background"
      aria-labelledby="cta"
    >
      <div className="site-container-wide flex w-full flex-col justify-between py-16 sm:py-20">
        <Reveal>
          <h2
            id="cta"
            className="display max-w-[10ch] text-[clamp(3rem,10vw,7rem)] text-background"
          >
            Share an hour this Sunday.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col gap-6 border-t border-background/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-background/65">
              Log the time you shared with seniors—or start with the next Tech
              Help.
            </p>
            <a
              href={volunteerForm.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Submit Hours
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
