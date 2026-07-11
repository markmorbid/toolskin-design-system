# Toolskin v2.0 - Quick Reference Card

## 🚀 Installation

```html
<link rel="stylesheet" href="toolskin.css">
<script src="https://unpkg.com/lenis@1.3.18/dist/lenis.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
<script src="toolskin.js"></script>
```

## ⚙️ Initialization

```javascript
Toolskin.init({
  smoothScroll: { enabled: true },
  locomotiveScroll: { enabled: true, autoDetect: true },
  theme: { mode: 'dark' }, // 'dark' | 'light' | 'auto'
  layout: { containerMaxWidth: '1400px', enableNoise: true }
});
```

## 🎨 Theme

```javascript
// Switch theme
Toolskin.theme.setTheme('light');
Toolskin.theme.toggle();

// Theme toggle button
<button data-theme-toggle>Toggle</button>
```

## 🎢 Smooth Scroll

```javascript
// Scroll to element
Toolskin.scroll.scrollTo('#section');
Toolskin.scroll.scrollToTop();

// Anchor links work automatically
<a href="#section">Link</a>
```

## 🌊 Parallax

```javascript
// Auto-detect (recommended)
locomotiveScroll: {
  enabled: true,
  autoDetect: true,
  selectors: '.ts-section, .ts-hero'
}

// Manual control
<div data-scroll data-scroll-speed="0.5">Content</div>
```

## 📐 Layout Modes

```html
<!-- Standard (max 1400px) -->
<div class="ts-container">...</div>

<!-- Content-focused (narrower) -->
<div class="ts-section ts-layout-content">...</div>

<!-- Fullwidth/Elastic -->
<div class="ts-section ts-layout-elastic">...</div>

<!-- Disable noise -->
<div class="ts-section ts-no-grain">...</div>
```

## 🔧 Configuration Object

```javascript
{
  smoothScroll: {
    enabled: true,
    duration: 1.2,
    smoothWheel: true,
  },
  locomotiveScroll: {
    enabled: true,
    autoDetect: true,
    defaultSpeed: 0.3,
    selectors: '.ts-section, .ts-hero',
  },
  theme: {
    mode: 'dark', // 'dark' | 'light' | 'auto'
    enableToggle: true,
    savePreference: true,
  },
  layout: {
    containerMaxWidth: '1400px',
    contentMaxWidth: '1200px',
    fullpage: false,
    enableNoise: true,
  },
  performance: {
    reducedMotion: 'auto',
    lazyLoad: true,
  },
  features: {
    tabs: true,
    modals: true,
    toasts: true,
    toggles: true,
    observer: true,
  }
}
```

## 🧩 Components

### Tabs
```html
<div class="ts-tabs">
  <button class="ts-tab" data-tab="tab1">Tab 1</button>
</div>
<div class="ts-tab-pane" id="tab1">Content</div>
```

### Modal
```html
<button data-modal-open="modal-id">Open</button>
<div class="ts-overlay" id="modal-id">
  <div class="ts-modal">...</div>
</div>
```

### Toast
```javascript
Toolskin.showToast('Message', { type: 'success' });
```

### Toggle/Collapse
```html
<button data-collapse-trigger="content">Toggle</button>
<div id="content">Collapsible</div>
```

## 📱 Grid System

```html
<div class="ts-grid ts-grid--2">...</div>  <!-- 2 columns -->
<div class="ts-grid ts-grid--3">...</div>  <!-- 3 columns -->
<div class="ts-grid ts-grid--4">...</div>  <!-- 4 columns -->
```

### Masonry
```html
<div class="ts-masonry">
  <div class="ts-masonry-item">1x1</div>
  <div class="ts-masonry-item ts-masonry--tall">1x2</div>
  <div class="ts-masonry-item ts-masonry--wide">2x1</div>
  <div class="ts-masonry-item ts-masonry--large">2x2</div>
  <div class="ts-masonry-item ts-masonry--hero">3x3</div>
</div>
```

## 🎨 CSS Variables

```css
:root {
  --ts-accent: #ff6b6b;
  --ts-container-max: 1400px;
  --ts-content-max: 1200px;
  --ts-sp-base: 8px;
  --ts-font-size-base: 16px;
}
```

## 🎯 Utility Classes

```html
<!-- Spacing -->
<div class="ts-mb-4">Margin bottom</div>
<div class="ts-mt-8">Margin top</div>
<div class="ts-gap-3">Gap</div>

<!-- Flex -->
<div class="ts-flex-between">Space between</div>
<div class="ts-flex-center">Centered</div>
<div class="ts-flex-col">Column</div>

<!-- Typography -->
<p class="ts-text-primary">Primary text</p>
<p class="ts-text-secondary">Secondary text</p>
<p class="ts-text-muted">Muted text</p>

<!-- Borders -->
<div class="ts-border">Border</div>
<div class="ts-rounded">Rounded</div>

<!-- Surfaces -->
<div class="ts-surface-0">Surface level 0</div>
<div class="ts-surface-2">Surface level 2</div>
```

