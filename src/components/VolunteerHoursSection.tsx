import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { volunteerForm } from "@/lib/config";

type VolunteerHoursSectionProps = {
  showEmbed?: boolean;
};

export function VolunteerHoursSection({
  showEmbed = true,
}: VolunteerHoursSectionProps) {
  return (
    <section className="section-pad bg-white" aria-labelledby="hours-heading">
      <div className="site-container">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <FadeIn>
            <SectionHeading
              eyebrow="Volunteer hours"
              title="Log the time you shared"
              description="Members can submit completed volunteering hours through the official Silver Ambassadors Google Form. Submission is confirmed only after the form itself records your response."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={volunteerForm.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Submit Volunteer Hours
                <ExternalLink size={15} aria-hidden="true" />
              </a>
              <a
                href={volunteerForm.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-off-white"
              >
                Open form in a new tab
              </a>
            </div>
            <p className="mt-5 text-sm text-muted">
              Tip: keep event name and date ready before you begin.
            </p>
          </FadeIn>

          {showEmbed ? (
            <FadeIn delay={0.08}>
              <div className="overflow-hidden rounded-2xl border border-border bg-off-white">
                <iframe
                  title="Silver Ambassadors volunteer hour log form"
                  src={volunteerForm.embedUrl}
                  className="h-[640px] w-full border-0 bg-white"
                  loading="lazy"
                >
                  Loading…
                </iframe>
              </div>
              <p id="hours-heading" className="sr-only">
                Volunteer hours form
              </p>
            </FadeIn>
          ) : null}
        </div>
      </div>
    </section>
  );
}
