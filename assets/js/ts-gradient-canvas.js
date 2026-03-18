/*!
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  TOOLSKIN  ·  Gradient Canvas  ·  ts-gradient-canvas.js         ║
 * ║  Isolated mesh gradient animation for hero backgrounds.         ║
 * ║  Adapted from cthdrl.co gradient — zero external dependencies.  ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * USAGE:
 *   // Auto-init (reads Toolskin accent color automatically):
 *   <script src="assets/js/ts-gradient-canvas.js" defer></script>
 *
 *   // Manual init with options:
 *   const gradient = new TSGradientCanvas({
 *     containerId: 'top',           // ID of the container (absolute) or null (fixed bg)
 *     speed: 0.1,                   // Animation speed
 *     theme: 'dark',                // 'dark' | 'light'
 *     accentColors: null,           // Auto-read from --ts-accent if null
 *   });
 *
 * NO DEPENDENCIES (optional GSAP for fade-in, falls back to CSS).
 * Reads --ts-accent from :root and generates gradient palettes.
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════════
   COLOR UTILITIES
   ═══════════════════════════════════════════════════════════════════ */

class TSColorUtil {
  /** Parse any CSS color string into {r, g, b} (0-255) */
  static parse(color) {
    const el = document.createElement('div');
    el.style.color = color;
    document.body.appendChild(el);
    const computed = getComputedStyle(el).color;
    document.body.removeChild(el);

    const m = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (m) return { r: +m[1], g: +m[2], b: +m[3] };
    return { r: 0, g: 0, b: 0 };
  }

  /** Convert {r,g,b} to hex string */
  static toHex({ r, g, b }) {
    return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
  }

  /** Darken a color by a factor (0-1) */
  static darken({ r, g, b }, factor) {
    return {
      r: Math.round(r * (1 - factor)),
      g: Math.round(g * (1 - factor)),
      b: Math.round(b * (1 - factor)),
    };
  }

  /** Lighten a color by a factor (0-1) */
  static lighten({ r, g, b }, factor) {
    return {
      r: Math.round(r + (255 - r) * factor),
      g: Math.round(g + (255 - g) * factor),
      b: Math.round(b + (255 - b) * factor),
    };
  }

  /** Generate dark-mode palette from accent color */
  static darkPalette(accent) {
    const rgb = typeof accent === 'string' ? this.parse(accent) : accent;
    return [
      // Circle 0: main accent gradient
      [this.toHex(rgb), this.toHex(this.darken(rgb, 0.5)), this.toHex(this.darken(rgb, 0.85))],
      // Circle 1: dark shadow circles
      ['#000000', this.toHex(this.darken(rgb, 0.95)), this.toHex(this.darken(rgb, 0.9))],
      // Circle 2: secondary accent gradient
      [this.toHex(rgb), this.toHex(this.darken(rgb, 0.5)), this.toHex(this.darken(rgb, 0.85))],
    ];
  }

  /** Generate light-mode palette from accent color */
  static lightPalette(accent) {
    const rgb = typeof accent === 'string' ? this.parse(accent) : accent;
    return [
      [this.toHex(this.lighten(rgb, 0.5)), this.toHex(this.lighten(rgb, 0.7)), '#FFFFFF'],
      [this.toHex(this.lighten(rgb, 0.6)), '#CCCCCC', '#CCCCCC'],
      [this.toHex(this.lighten(rgb, 0.5)), this.toHex(this.lighten(rgb, 0.5)), '#FFFFFF'],
    ];
  }
}

/* ═══════════════════════════════════════════════════════════════════
   CLOCK  — minimal performance.now() delta tracker
   ═══════════════════════════════════════════════════════════════════ */

class TSClock {
  constructor() {
    this.running = false;
    this.startTime = 0;
    this.oldTime = 0;
    this.elapsedTime = 0;
  }

  start() {
    this.startTime = performance.now();
    this.oldTime = this.startTime;
    this.elapsedTime = 0;
    this.running = true;
  }

  getDelta() {
    if (!this.running) {
      this.start();
      return 0;
    }
    const now = performance.now();
    const diff = (now - this.oldTime) / 1000;
    this.oldTime = now;
    this.elapsedTime += diff;
    return diff;
  }
}

/* ═══════════════════════════════════════════════════════════════════
   GRADIENT CIRCLE  — single radial gradient blob
   ═══════════════════════════════════════════════════════════════════ */

class TSGradientCircle {
  constructor(id, opts = {}) {
    this.id = id;
    this.gradientStops = opts.gradientStops || [0, 0.44, 1];
    this.radius = opts.radius || 0.65;
    this.colors = opts.colors || ['#008580', '#01534F', '#012622'];
    this.alphas = opts.alphas || [1, 0.7, 0];
    this.scale = opts.scale || { x: 1, y: 1 };
    this.rotation = opts.rotation || 0;
    this.time = 0;
    this.motionRadius = 0.5;
    this._animating = false;
  }

