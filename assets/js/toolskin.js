/*!
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  TOOLSKIN  ·  UI Framework  ·  toolskin.js  ·  v2.0.0          ║
 * ║  Integrated Lenis + Locomotive Scroll. Class-based modules.     ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * MODULES
 * ───────────────────────────────────────────────────────────────────
 *  ToolskinTabs         — tab switching (.ts-tab / .ts-tab-pane)
 *  ToolskinModal        — open/close modals + backdrop
 *  ToolskinToast        — programmatic toast notifications
 *  ToolskinToggle       — collapse/expand panels and sections
 *  ToolskinObserver     — IntersectionObserver for scroll animations
 *  ToolskinIcons        — inject FontAwesome/Ionicons via data-icon
 *  ToolskinTheme        — dark/light theme switcher with auto-convert
 *  ToolskinSmooth       — Lenis smooth scroll integration
 *  ToolskinLocomotive   — Locomotive Scroll parallax integration
 *  ToolskinConfig       — centralized configuration system
 *  Toolskin.init()      — initialize all modules with config
 * ───────────────────────────────────────────────────────────────────
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════════
   CONFIGURATION MODULE
   Centralized configuration with defaults and validation.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinConfig {
  static defaults = {
    // Smooth scroll settings (Lenis)
    smoothScroll: {
      enabled: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      allowNestedScroll: true,  // Auto-detect inner scrollable elements
    },

    // Locomotive Scroll parallax settings
    locomotiveScroll: {
      enabled: false,              // Disabled by default (conflicts with fade animations)
      selectors: '',               // Only apply to manually tagged elements
      speeds: [0.3, 0.5, 0.7],     // Random speed pool
      autoDetect: false,           // Don't auto-apply (prevents layout breaks)
    },

    // Theme settings
    theme: {
      mode: 'dark', // 'dark' | 'light' | 'auto'
      enableToggle: true,
      savePreference: true,
      storageKey: 'ts-theme-mode',
    },

    // Layout settings
    layout: {
      containerMaxWidth: '1400px', // Max width for .ts-container
      contentMaxWidth: '1200px', // Max width for content-focused layouts
      enableNoise: true, // Global grain/noise overlay
      noiseOpacity: 1, // 0-1
      fullpage: false, // Fullpage snap scrolling
      elasticMode: false, // Brutalist full-width mode
    },

    // Custom cursor
    cursor: {
      enabled: true,
      mode: 'simple',          // 'simple' | 'tooltip' — simple = circle only, tooltip = full featured
      size: 20,
      grow: 3,
      easing: 0.2,             // Lerp factor for cursor following mouse (0–1, higher = snappier)
      followerEasing: 0.12,    // Lerp factor for follower trailing cursor (0–1, higher = tighter)
      follower: true,          // Show follower circle (::before)
      label: true,             // Show labels on hover (tooltip mode only)
      arrow: true,             // Show directional arrow on active (tooltip mode only)
      smartPosition: true,     // Reposition near active elements (tooltip mode only)
    },

    // Range sliders
    rangeSliders: {
      autoInit: true,
    },

    // Grid background (interactive mouse-parallax dots + lines + gradient)
    gridBg: {
      enabled: true,
      selector: '.grid-bg.interactive',

      // Parallax mouse impact
      impactLayer1: 40,        // Outer dots — subtle
      impactLayer2: 20,        // Inner dots — stronger
      easing: 0.08,            // Lerp smoothness (0–1, lower = smoother trail)

      // Grid lines
      gridWidth: 40,           // px — horizontal cell width
      gridHeight: null,        // px — vertical cell height (null = same as gridWidth)
      lineColor: null,         // CSS color (null = uses --ts-border-1)
      lineOpacity: 0.45,       // 0–1

      // Dots
      dotColor: null,          // CSS color (null = uses --ts-accent)
      dotSize: 2,              // px
      dotSpeed: 50,            // seconds per cycle
      dotGap: 2.5,             // multiplier of grid size

      // Gradient glow
      gradientOpacity: 0.3,    // 0–1 — accent glow strength
      gradientPosition: 'bottom left',  // CSS position

      // Noise (ts-grain)
      noise: true,             // combine noise grain
      noiseOpacity: 0.6,       // 0–1 when combined with grid
    },

    // Scroll reveal animations
    reveal: {
      enabled: true,
      useGSAP: true,              // Use GSAP ScrollTrigger if available (falls back to IntersectionObserver)
      autoReveal: true,           // Auto-apply animations to matched selectors
      selectors: '.ts-card, .ts-panel, .demo-card, .ts-pricing-card',
      defaultAnimation: 'ts-fade-up',
      stagger: 0.08,              // GSAP stagger delay between auto-revealed siblings
      threshold: 0.1,             // IntersectionObserver threshold (fallback)
      rootMargin: '0px 0px -60px 0px',  // IntersectionObserver rootMargin (fallback)
    },
  };

  static current = {};

  static init(userConfig = {}) {
    this.current = this.deepMerge(this.defaults, userConfig);
    return this.current;
  }

  static deepMerge(target, source) {
    const output = Object.assign({}, target);
    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach(key => {
        if (this.isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] });
          } else {
            output[key] = this.deepMerge(target[key], source[key]);
          }
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }

  static isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  }
}


/* ═══════════════════════════════════════════════════════════════════
   THEME MODULE (Dark/Light with Auto-Conversion)
   Manages theme switching between dark and light modes with automatic
   CSS variable conversion.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinTheme {
  constructor(config) {
    this.config = config;
    this.root = document.documentElement;
    this.currentMode = this.config.mode;

    // Store original dark theme values
    this.darkTheme = {
      'ts-bg-body': '#09090b',
      'ts-bg-0': '#0c0c0f',
      'ts-bg-1': '#111115',
      'ts-bg-2': '#18181d',
      'ts-bg-3': '#1f1f26',
      'ts-bg-4': '#26262f',
      'ts-bg-5': '#2e2e38',
      'ts-text-primary': '#f0f0f4',
      'ts-text-secondary': '#8888a0',
      'ts-text-muted': '#50505e',
    };

    // Light theme — tuned for contrast & legibility
    this.lightTheme = {
      'ts-bg-body': '#f4f4f5',       // warmer off-white page
      'ts-bg-0': '#ffffff',           // pure white cards
      'ts-bg-1': '#f7f7f8',           // subtle lift
      'ts-bg-2': '#ededf0',           // input bg, alt surface
      'ts-bg-3': '#e0e0e5',           // hover surface
      'ts-bg-4': '#cbcbd3',           // scrollbar / muted controls
      'ts-bg-5': '#b5b5c0',           // highest elevation
      'ts-text-primary': '#111113',   // near-black — maximum readability
      'ts-text-secondary': '#3e3e4a', // darker than before (was #52525b)
      'ts-text-muted': '#71717a',     // still readable on white (WCAG AA)
    };

    this._init();
  }

  _init() {
    // Load saved preference
    if (this.config.savePreference) {
      const saved = localStorage.getItem(this.config.storageKey);
      if (saved) this.currentMode = saved;
    }

    // Handle auto mode
    if (this.currentMode === 'auto') {
      this.currentMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Apply theme
    this.setMode(this.currentMode, false);

    // Setup toggle if enabled
    if (this.config.enableToggle) {
      this._setupToggle();
    }

    // Listen for system theme changes in auto mode
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (this.config.mode === 'auto') {
        this.setMode(e.matches ? 'dark' : 'light');
      }
    });
  }

  setMode(mode, save = true) {
    this.currentMode = mode;
    const theme = mode === 'light' ? this.lightTheme : this.darkTheme;

    // Apply theme variables
    Object.entries(theme).forEach(([key, value]) => {
      this.root.style.setProperty(`--${key}`, value);
    });

    // Update data attribute for CSS targeting
    this.root.setAttribute('data-theme', mode);
    this.root.setAttribute('data-ts-theme', mode);

    // Save preference
    if (save && this.config.savePreference) {
      localStorage.setItem(this.config.storageKey, mode);
    }

    // Dispatch event
    window.dispatchEvent(new CustomEvent('ts:theme-change', { detail: { mode } }));
  }

  toggle() {
    const newMode = this.currentMode === 'dark' ? 'light' : 'dark';
    this.setMode(newMode);
  }

  _setupToggle() {
    // Auto-bind theme toggle buttons
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-theme-toggle]');
      if (btn) {
        e.preventDefault();
        this.toggle();
      }
    });
  }

  // Accent color controls
  static setAccent(h, s, l) {
    document.documentElement.style.setProperty('--ts-accent-h', h);
    document.documentElement.style.setProperty('--ts-accent-s', s);
    document.documentElement.style.setProperty('--ts-accent-l', l);
  }

  static setAccentHex(hex) {
    const [r, g, b] = hex.match(/\w\w/g).map(h => parseInt(h, 16) / 255);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }

    this.setAccent(
      Math.round(h * 360),
      `${Math.round(s * 100)}%`,
      `${Math.round(l * 100)}%`
    );
  }

  static setRadius(px) {
    document.documentElement.style.setProperty('--ts-radius-base', `${px}px`);
  }

  static setFont(family) {
    document.documentElement.style.setProperty('--ts-font-body', family);
    document.documentElement.style.setProperty('--ts-font-display', family);
  }
}


/* ═══════════════════════════════════════════════════════════════════
   SMOOTH SCROLL MODULE (Lenis Integration)
   Integrated smooth scrolling with anchor link support.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinSmooth {
  constructor(config) {
    this.config = config;
    this.lenis = null;

    if (this.config.enabled && typeof Lenis !== 'undefined') {
      this._init();
    }
  }

  _init() {
    // Initialize Lenis with built-in nested scroll support
    this.lenis = new Lenis({
      duration: this.config.duration,
      easing: this.config.easing,
      smoothWheel: this.config.smoothWheel,
      smoothTouch: this.config.smoothTouch,
      touchMultiplier: this.config.touchMultiplier,

      // ── Nested scroll containment (Lenis native API) ──────────
      // allowNestedScroll: auto-detects overflow:auto/scroll children
      //   and hands off scroll when they CAN scroll in that direction.
      allowNestedScroll: this.config.allowNestedScroll !== false,

      // prevent: called for each node in the event's composedPath.
      //   Returning true tells Lenis to COMPLETELY ignore the event —
      //   native scroll handles the inner element exclusively.
      //   Combined with CSS overscroll-behavior:contain this also
      //   locks scroll at the inner element's boundaries (no page
      //   scroll chaining). Zero data-attributes, zero patches.
      prevent: (node) => {
        if (node === document.documentElement || node === document.body) return false;
        // Respect the manual attribute too
        if (node.hasAttribute?.('data-lenis-prevent')) return true;
        // Auto-detect any scrollable container
        const { overflowY, overflowX } = getComputedStyle(node);
        if ((overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight + 1) return true;
        if ((overflowX === 'auto' || overflowX === 'scroll') && node.scrollWidth > node.clientWidth + 1) return true;
        return false;
      },
    });

    // Sync with GSAP ScrollTrigger if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      this.lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        this.lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      // Fallback: standard RAF loop when GSAP not available
      const raf = (time) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }

    // Anchor link smooth scroll
    this._setupAnchorLinks();

    // Active navigation on scroll
    this._setupScrollSpy();

    // Expose to window
    window.lenis = this.lenis;
  }

  _setupAnchorLinks() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (href === '#' || href === '#!') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // Get fixed header height for offset
      const fixedHeader = document.querySelector('.ts-nav-fixed, [data-fixed-header]');
      const headerOffset = fixedHeader ? fixedHeader.offsetHeight : 0;

      // Smooth scroll to target with header offset
      this.lenis.scrollTo(target, {
        offset: -headerOffset,
        duration: this.config.duration,
      });

      // Update URL without jumping
      if (history.pushState) {
        history.pushState(null, null, href);
      } else {
        location.hash = href;
      }
    });
  }

  _setupScrollSpy() {
    // Get all sections with IDs
    const sections = document.querySelectorAll('section[id], [id][data-scroll-section]');
    if (sections.length === 0) return;

    // Get fixed header height
    const getHeaderOffset = () => {
      const fixedHeader = document.querySelector('.ts-nav-fixed, [data-fixed-header]');
      return fixedHeader ? fixedHeader.offsetHeight : 0;
    };

    // Update active navigation on scroll
    const updateActiveNav = () => {
      const scrollPosition = window.scrollY + getHeaderOffset() + 10; // Small buffer

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (!sectionId) return;

        // Check if section is in viewport
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active from all nav links
          document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.classList.remove('active', 'ts-active');
          });

          // Add active to current section link
          const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active', 'ts-active');
          }
        }
      });
    };

    // Run on scroll (throttled)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveNav, 50);
    }, { passive: true });

    // Run once on load
    updateActiveNav();
  }

  scrollTo(target, options = {}) {
    if (this.lenis) {
      this.lenis.scrollTo(target, options);
    }
  }

  stop() {
    if (this.lenis) this.lenis.stop();
  }

  start() {
    if (this.lenis) this.lenis.start();
  }
}


/* ═══════════════════════════════════════════════════════════════════
   LOCOMOTIVE SCROLL MODULE (Parallax Integration)
   Auto-applies data-scroll attributes based on configuration.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinLocomotive {
  constructor(config) {
    this.config = config;
    this.locomotive = null;

    if (this.config.enabled && typeof LocomotiveScroll !== 'undefined') {
      this._init();
    }
  }

  _init() {
    // Auto-apply data-scroll attributes if enabled
    if (this.config.autoDetect) {
      this._autoApplyScrollAttributes();
    }

    // Initialize Locomotive Scroll
    this.locomotive = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }
    });

    // Expose to window
    window.locomotiveScroll = this.locomotive;
  }

  _autoApplyScrollAttributes() {
    const selectors = this.config.selectors;

    // If no selectors, skip auto-apply
    if (!selectors || selectors.trim() === '') {
      return;
    }

    const speeds = this.config.speeds;

    // Parse selectors
    const selectorList = typeof selectors === 'string'
      ? selectors.split(',').map(s => s.trim())
      : selectors;

    // Apply to each matching element
    selectorList.forEach(selector => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((el, index) => {
        // Skip if already has data-scroll or marked to skip
        if (el.hasAttribute('data-scroll') ||
          el.hasAttribute('data-ts-scroll-skip') ||
          el.classList.contains('ts-grain') ||
          el.classList.contains('ts-fade-up') ||
          el.classList.contains('ts-fade-in')) {
          return;
        }

        // Apply data-scroll
        el.setAttribute('data-scroll', '');

        // Apply random speed from pool
        const speed = speeds[index % speeds.length];
        el.setAttribute('data-scroll-speed', speed);
      });
    });
  }

  refresh() {
    if (this.locomotive) {
      this.locomotive.update();
    }
  }

  scrollTo(target, options = {}) {
    if (this.locomotive) {
      this.locomotive.scrollTo(target, options);
    }
  }
}


/* ═══════════════════════════════════════════════════════════════════
   TABS MODULE
   Handles .ts-tab activation and .ts-tab-pane visibility.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinTabs {
  constructor(root) {
    this.root = root;
    this.tabs = [...root.querySelectorAll('.ts-tab')];
    this.group = root.dataset.tabGroup || root.closest('[data-tab-group]')?.dataset.tabGroup;
    this._bind();
  }

  _bind() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => this.activate(tab));
    });
  }

  activate(tabOrId) {
    const tab = (typeof tabOrId === 'string')
      ? this.tabs.find(t => t.dataset.tab === tabOrId)
      : tabOrId;

    if (!tab) return;

    const targetId = tab.dataset.tab;
    const scope = this.group
      ? document
      : (this.root.closest('.ts-card, .ts-panel, .ts-modal, [data-tab-scope]') || document);

    // Deactivate all tabs in this group
    this.tabs.forEach(t => t.classList.remove('ts-tab--active'));
    tab.classList.add('ts-tab--active');

    // Deactivate all panes
    scope.querySelectorAll('.ts-tab-pane').forEach(pane => {
      pane.classList.remove('ts-tab-pane--active');
      pane.removeAttribute('data-active');
    });

    // Activate target pane
    const pane = scope.querySelector(`#${targetId}, [data-pane="${targetId}"]`);
    if (pane) {
      pane.classList.add('ts-tab-pane--active');
      pane.setAttribute('data-active', '');
    }

    tab.dispatchEvent(new CustomEvent('ts:tab-change', { bubbles: true, detail: { id: targetId } }));
  }
}


/* ═══════════════════════════════════════════════════════════════════
   MODAL MODULE
   Controls .ts-overlay + .ts-modal open/close.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinModal {
  constructor() {
    this._activeStack = [];
    this._bind();
  }

  _bind() {
    // Open triggers
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-modal-open]');
      if (btn) {
        e.preventDefault();
        this.open(btn.dataset.modalOpen);
      }
    });

    // Close triggers
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-modal-close]');
      if (btn) {
        e.preventDefault();
        const overlay = btn.closest('.ts-overlay');
        if (overlay) this.closeOverlay(overlay);
      }
    });

    // Backdrop click
    document.addEventListener('click', e => {
      if (e.target.classList.contains('ts-overlay') && e.target.classList.contains('ts-overlay--open')) {
        this.closeOverlay(e.target);
      }
    });

    // Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this._activeStack.length) {
        this.closeOverlay(this._activeStack[this._activeStack.length - 1]);
      }
    });
  }

  open(idOrEl) {
    const overlay = (typeof idOrEl === 'string')
      ? document.querySelector(`#${idOrEl}.ts-overlay, [data-modal-id="${idOrEl}"]`)
      : idOrEl;

    if (!overlay) return;
    overlay.classList.add('ts-overlay--open');
    overlay.setAttribute('data-open', '');
    this._activeStack.push(overlay);
    document.body.style.overflow = 'hidden';
    overlay.dispatchEvent(new CustomEvent('ts:modal-open', { bubbles: true }));
  }

  close(idOrEl) {
    const overlay = (typeof idOrEl === 'string')
      ? document.querySelector(`#${idOrEl}, [data-modal-id="${idOrEl}"]`)
      : idOrEl;
    this.closeOverlay(overlay);
  }

  closeOverlay(overlay) {
    if (!overlay) return;
    overlay.classList.remove('ts-overlay--open');
    overlay.removeAttribute('data-open');
    this._activeStack = this._activeStack.filter(el => el !== overlay);
    if (!this._activeStack.length) document.body.style.overflow = '';
    overlay.dispatchEvent(new CustomEvent('ts:modal-close', { bubbles: true }));
  }

  closeAll() {
    [...this._activeStack].forEach(o => this.closeOverlay(o));
  }
}


/* ═══════════════════════════════════════════════════════════════════
   TOAST MODULE
   Programmatic toast notifications.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinToast {
  constructor() {
    this._container = this._getOrCreateContainer();
  }

  _getOrCreateContainer() {
    let c = document.querySelector('.ts-toast-container');
    if (!c) {
      c = document.createElement('div');
      c.className = 'ts-toast-container';
      document.body.appendChild(c);
    }
    return c;
  }

  show(message, opts = {}) {
    const {
      type = 'default',
      title = '',
      duration = 4000,
      icon = this._defaultIcon(type),
    } = opts;

    const toast = document.createElement('div');
    toast.className = `ts-toast ts-toast--${type}`;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');

    toast.innerHTML = `
      ${icon ? `<span class="ts-toast__icon" aria-hidden="true"><i class="${icon}"></i></span>` : ''}
      <div class="ts-toast__body">
        ${title ? `<div class="ts-toast__title">${this._sanitize(title)}</div>` : ''}
        <div class="ts-toast__msg">${this._sanitize(message)}</div>
      </div>
      <button class="ts-btn ts-btn--ghost ts-btn--icon ts-btn--sm" aria-label="Dismiss" style="font-size:0.75rem;color:var(--ts-text-muted)">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;

    const dismissBtn = toast.querySelector('button');
    dismissBtn.addEventListener('click', () => this._dismiss(toast));

    this._container.appendChild(toast);

    if (duration > 0) {
      setTimeout(() => this._dismiss(toast), duration);
    }

    return toast;
  }

  _dismiss(toast) {
    toast.style.transition = 'opacity 200ms, transform 200ms';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(16px)';
    setTimeout(() => toast.remove(), 220);
  }

  _defaultIcon(type) {
    const icons = {
      success: 'fa-solid fa-circle-check',
      warning: 'fa-solid fa-triangle-exclamation',
      error: 'fa-solid fa-circle-xmark',
      info: 'fa-solid fa-circle-info',
    };
    return icons[type] || '';
  }

  _sanitize(str) {
    const el = document.createElement('div');
    el.textContent = str;
    return el.innerHTML;
  }
}


/* ═══════════════════════════════════════════════════════════════════
   COLLAPSE / TOGGLE MODULE
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinToggle {
  constructor() {
    this._bind();
  }

  _bind() {
    document.addEventListener('click', e => {
      const trigger = e.target.closest('[data-collapse-trigger], [data-ts-collapse]');
      if (!trigger) return;

      const targetId = trigger.dataset.collapseTrigger || trigger.dataset.tsCollapse;
      const target = document.getElementById(targetId) ||
        document.querySelector(`[data-collapse-target="${targetId}"]`);

      if (!target) {
        // Self-collapse (the panel itself)
        const panel = trigger.closest('.ts-panel');
        if (panel) this.toggle(panel, 'ts-panel--collapsed');
        return;
      }

      this.toggle(target);
      trigger.setAttribute('aria-expanded', !target.classList.contains('ts-hidden'));
    });
  }

  toggle(el, cls = 'ts-hidden') {
    el.classList.toggle(cls);
    el.dispatchEvent(new CustomEvent('ts:toggle', { bubbles: true, detail: { open: !el.classList.contains(cls) } }));
  }

  show(el) { el.classList.remove('ts-hidden'); }
  hide(el) { el.classList.add('ts-hidden'); }
}


/* ═══════════════════════════════════════════════════════════════════
   INTERSECTION OBSERVER MODULE (Enhanced Scroll Reveals)
   Automatically applies scroll reveal animations to elements.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinObserver {
  constructor(config) {
    this.config = config || {
      autoReveal: true,
      selectors: '.ts-card, .ts-panel, .demo-card, .ts-pricing-card',
      defaultAnimation: 'ts-fade-up',
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    };

    this._observed = new Set();

    this._observer = new IntersectionObserver(this._onIntersect.bind(this), {
      threshold: this.config.threshold,
      rootMargin: this.config.rootMargin,
    });

    this._observe();

    // Safety net: after Lenis + CSS settle, force-reveal anything
    // already visible in the viewport (handles race conditions where
    // IntersectionObserver fires before layout is final).
    requestAnimationFrame(() => {
      requestAnimationFrame(() => this._revealAlreadyVisible());
    });
  }

  _observe() {
    // Observe elements with explicit animation classes
    const animationClasses = [
      '.ts-reveal',
      '.ts-fade-in',
      '.ts-fade-up',
      '.ts-fade-left',
      '.ts-fade-right',
      '.ts-zoom-in',
      '.ts-zoom-out',
      '.ts-slide-up',
      '.ts-slide-left',
      '.ts-slide-right',
      '.ts-flip-up',
      '.ts-bounce-in',
    ];

    animationClasses.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        if (!el.classList.contains('ts-visible') && !this._observed.has(el)) {
          this._observed.add(el);
          this._observer.observe(el);
        }
      });
    });

    // Auto-apply animations to common elements (if enabled)
    if (this.config.autoReveal && this.config.selectors) {
      const selectors = this.config.selectors.split(',').map(s => s.trim());

      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          // Skip if already has animation class or is marked to skip
          if (this._hasAnimationClass(el) ||
            el.hasAttribute('data-ts-reveal-skip') ||
            el.classList.contains('ts-visible') ||
            this._observed.has(el)) {
            return;
          }

          // Apply default animation
          el.classList.add(this.config.defaultAnimation);
          this._observed.add(el);
          this._observer.observe(el);
        });
      });
    }
  }

  /**
   * Force-reveal elements that are already inside the viewport.
   * Handles edge cases where IntersectionObserver callback fires
   * before Lenis finishes layout or the observer root changes.
   */
  _revealAlreadyVisible() {
    this._observed.forEach(el => {
      if (el.classList.contains('ts-visible')) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        el.classList.add('ts-visible');
        this._observer.unobserve(el);
        el.dispatchEvent(new CustomEvent('ts:reveal', {
          bubbles: true,
          detail: { element: el }
        }));
      }
    });
  }

  _hasAnimationClass(el) {
    const animationClasses = [
      'ts-reveal', 'ts-fade-in', 'ts-fade-up', 'ts-fade-left', 'ts-fade-right',
      'ts-zoom-in', 'ts-zoom-out', 'ts-slide-up', 'ts-slide-left', 'ts-slide-right',
      'ts-flip-up', 'ts-bounce-in'
    ];
    return animationClasses.some(cls => el.classList.contains(cls));
  }

  _onIntersect(entries) {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        // Check if element was out of viewport for > 20s
        const leftAt = el.__tsLeftAt;
        const now = Date.now();
        if (leftAt && (now - leftAt > 20000)) {
          // Re-trigger: remove visible class, wait one frame, re-add it
          el.classList.remove('ts-visible');
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.classList.add('ts-visible');
            });
          });
        } else {
          // Normal reveal
          requestAnimationFrame(() => {
            el.classList.add('ts-visible');
          });
        }

        // Clear the left timestamp
        delete el.__tsLeftAt;

        // Do NOT unobserve — keep observing for re-triggering
        // this._observer.unobserve(entry.target);

        // Dispatch custom event
        el.dispatchEvent(new CustomEvent('ts:reveal', {
          bubbles: true,
          detail: { element: el }
        }));
      } else {
        // Element left viewport — track timestamp
        if (!el.__tsLeftAt) {
          el.__tsLeftAt = Date.now();
        }
      }
    });
  }

  // Re-scan for new elements added dynamically
  refresh() {
    this._observe();
  }

  // Reveal element immediately (skip animation)
  revealNow(el) {
    if (el) {
      el.classList.add('ts-visible');
      this._observer.unobserve(el);
    }
  }

  // Reveal all elements immediately
  revealAll() {
    document.querySelectorAll('[class*="ts-fade"], [class*="ts-zoom"], [class*="ts-slide"], [class*="ts-flip"], [class*="ts-bounce"], .ts-reveal').forEach(el => {
      this.revealNow(el);
    });
  }
}


