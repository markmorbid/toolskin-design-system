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
 *  ToolskinIcons        — inject FontAwesome/Ionicons via data-icon / data-ts-icon
 *  ToolskinIonIcons     — Ionicons 7.1.0 cheatsheet registry + variant helpers (global)
 *  ToolskinTheme        — dark/light theme switcher with auto-convert
 *  ToolskinSmooth       — Lenis smooth scroll integration
 *  ToolskinDynamicNav   — primary nav overflow into "More" (#ts-primary-menu)
 *  ToolskinLocomotive   — Locomotive Scroll parallax integration
 *  ToolskinConfig       — centralized configuration system
 *  ToolskinTooltip      — [data-tooltip] layer (enabled by default; Toolskin.initTooltips / init)
 *  ToolskinSlider       — image rotator (`[data-ts-slider]`, optional `.ts-slider-dots`)
 *  Toolskin.init()      — initialize all modules with config
 * ───────────────────────────────────────────────────────────────────
 */

'use strict';

/** Auto-generated from Ionicons 7.1.0 Cheatsheet — run scripts/parse-ionicons-cheatsheet.mjs */
(function (g) {
  g.TOOLSKIN_IONICONS_710 = {
    version: '7.1.0',
    /** base name -> bitmask: 1=filled, 2=outline, 4=sharp */
    flags: {
      'accessibility': 7,
      'add': 7,
      'add-circle': 7,
      'airplane': 7,
      'alarm': 7,
      'albums': 7,
      'alert': 7,
      'alert-circle': 7,
      'american-football': 7,
      'analytics': 7,
      'aperture': 7,
      'apps': 7,
      'archive': 7,
      'arrow-back': 7,
      'arrow-back-circle': 7,
      'arrow-down': 7,
      'arrow-down-circle': 7,
      'arrow-forward': 7,
      'arrow-forward-circle': 7,
      'arrow-redo': 7,
      'arrow-redo-circle': 7,
      'arrow-undo': 7,
      'arrow-undo-circle': 7,
      'arrow-up': 7,
      'arrow-up-circle': 7,
      'at': 7,
      'at-circle': 7,
      'attach': 7,
      'backspace': 7,
      'bag': 7,
      'bag-add': 7,
      'bag-check': 7,
      'bag-handle': 7,
      'bag-remove': 7,
      'balloon': 7,
      'ban': 7,
      'bandage': 7,
      'bar-chart': 7,
      'barbell': 7,
      'barcode': 7,
      'baseball': 7,
      'basket': 7,
      'basketball': 7,
      'battery-charging': 7,
      'battery-dead': 7,
      'battery-full': 7,
      'battery-half': 7,
      'beaker': 7,
      'bed': 7,
      'beer': 7,
      'bicycle': 7,
      'bluetooth': 7,
      'boat': 7,
      'body': 7,
      'bonfire': 7,
      'book': 7,
      'bookmark': 7,
      'bookmarks': 7,
      'bowling-ball': 7,
      'briefcase': 7,
      'browsers': 7,
      'brush': 7,
      'bug': 7,
      'build': 7,
      'bulb': 7,
      'bus': 7,
      'business': 7,
      'cafe': 7,
      'calculator': 7,
      'calendar': 7,
      'calendar-clear': 7,
      'calendar-number': 7,
      'call': 7,
      'camera': 7,
      'camera-reverse': 7,
      'car': 7,
      'car-sport': 7,
      'card': 7,
      'caret-back': 7,
      'caret-back-circle': 7,
      'caret-down': 7,
      'caret-down-circle': 7,
      'caret-forward': 7,
      'caret-forward-circle': 7,
      'caret-up': 7,
      'caret-up-circle': 7,
      'cart': 7,
      'cash': 7,
      'cellular': 7,
      'chatbox': 7,
      'chatbox-ellipses': 7,
      'chatbubble': 7,
      'chatbubble-ellipses': 7,
      'chatbubbles': 7,
      'checkbox': 7,
      'checkmark': 7,
      'checkmark-circle': 7,
      'checkmark-done': 7,
      'checkmark-done-circle': 7,
      'chevron-back': 7,
      'chevron-back-circle': 7,
      'chevron-collapse': 7,
      'chevron-down': 7,
      'chevron-down-circle': 7,
      'chevron-expand': 7,
      'chevron-forward': 7,
      'chevron-forward-circle': 7,
      'chevron-up': 7,
      'chevron-up-circle': 7,
      'clipboard': 7,
      'close': 7,
      'close-circle': 7,
      'cloud': 7,
      'cloud-circle': 7,
      'cloud-done': 7,
      'cloud-download': 7,
      'cloud-offline': 7,
      'cloud-upload': 7,
      'cloudy': 7,
      'cloudy-night': 7,
      'code': 7,
      'code-download': 7,
      'code-slash': 7,
      'code-working': 7,
      'cog': 7,
      'color-fill': 7,
      'color-filter': 7,
      'color-palette': 7,
      'color-wand': 7,
      'compass': 7,
      'construct': 7,
      'contract': 7,
      'contrast': 7,
      'copy': 7,
      'create': 7,
      'crop': 7,
      'cube': 7,
      'cut': 7,
      'desktop': 7,
      'diamond': 7,
      'dice': 7,
      'disc': 7,
      'document': 7,
      'document-attach': 7,
      'document-lock': 7,
      'document-text': 7,
      'documents': 7,
      'download': 7,
      'duplicate': 7,
      'ear': 7,
      'earth': 7,
      'easel': 7,
      'egg': 7,
      'ellipse': 7,
      'ellipsis-horizontal': 7,
      'ellipsis-horizontal-circle': 7,
      'ellipsis-vertical': 7,
      'ellipsis-vertical-circle': 7,
      'enter': 7,
      'exit': 7,
      'expand': 7,
      'extension-puzzle': 7,
      'eye': 7,
      'eye-off': 7,
      'eyedrop': 7,
      'fast-food': 7,
      'female': 7,
      'file-tray': 7,
      'file-tray-full': 7,
      'file-tray-stacked': 7,
      'film': 7,
      'filter': 7,
      'filter-circle': 7,
      'finger-print': 7,
      'fish': 7,
      'fitness': 7,
      'flag': 7,
      'flame': 7,
      'flash': 7,
      'flash-off': 7,
      'flashlight': 7,
      'flask': 7,
      'flower': 7,
      'folder': 7,
      'folder-open': 7,
      'football': 7,
      'footsteps': 7,
      'funnel': 7,
      'game-controller': 7,
      'gift': 7,
      'git-branch': 7,
      'git-commit': 7,
      'git-compare': 7,
      'git-merge': 7,
      'git-network': 7,
      'git-pull-request': 7,
      'glasses': 7,
      'globe': 7,
      'golf': 7,
      'grid': 7,
      'hammer': 7,
      'hand-left': 7,
      'hand-right': 7,
      'happy': 7,
      'hardware-chip': 7,
      'headset': 7,
      'heart': 7,
      'heart-circle': 7,
      'heart-dislike': 7,
      'heart-dislike-circle': 7,
      'heart-half': 7,
      'help': 7,
      'help-buoy': 7,
      'help-circle': 7,
      'home': 7,
      'hourglass': 7,
      'ice-cream': 7,
      'id-card': 7,
      'image': 7,
      'images': 7,
      'infinite': 7,
      'information': 7,
      'information-circle': 7,
      'invert-mode': 7,
      'journal': 7,
      'key': 7,
      'keypad': 7,
      'language': 7,
      'laptop': 7,
      'layers': 7,
      'leaf': 7,
      'library': 7,
      'link': 7,
      'list': 7,
      'list-circle': 7,
      'locate': 7,
      'location': 7,
      'lock-closed': 7,
      'lock-open': 7,
      'log-in': 7,
      'log-out': 7,
      'logo-alipay': 1,
      'logo-amazon': 1,
      'logo-amplify': 1,
      'logo-android': 1,
      'logo-angular': 1,
      'logo-apple': 1,
      'logo-apple-appstore': 1,
      'logo-apple-ar': 1,
      'logo-behance': 1,
      'logo-bitbucket': 1,
      'logo-bitcoin': 1,
      'logo-buffer': 1,
      'logo-capacitor': 1,
      'logo-chrome': 1,
      'logo-closed-captioning': 1,
      'logo-codepen': 1,
      'logo-css3': 1,
      'logo-designernews': 1,
      'logo-deviantart': 1,
      'logo-discord': 1,
      'logo-docker': 1,
      'logo-dribbble': 1,
      'logo-dropbox': 1,
      'logo-edge': 1,
      'logo-electron': 1,
      'logo-euro': 1,
      'logo-facebook': 1,
      'logo-figma': 1,
      'logo-firebase': 1,
      'logo-firefox': 1,
      'logo-flickr': 1,
      'logo-foursquare': 1,
      'logo-github': 1,
      'logo-gitlab': 1,
      'logo-google': 1,
      'logo-google-playstore': 1,
      'logo-hackernews': 1,
      'logo-html5': 1,
      'logo-instagram': 1,
      'logo-ionic': 1,
      'logo-ionitron': 1,
      'logo-javascript': 1,
      'logo-laravel': 1,
      'logo-linkedin': 1,
      'logo-markdown': 1,
      'logo-mastodon': 1,
      'logo-medium': 1,
      'logo-microsoft': 1,
      'logo-no-smoking': 1,
      'logo-nodejs': 1,
      'logo-npm': 1,
      'logo-octocat': 1,
      'logo-paypal': 1,
      'logo-pinterest': 1,
      'logo-playstation': 1,
      'logo-pwa': 1,
      'logo-python': 1,
      'logo-react': 1,
      'logo-reddit': 1,
      'logo-rss': 1,
      'logo-sass': 1,
      'logo-skype': 1,
      'logo-slack': 1,
      'logo-snapchat': 1,
      'logo-soundcloud': 1,
      'logo-stackoverflow': 1,
      'logo-steam': 1,
      'logo-stencil': 1,
      'logo-tableau': 1,
      'logo-tiktok': 1,
      'logo-tumblr': 1,
      'logo-tux': 1,
      'logo-twitch': 1,
      'logo-twitter': 1,
      'logo-usd': 1,
      'logo-venmo': 1,
      'logo-vercel': 1,
      'logo-vimeo': 1,
      'logo-vk': 1,
      'logo-vue': 1,
      'logo-web-component': 1,
      'logo-wechat': 1,
      'logo-whatsapp': 1,
      'logo-windows': 1,
      'logo-wordpress': 1,
      'logo-xbox': 1,
      'logo-xing': 1,
      'logo-yahoo': 1,
      'logo-yen': 1,
      'logo-youtube': 1,
      'magnet': 7,
      'mail': 7,
      'mail-open': 7,
      'mail-unread': 7,
      'male': 7,
      'male-female': 7,
      'man': 7,
      'map': 7,
      'medal': 7,
      'medical': 7,
      'medkit': 7,
      'megaphone': 7,
      'menu': 7,
      'mic': 7,
      'mic-circle': 7,
      'mic-off': 7,
      'mic-off-circle': 7,
      'moon': 7,
      'move': 7,
      'musical-note': 7,
      'musical-notes': 7,
      'navigate': 7,
      'navigate-circle': 7,
      'newspaper': 7,
      'notifications': 7,
      'notifications-circle': 7,
      'notifications-off': 7,
      'notifications-off-circle': 7,
      'nuclear': 7,
      'nutrition': 7,
      'open': 7,
      'options': 7,
      'paper-plane': 7,
      'partly-sunny': 7,
      'pause': 7,
      'pause-circle': 7,
      'paw': 7,
      'pencil': 7,
      'people': 7,
      'people-circle': 7,
      'person': 7,
      'person-add': 7,
      'person-circle': 7,
      'person-remove': 7,
      'phone-landscape': 7,
      'phone-portrait': 7,
      'pie-chart': 7,
      'pin': 7,
      'pint': 7,
      'pizza': 7,
      'planet': 7,
      'play': 7,
      'play-back': 7,
      'play-back-circle': 7,
      'play-circle': 7,
      'play-forward': 7,
      'play-forward-circle': 7,
      'play-skip-back': 7,
      'play-skip-back-circle': 7,
      'play-skip-forward': 7,
      'play-skip-forward-circle': 7,
      'podium': 7,
      'power': 7,
      'pricetag': 7,
      'pricetags': 7,
      'print': 7,
      'prism': 7,
      'pulse': 7,
      'push': 7,
      'qr-code': 7,
      'radio': 7,
      'radio-button-off': 7,
      'radio-button-on': 7,
      'rainy': 7,
      'reader': 7,
      'receipt': 7,
      'recording': 7,
      'refresh': 7,
      'refresh-circle': 7,
      'reload': 7,
      'reload-circle': 7,
      'remove': 7,
      'remove-circle': 7,
      'reorder-four': 7,
      'reorder-three': 7,
      'reorder-two': 7,
      'repeat': 7,
      'resize': 7,
      'restaurant': 7,
      'return-down-back': 7,
      'return-down-forward': 7,
      'return-up-back': 7,
      'return-up-forward': 7,
      'ribbon': 7,
      'rocket': 7,
      'rose': 7,
      'sad': 7,
      'save': 7,
      'scale': 7,
      'scan': 7,
      'scan-circle': 7,
      'school': 7,
      'search': 7,
      'search-circle': 7,
      'send': 7,
      'server': 7,
      'settings': 7,
      'shapes': 7,
      'share': 7,
      'share-social': 7,
      'shield': 7,
      'shield-checkmark': 7,
      'shield-half': 7,
      'shirt': 7,
      'shuffle': 7,
      'skull': 7,
      'snow': 7,
      'sparkles': 7,
      'speedometer': 7,
      'square': 7,
      'star': 7,
      'star-half': 7,
      'stats-chart': 7,
      'stop': 7,
      'stop-circle': 7,
      'stopwatch': 7,
      'storefront': 7,
      'subway': 7,
      'sunny': 7,
      'swap-horizontal': 7,
      'swap-vertical': 7,
      'sync': 7,
      'sync-circle': 7,
      'tablet-landscape': 7,
      'tablet-portrait': 7,
      'telescope': 7,
      'tennisball': 7,
      'terminal': 7,
      'text': 7,
      'thermometer': 7,
      'thumbs-down': 7,
      'thumbs-up': 7,
      'thunderstorm': 7,
      'ticket': 7,
      'time': 7,
      'timer': 7,
      'today': 7,
      'toggle': 7,
      'trail-sign': 7,
      'train': 7,
      'transgender': 7,
      'trash': 7,
      'trash-bin': 7,
      'trending-down': 7,
      'trending-up': 7,
      'triangle': 7,
      'trophy': 7,
      'tv': 7,
      'umbrella': 7,
      'unlink': 7,
      'videocam': 7,
      'videocam-off': 7,
      'volume-high': 7,
      'volume-low': 7,
      'volume-medium': 7,
      'volume-mute': 7,
      'volume-off': 7,
      'walk': 7,
      'wallet': 7,
      'warning': 7,
      'watch': 7,
      'water': 7,
      'wifi': 7,
      'wine': 7,
      'woman': 7,
    },
  };
})(typeof window !== 'undefined' ? window : globalThis);

/**
 * Ionicons 7.1.0 variant metadata (filled / outline / sharp) from cheatsheet-derived registry.
 * Use {@link ToolskinIonIcons.resolveIonIconName} for `<ion-icon name>` and SVG filenames.
 */
const ToolskinIonIcons = {
  FILLED: 1,
  OUTLINE: 2,
  SHARP: 4,
  registry() {
    return typeof window !== 'undefined' ? window.TOOLSKIN_IONICONS_710 : null;
  },
  flags(base) {
    const r = this.registry();
    if (!r || !r.flags || base == null || base === '') return this.FILLED | this.OUTLINE | this.SHARP;
    const v = r.flags[base];
    return typeof v === 'number' ? v : 0;
  },
  hasFilled(base) {
    return (this.flags(base) & this.FILLED) !== 0;
  },
  hasOutline(base) {
    return (this.flags(base) & this.OUTLINE) !== 0;
  },
  hasSharp(base) {
    return (this.flags(base) & this.SHARP) !== 0;
  },
  listBases() {
    const r = this.registry();
    return r && r.flags ? Object.keys(r.flags).sort() : [];
  },
  /**
   * @param {string} base — icon base name (no -outline / -sharp)
   * @param {{ outline?: boolean, sharp?: boolean }} opts — sharp wins over outline
   * @returns {string} name for ion-icon / SVG stem (filled fallback when variant missing)
   */
  resolveIonIconName(base, opts) {
    const o = opts || {};
    const sharp = !!o.sharp;
    const outline = !!o.outline && !sharp;
    if (!base) return '';
    if (sharp && this.hasSharp(base)) return `${base}-sharp`;
    if (outline && this.hasOutline(base)) return `${base}-outline`;
    return this.hasFilled(base) ? base : '';
  },
};

if (typeof window !== 'undefined') window.ToolskinIonIcons = ToolskinIonIcons;

/* ═══════════════════════════════════════════════════════════════════
   CONFIGURATION MODULE
   Centralized configuration with defaults and validation.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinConfig {
  static defaults = {
    // Smooth scroll settings (Lenis)
    smoothScroll: {
      enabled: false,
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
      contentMaxWidth: '1400px', // Max width for content-focused layouts
      enableNoise: true, // Global grain/noise overlay
      noiseOpacity: 1, // 0-1
      fullpage: false, // Fullpage snap scrolling
      elasticMode: false, // Brutalist full-width mode
    },

    // Custom cursor (off by default — opt in per page via window.__TOOLSKIN_CONFIG__)
    cursor: {
      enabled: false,
      mode: 'simple',          // 'simple' | 'tooltip' — simple = circle only, tooltip = full featured
      size: 20,
      grow: 3,
      easing: 1,            // Faster settle to reduce rAF churn and memory pressure
      followerEasing: 0.78,    // Follower snaps quickly when enabled
      follower: false,         // Default off for performance; opt-in per page
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
      stagger: 0.06,              // GSAP stagger delay between auto-revealed siblings
      threshold: 0.12,            // IntersectionObserver threshold (fallback)
      rootMargin: '0px 0px -48px 0px',  // IntersectionObserver rootMargin (fallback)
    },

    // Hover tooltips — enabled by default; opt out: `tooltips: { enabled: false }` in __TOOLSKIN_CONFIG__, or `data-ts-tooltips="off"` on <html>.
    tooltips: {
      enabled: true,
      scopeSelector: 'body',
      attribute: 'data-tooltip',
      showDelay: 30,
      hideDelay: 0,
      minWidth: 80,
      maxWidth: 300,
      arrowSize: 8,
      spacing: 10,
      padding: 10,
      zIndex: 100000,
    },

    // Top preloader: determinate bar tracks DOM + images + window load (safety cap only)
    preloader: {
      enabled: true,
      selector: '#ts-preloader',
      maxVisibleMs: 60000,
      trackImages: true,
      /** Minimum time the preloader stays visible after load+fonts (0 = off). */
      minVisibleMs: 0,
      /** Additional hold (ms) after minVisibleMs, before dismiss. */
      extraHoldAfterLoadMs: 0,
      /** Wait for `document.fonts.ready` before dismissing (when Font Loading API exists). */
      waitForFonts: true,
      /**
       * When true (or `window.TS_DEBUG_PRELOADER`), auto-dismiss is disabled after load.
       * Press Escape to dismiss. Set `window.TS_DEBUG_PRELOADER = true` before toolskin.js runs.
       */
      debug: false,
    },

  };

  static current = {};

  static init(userConfig = {}) {
    this.current = this.deepMerge(this.defaults, userConfig);

    // Class-driven overrides on <html> or <body> — highest precedence.
    // Recognized classes: ts-enable-cursor, ts-disable-cursor,
    // ts-enable-lenis, ts-disable-lenis, ts-enable-locomotive, ts-disable-locomotive.
    const root = document.documentElement;
    const body = document.body;
    const has = (cls) => root.classList.contains(cls) || (body && body.classList.contains(cls));

    if (has('ts-enable-cursor'))       this.current.cursor.enabled = true;
    if (has('ts-disable-cursor'))      this.current.cursor.enabled = false;
    if (has('ts-enable-lenis'))        this.current.smoothScroll.enabled = true;
    if (has('ts-disable-lenis'))       this.current.smoothScroll.enabled = false;
    if (has('ts-enable-locomotive'))   this.current.locomotiveScroll.enabled = true;
    if (has('ts-disable-locomotive'))  this.current.locomotiveScroll.enabled = false;

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

/**
 * Curated surface + text token presets for dark/light (testing & tuning).
 * “Practical” recommended pair is the factory default; applied on init.
 */
const TOOLSKIN_SURFACE_PRESETS = {
  meta: {
    deliveryNotes:
      'Classic = earlier Neutral Cool / Clean family (rollback). Practical = measured ~12–15% luminance steps, production-friendly contrast. Defaults use Practical · Neutral + Clean neutral. Softer hairline borders in CSS; OKLCh text tuner (colorjs.io) still nudges secondary/muted.',
  },
  dark: [
    {
      id: 'dark-neutral-cool-v1',
      label: 'Classic · V1 Neutral Cool',
      shortLabel: 'Classic Neutral',
      recommended: false,
      contrast: 'Primary ~14.2:1 · Secondary ~6.8:1 · Muted ~4.2:1',
      description: 'Original cool-neutral charcoal ramp — the earlier “best” default before extreme HC tests.',
      tokens: {
        'ts-bg-body': '#0a0b0f',
        'ts-bg-0': '#0e0f14',
        'ts-bg-1': '#13151b',
        'ts-bg-2': '#191c24',
        'ts-bg-3': '#20242e',
        'ts-bg-4': '#282d39',
        'ts-bg-5': '#323844',
        'ts-text-primary': '#f4f5f9',
        'ts-text-secondary': '#a8adb9',
        'ts-text-muted': '#70758a',
      },
    },
    {
      id: 'dark-warm-slate-v2',
      label: 'Classic · V2 Warm Slate',
      shortLabel: 'Classic Warm',
      recommended: false,
      contrast: 'Primary ~13.8:1 · Secondary ~6.5:1 · Muted ~4.1:1',
      description: 'Warm stone undertone — pairs well with orange accent without a cold cast.',
      tokens: {
        'ts-bg-body': '#0b0a0d',
        'ts-bg-0': '#0f0e12',
        'ts-bg-1': '#151419',
        'ts-bg-2': '#1c1b22',
        'ts-bg-3': '#24232c',
        'ts-bg-4': '#2d2c37',
        'ts-bg-5': '#383743',
        'ts-text-primary': '#f3f4f8',
        'ts-text-secondary': '#a5aab7',
        'ts-text-muted': '#6e7485',
      },
    },
    {
      id: 'dark-blue-tinted-v3',
      label: 'Classic · V3 Blue-Tinted Professional',
      shortLabel: 'Classic Blue',
      recommended: false,
      contrast: 'Primary ~14.5:1 · Secondary ~7.1:1 · Muted ~4.3:1',
      description: 'Cool slate-blue surfaces for data-heavy / dashboard layouts.',
      tokens: {
        'ts-bg-body': '#090a0e',
        'ts-bg-0': '#0d0e13',
        'ts-bg-1': '#12141a',
        'ts-bg-2': '#181b23',
        'ts-bg-3': '#1f232d',
        'ts-bg-4': '#272c38',
        'ts-bg-5': '#313744',
        'ts-text-primary': '#f5f6fa',
        'ts-text-secondary': '#aab0bc',
        'ts-text-muted': '#737991',
      },
    },
    {
      id: 'dark-practical-neutral-v1',
      label: 'Practical · Neutral with proper steps (recommended)',
      shortLabel: 'Practical Neutral',
      recommended: true,
      contrast: 'Primary ~12.8:1 · Secondary ~6.2:1 · Muted ~4.1:1 vs bg-body',
      description:
        'Conservative, tested steps — readable type without harsh extremes; default production pair (with Practical Clean light).',
      tokens: {
        'ts-bg-body': '#0c0d0f',
        'ts-bg-0': '#111214',
        'ts-bg-1': '#17181b',
        'ts-bg-2': '#1f2024',
        'ts-bg-3': '#28292e',
        'ts-bg-4': '#323439',
        'ts-bg-5': '#3e4045',
        'ts-text-primary': '#e8e9ea',
        'ts-text-secondary': '#9ea0a5',
        'ts-text-muted': '#6d6f74',
      },
    },
    {
      id: 'dark-practical-cool-v2',
      label: 'Practical · Slightly cool',
      shortLabel: 'Practical Cool',
      recommended: false,
      contrast: 'Cool-tinted ramp; balanced secondary/muted on slate surfaces',
      description: 'Alternative cool stack — distinct from practical neutral, still UI-safe.',
      tokens: {
        'ts-bg-body': '#0b0c0e',
        'ts-bg-0': '#101214',
        'ts-bg-1': '#16181c',
        'ts-bg-2': '#1e2025',
        'ts-bg-3': '#272930',
        'ts-bg-4': '#31343c',
        'ts-bg-5': '#3d4048',
        'ts-text-primary': '#e7e8eb',
        'ts-text-secondary': '#9da0a8',
        'ts-text-muted': '#6c6f77',
      },
    },
  ],
  light: [
    {
      id: 'light-neutral-clean-v1',
      label: 'Classic · V1 Neutral Clean',
      shortLabel: 'Classic Clean',
      recommended: false,
      contrast: 'Primary ~15.1:1 · Secondary ~9.2:1 · Muted ~5.1:1',
      description: 'Cool off-white base with neutral greys — earlier tuned light palette.',
      tokens: {
        'ts-bg-body': '#f8f9fb',
        'ts-bg-0': '#ffffff',
        'ts-bg-1': '#fafbfc',
        'ts-bg-2': '#f3f4f7',
        'ts-bg-3': '#e8eaef',
        'ts-bg-4': '#d8dce3',
        'ts-bg-5': '#c5cbd4',
        'ts-text-primary': '#0d0e12',
        'ts-text-secondary': '#2b2f3d',
        'ts-text-muted': '#656b7d',
      },
    },
    {
      id: 'light-warm-paper-v2',
      label: 'Classic · V2 Warm Paper',
      shortLabel: 'Classic Paper',
      recommended: false,
      contrast: 'Primary ~14.8:1 · Secondary ~8.9:1 · Muted ~4.9:1',
      description: 'Slightly warmer greys for editorial / long-form feel.',
      tokens: {
        'ts-bg-body': '#f7f8fa',
        'ts-bg-0': '#ffffff',
        'ts-bg-1': '#fafbfc',
        'ts-bg-2': '#f2f4f6',
        'ts-bg-3': '#e7e9ed',
        'ts-bg-4': '#d7dbe2',
        'ts-bg-5': '#c4c9d3',
        'ts-text-primary': '#0e0f13',
        'ts-text-secondary': '#2d313f',
        'ts-text-muted': '#68707f',
      },
    },
    {
      id: 'light-cool-professional-v3',
      label: 'Classic · V3 Cool Professional',
      shortLabel: 'Classic Cool Pro',
      recommended: false,
      contrast: 'Primary ~15.3:1 · Secondary ~9.5:1 · Muted ~5.2:1',
      description: 'Cool-tinted light chrome for dashboards and dense tables.',
      tokens: {
        'ts-bg-body': '#f9fafb',
        'ts-bg-0': '#ffffff',
        'ts-bg-1': '#fbfcfd',
        'ts-bg-2': '#f4f5f8',
        'ts-bg-3': '#e9ebef',
        'ts-bg-4': '#d9dde4',
        'ts-bg-5': '#c6ccd5',
        'ts-text-primary': '#0c0d11',
        'ts-text-secondary': '#2a2e3c',
        'ts-text-muted': '#636a7b',
      },
    },
    {
      id: 'light-practical-clean-v1',
      label: 'Practical · Clean neutral (recommended)',
      shortLabel: 'Practical Clean',
      recommended: true,
      contrast: 'Primary ~13.2:1 · Secondary ~7.8:1 · Muted ~4.5:1 vs bg-body',
      description:
        'Measured light ramp with confident ink — default with Practical Neutral dark.',
      tokens: {
        'ts-bg-body': '#f7f8f9',
        'ts-bg-0': '#ffffff',
        'ts-bg-1': '#f4f5f6',
        'ts-bg-2': '#ecedef',
        'ts-bg-3': '#e1e3e6',
        'ts-bg-4': '#d4d7db',
        'ts-bg-5': '#c5c9ce',
        'ts-text-primary': '#0f1012',
        'ts-text-secondary': '#404347',
        'ts-text-muted': '#6b6e72',
      },
    },
    {
      id: 'light-practical-cool-v2',
      label: 'Practical · Slightly cool',
      shortLabel: 'Practical Cool',
      recommended: false,
      contrast: 'Cool-tinted surfaces; secondary/muted tuned for light chrome',
      description: 'Slightly cooler than clean neutral — good for analytics UIs.',
      tokens: {
        'ts-bg-body': '#f6f7f9',
        'ts-bg-0': '#ffffff',
        'ts-bg-1': '#f3f4f6',
        'ts-bg-2': '#ebedef',
        'ts-bg-3': '#e0e3e7',
        'ts-bg-4': '#d3d7dc',
        'ts-bg-5': '#c4c9cf',
        'ts-text-primary': '#0e0f12',
        'ts-text-secondary': '#3f4246',
        'ts-text-muted': '#6a6d72',
      },
    },
  ],
};

function _toolskinCloneThemeTokens(t) {
  return { ...t };
}

/** Mix text ramp + slight bg-2 readjust for surface token maps (requires Color.js). */
function _toolskinApplyContrastToTokenMap(map, tension01) {
  if (typeof Color === 'undefined' || !map) return false;
  try {
    const t = Math.max(0, Math.min(1, Number(tension01) || 0));
    const tp = map['ts-text-primary'];
    const tb = map['ts-bg-body'];
    const b1 = map['ts-bg-1'] || tb;
    const b3 = map['ts-bg-3'] || tb;
    const wSec = 0.12 + t * 0.38;
    const wMut = 0.28 + t * 0.42;
    const wAnchorMid = 0.35 + t * 0.3;
    const wAnchorDeep = 0.2 + t * 0.45;
    const P = new Color(tp);
    const B = new Color(tb);
    const B1 = new Color(b1);
    const B3 = new Color(b3);
    const anchor = B.mix(B1, wAnchorMid, { space: 'oklch' });
    const anchorDeep = anchor.mix(B3, wAnchorDeep, { space: 'oklch' });
    const sec = P.mix(anchor, wSec, { space: 'oklch' }).to('srgb').toString({ format: 'hex' });
    const mut = P.mix(anchorDeep, wMut, { space: 'oklch' }).to('srgb').toString({ format: 'hex' });
    map['ts-text-secondary'] = sec;
    map['ts-text-muted'] = mut;
    const bg2 = map['ts-bg-2'] || tb;
    const bg2c = new Color(bg2);
    map['ts-bg-2'] = bg2c.mix(anchor, 0.06 + t * 0.06, { space: 'oklch' }).to('srgb').toString({ format: 'hex' });
    return true;
  } catch (e) {
    return false;
  }
}

class ToolskinTheme {
  constructor(config) {
    this.config = config;
    this.root = document.documentElement;
    this.currentMode = this.config.mode;

    const darkDefault = TOOLSKIN_SURFACE_PRESETS.dark.find(p => p.recommended) || TOOLSKIN_SURFACE_PRESETS.dark[0];
    const lightDefault = TOOLSKIN_SURFACE_PRESETS.light.find(p => p.recommended) || TOOLSKIN_SURFACE_PRESETS.light[0];

    this._defaultDarkTheme = _toolskinCloneThemeTokens(darkDefault.tokens);
    this._defaultLightTheme = _toolskinCloneThemeTokens(lightDefault.tokens);

    this.darkTheme = _toolskinCloneThemeTokens(this._defaultDarkTheme);
    this.lightTheme = _toolskinCloneThemeTokens(this._defaultLightTheme);
    /** Snapshot for reverting contrast-tweak Apply (ts-text-*, ts-bg-2 per mode). */
    this._contrastTweakSnapshot = null;

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

  _applyRootFromTheme(theme) {
    Object.entries(theme).forEach(([key, value]) => {
      this.root.style.setProperty(`--${key}`, value);
    });
  }

  /**
   * Apply dark-mode surface/text tokens only (isolates dark palette from light).
   * Updates live CSS only when the active mode is dark.
   */
  applyDarkSurfacePreset(presetId) {
    const preset = TOOLSKIN_SURFACE_PRESETS.dark.find(p => p.id === presetId);
    if (!preset) return null;
    this._contrastTweakSnapshot = null;
    Object.assign(this.darkTheme, preset.tokens);
    if (this.currentMode === 'dark') {
      this._applyRootFromTheme(this.darkTheme);
    }
    return preset;
  }

  /**
   * Apply light-mode surface/text tokens only (isolates light palette from dark).
   */
  applyLightSurfacePreset(presetId) {
    const preset = TOOLSKIN_SURFACE_PRESETS.light.find(p => p.id === presetId);
    if (!preset) return null;
    this._contrastTweakSnapshot = null;
    Object.assign(this.lightTheme, preset.tokens);
    if (this.currentMode === 'light') {
      this._applyRootFromTheme(this.lightTheme);
    }
    return preset;
  }

  /** Restore both modes to factory defaults (Practical recommended each). */
  resetSurfacePresets() {
    this._contrastTweakSnapshot = null;
    this.darkTheme = _toolskinCloneThemeTokens(this._defaultDarkTheme);
    this.lightTheme = _toolskinCloneThemeTokens(this._defaultLightTheme);
    const active = this.currentMode === 'light' ? this.lightTheme : this.darkTheme;
    this._applyRootFromTheme(active);
    return { dark: this.darkTheme, light: this.lightTheme };
  }

  getSurfacePresetsCatalog() {
    return TOOLSKIN_SURFACE_PRESETS;
  }

  /**
   * Apply contrast tension slider (0–1) to both dark and light surface maps. Requires Color.js.
   * Removes temporary :root overrides for text secondary/muted so map values show.
   */
  applyContrastTweakToMaps(tension01) {
    if (typeof Color === 'undefined') return false;
    this._contrastTweakSnapshot = {
      dark: {
        'ts-text-secondary': this.darkTheme['ts-text-secondary'],
        'ts-text-muted': this.darkTheme['ts-text-muted'],
        'ts-bg-2': this.darkTheme['ts-bg-2'],
      },
      light: {
        'ts-text-secondary': this.lightTheme['ts-text-secondary'],
        'ts-text-muted': this.lightTheme['ts-text-muted'],
        'ts-bg-2': this.lightTheme['ts-bg-2'],
      },
    };
    const okD = _toolskinApplyContrastToTokenMap(this.darkTheme, tension01);
    const okL = _toolskinApplyContrastToTokenMap(this.lightTheme, tension01);
    if (!okD || !okL) {
      this._contrastTweakSnapshot = null;
      return false;
    }
    document.documentElement.style.removeProperty('--ts-text-secondary');
    document.documentElement.style.removeProperty('--ts-text-muted');
    const active = this.currentMode === 'light' ? this.lightTheme : this.darkTheme;
    this._applyRootFromTheme(active);
    return true;
  }

  /** Revert last applyContrastTweakToMaps; falls back to removing :root overrides only. */
  revertContrastTweakMaps() {
    document.documentElement.style.removeProperty('--ts-text-secondary');
    document.documentElement.style.removeProperty('--ts-text-muted');
    if (this._contrastTweakSnapshot) {
      const s = this._contrastTweakSnapshot;
      Object.assign(this.darkTheme, s.dark);
      Object.assign(this.lightTheme, s.light);
      this._contrastTweakSnapshot = null;
    }
    const active = this.currentMode === 'light' ? this.lightTheme : this.darkTheme;
    this._applyRootFromTheme(active);
  }

  /** Shallow clones of editable surface tokens for export (showcase / handoff). */
  getSurfaceTokenMaps() {
    return {
      dark: { ...this.darkTheme },
      light: { ...this.lightTheme },
    };
  }

  setMode(mode, save = true, opts = {}) {
    this.currentMode = mode;
    const theme = mode === 'light' ? this.lightTheme : this.darkTheme;

    this._applyRootFromTheme(theme);

    // Update data attribute for CSS targeting
    this.root.setAttribute('data-theme', mode);
    this.root.setAttribute('data-ts-theme', mode);

    // Save preference
    if (save && this.config.savePreference) {
      localStorage.setItem(this.config.storageKey, mode);
    }

    // Dispatch event (optionally skip e.g. programmatic refresh)
    if (!opts.suppressThemeChangeEvent) {
      window.dispatchEvent(
        new CustomEvent('ts:theme-change', {
          detail: { mode, userInitiated: !!opts.userInitiated },
        })
      );
    }
  }

  toggle() {
    const newMode = this.currentMode === 'dark' ? 'light' : 'dark';
    this.setMode(newMode, true, { userInitiated: true });
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

    window.dispatchEvent(new CustomEvent('ts:accent', { detail: { h, s, l } }));
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

    this._setOnAccentByContrast(hex);
  }

  static _setOnAccentByContrast(hex) {
    const root = document.documentElement;
    try {
      if (typeof Color !== 'undefined') {
        const accent = new Color(hex);
        const white = new Color('#ffffff');
        const black = new Color('#000000');
        const cWhite = Number(accent.contrast(white, 'WCAG21') || 0);
        const cBlack = Number(accent.contrast(black, 'WCAG21') || 0);
        const onAccent = cWhite >= cBlack ? '#ffffff' : '#0f1012';
        root.style.setProperty('--ts-on-accent', onAccent);
        root.style.setProperty('--ts-accent-contrast', String(Math.max(cWhite, cBlack).toFixed(2)));
        window.dispatchEvent(new CustomEvent('ts:accent-contrast', { detail: { onAccent, cWhite, cBlack } }));
        return;
      }
    } catch (e) {
      // fallback below
    }
    const c = String(hex || '').replace('#', '');
    if (!/^[0-9a-fA-F]{6}$/.test(c)) return;
    const r = parseInt(c.slice(0, 2), 16) / 255;
    const g = parseInt(c.slice(2, 4), 16) / 255;
    const b = parseInt(c.slice(4, 6), 16) / 255;
    const toLin = (v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
    const L = 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b);
    const cWhite = (1.05) / (L + 0.05);
    const cBlack = (L + 0.05) / 0.05;
    const onAccent = cWhite >= cBlack ? '#ffffff' : '#0f1012';
    root.style.setProperty('--ts-on-accent', onAccent);
    root.style.setProperty('--ts-accent-contrast', String(Math.max(cWhite, cBlack).toFixed(2)));
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
    /** Caches Lenis `prevent()` scrollability checks — getComputedStyle per wheel was forcing reflows */
    this._preventScrollCache = new Map();
    this._visibilityHandler = null;
    this._scrollSpyIO = null;
    this._anchorClickHandler = null;
    this._resizeClearHandler = null;
    this._rafLoop = null;
    this._gsapTicker = null;

    if (this.config.enabled && typeof Lenis !== 'undefined') {
      this._init();
    } else {
      // Smooth scroll disabled or Lenis not loaded — anchor links and scrollspy work independently.
      this._setupAnchorLinks();
      this._setupScrollSpy();
    }
  }

  _init() {
    this._resizeClearHandler = () => this._preventScrollCache.clear();
    window.addEventListener('resize', this._resizeClearHandler, { passive: true });

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
        if (node.hasAttribute?.('data-lenis-prevent')) return true;
        if (this._preventScrollCache.has(node)) return this._preventScrollCache.get(node);
        const { overflowY, overflowX } = getComputedStyle(node);
        const scrollY =
          (overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight + 1;
        const scrollX =
          (overflowX === 'auto' || overflowX === 'scroll') && node.scrollWidth > node.clientWidth + 1;
        const val = !!(scrollY || scrollX);
        this._preventScrollCache.set(node, val);
        return val;
      },
    });

    // Sync with GSAP ScrollTrigger if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      let stQueued = null;
      this.lenis.on('scroll', () => {
        if (stQueued != null) return;
        stQueued = requestAnimationFrame(() => {
          stQueued = null;
          ScrollTrigger.update();
        });
      });
      this._gsapTicker = (time) => {
        this.lenis.raf(time * 1000);
      };
      gsap.ticker.add(this._gsapTicker);
      gsap.ticker.lagSmoothing(0);
    } else {
      // Fallback: standard RAF loop when GSAP not available
      this._rafLoop = (time) => {
        this.lenis.raf(time);
        requestAnimationFrame(this._rafLoop);
      };
      requestAnimationFrame(this._rafLoop);
    }

    // Anchor link smooth scroll
    this._setupAnchorLinks();

    // Active navigation on scroll
    this._setupScrollSpy();
    this._setupVisibilityLifecycle();

    // Expose to window
    window.lenis = this.lenis;
  }

  _setupAnchorLinks() {
    this._anchorClickHandler = (e) => {
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

      if (this.lenis) {
        this.lenis.scrollTo(target, {
          offset: -headerOffset,
          duration: this.config.duration,
        });
      } else {
        const rect = target.getBoundingClientRect();
        const top = rect.top + window.scrollY - headerOffset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }

      // Update URL without jumping
      if (history.pushState) {
        history.pushState(null, null, href);
      } else {
        location.hash = href;
      }

      try {
        if (window.Toolskin && window.Toolskin.mobileMenu && typeof window.Toolskin.mobileMenu.closeAll === 'function') {
          window.Toolskin.mobileMenu.closeAll();
        }
      } catch (_) {
        /* ignore */
      }
    };
    // Capture phase: clicks inside `.ts-mobile-menu` bubble `stopPropagation`, which blocked this on `document` bubble.
    document.addEventListener('click', this._anchorClickHandler, true);
  }

  _setupScrollSpy() {
    const sections = document.querySelectorAll('section[id], [id][data-scroll-section]');
    if (sections.length === 0) return;
    const links = [...document.querySelectorAll('a[href^="#"]')];
    const setActiveById = (sectionId) => {
      if (!sectionId) return;
      links.forEach(link => {
        const isActive = link.getAttribute('href') === `#${sectionId}`;
        link.classList.toggle('active', isActive);
        link.classList.toggle('ts-active', isActive);
      });
    };
    if ('IntersectionObserver' in window) {
      this._scrollSpyIO = new IntersectionObserver((entries) => {
        let best = null;
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        });
        if (best) setActiveById(best.target.getAttribute('id'));
      }, { threshold: [0.2, 0.4, 0.6], rootMargin: '-72px 0px -45% 0px' });
      sections.forEach(section => this._scrollSpyIO.observe(section));
    } else {
      const firstId = sections[0]?.getAttribute('id');
      setActiveById(firstId);
    }
  }

  _setupVisibilityLifecycle() {
    this._visibilityHandler = () => {
      if (!this.lenis) return;
      if (document.visibilityState !== 'visible') this.lenis.stop();
      else this.lenis.start();
    };
    document.addEventListener('visibilitychange', this._visibilityHandler, { passive: true });
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

  destroy() {
    if (this._scrollSpyIO) {
      this._scrollSpyIO.disconnect();
      this._scrollSpyIO = null;
    }
    if (this._anchorClickHandler) {
      document.removeEventListener('click', this._anchorClickHandler, true);
      this._anchorClickHandler = null;
    }
    if (this._visibilityHandler) {
      document.removeEventListener('visibilitychange', this._visibilityHandler);
      this._visibilityHandler = null;
    }
    if (this._resizeClearHandler) {
      window.removeEventListener('resize', this._resizeClearHandler);
      this._resizeClearHandler = null;
    }
    if (typeof gsap !== 'undefined' && this._gsapTicker) {
      gsap.ticker.remove(this._gsapTicker);
      this._gsapTicker = null;
    }
    if (this.lenis && typeof this.lenis.destroy === 'function') {
      this.lenis.destroy();
    }
    this.lenis = null;
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
   SLIDER MODULE (MVP)
   `[data-ts-slider]` root with `img` slides; optional `.ts-slider-dots` inside root
   (or selector in `data-ts-slider-dots`, scoped to root first then document).
   `data-ts-slider-interval` — ms between slides (default 4000). `data-ts-slider-dots="none"` — no dots.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinSlider {
  constructor(root) {
    this.root = root;
    const ds = root.dataset;
    this.intervalMs = Math.max(400, parseInt(String(ds.tsSliderInterval || '4000'), 10) || 4000);
    this.images = [...root.querySelectorAll('img')];
    this.dotsContainer = this._resolveDotsContainer(ds);
    this.current = 0;
    this._interval = null;
    this._io = null;
    this._onEnter = () => this._clearInterval();
    this._onLeave = () => this._resetInterval();
    this._onIo = (entries) => {
      const entry = entries[0];
      if (!entry) return;
      if (entry.isIntersecting) this._resetInterval();
      else this._clearInterval();
    };
    if (this.images.length === 0) return;
    this._ensureFirstActive();
    this._buildDots();
    this._bind();
    this._resetInterval();
    if ('IntersectionObserver' in window) {
      this._io = new IntersectionObserver(this._onIo, { threshold: 0.2 });
      this._io.observe(this.root);
    }
  }

  _resolveDotsContainer(ds) {
    if (ds.tsSliderDots === 'none' || ds.tsSliderDots === 'false') return null;
    if (ds.tsSliderDots) {
      const sel = ds.tsSliderDots;
      return this.root.querySelector(sel) || document.querySelector(sel);
    }
    return this.root.querySelector('.ts-slider-dots');
  }

  _ensureFirstActive() {
    const hasActive = this.images.some((img) => img.classList.contains('active'));
    if (!hasActive && this.images[0]) this.images[0].classList.add('active');
    this.current = Math.max(0, this.images.findIndex((img) => img.classList.contains('active')));
  }

  _buildDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = '';
    this.images.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'ts-slider-dot' + (i === this.current ? ' active' : '');
      dot.setAttribute('role', 'button');
      dot.setAttribute('tabindex', '0');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => this.goTo(i));
      dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.goTo(i);
        }
      });
      this.dotsContainer.appendChild(dot);
    });
  }

  _bind() {
    this.root.addEventListener('mouseenter', this._onEnter);
    this.root.addEventListener('mouseleave', this._onLeave);
  }

  _clearInterval() {
    if (this._interval != null) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  _resetInterval() {
    this._clearInterval();
    if (this.images.length <= 1) return;
    this._interval = window.setInterval(() => this.next(), this.intervalMs);
  }

  goTo(idx) {
    if (!this.images.length) return;
    const n = this.images.length;
    const i = ((idx % n) + n) % n;
    this.images[this.current].classList.remove('active');
    if (this.dotsContainer && this.dotsContainer.children[this.current]) {
      this.dotsContainer.children[this.current].classList.remove('active');
    }
    this.current = i;
    this.images[this.current].classList.add('active');
    if (this.dotsContainer && this.dotsContainer.children[this.current]) {
      this.dotsContainer.children[this.current].classList.add('active');
    }
    this._resetInterval();
  }

  next() {
    this.goTo(this.current + 1);
  }

  destroy() {
    this._clearInterval();
    if (this._io) {
      this._io.disconnect();
      this._io = null;
    }
    this.root.removeEventListener('mouseenter', this._onEnter);
    this.root.removeEventListener('mouseleave', this._onLeave);
    delete this.root._tsSlider;
  }

  /**
   * @param {ParentNode} [doc]
   */
  static initAll(doc = document) {
    doc.querySelectorAll('[data-ts-slider]').forEach((root) => {
      if (root._tsSlider instanceof ToolskinSlider) root._tsSlider.destroy();
      root._tsSlider = new ToolskinSlider(root);
    });
  }

  /** @param {ParentNode} [doc] */
  static destroyAll(doc = document) {
    doc.querySelectorAll('[data-ts-slider]').forEach((root) => {
      if (root._tsSlider instanceof ToolskinSlider) root._tsSlider.destroy();
    });
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
    document.body.classList.add('ts-overlay-open');
    document.body.style.overflow = 'hidden';
    overlay.dispatchEvent(new CustomEvent('ts:modal-open', { bubbles: true }));
    if (typeof window.ToolskinUIKit !== 'undefined' && typeof ToolskinUIKit.init === 'function') {
      ToolskinUIKit.init(overlay);
    }
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
    if (!this._activeStack.length) {
      document.body.style.overflow = '';
      document.body.classList.remove('ts-overlay-open');
    }
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
    // fromVars = hidden state, toVars = visible end state.
    // gsap.from() is wrong here: CSS already sets opacity:0 on .ts-fade-up, so "to" would stay 0.
    const animMap = {
      'ts-fade-up': [{ y: 40, opacity: 0 }, { y: 0, opacity: 1 }],
      'ts-fade-in': [{ opacity: 0 }, { opacity: 1 }],
      'ts-fade-left': [{ x: 40, opacity: 0 }, { x: 0, opacity: 1 }],
      'ts-fade-right': [{ x: -40, opacity: 0 }, { x: 0, opacity: 1 }],
      'ts-zoom-in': [{ scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1 }],
      'ts-zoom-out': [{ scale: 1.15, opacity: 0 }, { scale: 1, opacity: 1 }],
      'ts-slide-up': [{ y: 80, opacity: 0 }, { y: 0, opacity: 1 }],
      'ts-slide-left': [{ x: 60, opacity: 0 }, { x: 0, opacity: 1 }],
      'ts-slide-right': [{ x: -60, opacity: 0 }, { x: 0, opacity: 1 }],
    };

    const tweenDefaults = {
      duration: 0.55,
      ease: 'power2.out',
    };

    // Process elements with explicit animation classes
    for (const [cls, pair] of Object.entries(animMap)) {
      const [fromVars, toVars] = pair;
      const elements = document.querySelectorAll(`.${cls}:not(.ts-visible)`);
      if (!elements.length) continue;

      elements.forEach((el, i) => {
        let delay = 0;
        el.classList.forEach(c => {
          const m = c.match(/^ts-delay-(\d+)$/);
          if (m) delay = parseInt(m[1], 10) * 0.1;
        });

        gsap.fromTo(
          el,
          fromVars,
          {
            ...toVars,
            ...tweenDefaults,
            delay,
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              end: 'bottom 8%',
              toggleActions: 'play none none none',
              once: true,
              onEnter: () => el.classList.add('ts-visible'),
            },
          }
        );
      });
    }

    // Auto-reveal from config selectors
    if (this.config.selectors) {
      const selectors = this.config.selectors.split(',').map(s => s.trim());
      const defaultPair = animMap[this.config.defaultAnimation] || animMap['ts-fade-up'];
      const [fromVars, toVars] = defaultPair;

      selectors.forEach(selector => {
        const els = document.querySelectorAll(
          `${selector}:not(.ts-visible):not([class*="ts-fade"]):not([class*="ts-zoom"]):not([class*="ts-slide"])`
        );
        if (!els.length) return;

        gsap.fromTo(els, fromVars, {
          ...toVars,
          ...tweenDefaults,
          stagger: this.config.stagger || 0.06,
          scrollTrigger: {
            trigger: els[0].parentElement || els[0],
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
            onEnter: () => els.forEach(el => el.classList.add('ts-visible')),
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

class ToolskinMarquee {
  constructor(el) {
    this.el = el;
    this.originalText = el.textContent.trim().replace(/\s+/g, ' ');
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

    const textWidth = tempSpan.offsetWidth || 1;
    // Repeat text enough to fill at least 2x the container width (matches original inline marquee)
    const repeats = Math.ceil((containerWidth * 2) / textWidth) || 1;
    const finalString = (this.originalText + ' ').repeat(repeats);

    document.body.removeChild(tempSpan);

    // Original contract: one strip in DOM + data-text-content; CSS ::before duplicates for -50% loop
    this.textSpan.innerText = finalString;
    this.textSpan.setAttribute('data-text-content', finalString);

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
}

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
    });
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

/* 
class ToolskinIcons {
  static inject(root = document) {
    root.querySelectorAll('[data-icon], [data-ts-icon]').forEach(el => {
      if (el.dataset.iconInjected) return;
      // getAttribute is reliable for data-ts-icon across browsers; dataset.tsIcon can be flaky
      let raw = (
        el.getAttribute('data-icon') ||
        el.getAttribute('data-ts-icon') ||
        el.dataset.icon ||
        el.dataset.tsIcon ||
        ''
      ).trim();
      if (!raw) return;

      let type = '';
      let value = '';
      if (/^[\w-]+:/.test(raw)) {
        const idx = raw.indexOf(':');
        type = raw.slice(0, idx);
        value = raw.slice(idx + 1).trim();
      } else if (/^(fa-solid|fa-regular|fa-brands)\s/i.test(raw)) {
        type = 'fa';
        value = raw;
      } else {
        type = '';
        value = raw;
      }

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
 */

/**
 * Injects icon elements based on data-icon / data-ts-icon attributes.
 * Supports:
 *   - Font Awesome: "fa:fas fa-user", "fa:far fa-heart", "fa:fab fa-github"
 *   - Ionicons: "ion:grid-outline"
 *   - Any other class string is treated as a plain <i> with those classes.
 *
 * The parent element's `data-icon-pos` attribute controls placement:
 *   - "left" (default) → icon is prepended (before any text/children)
 *   - "right" → icon is appended (after existing content)
 *
 * Every generated icon gets the class `ts-icon`.
 *
 * A CSS rule is added to fade in the parent element only when its icon is ready:
 *   - For Font Awesome (plain <i>) → immediately visible after injection
 *   - For Ionicons (<ion-icon>) → visible only after the component is hydrated
 *
 * @param {HTMLElement|Document} [root=document] - The container to scan.
 */
/* ═══════════════════════════════════════════════════════════════════
   ICONS MODULE
   Renders icons from data-icon attributes.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinIcons {
  /**
   * Injects icons based on data-icon / data-ts-icon.
   * @param {HTMLElement|Document} [root=document] - Container to scan.
   */
  static inject(root = document) {


    // 2. Find all elements that need icons
    const elements = root.querySelectorAll('[data-icon], [data-ts-icon]');

    elements.forEach(el => {
      // Skip already processed elements
      if (el.dataset.iconInjected) return;

      // Get the raw icon string
      let raw = (
        el.getAttribute('data-icon') ||
        el.getAttribute('data-ts-icon') ||
        el.dataset.icon ||
        el.dataset.tsIcon ||
        ''
      ).trim();
      if (!raw) return;

      // Parse type and value
      let type = '';
      let value = '';
      const colonIndex = raw.indexOf(':');
      if (colonIndex !== -1) {
        type = raw.slice(0, colonIndex);
        value = raw.slice(colonIndex + 1).trim();
      } else {
        type = '';
        value = raw;
      }

      // Create the appropriate icon element
      let iconEl = null;

      // Font Awesome
      if (type === 'fa' || /^fa(-(solid|regular|brands))?\s/.test(value)) {
        iconEl = document.createElement('i');
        iconEl.className = value;
        iconEl.setAttribute('aria-hidden', 'true');
      }
      // Ionicons
      else if (type === 'ion') {
        iconEl = document.createElement('ion-icon');
        iconEl.setAttribute('name', value);
        iconEl.setAttribute('aria-hidden', 'true');
      }
      // Plain icon (any other class string)
      else if (value) {
        iconEl = document.createElement('i');
        iconEl.className = value;
        iconEl.setAttribute('aria-hidden', 'true');
      }

      if (!iconEl) return;

      // Add the mandatory .ts-icon class
      iconEl.classList.add('ts-icon');

      // Determine position (default 'left')
      const pos = el.dataset.iconPos || 'left';

      // Safety: prevent hierarchy errors
      try {
        if (pos === 'right') {
          // Only append if the icon is not already an ancestor of the parent
          if (!iconEl.contains(el)) {
            el.appendChild(iconEl);
          } else {
            console.warn('Skipping append – icon element already contains parent', el);
          }
        } else {
          // Prepend (default)
          if (!iconEl.contains(el)) {
            el.prepend(iconEl);
          } else {
            console.warn('Skipping prepend – icon element already contains parent', el);
          }
        }
      } catch (e) {
        console.error('Error injecting icon:', e, el);
      }

      // Mark as processed
      el.dataset.iconInjected = '1';
    });
  }
}

// Auto‑run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => ToolskinIcons.inject());
} else {
  ToolskinIcons.inject();
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

    this.cursor = null;
    this.cursorInner = null;
    this.cursorLabel = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.cursorX = 0;
    this.cursorY = 0;
    this.followerX = 0;
    this.followerY = 0;
    this.easing = this.config.easing ?? 0.42;
    this.followerEasing = this.config.followerEasing ?? 0.52;
    this.currentHoveredElement = null;
    this.cursorOffset = { x: 0, y: 0 };
    this._rafId = 0;
    this._loopActive = false;
    this._paused = false;
    this._interactiveSelector = 'a, button, .interactive, [data-cursor]';
    this._onMouseMove = null;
    this._onRootLeave = null;
    this._onVisibilityChange = null;
    this._onPointerOver = null;
    this._onPointerOut = null;

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
    document.body.classList.add('has-ts-cursor');

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

    // Track mouse — start rAF loop only while motion / follower catch-up needs work
    this._onMouseMove = (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      if (this.currentHoveredElement && mode === 'tooltip' && this.config.smartPosition) {
        this._updateSmartPosition(e);
      }

      if (!this._paused) this._startLoop();
    };
    document.addEventListener('mousemove', this._onMouseMove, { passive: true });

    this._onRootLeave = () => {
      if (this._rafId) {
        cancelAnimationFrame(this._rafId);
        this._rafId = 0;
      }
      this._loopActive = false;
    };
    document.documentElement.addEventListener('mouseleave', this._onRootLeave);

    this._onVisibilityChange = () => {
      this._paused = document.visibilityState !== 'visible';
      if (this._paused && this._rafId) {
        cancelAnimationFrame(this._rafId);
        this._rafId = 0;
        this._loopActive = false;
      }
    };
    document.addEventListener('visibilitychange', this._onVisibilityChange, { passive: true });

    // Setup interactions
    this._setupInteractions();
  }

  _startLoop() {
    if (this._loopActive) return;
    this._loopActive = true;
    this._rafId = requestAnimationFrame(() => this._tick());
  }

  _tick() {
    if (this._paused) {
      this._rafId = 0;
      this._loopActive = false;
      return;
    }
    const mode = this.config.mode || 'simple';

    /* Snap when close — avoids dozens of rAF frames tailing tiny lerp errors */
    const dx = this.mouseX - this.cursorX;
    const dy = this.mouseY - this.cursorY;
    if (Math.abs(dx) + Math.abs(dy) < 2.5) {
      this.cursorX = this.mouseX;
      this.cursorY = this.mouseY;
    } else {
      this.cursorX += dx * this.easing;
      this.cursorY += dy * this.easing;
    }

    if (this.config.follower) {
      const fdx = this.cursorX - this.followerX;
      const fdy = this.cursorY - this.followerY;
      if (Math.abs(fdx) + Math.abs(fdy) < 2) {
        this.followerX = this.cursorX;
        this.followerY = this.cursorY;
      } else {
        this.followerX += fdx * this.followerEasing;
        this.followerY += fdy * this.followerEasing;
      }
    }

    if (mode === 'simple') {
      this.cursor.style.transform = `translate3d(${this.cursorX}px, ${this.cursorY}px, 0) translate(-50%, -50%)`;
    } else {
      this.cursor.style.transform = `translate3d(${this.cursorX + this.cursorOffset.x}px, ${this.cursorY + this.cursorOffset.y}px, 0)`;
    }

    if (this.config.follower) {
      const relativeX = this.followerX - this.cursorX;
      const relativeY = this.followerY - this.cursorY;
      this.cursor.style.setProperty('--follower-transform', `translate3d(${relativeX}px, ${relativeY}px, 0)`);
    }

    const curErr = Math.abs(this.mouseX - this.cursorX) + Math.abs(this.mouseY - this.cursorY);
    const folErr = this.config.follower
      ? Math.abs(this.cursorX - this.followerX) + Math.abs(this.cursorY - this.followerY)
      : 0;
    const epsilon = 0.85;

    if (curErr < epsilon && folErr < epsilon) {
      this.cursorX = this.mouseX;
      this.cursorY = this.mouseY;
      if (this.config.follower) {
        this.followerX = this.cursorX;
        this.followerY = this.cursorY;
      }
      if (mode === 'simple') {
        this.cursor.style.transform = `translate3d(${this.cursorX}px, ${this.cursorY}px, 0) translate(-50%, -50%)`;
      } else {
        this.cursor.style.transform = `translate3d(${this.cursorX + this.cursorOffset.x}px, ${this.cursorY + this.cursorOffset.y}px, 0)`;
      }
      if (this.config.follower) {
        this.cursor.style.setProperty('--follower-transform', 'translate3d(0,0,0)');
      }
      this._rafId = 0;
      this._loopActive = false;
      return;
    }

    this._rafId = requestAnimationFrame(() => this._tick());
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
    this._onPointerOver = (e) => {
      const el = e.target.closest(this._interactiveSelector);
      if (!el || !document.documentElement.contains(el)) return;
      this.currentHoveredElement = el;
      this.cursor.classList.add('active');

      if (mode === 'tooltip' && this.config.smartPosition) {
        this._updateSmartPosition(e);
      }

      if (mode === 'tooltip' && this.config.label && this.cursorLabel) {
        if (el.dataset.cursor) this.cursorLabel.textContent = el.dataset.cursor;
        else if (el.tagName === 'A') this.cursorLabel.textContent = 'VIEW';
        else if (el.tagName === 'BUTTON') this.cursorLabel.textContent = 'CLICK';
      }
    };

    this._onPointerOut = (e) => {
      if (!this.currentHoveredElement) return;
      const related = e.relatedTarget;
      if (related && this.currentHoveredElement.contains(related)) return;
      const stillInteractive = related && related.closest && related.closest(this._interactiveSelector);
      if (stillInteractive) return;
      this.currentHoveredElement = null;
      this.cursor.classList.remove('active', 'position-above', 'position-below');
      this.cursor.removeAttribute('data-pointer-direction');
      this.cursorOffset = { x: 0, y: 0 };
      if (this.cursorLabel) this.cursorLabel.textContent = '';
    };
    document.addEventListener('mouseover', this._onPointerOver, { passive: true });
    document.addEventListener('mouseout', this._onPointerOut, { passive: true });
  }

  destroy() {
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = 0;
    }
    if (this._onMouseMove) document.removeEventListener('mousemove', this._onMouseMove);
    if (this._onRootLeave) document.documentElement.removeEventListener('mouseleave', this._onRootLeave);
    if (this._onVisibilityChange) document.removeEventListener('visibilitychange', this._onVisibilityChange);
    if (this._onPointerOver) document.removeEventListener('mouseover', this._onPointerOver);
    if (this._onPointerOut) document.removeEventListener('mouseout', this._onPointerOut);
    this._loopActive = false;
    this.currentHoveredElement = null;
    if (this.cursor && this.cursor.parentNode) this.cursor.parentNode.removeChild(this.cursor);
    document.body.classList.remove('has-ts-cursor');
    this.cursor = null;
    this.cursorInner = null;
    this.cursorLabel = null;
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
   DYNAMIC PRIMARY NAV ("More" overflow)
   Moves excess top-nav links into a dropdown when `#ts-primary-menu` overflows.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinDynamicNav {
  /**
   * @param {HTMLElement} primaryNav
   * @param {HTMLElement} extendNav
   * @param {HTMLElement} navCollapse
   */
  constructor(primaryNav, extendNav, navCollapse) {
    this.primaryNav = primaryNav;
    this.extendNav = extendNav;
    this.navCollapse = navCollapse;
    this.allLinks = Array.from(primaryNav.querySelectorAll('a'));
    this._ro = null;
    this._debounce = null;
    this._boundSchedule = () => this.scheduleUpdate();
    this._bind();
  }

  /**
   * @param {ParentNode} [root]
   * @returns {ToolskinDynamicNav | null}
   */
  static init(root = document) {
    const primaryNav = root.getElementById('ts-primary-menu');
    const extendNav = root.getElementById('navbar-extend');
    const navCollapse = root.getElementById('navbar-collapse');
    if (!primaryNav || !extendNav || !navCollapse) return null;
    const existing = primaryNav.__tsDynamicNav;
    if (existing instanceof ToolskinDynamicNav) {
      existing.scheduleUpdate();
      return existing;
    }
    const inst = new ToolskinDynamicNav(primaryNav, extendNav, navCollapse);
    primaryNav.__tsDynamicNav = inst;
    return inst;
  }

  /** @param {ParentNode} [root] */
  static destroy(root = document) {
    const primaryNav = root.getElementById('ts-primary-menu');
    const inst = primaryNav && primaryNav.__tsDynamicNav;
    if (inst instanceof ToolskinDynamicNav) inst.destroy();
  }

  _bind() {
    this._ro = new ResizeObserver(this._boundSchedule);
    this._ro.observe(this.primaryNav);
    this.scheduleUpdate();
  }

  scheduleUpdate() {
    clearTimeout(this._debounce);
    this._debounce = setTimeout(() => requestAnimationFrame(() => this._updateNav()), 100);
  }

  _updateNav() {
    const { primaryNav, extendNav, navCollapse, allLinks } = this;

    allLinks.forEach((link) => {
      primaryNav.appendChild(link);
    });

    navCollapse.classList.remove('hasItems');

    const containerWidth = primaryNav.offsetWidth;
    const moreBtnWidth = 50;
    let currentWidth = 0;

    allLinks.forEach((link) => {
      currentWidth += link.offsetWidth;
      if (currentWidth > containerWidth - moreBtnWidth) {
        navCollapse.classList.add('hasItems');
        extendNav.appendChild(link);
      }
    });
  }

  destroy() {
    clearTimeout(this._debounce);
    if (this._ro) {
      this._ro.disconnect();
      this._ro = null;
    }
    if (this.primaryNav) delete this.primaryNav.__tsDynamicNav;
    this.primaryNav = null;
    this.extendNav = null;
    this.navCollapse = null;
    this.allLinks = [];
  }
}

/* ═══════════════════════════════════════════════════════════════════
   MOBILE MENU MODULE
   Auto-detects menu containers and creates burger + sidebar navigation.
   ═══════════════════════════════════════════════════════════════════ */

class ToolskinMobileMenu {
  constructor() {
    this.menuContainers = [];
    /** @type {{ burger: HTMLButtonElement, overlay: HTMLElement, sidebar: HTMLElement }[]} */
    this._instances = [];
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

    this._instances.push({ burger, overlay, sidebar });

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

  /** Close every auto-generated mobile drawer (e.g. after in-page anchor navigation). */
  closeAll() {
    this._instances.forEach(({ burger, overlay, sidebar }) => {
      this.close(burger, overlay, sidebar);
    });
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


/**
 * [data-tooltip] / [data-tooltip-func] hover layer — ported from YSS TooltipManager:
 * smart placement (top/bottom/left/right), collision avoidance, arrow, delays.
 * Position uses fixed + translate(); styling via --ts-tooltip-* on #ts-tooltip-container.
 */
class ToolskinTooltip {
  constructor(config) {
    this.config = config || {};
    this.el = null;
    this.arrowEl = null;
    this.contentEl = null;
    this.currentTarget = null;
    this.showTimeout = null;
    this.hideTimeout = null;
    this._hideClearTimer = null;
    this._onTooltipHideTransitionEnd = this._onTooltipHideTransitionEnd.bind(this);
    this.isVisible = false;
    this._positionRaf = null;

    this.CONFIG = {
      MAX_WIDTH: this.config.maxWidth != null ? this.config.maxWidth : 300,
      MIN_WIDTH: this.config.minWidth != null ? this.config.minWidth : 80,
      ARROW_SIZE: this.config.arrowSize != null ? this.config.arrowSize : 8,
      SPACING: this.config.spacing != null ? this.config.spacing : 10,
      PADDING: this.config.padding != null ? this.config.padding : 10,
      SHOW_DELAY: this.config.showDelay != null ? this.config.showDelay : 30,
      HIDE_DELAY: this.config.hideDelay != null ? this.config.hideDelay : 0,
      ANIM_MS: this.config.animMs != null ? this.config.animMs : 70,
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._onScrollHide = this._onScrollHide.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onResize = this._onResize.bind(this);
    this._handleTooltipPointerEnter = this._handleTooltipPointerEnter.bind(this);
    this._handleTooltipPointerLeave = this._handleTooltipPointerLeave.bind(this);

    this._createDom();
    if (this.config.enabled) this._attach();
  }

  _handleTooltipPointerEnter() {
    this._clearHide();
  }

  _handleTooltipPointerLeave(e) {
    const to = e.relatedTarget;
    if (to && this.currentTarget && (this.currentTarget.contains(to) || (this.el && this.el.contains(to)))) {
      return;
    }
    this._clearShow();
    this._hide();
  }

  _scopes() {
    const s = this.config.scopeSelector || 'body';
    return String(s)
      .split(',')
      .map(x => x.trim())
      .filter(Boolean);
  }

  _inScope(node) {
    if (!node || node.nodeType !== 1) return false;
    const scopes = this._scopes();
    if (!scopes.length) return true;
    return scopes.some(sel => {
      try {
        return !!node.closest(sel);
      } catch (e) {
        return false;
      }
    });
  }

  _attrName() {
    return this.config.attribute || 'data-tooltip';
  }

  _tooltipHost(target) {
    if (!target || !target.closest) return null;
    return target.closest(`[${this._attrName()}], [data-tooltip-func]`);
  }

  _getContent(target) {
    const funcName = target.dataset && target.dataset.tooltipFunc;
    if (funcName && typeof window[funcName] === 'function') {
      try {
        const result = window[funcName](target);
        if (result) return result;
      } catch (e) {
        console.error('ToolskinTooltip: data-tooltip-func error', e);
      }
    }
    const attr = this._attrName();
    const text =
      target.getAttribute(attr) || (target.dataset && target.dataset.tooltip) || '';
    return text && String(text).trim() ? String(text).trim() : null;
  }

  _createDom() {
    let el = document.getElementById('ts-tooltip-container');
    if (el) {
      this.el = el;
      this.contentEl = el.querySelector('#ts-tooltip-content') || el.querySelector('.ts-tooltip__content');
      this.arrowEl = el.querySelector('#ts-tooltip-arrow');
      if (!this.contentEl) {
        this.contentEl = document.createElement('div');
        this.contentEl.id = 'ts-tooltip-content';
        this.contentEl.className = 'ts-tooltip__content';
        el.insertBefore(this.contentEl, el.firstChild);
      }
      if (!this.arrowEl) {
        this.arrowEl = document.createElement('div');
        this.arrowEl.id = 'ts-tooltip-arrow';
        el.appendChild(this.arrowEl);
      }
      el.style.position = 'fixed';
      el.style.left = '0';
      el.style.top = '0';
      el.style.zIndex = String(this.config.zIndex != null ? this.config.zIndex : 100000);
      this._applyTooltipTokenVars(el);
      return;
    }
    el = document.createElement('div');
    el.id = 'ts-tooltip-container';
    el.className = 'ts-tooltip';
    el.style.position = 'fixed';
    el.style.left = '0';
    el.style.top = '0';
    el.setAttribute('role', 'tooltip');
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-atomic', 'true');
    el.style.zIndex = String(this.config.zIndex != null ? this.config.zIndex : 100000);

    this.contentEl = document.createElement('div');
    this.contentEl.id = 'ts-tooltip-content';
    this.contentEl.className = 'ts-tooltip__content';

    this.arrowEl = document.createElement('div');
    this.arrowEl.id = 'ts-tooltip-arrow';

    el.append(this.contentEl, this.arrowEl);
    this.el = el;
    this._applyTooltipTokenVars(el);
    document.body.appendChild(el);
  }

  /** Maps CONFIG + Toolskin tokens to --ts-tooltip-* on the shell (mirrors YSS CSS variables). */
  _applyTooltipTokenVars(el) {
    if (!el) return;
    const a = this.CONFIG.ARROW_SIZE;
    el.style.setProperty('--ts-tooltip-arrow-size', `${a}px`);
    el.style.setProperty('--ts-tooltip-max-width', `${this.CONFIG.MAX_WIDTH}px`);
    el.style.setProperty('--ts-tooltip-min-width', `${this.CONFIG.MIN_WIDTH}px`);
    el.style.setProperty('--ts-tooltip-duration', `${this.CONFIG.ANIM_MS || 70}ms`);
  }

  _attach() {
    document.addEventListener('mouseover', this._handleMouseEnter, true);
    document.addEventListener('mouseout', this._handleMouseLeave, true);
    document.addEventListener('focusin', this._handleFocus, true);
    document.addEventListener('focusout', this._handleBlur, true);
    document.addEventListener('keydown', this._handleKeyDown);
    document.addEventListener('scroll', this._onScrollHide, true);
    document.addEventListener('mousedown', this._onMouseDown, true);
    window.addEventListener('resize', this._onResize, { passive: true });
    if (this.el) {
      this.el.addEventListener('mouseenter', this._handleTooltipPointerEnter);
      this.el.addEventListener('mouseleave', this._handleTooltipPointerLeave);
    }
  }

  _onResize() {
    if (!this.currentTarget || !this.isVisible) return;
    if (this._positionRaf) cancelAnimationFrame(this._positionRaf);
    this._positionRaf = requestAnimationFrame(() => {
      this._positionRaf = null;
      this._position(this.currentTarget);
    });
  }

  _onScrollHide() {
    this._clearShow();
    this._hide();
  }

  _onMouseDown(e) {
    if (this.el && !this.el.contains(e.target)) this._hide();
  }

  _clearShow() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }

  _clearHide() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  _handleMouseEnter(e) {
    const target = this._tooltipHost(e.target);
    if (!target || !this._inScope(target)) return;
    const yss = target.closest('#yss-panel');
    if (yss && yss.getAttribute('data-mockup-tooltips') === 'off') return;

    const content = this._getContent(target);
    if (!content) return;

    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
    if (this.showTimeout) clearTimeout(this.showTimeout);
    this.showTimeout = setTimeout(() => {
      this._show(target);
      this.showTimeout = null;
    }, this.CONFIG.SHOW_DELAY);
  }

  _handleMouseLeave(e) {
    const host = this._tooltipHost(e.target);
    if (!this.currentTarget || !host || host !== this.currentTarget) return;
    const to = e.relatedTarget;
    if (to && (host.contains(to) || (this.el && this.el.contains(to)))) {
      return;
    }
    this._clearShow();
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    const delay = this.CONFIG.HIDE_DELAY;
    if (delay <= 0) {
      this._hide();
      return;
    }
    this.hideTimeout = setTimeout(() => {
      this._hide();
      this.hideTimeout = null;
    }, delay);
  }

  _handleFocus(e) {
    const target = this._tooltipHost(e.target);
    if (!target || !this._inScope(target)) return;
    const yss = target.closest('#yss-panel');
    if (yss && yss.getAttribute('data-mockup-tooltips') === 'off') return;
    if (!this._getContent(target)) return;
    if (this.showTimeout) clearTimeout(this.showTimeout);
    this._show(target);
  }

  _handleBlur(e) {
    if (!this.currentTarget) return;
    const target = this._tooltipHost(e.target);
    if (target === this.currentTarget) {
      if (this.hideTimeout) clearTimeout(this.hideTimeout);
      this._hide();
    }
  }

  _handleKeyDown(e) {
    if (e.key === 'Escape' && this.isVisible) {
      const t = this.currentTarget;
      this._hide();
      if (t && t.focus) t.focus();
    }
  }

  _cancelHideCleanup() {
    if (this._hideClearTimer) {
      clearTimeout(this._hideClearTimer);
      this._hideClearTimer = null;
    }
    if (this.el) {
      this.el.removeEventListener('transitionend', this._onTooltipHideTransitionEnd);
    }
  }

  _finishHideCleanup() {
    if (!this.el) return;
    this.el.style.transform = '';
    this.el.classList.remove(
      'ts-placement-top',
      'ts-placement-bottom',
      'ts-placement-left',
      'ts-placement-right'
    );
    if (this.arrowEl) {
      this.arrowEl.style.left = '';
      this.arrowEl.style.top = '';
    }
  }

  _onTooltipHideTransitionEnd(e) {
    if (!this.el || e.target !== this.el) return;
    if (e.propertyName !== 'opacity') return;
    this.el.removeEventListener('transitionend', this._onTooltipHideTransitionEnd);
    if (this._hideClearTimer) {
      clearTimeout(this._hideClearTimer);
      this._hideClearTimer = null;
    }
    this._finishHideCleanup();
  }

  _show(target) {
    this._cancelHideCleanup();
    if (target === this.currentTarget && this.isVisible) return;

    const content = this._getContent(target);
    if (!content) {
      this._hide();
      return;
    }

    this.currentTarget = target;

    this.contentEl.textContent = '';
    if (typeof content === 'string') {
      this.contentEl.textContent = content;
    } else if (content && content.nodeType) {
      this.contentEl.appendChild(content);
    }

    this.el.style.maxWidth = `min(90vw, ${this.CONFIG.MAX_WIDTH}px)`;
    this.el.style.minWidth = `${this.CONFIG.MIN_WIDTH}px`;
    this.el.setAttribute(
      'aria-label',
      typeof content === 'string' ? content : (content.textContent || '').trim() || ''
    );

    this.el.classList.remove('ts-tooltip--visible');
    this._position(target);

    requestAnimationFrame(() => {
      this.el.style.pointerEvents = 'auto';
      this.el.classList.add('ts-tooltip--visible');
      this.isVisible = true;
    });
  }

  _hide() {
    this._clearShow();
    this._clearHide();
    this._cancelHideCleanup();
    if (!this.el) {
      this.currentTarget = null;
      this.isVisible = false;
      return;
    }
    this.el.style.pointerEvents = 'none';
    this.el.classList.remove('ts-tooltip--visible');
    this.el.removeAttribute('aria-label');
    this.currentTarget = null;
    this.isVisible = false;

    this.el.addEventListener('transitionend', this._onTooltipHideTransitionEnd);
    const ms = (this.CONFIG.ANIM_MS != null ? this.CONFIG.ANIM_MS : 70) + 100;
    this._hideClearTimer = setTimeout(() => {
      this._hideClearTimer = null;
      if (!this.el) return;
      this.el.removeEventListener('transitionend', this._onTooltipHideTransitionEnd);
      this._finishHideCleanup();
    }, ms);
  }

  _position(target) {
    this.el.style.transform = 'translate(0px, 0px)';
    void this.el.offsetWidth;

    const tRect = target.getBoundingClientRect();
    const ttRect = this.el.getBoundingClientRect();
    const obstacles = this._getInteractiveObstacles(target);

    const space = {
      top: tRect.top - this.CONFIG.PADDING,
      bottom: window.innerHeight - tRect.bottom - this.CONFIG.PADDING,
      left: tRect.left - this.CONFIG.PADDING,
      right: window.innerWidth - tRect.right - this.CONFIG.PADDING,
    };

    const placement = this._findBestPlacement(tRect, ttRect, space, obstacles);
    let pos = this._calculatePosition(placement, tRect, ttRect);
    pos = this._avoidCollisions(pos, ttRect, obstacles);

    const finalX = Math.round(pos.x);
    const finalY = Math.round(pos.y);
    this.el.style.transform = `translate(${finalX}px, ${finalY}px)`;

    this.el.classList.remove('ts-placement-top', 'ts-placement-bottom', 'ts-placement-left', 'ts-placement-right');
    this.el.classList.add(`ts-placement-${placement}`);

    this._positionArrow(placement, tRect, pos, ttRect);
  }

  _getInteractiveObstacles(target) {
    const obstacles = [];
    const container = target.closest('.yss-button-with-dropdown, .ts-button-with-dropdown');
    if (!container) return obstacles;

    const dropdown = container.querySelector('.yss-button-options, .ts-button-options');
    if (dropdown) {
      const dropdownRect = dropdown.getBoundingClientRect();
      if (dropdownRect.width > 0 && dropdownRect.height > 0) {
        obstacles.push({ rect: dropdownRect, priority: 'high' });
      }
    }

    container.querySelectorAll('button, input, .yss-button-option-item, .ts-button-option-item').forEach(el => {
      if (el === target) return;
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        obstacles.push({ rect, priority: 'medium' });
      }
    });

    return obstacles;
  }

  _findBestPlacement(tRect, ttRect, space, obstacles) {
    const placements = ['top', 'bottom', 'right', 'left'];
    const scores = {};

    for (const placement of placements) {
      const fits = this._placementFits(placement, space, ttRect);
      if (!fits) {
        scores[placement] = -1000;
        continue;
      }
      const pos = this._calculatePosition(placement, tRect, ttRect);
      const collisionPenalty = this._calculateCollisionPenalty(pos, ttRect, obstacles);
      const spaceScore = this._getSpaceScore(placement, space);
      scores[placement] = spaceScore - collisionPenalty;
    }

    let bestPlacement = 'top';
    let bestScore = scores.top;
    for (const p of placements) {
      if (scores[p] > bestScore) {
        bestScore = scores[p];
        bestPlacement = p;
      }
    }
    return bestPlacement;
  }

  _placementFits(placement, space, ttRect) {
    if (placement === 'top') return space.top >= ttRect.height + this.CONFIG.SPACING;
    if (placement === 'bottom') return space.bottom >= ttRect.height + this.CONFIG.SPACING;
    if (placement === 'left') return space.left >= ttRect.width + this.CONFIG.SPACING;
    if (placement === 'right') return space.right >= ttRect.width + this.CONFIG.SPACING;
    return false;
  }

  _getSpaceScore(placement, space) {
    if (placement === 'top') return space.top;
    if (placement === 'bottom') return space.bottom;
    if (placement === 'left') return space.left;
    if (placement === 'right') return space.right;
    return 0;
  }

  _calculateCollisionPenalty(pos, ttRect, obstacles) {
    let penalty = 0;
    const tooltipBounds = {
      left: pos.x,
      right: pos.x + ttRect.width,
      top: pos.y,
      bottom: pos.y + ttRect.height,
    };

    for (const obstacle of obstacles) {
      const overlap = this._calculateOverlap(tooltipBounds, obstacle.rect);
      if (overlap > 0) {
        const multiplier = obstacle.priority === 'high' ? 500 : 200;
        penalty += overlap * multiplier;
      }
    }
    return penalty;
  }

  _calculateOverlap(rect1, rect2) {
    const overlapX = Math.max(
      0,
      Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left)
    );
    const overlapY = Math.max(
      0,
      Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top)
    );
    return overlapX * overlapY;
  }

  _avoidCollisions(pos, ttRect, obstacles) {
    const adjustedPos = { ...pos };
    let tooltipBounds = {
      left: pos.x,
      right: pos.x + ttRect.width,
      top: pos.y,
      bottom: pos.y + ttRect.height,
    };

    for (const obstacle of obstacles) {
      const overlap = this._calculateOverlap(tooltipBounds, obstacle.rect);
      if (overlap > 0) {
        const shifts = {
          left: obstacle.rect.left - tooltipBounds.right - 5,
          right: obstacle.rect.right - tooltipBounds.left + 5,
          up: obstacle.rect.top - tooltipBounds.bottom - 5,
          down: obstacle.rect.bottom - tooltipBounds.top + 5,
        };

        const minShift = Object.entries(shifts).reduce(
          (min, [dir, val]) => (Math.abs(val) < Math.abs(min.val) ? { dir, val } : min),
          { dir: 'left', val: shifts.left }
        );

        if (minShift.dir === 'left' || minShift.dir === 'right') {
          adjustedPos.x += minShift.val;
        } else {
          adjustedPos.y += minShift.val;
        }

        tooltipBounds = {
          left: adjustedPos.x,
          right: adjustedPos.x + ttRect.width,
          top: adjustedPos.y,
          bottom: adjustedPos.y + ttRect.height,
        };
      }
    }

    const minX = this.CONFIG.PADDING;
    const maxX = window.innerWidth - this.CONFIG.PADDING - ttRect.width;
    const minY = this.CONFIG.PADDING;
    const maxY = window.innerHeight - this.CONFIG.PADDING - ttRect.height;

    adjustedPos.x = Math.max(minX, Math.min(maxX, adjustedPos.x));
    adjustedPos.y = Math.max(minY, Math.min(maxY, adjustedPos.y));

    return adjustedPos;
  }

  _calculatePosition(placement, tRect, ttRect) {
    const pos = { x: 0, y: 0 };
    const minX = this.CONFIG.PADDING;
    const maxX = window.innerWidth - this.CONFIG.PADDING - ttRect.width;
    const minY = this.CONFIG.PADDING;
    const maxY = window.innerHeight - this.CONFIG.PADDING - ttRect.height;

    const centerX = tRect.left + tRect.width / 2;
    const centerY = tRect.top + tRect.height / 2;

    if (placement === 'top' || placement === 'bottom') {
      pos.y =
        placement === 'top'
          ? tRect.top - ttRect.height - this.CONFIG.SPACING
          : tRect.bottom + this.CONFIG.SPACING;
      pos.y = Math.max(minY, Math.min(maxY, pos.y));
      pos.x = centerX - ttRect.width / 2;
      pos.x = Math.max(minX, Math.min(maxX, pos.x));
    } else {
      pos.x =
        placement === 'left'
          ? tRect.left - ttRect.width - this.CONFIG.SPACING
          : tRect.right + this.CONFIG.SPACING;
      pos.x = Math.max(minX, Math.min(maxX, pos.x));
      pos.y = centerY - ttRect.height / 2;
      pos.y = Math.max(minY, Math.min(maxY, pos.y));
    }

    return pos;
  }

  _positionArrow(placement, tRect, ttPos, ttRect) {
    if (!this.arrowEl) return;
    const centerX = tRect.left + tRect.width / 2;
    const centerY = tRect.top + tRect.height / 2;
    const arrow = this.CONFIG.ARROW_SIZE;

    if (placement === 'top' || placement === 'bottom') {
      let x = centerX - ttPos.x - arrow;
      x = Math.max(arrow, Math.min(ttRect.width - arrow * 3, x));
      this.arrowEl.style.left = `${Math.round(x)}px`;
      this.arrowEl.style.top = '';
    } else {
      let y = centerY - ttPos.y - arrow;
      y = Math.max(arrow, Math.min(ttRect.height - arrow * 3, y));
      this.arrowEl.style.top = `${Math.round(y)}px`;
      this.arrowEl.style.left = '';
    }
  }

  destroy() {
    document.removeEventListener('mouseover', this._handleMouseEnter, true);
    document.removeEventListener('mouseout', this._handleMouseLeave, true);
    document.removeEventListener('focusin', this._handleFocus, true);
    document.removeEventListener('focusout', this._handleBlur, true);
    document.removeEventListener('keydown', this._handleKeyDown);
    document.removeEventListener('scroll', this._onScrollHide, true);
    document.removeEventListener('mousedown', this._onMouseDown, true);
    window.removeEventListener('resize', this._onResize);
    if (this.el) {
      this.el.removeEventListener('mouseenter', this._handleTooltipPointerEnter);
      this.el.removeEventListener('mouseleave', this._handleTooltipPointerLeave);
    }
    this._hide();
    this._cancelHideCleanup();
    this._finishHideCleanup();
    if (this._hideClearTimer) {
      clearTimeout(this._hideClearTimer);
      this._hideClearTimer = null;
    }
    if (this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
    this.el = null;
    this.contentEl = null;
    this.arrowEl = null;
  }
}


class ToolskinPreloader {
  constructor(config = {}) {
    this.config = config;
    this.el = null;
    this.wrapEl = null;
    this.barEl = null;
    this.autoCreated = false;
    this._dismissed = false;
    this._progress = 0;
    this._loadHandler = null;
    this._visHandler = null;
    this._domReadyHandler = null;
    this._timer = 0;
    this._imageListeners = [];
    this._visibleAt = 0;
    this._loadComplete = false;
    this._fontsReady = false;
    this._fontsWaitStarted = false;
    this._minVisTimer = null;
    this._ariaBusySet = false;
    this._init();
  }

  _setProgress(p) {
    if (this._dismissed || !this.barEl) return;
    const next = Math.min(100, Math.max(0, Number(p)));
    if (next < this._progress) return;
    this._progress = next;
    this.barEl.style.width = `${this._progress}%`;
    if (this.wrapEl) {
      this.wrapEl.setAttribute('aria-valuenow', String(Math.round(this._progress)));
    }
  }

  _onDomReadyForProgress() {
    this._setProgress(18);
    if (this.config.trackImages !== false) {
      this._bindImageProgress();
    } else {
      this._setProgress(Math.max(this._progress, 78));
    }
  }

  _bindImageProgress() {
    const imgs = Array.from(document.images || []);
    const n = imgs.length;
    if (!n) {
      this._setProgress(Math.max(this._progress, 78));
      return;
    }
    let done = 0;
    const sync = () => {
      const ratio = n ? done / n : 1;
      this._setProgress(18 + ratio * 58);
    };
    imgs.forEach((img) => {
      if (img.complete) {
        done += 1;
        return;
      }
      const onDone = () => {
        done += 1;
        sync();
      };
      img.addEventListener('load', onDone, { once: true });
      img.addEventListener('error', onDone, { once: true });
      this._imageListeners.push({ img, onDone });
    });
    sync();
  }

  _init() {
    const selector = this.config.selector || '#ts-preloader';
    this.el = document.querySelector(selector) || document.querySelector('[data-ts-preloader]');
    if (!this.el) {
      this.el = document.createElement('div');
      this.el.id = 'ts-preloader';
      this.el.className = 'ts-preloader';
      this.el.setAttribute('aria-hidden', 'true');
      this.el.innerHTML =
        '<div class="ts-preloader__brand">' +
        '<div class="ts-preloader__logo"><span class="ts-icon" data-ts-icon="fa-solid fa-bolt" aria-hidden="true"></span>TOOL<em>SKIN</em></div>' +
        '<div class="ts-preloader__bar-wrap" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="Page load progress">' +
        '<span class="ts-preloader__bar"></span></div>' +
        '<div class="ts-preloader__hint">Initializing design system</div>' +
        '</div>';
      document.body.appendChild(this.el);
      this.autoCreated = true;
    }
    this.wrapEl = this.el.querySelector('.ts-preloader__bar-wrap');
    this.barEl = this.el.querySelector('.ts-preloader__bar');
    if (this.wrapEl && !this.wrapEl.getAttribute('role')) {
      this.wrapEl.setAttribute('role', 'progressbar');
      this.wrapEl.setAttribute('aria-valuemin', '0');
      this.wrapEl.setAttribute('aria-valuemax', '100');
      this.wrapEl.setAttribute('aria-valuenow', '0');
      this.wrapEl.setAttribute('aria-label', 'Page load progress');
    }
    if (window.ToolskinIcons && typeof ToolskinIcons.inject === 'function') {
      ToolskinIcons.inject(this.el);
    }
    document.documentElement.setAttribute('aria-busy', 'true');
    this._ariaBusySet = true;
    this._extraHoldDone = false;
    this._setProgress(5);
    document.documentElement.classList.add('ts-preloader-lock');
    if (this.el) {
      this.el.classList.add('is-visible');
      this._visibleAt = performance.now();
    }

    if (document.readyState === 'loading') {
      this._domReadyHandler = () => this._onDomReadyForProgress();
      document.addEventListener('DOMContentLoaded', this._domReadyHandler, { once: true });
    } else {
      this._onDomReadyForProgress();
    }

    this._loadHandler = () => {
      this._loadComplete = true;
      this._setProgress(Math.max(this._progress, 86));
      requestAnimationFrame(() => this._tryDismissAfterReady());
    };
    this._visHandler = () => {
      if (document.visibilityState !== 'visible') this.dismiss();
    };
    if (document.readyState === 'complete') {
      queueMicrotask(() => this._loadHandler());
    } else {
      window.addEventListener('load', this._loadHandler, { once: true });
    }
    document.addEventListener('visibilitychange', this._visHandler, { passive: true });
    const cap = this.config.maxVisibleMs || 60000;
    this._timer = window.setTimeout(() => this.dismiss(), cap);
    const debugHold =
      this.config.debug === true ||
      (typeof window !== 'undefined' && window.TS_DEBUG_PRELOADER === true);
    if (debugHold) {
      clearTimeout(this._timer);
      this._timer = 0;
      const hint = this.el && this.el.querySelector('.ts-preloader__hint');
      if (hint) {
        hint.textContent = 'Debug: preloader held — press Escape to dismiss';
      }
      this._debugEsc = e => {
        if (e.key === 'Escape') {
          document.removeEventListener('keydown', this._debugEsc);
          this._debugEsc = null;
          this._setProgress(100);
          requestAnimationFrame(() => this.dismiss());
        }
      };
      document.addEventListener('keydown', this._debugEsc);
    }
  }

  _tryDismissAfterReady() {
    if (this._dismissed) return;
    const debugHold =
      this.config.debug === true ||
      (typeof window !== 'undefined' && window.TS_DEBUG_PRELOADER === true);
    if (debugHold) return;
    if (!this._loadComplete) return;
    const needFonts = this.config.waitForFonts !== false && document.fonts;
    if (needFonts && !this._fontsReady) {
      this._attachFontsWait();
      return;
    }
    const minMs = Number(this.config.minVisibleMs || 0);
    if (minMs > 0) {
      const elapsed = performance.now() - (this._visibleAt || 0);
      if (elapsed < minMs) {
        clearTimeout(this._minVisTimer);
        this._minVisTimer = setTimeout(() => this._tryDismissAfterReady(), minMs - elapsed);
        return;
      }
    }
    const extraMs = Number(this.config.extraHoldAfterLoadMs || 0);
    if (extraMs > 0 && !this._extraHoldDone) {
      this._extraHoldDone = true;
      clearTimeout(this._minVisTimer);
      this._minVisTimer = setTimeout(() => this._tryDismissAfterReady(), extraMs);
      return;
    }
    this._setProgress(100);
    requestAnimationFrame(() => this.dismiss());
  }

  _attachFontsWait() {
    if (this._fontsWaitStarted) return;
    this._fontsWaitStarted = true;
    document.fonts.ready.then(() => {
      this._fontsReady = true;
      this._setProgress(Math.max(this._progress, 94));
      this._tryDismissAfterReady();
    });
  }

  dismiss() {
    if (this._dismissed || !this.el) return;
    this._dismissed = true;
    if (this._debugEsc) {
      document.removeEventListener('keydown', this._debugEsc);
      this._debugEsc = null;
    }
    if (this._minVisTimer) {
      clearTimeout(this._minVisTimer);
      this._minVisTimer = null;
    }
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = 0;
    }
    if (this._ariaBusySet) {
      document.documentElement.removeAttribute('aria-busy');
      this._ariaBusySet = false;
    }
    document.documentElement.classList.remove('ts-preloader-lock');
    this._imageListeners.forEach(({ img, onDone }) => {
      img.removeEventListener('load', onDone);
      img.removeEventListener('error', onDone);
    });
    this._imageListeners = [];
    this.el.classList.remove('is-visible');
    this.el.classList.add('is-done');
    window.setTimeout(() => {
      if (this.autoCreated && this.el?.parentNode) this.el.parentNode.removeChild(this.el);
      this.el = null;
      this.barEl = null;
      this.wrapEl = null;
    }, 260);
  }

  destroy() {
    if (this._minVisTimer) clearTimeout(this._minVisTimer);
    if (this._timer) clearTimeout(this._timer);
    if (this._debugEsc) document.removeEventListener('keydown', this._debugEsc);
    if (this._loadHandler) window.removeEventListener('load', this._loadHandler);
    if (this._visHandler) document.removeEventListener('visibilitychange', this._visHandler);
    if (this._domReadyHandler) document.removeEventListener('DOMContentLoaded', this._domReadyHandler);
    this.dismiss();
  }
}


const Toolskin = {
  /** Ionicons 7.1.0 variant registry + helpers (also on window.ToolskinIonIcons). */
  ionicons: ToolskinIonIcons,
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
  tooltips: null,
  preloader: null,

  /**
   * Hover tooltips for elements with [data-tooltip] inside scopeSelector.
   * Runs from Toolskin.init when `config.tooltips.enabled` is true unless <html data-ts-tooltips="off">.
   * Safe to call after dynamic markup is injected (delegation on document).
   */
  initTooltips(opts = {}) {
    const base = ToolskinConfig.defaults.tooltips || {};
    const cfg = Object.assign({}, base, opts);
    if (this.tooltips && typeof this.tooltips.destroy === 'function') {
      this.tooltips.destroy();
    }
    this.tooltips = cfg.enabled ? new ToolskinTooltip(cfg) : null;
    return this.tooltips;
  },

  /**
   * Initialize Toolskin with custom configuration
   * @param {object} userConfig - User configuration object
   */
  init(userConfig = {}) {
    if (this._initialized) this.destroy();
    // Initialize configuration
    this.config = ToolskinConfig.init(userConfig);

    // Icons ASAP (before layout/theme) so data-icon / data-ts-icon work even if a later step throws
    ToolskinIcons.inject();

    // Non-blocking top preloader (progressive enhancement)
    let preCfg = this.config.preloader ? { ...this.config.preloader } : {};
    if (typeof window !== 'undefined' && window.TS_DEBUG_PRELOADER === true) {
      preCfg = { ...preCfg, debug: true };
    }
    this.preloader = preCfg.enabled ? new ToolskinPreloader(preCfg) : null;
    if (!preCfg.enabled) {
      document.documentElement.classList.remove('ts-preloader-lock');
    }

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

    // Initialize custom cursor (skipped when cursor.enabled is false)
    this.cursor =
      this.config.cursor && this.config.cursor.enabled
        ? new ToolskinCursor(this.config.cursor)
        : null;

    // Initialize interactive grid backgrounds
    if (this.config.gridBg.enabled) {
      this.gridBg = new ToolskinGridBg(this.config.gridBg);
    }

    // Initialize mobile menu
    this.mobileMenu = new ToolskinMobileMenu();
    // After mobile clones desktop links, compute primary-nav overflow ("More").
    ToolskinDynamicNav.init(document);
    this._initPromoBanner();

    const docOff =
      document.documentElement.getAttribute('data-ts-tooltips') === 'off' ||
      (document.body && document.body.getAttribute('data-ts-tooltips') === 'off');
    const ttCfg = { ...(this.config.tooltips || {}) };
    if (docOff) ttCfg.enabled = false;
    this.initTooltips(ttCfg);

    // Dispatch ready event
    window.dispatchEvent(new CustomEvent('ts:ready', { detail: { config: this.config } }));
    this._initialized = true;
  },

  _initPromoBanner() {
    const banner = document.getElementById('promo-banner');
    if (!banner || banner.dataset.tsBound === '1') return;
    banner.dataset.tsBound = '1';
    if (sessionStorage.getItem('ts-promo-dismissed') === '1') {
      banner.classList.add('ts-dismissed');
    }
    banner.querySelector('.ts-promo-banner__close')?.addEventListener('click', () => {
      sessionStorage.setItem('ts-promo-dismissed', '1');
    });
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

    // Viewport manager for performance optimization
    this.viewportManager = new ToolskinViewportManager();

    this._initMarquees();
    ToolskinSlider.initAll(document);
  },

  _initMarquees() {
    document.querySelectorAll('.ts-marquee:not(.ts-marquee-container)').forEach((el) => {
      if (el._tsMarquee && typeof el._tsMarquee.destroy === 'function') {
        el._tsMarquee.destroy();
      }
      el._tsMarquee = new ToolskinMarquee(el);
    });
  },

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

  /** Curated dark/light surface presets (tokens + labels) for showcase testing */
  getSurfacePresetsCatalog() {
    return this.theme ? this.theme.getSurfacePresetsCatalog() : null;
  },

  /** Apply a dark-mode-only surface preset by id (e.g. dark-hc-neutral-v1) */
  applyDarkSurfacePreset(presetId) {
    if (!this.theme) return null;
    return this.theme.applyDarkSurfacePreset(presetId);
  },

  /** Apply a light-mode-only surface preset by id (e.g. light-hc-clean-v1) */
  applyLightSurfacePreset(presetId) {
    if (!this.theme) return null;
    return this.theme.applyLightSurfacePreset(presetId);
  },

  /** Reset both dark and light token maps to Practical factory defaults */
  resetSurfacePresets() {
    if (!this.theme) return null;
    return this.theme.resetSurfacePresets();
  },

  /**
   * Apply §1b contrast tension (0–100) to both dark/light surface maps (Color.js required).
   */
  applyContrastTweakToSurfaceMaps(percent0to100) {
    if (!this.theme) return false;
    return this.theme.applyContrastTweakToMaps(Number(percent0to100) / 100);
  },

  revertContrastTweakMaps() {
    if (!this.theme) return;
    this.theme.revertContrastTweakMaps();
  },

  getSurfaceTokenMaps() {
    return this.theme ? this.theme.getSurfaceTokenMaps() : null;
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
    if (window.ToolskinUIKit && typeof ToolskinUIKit.init === 'function') {
      ToolskinUIKit.init(document);
    }
    ToolskinDynamicNav.init(document);
    this._initMarquees();
    ToolskinSlider.initAll(document);
    if (this.viewportManager && typeof this.viewportManager.refresh === 'function') {
      this.viewportManager.refresh();
    }
    ToolskinIcons.inject();
  },

  destroy() {
    ToolskinDynamicNav.destroy(document);
    ToolskinSlider.destroyAll(document);
    if (this.preloader && typeof this.preloader.destroy === 'function') this.preloader.destroy();
    if (this.cursor && typeof this.cursor.destroy === 'function') this.cursor.destroy();
    if (this.smooth && typeof this.smooth.destroy === 'function') this.smooth.destroy();
    if (this.gridBg && typeof this.gridBg.destroy === 'function') this.gridBg.destroy();
    if (this.viewportManager && typeof this.viewportManager.destroy === 'function') this.viewportManager.destroy();
    if (this.tooltips && typeof this.tooltips.destroy === 'function') this.tooltips.destroy();
    this.tabs = [];
    this.cursor = null;
    this.smooth = null;
    this.gridBg = null;
    this.viewportManager = null;
    this.tooltips = null;
    this.preloader = null;
    this._initialized = false;
  },
};

// Early preloader boot — runs immediately when this script is evaluated (defer = after HTML
// is fully parsed, before DOMContentLoaded). Closes the FOUC window between first paint
// and Toolskin.init() by locking the page and showing the preloader without waiting for init().
(function __tsPreloaderEarlyBoot() {
  const userCfg = (typeof window !== 'undefined' && window.__TOOLSKIN_CONFIG__) || {};
  const preCfg = userCfg.preloader || {};
  if (preCfg.enabled === false) return;
  document.documentElement.classList.add('ts-preloader-lock');
  const el = document.querySelector('#ts-preloader, [data-ts-preloader]');
  if (el && !el.classList.contains('is-done')) {
    el.classList.add('is-visible');
  }
})();

// Auto-init on DOM ready (optional window.__TOOLSKIN_CONFIG__ merged into defaults)
const __tsBoot =
  typeof window !== 'undefined' && window.__TOOLSKIN_CONFIG__ && typeof window.__TOOLSKIN_CONFIG__ === 'object'
    ? window.__TOOLSKIN_CONFIG__
    : {};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Toolskin.init(__tsBoot));
} else {
  Toolskin.init(__tsBoot);
}

// Export for module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Toolskin, ToolskinTooltip };
}

if (typeof window !== 'undefined') {
  window.Toolskin = Toolskin;
  window.ToolskinTooltip = ToolskinTooltip;
  window.ToolskinIcons = ToolskinIcons;
  window.TOOLSKIN_SURFACE_PRESETS = TOOLSKIN_SURFACE_PRESETS;
}



/* Toolskin Phantom gallery integration script */




/* Sample Schema for displaying the Gallery*/


/* const projects = [
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_ac1c29d3bc5641cc9809ce8c8b8be798~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_dcce76b23d6f410fa85e01eccfed4de6~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_0a1bce4e77b648a99bb3e3a8a6ed27a0~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_f45cc440cef44fd3a880f81b786424b0~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_f3a19a2593354a339b1ee891bf2d31d8~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_5cd33a9cd7134dc19fc95415e25caf83~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_5434a40c460e40e7b005874fc28d5cab~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_b33dce4a01404840ad9138e23fdb4781~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_0f9813c332394fbfa74a155894fe00c6~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_95356ff9ad8f466f99184c42c6b077a3~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_b34cbfd83cef46ca84231653993d4e26~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_ebdcd60b85ea4d50b74605a61d9a6499~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_dcf6f85aef7c4d10a0758acbb9c84eec~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_e21cf7d811ee4be39c8bc9e5154c0396~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_c4356cf501714cefaa3fc19689c36926~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_27f1ac001d754d91ba0c0cf30b576ca3~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_424f2984bff348ab9bfa09616bd2aa5f~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_5f80c0bec4a7497c849853ae4692d4a1~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_ac9b022a1a4042a5ae57aaeef6d95866~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_79e487d397684fa2a4a59be463c9bf0a~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_3fae3d343f264737ba3a9f645d0a6c3e~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_05f5ef3af8b94cd4bee6940010b1a9e4~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_aa20b5fe97bd43808a3060054a0e264a~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_9f86f6cb652e4cbd961287d9fdd4a4eb~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_ae3990f3d71e44129f62713eafd6d8b3~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_f64a2d48e30d4ceca4ca698703200061~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_b0af69308499409ba3f6a5b42f6e3bb8~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_e91f66177ea54a37a1059b9ff4a38390~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_242352b715b342368983655dced88c1d~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_088731c9fa674e93a8f4cbd89335dad2~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_8944f1419aed4433ba99a8226ba38eb3~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_9e90853643f1425aaa05b50f7500db6e~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_3346ddff0ab641989e848e0ff479ab56~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_1255e43684be4dac9ce04fed8017fe67~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_fb7784cf05df4278b281219e5bf9251a~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_4bf8a5954ab0430b94ffee73a69dce25~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_d512a32bc0284daab56199552f3550ad~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_a2dd10646f724a12ab9e7d29e53ca0fc~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_b04a173e3434446d90f5e821c3775979~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_da2b6b6f3ff9487bb8a108e2154c889a~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_cf411233725e4f42a47000d096a888da~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_96fa1a11e57a4e8190b68567b5903cb5~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_55c0a1808bfc42ab911abaf0f388df49~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_3730e2b72b72470f80d0cbe57271ea72~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_2d727f5f61e841759be24011f5bf40c1~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_c83748bc815348edaaf42a8b72ba473f~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_6caa51c5551f4eb4b49b85c247d26b3a~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_6698ab3337a8468e9194ecde6e003b0e~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_7999d7edd6d74c96a5836afa003e2df4~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_1a0be68c235545b8b1685ccff16d901c~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_91d49aec3abf4e4f9408ac1a0d7648e8~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_c6201d8f5e2b45c784ea345a07b4face~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_1d5a59c0858c4ee4bf9c00b672cd1882~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_65593ea0bfda4f40bded15a7735ca768~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_9ed1ef074045413bb82a34bc2916cd2b~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_a9671724b32842dca6b529c37da9fad0~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_a4eb22f1f76840d6aded22e8dbead476~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_f64a2d48e30d4ceca4ca698703200061~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_b0af69308499409ba3f6a5b42f6e3bb8~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_e91f66177ea54a37a1059b9ff4a38390~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_242352b715b342368983655dced88c1d~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_088731c9fa674e93a8f4cbd89335dad2~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_8944f1419aed4433ba99a8226ba38eb3~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_9e90853643f1425aaa05b50f7500db6e~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_3346ddff0ab641989e848e0ff479ab56~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_1255e43684be4dac9ce04fed8017fe67~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_fb7784cf05df4278b281219e5bf9251a~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_ac1c29d3bc5641cc9809ce8c8b8be798~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_dcce76b23d6f410fa85e01eccfed4de6~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_0a1bce4e77b648a99bb3e3a8a6ed27a0~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_f45cc440cef44fd3a880f81b786424b0~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_f3a19a2593354a339b1ee891bf2d31d8~mv2.jpg"
    ]
  },
  {
    mainImage: "https://static.wixstatic.com/media/a5775f_5cd33a9cd7134dc19fc95415e25caf83~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/a5775f_5434a40c460e40e7b005874fc28d5cab~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_b33dce4a01404840ad9138e23fdb4781~mv2.jpg",
      "https://static.wixstatic.com/media/a5775f_0f9813c332394fbfa74a155894fe00c6~mv2.jpg"
    ]
  }
]; */
//Currently used on the html example, but can be used with any schema.
const projects = [
  {
    mainImage: "https://picsum.photos/300?random=1",
    images: [
      "https://picsum.photos/800?random=2",
      "https://picsum.photos/800?random=3",
      "https://picsum.photos/800?random=4",
      "https://picsum.photos/800?random=5"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=6",
    images: [
      "https://picsum.photos/800?random=7",
      "https://picsum.photos/800?random=8",
      "https://picsum.photos/800?random=9"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=10",
    images: [
      "https://picsum.photos/800?random=11",
      "https://picsum.photos/800?random=12",
      "https://picsum.photos/800?random=13",
      "https://picsum.photos/800?random=14"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=15",
    images: [
      "https://picsum.photos/800?random=16",
      "https://picsum.photos/800?random=17"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=18",
    images: [
      "https://picsum.photos/800?random=19",
      "https://picsum.photos/800?random=20",
      "https://picsum.photos/800?random=21",
      "https://picsum.photos/800?random=22",
      "https://picsum.photos/800?random=23"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=24",
    images: [
      "https://picsum.photos/800?random=25",
      "https://picsum.photos/800?random=26",
      "https://picsum.photos/800?random=27",
      "https://picsum.photos/800?random=28"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=29",
    images: [
      "https://picsum.photos/800?random=30",
      "https://picsum.photos/800?random=31"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=32",
    images: [
      "https://picsum.photos/800?random=33",
      "https://picsum.photos/800?random=34",
      "https://picsum.photos/800?random=35"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=36",
    images: [
      "https://picsum.photos/800?random=37",
      "https://picsum.photos/800?random=38",
      "https://picsum.photos/800?random=39",
      "https://picsum.photos/800?random=40"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=41",
    images: [
      "https://picsum.photos/800?random=42",
      "https://picsum.photos/800?random=43",
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=44",
    images: [
      "https://picsum.photos/800?random=45",
      "https://picsum.photos/800?random=46",
      "https://picsum.photos/800?random=47",
      "https://picsum.photos/800?random=48"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=49",
    images: [
      "https://picsum.photos/800?random=50",
      "https://picsum.photos/800?random=51",
      "https://picsum.photos/800?random=52"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=53",
    images: [
      "https://picsum.photos/800?random=54",
      "https://picsum.photos/800?random=55",
      "https://picsum.photos/800?random=56",
      "https://picsum.photos/800?random=57"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=58",
    images: [
      "https://picsum.photos/800?random=59",
      "https://picsum.photos/800?random=60"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=61",
    images: [
      "https://picsum.photos/800?random=2",
      "https://picsum.photos/800?random=63",
      "https://picsum.photos/800?random=64",
      "https://picsum.photos/800?random=65"
    ]
  },
  {
    mainImage: "https://picsum.photos/300?random=66",
    images: [
      "https://picsum.photos/800?random=67",
      "https://picsum.photos/800?random=68",
      "https://picsum.photos/800?random=69"
    ]
  }
];

/* Shaders for the phantom gallery */
const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform vec2 uOffset;
uniform vec2 uResolution;
uniform vec4 uBorderColor;
uniform vec4 uBackgroundColor;
uniform vec2 uMousePos;
uniform float uZoom;
uniform float uCellSize;
uniform float uTextureCount;
uniform sampler2D uImageAtlas;
uniform float uHoverAnimations[256];
uniform float uTime;
uniform float uColumnsPerRow;
uniform float uSphereStrength;
varying vec2 vUv;

float easeInOutCubic(float t) {
    return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0;
}

float properMod(float x, float y) {
    return mod(mod(x, y) + y, y);
}

void main() {
    vec2 screenUV = (vUv - 0.5) * 2.0;
    
    float radius = length(screenUV);
    float horizontalDist = abs(screenUV.x);
    float verticalDist = abs(screenUV.y);
    
    float sphereStrength = uSphereStrength;
    float horizontalFold = 1.0 - sphereStrength * verticalDist * verticalDist;
    float verticalFold = 1.0 - sphereStrength * horizontalDist * horizontalDist;
    
    vec2 distortedUV = screenUV;
    distortedUV.x *= verticalFold;
    distortedUV.y *= horizontalFold;
    
    float sphericalCurve = 1.0 + 0.15 * (1.0 - radius * 0.5);
    distortedUV *= sphericalCurve;
    
    vec2 aspectRatio = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 worldCoord = distortedUV * aspectRatio * uZoom + uOffset;
    vec2 cellPos = worldCoord / uCellSize;
    vec2 cellId = floor(cellPos);
    vec2 cellUV = fract(cellPos);
    
    vec4 finalColor = uBackgroundColor;
    
    float imageSize = 0.85;
    float imageBorder = (1.0 - imageSize) * 0.5;
    vec2 imageUV = (cellUV - imageBorder) / imageSize;
    bool inImageArea = imageUV.x >= 0.0 && imageUV.x <= 1.0 && imageUV.y >= 0.0 && imageUV.y <= 1.0;
    
    float texIndex = properMod(cellId.x + cellId.y * uColumnsPerRow, uTextureCount);
    
    vec2 mouseScreenUV = (uMousePos / uResolution) * 2.0 - 1.0;
    mouseScreenUV.y = -mouseScreenUV.y;
    
    float mouseRadius = length(mouseScreenUV);
    float mouseHorizontalDist = abs(mouseScreenUV.x);
    float mouseVerticalDist = abs(mouseScreenUV.y);
    
    vec2 mouseDistortedUV = mouseScreenUV;
    mouseDistortedUV.x *= (1.0 - sphereStrength * mouseVerticalDist * mouseVerticalDist);
    mouseDistortedUV.y *= (1.0 - sphereStrength * mouseHorizontalDist * mouseHorizontalDist);
    mouseDistortedUV *= (1.0 + 0.15 * (1.0 - mouseRadius * 0.5));
    
    vec2 mouseWorldCoord = mouseDistortedUV * aspectRatio * uZoom + uOffset;
    vec2 mouseCellPos = mouseWorldCoord / uCellSize;
    vec2 mouseCellId = floor(mouseCellPos);
    
    bool isHovered = (cellId == mouseCellId) && uMousePos.x >= 0.0;
    
    int cellIndexX = int(cellId.x) + 8;
    int cellIndexY = int(cellId.y) + 8;
    int cellIndex = (cellIndexX + cellIndexY * 16) % 256;
    float hoverAnimation = uHoverAnimations[cellIndex];
    
    float easedAnimation = easeInOutCubic(hoverAnimation);
    
    float atlasGridSize = ceil(sqrt(uTextureCount));
    vec2 atlasGridPos = vec2(mod(texIndex, atlasGridSize), floor(texIndex / atlasGridSize));

    if (inImageArea) {
        float edgeSmooth = 0.02;
        
        vec2 zoomedUV = imageUV;
        vec2 center = vec2(0.5, 0.5);
        float scaleAmount = 1.0 - 0.15 * easedAnimation;
        zoomedUV = (imageUV - center) * scaleAmount + center;
        
        vec2 imageMaskVec = smoothstep(-edgeSmooth, edgeSmooth, zoomedUV) * smoothstep(-edgeSmooth, edgeSmooth, 1.0 - zoomedUV);
        float imageAlpha = imageMaskVec.x * imageMaskVec.y;

        if (imageAlpha > 0.0) {
            vec2 atlasUV = (atlasGridPos + zoomedUV) / atlasGridSize;
            atlasUV.y = 1.0 - atlasUV.y;
            vec4 imageTexColor = texture2D(uImageAtlas, atlasUV);
            finalColor = mix(finalColor, imageTexColor, imageAlpha);
        }
    }
    
    float lineWidth = 0.003;
    float gridX = smoothstep(0.0, lineWidth, cellUV.x) - smoothstep(1.0 - lineWidth, 1.0, cellUV.x);
    float gridY = smoothstep(0.0, lineWidth, cellUV.y) - smoothstep(1.0 - lineWidth, 1.0, cellUV.y);
    float gridAmount = max(gridX, gridY);
    finalColor = mix(finalColor, uBorderColor, gridAmount * uBorderColor.a * 0.3);

    gl_FragColor = finalColor;
}
`;

/* Configuration for the phantom gallery */
const config = {
  cellSize: 0.85,
  mobileCellSize: 0.7,
  zoomLevel: 1.25,
  zoomMin: 0.5,
  zoomMax: 2.0,
  zoomSensitivity: 0.001,
  mobileZoomLevel: 2.0,
  lerpFactor: 0.42,
  mobileLerpFactor: 0.15,
  borderColor: "rgba(12, 12, 12, 0.5)",
  backgroundColor: "rgba(12, 12, 12, 1)",
  columnsPerRow: 4,
  mobileColumnsPerRow: 2,
  sphereStrength: 0.05,
  mobileSphereStrength: 0.08
};

let scene, camera, renderer, plane;
let isDragging = false, isClick = true, clickStartTime = 0;
let previousMouse = { x: 0, y: 0 };
let offset = { x: 0, y: 0 }, targetOffset = { x: 0, y: 0 };
let mousePosition = { x: -1, y: -1 };
let zoomLevel = 1.0, targetZoom = 1.0;
let currentProjectIndex = 0, currentImageIndex = 0, lightboxOpen = false;
let loadProgress = 0;
let hoverAnimations = new Float32Array(256).fill(0);
let lastTouchDistance = 0;
let touchMoveCount = 0;
let rafId = null;

const isMobile = () => window.innerWidth <= 800;

const updateLoadingBar = (progress) => {
  const bar = document.getElementById('ts-loadingBar');
  if (bar) {
    bar.style.width = `${progress}%`;
  }
};

const rgbaToArray = (rgba) => {
  const match = rgba.match(/rgba?\(([^)]+)\)/);
  if (!match) return [1, 1, 1, 1];
  return match[1].split(",").map((v, i) => i < 3 ? parseFloat(v.trim()) / 255 : parseFloat(v.trim() || 1));
};

const createTextureAtlas = (textures) => {
  const atlasSize = Math.ceil(Math.sqrt(textures.length));
  const textureSize = 512;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = atlasSize * textureSize;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = config.backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  textures.forEach((texture, index) => {
    const x = (index % atlasSize) * textureSize;
    const y = Math.floor(index / atlasSize) * textureSize;
    if (texture.image?.complete) {
      ctx.drawImage(texture.image, x, y, textureSize, textureSize);
    }
  });

  const atlasTexture = new THREE.CanvasTexture(canvas);
  Object.assign(atlasTexture, {
    wrapS: THREE.ClampToEdgeWrapping,
    wrapT: THREE.ClampToEdgeWrapping,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    flipY: false
  });
  return atlasTexture;
};

const loadTextures = () => {
  const textureLoader = new THREE.TextureLoader();
  const imageTextures = [];
  let loadedCount = 0;
  return new Promise((resolve) => {
    projects.forEach((project) => {
      const texture = textureLoader.load(project.mainImage, () => {
        loadedCount++;
        loadProgress = (loadedCount / projects.length) * 100;
        updateLoadingBar(loadProgress);
        if (loadedCount === projects.length) {
          setTimeout(() => resolve(imageTextures), 200);
        }
      });
      Object.assign(texture, {
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter
      });
      imageTextures.push(texture);
    });
  });
};

const updateMousePosition = (event) => {
  if (lightboxOpen) return;
  const rect = renderer.domElement.getBoundingClientRect();
  mousePosition.x = event.clientX - rect.left;
  mousePosition.y = event.clientY - rect.top;
  plane?.material.uniforms.uMousePos.value.set(mousePosition.x, mousePosition.y);
};

const openLightbox = (projectIndex, imageIndex = 0) => {
  if (projectIndex < 0 || projectIndex >= projects.length) {
    console.error('Invalid project index:', projectIndex);
    return;
  }

  currentProjectIndex = projectIndex;
  currentImageIndex = imageIndex;
  lightboxOpen = true;

  document.getElementById('ts-phantom-gallery').classList.add('blur');
  document.body.classList.add('ts-lightbox-open');

  mousePosition.x = -1;
  mousePosition.y = -1;
  if (plane?.material.uniforms.uMousePos) {
    plane.material.uniforms.uMousePos.value.set(-1, -1);
  }

  updateLightboxContent();
  document.getElementById('ts-lightbox').classList.add('open');
};

const closeLightbox = () => {
  lightboxOpen = false;
  document.getElementById('ts-lightbox').classList.remove('open');
  document.getElementById('ts-phantom-gallery').classList.remove('blur');
  document.body.classList.remove('ts-lightbox-open');
};

const updateLightboxContent = () => {
  const project = projects[currentProjectIndex];
  if (!project) {
    console.error('Project not found:', currentProjectIndex);
    return;
  }

  if (currentImageIndex < 0 || currentImageIndex >= project.images.length) {
    currentImageIndex = 0;
  }

  const img = document.getElementById('ts-lightbox-img');
  img.classList.remove('loaded');

  const newImg = new Image();
  newImg.onload = () => {
    img.src = newImg.src;
    setTimeout(() => img.classList.add('loaded'), 50);
  };
  newImg.src = project.images[currentImageIndex];

  updateThumbnails();
};

const updateThumbnails = () => {
  const thumbnailsContainer = document.getElementById('ts-lightbox-thumbnails');
  thumbnailsContainer.innerHTML = '';
  const project = projects[currentProjectIndex];
  if (!project) return;

  project.images.forEach((image, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.className = 'ts-lightbox-thumbnail';
    if (index === currentImageIndex) thumbnail.classList.add('active');
    thumbnail.innerHTML = `<img src="${image}" alt="image ${index + 1}">`;
    thumbnail.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      currentImageIndex = index;
      updateLightboxContent();
    });
    thumbnailsContainer.appendChild(thumbnail);
  });
};

const navigateImage = (direction) => {
  const project = projects[currentProjectIndex];
  if (!project) return;

  currentImageIndex += direction;

  if (currentImageIndex >= project.images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = project.images.length - 1;
  }

  updateLightboxContent();
};

const initLightbox = () => {
  const overlay = document.getElementById('ts-lightbox');
  const closeBtn = document.getElementById('ts-lightbox-close');
  if (!overlay || !closeBtn) return;

  closeBtn.onclick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    closeLightbox();
    return false;
  };

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeLightbox();
    }
  });

  overlay.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  document.addEventListener('keydown', (e) => {
    if (lightboxOpen) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateImage(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateImage(-1);
      }
    }
  });
};

const startDrag = (x, y) => {
  if (lightboxOpen) return;
  isDragging = true;
  isClick = true;
  clickStartTime = Date.now();
  touchMoveCount = 0;
  document.body.classList.add("dragging");
  previousMouse.x = x;
  previousMouse.y = y;

  const targetZoomLevel = isMobile() ? config.mobileZoomLevel : config.zoomLevel;
  setTimeout(() => isDragging && (targetZoom = targetZoomLevel), 100);
};

const onPointerDown = (e) => {
  if (!lightboxOpen) {
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
  }
};

const onTouchStart = (e) => {
  if (!lightboxOpen) {
    e.preventDefault();
    if (e.touches.length === 1) {
      startDrag(e.touches[0].clientX, e.touches[0].clientY);
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastTouchDistance = Math.sqrt(dx * dx + dy * dy);
    }
  }
};

const handleMove = (currentX, currentY) => {
  if (lightboxOpen || !isDragging || currentX === undefined || currentY === undefined) return;

  touchMoveCount++;
  const deltaX = currentX - previousMouse.x;
  const deltaY = currentY - previousMouse.y;

  if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1 || touchMoveCount > 2) {
    isClick = false;
    const targetZoomLevel = isMobile() ? config.mobileZoomLevel : config.zoomLevel;
    if (targetZoom === 1.0) targetZoom = targetZoomLevel;
  }

  const sensitivity = isMobile() ? 0.004 : 0.003;
  targetOffset.x -= deltaX * sensitivity;
  targetOffset.y += deltaY * sensitivity;

  previousMouse.x = currentX;
  previousMouse.y = currentY;
};

const onPointerMove = (e) => {
  if (!lightboxOpen) {
    e.preventDefault();
    handleMove(e.clientX, e.clientY);
  }
};

const onTouchMove = (e) => {
  if (!lightboxOpen) {
    e.preventDefault();
    if (e.touches.length === 1) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    } else if (e.touches.length === 2 && lastTouchDistance > 0) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const scale = distance / lastTouchDistance;
      targetZoom = Math.max(0.5, Math.min(3.0, targetZoom * scale));
      lastTouchDistance = distance;
    }
  }
};

const onPointerUp = (event) => {
  if (lightboxOpen) return;

  isDragging = false;
  document.body.classList.remove("dragging");
  targetZoom = 1.0;
  lastTouchDistance = 0;

  if (isClick && Date.now() - clickStartTime < 300 && touchMoveCount <= 2) {
    const endX = event.clientX || (event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX);
    const endY = event.clientY || (event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientY);

    if (endX !== undefined && endY !== undefined) {
      const rect = renderer.domElement.getBoundingClientRect();
      const screenX = ((endX - rect.left) / rect.width) * 2 - 1;
      const screenY = -(((endY - rect.top) / rect.height) * 2 - 1);

      const radius = length(screenX, screenY);
      const distortion = 1.0 - 0.08 * radius * radius;

      const cellSize = isMobile() ? config.mobileCellSize : config.cellSize;
      const columnsPerRow = isMobile() ? config.mobileColumnsPerRow : config.columnsPerRow;

      let worldX = screenX * distortion * (rect.width / rect.height) * zoomLevel + offset.x;
      let worldY = screenY * distortion * zoomLevel + offset.y;

      const cellX = Math.floor(worldX / cellSize);
      const cellY = Math.floor(worldY / cellSize);

      const texIndex = Math.floor((cellX + cellY * columnsPerRow) % projects.length);
      const realOrder = [12, 13, 14, 15, 8, 9, 10, 11, 4, 5, 6, 7, 0, 1, 2, 3];
      let actualIndex = texIndex < 0 ? projects.length + texIndex : texIndex;
      actualIndex = realOrder[actualIndex];

      if (actualIndex >= 0 && actualIndex < projects.length) {
        openLightbox(actualIndex, 0);
      }
    }
  }
  touchMoveCount = 0;
};

const length = (x, y) => Math.sqrt(x * x + y * y);

const onWheel = (e) => {
  if (e.ts - lightboxOpen) return;
  e.preventDefault();

  const zoomDelta = e.deltaY * config.zoomSensitivity;
  e.targetZoom = Math.max(config.zoomMin, Math.min(config.zoomMax, e.targetZoom + zoomDelta));
}

const onWindowResize = () => {
  const container = document.getElementById("ts-phantom-gallery");
  if (!container) return;
  const { offsetWidth: width, offsetHeight: height } = container;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  plane?.material.uniforms.uResolution.value.set(width, height);

  const cellSize = isMobile() ? config.mobileCellSize : config.cellSize;
  const columnsPerRow = isMobile() ? config.mobileColumnsPerRow : config.columnsPerRow;
  const sphereStrength = isMobile() ? config.mobileSphereStrength : config.sphereStrength;

  if (plane?.material.uniforms) {
    plane.material.uniforms.uCellSize.value = cellSize;
    plane.material.uniforms.uColumnsPerRow.value = columnsPerRow;
    plane.material.uniforms.uSphereStrength.value = sphereStrength;
  }
};

const setupEventListeners = () => {
  document.addEventListener("mousedown", onPointerDown, { passive: false });
  document.addEventListener("mousemove", onPointerMove, { passive: false });
  document.addEventListener("mouseup", onPointerUp, { passive: false });
  document.addEventListener("mouseleave", onPointerUp, { passive: false });

  document.addEventListener("touchstart", onTouchStart, { passive: false });
  document.addEventListener("touchmove", onTouchMove, { passive: false });
  document.addEventListener("touchend", onPointerUp, { passive: false });
  document.addEventListener("touchcancel", onPointerUp, { passive: false });
  document.addEventListener("wheel", onWheel, { passive: false });

  window.addEventListener("resize", onWindowResize, { passive: true });

  document.addEventListener("contextmenu", (e) => {
    if (!lightboxOpen) e.preventDefault();
  }, { passive: false });

  if (!isMobile()) {
    renderer.domElement.addEventListener("mousemove", updateMousePosition, { passive: true });
    renderer.domElement.addEventListener("mouseleave", () => {
      if (!lightboxOpen) {
        mousePosition.x = mousePosition.y = -1;
        plane?.material.uniforms.uMousePos.value.set(-1, -1);
      }
    }, { passive: true });
  }
};

const animate = () => {
  rafId = requestAnimationFrame(animate);

  const lerpFactor = isMobile() ? config.mobileLerpFactor : config.lerpFactor;
  offset.x += (targetOffset.x - offset.x) * lerpFactor;
  offset.y += (targetOffset.y - offset.y) * lerpFactor;
  zoomLevel += (targetZoom - zoomLevel) * lerpFactor;

  if (plane?.material.uniforms && !lightboxOpen) {
    let currentHoveredCell = -1;

    if (mousePosition.x >= 0 && mousePosition.y >= 0 && !isMobile()) {
      const rect = renderer.domElement.getBoundingClientRect();
      const screenX = (mousePosition.x / rect.width) * 2 - 1;
      const screenY = -((mousePosition.y / rect.height) * 2 - 1);

      const sphereStrength = isMobile() ? config.mobileSphereStrength : config.sphereStrength;
      const radius = Math.sqrt(screenX * screenX + screenY * screenY);
      const horizontalDist = Math.abs(screenX);
      const verticalDist = Math.abs(screenY);

      const verticalFold = 1.0 - sphereStrength * verticalDist * verticalDist;
      const horizontalFold = 1.0 - sphereStrength * horizontalDist * horizontalDist;
      const sphericalCurve = 1.0 + 0.15 * (1.0 - radius * 0.5);

      const cellSize = isMobile() ? config.mobileCellSize : config.cellSize;
      let worldX = screenX * verticalFold * sphericalCurve * (rect.width / rect.height) * zoomLevel + offset.x;
      let worldY = screenY * horizontalFold * sphericalCurve * zoomLevel + offset.y;

      const cellX = Math.floor(worldX / cellSize);
      const cellY = Math.floor(worldY / cellSize);

      const cellIndexX = cellX + 8;
      const cellIndexY = cellY + 8;
      currentHoveredCell = (cellIndexX + cellIndexY * 16) % 256;
    }

    for (let i = 0; i < 256; i++) {
      const targetValue = (currentHoveredCell === i) ? 1.0 : 0.0;
      const animationSpeed = 0.08;

      hoverAnimations[i] += (targetValue - hoverAnimations[i]) * animationSpeed;

      if (Math.abs(hoverAnimations[i] - targetValue) < 0.001) {
        hoverAnimations[i] = targetValue;
      }
    }

    plane.material.uniforms.uOffset.value.set(offset.x, offset.y);
    plane.material.uniforms.uZoom.value = zoomLevel;
    plane.material.uniforms.uHoverAnimations.value = hoverAnimations;
    plane.material.uniforms.uTime.value = performance.now() * 0.001;
  }

  renderer.render(scene, camera);
};

const initPhantomGallery = async () => {
  try {
    initLightbox();
    const container = document.getElementById("ts-phantom-gallery");
    if (!container) return;

    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 20);
    camera.position.z = 2;
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
      stencil: false,
      depth: true
    });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(config.backgroundColor, 0);
    container.appendChild(renderer.domElement);

    const imageTextures = await loadTextures();
    const imageAtlas = createTextureAtlas(imageTextures);

    const cellSize = isMobile() ? config.mobileCellSize : config.cellSize;
    const columnsPerRow = isMobile() ? config.mobileColumnsPerRow : config.columnsPerRow;
    const sphereStrength = isMobile() ? config.mobileSphereStrength : config.sphereStrength;

    const uniforms = {
      uOffset: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(container.offsetWidth, container.offsetHeight) },
      uBorderColor: { value: new THREE.Vector4(...rgbaToArray(config.borderColor)) },
      uBackgroundColor: { value: new THREE.Vector4(...rgbaToArray(config.backgroundColor)) },
      uMousePos: { value: new THREE.Vector2(-1, -1) },
      uZoom: { value: 1.0 },
      uCellSize: { value: cellSize },
      uTextureCount: { value: projects.length },
      uImageAtlas: { value: imageAtlas },
      uHoverAnimations: { value: new Float32Array(256).fill(0) },
      uTime: { value: 0.0 },
      uColumnsPerRow: { value: columnsPerRow },
      uSphereStrength: { value: sphereStrength }
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true
    });
    plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    setupEventListeners();

    setTimeout(() => {
      const loadEl = document.getElementById('ts-loading');
      const galEl = document.getElementById('ts-phantom-gallery');
      if (loadEl) loadEl.classList.add('hidden');
      if (galEl) galEl.classList.add('loaded');
    }, 300);

    animate();
  } catch (error) {
    console.error('Failed to initialize gallery:', error);
    const loadEl = document.getElementById('ts-loading');
    if (loadEl) loadEl.innerHTML = '<div class="ts-loading-text">FAILED TO INITIALIZE</div>';
  }
};

(function bootToolskinPhantomGallery() {
  if (!document.getElementById('ts-phantom-gallery')) return;
  if (typeof THREE === 'undefined') {
    const loadEl = document.getElementById('ts-loading');
    if (loadEl) {
      loadEl.innerHTML = '<div class="ts-loading-text">FAILED TO LOAD RESOURCES</div>';
    }
    return;
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPhantomGallery);
  } else {
    initPhantomGallery();
  }
})();
/*

(function () {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (typeof gsap === "undefined") {
    console.warn("TS Tilt: GSAP is required");
    return;
  }

  const TS_TILT_CLASS = "ts-tilt";
  const TS_INNER_CLASS = "ts-tilt-inner";
  const TS_SCOPE_CLASS = "ts-tilt-scope";

  function createTilt(el, globalOptions = {}) {
    if (!el || el.__tsTilt) return;

    // -----------------------
    // CONFIG (priority: data > global > default)
    // -----------------------
    const config = {
      maxRotation: parseFloat(el.dataset.tsTiltRotation) || globalOptions.maxRotation || 15,
      maxOffset: parseFloat(el.dataset.tsTiltOffset) || globalOptions.maxOffset || 30,
      ease: el.dataset.tsTiltEase || globalOptions.ease || "power3",
      perspective: parseFloat(el.dataset.tsTiltPerspective) || globalOptions.perspective || 650,
      scopeSelector: el.dataset.tsTiltScope || globalOptions.scope || null,
      innerSelector: el.dataset.tsTiltInner || globalOptions.inner || null,
      autoInner: globalOptions.autoInner ?? true
    };

    // -----------------------
    // TARGET
    // -----------------------
    const target = el;

    // -----------------------
    // INNER (optional logic)
    // -----------------------
    let inner = null;

    if (config.innerSelector) {
      inner = el.querySelector(config.innerSelector);
      if (inner) inner.classList.add(TS_INNER_CLASS);
    } else if (config.autoInner) {
      // auto-detect first child element
      const firstChild = el.firstElementChild;
      if (firstChild) {
        inner = firstChild;
        inner.classList.add(TS_INNER_CLASS);
      }
    }

    // -----------------------
    // SCOPE (smart detection)
    // -----------------------
    let scopeEl;

    if (config.scopeSelector) {
      scopeEl = el.closest(config.scopeSelector) || document.querySelector(config.scopeSelector);
    } else {
      // default: closest meaningful container
      scopeEl =
        el.closest("[data-ts-tilt-scope]") ||
        el.closest("section") ||
        el.parentElement ||
        el;
    }

    if (!scopeEl) scopeEl = el;

    // add helper class automatically
    scopeEl.classList.add(TS_SCOPE_CLASS);

    // apply perspective ONLY here
    gsap.set(scopeEl, { perspective: config.perspective });

    // -----------------------
    // GSAP QUICK SETTERS
    // -----------------------
    const rx = gsap.quickTo(target, "rotationX", { ease: config.ease });
    const ry = gsap.quickTo(target, "rotationY", { ease: config.ease });

    const ix = inner ? gsap.quickTo(inner, "x", { ease: config.ease }) : null;
    const iy = inner ? gsap.quickTo(inner, "y", { ease: config.ease }) : null;

    // -----------------------
    // EVENTS
    // -----------------------
    function onMove(e) {
      const rect = scopeEl.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      rx(gsap.utils.interpolate(config.maxRotation, -config.maxRotation, y));
      ry(gsap.utils.interpolate(-config.maxRotation, config.maxRotation, x));

      if (inner) {
        ix(gsap.utils.interpolate(-config.maxOffset, config.maxOffset, x));
        iy(gsap.utils.interpolate(-config.maxOffset, config.maxOffset, y));
      }
    }

    function onLeave() {
      rx(0);
      ry(0);
      if (inner) {
        ix(0);
        iy(0);
      }
    }

    scopeEl.addEventListener("pointermove", onMove);
    scopeEl.addEventListener("pointerleave", onLeave);

    // -----------------------
    // STORE INSTANCE
    // -----------------------
    el.__tsTilt = {
      destroy() {
        scopeEl.removeEventListener("pointermove", onMove);
        scopeEl.removeEventListener("pointerleave", onLeave);
        delete el.__tsTilt;
      }
    };
  }

  // -----------------------
  // AUTO INIT (SAFE)
  // -----------------------
  function initTsTilt(options = {}) {
    const elements = document.querySelectorAll(`.${TS_TILT_CLASS}`);
    if (!elements.length) return;

    elements.forEach(el => createTilt(el, options));
  }

  // -----------------------
  // OPTIONAL: OBSERVER (dynamic DOM)
  // -----------------------
  function observeTsTilt(options = {}) {
    const observer = new MutationObserver(() => initTsTilt(options));
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // -----------------------
  // PUBLIC API
  // -----------------------
  window.TSTilt = {
    init: initTsTilt,
    create: createTilt,
    observe: observeTsTilt
  };

  // -----------------------
  // AUTO RUN (SAFE)
  // -----------------------
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initTsTilt());
  } else {
    initTsTilt();
  }
})();*/

(function () {
  class TSTilt {
    constructor(options = {}) {
      this.defaults = {
        selector: '.ts-tilt',
        maxTilt: 15,
        perspective: 1000,
        scale: 1.05,
        speed: 300,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        glare: false,
        inner: false,
        scope: null // optional manual scope selector
      };

      this.opts = { ...this.defaults, ...options };
      this.items = [];

      this.init();
    }

    init() {
      const elements = document.querySelectorAll(this.opts.selector);
      if (!elements.length) return; // silent exit

      elements.forEach(el => this.setupElement(el));
    }

    setupElement(el) {
      const config = this.getConfig(el);

      const scope =
        config.scope
          ? el.closest(config.scope)
          : el.parentElement || el;

      const inner = this.resolveInner(el, config);

      const state = {
        el,
        scope,
        inner,
        config,
        bounds: null,
        raf: null
      };

      this.bindEvents(state);
      this.items.push(state);
    }

    getConfig(el) {
      return {
        maxTilt: parseFloat(el.dataset.tsTiltMax) || this.opts.maxTilt,
        scale: parseFloat(el.dataset.tsTiltScale) || this.opts.scale,
        perspective:
          parseFloat(el.dataset.tsTiltPerspective) || this.opts.perspective,
        speed: parseFloat(el.dataset.tsTiltSpeed) || this.opts.speed,
        easing: el.dataset.tsTiltEasing || this.opts.easing,
        inner:
          el.hasAttribute('data-ts-tilt-inner') || this.opts.inner,
        scope: el.dataset.tsTiltScope || this.opts.scope
      };
    }

    resolveInner(el, config) {
      if (!config.inner) return null;

      let inner = el.querySelector('[data-ts-tilt-inner]');
      if (inner) return inner;

      // auto-create inner wrapper
      inner = document.createElement('div');
      inner.setAttribute('data-ts-tilt-inner', '');
      inner.style.willChange = 'transform';

      while (el.firstChild) {
        inner.appendChild(el.firstChild);
      }
      el.appendChild(inner);

      return inner;
    }

    bindEvents(state) {
      const { el, scope, config } = state;

      const onEnter = () => {
        state.bounds = scope.getBoundingClientRect();

        el.style.transition = `transform ${config.speed}ms ${config.easing}`;
        el.style.transformStyle = 'preserve-3d';
        el.style.willChange = 'transform';
      };

      const onMove = e => {
        if (!state.bounds) return;

        const x = (e.clientX - state.bounds.left) / state.bounds.width;
        const y = (e.clientY - state.bounds.top) / state.bounds.height;

        const tiltX = (config.maxTilt / 2 - y * config.maxTilt).toFixed(2);
        const tiltY = (x * config.maxTilt - config.maxTilt / 2).toFixed(2);

        cancelAnimationFrame(state.raf);
        state.raf = requestAnimationFrame(() => {
          el.style.transform = `
            perspective(${config.perspective}px)
            rotateX(${tiltX}deg)
            rotateY(${tiltY}deg)
            scale3d(${config.scale}, ${config.scale}, ${config.scale})
          `;

          if (state.inner) {
            state.inner.style.transform = `
              translateZ(${config.maxTilt * 2}px)
            `;
          }
        });
      };

      const onLeave = () => {
        cancelAnimationFrame(state.raf);

        el.style.transition = `transform ${config.speed}ms ${config.easing}`;
        el.style.transform = `
          perspective(${config.perspective}px)
          rotateX(0deg)
          rotateY(0deg)
          scale3d(1,1,1)
        `;

        if (state.inner) {
          state.inner.style.transform = `translateZ(0px)`;
        }
      };

      scope.addEventListener('mouseenter', onEnter);
      scope.addEventListener('mousemove', onMove);
      scope.addEventListener('mouseleave', onLeave);
    }
  }

  // Auto-init (safe)
  function initTSTilt(options = {}) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        new TSTilt(options);
      });
    } else {
      new TSTilt(options);
    }
  }

  // expose globally
  window.TSTilt = TSTilt;
  window.initTSTilt = initTSTilt;

  // auto-run
  initTSTilt();
})();

(function () {
  function initTSResizable() {
    const elements = document.querySelectorAll(
      '.ts-textarea.ts-resizable'
    );

    if (!elements.length) return;

    elements.forEach(el => {
      if (el.parentElement.classList.contains('ts-resizable-wrap')) return;

      // create wrapper
      const wrap = document.createElement('div');
      wrap.className = 'ts-resizable-wrap';

      el.parentNode.insertBefore(wrap, el);
      wrap.appendChild(el);

      // resize logic
      let isResizing = false;
      let startY, startHeight;

      wrap.addEventListener('mousedown', e => {
        const rect = wrap.getBoundingClientRect();

        const isHandle =
          e.clientX > rect.right - 20 &&
          e.clientY > rect.bottom - 20;

        if (!isHandle) return;

        isResizing = true;
        startY = e.clientY;
        startHeight = el.offsetHeight;

        document.body.style.userSelect = 'none';
      });

      window.addEventListener('mousemove', e => {
        if (!isResizing) return;

        const dy = e.clientY - startY;
        el.style.height = `${startHeight + dy}px`;
      });

      window.addEventListener('mouseup', () => {
        isResizing = false;
        document.body.style.userSelect = '';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTSResizable);
  } else {
    initTSResizable();
  }

  window.initTSResizable = initTSResizable;
})();