# Design system — Silver Ambassadors

## Idea
On this page, **the Sunday connection between students and seniors** becomes **the missing word in a poster sentence** — a photograph sits where “and” would be.

## Direction
Taste `sentence-as-layout` · soot ground · lime accent · Schibsted Grotesk · shutter motion.

## Colour
| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#0f0f0f` | Page / open & close |
| `--surface` | `#1a1a1a` | Panels |
| `--field` | `#ffffff` | Mid-band (visits teaser, events) |
| `--ink` | `#ffffff` | Text on soot |
| `--field-ink` | `#0f0f0f` | Text on field |
| `--muted` | `#8f8f8f` | Secondary |
| `--accent` | `#dafa9c` | Actions / one display line |

## Type
**Schibsted Grotesk** for display (800, tracking -0.05) and UI (400–600).

## Imagery
- Atmosphere (Unsplash): `/public/images/atmosphere/` — hero strip, mission float, verb stages, visits teaser
- Club photos: `/gallery` only via `galleryPhotos`

## Motion
Lenis + GSAP: masked hero lines, shutter on inline photo, sticky verb stages with scrubbed Ken Burns, print reveal, section reveals.