## 🎭 Buttons

```html
<button class="ts-btn ts-btn--primary">Primary</button>
<button class="ts-btn ts-btn--ghost">Ghost</button>
<button class="ts-btn ts-btn--sm">Small</button>
<button class="ts-btn ts-btn--icon"><i class="fa-solid fa-star"></i></button>
```

## 📝 Forms

```html
<div class="ts-field">
  <label class="ts-field-label">Label</label>
  <input type="text" class="ts-input" />
</div>

<div class="ts-toggle-row">
  <span class="ts-toggle-label">Option</span>
  <label class="ts-toggle">
    <input type="checkbox" />
    <span class="ts-toggle__knob"></span>
  </label>
</div>

<div class="ts-range-row">
  <input type="range" class="ts-range" min="0" max="100" />
  <span class="ts-range-val">50</span>
</div>
```

## 🎨 Cards & Panels

```html
<div class="ts-card">
  <div class="ts-card__header">
    <div class="ts-card__title">Title</div>
  </div>
  <div class="ts-card__body">Content</div>
  <div class="ts-card__footer">Footer</div>
</div>

<div class="ts-panel">
  <div class="ts-panel__header">
    <div class="ts-panel__title">Panel</div>
  </div>
  <div class="ts-panel__body">Content</div>
</div>
```

## 🔗 Events

```javascript
// Theme change
document.addEventListener('ts:theme-change', (e) => {
  console.log('Theme:', e.detail.mode);
});

// Tab change
document.addEventListener('ts:tab-change', (e) => {
  console.log('Tab:', e.detail.id);
});
```

## 🐛 Debug

```javascript
// Access instances
window.lenis          // Lenis smooth scroll
window.locomotiveScroll  // Locomotive
Toolskin.config      // Current config
Toolskin.theme       // Theme instance
Toolskin.scroll      // Scroll instance
```

## 📏 Breakpoints

- **xs**: `< 480px`
- **sm**: `480px - 768px`
- **md**: `768px - 1024px`
- **lg**: `1024px - 1400px`
- **xl**: `> 1400px`

---

```html
<!-- Sequential reveals -->
<div class="ts-fade-up ts-delay-1">First (100ms delay)</div>
<div class="ts-fade-up ts-delay-2">Second (200ms delay)</div>
<div class="ts-fade-up ts-delay-3">Third (300ms delay)</div>

<!-- Speed variants -->
<div class="ts-fade-up ts-reveal-fast">Fast (300ms)</div>
<div class="ts-fade-up">Normal (600ms)</div>
<div class="ts-fade-up ts-reveal-slow">Slow (800ms)</div>
<div class="ts-fade-up ts-reveal-slower">Slower (1200ms)</div>
```

### Skip Auto-Animation

```html
<!-- Cards auto-animate by default, skip with: -->
<div class="ts-card" data-ts-reveal-skip>No animation</div>
```

### Programmatic Control

```javascript
// Reveal all elements immediately
Toolskin.observer.revealAll();

// Reveal specific element
Toolskin.observer.revealNow(element);

// Refresh after adding new elements
Toolskin.observer.refresh();
```

---

## Parallax Effects (Optional)

⚠️ **Locomotive Scroll is disabled by default** to prevent conflicts.

### Manual Parallax (Recommended)

```html
<!-- Add to specific elements only -->
<div data-scroll data-scroll-speed="0.5" data-ts-parallax="true">
  Parallax element
</div>
```

```javascript
Toolskin.init({
  locomotiveScroll: { enabled: true, autoDetect: false }
});
```

---

## Quick Actions

### Theme Control
```javascript
Toolskin.setTheme('light');
Toolskin.toggleTheme();
```

### Scroll Control
```javascript
Toolskin.scrollTo('#section', { duration: 1.2 });
```

### Modals & Toasts
```javascript
Toolskin.openModal('modalId');
Toolskin.showToast('Message', { type: 'success' });
```

### Dynamic Updates
```javascript
Toolskin.refresh();
Toolskin.updateLayout({ containerMaxWidth: '1600px' });
```

### Color Customization
```javascript
Toolskin.setAccentHex('#ff5500');
Toolskin.setRadius(15);
```

---

## HTML Data Attributes

**Version**: 2.0.0 | **Date**: March 2026 | **License**: MIT
