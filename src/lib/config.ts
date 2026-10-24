/**
 * Central configuration for third-party integrations.
 *
 * Calendar: set NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL to a public Google Calendar
 * embed URL (Calendar settings → Integrate calendar → Embed code src).
 * The calendar must be set to "Make available to public" for visitors to view it
 * without signing in. Do not put private calendar credentials here.
 *
 * Volunteer form: official Google Form for logging hours with AHS Silver Ambassadors
 * (also known as Silver Raiders on some school materials).
 */

export const volunteerForm = {
  viewUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSckMD5n1hAGKSXpWpVN4nVDNQXa7LIfpyxcc31cQFEL07vw1A/viewform",
  embedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSckMD5n1hAGKSXpWpVN4nVDNQXa7LIfpyxcc31cQFEL07vw1A/viewform?embedded=true",
} as const;

export function getCalendarEmbedUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL?.trim();
  return url ? url : null;
}

export function getCalendarExternalUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL?.trim();
  if (url) return url;

  const embed = getCalendarEmbedUrl();
  if (!embed) return null;

  try {
    const parsed = new URL(embed);
    const src = parsed.searchParams.get("src");
    if (src) {
      return `https://calendar.google.com/calendar/u/0?cid=${encodeURIComponent(src)}`;
    }
  } catch {
    return null;
  }

  return null;
}
