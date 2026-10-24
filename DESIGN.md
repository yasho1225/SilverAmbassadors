# Design system — Silver Ambassadors

## World
Night editorial field. Photographs lead the home page — large, few, each used once.

## Imagery
| Slot | Photo | Where |
| --- | --- | --- |
| Hero | `group-lounge.jpg` | Home hero only |
| Mosaic | `visit-lounge`, `members-lobby`, `members-patio` | Home `#gallery` only |
| Logo | `logo.png` | Brand chrome |

`/gallery` redirects to `/#gallery`. About has no visit photos.

## Type
- **Newsreader** — display
- **Manrope** — UI

## Colour
| Token | Value |
| --- | --- |
| `--bg` | `#0f1114` |
| `--surface` | `#181b21` |
| `--ink` | `#e9edf3` |
| `--muted` | `#8b939f` |
| `--accent` | `#9eb4c8` |

## Motion
Lenis + GSAP: hero image settle + masked lines; gallery shutter opens; section reveals once. Respect `prefers-reduced-motion`.

## Anti-patterns
No duplicate photographs, no empty type-only hero, no giant CTA voids, no icon-card grids, no purple SaaS look.