/* ═══════════════════════════════════════════════════════════════════
   GSAP SCROLL REVEAL MODULE (Enhanced — optional)
   Uses GSAP ScrollTrigger for scroll-based reveal animations.
   Falls back to ToolskinObserver if GSAP/ScrollTrigger unavailable.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinGSAPReveal {
  constructor(config) {
    this.config = config || {
      selectors: '.ts-card, .ts-panel, .demo-card, .ts-pricing-card',
      defaultAnimation: 'ts-fade-up',
      stagger: 0.08,
    };

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('[Toolskin] GSAP ScrollTrigger not found — falling back to IntersectionObserver reveal.');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    this._init();
  }

  _init() {
    const animMap = {
      'ts-fade-up': { y: 40, opacity: 0 },
      'ts-fade-in': { opacity: 0 },
      'ts-fade-left': { x: 40, opacity: 0 },
      'ts-fade-right': { x: -40, opacity: 0 },
      'ts-zoom-in': { scale: 0.85, opacity: 0 },
      'ts-zoom-out': { scale: 1.15, opacity: 0 },
      'ts-slide-up': { y: 80, opacity: 0 },
      'ts-slide-left': { x: 60, opacity: 0 },
      'ts-slide-right': { x: -60, opacity: 0 },
    };

    // Process elements with explicit animation classes
    for (const [cls, fromVars] of Object.entries(animMap)) {
      const elements = document.querySelectorAll(`.${cls}:not(.ts-visible)`);
      if (!elements.length) continue;

      elements.forEach((el, i) => {
        // Read delay from ts-delay-N class
        let delay = 0;
        el.classList.forEach(c => {
          const m = c.match(/^ts-delay-(\d+)$/);
          if (m) delay = parseInt(m[1]) * 0.1;
        });

        gsap.from(el, {
          ...fromVars,
          duration: 0.6,
          delay: delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            once: false,
            onEnter: () => el.classList.add('ts-visible'),
            onLeaveBack: () => el.classList.remove('ts-visible'),
          },
        });
      });
    }

    // Auto-reveal from config selectors
    if (this.config.selectors) {
      const selectors = this.config.selectors.split(',').map(s => s.trim());
      const defaultAnim = animMap[this.config.defaultAnimation] || animMap['ts-fade-up'];

      selectors.forEach(selector => {
        const els = document.querySelectorAll(`${selector}:not(.ts-visible):not([class*="ts-fade"]):not([class*="ts-zoom"]):not([class*="ts-slide"])`);
        if (!els.length) return;

        gsap.from(els, {
          ...defaultAnim,
          duration: 0.6,
          stagger: this.config.stagger || 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: els[0].parentElement || els[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            once: false,
            onEnter: () => els.forEach(el => el.classList.add('ts-visible')),
            onLeaveBack: () => els.forEach(el => el.classList.remove('ts-visible')),
          },
        });
      });
    }
  }

  /** Refresh ScrollTrigger after dynamic content changes */
  refresh() {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }
}

