// Premium Language Toggle Component
class LanguageToggle {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.init();
  }

  init() {
    // Create toggle HTML
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'language-toggle-container';
    toggleContainer.innerHTML = `
      <span class="lang-label en-label">EN</span>
      <div class="language-switch">
        <span class="glow-dot left-dot"></span>
        <input type="checkbox" id="langToggle" class="toggle-input" ${this.currentLanguage === 'id' ? 'checked' : ''} />
        <label for="langToggle" class="toggle-label">
          <span class="toggle-knob"></span>
        </label>
        <span class="glow-dot right-dot"></span>
      </div>
      <span class="lang-label id-label">ID</span>
    `;

    // Insert after nav-links
    navLinks.parentNode.insertBefore(toggleContainer, navLinks.nextSibling);

    // Add styles
    this.injectStyles();

    // Setup event listeners
    const toggleInput = document.getElementById('langToggle');
    toggleInput.addEventListener('change', () => this.handleToggle());

    // Set initial state
    this.applyLanguage(this.currentLanguage);
  }

  handleToggle() {
    const toggleInput = document.getElementById('langToggle');
    this.currentLanguage = toggleInput.checked ? 'id' : 'en';
    localStorage.setItem('language', this.currentLanguage);
    this.applyLanguage(this.currentLanguage);
  }

  applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-en][data-id]');
    elements.forEach(element => {
      const text = lang === 'en' ? element.dataset.en : element.dataset.id;

      if (element.tagName === 'A' && element.href.startsWith('mailto:')) {
        if (element.classList.contains('btn')) {
          element.textContent = text;
        }
      } else if (element.classList.contains('highlight')) {
        element.textContent = text;
      } else {
        element.textContent = text;
      }
    });
  }

  injectStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      .language-toggle-container {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .lang-label {
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        font-family: "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.5);
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .lang-label.en-label {
        min-width: 20px;
        text-align: right;
      }

      .lang-label.id-label {
        min-width: 20px;
        text-align: left;
      }

      .toggle-input:checked ~ .lang-label.en-label {
        color: rgba(255, 255, 255, 0.3);
      }

      .toggle-input:checked ~ .lang-label.id-label {
        color: rgba(255, 255, 255, 0.82);
      }

      .toggle-input:not(:checked) ~ .lang-label.en-label {
        color: rgba(255, 255, 255, 0.7);
      }

      .toggle-input:not(:checked) ~ .lang-label.id-label {
        color: rgba(255, 255, 255, 0.35);
      }

      .language-switch {
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .toggle-input {
        display: none;
      }

      .toggle-label {
        display: block;
        width: 65px;
        height: 32px;
        background: rgba(60, 60, 60, 0.4);
        border-radius: 20px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border: 1px solid rgba(100, 100, 100, 0.3);
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .toggle-label:hover {
        box-shadow: 0 6px 28px rgba(0, 0, 0, 0.4);
        border-color: rgba(100, 100, 100, 0.5);
      }

      .toggle-knob {
        position: absolute;
        width: 28px;
        height: 28px;
        background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 50%, #1a1a1a 100%);
        border-radius: 16px;
        left: 2px;
        top: 2px;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: 3;
        box-shadow:
          0 3px 8px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.1),
          inset -1px -1px 2px rgba(0, 0, 0, 0.5);
      }

      /* Glow dots */
      .glow-dot {
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        opacity: 0.4;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      .glow-dot.left-dot {
        background: radial-gradient(circle, #ffffff 0%, #a8a8a8 54%, transparent 100%);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.28), inset 0 0 6px rgba(255, 255, 255, 0.14);
      }

      .glow-dot.right-dot {
        background: radial-gradient(circle, #ffffff 0%, #e0e0e0 50%, transparent 100%);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.4), inset 0 0 6px rgba(255, 255, 255, 0.2);
      }

      /* Checked state (Indonesian active - left) */
      .toggle-input:checked + .toggle-label .toggle-knob {
        left: 35px;
      }

      .toggle-input:checked ~ .glow-dot.left-dot {
        opacity: 1;
        box-shadow: 0 0 16px rgba(255, 255, 255, 0.45), inset 0 0 8px rgba(255, 255, 255, 0.2);
        animation: glow-pulse-gray 2s ease-in-out infinite;
      }

      .toggle-input:checked ~ .glow-dot.right-dot {
        opacity: 0.25;
        box-shadow: 0 0 6px rgba(255, 255, 255, 0.15), inset 0 0 3px rgba(255, 255, 255, 0.08);
      }

      /* Unchecked state (English active - right) */
      .toggle-input:not(:checked) ~ .glow-dot.left-dot {
        opacity: 0.25;
        box-shadow: 0 0 6px rgba(255, 255, 255, 0.1), inset 0 0 3px rgba(255, 255, 255, 0.06);
      }

      .toggle-input:not(:checked) ~ .glow-dot.right-dot {
        opacity: 1;
        box-shadow: 0 0 18px rgba(255, 255, 255, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.3);
        animation: glow-pulse-white 2s ease-in-out infinite;
      }

      @keyframes glow-pulse-gray {
        0%, 100% {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.26), inset 0 0 5px rgba(255, 255, 255, 0.12);
        }
        50% {
          box-shadow: 0 0 16px rgba(255, 255, 255, 0.44), inset 0 0 8px rgba(255, 255, 255, 0.2);
        }
      }

      @keyframes glow-pulse-white {
        0%, 100% {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4), inset 0 0 6px rgba(255, 255, 255, 0.2);
        }
        50% {
          box-shadow: 0 0 18px rgba(255, 255, 255, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.3);
        }
      }

      @media (max-width: 768px) {
        .language-toggle-container {
          gap: 6px;
        }

        .lang-label {
          font-size: 0.65rem;
          min-width: 18px;
        }

        .toggle-label {
          width: 58px;
          height: 28px;
        }

        .toggle-knob {
          width: 24px;
          height: 24px;
        }

        .toggle-input:checked + .toggle-label .toggle-knob {
          left: 32px;
        }

        .glow-dot {
          width: 8px;
          height: 8px;
        }
      }
    `;
    document.head.appendChild(styleSheet);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new LanguageToggle();
  });
} else {
  new LanguageToggle();
}
