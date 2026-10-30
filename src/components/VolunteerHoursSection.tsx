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
            <h2 id="hours-heading" className="detail-heading !mt-0">
              Before you submit.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Keep the event date and the time you volunteered handy, then
              follow the form’s instructions. Submit only hours you have
              completed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={volunteerForm.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent gap-2"
              >
                Open the official form
                <ExternalLink size={15} aria-hidden="true" />
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
                  data-lenis-prevent
                >
                  Loading…
                </iframe>
              </div>
              <p className="mt-4 text-sm text-muted">
                Form not loading? Use the button to open it directly in Google
                Forms.
              </p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
