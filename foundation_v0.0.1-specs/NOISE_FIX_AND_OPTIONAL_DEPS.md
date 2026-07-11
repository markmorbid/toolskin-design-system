# Noise Overlay Fix & Optional Dependencies

## 🐛 Problem: Noise Overlay Not Blending

### The Issue
When Locomotive Scroll applies `transform: matrix3d(...)` to sections, it creates a **new stacking context** that breaks `mix-blend-mode: soft-light` on the noise overlay `::before` pseudo-element.

### Root Cause
CSS transforms create a new compositing layer, which isolates blend modes. The noise overlay's `mix-blend-mode` can't blend with content behind the transformed parent.

---

## ✅ Solution: Isolation & Hardware Acceleration

### CSS Fix Applied

```css
/* Fix for noise overlay with Locomotive transforms */
.ts-grain {
  isolation: isolate; /* Creates proper stacking context */
}

.ts-grain::before {
  /* Force hardware acceleration on separate layer */
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
```

### How It Works

1. **`isolation: isolate`** on parent creates a new stacking context that properly contains blend modes
2. **`translateZ(0)`** on `::before` forces GPU acceleration without affecting layout
3. **`backface-visibility: hidden`** prevents flickering during animations

### Result
✅ Noise overlay blends correctly  
✅ Locomotive Scroll transforms work  
✅ No visual artifacts  
✅ Smooth animations maintained  

---

## 📦 Optional External Dependencies

### The Question
"Are the script tags in HTML necessary? I requested integration to avoid importing manually."

### The Answer: **External Libraries Are Now Optional!**

The framework now works in **three modes**:

---

## Mode 1: Standalone (No External Libraries)

### HTML
```html
<link rel="stylesheet" href="toolskin.css">
<script src="toolskin.js"></script>
<script>
  Toolskin.init({
    smoothScroll: { enabled: true },    // Uses native smooth scroll
    locomotiveScroll: { enabled: false }, // Disabled
  });
</script>
```

