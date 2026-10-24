import { ExternalLink } from "lucide-react";
import {
  getCalendarEmbedUrl,
  getCalendarExternalUrl,
} from "@/lib/config";

type CalendarEmbedProps = {
  title?: string;
  className?: string;
};

export function CalendarEmbed({
  title = "Silver Ambassadors Google Calendar",
  className = "",
}: CalendarEmbedProps) {
  const embedUrl = getCalendarEmbedUrl();
  const externalUrl = getCalendarExternalUrl();

  if (!embedUrl) {
    return (
      <div
        className={`border border-dashed border-line bg-background px-6 py-16 text-center ${className}`}
      >
        <h3 className="font-display text-2xl text-ink sm:text-3xl">
          Upcoming events will appear here
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
          Set{" "}
          <code className="rounded bg-surface-2 px-1.5 py-0.5 text-xs text-ink">
            NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL
          </code>{" "}
          after publishing the club calendar publicly in Google Calendar
          settings.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="overflow-hidden border border-line bg-background">
        <iframe
          title={title}
          src={embedUrl}
          className="h-[min(70vh,720px)] w-full border-0"
          loading="lazy"
        />
      </div>
      {externalUrl ? (
        <p className="mt-4">
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
          >
            Open in Google Calendar
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </p>
      ) : null}
    </div>
  );
}