  draw(ctx, time, w, h) {
    const cx = w * 0.5;
    const cy = h * 0.5;
    const minDim = Math.min(w, h);
    const angle = (this.id / 3) * Math.PI * 2;

    let motionDist = this.motionRadius * minDim;
    const halfMotion = motionDist / 2;

    // Circle 1 oscillates
    if (this.id === 1) {
      motionDist = this._lerp(-halfMotion, halfMotion, Math.sin(time * 2) * 0.5 + 0.5);
    }

    const px = cx + Math.cos(angle + time) * motionDist;
    const py = cy + Math.sin(angle + time) * motionDist;
    const r = this.radius * minDim;

    const grad = ctx.createRadialGradient(px, py, 0, px, py, r);
    this.gradientStops.forEach((stop, i) => {
      const c = this.colors[i];
      const a = this.alphas[i];
      grad.addColorStop(stop, this._hexToRgba(c, a));
    });

    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(this.rotation);
    ctx.scale(this.scale.x, this.scale.y);
    ctx.translate(-px, -py);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(px, py, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  /** Start a slow time animation (self-contained, no GSAP needed) */
  playAnimation(delay = Math.random() + 0.5) {
    if (this._animating) return;
    this._animating = true;
    const duration = 10000; // 10s cycle
    const startTime = performance.now() + delay * 1000;

    const tick = () => {
      if (!this._animating) return;
      const now = performance.now();
      if (now < startTime) {
        requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startTime;
      this.time = (elapsed / duration) % 1;
      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        this._animating = false;
        this.playAnimation(Math.random() + 0.5);
      }
    };
    requestAnimationFrame(tick);
  }

  stopAnimation() {
    this._animating = false;
  }

  _lerp(a, b, t) {
    return (1 - t) * a + t * b;
  }

  _hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}

/* ═══════════════════════════════════════════════════════════════════
   GRADIENT CANVAS  — main controller
   ═══════════════════════════════════════════════════════════════════ */

class TSGradientCanvas {
  /** @param {Object} opts Configuration options */
  constructor(opts = {}) {
    this.opts = Object.assign({
      containerId: null,          // ID of container element (absolute positioning)
      speed: 0.1,                 // Animation speed multiplier
      theme: 'dark',              // 'dark' | 'light'
      accentColors: null,         // Override palette (array of 3 color arrays)
      background: null,           // Override background color
      fadeIn: true,               // Fade canvas in on load
      fadeDuration: 2,            // Fade-in duration (seconds)
    }, opts);

    this.canvas = null;
    this.ctx = null;
    this.dpi = Math.min(window.devicePixelRatio || 1, 2);
    this.time = 0;
    this.clock = new TSClock();
    this.circles = [];
    this.lowPower = false;
    this.lastWidth = 0;
    this.lastHeight = 0;
    this._resizeTimeout = null;
    this._running = false;

    // Read accent color from Toolskin CSS variables
    this._accent = this._readAccent();

    this._init();
  }

  /* ─── Private Methods ─────────────────────────────────────────────── */

  _readAccent() {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue('--ts-accent').trim();
    return raw || '#ff6432'; // Toolskin default accent
  }

  _getBackground() {
    if (this.opts.background) return this.opts.background;
    return this.opts.theme === 'dark' ? '#09090b' : '#ffffff';
  }

  _getPalette() {
    if (this.opts.accentColors) return this.opts.accentColors;
    return this.opts.theme === 'dark'
      ? TSColorUtil.darkPalette(this._accent)
      : TSColorUtil.lightPalette(this._accent);
  }

  _init() {
    // Create canvas element
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'ts-gradient-canvas';
    this.ctx = this.canvas.getContext('2d');

    // Position canvas
    const container = this.opts.containerId
      ? document.getElementById(this.opts.containerId)
      : null;

    if (container) {
      // Absolute within container
      const pos = getComputedStyle(container).position;
      if (pos === 'static') container.style.position = 'relative';

      Object.assign(this.canvas.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '0',
        pointerEvents: 'none',
      });
      container.insertBefore(this.canvas, container.firstChild);
    } else {
      // Fixed full-viewport background
      Object.assign(this.canvas.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        pointerEvents: 'none',
      });
      document.body.appendChild(this.canvas);
    }

    // Fade in
    if (this.opts.fadeIn) {
      this.canvas.style.opacity = '0';
      this.canvas.style.transition = `opacity ${this.opts.fadeDuration}s ease`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.canvas.style.opacity = '1';
        });
      });
    }

    // Create gradient circles
    const palette = this._getPalette();
    const circleConfigs = [
      { radius: 1, rotation: 50, colors: palette[0] },
      { radius: 1, rotation: 0, colors: palette[1] },
      { radius: 1, rotation: 0, colors: palette[2] },
    ];

    circleConfigs.forEach((cfg, i) => {
      const circle = new TSGradientCircle(i, {
        gradientStops: [0, 0.44, 1],
        radius: cfg.radius,
        colors: cfg.colors,
        alphas: [1, 0.7, 0],
        scale: { x: 1, y: 1 },
        rotation: cfg.rotation,
      });
      circle.playAnimation();
      this.circles.push(circle);
    });

    // Battery check
    this._checkBattery();

    // Events
    this._onResize = this._onResize.bind(this);
    window.addEventListener('resize', this._onResize);
    this._resize();

    // Listen for Toolskin theme changes
    this._onThemeChange = this._onThemeChange.bind(this);
    document.addEventListener('ts:theme', this._onThemeChange);

    // Listen for Toolskin accent changes (custom event)
    document.addEventListener('ts:accent', () => {
      this._accent = this._readAccent();
      this._applyPalette();
    });

    // Start render loop
    this._running = true;
    this._render();
  }

  _onThemeChange(e) {
    if (e && e.detail && e.detail.theme) {
      this.opts.theme = e.detail.theme;
    } else {
      // Detect from data-theme attribute
      const theme = document.documentElement.getAttribute('data-theme');
      if (theme) this.opts.theme = theme;
    }
    this._applyPalette();
  }

  _applyPalette() {
    const palette = this._getPalette();
    this.circles.forEach((circle, i) => {
      if (palette[i]) circle.colors = palette[i];
    });
  }

  async _checkBattery() {
    try {
      if (!navigator.getBattery) return;
      const battery = await navigator.getBattery();
      this.lowPower = battery.level < 0.3 && !battery.charging;
      battery.addEventListener('levelchange', () => {
        this.lowPower = battery.level < 0.3 && !battery.charging;
      });
    } catch (e) {
      // Battery API not available — fine
    }
  }

  _render() {
    if (!this._running || !this.ctx) return;

    if (!this.lowPower) {
      requestAnimationFrame(() => this._render());
    }

    this.time += this.clock.getDelta() * this.opts.speed;

    const w = this.canvas.width / this.dpi;
    const h = this.canvas.height / this.dpi;

    this.ctx.clearRect(0, 0, w, h);
    this.ctx.fillStyle = this._getBackground();
    this.ctx.fillRect(0, 0, w, h);

    this.ctx.save();
    this.circles.forEach(circle => circle.draw(this.ctx, this.time, w, h));
    this.ctx.restore();
  }

  _onResize() {
    clearTimeout(this._resizeTimeout);
    this._resizeTimeout = setTimeout(() => {
      requestAnimationFrame(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        if (this.lastWidth !== w || this.lastHeight !== h) {
          this.lastWidth = w;
          this.lastHeight = h;
          this._resize();
        }
      });
    }, 100);
  }

  _resize() {
    const container = this.opts.containerId
      ? document.getElementById(this.opts.containerId)
      : null;

    const w = container ? container.clientWidth : window.innerWidth;
    const h = container ? container.clientHeight : window.innerHeight;

    this.canvas.width = w * this.dpi;
    this.canvas.height = h * this.dpi;
    this.canvas.style.width = w + 'px';
    this.canvas.style.height = h + 'px';

    if (this.ctx) {
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.scale(this.dpi, this.dpi);
    }

    // Re-render once on low-power mode
    if (this.lowPower) this._render();
  }

  /* ─── Public API ──────────────────────────────────────────────────── */

  /** Update the theme and palette */
  setTheme(theme) {
    this.opts.theme = theme;
    this._applyPalette();
  }

  /** Set a custom accent color */
  setAccent(color) {
    this._accent = color;
    this._applyPalette();
  }

  /** Set custom color palette directly */
  setPalette(palette) {
    this.opts.accentColors = palette;
    this._applyPalette();
  }

  /** Pause the animation */
  pause() {
    this._running = false;
    this.circles.forEach(c => c.stopAnimation());
  }

  /** Resume the animation */
  resume() {
    if (this._running) return;
    this._running = true;
    this.circles.forEach(c => c.playAnimation());
    this._render();
  }

  /** Clean up and remove */
  dispose() {
    this._running = false;
    this.circles.forEach(c => c.stopAnimation());
    window.removeEventListener('resize', this._onResize);
    document.removeEventListener('ts:theme', this._onThemeChange);
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    this.canvas = null;
    this.ctx = null;
  }
}

/* ═══════════════════════════════════════════════════════════════════
   AUTO-INIT
   If a container with class "gradient-canvas" exists, auto-initialize.
   ═══════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.gradient-canvas');
  if (!target) return;

  // Read theme from data-theme or default
  const theme = document.documentElement.getAttribute('data-theme') || 'dark';

  window.tsGradient = new TSGradientCanvas({
    containerId: target.id || null,
    speed: 0.1,
    theme: theme,
    fadeIn: true,
    fadeDuration: 2.5,
  });
});