### What You Get
✅ All Toolskin components (tabs, modals, toasts, etc.)  
✅ Native smooth scrolling (browser's `scroll-behavior: smooth`)  
✅ Responsive grid, masonry, forms  
✅ Light/dark themes  
✅ **No external dependencies!**  

### What You Don't Get
❌ Lenis smooth scroll (buttery-smooth inertia)  
❌ Locomotive parallax effects  

---

## Mode 2: With External Libraries (Enhanced)

### HTML
```html
<link rel="stylesheet" href="toolskin.css">

<!-- External libraries -->
<script src="https://unpkg.com/lenis@1.3.18/dist/lenis.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>

<!-- Toolskin -->
<script src="toolskin.js"></script>
<script>
  Toolskin.init({
    smoothScroll: { enabled: true },      // Uses Lenis
    locomotiveScroll: { enabled: true },  // Parallax enabled
  });
</script>
```

### What You Get
✅ Everything from Mode 1  
✅ **Lenis smooth scroll** (professional inertia scrolling)  
✅ **Locomotive parallax** (scroll-driven animations)  
✅ Auto-detection of scroll elements  

---

## Mode 3: Bundled (All-in-One)

### Build Bundle
```powershell
.\build-bundle.ps1
```

### HTML
```html
<link rel="stylesheet" href="toolskin.css">
<script src="toolskin.bundle.js"></script> <!-- Everything included! -->
<script>
  Toolskin.init({ /* config */ });
</script>
```

### What You Get
✅ Everything from Mode 2  
✅ **Single file** - no CDN dependencies  
✅ **Offline capable**  
✅ **Clean HTML**  

---

## Intelligent Fallbacks

The framework automatically detects what's available:

```javascript
// In toolskin.js
if (config.smoothScroll.enabled && typeof Lenis !== 'undefined') {
  // Use Lenis (enhanced)
  this._initLenis();
} else if (config.smoothScroll.enabled) {
  // Fallback to native smooth scroll
  console.warn('Lenis not found. Using native smooth scroll.');
  document.documentElement.style.scrollBehavior = 'smooth';
}
```

### Console Output

**With Lenis:**
```
✓ Lenis smooth scroll initialized
```

**Without Lenis:**
```
⚠ Lenis not found. Install from: https://unpkg.com/...
💡 Falling back to native smooth scroll
```

---

## Recommendation: Which Mode to Use?

### Use **Standalone** (Mode 1) When:
- Building simple websites
- Want zero dependencies
- Need fast loading
- Native smooth scroll is enough
- No parallax effects needed

### Use **With Libraries** (Mode 2) When:
- Want professional smooth scrolling
- Need parallax effects
- Don't mind CDN dependencies
- Development/testing phase

### Use **Bundled** (Mode 3) When:
- Deploying to production
- Want clean HTML
- Need offline capability
- Have stable versions locked

---

## Updated File Structure

```
project/
├── toolskin.css                    # Always required
├── toolskin.js                     # Core framework (works standalone!)
│
├── showcase.html                   # Demo WITHOUT external libs
├── showcase-enhanced.html          # Demo WITH external libs
│
├── build-bundle.ps1               # Bundle builder script
├── toolskin.bundle.js             # Generated bundle (optional)
│
└── Documentation/
    ├── TOOLSKIN_USAGE_GUIDE.md
    ├── BUNDLE_GUIDE.md
    └── NOISE_FIX.md (this file)
```

---

## What Changed in Your Setup

### Before (Required External Scripts)
```html
<!-- HAD to include these -->
<script src="lenis.min.js"></script>
<script src="locomotive.min.js"></script>
<script src="toolskin.js"></script>
```

### After (Optional External Scripts)
```html
<!-- Only toolskin.js required, others optional for enhancements -->
<script src="toolskin.js"></script>

<!-- Optional: Uncomment for enhanced features -->
<!-- <script src="lenis.min.js"></script> -->
<!-- <script src="locomotive.min.js"></script> -->
```

---

## Configuration Examples

### Minimal (No External Libs)
```javascript
Toolskin.init({
  theme: { mode: 'light' },
  layout: { enableNoise: true }
});
```

### Enhanced (With External Libs)
```javascript
Toolskin.init({
  smoothScroll: { enabled: true },     // Requires Lenis
  locomotiveScroll: { enabled: true }, // Requires Locomotive
  theme: { mode: 'dark' },
});
```

### Standalone with Native Smooth
```javascript
Toolskin.init({
  smoothScroll: { enabled: true },     // Uses native if Lenis missing
  locomotiveScroll: { enabled: false }, // Skip parallax
  theme: { mode: 'auto' },
});
```

---

## Noise Overlay Technical Details

### The Transform Problem

Locomotive Scroll applies:
```css
.section {
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.74, 0, 1);
}
```

This creates a **containing block** for fixed/absolute children and a **stacking context** for blend modes.

### Why `isolation: isolate` Works

```css
.ts-grain {
  isolation: isolate;
}
```

Creates a new **isolated stacking context** that:
- Contains the transform layer
- Preserves blend mode hierarchy
- Allows `::before` to blend with background
- Doesn't interfere with Locomotive's transforms

### Why `translateZ(0)` Helps

```css
.ts-grain::before {
  transform: translateZ(0);
}
```

Forces GPU acceleration:
- Moves overlay to its own compositing layer
- Prevents re-paints on scroll
- Smooth 60fps animations
- Hardware-accelerated blending

---

## Testing the Fix

### Test 1: Noise Visible
```html
<section class="ts-grain ts-section">
  Content here
</section>
```
✅ Grain overlay should be visible and blending

### Test 2: With Locomotive
```html
<!-- With data-scroll attributes -->
<section class="ts-grain ts-section" data-scroll>
  Content here
</section>
```
✅ Grain should blend even with transforms applied

### Test 3: Animation
```html
<section class="ts-grain ts-grain-flickered">
  Content here
</section>
```
✅ Grain should animate smoothly without flickering

---

## Summary

### Problem
❌ Locomotive transforms broke `mix-blend-mode`

### Solution  
✅ Added `isolation: isolate` and `translateZ(0)`

### Bonus
✅ Made external libraries **optional**  
✅ Intelligent fallbacks to native features  
✅ Three deployment modes (standalone, enhanced, bundled)  
✅ Clean HTML without forced dependencies  

---

**Your HTML can now be as simple as:**
```html
<link rel="stylesheet" href="toolskin.css">
<script src="toolskin.js"></script>
```

**External libraries are optional enhancements, not requirements!** 🎉

---

**Version**: 2.0.1  
**Date**: March 8, 2026  
**Fix**: Noise overlay + Optional dependencies
