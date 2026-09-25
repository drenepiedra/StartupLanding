# Design System: myProject — Startup Landing

## 1. Visual Theme & Atmosphere

A calm, confident, and uncluttered aesthetic built for a technology startup.
The design is **airy** and **minimalist**: a bright white canvas, generous
whitespace, hairline borders, and a restrained near-black accent used only
where a decision is required. There are no decorative canvases, no neon
glows, and no layered surfaces — the interface reads like well-set print
typography arranged on crisp paper.

Density is low by design: each section breathes, content is centered on a
single disciplined column, and visual weight is communicated through
typographic hierarchy (size + weight + tracking) rather than color fills.
Interactivity is celebrated with gentle transitions (opacity, transform,
micro-shadow lifts) that never feel playful or dark.

## 2. Color Palette & Roles

| Descriptive Name | Hex | Functional Role |
| --- | --- | --- |
| Pure Paper White (#ffffff) | `#ffffff` | Page background and card surfaces — everything rests on this |
| Mist Gray (#f4f4f5) | `#f4f4f5` | Secondary/muted fills: icon wells, code blocks, subtle section bands |
| Hairline Gray (#e4e4e7) | `#e4e4e7` | All borders and input strokes — thin, quiet separation |
| Charcoal Ink (#18181b) | `#18181b` | Primary text on white and the base color for all primary buttons |
| Graphite (#71717a) | `#71717a` | Muted/secondary text: body copy supporting, captions, metadata |
| Soft Slate (#3f3f46) | `#3f3f46` | Secondary button text and emphasized inline values |
| Brand Indigo (#4f46e5) | `#4f46e5` | The only color accent — used sparingly for live/success states, active nav, and small identity cues |
| Leaf Green (#16a34a) | `#16a34a` | Online/available status dots and success confirmations |
| Signal Red (#ef4444) | `#ef4444` | Destructive actions only (rarely used) |

The rule: **the page is black & white first, indigo second, green third.**
If a color is not carrying meaning, it is not present.

## 3. Typography Rules

- **Font family:** Inter (already loaded) for every level of the interface —
  headings, body, labels, and buttons. No display or monospace "character"
  fonts for large text; professionalism comes from restraint.
- **Headings:** font-weight 600 (semibold), `tracking-tight`, Charcoal Ink
  (#18181b). Display sizes scale `text-3xl` → `text-5xl` → `text-6xl`.
- **Body copy:** font-weight 400, `leading-relaxed`, Graphite (#71717a), sized
  `text-base` → `text-lg`.
- **Eyebrows/labels:** uppercase `text-xs`, `tracking-widest`, weight 500,
  Graphite or Brand Indigo — a quiet "section eyebrow" above each heading.
- **Mono details:** JetBrains Mono may be used only for tiny technical
  metadata (URLs, version stamps) at `text-xs`, never for headings.

## 4. Component Stylings

- **Buttons:**
  - Primary: Charcoal Ink (#18181b) fill, Pure Paper White text, `rounded-full`
    pill, `text-sm` weight 500. Hover: slight darkening + 1px lift.
  - Secondary: white fill, Hairline Gray border, Soft Slate text. Hover:
    Mist Gray background.
  - Focus rings use Charcoal Ink at 8% opacity with a 2px offset.
- **Cards/Containers:** Pure Paper White fill, Hairline Gray 1px border,
  Subtly rounded corners (`rounded-xl`), no drop shadow at rest; on hover a
  whisper-soft diffused shadow and a 1px lift. Interior padding
  `p-6`/`p-8` with generous `gap` spacing.
- **Inputs/Forms:** Pure Paper White fill, Hairline Gray 1px stroke,
  `rounded-lg`, `text-sm`. Focus: Charcoal Ink ring and stroke. Placeholder
  text is Graphite at 60%.
- **Badges:** Pill-shaped (`rounded-full`), `text-xs`, weight 500. Either
  Mist Gray fill with Graphite text, or Brand Indigo at 8% fill with Brand
  Indigo text for prominence.
- **Media / Portfolio figures:** full-bleed images in `rounded-xl` frames with
  a Hairline Gray border and whisper-soft shadow. A bottom scrim gradient
  (Charcoal at 80% → transparent) carries the caption. Hover: gentle lift and
  a 3% scale. Always `aspect-[16/9]`, `object-cover`.
- **Logo:** a monochrome pixel-cat mark — Pure Paper White fill with a 1px
  Charcoal Ink contour and black facial details (eyes, nose, whiskers). No
  backing square, no color gradients. Rendered as crisp-edged SVG at any size.
- **Modal:** White panel, Hairline Gray border, `rounded-xl`, medium soft
  shadow, `max-w-2xl`, header separated by a hairline with a close action.

## 5. Layout Principles

- **Container:** a single centered column at `max-w-6xl`, `px-6` gutters.
- **Whitespace:** landing sections use `py-20`/`py-24` vertical rhythm so the
  page reads as long-form editorial, not density.
- **Alignment:** section headers are centered on the hero and section-heading
  rows; body content is left-aligned within cards. A consistent 8px spacing
  scale drives every gap.
- **Grids:** features/competencies use symmetric columns (`md:grid-cols-3`),
  project cards use two balanced columns (`lg:grid-cols-2`), each cell equal
  height with `h-full`.
- **Separators:** sections are divided by whitespace and Hairline Gray
  `border-t`, never by dark bands or gradients.

## 6. Motion & Depth

- **Depth:** flat surfaces with whisper-soft diffused shadows limited to
  hover and modal states. No inset glows, no neon.
- **Motion:** fade + translate-up entrances (8–16px, 300–600ms) via `motion`.
  Micro-interactions are opacity and transform based; nothing is animated
  outside the element that changed.
- **Background:** static Pure Paper White. A very subtle radial Mist Gray
  bloom may sit behind the hero; no canvas effects, no pixel fields.