/* ═══════════════════════════════════════════════════════════════════
   MARQUEE COMPONENT
   Infinite scrolling text marquee with configurable speed, styling, and behavior.
   ═══════════════════════════════════════════════════════════════════ */

/* class ToolskinMarquee {
  constructor(el) {
    this.el = el;
    this.originalText = el.textContent.trim();
    this.wrap = null;
    this.content = null;
    this.textSpan = null;
    this.pauseOnHover = el.dataset.pauseHover !== 'false';
    this.direction = el.dataset.direction || 'left';

    this._build();
    this._setupResize();
    if (this.pauseOnHover) {
      this._setupHover();
    }
  }

  _build() {
    // Skip if already built
    if (this.el.classList.contains('ts-marquee-container')) {
      return;
    }

    // Clear element
    this.el.innerText = '';

    // Map data-* attributes to CSS variables
    Array.from(this.el.attributes).forEach(attr => {
      if (attr.name.startsWith('data-ts-marquee-') || attr.name.startsWith('data-mq-')) {
        const varName = `--ts-marquee-${attr.name.replace(/^data-(ts-)?marquee-|^data-mq-/, '')}`;
        this.el.style.setProperty(varName, attr.value);
      }
    });

    // Create scaffolding
    this.wrap = document.createElement('div');
    this.wrap.className = 'ts-marquee-text-wrap';

    this.content = document.createElement('div');
    this.content.className = 'ts-marquee-text-content';

    this.textSpan = document.createElement('div');
    this.textSpan.className = 'ts-marquee-text-text';

    // Calculate repeats - need to measure text width first
    const containerWidth = this.el.offsetWidth || window.innerWidth;
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.style.fontSize = getComputedStyle(this.el).getPropertyValue('--ts-marquee-font-size') || '2rem';
    tempSpan.style.fontWeight = getComputedStyle(this.el).getPropertyValue('--ts-marquee-weight') || '600';
    tempSpan.style.fontFamily = getComputedStyle(this.el).fontFamily;
    tempSpan.innerText = this.originalText;
    document.body.appendChild(tempSpan);

    const textWidth = tempSpan.offsetWidth;
    // Repeat text enough to fill at least 2x the container width for seamless loop
    const repeats = Math.max(2, Math.ceil((containerWidth * 2) / textWidth) || 2);
    const finalString = (this.originalText + ' ').repeat(repeats);

    document.body.removeChild(tempSpan);

    // Assemble and inject - duplicate text for seamless loop
    // The text needs to be duplicated so when it moves -50%, it seamlessly loops
    const duplicatedText = finalString + finalString;
    this.textSpan.innerText = duplicatedText;

    // Set direction
    if (this.direction === 'right') {
      this.textSpan.style.animationDirection = 'reverse';
    }

    this.content.appendChild(this.textSpan);
    this.wrap.appendChild(this.content);
    this.el.appendChild(this.wrap);

    // Add base container class
    this.el.classList.add('ts-marquee-container');
  }

  _setupResize() {
    if (!('ResizeObserver' in window)) return;

    this._resizeObserver = new ResizeObserver(() => {
      // Rebuild on resize to recalculate text repeats
      const oldWrap = this.wrap;
      this.el.classList.remove('ts-marquee-container');
      this._build();
      if (oldWrap && oldWrap.parentNode) {
        oldWrap.parentNode.removeChild(oldWrap);
      }
    });
    this._resizeObserver.observe(this.el);
  }

  _setupHover() {
    this.el.addEventListener('mouseenter', () => this.pause());
    this.el.addEventListener('mouseleave', () => this.resume());
  }

  pause() {
    this.el.classList.add('ts-marquee-paused');
    if (this.textSpan) {
      this.textSpan.style.animationPlayState = 'paused';
    }
  }

  resume() {
    this.el.classList.remove('ts-marquee-paused');
    if (this.textSpan) {
      this.textSpan.style.animationPlayState = 'running';
    }
  }

  setSpeed(speed) {
    this.el.style.setProperty('--ts-marquee-speed', `${speed}s`);
    if (this.textSpan) {
      this.textSpan.style.animationDuration = `${speed}s`;
    }
  }

  destroy() {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
    }
    if (this.wrap && this.wrap.parentNode) {
      this.wrap.parentNode.removeChild(this.wrap);
    }
    this.el.innerText = this.originalText;
    this.el.classList.remove('ts-marquee-container');
  }
} */

