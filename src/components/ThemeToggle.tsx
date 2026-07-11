import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
      title={isDark ? 'Mode Terang' : 'Mode Gelap'}
    >
      <div className="theme-toggle-track">
        <div className={`theme-toggle-thumb ${isDark ? 'theme-toggle-thumb-dark' : ''}`}>
          {isDark ? <FaMoon size={12} /> : <FaSun size={12} />}
        </div>
      </div>

      <style>{`
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border: none;
          background: none;
          cursor: pointer;
          border-radius: var(--radius-full);
          transition: background var(--transition-fast);
        }

        .theme-toggle-track {
          width: 40px;
          height: 22px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.2);
          position: relative;
          transition: background var(--transition-base);
          border: 2px solid transparent;
        }

        .navbar-solid .theme-toggle-track {
          background: var(--color-gray-200);
          border-color: var(--color-border);
        }

        .theme-toggle-thumb {
          position: absolute;
          top: 1px;
          left: 1px;
          width: 16px;
          height: 16px;
          border-radius: var(--radius-full);
          background: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          transition: all var(--transition-base);
          box-shadow: var(--shadow-sm);
        }

        .theme-toggle-thumb-dark {
          left: 19px;
          background: var(--color-primary);
        }

        .navbar-transparent .theme-toggle-track {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .navbar-transparent .theme-toggle-thumb-dark {
          background: var(--color-gold-light);
        }

        .theme-toggle-thumb svg {
          transition: transform var(--transition-base);
        }

        .theme-toggle-thumb-dark svg {
          transform: rotate(360deg);
        }
      `}</style>
    </button>
  );
};

export default React.memo(ThemeToggle);
