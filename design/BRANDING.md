# Slowpour Coffee Company — branding & build guidelines

Reference implementation: `Slowpour Landing Mockup.dc.html` (1600×1200 hero mockup, desktop + mobile).
Underlying design system: **Organic** — cream ground, terracotta accent, sage second accent, Caprasimo display over Figtree body, heavily rounded geometry.

---

## 1. Brand

- **Name:** Slowpour Coffee Company. Always spelled out in the header/logo. "Slowpour" alone is acceptable in body copy and in the tab title.
- **Positioning:** small-batch roaster, subscription-first. Twelve pounds a batch, roasted the morning it ships.
- **Voice:** warm and human, plainspoken, specific. Concrete nouns and real detail ("Tuesday in the drum, Friday on your counter") over adjectives. No exclamation marks, no emoji, no startup superlatives ("revolutionary", "game-changing").
- **Headline:** "Coffee that takes its time." Set on two lines, flush left.

---

## 2. Color tokens

Use CSS variables, never raw hex, in component code. Values below are for reference only.

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#f5ead8` | Page ground |
| `--color-surface` | `#ebddc5` | Cards, panels |
| `--color-text` | `#201e1d` | Body and headings |
| `--color-accent` | `#c67139` | Terracotta — primary buttons, logo-adjacent marks |
| `--color-accent-2` | `#7a8a5e` | Sage — second voice, not a highlight |

Tonal ramps exist for each role at steps 100–900 (`--color-neutral-*`, `--color-accent-*`, `--color-accent-2-*`), generated on one shared perceptual lightness scale.

- 100–300: tinted fills, hovers, subtle borders (`--color-accent-100` #fff2eb, `--color-accent-200` #ffe1d0, `--color-accent-2-200` #e1eecc).
- 500: the role's base.
- 700–900: text on tinted fills, pressed states (`--color-accent-700` #8c491a, `--color-accent-2-800` #3d472b).

**Contrast rule:** `--color-accent` on the cream ground is ~3:1 — fine for icons, chrome and headline-scale type, **not** for paragraph text. For accent-colored body copy or small-caps kickers use `--color-accent-700`. Secondary body copy uses `--color-neutral-800` (#474238).

Prefer ramp steps over ad-hoc `color-mix()`.

---

## 3. Typography

| Token | Family | Use |
| --- | --- | --- |
| `--font-heading` | Caprasimo 400 | h1–h4, logo, numbered step titles, the roast label |
| `--font-body` | Figtree 400/600 | Everything else, **including buttons** |

- **Buttons use the body font** (Figtree 600) — this is a deliberate override of the Organic default, which sets `.btn` in the heading face. Apply once, globally:
  ```css
  .btn { font-family: var(--font-body); font-weight: 600; }
  ```
- Heading line-height 1.06–1.12, letter-spacing ~-0.015em. Body line-height 1.55–1.65.
- Mockup sizes (desktop, 1440-ish viewport): h1 62px · section headings 22px · body 17px · secondary body 14.5px · kickers 12.5px uppercase, 0.06em tracking, weight 600.
- Mobile: h1 34px · section headings 16px · body 13.5px · kickers 11px.
- Max measure for paragraphs: ~44ch.

---

## 4. Shape, spacing, elevation

- Radii: `--radius-sm` 8px · `--radius-md` 16px · `--radius-lg` 28px. Buttons, tags, inputs and segmented controls go full pill (`border-radius: 999px`). **No sharp corners anywhere.**
- Spacing scale: `--space-1` 4.4px through `--space-8` 35.2px. Use the variables.
- Elevation: `--shadow-sm` / `--shadow-md` / `--shadow-lg`, already tuned to the warm ground. Don't write custom box-shadows for UI; the mockup's deeper device shadows are presentation framing only.
- Circles and blobs are the decorative vocabulary: off-canvas tinted circles bleeding from page corners (accent-2-200 top-left, accent-100 bottom-right), a circular halo behind the hero graphic, 52px circles for step numbers. Give them air.

---

## 5. Layout

- Left-aligned and asymmetric. Headings flush left, whitespace collected on the right.
- Hero: two-column grid, `minmax(0,1fr)` text + ~300px graphic column, graphic justified to the end, vertically centered. Collapses to a single column with the graphic centered below the CTA on mobile.
- How it works: three equal columns, 34px gap, number circle → title → one-sentence body. Stacks to a vertical list on mobile with the circle inline to the left of the text.
- Section rhythm: kicker → content. Avoid `.hr`; separate with whitespace.
- Page is fluid below the hero's fixed mockup framing — no fixed pixel widths in the shipped build, use `max-width` and wrapping grid tracks.

---

## 6. Components (Organic classes — use these, don't re-style raw HTML)

- `.nav` + `.nav-brand` — header. In the mockup the nav is transparent over the page ground with the border removed.
- `.btn` with `.btn-primary` (solid terracotta, `--color-bg` text), `.btn-secondary` (divider-colored outline), `.btn-ghost`, `.btn-icon`, `.btn-block`.
- `.card` / `.card-kicker` / `.card-title` / `.card-body` / `.card-meta`, plus `.elev-sm|md|lg`.
- `.tag`, `.field` + `.input`, `.radio`, `.seg`, `.table`, `.dialog`.
- `.washed` — every content photograph goes through this wrapper (desaturated, lower contrast, lifted) so imagery sits back into the page.

### States (built in — don't restyle per page)
- Primary hover `--color-accent-600`, active `--color-accent-700`.
- Focus: `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }` — never the default blue ring.
- Disabled: 45% opacity. `::selection` is an accent tint.

---

## 7. Icons & imagery

- Icon set: **Lucide**, stroke-width 2.75 for a rounder, heavier feel.
- The hero mug is a rounded-cap line drawing (stroke `--color-accent-700`, body filled `--color-accent-400`) on an `--color-accent-200` circle. Real photography can replace it; run it through `.washed` and keep the edges round.
- No sharp-corner or hairline geometry.

---

## 8. Motion (for the Next.js build)

The mockup is static; the shipped SPA should stay restrained:

- Hero text and graphic: staggered fade + 12–16px rise on mount, 400–500ms, `cubic-bezier(.2,.7,.3,1)`.
- How-it-works steps: same rise, staggered ~80ms apart, triggered on scroll into view once.
- Buttons: 150ms background transition; a 0.98 scale on `:active`.
- Decorative circles: very slow parallax drift at most. No autoplaying loops.
- Honor `prefers-reduced-motion: reduce` — drop transforms, keep opacity.

---

## 9. Don'ts

- No sharp corners, hairline-only geometry, or crowded layouts.
- Don't desaturate the palette toward grey — warmth is the point.
- Caprasimo is the only display face; no condensed or geometric alternates.
- Don't put the heading font in buttons (see §3).
- No accent-colored paragraph text at base weight (see §2).
- No gradients-as-background, no emoji, no icon-in-rounded-square-with-left-border-accent cards.
