import { Reveal } from "@/components/motion/Reveal";
import { volunteerForm } from "@/lib/config";

export function CallToAction() {
  return (
    <section
      className="site-pad border-t border-line bg-ink py-12 text-background sm:py-16"
      aria-labelledby="cta"
    >
      <div className="site-container-wide flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
        <Reveal>
          <h2
            id="cta"
            className="display max-w-[16ch] text-[clamp(1.85rem,3.5vw,2.75rem)] text-background"
          >
            Log the hour you shared.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <a
            href={volunteerForm.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent shrink-0"
          >
            Submit Hours
          </a>
        </Reveal>
      </div>
    </section>
  );
}
