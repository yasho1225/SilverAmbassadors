import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { volunteerForm } from "@/lib/config";

export function CallToAction() {
  return (
    <section className="section-pad bg-ink text-white" aria-labelledby="cta-heading">
      <div className="site-container">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-white/55 uppercase">
              Get involved
            </p>
            <h2
              id="cta-heading"
              className="font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
            >
              Share an hour. Brighten a Sunday.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
              Join Silver Ambassadors for weekly Tech Helps and special events
              that bring students and seniors together—and earn volunteer hours
              along the way.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={volunteerForm.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-opacity hover:opacity-95"
              >
                Submit Hours
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact the club
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