/* ═══════════════════════════════════════════════════════════════════
   VIEWPORT MANAGER
   Pauses/resumes heavy elements (sliders, canvas, animations) when off-screen
   to optimize memory and GPU usage.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinViewportManager {
  constructor() {
    this._observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.remove('ts-viewport-paused');
          el.dispatchEvent(new CustomEvent('ts:viewport-enter', {
            bubbles: true,
            detail: { element: el }
          }));
        } else {
          el.classList.add('ts-viewport-paused');
          el.dispatchEvent(new CustomEvent('ts:viewport-leave', {
            bubbles: true,
            detail: { element: el }
          }));
        }
      });
    }, {
      rootMargin: '100px',
      threshold: 0.01
    });

    this._observe();
    this._setupAutoPause();
  }

  _observe() {
    // Observe elements with data-ts-viewport attribute
    document.querySelectorAll('[data-ts-viewport]').forEach(el => {
      this._observer.observe(el);
    });

    // Auto-observe common heavy elements
    document.querySelectorAll('.ts-marquee, .ts-grain--animated, [data-ts-viewport="canvas"], [data-ts-viewport="slider"], [data-ts-viewport="css"]').forEach(el => {
      if (!el.hasAttribute('data-ts-viewport')) {
        el.setAttribute('data-ts-viewport', 'auto');
      }
      this._observer.observe(el);
    });
  }

  _setupAutoPause() {
    // Auto-pause CSS animations via animation-play-state
    document.addEventListener('ts:viewport-leave', (e) => {
      const el = e.detail.element;
      if (el.classList.contains('ts-grain--animated') || el.hasAttribute('data-ts-viewport')) {
        el.style.animationPlayState = 'paused';
      }
    });

    document.addEventListener('ts:viewport-enter', (e) => {
      const el = e.detail.element;
      if (el.classList.contains('ts-grain--animated') || el.hasAttribute('data-ts-viewport')) {
        el.style.animationPlayState = 'running';
      }
    });

    /* // Auto-pause marquee instances
    document.addEventListener('ts:viewport-leave', (e) => {
      const el = e.detail.element;
      if (el._tsMarquee && el._tsMarquee instanceof ToolskinMarquee) {
        el._tsMarquee.pause();
      }
    });

    document.addEventListener('ts:viewport-enter', (e) => {
      const el = e.detail.element;
      if (el._tsMarquee && el._tsMarquee instanceof ToolskinMarquee) {
        el._tsMarquee.resume();
      }
    }); */
  }

  refresh() {
    this._observer.disconnect();
    this._observe();
  }

  observe(el) {
    this._observer.observe(el);
  }

  unobserve(el) {
    this._observer.unobserve(el);
  }
}

