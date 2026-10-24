import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { volunteerForm } from "@/lib/config";

type VolunteerHoursSectionProps = {
  showEmbed?: boolean;
};

export function VolunteerHoursSection({
  showEmbed = true,
}: VolunteerHoursSectionProps) {
  return (
    <section className="site-pad section-y" aria-labelledby="hours-heading">
      <div className="site-container-wide">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <h2
              id="hours-heading"
              className="display text-[clamp(2.2rem,4.5vw,3.8rem)] text-ink"
            >
              Log the time you shared.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Members submit completed volunteering hours through the official
              Google Form. Confirmation comes only from the form itself.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={volunteerForm.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent gap-2"
              >
                Submit Volunteer Hours
                <ExternalLink size={15} aria-hidden="true" />
              </a>
              <a
                href={volunteerForm.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Open in a new tab
              </a>
            </div>
          </Reveal>

          {showEmbed ? (
            <Reveal delay={0.08}>
              <div className="overflow-hidden border border-line bg-surface">
                <iframe
                  title="Silver Ambassadors volunteer hour log form"
                  src={volunteerForm.embedUrl}
                  className="h-[640px] w-full border-0 bg-background"
                  loading="lazy"
                >
                  Loading…
                </iframe>
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
