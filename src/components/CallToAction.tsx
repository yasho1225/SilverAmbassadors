import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { volunteerForm } from "@/lib/config";

export function CallToAction() {
  return (
    <section
      className="site-pad border-t border-line bg-surface py-14 sm:py-16"
      aria-labelledby="cta"
    >
      <div className="site-container-wide flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <Reveal>
          <h2
            id="cta"
            className="display max-w-[18ch] text-[clamp(1.75rem,3vw,2.5rem)] text-ink"
          >
            Log volunteer hours after your visit.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex flex-wrap gap-3">
            <a
              href={volunteerForm.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Submit Hours
            </a>
            <Link href="/gallery" className="btn btn-ghost">
              View gallery
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
