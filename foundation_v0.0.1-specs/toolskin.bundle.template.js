/*!
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  TOOLSKIN BUNDLE  ·  v2.0.0  ·  All-in-One Version             ║
 * ║  Includes: Lenis + Locomotive Scroll + Toolskin Framework       ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * This bundle includes all external dependencies inline.
 * Use this for a single-file solution without CDN dependencies.
 *
 * INSTRUCTIONS FOR CREATING THE BUNDLE:
 * ──────────────────────────────────────────────────────────────────
 * 
 * 1. Download the minified libraries:
 *    - Lenis: https://unpkg.com/lenis@1.3.18/dist/lenis.min.js
 *    - Locomotive: https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js
 *
 * 2. Copy their contents into this file (see sections below)
 *
 * 3. Your toolskin.bundle.js structure:
 *    [Lenis Code] + [Locomotive Code] + [Toolskin Framework Code]
 *
 * 4. In your HTML, use ONLY toolskin.bundle.js:
 *    <script src="toolskin.bundle.js"></script>
 *
 * ══════════════════════════════════════════════════════════════════
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════════
   SECTION 1: LENIS SMOOTH SCROLL
   Insert Lenis minified code here from:
   https://unpkg.com/lenis@1.3.18/dist/lenis.min.js
   ═══════════════════════════════════════════════════════════════════ */

// PASTE LENIS CODE HERE
// Example: !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?...


/* ═══════════════════════════════════════════════════════════════════
   SECTION 2: LOCOMOTIVE SCROLL
   Insert Locomotive minified code here from:
   https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js
   ═══════════════════════════════════════════════════════════════════ */

// PASTE LOCOMOTIVE CODE HERE
// Example: !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?...


/* ═══════════════════════════════════════════════════════════════════
   SECTION 3: TOOLSKIN FRAMEWORK
   The complete Toolskin framework code
   ═══════════════════════════════════════════════════════════════════ */

// INSERT COMPLETE TOOLSKIN.JS CONTENT HERE
// (Everything from your toolskin.js file)


/* ═══════════════════════════════════════════════════════════════════
   BUNDLE INITIALIZATION
   Ensures everything loads in the correct order
   ═══════════════════════════════════════════════════════════════════ */

(function () {
    // Verify all dependencies loaded
    if (typeof Lenis === 'undefined') {
        console.error('Toolskin Bundle: Lenis not loaded');
    }
    if (typeof LocomotiveScroll === 'undefined') {
        console.error('Toolskin Bundle: Locomotive Scroll not loaded');
    }
    if (typeof Toolskin === 'undefined') {
        console.error('Toolskin Bundle: Toolskin Framework not loaded');
    }

    console.log('✓ Toolskin Bundle v2.0.0 loaded (all dependencies included)');
})();
