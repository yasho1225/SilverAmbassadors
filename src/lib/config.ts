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

export function getSiteOrigin(): string | null {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      url.hostname === "example.com" ||
      url.hostname.endsWith(".example.com")
    )
      return null;
    return url.origin;
  } catch {
    return null;
  }
}

function getPublicSocialUrl(
  value: string | undefined,
  allowedHosts: readonly string[],
): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" && allowedHosts.includes(url.hostname)
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

export function getSocialLinks() {
  return [
    {
      label: "Instagram",
      href: getPublicSocialUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL, [
        "instagram.com",
        "www.instagram.com",
      ]),
    },
    {
      label: "GroupMe",
      href: getPublicSocialUrl(process.env.NEXT_PUBLIC_GROUPME_URL, [
        "groupme.com",
        "www.groupme.com",
        "web.groupme.com",
      ]),
    },
  ];
}

export function getCalendarEmbedUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL?.trim();
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" &&
      parsed.hostname === "calendar.google.com" &&
      parsed.pathname === "/calendar/embed"
      ? parsed.toString()
      : null;
  } catch {
    return null;
  }
}

export function getCalendarExternalUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL?.trim();
  if (url) {
    try {
      const parsed = new URL(url);
      if (
        parsed.protocol === "https:" &&
        parsed.hostname === "calendar.google.com"
      ) {
        return parsed.toString();
      }
    } catch {
      // Fall back to the public embed's calendar identifier.
    }
  }

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
