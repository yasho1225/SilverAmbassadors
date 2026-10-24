# Design system — Silver Ambassadors

## World
Night editorial field with silver ink. Photographs lead: large, dense, few words over them. Type carries claims; pictures carry proof.

## Type
- **Newsreader** for display and long reading (light at poster scale)
- **Manrope** for nav, buttons, captions

## Colour
| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#0f1114` | Page ground |
| `--surface` | `#181b21` | Panels |
| `--ink` | `#e9edf3` | Primary text |
| `--muted` | `#8b939f` | Secondary text |
| `--accent` | `#9eb4c8` | Steel/silver accent |
| `--accent-ink` | `#0f1114` | Text on accent |

## Layout
- Section padding: `clamp(2.75rem, 5.5vw, 4.5rem)` — tight groups, not empty voids
- Home: photo hero → mission once → photo grid → Sunday activities → events → compact hours CTA
- Say each claim once; About holds the longer mission body

## Motion
- Lenis smooth scroll
- GSAP ScrollTrigger for occasional section entrances
- UI feedback ≤160ms, `cubic-bezier(0.23, 1, 0.32, 1)`
- Respect `prefers-reduced-motion`

## Anti-patterns
No eyebrow kickers, no 01/02/03 costume numbering, no icon-card grids, no purple gradients, no glassmorphism decoration, no giant empty CTA panels.
