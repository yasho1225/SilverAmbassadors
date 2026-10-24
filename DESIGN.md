# Design system — Silver Ambassadors

## World
Quiet night editorial. Structured type, clear hierarchy, restrained silver accent.

## Imagery rule
Visit photographs render **only** on `/gallery` via `galleryPhotos` → `PhotoGallery`.
Logo may appear in brand chrome (nav/footer). Never place visit photos on Home, About, Hero, or CTA.

## Type
- **Newsreader** — headings (`display`)
- **Manrope** — body, nav, buttons
- Body ~17px / 1.65; reading measure ~38rem
- Section labels: 12px uppercase tracked

## Colour
| Token | Value |
| --- | --- |
| `--bg` | `#0e1013` |
| `--surface` | `#161a20` |
| `--ink` | `#eef1f5` |
| `--muted` | `#9aa3af` |
| `--accent` | `#a8b9c9` |

## Layout
- Content width: `min(1080px)` wide / `720px` reading
- Section padding: `clamp(3.5rem, 7vw, 5.5rem)`
- Home: Hero → Mission → What we do → Events → CTA (no photos)

## Motion
Lenis + light GSAP (masked hero lines, list reveals, gallery fade). Respect reduced motion.