/* ═══════════════════════════════════════════════════════════════════
   CSS PARALLAX FALLBACK (JS-based for browsers without animation-timeline)
   Provides JS fallback for [data-ts-parallax] elements when CSS scroll-driven
   animations are not supported.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinParallaxFallback {
  constructor(smoothScroll) {
    this.smoothScroll = smoothScroll;
    this.parallaxElements = [];
    this._init();
  }

  _init() {
    // Check if CSS animation-timeline is supported
    if (CSS.supports('animation-timeline', 'view()')) {
      return; // CSS handles it, no JS needed
    }

    // Fallback: use JS with Lenis scroll events
    if (!this.smoothScroll || !this.smoothScroll.lenis) {
      return;
    }

    this._observeElements();
    this.smoothScroll.lenis.on('scroll', () => this._updateParallax());
  }

  _observeElements() {
    const elements = document.querySelectorAll('[data-ts-parallax]');
    elements.forEach(section => {
      const bg = section.querySelector('[data-ts-parallax-bg]');
      if (!bg) return;

      const from = getComputedStyle(bg).getPropertyValue('--ts-parallax-from') || '-10%';
      const to = getComputedStyle(bg).getPropertyValue('--ts-parallax-to') || '10%';

      this.parallaxElements.push({
        section,
        bg,
        from: parseFloat(from) || -10,
        to: parseFloat(to) || 10,
      });
    });
  }

  _updateParallax() {
    this.parallaxElements.forEach(({ section, bg, from, to }) => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Calculate progress: 0 when section top is at viewport bottom, 1 when section bottom is at viewport top
      const progress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)));

      // Interpolate between from and to
      const translateY = from + (to - from) * progress;
      bg.style.transform = `translateY(${translateY}%)`;
    });
  }

  refresh() {
    this.parallaxElements = [];
    this._observeElements();
  }
}


/* ═══════════════════════════════════════════════════════════════════
   ICONS MODULE
   Renders icons from data-icon attributes.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinIcons {
  static inject(root = document) {
    root.querySelectorAll('[data-icon]').forEach(el => {
      if (el.dataset.iconInjected) return;
      const raw = el.dataset.icon;
      if (!raw) return;

      const [type, ...rest] = raw.split(':');
      const value = rest.join(':');

      if (type === 'fa' || type === 'fas' || type === 'far' || type === 'fab') {
        const i = document.createElement('i');
        i.className = value || raw;
        i.setAttribute('aria-hidden', 'true');
        el.appendChild(i);
      } else if (type === 'ion') {
        const ion = document.createElement('ion-icon');
        ion.setAttribute('name', value);
        ion.setAttribute('aria-hidden', 'true');
        el.appendChild(ion);
      } else {
        const i = document.createElement('i');
        i.className = raw;
        i.setAttribute('aria-hidden', 'true');
        el.appendChild(i);
      }

      el.dataset.iconInjected = '1';
    });
  }
}


/* ═══════════════════════════════════════════════════════════════════
   RANGE SLIDER MODULE
   Auto-updates gradient fill based on value.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinRange {
  constructor() {
    this._init();
  }

  _init() {
    const rangeSliders = document.querySelectorAll('input[type="range"].ts-range');

    rangeSliders.forEach(slider => {
      this.updateSlider(slider);
      slider.addEventListener('input', () => this.updateSlider(slider));
    });
  }

  updateSlider(rangeInput) {
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

  refresh() {
    this._init();
  }
}


/* ═══════════════════════════════════════════════════════════════════
   CUSTOM CURSOR MODULE
   Smooth animated cursor with interaction labels.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinCursor {
  constructor(config) {
    this.config = config;

    if (!this.config.enabled) return;

    this.cursor = null;
    this.cursorInner = null;
    this.cursorLabel = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.cursorX = 0;
    this.cursorY = 0;
    this.followerX = 0;
    this.followerY = 0;
    this.easing = this.config.easing ?? 0.2;
    this.followerEasing = this.config.followerEasing ?? 0.12;
    this.currentHoveredElement = null;
    this.cursorOffset = { x: 0, y: 0 };

    this._init();
  }

  _init() {
    // Create cursor element
    this.cursor = document.createElement('div');
    this.cursor.classList.add('custom-cursor');

    // Apply mode class
    const mode = this.config.mode || 'simple';
    this.cursor.classList.add(`cursor--${mode}`);

    // Follower toggle
    if (!this.config.follower) {
      this.cursor.classList.add('cursor--no-follower');
    }

    document.body.appendChild(this.cursor);

    // Only create inner/label for tooltip mode
    if (mode === 'tooltip') {
      this.cursorInner = document.createElement('div');
      this.cursorInner.classList.add('cursor-inner');
      this.cursor.appendChild(this.cursorInner);

      if (this.config.label) {
        this.cursorLabel = document.createElement('span');
        this.cursorLabel.classList.add('cursor-label');
        this.cursor.appendChild(this.cursorLabel);
      }
    }

    // Set CSS variables from config
    document.documentElement.style.setProperty('--ts-cursor-size', `${this.config.size}px`);
    document.documentElement.style.setProperty('--ts-cursor-grow', this.config.grow);

    // Track mouse
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      // Smart positioning only for tooltip mode
      if (this.currentHoveredElement && mode === 'tooltip' && this.config.smartPosition) {
        this._updateSmartPosition(e);
      }
    });

    // Animation loop
    this._animate();

    // Setup interactions
    this._setupInteractions();
  }

  _animate() {
    // Main cursor follows mouse with easing
    this.cursorX += (this.mouseX - this.cursorX) * this.easing;
    this.cursorY += (this.mouseY - this.cursorY) * this.easing;

    // Simple mode: always keep circle centered on mouse position
    if (this.config.mode === 'simple') {
      this.cursor.style.transform = `translate3d(${this.cursorX}px, ${this.cursorY}px, 0) translate(-50%, -50%)`;
    } else {
      // Tooltip mode: offset for smart positioning
      this.cursor.style.transform = `translate3d(${this.cursorX + this.cursorOffset.x}px, ${this.cursorY + this.cursorOffset.y}px, 0)`;
    }

    // Follower effect (only if enabled)
    if (this.config.follower) {
      this.followerX += (this.cursorX - this.followerX) * this.followerEasing;
      this.followerY += (this.cursorY - this.followerY) * this.followerEasing;

      const relativeX = this.followerX - this.cursorX;
      const relativeY = this.followerY - this.cursorY;
      this.cursor.style.setProperty('--follower-transform', `translate3d(${relativeX}px, ${relativeY}px, 0)`);
    }

    requestAnimationFrame(() => this._animate());
  }

  _updateSmartPosition(event) {
    if (!this.currentHoveredElement) return;

    const rect = this.currentHoveredElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const cursorSize = this.config.size * this.config.grow;

    const elementCenterY = rect.top + rect.height / 2;
    const isInBottomHalf = elementCenterY > viewportHeight / 2;
    const spaceBelow = viewportHeight - rect.bottom;
    const needsTopPosition = spaceBelow < cursorSize + 60;

    if (needsTopPosition || isInBottomHalf) {
      this.cursor.classList.add('position-above');
      this.cursor.classList.remove('position-below');
      this.cursorOffset.y = -(cursorSize / 2 + 10);
      if (this.config.arrow) this.cursor.setAttribute('data-pointer-direction', 'down');
    } else {
      this.cursor.classList.add('position-below');
      this.cursor.classList.remove('position-above');
      this.cursorOffset.y = (cursorSize / 2 + 10);
      if (this.config.arrow) this.cursor.setAttribute('data-pointer-direction', 'up');
    }
  }

  _setupInteractions() {
    const mode = this.config.mode || 'simple';
    const interactiveElements = document.querySelectorAll('a, button, .interactive, [data-cursor]');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', (e) => {
        this.currentHoveredElement = el;
        this.cursor.classList.add('active');

        if (mode === 'tooltip' && this.config.smartPosition) {
          this._updateSmartPosition(e);
        }

        // Labels only in tooltip mode
        if (mode === 'tooltip' && this.config.label && this.cursorLabel) {
          if (el.dataset.cursor) {
            this.cursorLabel.textContent = el.dataset.cursor;
          } else if (el.tagName === 'A') {
            this.cursorLabel.textContent = 'VIEW';
          } else if (el.tagName === 'BUTTON') {
            this.cursorLabel.textContent = 'CLICK';
          }
        }
      });

      el.addEventListener('mouseleave', () => {
        this.currentHoveredElement = null;
        this.cursor.classList.remove('active', 'position-above', 'position-below');
        this.cursor.removeAttribute('data-pointer-direction');
        this.cursorOffset = { x: 0, y: 0 };

        if (this.cursorLabel) {
          this.cursorLabel.textContent = '';
        }
      });
    });
  }
}


/* ═══════════════════════════════════════════════════════════════════
   LAYOUT MODULE
   Applies layout configurations (container widths, noise, fullpage, etc.)
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinLayout {
  constructor(config) {
    this.config = config;
    this._apply();
  }

  _apply() {
    const root = document.documentElement;

    // Container max width
    root.style.setProperty('--ts-container-max', this.config.containerMaxWidth);

    // Content max width
    root.style.setProperty('--ts-content-max', this.config.contentMaxWidth);

    // Noise/grain toggle
    if (!this.config.enableNoise) {
      root.classList.add('ts-no-grain');
    } else {
      root.classList.remove('ts-no-grain');

      // Apply noise opacity
      const grainElements = document.querySelectorAll('.ts-grain::before');
      grainElements.forEach(el => {
        el.style.opacity = this.config.noiseOpacity;
      });
    }

    // Fullpage snap scrolling
    if (this.config.fullpage) {
      root.classList.add('ts-fullpage');
    } else {
      root.classList.remove('ts-fullpage');
    }

    // Elastic/Brutalist mode (full-width)
    if (this.config.elasticMode) {
      root.classList.add('ts-layout-elastic');
    } else {
      root.classList.remove('ts-layout-elastic');
    }
  }

  update(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this._apply();
  }
}


/* ═══════════════════════════════════════════════════════════════════
   MOBILE MENU MODULE
   Auto-detects menu containers and creates burger + sidebar navigation.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinMobileMenu {
  constructor() {
    this.menuContainers = [];
    this.isOpen = false;
    this._init();
  }

  _init() {
    // Auto-detect menu containers
    this._detectMenuContainers();

    // Setup each menu
    this.menuContainers.forEach(container => {
      this._setupMobileMenu(container);
    });
  }

  _detectMenuContainers() {
    // Look for common menu patterns
    const selectors = [
      '.ts-nav-fixed__links',
      '[data-menu]',
      'nav ul',
      '.menu',
      '.nav-links',
      '.navigation'
    ];

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        // Check if it has child menu items (links/anchors)
        const hasMenuItems = el.querySelectorAll('a, li').length > 0;
        if (hasMenuItems && !this.menuContainers.includes(el)) {
          this.menuContainers.push(el);
        }
      });
    });
  }

  _setupMobileMenu(container) {
    // Get parent nav element
    const nav = container.closest('nav') || container.parentElement;
    if (!nav) return;

    // Create burger button
    const burger = document.createElement('button');
    burger.className = 'ts-menu-burger';
    burger.setAttribute('aria-label', 'Toggle menu');
    burger.innerHTML = '<span class="ts-menu-burger-inner"></span>';

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'ts-mobile-menu-overlay';

    // Create mobile sidebar
    const sidebar = document.createElement('div');
    sidebar.className = 'ts-mobile-menu';

    // Clone menu items into sidebar
    const menuItems = document.createElement('div');
    menuItems.className = 'ts-mobile-menu-items';

    // Clone all child items (preserve structure)
    const items = container.querySelectorAll('a, li > a, [href]');
    items.forEach(item => {
      const clone = item.cloneNode(true);
      menuItems.appendChild(clone);
    });

    sidebar.appendChild(menuItems);

    // Insert elements into DOM
    nav.appendChild(burger);
    document.body.appendChild(overlay);
    document.body.appendChild(sidebar);

    // Event listeners
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle(burger, overlay, sidebar);
    });

    // Close when clicking overlay (outside menu)
    overlay.addEventListener('click', () => this.close(burger, overlay, sidebar));

    // Prevent closing when clicking inside sidebar
    sidebar.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Don't close on link click - let navigation happen
    // Active state will update via scroll spy

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close(burger, overlay, sidebar);
      }
    });

    // Sync active states from desktop menu to mobile menu
    this._syncActiveStates(container, menuItems);
  }

  _syncActiveStates(desktopMenu, mobileMenu) {
    // Watch for active state changes in desktop menu and sync to mobile
    const observer = new MutationObserver(() => {
      const desktopLinks = desktopMenu.querySelectorAll('a');
      const mobileLinks = mobileMenu.querySelectorAll('a');

      desktopLinks.forEach((desktopLink, index) => {
        const mobileLink = mobileLinks[index];
        if (!mobileLink) return;

        // Sync active/ts-active classes
        if (desktopLink.classList.contains('active') || desktopLink.classList.contains('ts-active')) {
          mobileLink.classList.add('active', 'ts-active');
        } else {
          mobileLink.classList.remove('active', 'ts-active');
        }
      });
    });

    // Observe desktop menu for class changes
    const desktopLinks = desktopMenu.querySelectorAll('a');
    desktopLinks.forEach(link => {
      observer.observe(link, {
        attributes: true,
        attributeFilter: ['class']
      });
    });

    // Also sync on scroll (for initial state)
    window.addEventListener('scroll', () => {
      const desktopLinks = desktopMenu.querySelectorAll('a');
      const mobileLinks = mobileMenu.querySelectorAll('a');

      desktopLinks.forEach((desktopLink, index) => {
        const mobileLink = mobileLinks[index];
        if (!mobileLink) return;

        if (desktopLink.classList.contains('active') || desktopLink.classList.contains('ts-active')) {
          mobileLink.classList.add('active', 'ts-active');
        } else {
          mobileLink.classList.remove('active', 'ts-active');
        }
      });
    }, { passive: true });
  }

  toggle(burger, overlay, sidebar) {
    if (this.isOpen) {
      this.close(burger, overlay, sidebar);
    } else {
      this.open(burger, overlay, sidebar);
    }
  }

  open(burger, overlay, sidebar) {
    this.isOpen = true;
    burger.classList.add('active');
    overlay.classList.add('active');
    sidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close(burger, overlay, sidebar) {
    this.isOpen = false;
    burger.classList.remove('active');
    overlay.classList.remove('active');
    sidebar.classList.remove('active');
    document.body.style.overflow = '';
  }
}


/* ═══════════════════════════════════════════════════════════════════
   GRID BACKGROUND MODULE
   Animated dot-grid with interactive mouse-parallax layers.
   Pure vanilla JS — no jQuery dependency.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinGridBg {
  constructor(config = {}) {
    this.config = Object.assign({
      selector: '.grid-bg.interactive',
      impactLayer1: 40,
      impactLayer2: 20,
      easing: 0.08,
    }, config);

    this.sections = [];
    this._rafId = null;
    this._running = false;
    this._observer = null;
    this._init();
  }

  _init() {
    const els = document.querySelectorAll(this.config.selector);
    if (!els.length) return;

    // Apply config as CSS custom properties on :root for the grid-bg system
    this._applyVars();

    // IntersectionObserver — pause CSS animations & ignore mouse when off-screen
    this._observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const ctx = this.sections.find(s => s.el === entry.target);
        if (!ctx) continue;
        ctx.visible = entry.isIntersecting;

        if (ctx.visible) {
          ctx.el.style.removeProperty('animation-play-state');
        } else {
          ctx.el.style.setProperty('animation-play-state', 'paused');
          ctx.inside = false;
          ctx.dirty = false;
          ctx.targetX1 = ctx.targetY1 = ctx.targetX2 = ctx.targetY2 = 0;
          ctx.currentX1 = ctx.currentY1 = ctx.currentX2 = ctx.currentY2 = 0;
          const s = ctx.el.style;
          s.setProperty('--mouse-x-1', '0px');
          s.setProperty('--mouse-y-1', '0px');
          s.setProperty('--mouse-x-2', '0px');
          s.setProperty('--mouse-y-2', '0px');
        }
      }
    }, { rootMargin: '100px' });

    els.forEach(el => {
      const ctx = {
        el,
        currentX1: 0, currentY1: 0,
        currentX2: 0, currentY2: 0,
        targetX1: 0, targetY1: 0,
        targetX2: 0, targetY2: 0,
        dirty: false,
        inside: false,
        visible: true,
      };

      el.addEventListener('mousemove', (e) => this._onMove(ctx, e), { passive: true });
      el.addEventListener('mouseleave', () => this._onLeave(ctx), { passive: true });

      this._observer.observe(el);
      this.sections.push(ctx);
    });
  }

  /** Write config values as CSS custom properties on :root */
  _applyVars() {
    const c = this.config;
    const r = document.documentElement.style;

    // Grid dimensions
    r.setProperty('--ts-grid-width', c.gridWidth + 'px');
    r.setProperty('--ts-grid-height', (c.gridHeight || c.gridWidth) + 'px');

    // Lines
    r.setProperty('--ts-grid-line-opacity', String(c.lineOpacity));
    if (c.lineColor) r.setProperty('--ts-line-color', c.lineColor);

    // Dots
    r.setProperty('--ts-dot-size', c.dotSize + 'px');
    r.setProperty('--ts-dot-speed', c.dotSpeed + 's');
    r.setProperty('--ts-point-gap-width', (c.gridWidth * c.dotGap) + 'px');
    r.setProperty('--ts-point-gap-height', ((c.gridHeight || c.gridWidth) * c.dotGap) + 'px');
    if (c.dotColor) r.setProperty('--ts-dot-color', c.dotColor);

    // Gradient glow
    r.setProperty('--ts-grid-gradient-opacity', String(c.gradientOpacity));
    r.setProperty('--ts-grid-gradient-pos', c.gradientPosition);

    // Noise when combined
    r.setProperty('--ts-grid-noise-opacity', String(c.noiseOpacity));

    // For .ba-grid.ts-grain: bake glow % into inline background-image
    // (color-mix doesn't accept calc, so JS writes the final value)
    const pct = Math.round(c.gradientOpacity * 100);
    this.sections.forEach(ctx => {
      if (ctx.el.classList.contains('ts-grain')) {
        ctx.el.style.backgroundImage =
          `radial-gradient(ellipse at ${c.gradientPosition}, ` +
          `color-mix(in srgb, var(--ts-accent) ${pct}%, transparent) 0%, ` +
          `transparent 65%)`;
      }
    });
  }

  _startLoop() {
    if (this._running) return;
    this._running = true;
    this._rafId = requestAnimationFrame(() => this._tick());
  }

  _stopLoop() {
    this._running = false;
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  }

  _onMove(ctx, e) {
    if (!ctx.visible) return; // Skip if off-screen

    ctx.inside = true;
    const rect = ctx.el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width * 0.5);
    const dy = e.clientY - (rect.top + rect.height * 0.5);

    ctx.targetX1 = dx / this.config.impactLayer1;
    ctx.targetY1 = dy / this.config.impactLayer1;
    ctx.targetX2 = dx / this.config.impactLayer2;
    ctx.targetY2 = dy / this.config.impactLayer2;
    ctx.dirty = true;

    this._startLoop();
  }

  _onLeave(ctx) {
    ctx.inside = false;
    ctx.targetX1 = ctx.targetY1 = ctx.targetX2 = ctx.targetY2 = 0;
    ctx.dirty = true;
  }

  _tick() {
    const ease = this.config.easing;
    let anyActive = false;

    for (const ctx of this.sections) {
      if (!ctx.dirty || !ctx.visible) continue;

      ctx.currentX1 += (ctx.targetX1 - ctx.currentX1) * ease;
      ctx.currentY1 += (ctx.targetY1 - ctx.currentY1) * ease;
      ctx.currentX2 += (ctx.targetX2 - ctx.currentX2) * ease;
      ctx.currentY2 += (ctx.targetY2 - ctx.currentY2) * ease;

      const settled = !ctx.inside &&
        Math.abs(ctx.currentX1) < 0.05 && Math.abs(ctx.currentY1) < 0.05 &&
        Math.abs(ctx.currentX2) < 0.05 && Math.abs(ctx.currentY2) < 0.05;

      if (settled) {
        ctx.currentX1 = ctx.currentY1 = ctx.currentX2 = ctx.currentY2 = 0;
        ctx.dirty = false;
      } else {
        anyActive = true;
      }

      const s = ctx.el.style;
      s.setProperty('--mouse-x-1', ctx.currentX1.toFixed(2) + 'px');
      s.setProperty('--mouse-y-1', ctx.currentY1.toFixed(2) + 'px');
      s.setProperty('--mouse-x-2', ctx.currentX2.toFixed(2) + 'px');
      s.setProperty('--mouse-y-2', ctx.currentY2.toFixed(2) + 'px');
    }

    if (anyActive) {
      this._rafId = requestAnimationFrame(() => this._tick());
    } else {
      this._stopLoop();
    }
  }

  /** Clean up observers on destroy */
  destroy() {
    this._stopLoop();
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
  }
}


