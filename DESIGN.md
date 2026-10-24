# Design system — Silver Ambassadors

## World
Printed-annual editorial on a night field. Silver ink, steel accent. Photographs are treated as specimens — large, few, and shown in **one place only** (`/gallery`).

## Idea
On this page, **Sunday visits between students and seniors** become a **print annual**: a strict column axis for reading, a masked headline on load, and a single gallery sheet for every photograph.

## Type
- **Newsreader** — display + long reading
- **Manrope** — nav, buttons, captions

## Colour
| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#0f1114` | Page ground |
| `--surface` | `#181b21` | Panels / alternating sections |
| `--ink` | `#e9edf3` | Primary text |
| `--muted` | `#8b939f` | Secondary text |
| `--accent` | `#9eb4c8` | Steel accent (actions, last stair line) |
| `--accent-ink` | `#0f1114` | Text on accent |

## Imagery rule
`galleryPhotos` in `src/lib/content.ts` mounts **only** via `PhotoGallery` on `/gallery`. Logo may appear in brand chrome. Never reuse visit photos on Home, About, Hero, or CTA.

## Motion
- Lenis + GSAP ScrollTrigger (wired in `SmoothScroll`)
- Signature: masked headline lines on hero load (~900ms, stagger 110ms)
- Gallery: shutter clip-path open + image scale settle
- Stairs / teaser / CTA: purposeful once-scroll entrances
- UI press ≤160ms; respect `prefers-reduced-motion`

## Anti-patterns
No eyebrow kickers as costume, no 01/02/03, no icon-card grids, no purple gradients, no glass decoration, no duplicate photographs, no giant empty CTA panels.
