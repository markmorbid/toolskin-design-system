/* ═══════════════════════════════════════════════════════════════════
   STYLESHEET DEBUGGER MODULE
   Floating debug panel for swapping the core Toolskin CSS at runtime.
   Browser-only, never modifies files on disk. All UI styled inline so
   it survives any CSS swap (including swapping to a broken stylesheet).
   Opt-in: set window.__TOOLSKIN_CONFIG__.stylesheetDebugger.enabled = true,
   or call Toolskin.initStylesheetDebugger(opts).
   Toggle panel with Alt+S.
   ═══════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  const STORAGE_KEY = 'ts-style-debug-active';
  window.__TS_DIFF_DISABLE_SCROLL_SYNC__ = true;
  // Minimal fallback used only when the registry is unavailable (file:// or
  // missing manifest). See ToolskinAssetRegistry for the canonical list.
  const FALLBACK_FILES = {
    current: ['toolskin.css'],
    archive: [],
  };

  function findCoreToolskinLink() {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    for (const link of links) {
      if (link.dataset.tsDebugger) continue;
      const href = (link.getAttribute('href') || '').toLowerCase();
      const file = (href.split('?')[0].split('/').pop()) || '';
      if (/^toolskin[^/]*\.css$/i.test(file) && !/uikit/i.test(file) && !/^toolskin_(automation|toolpanel)/i.test(file)) {
        return link;
      }
    }
    return null;
  }

  function resolveBasePath() {
    const link = findCoreToolskinLink();
    if (link) {
      const href = link.getAttribute('href') || '';
      const idx = href.lastIndexOf('/');
      if (idx >= 0) return href.slice(0, idx + 1);
    }
    return 'assets/css/';
  }

  function encodeFilePath(file) {
    return file.split('/').map(encodeURIComponent).join('/');
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  class ToolskinStylesheetDebugger {
    constructor(opts) {
      const cfg = opts || {};
      const filesCfg = cfg.files || FALLBACK_FILES;
      const cur = (filesCfg.current || []).map(f => ({ file: f, group: 'Current' }));
      const arc = (filesCfg.archive || []).map(f => ({ file: f, group: 'Archive (_old)' }));
      this.files = cur.concat(arc);

      this.basePath = cfg.basePath && cfg.basePath !== 'auto'
        ? (cfg.basePath.endsWith('/') ? cfg.basePath : cfg.basePath + '/')
        : resolveBasePath();
      this.showBanner = cfg.showBanner !== false;
      this.persist = cfg.persist !== false;
      this.position = cfg.position || 'bottom-right';
      this.shortcut = cfg.shortcut !== false;

      this.originalLink = findCoreToolskinLink();
      this.injectedLink = null;
      this.activeFile = null;
      this.panelOpen = false;
      this.bannerDismissed = false;
      this.injectedLoadMs = 0;
      this.injectedFailed = false;
      this.elements = {};
      this._kbHandler = null;
      this._loadStart = 0;
      this.rebuildEndpoint = opts.rebuildEndpoint || '/rebuild-assets';
      this._lenisWasEnabled = false;

      this.mode = 'single';
      this._build();
      this._bindEvents();
      const reg = global.Toolskin && global.Toolskin.assets;
      if (reg) {
        reg.ready().then(() => {
          this._populateSelects();
          if (reg.degraded) this._toast('Registry unavailable — using fallback list', 'warning');
          this._restoreFromStorage();
        });
      } else {
        this._restoreFromStorage();
      }
      this._refreshActiveInfo();
    }

    _positionStyles() {
      const map = {
        'bottom-right': { bottom: '20px', right: '20px' },
        'bottom-left':  { bottom: '20px', left: '20px' },
        'top-right':    { top: '20px', right: '20px' },
        'top-left':     { top: '20px', left: '20px' },
      };
      return map[this.position] || map['bottom-right'];
    }

    _defaultLabel() {
      if (!this.originalLink) return '<em style="color:#f59e0b;">No core sheet detected</em>';
      const href = this.originalLink.getAttribute('href') || '';
      return escapeHtml(href.split('/').pop() || href);
    }

    _injectFallbackStyles() {
      if (document.getElementById('ts-debug-fallback')) return;
      const s = document.createElement('style');
      s.id = 'ts-debug-fallback';
      s.textContent = [
        '#ts-debug-root{position:fixed;z-index:2147483646;pointer-events:none;}',
        '#ts-debug-root .ts-btn{pointer-events:auto;cursor:pointer;}',
        '#ts-debug-root [data-ts-panel]{pointer-events:auto;background:#1a1c20;color:#e8eaed;border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:12px;min-width:280px;}',
        '#ts-debug-root [data-ts-panel][hidden]{display:none;}',
        '#ts-debug-root .ts-ui-select__native{pointer-events:auto;}',
        '#ts-debug-banner-host .ts-banner{display:flex;}',
      ].join('\n');
      document.head.appendChild(s);
    }

    _build() {
      this._injectFallbackStyles();

      const root = document.createElement('div');
      root.id = 'ts-debug-root';
      Object.assign(root.style, this._positionStyles());
      document.body.appendChild(root);
      this.elements.root = root;

      // FAB
      const fab = document.createElement('button');
      fab.type = 'button';
      fab.className = 'ts-btn ts-btn--primary ts-btn--icon';
      fab.title = 'Stylesheet debugger' + (this.shortcut ? ' (Alt+S)' : '');
      fab.setAttribute('aria-label', 'Toggle stylesheet debugger');
      fab.setAttribute('data-icon', 'fa-solid fa-flask-vial');
      fab.innerHTML = '<span class="ts-btn__icon"></span>';
      Object.assign(fab.style, { width: '44px', height: '44px', borderRadius: '50%', padding: '0' });
      root.appendChild(fab);
      this.elements.fab = fab;

      // Panel
      const panel = document.createElement('aside');
      panel.className = 'ts-ui-panel ts-ui-panel--floating';
      panel.setAttribute('data-ts-panel', '');
      panel.hidden = true;
      Object.assign(panel.style, {
        position: 'absolute',
        width: '360px', maxWidth: 'calc(100vw - 40px)',
        [this.position.indexOf('top') === 0 ? 'top' : 'bottom']: '54px',
        [this.position.indexOf('left') > -1 ? 'left' : 'right']: '0',
      });
      root.appendChild(panel);
      this.elements.panel = panel;

      // Header
      const header = document.createElement('header');
      header.className = 'ts-ui-panel__header';
      header.innerHTML =
        '<strong class="ts-ui-panel__title" data-icon="fa-solid fa-flask-vial">CSS Debugger</strong>' +
        '<button type="button" class="ts-btn ts-btn--icon ts-btn--ghost" data-action="close" aria-label="Close">×</button>';
      panel.appendChild(header);
      header.querySelector('[data-action="close"]').addEventListener('click', () => this.togglePanel(false));

      // Body
      const body = document.createElement('div');
      body.className = 'ts-ui-panel__body';
      panel.appendChild(body);

      // Default + Active info
      this.elements.defaultInfo = document.createElement('div');
      this.elements.defaultInfo.className = 'ts-ui-panel__row ts-text-muted';
      body.appendChild(this.elements.defaultInfo);
      this.elements.activeInfo = document.createElement('div');
      this.elements.activeInfo.className = 'ts-ui-panel__row';
      body.appendChild(this.elements.activeInfo);

      // Mode tabs
      const modes = document.createElement('div');
      modes.className = 'ts-tabs';
      modes.setAttribute('role', 'tablist');
      modes.innerHTML =
        '<button type="button" class="ts-tab is-active" data-mode="single" data-icon="fa-regular fa-file-code">Single File</button>' +
        '<button type="button" class="ts-tab" data-mode="diff" data-icon="fa-solid fa-code-compare">Diff/Compare</button>';
      body.appendChild(modes);
      this.elements.modes = modes;
      modes.addEventListener('click', (e) => {
        const t = e.target.closest('[data-mode]');
        if (!t) return;
        modes.querySelectorAll('.ts-tab').forEach(b => b.classList.toggle('is-active', b === t));
        this._setMode(t.getAttribute('data-mode'));
      });

      // Select for single mode
      const selectWrap = document.createElement('div');
      selectWrap.className = 'ts-ui-select';
      selectWrap.setAttribute('data-ts-ui-select-placeholder', 'Select stylesheet');
      const native = document.createElement('select');
      native.className = 'ts-ui-select__native';
      selectWrap.appendChild(native);
      body.appendChild(selectWrap);
      this.elements.select = native;
      this.elements.selectWrap = selectWrap;

      // Diff selects
      const diffSelectsWrap = document.createElement('div');
      diffSelectsWrap.className = 'ts-debug-diff-selects';
      diffSelectsWrap.hidden = true;
      diffSelectsWrap.innerHTML =
        '<label><span class="ts-text-muted">Sheet A</span><div class="ts-ui-select" data-ts-ui-select-placeholder="Stylesheet A"><select class="ts-ui-select__native" data-role="diff-a"></select></div></label>' +
        '<label><span class="ts-text-muted">Sheet B</span><div class="ts-ui-select" data-ts-ui-select-placeholder="Stylesheet B"><select class="ts-ui-select__native" data-role="diff-b"></select></div></label>';
      body.appendChild(diffSelectsWrap);
      this.elements.diffSelectsWrap = diffSelectsWrap;
      this.elements.diffSelectA = diffSelectsWrap.querySelector('[data-role="diff-a"]');
      this.elements.diffSelectB = diffSelectsWrap.querySelector('[data-role="diff-b"]');

      // Action buttons
      const actions = document.createElement('div');
      actions.className = 'ts-ui-panel__actions';
      actions.innerHTML =
        '<button type="button" class="ts-btn ts-btn--primary" data-action="apply" data-icon="fa-solid fa-circle-check">Apply</button>' +
        '<button type="button" class="ts-btn ts-btn--outline" data-action="reload" data-icon="fa-solid fa-arrow-rotate-left">Reload</button>' +
        '<button type="button" class="ts-btn ts-btn--outline" data-action="reset" data-icon="fa-solid fa-recycle">Clear</button>' +
        '<button type="button" class="ts-btn ts-btn--secondary" data-action="rebuild" data-icon="fa-solid fa-chart-diagram">Redo Registry</button>';
      body.appendChild(actions);
      this.elements.applyBtn = actions.querySelector('[data-action="apply"]');
      this.elements.reloadBtn = actions.querySelector('[data-action="reload"]');
      this.elements.resetBtn = actions.querySelector('[data-action="reset"]');
      this.elements.rebuildBtn = actions.querySelector('[data-action="rebuild"]');

      // Compare button (initially hidden)
      const compareBtn = document.createElement('button');
      compareBtn.type = 'button';
      compareBtn.className = 'ts-btn ts-btn--primary';
      compareBtn.setAttribute('data-action', 'compare');
      compareBtn.textContent = 'Compare';
      compareBtn.hidden = true;
      body.appendChild(compareBtn);
      this.elements.compareBtn = compareBtn;

      // ===== Manual inputs row (URL + File) =====
      const manualRow = document.createElement('div');
      manualRow.className = 'ts-ui-panel__row';
      manualRow.style.display = 'flex';
      manualRow.style.gap = '6px';
      manualRow.style.marginTop = '8px';
      manualRow.style.alignItems = 'center';

      // URL input
      const urlInput = document.createElement('input');
      urlInput.type = 'text';
      urlInput.placeholder = 'CSS URL';
      urlInput.className = 'ts-input';
      urlInput.style.flex = '1';
      urlInput.style.minWidth = '0';
      manualRow.appendChild(urlInput);
      urlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && urlInput.value.trim()) {
          this.apply(urlInput.value.trim(), { manual: true });
          urlInput.value = '';
        }
      });
      this.elements.manualUrlInput = urlInput;

      // File input
      const fileLabel = document.createElement('label');
      fileLabel.className = 'ts-btn ts-btn--outline ts-btn--sm';
      fileLabel.style.margin = '0';
      fileLabel.style.cursor = 'pointer';
      fileLabel.textContent = '📁 File';
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.css';
      fileInput.style.display = 'none';
      fileLabel.appendChild(fileInput);
      manualRow.appendChild(fileLabel);
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          const css = ev.target.result;
          const blob = new Blob([css], { type: 'text/css' });
          const url = URL.createObjectURL(blob);
          this.apply(url, { manual: true, blob: true, label: file.name });
          fileInput.value = '';
        };
        reader.readAsText(file);
      });
      this.elements.fileInput = fileInput;

      body.appendChild(manualRow);

      // Hint footer
      const hint = document.createElement('footer');
      hint.className = 'ts-ui-panel__footer ts-text-muted';
      hint.innerHTML = 'Browser-only · no files modified' +
        (this.shortcut ? ' · <kbd>Alt+S</kbd>' : '');
      body.appendChild(hint);

      // Banner host
      const bannerHost = document.createElement('div');
      bannerHost.id = 'ts-debug-banner-host';
      document.body.appendChild(bannerHost);
      this.elements.bannerHost = bannerHost;

      // Populate selects
      this._populateSelects();

      // Initial info
      this._refreshDefaultInfo();
      this._refreshActiveInfo();

      // Enhance with Toolskin UIKit/Icons if available
      if (global.ToolskinUIKit && global.ToolskinUIKit.init) {
        global.ToolskinUIKit.init(panel);
      }
      if (global.ToolskinIcons && global.ToolskinIcons.inject) {
        global.ToolskinIcons.inject(panel);
        global.ToolskinIcons.inject(root);
      }
    }

    _populateSelects() {
      const reg = global.Toolskin && global.Toolskin.assets;
      let cores = null;
      if (reg && !reg.degraded) {
        cores = reg.cores();
      }
      const items = (cores && cores.length)
        ? cores.map(r => ({
            file: r.path,
            label: r.name + ' (' + r.folder + ')',
            group: this._groupLabel(r)
          }))
        : this.files.map(f => ({
            file: 'assets/css/' + f.file,
            label: f.file,
            group: f.group
          }));

      for (const sel of [this.elements.select, this.elements.diffSelectA, this.elements.diffSelectB]) {
        if (!sel) continue;
        sel.innerHTML = '';
        const ph = document.createElement('option');
        ph.value = ''; ph.textContent = '— Select —'; ph.disabled = true; ph.selected = true;
        sel.appendChild(ph);
        const groups = {};
        for (const it of items) {
          if (!groups[it.group]) {
            const og = document.createElement('optgroup');
            og.label = it.group;
            sel.appendChild(og);
            groups[it.group] = og;
          }
          const opt = document.createElement('option');
          opt.value = it.file;
          opt.textContent = it.label;
          groups[it.group].appendChild(opt);
        }
      }
    }

    _groupLabel(record) {
      if (/\/_old\//.test(record.path)) return 'Archive (_old)';
      if (record.kind === 'experimental') return 'Experimental';
      return 'Current';
    }

    _refreshDefaultInfo() {
      if (!this.elements.defaultInfo) return;
      this.elements.defaultInfo.innerHTML =
        '<span class="ts-text-eyebrow">Default</span> ' +
        '<code>' + escapeHtml(this._defaultLabel()) + '</code>';
    }

    _setMode(mode) {
      this.mode = mode;
      const single = mode === 'single';
      if (this.elements.selectWrap) this.elements.selectWrap.hidden = !single;
      if (this.elements.applyBtn) this.elements.applyBtn.hidden = !single;
      if (this.elements.reloadBtn) this.elements.reloadBtn.hidden = !single;
      if (this.elements.resetBtn) this.elements.resetBtn.hidden = !single;
      if (this.elements.diffSelectsWrap) this.elements.diffSelectsWrap.hidden = single;
      if (this.elements.compareBtn) this.elements.compareBtn.hidden = single;
    }

    _toast(msg, variant) {
      if (global.Toolskin && typeof global.Toolskin.showToast === 'function') {
        global.Toolskin.showToast(msg, variant || 'info');
      } else {
        console.log('[Toolskin debug]', msg);
      }
    }

    _ensureBanner() {
      if (this.elements.banner) return this.elements.banner;
      const banner = document.createElement('div');
      banner.className = 'ts-banner ts-banner--warning';
      banner.style.display = 'none';
      banner.innerHTML =
        '<div class="ts-banner__label">' +
          '<span class="ts-banner__tag">CSS OVERRIDE</span>' +
          '<span class="ts-banner__file"></span>' +
          '<span class="ts-banner__meta"></span>' +
        '</div>' +
        '<button type="button" class="ts-banner__action" data-action="reset">Reset to default</button>' +
        '<button type="button" class="ts-banner__dismiss" data-action="dismiss" aria-label="Dismiss">×</button>';
      banner.querySelector('[data-action="reset"]').addEventListener('click', () => this.reset());
      banner.querySelector('[data-action="dismiss"]').addEventListener('click', () => {
        this.bannerDismissed = true;
        banner.style.display = 'none';
      });
      this.elements.bannerHost.appendChild(banner);
      this.elements.banner = banner;
      this.elements.bannerFile = banner.querySelector('.ts-banner__file');
      this.elements.bannerMeta = banner.querySelector('.ts-banner__meta');
      return banner;
    }

    _renderBanner() {
      if (!this.showBanner) return;
      if (!this.activeFile) { if (this.elements.banner) this.elements.banner.style.display = 'none'; return; }
      if (this.bannerDismissed) return;
      const banner = this._ensureBanner();
      banner.classList.toggle('ts-banner--danger', !!this.injectedFailed);
      banner.classList.toggle('ts-banner--warning', !this.injectedFailed);
      this.elements.bannerFile.textContent = this.activeFile;
      this.elements.bannerMeta.textContent = (this.injectedLoadMs ? ' · loaded in ' + this.injectedLoadMs + 'ms' : '') +
        (this.injectedFailed ? ' · FAILED' : '');
      banner.style.display = 'flex';
    }

    _refreshActiveInfo() {
      if (!this.elements.activeInfo) return;
      if (!this.activeFile) {
        this.elements.activeInfo.innerHTML =
          '<div style="color:#888;font-size:10px;text-transform:uppercase;letter-spacing:0.05em;">Active</div>' +
          '<div style="color:#10b981;margin-top:2px;">● Using default</div>';
        return;
      }
      const ms = this.injectedLoadMs ? ' <span style="color:#888;">(' + this.injectedLoadMs + 'ms)</span>' : '';
      const err = this.injectedFailed ? ' <span style="color:#dc2626;">FAILED</span>' : '';
      this.elements.activeInfo.innerHTML =
        '<div style="color:#888;font-size:10px;text-transform:uppercase;letter-spacing:0.05em;">Active override</div>' +
        '<div style="color:#fbbf24;margin-top:2px;">●' + ms + err + '</div>' +
        '<div style="color:#c8cad0;word-break:break-all;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;margin-top:2px;">' +
        escapeHtml(this.activeFile) + '</div>';
    }

    _bindEvents() {
      this.elements.fab.addEventListener('click', () => this.togglePanel());
      this.elements.applyBtn.addEventListener('click', () => {
        const v = this.elements.select.value;
        if (v) this.apply(v);
      });
      this.elements.reloadBtn.addEventListener('click', () => this.reload());
      this.elements.resetBtn.addEventListener('click', () => this.reset());
      this.elements.rebuildBtn.addEventListener('click', () => this._rebuildRegistry());

      if (this.shortcut) {
        this._kbHandler = (e) => {
          if (e.altKey && !e.ctrlKey && !e.metaKey && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            this.togglePanel();
          }
        };
        document.addEventListener('keydown', this._kbHandler);
      }

      if (this.elements.compareBtn) {
        this.elements.compareBtn.addEventListener('click', () => {
          const a = this.elements.diffSelectA && this.elements.diffSelectA.value;
          const b = this.elements.diffSelectB && this.elements.diffSelectB.value;
          if (!a || !b) { this._toast('Pick A and B first', 'warning'); return; }
          if (a === b) { this._toast('Pick two different sheets', 'warning'); return; }
          this.openDiff(a, b);
        });
      }
    }

    _restoreFromStorage() {
      if (!this.persist) return;
      let saved;
      try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
      if (!saved) return;
      const inSelect = this.elements.select &&
        Array.from(this.elements.select.options).some(o => o.value === saved);
      if (!inSelect) return;
      if (this.elements.select) this.elements.select.value = saved;
      this.apply(saved);
    }

    /* Public API */

    togglePanel(forceState) {
      this.panelOpen = typeof forceState === 'boolean' ? forceState : !this.panelOpen;
      this.elements.panel.hidden = !this.panelOpen;
      if (this.panelOpen) this._refreshActiveInfo();
    }

    apply(file, opts) {
      const cacheBust = !!(opts && opts.cacheBust);
      const manual = !!(opts && opts.manual);
      const label = opts && opts.label;
      if (!file) return;

      // If manual, treat as full URL (including blob:)
      if (manual) {
        if (!this.originalLink) {
          console.warn('[ToolskinStylesheetDebugger] No core sheet detected; cannot swap.');
          return;
        }
        if (this.injectedLink) {
          this.injectedLink.remove();
          this.injectedLink = null;
        }
        this.injectedFailed = false;
        this.injectedLoadMs = 0;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = file + (cacheBust ? (file.includes('?') ? '&_ts=' : '?_ts=') + Date.now() : '');
        link.dataset.tsDebugger = 'active';
        this._loadStart = (performance && performance.now) ? performance.now() : Date.now();
        link.addEventListener('load', () => {
          const now = (performance && performance.now) ? performance.now() : Date.now();
          this.injectedLoadMs = Math.round(now - this._loadStart);
          if (this.originalLink) this.originalLink.disabled = true;
          this.activeFile = label || file;
          this._refreshActiveInfo();
          this._renderBanner();
          this._toast('Applied manual: ' + (label || file) + ' (' + this.injectedLoadMs + 'ms)', 'success');
        });
        link.addEventListener('error', () => {
          this.injectedFailed = true;
          console.error('[ToolskinStylesheetDebugger] Failed to load manual URL:', link.href);
          this._refreshActiveInfo();
          this._renderBanner();
          this._toast('Failed to load manual URL: ' + (label || file), 'error');
        });
        if (this.originalLink && this.originalLink.parentNode) {
          this.originalLink.parentNode.insertBefore(link, this.originalLink.nextSibling);
        } else {
          document.head.appendChild(link);
        }
        this.injectedLink = link;
        this.activeFile = label || file;
        if (this.persist && !opts.blob) {
          try { localStorage.setItem(STORAGE_KEY, file); } catch (e) {}
        }
        this._refreshActiveInfo();
        this._renderBanner();
        return;
      }

      // Normal mode: strip basePath if present
      if (this.basePath && file.startsWith(this.basePath)) {
        file = file.slice(this.basePath.length);
      }
      if (!this.originalLink) {
        console.warn('[ToolskinStylesheetDebugger] No core toolskin sheet detected on this page; cannot swap.');
        return;
      }
      if (this.injectedLink) {
        this.injectedLink.remove();
        this.injectedLink = null;
      }
      this.injectedFailed = false;
      this.injectedLoadMs = 0;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = this.basePath + encodeFilePath(file) + (cacheBust ? '?_ts=' + Date.now() : '');
      link.dataset.tsDebugger = 'active';
      this._loadStart = (performance && performance.now) ? performance.now() : Date.now();
      link.addEventListener('load', () => {
        const now = (performance && performance.now) ? performance.now() : Date.now();
        this.injectedLoadMs = Math.round(now - this._loadStart);
        if (this.originalLink) this.originalLink.disabled = true;
        this.activeFile = file;
        this._refreshActiveInfo();
        this._renderBanner();
        this._toast('Applied: ' + file + ' (' + this.injectedLoadMs + 'ms)', 'success');
      });
      link.addEventListener('error', () => {
        this.injectedFailed = true;
        console.error('[ToolskinStylesheetDebugger] Failed to load:', link.href);
        this._refreshActiveInfo();
        this._renderBanner();
        this._toast('Failed to load: ' + file, 'error');
      });
      if (this.originalLink && this.originalLink.parentNode) {
        this.originalLink.parentNode.insertBefore(link, this.originalLink.nextSibling);
      } else {
        document.head.appendChild(link);
      }
      this.injectedLink = link;
      this.activeFile = file;
      if (this.persist) {
        try { localStorage.setItem(STORAGE_KEY, file); } catch (e) {}
      }
      this._refreshActiveInfo();
      this._renderBanner();
    }

    reload() {
      if (!this.activeFile) return;
      const isManual = this.activeFile.startsWith('http://') || this.activeFile.startsWith('https://') || this.activeFile.startsWith('blob:');
      this.apply(this.activeFile, { cacheBust: true, manual: isManual, label: this.activeFile });
    }

    reset() {
      if (this.injectedLink) {
        this.injectedLink.remove();
        this.injectedLink = null;
      }
      if (this.originalLink) this.originalLink.disabled = false;
      this.activeFile = null;
      this.injectedLoadMs = 0;
      this.injectedFailed = false;
      this.bannerDismissed = false;
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      if (this.elements.select) this.elements.select.value = '';
      this._refreshActiveInfo();
      if (this.activeFile === null && this.injectedLink === null) this._toast('Restored default sheet', 'info');
      this._renderBanner();
    }

    async _rebuildRegistry() {
      this._toast('Rebuilding asset registry...', 'info');
      try {
        const res = await fetch(this.rebuildEndpoint, { method: 'POST' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        const reg = global.Toolskin && global.Toolskin.assets;
        if (reg) {
          await reg.reload();
          this._populateSelects();
          this._toast('Registry rebuilt and reloaded', 'success');
        } else {
          this._toast('Registry rebuilt but could not reload; refresh page', 'warning');
        }
      } catch (err) {
        console.error('[Toolskin] Rebuild failed:', err);
        this._toast('Rebuild failed: ' + err.message, 'error');
      }
    }

    openDiff(filePathA, filePathB) {
  // Close any previous diff
  this.closeDiff();

  // Disable all main‑page scrolling effects
  this._disableMainPageEffects();

  this._diffReadyCount = 0;
  const wrap = document.createElement('div');
  wrap.className = 'ts-debug-diff';
  Object.assign(wrap.style, {
    position: 'fixed', inset: '0', zIndex: '2147483640',
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    background: '#000',
  });

  const buildPane = (pathStr, role) => {
  const col = document.createElement('div');
  col.style.cssText = 'display:flex;flex-direction:column;border-right:1px solid var(--ts-border-1, rgba(22,22,22,.5));';
  const head = document.createElement('div');
  head.className = 'ts-banner ts-banner--info';
  head.style.cssText = 'position:relative;';
  head.innerHTML =
    '<div class="ts-banner__label"><span class="ts-banner__tag">' + role + '</span><span class="ts-banner__file">' + escapeHtml(pathStr) + '</span></div>';
  col.appendChild(head);

  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'flex:1 1 auto;border:0;width:100%;background:var(--ts-bg-body, transparent);';
  const pageURL = new URL(location.href);
  pageURL.searchParams.set('__ts_override_css', pathStr);
  pageURL.searchParams.set('__ts_debug', 'off');
  pageURL.searchParams.set('__ts_diff_role', role);
  pageURL.searchParams.set('__ts_no_effects', '1');
  pageURL.hash = '';
  iframe.src = pageURL.toString();
  iframe.dataset.role = role;
  col.appendChild(iframe);
  wrap.appendChild(col);

  // Inject label + cleanup script + reset style after load
  iframe.addEventListener('load', function onLoad() {
    try {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      if (!doc) return;

      // --- Floating label (keep it) ---
      const oldLabel = doc.getElementById('ts-diff-label');
      if (oldLabel) oldLabel.remove();

      const label = doc.createElement('div');
      label.id = 'ts-diff-label';
      label.style.cssText = `
        position: fixed;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2147483647;
        background: rgba(0,0,0,0.75);
        color: #fff;
        padding: 4px 12px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 12px;
        pointer-events: none;
        opacity: 0.7;
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255,255,255,0.1);
        max-width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `;
      label.textContent = role + ': ' + pathStr;
      doc.body.appendChild(label);

      // --- RESET STYLE (injected directly, no script needed for this) ---
      const resetStyle = doc.createElement('style');
      resetStyle.textContent = `
        html, body {
          overflow: auto !important;
          height: auto !important;
          scroll-behavior: auto !important;
          scroll-snap-type: none !important;
        }
        .ts-section, .ts-hero {
          scroll-snap-align: none !important;
          min-height: auto !important;
        }
        [data-scroll-container], [data-scroll] {
          will-change: auto !important;
        }
      `;
      doc.head.appendChild(resetStyle);

      // --- CLEANUP SCRIPT (to kill Lenis, GSAP, etc.) ---
      // Use a script element – if it fails, the style is already applied, so scroll snap is fixed.
      const cleanupScript = doc.createElement('script');
      cleanupScript.textContent = `
        (function() {
          window.__TS_DIFF_MODE = true;

          function disableEffects() {
            if (window.Toolskin) {
              if (window.Toolskin.smooth) {
                if (typeof window.Toolskin.smooth.destroy === 'function') window.Toolskin.smooth.destroy();
                else if (window.Toolskin.smooth.lenis) window.Toolskin.smooth.lenis.destroy();
                window.Toolskin.smooth = null;
              }
              if (window.Toolskin.observer) {
                if (typeof window.Toolskin.observer.destroy === 'function') window.Toolskin.observer.destroy();
                window.Toolskin.observer = null;
              }
              if (window.Toolskin.gsapReveal) {
                if (typeof window.Toolskin.gsapReveal.destroy === 'function') window.Toolskin.gsapReveal.destroy();
                window.Toolskin.gsapReveal = null;
              }
              if (window.Toolskin.locomotive) {
                if (window.Toolskin.locomotive.locomotive && typeof window.Toolskin.locomotive.locomotive.destroy === 'function') {
                  window.Toolskin.locomotive.locomotive.destroy();
                }
                window.Toolskin.locomotive = null;
              }
              // Also destroy any ToolskinDynamicNav that might be listening
              if (window.ToolskinDynamicNav && typeof window.ToolskinDynamicNav.destroy === 'function') {
                window.ToolskinDynamicNav.destroy();
              }
              if (window.ToolskinDynamicNav) {
                const nav = document.getElementById('ts-primary-menu');
                if (nav && nav.__tsDynamicNav) {
                  nav.__tsDynamicNav.setEnabled(false);
                }
              }
              var html = document.documentElement;
              if (html) {
                html.classList.remove('ts-fullpage', 'lenis', 'lenis-smooth', 'lenis-stopped', 'lenis-scrolling');
                html.style.removeProperty('overflow');
                html.style.removeProperty('height');
                html.style.removeProperty('scroll-behavior');
              }
              if (document.body) {
                document.body.style.removeProperty('overflow');
                document.body.style.removeProperty('height');
              }
              if (window.gsap) {
                gsap.killTweensOf('*');
                if (window.ScrollTrigger) ScrollTrigger.getAll().forEach(st => st.kill());
              }
              document.querySelectorAll('[style*="position: fixed"]').forEach(el => {
                if (el.id !== 'ts-diff-label') el.style.position = '';
              });
            }
          }

          if (document.readyState === 'complete' || document.readyState === 'interactive') {
            disableEffects();
          } else {
            document.addEventListener('DOMContentLoaded', disableEffects);
            // Fallback after a short delay
            setTimeout(disableEffects, 500);
          }
        })();
      `;
      doc.head.appendChild(cleanupScript);

      // If the script fails, we already have the reset style, so scroll snap is fixed.
    } catch (e) {
      // If we can't inject, the iframe may be cross-origin – but we still have the reset style in the iframe's own CSS?
      // Actually, if we can't inject, the style won't be applied. But we can try again later.
      console.warn('[Diff] Could not inject cleanup script, retrying...', e);
      // Retry after a short delay
      setTimeout(function() {
        try {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          if (!doc) return;
          // Re-inject the reset style (in case it failed)
          const resetStyle = doc.createElement('style');
          resetStyle.textContent = `
            html, body {
              overflow: auto !important;
              height: auto !important;
              scroll-behavior: auto !important;
              scroll-snap-type: none !important;
            }
            .ts-section, .ts-hero {
              scroll-snap-align: none !important;
              min-height: auto !important;
            }
          `;
          doc.head.appendChild(resetStyle);
        } catch (_) {}
      }, 300);
    }
  });

  return iframe;
};
  const iframeA = buildPane(filePathA, 'A');
  const iframeB = buildPane(filePathB, 'B');
  document.body.appendChild(wrap);

  // Controls
  const controls = document.createElement('div');
  Object.assign(controls.style, {
    position: 'fixed', top: '8px', right: '12px', zIndex: '2147483647',
    display: 'flex', gap: '8px',
  });
  controls.innerHTML =
    '<button type="button" class="ts-btn ts-btn--outline ts-btn--sm" data-action="overlay">Toggle overlay</button>' +
    '<button type="button" class="ts-btn ts-btn--secondary ts-btn--sm" data-action="resetDiff">Reset (default)</button>' +
    '<button type="button" class="ts-btn ts-btn--primary ts-btn--sm" data-action="exit">Exit diff</button>';
  controls.querySelector('[data-action="exit"]').addEventListener('click', () => this.closeDiff());
  controls.querySelector('[data-action="overlay"]').addEventListener('click', () => this._toggleDiffOverlay());
  controls.querySelector('[data-action="resetDiff"]').addEventListener('click', () => this.reset());
  wrap.appendChild(controls);

  // postMessage bridge
  this._diffWrap = wrap;
  this._diffIframes = { A: iframeA, B: iframeB };
  this._diffSuppress = { A: false, B: false };
  this._onDiffMessage = (e) => {
    if (e.origin !== location.origin) return;
    const m = e.data;
    if (!m || m.type !== 'ts-debug-diff') return;
    if (m.action === 'ready') {
      this._diffReadyCount = (this._diffReadyCount || 0) + 1;
    } else if (m.action === 'scroll') {
      const senderId = m.payload.sender;
      const otherId = senderId === 'A' ? 'B' : 'A';
      if (this._diffSuppress[otherId]) return;
      const other = this._diffIframes[otherId];
      if (other && other.contentWindow) {
        this._diffSuppress[otherId] = true;
        other.contentWindow.postMessage(
          { type: 'ts-debug-diff', action: 'scroll-set', payload: { y: m.payload.y } },
          location.origin
        );
        requestAnimationFrame(() => { this._diffSuppress[otherId] = false; });
      }
    }
  };
  window.addEventListener('message', this._onDiffMessage);
}

    /*closeDiff() {
      if (this._onDiffMessage) {
        window.removeEventListener('message', this._onDiffMessage);
        this._onDiffMessage = null;
      }
      if (this._diffWrap && this._diffWrap.parentNode) this._diffWrap.remove();
      this._diffWrap = null;
      this._diffIframes = null;
      this._diffSuppress = null;
      this._diffReadyCount = 0;

      if (this._lenisWasEnabled && window.Toolskin && window.Toolskin.smooth && window.Toolskin.smooth.lenis) {
        window.Toolskin.smooth.lenis.start();
        this._lenisWasEnabled = false;
      }
    }*/
closeDiff() {
  if (this._onDiffMessage) {
    window.removeEventListener('message', this._onDiffMessage);
    this._onDiffMessage = null;
  }
  if (this._diffWrap && this._diffWrap.parentNode) this._diffWrap.remove();
  this._diffWrap = null;
  this._diffIframes = null;
  this._diffSuppress = null;
  this._diffReadyCount = 0;

  // Re‑enable main‑page effects
  this._enableMainPageEffects();
}

_disableMainPageEffects() {
  const html = document.documentElement;
  const body = document.body;

  // Store original styles
  this._mainEffectsState = {
    fullpageClass: html.classList.contains('ts-fullpage'),
    htmlOverflow: html.style.overflow,
    htmlMaxHeight: html.style.maxHeight,
    htmlMaxWidth: html.style.maxWidth,
    htmlScrollBehavior: html.style.scrollBehavior,
    bodyOverflow: body.style.overflow,
    bodyMaxHeight: body.style.maxHeight,
    bodyMaxWidth: body.style.maxWidth,
  };

  // --- LOCK THE MAIN PAGE ---
  html.style.overflow = 'hidden';
  html.style.maxHeight = '100dvh';
  html.style.maxWidth = '100dvw';
  html.style.scrollBehavior = 'auto';
  body.style.overflow = 'hidden';
  body.style.maxHeight = '100dvh';
  body.style.maxWidth = '100dvw';
  html.classList.remove('ts-fullpage');

  // Disable Toolskin modules (Lenis, Observer, GSAP, etc.)
  if (window.Toolskin) {
    if (window.Toolskin.smooth && window.Toolskin.smooth.lenis) {
      window.Toolskin.smooth.lenis.stop();
      // Also cancel any RAF loops
      if (window.Toolskin.smooth._rafHandle) {
        cancelAnimationFrame(window.Toolskin.smooth._rafHandle);
        window.Toolskin.smooth._rafHandle = null;
      }
      if (window.Toolskin.smooth._gsapTicker && window.gsap) {
        window.gsap.ticker.remove(window.Toolskin.smooth._gsapTicker);
        window.Toolskin.smooth._gsapTicker = null;
      }
      this._smoothWasEnabled = true;
    }
    if (window.Toolskin.observer && window.Toolskin.observer._observer) {
      window.Toolskin.observer._observer.disconnect();
      this._observerWasEnabled = true;
    }
    if (window.Toolskin.gsapReveal && window.gsap && window.ScrollTrigger) {
      ScrollTrigger.getAll().forEach(st => st.disable());
      this._scrollTriggerWasEnabled = true;
    }
    if (window.Toolskin.layout) {
      this._layoutFullpagePrev = window.Toolskin.config.layout.fullpage;
      window.Toolskin.layout.update({ fullpage: false });
    }
  }

  // Remove any lenis classes that might linger
  html.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped', 'lenis-scrolling');
}

_enableMainPageEffects() {
  if (!this._mainEffectsState) return;

  const html = document.documentElement;
  const body = document.body;
  const state = this._mainEffectsState;

  // Restore original styles
  html.style.overflow = state.htmlOverflow || '';
  html.style.maxHeight = state.htmlMaxHeight || '';
  html.style.maxWidth = state.htmlMaxWidth || '';
  html.style.scrollBehavior = state.htmlScrollBehavior || '';
  body.style.overflow = state.bodyOverflow || '';
  body.style.maxHeight = state.bodyMaxHeight || '';
  body.style.maxWidth = state.bodyMaxWidth || '';

  if (state.fullpageClass) {
    html.classList.add('ts-fullpage');
  }

  // Re‑enable Toolskin modules
  if (window.Toolskin) {
    if (window.Toolskin.smooth && this._smoothWasEnabled) {
      if (window.Toolskin.smooth.lenis) {
        window.Toolskin.smooth.lenis.start();
        // Re‑add GSAP ticker if needed (optional – we can skip for simplicity)
        if (!window.Toolskin.smooth._gsapTicker && window.gsap) {
          window.Toolskin.smooth._gsapTicker = (time) => {
            if (window.Toolskin.smooth && window.Toolskin.smooth.lenis) {
              window.Toolskin.smooth.lenis.raf(time * 1000);
            }
          };
          window.gsap.ticker.add(window.Toolskin.smooth._gsapTicker);
          window.gsap.ticker.lagSmoothing(0);
        }
      }
      this._smoothWasEnabled = false;
    }
    if (window.Toolskin.observer && this._observerWasEnabled) {
      window.Toolskin.observer.refresh();
      this._observerWasEnabled = false;
    }
    if (window.Toolskin.gsapReveal && this._scrollTriggerWasEnabled && window.ScrollTrigger) {
      ScrollTrigger.getAll().forEach(st => st.enable());
      ScrollTrigger.refresh();
      this._scrollTriggerWasEnabled = false;
    }
    if (window.Toolskin.layout && this._layoutFullpagePrev !== undefined) {
      window.Toolskin.layout.update({ fullpage: this._layoutFullpagePrev });
      this._layoutFullpagePrev = undefined;
    }
  }

  this._mainEffectsState = null;
}

    _toggleDiffOverlay() {
      if (!this._diffIframes) return;
      const b = this._diffIframes.B.parentNode;
      const wrap = this._diffWrap;
      const overlayOn = wrap.classList.toggle('ts-debug-diff--overlay');
      if (overlayOn) {
        wrap.style.gridTemplateColumns = '1fr';
        Object.assign(b.style, { position: 'absolute', inset: '0', mixBlendMode: 'difference', pointerEvents: 'none' });
      } else {
        wrap.style.gridTemplateColumns = '1fr 1fr';
        Object.assign(b.style, { position: '', inset: '', mixBlendMode: '', pointerEvents: '' });
      }
    }

    destroy() {
      this.closeDiff();
      this.reset();
      if (this._kbHandler) {
        document.removeEventListener('keydown', this._kbHandler);
        this._kbHandler = null;
      }
      if (this.elements.root) this.elements.root.remove();
      if (this.elements.bannerHost) this.elements.bannerHost.remove();
      const fb = document.getElementById('ts-debug-fallback');
      if (fb) fb.remove();
      this.elements = {};
    }
  }

  // Wire into Toolskin namespace
  if (global.Toolskin) {
    global.Toolskin.stylesheetDebugger = null;
    global.Toolskin.initStylesheetDebugger = function (opts) {
      if (this.stylesheetDebugger && typeof this.stylesheetDebugger.destroy === 'function') {
        this.stylesheetDebugger.destroy();
      }
      this.stylesheetDebugger = new ToolskinStylesheetDebugger(opts || {});
      return this.stylesheetDebugger;
    };
  }
  global.ToolskinStylesheetDebugger = ToolskinStylesheetDebugger;

  // Auto‑init / URL override handling
  function getURLParams() {
    try { return new URLSearchParams(location.search); } catch (e) { return new URLSearchParams(); }
  }

  function suppressedByDebugFlag() {
    return getURLParams().get('__ts_debug') === 'off';
  }

  async function validateOverridePath(rawValue) {
    if (!rawValue || rawValue.length > 512) return { ok: false, reason: 'empty or too long' };
    if (rawValue.includes('\\')) return { ok: false, reason: 'backslash not allowed' };
    if (/^[a-z][a-z0-9+.-]*:\/\//i.test(rawValue)) {
      return { ok: false, reason: 'absolute URL scheme not allowed' };
    }
    let resolved;
    try { resolved = new URL(rawValue, document.baseURI); }
    catch (e) { return { ok: false, reason: 'unparseable URL' }; }
    if (resolved.origin !== location.origin) {
      return { ok: false, reason: 'cross-origin' };
    }
    const reg = global.Toolskin && global.Toolskin.assets;
    if (!reg) return { ok: false, reason: 'registry unavailable' };
    await reg.ready();
    const member = reg.all().some(f => f.path === rawValue);
    if (!member) return { ok: false, reason: 'not in manifest' };
    return { ok: true, value: rawValue };
  }

  async function autoBoot() {
    if (suppressedByDebugFlag()) return;

    const params = getURLParams();
    const override = params.get('__ts_override_css');
    const cfg = (global.__TOOLSKIN_CONFIG__ && global.__TOOLSKIN_CONFIG__.stylesheetDebugger) || {};

    if (override) {
      if (!global.Toolskin || typeof global.Toolskin.initStylesheetDebugger !== 'function') return;
      const v = await validateOverridePath(override);
      if (!v.ok) {
        console.error('[Toolskin] rejected override:', v.reason, '(' + override + ')');
        global.Toolskin.initStylesheetDebugger(cfg);
        return;
      }
      const dbg = global.Toolskin.initStylesheetDebugger(Object.assign({}, cfg, { _silentBoot: true }));
      const rel = dbg.basePath && v.value.startsWith(dbg.basePath)
        ? v.value.slice(dbg.basePath.length)
        : v.value;
      dbg.apply(rel);
      return;
    }

    if (!cfg.enabled) return;
    if (!global.Toolskin || typeof global.Toolskin.initStylesheetDebugger !== 'function') return;
    global.Toolskin.initStylesheetDebugger(cfg);
  }

  function maybeInstallDiffBridge() {
    const params = getURLParams();
    const role = params.get('__ts_diff_role');
    if (!role) return;

    // 🔴 HARD EXIT: do NOTHING if disabled
    if (window.__TS_DIFF_DISABLE_SCROLL_SYNC__) {
      return;
    }

    // --- ALWAYS DEFINE post (prevents crash) ---
    const post = (action, payload) => {
      try {
        window.parent.postMessage(
          {
            type: 'ts-debug-diff',
            action,
            payload: Object.assign({ sender: role }, payload)
          },
          location.origin
        );
      } catch (e) {}
    };

    // --- Apply stylesheet override if present ---
    const overridePath = params.get('__ts_override_css');
    if (overridePath) {
      const reg = window.Toolskin && window.Toolskin.assets;
      let href = null;

      if (reg && !reg.degraded) {
        const record = reg.find(overridePath);
        if (record) {
          href = reg.url(record);
        } else {
          console.warn('[Diff] Override not in manifest, trying direct:', overridePath);
        }
      }

      if (!href) {
        const base = (window.Toolskin && window.Toolskin.assets)
          ? window.Toolskin.assets.basePath
          : 'assets/css/';

        if (overridePath.startsWith(base)) {
          href = overridePath;
        } else {
          const encoded = overridePath.split('/').map(encodeURIComponent).join('/');
          href = base + encoded;
        }
      }

      if (href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    }

    // --- Scroll sync bridge ---
    let suppressEmit = false;

    function onScroll() {
      if (suppressEmit) return;

      const y = window.scrollY || window.pageYOffset || 0;

      post('scroll', {
        y,
        ratio: y / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      });
    }

    let rafPending = false;
    window.addEventListener('scroll', () => {
      if (rafPending) return;

      rafPending = true;

      requestAnimationFrame(() => {
        rafPending = false;
        onScroll();
      });
    }, { passive: true });

    window.addEventListener('message', (e) => {
      if (e.origin !== location.origin) return;

      const m = e.data;
      if (!m || m.type !== 'ts-debug-diff') return;

      if (m.action === 'scroll-set') {
        suppressEmit = true;

        const target = m.payload.y | 0;
        const current = window.scrollY || window.pageYOffset || 0;

        if (Math.abs(current - target) > 2) {
          window.scrollTo(0, target);
        }

        setTimeout(() => {
          suppressEmit = false;
        }, 50);
      }
    });

    // --- Notify parent when ready ---
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => post('ready', {}));
    } else {
      post('ready', {});
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { autoBoot(); });
    document.addEventListener('DOMContentLoaded', maybeInstallDiffBridge);
  } else {
    autoBoot();
    maybeInstallDiffBridge();
  }
})(typeof window !== 'undefined' ? window : this);

/* END OF  ROOT DEBUGGER TOOL */