const Toolskin = {
  // Module instances
  config: null,
  theme: null,
  smooth: null,
  locomotive: null,
  tabs: [],
  modal: null,
  toast: null,
  toggle: null,
  observer: null,
  range: null,
  cursor: null,
  layout: null,
  gridBg: null,
  mobileMenu: null,

  /**
   * Initialize Toolskin with custom configuration
   * @param {object} userConfig - User configuration object
   */
  init(userConfig = {}) {
    // Initialize configuration
    this.config = ToolskinConfig.init(userConfig);

    // Apply layout settings
    this.layout = new ToolskinLayout(this.config.layout);

    // Initialize theme system
    this.theme = new ToolskinTheme(this.config.theme);

    // Initialize smooth scroll (Lenis)
    this.smooth = new ToolskinSmooth(this.config.smoothScroll);

    // Initialize CSS parallax fallback (for browsers without animation-timeline)
    if (!CSS.supports || !CSS.supports('animation-timeline', 'view()')) {
      this.parallaxFallback = new ToolskinParallaxFallback(this.smooth);
    }

    // Initialize Locomotive Scroll (parallax)
    this.locomotive = new ToolskinLocomotive(this.config.locomotiveScroll);

    // Initialize UI modules
    this._initUIModules();

    // Initialize custom cursor
    this.cursor = new ToolskinCursor(this.config.cursor);

    // Initialize interactive grid backgrounds
    if (this.config.gridBg.enabled) {
      this.gridBg = new ToolskinGridBg(this.config.gridBg);
    }

    // Initialize mobile menu
    this.mobileMenu = new ToolskinMobileMenu();

    // Dispatch ready event
    window.dispatchEvent(new CustomEvent('ts:ready', { detail: { config: this.config } }));
  },

  _initUIModules() {
    // Tabs
    document.querySelectorAll('.ts-tabs').forEach(root => {
      if (root.__tsTabsInstance) return;
      const instance = new ToolskinTabs(root);
      root.__tsTabsInstance = instance;
      if (!root.querySelector('.ts-tab--active')) {
        const first = root.querySelector('.ts-tab');
        if (first) instance.activate(first);
      }
      this.tabs.push(instance);
    });

    // Modal
    if (!this.modal) this.modal = new ToolskinModal();

    // Toast
    if (!this.toast) this.toast = new ToolskinToast();

    // Toggle
    if (!this.toggle) this.toggle = new ToolskinToggle();

    // Scroll reveal — prefer GSAP ScrollTrigger, fall back to IntersectionObserver
    // IMPORTANT: Do not create both simultaneously — GSAP sets inline styles that override Observer
    if (this.config.reveal.enabled && !this.observer && !this.gsapReveal) {
      if (this.config.reveal.useGSAP &&
        typeof gsap !== 'undefined' &&
        typeof ScrollTrigger !== 'undefined') {
        this.gsapReveal = new ToolskinGSAPReveal(this.config.reveal);
        // Do NOT create Observer when GSAP is available — GSAP handles reveals
      } else if ('IntersectionObserver' in window) {
        this.observer = new ToolskinObserver(this.config.reveal);
      }
    }

    // Range sliders
    if (this.config.rangeSliders.autoInit) {
      this.range = new ToolskinRange();
    }

    // Icons
    ToolskinIcons.inject();

    // Viewport manager for performance optimization
    this.viewportManager = new ToolskinViewportManager();
  },

  /**
   * Initialize marquee components
   
  _initMarquees() {
    // Marquee is handled by inline script in index.html for now
    // This allows the original working implementation to continue
    // Future: migrate fully to ToolskinMarquee class
    const marquees = document.querySelectorAll('.ts-marquee:not(.ts-marquee-container)');
    marquees.forEach(el => {
      // Only initialize if not already done by inline script
      if (!el.classList.contains('ts-marquee-container')) {
        el._tsMarquee = new ToolskinMarquee(el);
      }
    });
  },*/

  /**
   * Show a toast notification
   */
  showToast(message, opts = {}) {
    if (!this.toast) this.toast = new ToolskinToast();
    return this.toast.show(message, opts);
  },

  /**
   * Open/close modals
   */
  openModal(id) {
    if (!this.modal) this.modal = new ToolskinModal();
    this.modal.open(id);
  },

  closeModal(id) {
    if (this.modal) this.modal.close(id);
  },

  /**
   * Theme controls
   */
  setTheme(mode) {
    if (this.theme) this.theme.setMode(mode);
  },

  toggleTheme() {
    if (this.theme) this.theme.toggle();
  },

  /**
   * Accent color controls
   */
  setAccent: (h, s, l) => ToolskinTheme.setAccent(h, s, l),
  setAccentHex: hex => ToolskinTheme.setAccentHex(hex),
  setRadius: px => ToolskinTheme.setRadius(px),
  setFont: family => ToolskinTheme.setFont(family),

  /**
   * Scroll controls
   */
  scrollTo(target, options = {}) {
    if (this.smooth) this.smooth.scrollTo(target, options);
    else if (this.locomotive) this.locomotive.scrollTo(target, options);
  },

  /**
   * Layout controls
   */
  updateLayout(newConfig) {
    if (this.layout) this.layout.update(newConfig);
  },

  /**
   * Refresh all dynamic modules
   */
  refresh() {
    if (this.observer) this.observer.refresh();
    if (this.locomotive) this.locomotive.refresh();
    if (this.range) this.range.refresh();
    ToolskinIcons.inject();
  },
};

// Auto-init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Toolskin.init());
} else {
  Toolskin.init();
}

// Export for module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Toolskin };
}

if (typeof window !== 'undefined') {
  window.Toolskin = Toolskin;
}
