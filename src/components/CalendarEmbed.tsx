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
        className={`rounded-2xl border border-dashed border-border bg-surface-elevated px-6 py-16 text-center ${className}`}
      >
        <p className="eyebrow mb-3">Calendar placeholder</p>
        <h3 className="font-display text-2xl text-ink">
          Upcoming events will appear here
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted">
          The official Google Calendar embed is not configured yet. A club
          administrator can set{" "}
          <code className="rounded bg-stone px-1.5 py-0.5 text-xs text-charcoal">
            NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL
          </code>{" "}
          after making the calendar publicly viewable under Google Calendar →
          Settings → Access permissions → Make available to public.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated">
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
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal underline decoration-light-gray underline-offset-4 transition-colors hover:decoration-ink"
          >
            Open in Google Calendar
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </p>
      ) : null}
    </div>
  );
}
