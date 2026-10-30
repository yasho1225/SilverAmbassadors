import { ExternalLink } from "lucide-react";
import { getCalendarEmbedUrl, getCalendarExternalUrl } from "@/lib/config";
export function CalendarEmbed({
  title = "Silver Ambassadors Google Calendar",
  className = "",
}: {
  title?: string;
  className?: string;
}) {
  const embedUrl = getCalendarEmbedUrl();
  const externalUrl = getCalendarExternalUrl();
  if (!embedUrl)
    return (
      <div className={`calendar-empty ${className}`}>
        <div className="calendar-symbol">
          See you
          <br />
          <em>on Sunday.</em>
          <span>Tech Helps · Typically 1:00 pm</span>
        </div>
        <div>
          <p className="section-label !mt-0">The club calendar</p>
          <h3 className="mt-3">Good things are on the horizon.</h3>
          <p>
            Our public calendar is coming soon. Confirm the time and location
            with club leadership before attending. Upcoming dates will appear
            here once the calendar is available.
          </p>
        </div>
      </div>
    );
  return (
    <div className={className}>
      <div className="overflow-hidden border border-line bg-background">
        <iframe
          title={title}
          src={embedUrl}
          className="h-[600px] w-full border-0"
          loading="lazy"
          data-lenis-prevent
        />
      </div>
      {externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link mt-4"
        >
          Open in Google Calendar <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
