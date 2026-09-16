import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LanguageToggle = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Get initial language from localStorage
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    setIsEnglish(savedLanguage === 'en');
  }, []);

  const handleToggle = () => {
    const newLanguage = isEnglish ? 'id' : 'en';
    setIsEnglish(!isEnglish);
    setLanguage(newLanguage);

    // Store preference
    localStorage.setItem('language', newLanguage);

    // Trigger language change
    applyLanguage(newLanguage);
  };

  const applyLanguage = (lang) => {
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
  };

  return (
    <StyledWrapper>
      <div className="language-switch">
        <input
          type="checkbox"
          id="langToggle"
          className="toggle-input"
          checked={!isEnglish}
          onChange={handleToggle}
          aria-label="Toggle language between English and Bahasa Indonesia"
        />
        <label htmlFor="langToggle" className="toggle-label">
          <span className="lang-indicator left">ID</span>
          <span className="toggle-knob"></span>
          <span className="lang-indicator right">EN</span>
          <span className="glow-effect left-glow"></span>
          <span className="glow-effect right-glow"></span>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .language-switch {
    position: relative;
    display: inline-block;
    user-select: none;
  }

  .toggle-input {
    display: none;
  }

  .toggle-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    height: 42px;
    background: linear-gradient(135deg, rgba(20, 25, 45, 0.8) 0%, rgba(15, 20, 35, 0.9) 100%);
    border: 1px solid rgba(125, 211, 252, 0.2);
    border-radius: 24px;
    padding: 0 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow:
      inset 0 1px 3px rgba(255, 255, 255, 0.05),
      0 4px 15px rgba(0, 0, 0, 0.4),
      0 0 20px rgba(0, 0, 0, 0.3);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .toggle-label:hover {
    box-shadow:
      inset 0 1px 3px rgba(255, 255, 255, 0.08),
      0 4px 20px rgba(59, 130, 246, 0.2),
      0 0 30px rgba(59, 130, 246, 0.15);
    border-color: rgba(125, 211, 252, 0.4);
  }

  /* Language indicators */
  .lang-indicator {
    position: absolute;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    font-family: "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif;
    text-transform: uppercase;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 2;
  }

  .lang-indicator.left {
    left: 10px;
    color: rgba(125, 211, 252, 0.4);
    text-shadow: 0 0 8px rgba(125, 211, 252, 0);
  }

  .lang-indicator.right {
    right: 10px;
    color: rgba(255, 255, 255, 0.6);
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  }

  /* Toggle knob */
  .toggle-knob {
    position: absolute;
    width: 34px;
    height: 34px;
    background: linear-gradient(135deg, #2a3a50 0%, #1a2535 50%, #0f1520 100%);
    border-radius: 20px;
    left: 3px;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 3;
    box-shadow:
      0 2px 8px rgba(0, 0, 0, 0.6),
      inset 0 1px 2px rgba(255, 255, 255, 0.1),
      inset -2px -2px 4px rgba(0, 0, 0, 0.3);

    &:before {
      content: '';
      position: absolute;
      inset: 2px;
      background: linear-gradient(135deg, rgba(100, 150, 200, 0.2), rgba(50, 100, 150, 0.1));
      border-radius: 18px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  /* Glow effects */
  .glow-effect {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }

  .glow-effect.left-glow {
    left: 12px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.2) 70%, transparent 100%);
    filter: blur(8px);
  }

  .glow-effect.right-glow {
    right: 12px;
    background: radial-gradient(circle, rgba(125, 211, 252, 0.4) 0%, rgba(125, 211, 252, 0.1) 70%, transparent 100%);
    filter: blur(6px);
  }

  /* Checked state (Indonesian active) */
  .toggle-input:checked + .toggle-label {
    .toggle-knob {
      left: 63px;
      background: linear-gradient(135deg, #2a3a50 0%, #1a2535 50%, #0f1520 100%);
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.6),
        inset 0 1px 2px rgba(255, 255, 255, 0.1),
        inset -2px -2px 4px rgba(0, 0, 0, 0.3),
        0 0 12px rgba(59, 130, 246, 0.3);
    }

    .lang-indicator.left {
      color: rgba(59, 130, 246, 0.9);
      text-shadow: 0 0 12px rgba(59, 130, 246, 0.6);
    }

    .lang-indicator.right {
      color: rgba(255, 255, 255, 0.3);
      text-shadow: none;
    }

    .glow-effect.left-glow {
      opacity: 1;
      animation: glow-pulse 2s ease-in-out infinite;
    }

    .glow-effect.right-glow {
      opacity: 0;
    }
  }

  /* Unchecked state (English active) */
  .toggle-input:not(:checked) + .toggle-label {
    .toggle-knob {
      left: 3px;
    }

    .lang-indicator.left {
      color: rgba(125, 211, 252, 0.3);
      text-shadow: none;
    }

    .lang-indicator.right {
      color: rgba(255, 255, 255, 0.7);
      text-shadow: 0 0 12px rgba(125, 211, 252, 0.4);
    }

    .glow-effect.left-glow {
      opacity: 0;
    }

    .glow-effect.right-glow {
      opacity: 1;
      animation: glow-pulse 2s ease-in-out infinite;
    }
  }

  @keyframes glow-pulse {
    0%, 100% {
      opacity: 0.6;
      filter: blur(8px);
    }
    50% {
      opacity: 1;
      filter: blur(12px);
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .toggle-label {
      width: 90px;
      height: 38px;
      padding: 0 6px;
    }

    .lang-indicator {
      font-size: 0.65rem;
    }

    .toggle-knob {
      width: 30px;
      height: 30px;
    }

    .toggle-input:checked + .toggle-label .toggle-knob {
      left: 56px;
    }
  }
`;

export default LanguageToggle;
