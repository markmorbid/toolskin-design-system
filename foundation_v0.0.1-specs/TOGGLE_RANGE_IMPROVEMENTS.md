# Toggle & Range Slider Improvements

## Summary

This document outlines the improvements made to the `.ts-toggle` and `.ts-range` components in Toolskin CSS, making them fully dynamic and proportionally sized using CSS custom properties.

---

## 🎚️ Toggle Switch Improvements

### Dynamic Sizing System

The toggle switch now uses a **fully variable-based sizing system** that automatically calculates all dimensions proportionally:

```css
--ts-toggle-size: 22px;           /* Base height of toggle */
--ts-toggle-ratio: 1.73;           /* Width ratio (width = size × ratio) */
--ts-toggle-padding: 3px;          /* Internal padding */
--ts-toggle-border-width: 0px;     /* Border width */
```

### Automatic Calculations

All dependent values are **automatically calculated**:

```css
/* Knob size (fits perfectly inside with padding) */
--ts-toggle-knob-size: calc(
  var(--ts-toggle-size) - 
  var(--ts-toggle-padding) * 2 - 
  var(--ts-toggle-border-width) * 2
);

/* Travel distance (how far the knob moves) */
--ts-toggle-travel: calc(
  var(--ts-toggle-size) * var(--ts-toggle-ratio) - 
  var(--ts-toggle-knob-size) - 
  var(--ts-toggle-padding) * 2 - 
  var(--ts-toggle-border-width) * 2
);
```

### Size Variants

Three additional size variants are now available:

- **`.ts-toggle--sm`** - 18px height (compact)
- **`.ts-toggle--lg`** - 28px height (prominent)
- **`.ts-toggle--xl`** - 36px height (extra large)

**Default size**: 22px height

### Customizable Colors

All colors are controlled via CSS variables:

```css
--ts-toggle-bg: var(--ts-border-1);              /* Background (unchecked) */
--ts-toggle-bg-active: var(--ts-accent);         /* Background (checked) */
--ts-toggle-knob-bg: #ffffff;                    /* Knob color (unchecked) */
--ts-toggle-knob-bg-active: #ffffff;             /* Knob color (checked) */
--ts-toggle-border: var(--ts-input-border);      /* Border color */
```

### Usage Examples

```html
<!-- Standard toggle -->
<label class="ts-toggle">
  <input type="checkbox" />
  <span class="ts-toggle__knob"></span>
</label>

<!-- Small toggle -->
<label class="ts-toggle ts-toggle--sm">
  <input type="checkbox" checked />
  <span class="ts-toggle__knob"></span>
</label>

<!-- Large toggle -->
<label class="ts-toggle ts-toggle--lg">
  <input type="checkbox" />
  <span class="ts-toggle__knob"></span>
</label>

<!-- Extra large toggle -->
<label class="ts-toggle ts-toggle--xl">
  <input type="checkbox" checked />
  <span class="ts-toggle__knob"></span>
</label>
```

---

## 🎛️ Range Slider Improvements

### Dynamic Gradient Fill

The range slider now features a **gradient fill that accurately tracks the slider value** in real-time.

### Key Features

1. **Accurate gradient positioning** - The filled portion precisely matches the thumb position
2. **Browser compatibility** - Works in both Webkit (Chrome/Safari/Edge) and Firefox
3. **Dynamic value tracking** - Updates via CSS custom properties
4. **Smooth animations** - Thumb scales and glows on hover/focus
5. **Size variants** - Small and large options available

### CSS Variables

```css
/* Sizing */
--ts-slider-height: 12px;                        /* Track height */
--ts-slider-thumb-size: calc(height × 1.5);      /* Thumb size (auto-calculated) */
--ts-slider-radius: calc(height / 2);            /* Border radius (auto-calculated) */

/* Colors */
--ts-slider-accent: var(--ts-accent);            /* Primary color */
--ts-slider-accent-darker: color-mix(...);       /* Darker shade (auto-calculated) */
--ts-slider-bg: var(--ts-border-0);              /* Track background */
--ts-slider-border: var(--ts-input-border);      /* Border color */

/* Value tracking (set via JavaScript) */
--ts-range-val: 50;                              /* Current value */
--ts-range-min: 0;                               /* Minimum value */
--ts-range-max: 100;                             /* Maximum value */
--ts-range-percent: calc(...);                   /* Percentage (auto-calculated) */
```

