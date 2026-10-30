# Design system — Silver Ambassadors

## World

An editorial study of connection. Mist blue and light silver
establish a clear rhythm. Newsreader's italic voice adds warmth to restrained
Manrope navigation. A small selection of real club photographs brings the
student–senior connection into focus. Natural image colors are preserved, with
face-aware cover crops. Abstract interlocking forms remain available as a labeled
fallback for empty photo slots.

## Type

- **Newsreader** for display headings, emphasis, and the long-form mission statement
- **Manrope** for body copy, navigation, buttons, and captions

## Colour

| Color          | Value     | Role                                              |
| -------------- | --------- | ------------------------------------------------- |
| Silver blue    | `#cbd6df` | Main page background                              |
| Brushed silver | `#b8c3cc` | Mission, calendar, and supporting surfaces        |
| Cool graphite  | `#25323d` | Accessible text, buttons, and illustration detail |

Mist blue and silver share cool undertones. Graphite supplies contrast for
type and controls. Surface variations are subtle mixes of the light colors,
while illustration shadows give silver its material character. Large page
surfaces stay light. The “together.” sign-off sits below the two cards in solid
graphite, with no outline, background box, or color blending.

## Motion

- Lenis for smooth scroll
- GSAP ScrollTrigger for hero parallax, joining generation illustrations, and the volunteering story
- Native sticky illustration stage on desktop; inline chapter illustrations on mobile
- Each scene reserves a separate caption area; captions fade in sequence and never sit on the artwork
- Motion for restrained section entrances; content visible before hydration
- UI feedback ≤160ms, `cubic-bezier(0.23, 1, 0.32, 1)`
- Respect `prefers-reduced-motion`

## Page hierarchy

The homepage owns the animated story. About provides a concise mission and
activity overview without replaying it. Supporting pages share a consistent
introduction, heading scale, and spacing. Two photographs close the homepage;
the Gallery page shows all four originals. The footer groups all
pages and the two social destinations without a duplicate members column.

The hero directly identifies students helping seniors connect, and explains
phone help, technology questions, games, and regular visits. It pairs this with real
club photos. A smaller photograph overlaps the main image below the faces;
the volunteering action and typical Sunday time remain clear. In the generation
scene, one student and one senior sit close to a shared tablet. Their bent arms
and the tabletop join across the card seam without stretched limbs.
Each generation has a short description of what participants contribute and gain.
The illustrations are capped at 280px wide on desktop and 180px on phones, giving
the headings and descriptions more room. The two cards move inward and straighten
as visitors scroll, joining the shared tablet. Movement follows scrolling in both
directions, rather than playing once on entrance. There is no pinning or added
scroll distance. Reduced motion uses a static version.

The volunteering artwork uses a graphite frame to separate silver objects from
the light page. A tilting tablet, a moving game piece, and turning clock hands
respond directly to scrolling. Scenes crossfade as their headings pass the center
of the artwork; captions take turns and the frame stays filled. The same objects
animate within each chapter on mobile. Shorter chapters and direct links to visits
and hour submission keep the story useful. The bottom gallery uses the two group
photos that do not appear in the hero.

## Anti-patterns

No decorative section numbers, icon-card grids, neon, or glassmorphism.
Small section labels support orientation. Sculptural shading is limited to
placeholder artwork. No fabricated event photographs, statistics, or dates.
