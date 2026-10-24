# Silver Ambassadors

Official website for **Silver Ambassadors**, a student organization at Alpharetta High School that connects students and senior citizens through weekly volunteering and community events.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Configuration

Copy `.env.example` to `.env.local` and fill in values when available:

- `NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL` — public Google Calendar iframe `src`
- `NEXT_PUBLIC_GOOGLE_CALENDAR_URL` — optional direct link to open the calendar

The volunteer hours form is configured in `src/lib/config.ts`.

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

## Content source

Mission and activity copy were provided by club leadership. Do not invent statistics, partnerships, or contact channels.

## Product requirements

See [`docs/PRD.md`](docs/PRD.md) for the full Product Requirements Document.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Homepage: mission, activities, events preview, gallery, CTA |
| `/about` | Mission and who the club serves |
| `/events` | Google Calendar (or placeholder) |
| `/volunteer-hours` | Official hours Google Form |
| `/gallery` | Club photographs from visits and gatherings |
| `/contact` | Get involved + contact placeholders |
