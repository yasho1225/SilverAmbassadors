# Design system — Silver Ambassadors

## World
Type-led editorial night field. Silver ink on near-black ground. One muted steel accent. Photographs (when present) arrive large and few; until then, honest placeholders and typographic set pieces carry the page.

## Type
- **Newsreader** for display and body (optical sizing, light at poster scale)
- **Manrope** for compact UI chrome (nav, buttons, captions)

## Colour
| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#0f1114` | Page ground |
| `--surface` | `#181b21` | Panels |
| `--ink` | `#e9edf3` | Primary text |
| `--muted` | `#8b939f` | Secondary text |
| `--accent` | `#9eb4c8` | Steel/silver accent (buttons, emphasis) |
| `--accent-ink` | `#0f1114` | Text on accent |

## Motion
- Lenis for smooth scroll
- GSAP ScrollTrigger for section entrances (opacity + y, ease-out, ~0.6–0.9s marketing)
- UI feedback ≤160ms, `cubic-bezier(0.23, 1, 0.32, 1)`
- Respect `prefers-reduced-motion`

## Anti-patterns
No eyebrow kickers, no 01/02/03 costume numbering, no icon-card grids, no purple gradients, no glassmorphism decoration.
