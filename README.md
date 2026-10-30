# Silver Ambassadors

Official website for **Silver Ambassadors**, a student organization at Alpharetta High School that connects students and senior citizens through weekly volunteering and community events.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Motion for React (formerly Framer Motion)
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Production build             |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Configuration

Copy `.env.example` to `.env.local` and fill in values when available:

- `NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL` — public Google Calendar iframe `src`
- `NEXT_PUBLIC_GOOGLE_CALENDAR_URL` — optional direct link to open the calendar
- `NEXT_PUBLIC_SITE_URL` — verified production HTTPS origin for metadata and the sitemap

Leave the site origin empty until the public domain is confirmed. The site does
not publish placeholder domain URLs or fabricated modification dates in its sitemap.

The volunteer hours form is configured in `src/lib/config.ts`.

Footer social links use `NEXT_PUBLIC_INSTAGRAM_URL` and
`NEXT_PUBLIC_GROUPME_URL`. Add the verified Instagram profile and GroupMe invite
URLs in `.env.local`, then restart the preview or rebuild for deployment.
Until supplied, the footer labels each service as “Link coming soon” without
creating a dead or guessed link.

### Calendar administrator notes

Being shared on a calendar is not the same as making it publicly embeddable. For site visitors to see the embed without signing in:

1. Open Google Calendar → Settings for the club calendar
2. Under **Access permissions**, enable **Make available to public** (see free/busy or full details as appropriate)
3. Copy the embed URL from **Integrate calendar**
4. Set `NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL`

Do not commit private credentials or non-public calendar tokens.

## Placeholders

Until club assets are provided, the site uses clearly labeled placeholders for:

- Hero and gallery photographs
- Logo mark (text monogram)
- Contact email / advisor
- Google Calendar embed

Photo slots use lightweight CSS sculptures, explicitly labeled as placeholders.
To replace them, add approved photographs to `public/photos/` and update
`src/lib/photographs.ts` with each image path and meaningful alternative text.
The fixed containers preserve layout and scroll measurements.
The text monogram is temporary until the official logo is supplied.

The homepage retains the animated generation panels and the senior line drawing.
About uses a concise mission and activity overview instead of repeating the same
scroll story. Gallery shows one illustrated empty state until approved event
photographs are available, then displays only configured photos. Contact explains
the first-visit steps and identifies unavailable contact information in one note.

### Motion

The homepage has three restrained scroll moments: the hero artwork drifts within
its frame, the students/seniors panels converge, and the volunteering illustrations
transition between tech help, shared activities, and time given. The volunteering
stage uses native CSS sticky positioning alongside three readable text chapters.
On smaller screens, each illustration stays with its own chapter and moves gently
with the scroll. No scene uses GSAP pinning.
Motion handles restrained section movement; GSAP owns the scroll scenes;
Lenis shares GSAP's clock and updates ScrollTrigger. Every scene cleans up on
navigation and responds to changes in the reduced-motion preference. With
JavaScript disabled, all content remains visible.

Primary navigation is limited to Mission, Volunteer, and Get involved, alongside
the Submit Hours button. A menu button on every screen size opens all six pages,
so Gallery and Volunteer Hours are available without scrolling to the footer.
Homepage spacing and chapter heights are kept compact to reduce scrolling.

The development filesystem cache is disabled after it served an outdated
stylesheet during visual iteration. Production build caching remains enabled.

### Validation

Run `npm run lint`, `npx tsc --noEmit`, and `npm run build`.
The build uses Next's font optimization and needs access to Google Fonts.
Preview with `npm run dev`, then check the mobile menu, events page, and hours form.
The Google Form provides the actual submission and confirmation; do not send
fabricated volunteer entries while testing.

## Content source

Mission and activity copy were provided by club leadership. Do not invent statistics, partnerships, or contact channels.

## Product requirements

See [`docs/PRD.md`](docs/PRD.md) for the full Product Requirements Document.

## Pages

| Path               | Purpose                                                     |
| ------------------ | ----------------------------------------------------------- |
| `/`                | Homepage: mission, activities, events preview, gallery, CTA |
| `/about`           | Mission and who the club serves                             |
| `/events`          | Google Calendar (or placeholder)                            |
| `/volunteer-hours` | Official hours Google Form                                  |
| `/gallery`         | Event photo placeholders / future photos                    |
| `/contact`         | Get involved + contact placeholders                         |
