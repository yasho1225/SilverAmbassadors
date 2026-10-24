<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- Product PRD: [`docs/PRD.md`](docs/PRD.md)
- Install/run commands: see [`README.md`](README.md) (`npm install`, `npm run dev`, `npm run lint`, `npm run build`)
- Club copy lives in `src/lib/content.ts`; form/calendar helpers in `src/lib/config.ts`
- Calendar stays a graceful placeholder until `NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL` is set; do not invent events
- Volunteer hours use the official Google Form only — never add a custom hours backend
- Do not invent contacts, stats, partnerships, or photo captions; keep placeholders labeled until real assets arrive
