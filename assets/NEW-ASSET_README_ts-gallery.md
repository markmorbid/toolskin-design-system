# ts-gallery — first draft

A token-driven, float-based asymmetric image gallery for the **Toolskin Design System**.
Sibling to `.ts-masonry`, not a replacement: where masonry uses flex+clamp for
auto-flow card layouts, gallery uses **floats + percentage widths** for authored
asymmetric layouts where you decide each tile's size.

## Files

| File | Role |
|------|------|
| `ts-gallery.css` | Component CSS — drop into `assets/css/components/` or paste into `toolskin.css` |
| `ts-gallery.js`  | Component JS — drop into `assets/js/components/` or paste into `toolskin-uikit.js` |
| `ts-gallery-demo.html` | Open in a browser to see all three variants |
| `toolskin.css` | Copy of your core stylesheet so the demo runs without the live server |

## What it does

- **Authored asymmetric layout** — `quarter / half / two-third / full / double-height / float-right / responsive-half` size grammar (same as the original reference)
- **Lazy loading** — `IntersectionObserver` defers `background-image` painting until the tile nears the viewport (200px lookahead)
- **Skeleton shimmer** during load → fades to the loaded image with the existing `.ts-fade-in` utility
- **SEO-safe** — hidden `<img>` is kept in DOM with `alt`, `loading="lazy"`, `decoding="async"` for crawlers and screen readers; the visible tile is painted via `background-image`
- **Token-styled lightbox** — namespaced `.ts-gallery-lightbox` so it does **not** collide with the existing `#ts-lightbox` (Three.js phantom-gallery)
  - Click a tile to open
  - Keyboard: `Esc`, `←`, `→`
  - Touch swipe (40px threshold)
  - Click backdrop to close
  - Focus returned to trigger on close
- **Responsive** via container queries (with viewport `@media` fallback) — gallery rebreaks based on its own width, not the viewport
- **Reduced motion** — `prefers-reduced-motion: reduce` kills all transitions and the shimmer

## Markup contracts

### Most ergonomic (authored)
```html
<ul class="ts-gallery" data-ts-gallery>
  <li class="quarter double-height" data-src="big.jpg" data-caption="Hero"></li>
  <li class="half"                  data-src="wide.jpg"></li>
  <li class="quarter responsive-half" data-src="square.jpg"></li>
</ul>
```

### Children that already have `<img>`
```html
<ul class="ts-gallery" data-ts-gallery>
  <li class="half"><img src="thumb.jpg" alt="Sunset"></li>
  <li class="half"><a href="full.jpg"><img src="thumb.jpg" alt="Beach"></a></li>
</ul>
```
JS hoists the image into a background and keeps the `<img>` hidden for SEO.

### Programmatic
```js
ToolskinUIKit.Gallery.create(container, {
  variant: 'uniform',          // or 'portfolio' or '' (default float layout)
  images: [
    { src: 'a.jpg', caption: 'A', size: 'half' },
    { src: 'b.jpg', size: 'quarter double-height' },
    'c.jpg',                   // string shorthand
  ],
});
```

### Append at runtime
```js
ToolskinUIKit.Gallery.append(galleryEl, {
  src: 'new.jpg', caption: 'Added live'
});
```

### Sortable
```html
<ul class="ts-gallery ts-gallery--uniform"
    data-ts-gallery
    data-ts-gallery-sortable>
  <!-- items -->
</ul>
```
Pair sortable with `--uniform` — float layouts don't FLIP cleanly in 2D under drag.

## Design tokens — three-tier discipline (per `/design-tokens` skill)

Component sets `--ts-this-bg` on itself, then **all** Tier 3 tokens reference Tier 2 derivatives:

```
.ts-gallery {
    --ts-this-bg: var(--ts-bg-1);                          ← Tier 2 setter (legal)
    --ts-gallery-tile-bg: var(--ts-this-bg);               ← Tier 3 → Tier 2
    --ts-gallery-tile-border: 1px solid var(--ts-this-bg-border);
    --ts-gallery-overlay-bg: …color-mix(…var(--ts-this-bg)…);
}
```

Audit pass: zero `var(--ts-bg-N)` references outside the two legal Tier 2 setters
(`.ts-gallery` and `.ts-gallery-lightbox`). Zero `!important`. Zero raw hex.
Hover/active states route through `--ts-this-bg-hover`.

## Integration into Toolskin

Two paths — pick whichever fits your refactor cadence:

**Path A — drop-in (low-risk, fast)**
1. Copy `ts-gallery.css` to `assets/css/components/ts-gallery.css`
2. Copy `ts-gallery.js` to `assets/js/components/ts-gallery.js`
3. Add to `index.html` after `toolskin.css` and `toolskin-uikit.js`:
   ```html
   <link rel="stylesheet" href="assets/css/components/ts-gallery.css">
   <script src="assets/js/components/ts-gallery.js" defer></script>
   ```

**Path B — merge into core**
1. Append the CSS body of `ts-gallery.css` to the appropriate section of `toolskin.css` (alongside `.ts-masonry`, around line 28545)
2. Move the JS into `toolskin-uikit.js` and register on the existing `ToolskinUIKit` export at line 1160
3. Remove the IIFE wrapper since it'll already be inside the toolkit's IIFE

## Known limitations (for v1 → v2)

| # | Issue | Where | Fix path |
|---|-------|-------|----------|
| 1 | Appended items are not draggable (TSUISortable is one-shot per container) | JS · `appendImage` | Wait for `TSUISortable.refresh()` API |
| 2 | No true focus trap inside the lightbox (Tab can escape) | JS · `buildLightbox` | Add a focus-trap utility — possibly extract from the existing modal system |
| 3 | Lightbox has no preload of `prev` / `next` images | JS · `renderLightbox` | Add a 2-image-ahead prefetch on open |
| 4 | Sortable + float layout produces janky reorder | CSS · `--sortable` | Document `--uniform` as the recommended pair |

## Try it

```
cd ts-gallery/
open ts-gallery-demo.html
```

Three variants render: portfolio asymmetric (the original concept), uniform grid
(programmatic), and sortable (drag to reorder). Click any tile to open the
lightbox; resize the window to see the container queries rebreak the layout.