### JavaScript Integration

The range slider requires minimal JavaScript to update the gradient fill:

```javascript
function updateRangeSlider(rangeInput) {
  const min = parseFloat(rangeInput.min) || 0;
  const max = parseFloat(rangeInput.max) || 100;
  const value = parseFloat(rangeInput.value) || 0;
  const percent = ((value - min) / (max - min)) * 100;
  
  // Update CSS variables
  rangeInput.style.setProperty('--ts-range-val', value);
  rangeInput.style.setProperty('--ts-range-min', min);
  rangeInput.style.setProperty('--ts-range-max', max);
  rangeInput.style.setProperty('--ts-range-percent', percent + '%');
  
  // Update display value
  const valueDisplay = rangeInput.nextElementSibling;
  if (valueDisplay && valueDisplay.classList.contains('ts-range-val')) {
    const unit = rangeInput.dataset.unit || '';
    valueDisplay.textContent = value + unit;
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('input[type="range"].ts-range').forEach(slider => {
    updateRangeSlider(slider);
    slider.addEventListener('input', () => updateRangeSlider(slider));
  });
});
```

### Size Variants

- **`.ts-range--sm`** - 8px track height
- **Default** - 12px track height
- **`.ts-range--lg`** - 16px track height

### Usage Examples

```html
<!-- Standard range slider -->
<div class="ts-range-row">
  <input type="range" class="ts-range" min="0" max="100" value="50" data-unit="%" />
  <span class="ts-range-val">50%</span>
</div>

<!-- Small range slider -->
<div class="ts-range-row">
  <input type="range" class="ts-range ts-range--sm" min="0" max="100" value="35" data-unit="px" />
  <span class="ts-range-val">35px</span>
</div>

<!-- Large range slider -->
<div class="ts-range-row">
  <input type="range" class="ts-range ts-range--lg" min="0" max="200" value="150" />
  <span class="ts-range-val">150</span>
</div>
```

---

## Benefits

### For Toggles

✅ **Fully proportional** - Change one variable, everything adjusts  
✅ **No magic numbers** - All calculations are explicit and understandable  
✅ **Easy customization** - Override variables for custom sizes  
✅ **Consistent spacing** - Knob always fits perfectly inside  
✅ **Size variants** - 4 pre-configured sizes ready to use  

### For Range Sliders

✅ **Accurate gradient fill** - Visual feedback matches value precisely  
✅ **Cross-browser compatible** - Works in all modern browsers  
✅ **Smooth interactions** - Hover and focus states with smooth transitions  
✅ **Flexible sizing** - Easy to resize with CSS variables  
✅ **Unit agnostic** - Display any unit (%, px, ms, etc.)  

---

## Files Modified

- **`toolskin.css`** - Updated toggle and range slider styles
- **`showcase.html`** - Added examples and JavaScript for dynamic updates
- **`TOGGLE_RANGE_IMPROVEMENTS.md`** - This documentation

---

## Customization Examples

### Custom Toggle Size

```css
.ts-toggle--custom {
  --ts-toggle-size: 30px;
  --ts-toggle-ratio: 2;
  --ts-toggle-padding: 4px;
}
```

### Custom Range Colors

```css
.ts-range--danger {
  --ts-slider-accent: var(--ts-danger);
}

.ts-range--success {
  --ts-slider-accent: var(--ts-success);
}
```

### Larger Track

```css
.ts-range--thick {
  --ts-slider-height: 20px;
}
```

---

## Technical Notes

### Toggle Switch
- Uses `transform: translateX()` for smooth knob animation
- Border radius is automatically calculated to maintain perfect circles
- Disabled state uses `opacity: 0.4` for consistency
- Spring easing (`--ts-ease-spring`) for satisfying feel

### Range Slider
- Webkit browsers use `::-webkit-slider-runnable-track` with gradient background
- Firefox uses `::-moz-range-progress` for native fill support
- CSS custom properties are updated via JavaScript for dynamic gradient
- Thumb offset is automatically calculated to center it on the track
- Border prevents visual glitches at edges

---

## Browser Compatibility

- ✅ Chrome/Edge (Chromium) - Full support
- ✅ Firefox - Full support (uses `-moz-range-progress`)
- ✅ Safari - Full support
- ⚠️ Older browsers - Graceful degradation (solid color track)

---

**Version**: 1.0  
**Date**: March 8, 2026  
**Framework**: Toolskin CSS Design System
