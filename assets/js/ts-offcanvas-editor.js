/*!
 * Toolskin showcase — left offcanvas “quick editor” (theme + accent).
 * Opt-in: set <html data-ts-offcanvas-editor>. Loads after toolskin.js.
 */
(function (global) {
  'use strict';

  var STORAGE_OPEN = 'ts-offcanvas-editor-open';

  function qs(id) {
    return document.getElementById(id);
  }

  function isOpenStorage() {
    try {
      return sessionStorage.getItem(STORAGE_OPEN) === '1';
    } catch (e) {
      return false;
    }
  }

  function setOpenStorage(v) {
    try {
      if (v) sessionStorage.setItem(STORAGE_OPEN, '1');
      else sessionStorage.removeItem(STORAGE_OPEN);
    } catch (e) {
      /* ignore */
    }
  }

  function buildUi(root) {
    // FAB style: 'tab' attaches to panel edge, 'float' is the classic bottom-right pill
    var fabStyle = document.documentElement.getAttribute('data-ts-oce-fab') || 'tab';
    var fab = document.createElement('button');
    fab.type = 'button';
    fab.className = fabStyle === 'tab' ? 'ts-oce-fab ts-oce-fab--tab' : 'ts-oce-fab';
    fab.setAttribute('aria-expanded', 'false');
    fab.setAttribute('aria-controls', 'ts-offcanvas-editor');
    fab.innerHTML =
      '<span class="ts-icon" data-ts-icon="fa-solid fa-sliders" aria-hidden="true"></span> Editor';

    var overlay = document.createElement('div');
    overlay.id = 'ts-offcanvas-editor-overlay';
    overlay.className = 'ts-oce-overlay';
    var panel = document.createElement('aside');
    panel.id = 'ts-offcanvas-editor';
    panel.className = 'ts-oce-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-label', 'Toolskin quick editor');


    panel.innerHTML =
      '<div class="ts-oce-panel__inner">' +
      '<button type="button" class="ts-oce-close" aria-label="Close editor">&times;</button>' +
      '<h2>Quick editor</h2>' +
      '<p>Theme and accent only — full token lab stays in the page. Safe to close anytime.</p>' +
      '<div class="ts-oce-actions">' +
      '<button type="button" class="ts-btn ts-btn--secondary ts-btn--sm" data-ts-oce-theme="dark" id="ts-oce-theme-dark-btn"><ion-icon class="ts-icon" name="moon"></ion-icon><span> Dark</button>' +
      '<button type="button" class="ts-btn ts-btn--tertiary ts-btn--sm" data-ts-oce-theme="light" id="ts-oce-theme-light-btn"><ion-icon class="ts-icon" name="sunny-outline"></ion-icon><span> Light</span></button>' +
      '</div>' +
      '<div class="ts-oce-field">' +
      '<label for="ts-oce-accent">Accent (hex)</label>' +
      '<input type="text" class="ts-input"  id="ts-oce-accent" autocomplete="off" placeholder="#7c3aed" />' +
      '</div>' +
      '<button type="button" class="ts-btn ts-btn--primary ts-btn--sm" data-ts-oce-apply-accent>Apply accent</button>' +
      '</div>';



    root.appendChild(overlay);
    root.appendChild(panel);



    // Tab variant: fab lives inside the panel so it moves with it
    if (fab.classList.contains('ts-oce-fab--tab')) {
      panel.appendChild(fab);
    } else {
      root.appendChild(fab);
    }

    if (global.ToolskinIcons && typeof ToolskinIcons.inject === 'function') {
      ToolskinIcons.inject(fab);
    }

    return { fab: fab, overlay: overlay, panel: panel };
  }

  function bind(ui) {
    var fab = ui.fab;
    var overlay = ui.overlay;
    var panel = ui.panel;
    var closeBtn = panel.querySelector('.ts-oce-close');
    var accentInput = qs('ts-oce-accent');

    function setOpen(open) {
      fab.setAttribute('aria-expanded', open ? 'true' : 'false');
      overlay.classList.toggle('ts-oce--open', open);
      panel.classList.toggle('ts-oce--open', open);
      setOpenStorage(open);
      if (open) {
        try {
          if (accentInput && !accentInput.value) accentInput.placeholder = '#7c3aed';
        } catch (e) {
          /* ignore */
        }
        if (accentInput) accentInput.focus();
      }
    }

    function toggle() {
      setOpen(!panel.classList.contains('ts-oce--open'));
    }

    fab.addEventListener('click', function (e) {
      if (document.body.classList.contains('ts-overlay-open')) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      toggle();
    });

    document.addEventListener(
      'ts:modal-open',
      function () {
        if (panel.classList.contains('ts-oce--open')) setOpen(false);
      },
      false
    );
    overlay.addEventListener('click', function () {
      setOpen(false);
    });
    closeBtn.addEventListener('click', function () {
      setOpen(false);
    });

    panel.querySelectorAll('[data-ts-oce-theme]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var mode = btn.getAttribute('data-ts-oce-theme');
        if (global.Toolskin && typeof Toolskin.setTheme === 'function') {
          Toolskin.setTheme(mode);
        }
      });
    });

    panel.querySelector('[data-ts-oce-apply-accent]').addEventListener('click', function () {
      var v = accentInput && accentInput.value ? String(accentInput.value).trim() : '';
      if (!/^#?[0-9a-fA-F]{6}$/.test(v)) return;
      var hex = v.charAt(0) === '#' ? v : '#' + v;
      if (global.Toolskin && typeof Toolskin.setAccentHex === 'function') {
        Toolskin.setAccentHex(hex);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('ts-oce--open')) {
        setOpen(false);
      }
    });

    global.TsOffcanvasEditor = {
      init: init,
      open: function () {
        setOpen(true);
      },
      close: function () {
        setOpen(false);
      },
      toggle: toggle,
    };

    // Restore open state across reloads — opt-in via data-ts-oce-persist on <html>
    if (document.documentElement.hasAttribute('data-ts-oce-persist') && isOpenStorage()) {
      requestAnimationFrame(function () {
        setOpen(true);
      });
    }
  }

  function init() {
    if (!document.documentElement.hasAttribute('data-ts-offcanvas-editor')) return;
    if (document.body.dataset.tsOceBound === '1') return;
    if (qs('ts-offcanvas-editor')) return;
    document.body.dataset.tsOceBound = '1';
    var ui = buildUi(document.body);
    bind(ui);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})(typeof window !== 'undefined' ? window : globalThis);
