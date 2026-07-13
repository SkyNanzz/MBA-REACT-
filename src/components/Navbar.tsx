import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/companyData';
import { useScrollPosition } from '../hooks/useIntersectionObserver';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';

/* ===================== FLUID ISLAND NAV ===================== */
/* Per high-end-visual-design §5A:
   - Floating glass pill detached from top on hero
   - Hamburger morph: lines rotate to form X
   - Staggered mask reveal: links slide up with delay
   - Full-screen glass overlay menu
*/

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  // On homepage, show floating island when not scrolled; on other pages always solid
  const showIsland = isHomePage && !isScrolled;

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <header
      className={`navbar ${showIsland ? 'navbar-island' : 'navbar-solid'} ${isMenuOpen ? 'navbar-menu-open' : ''}`}
      role="banner"
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="MBA Mandiri Buton Atsiri - Beranda">
          <span className="navbar-logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="16" cy="16" r="15" fill="currentColor" opacity="0.2"/>
              <path d="M16 6C12 6 8 9 8 14C8 18 12 22 16 26C20 22 24 18 24 14C24 9 20 6 16 6Z" fill="currentColor" opacity="0.6"/>
              <path d="M16 10C13.5 10 11 12 11 15C11 18 13.5 21 16 23C18.5 21 21 18 21 15C21 12 18.5 10 16 10Z" fill="currentColor"/>
            </svg>
          </span>
          <span className="navbar-logo-text">
            <span className="navbar-logo-title">MBA</span>
            <span className="navbar-logo-subtitle">Mandiri Buton Atsiri</span>
          </span>
        </Link>

        <div className="navbar-actions">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          {/* Hamburger Morph: 3 lines that become X on open */}
          <button
            className={`navbar-hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line hamburger-line-top" />
            <span className="hamburger-line hamburger-line-mid" />
            <span className="hamburger-line hamburger-line-bot" />
          </button>
        </div>

        <nav className={`navbar-nav ${isMenuOpen ? 'navbar-nav-open' : ''}`} role="navigation" aria-label="Navigasi utama">
          <ul className="navbar-nav-list">
            {navLinks.map((link, i) => (
              <li key={link.path} className={`nav-item ${isMenuOpen ? 'nav-item-reveal' : ''}`} style={{ '--nav-index': i } as React.CSSProperties}>
                <Link
                  to={link.path}
                  className={`navbar-nav-link ${location.pathname === link.path ? 'navbar-nav-link-active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={`navbar-nav-cta ${isMenuOpen ? 'nav-item-reveal' : ''}`} style={{ '--nav-index': navLinks.length } as React.CSSProperties}>
            <Link to="/kontak" className="navbar-cta-link" onClick={closeMenu}>
              Hubungi Kami
            </Link>
          </div>
        </nav>

        {isMenuOpen && (
          <div
            className="navbar-overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </div>

      <style>{`
        /* ===================== BASE ===================== */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-navbar);
          transition: padding var(--transition-base), background var(--transition-base), backdrop-filter var(--transition-base), box-shadow var(--transition-base);
          padding: var(--space-4) 0;
        }

        /* ===================== FLUID ISLAND MODE (hero/default) ===================== */
        .navbar-island {
          background: transparent;
          padding: var(--space-6) 0 0;
        }

        .navbar-island .navbar-container {
          max-width: 820px;
          margin: 0 auto;
          padding: var(--space-2) var(--space-3);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-full);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          transition: all var(--transition-base);
        }

        .navbar-island .navbar-logo-text { color: var(--color-white); }
        .navbar-island .navbar-actions { color: var(--color-white); }
        .navbar-island .navbar-nav-link { color: rgba(255, 255, 255, 0.85); }
        .navbar-island .navbar-nav-link:hover { color: var(--color-white); background: rgba(255, 255, 255, 0.1); }
        .navbar-island .navbar-nav-link-active { color: var(--color-white); font-weight: 600; }

        /* ===================== SOLID MODE (scrolled / inner pages) ===================== */
        .navbar-solid {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
          padding: var(--space-2) 0;
        }

        [data-theme="dark"] .navbar-solid {
          background: rgba(6, 14, 9, 0.92);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .navbar-solid .navbar-logo-text { color: var(--color-heading); }
        .navbar-solid .navbar-actions { color: var(--color-heading); }
        .navbar-solid .navbar-nav-link { color: var(--color-text); }
        .navbar-solid .navbar-nav-link:hover { color: var(--color-primary); background: var(--color-primary-bg); }
        .navbar-solid .navbar-nav-link-active { color: var(--color-primary); font-weight: 600; }

        /* ===================== LAYOUT ===================== */
        .navbar-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--space-6);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          text-decoration: none;
          z-index: calc(var(--z-navbar) + 1);
          color: inherit;
        }

        .navbar-logo-title {
          font-family: var(--font-heading);
          font-size: var(--font-size-xl);
          font-weight: 700;
          line-height: 1;
        }

        .navbar-logo-subtitle {
          display: block;
          font-size: var(--font-size-xs);
          font-weight: 400;
          opacity: 0.8;
          letter-spacing: 0.5px;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          z-index: calc(var(--z-navbar) + 1);
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: var(--space-8);
        }

        .navbar-nav-list {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          list-style: none;
        }

        .navbar-nav-link {
          padding: var(--space-2) var(--space-3);
          font-size: var(--font-size-sm);
          font-weight: 500;
          border-radius: var(--radius-md);
          text-decoration: none;
          letter-spacing: 0.3px;
          position: relative;
          transition: color var(--transition-fast), background var(--transition-fast);
        }

        /* Active link underline */
        .navbar-nav-link-active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: var(--space-3);
          right: var(--space-3);
          height: 2px;
          background: var(--color-gold);
          border-radius: var(--radius-full);
          transform: scaleX(1);
          transition: transform var(--transition-fast);
        }

        .navbar-nav-link:not(.navbar-nav-link-active)::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: var(--space-3);
          right: var(--space-3);
          height: 2px;
          background: linear-gradient(90deg, var(--color-gold), var(--color-primary));
          border-radius: var(--radius-full);
          transform: scaleX(0);
          transition: transform var(--transition-base);
        }

        .navbar-nav-link:not(.navbar-nav-link-active):hover::after {
          transform: scaleX(1);
        }

        .navbar-nav-cta { display: none; }

        /* ===================== HAMBURGER MORPH ===================== */
        .navbar-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 44px;
          height: 44px;
          padding: 0;
          border: none;
          background: none;
          cursor: pointer;
          z-index: calc(var(--z-navbar) + 1);
          color: inherit;
        }

        .hamburger-line {
          display: block;
          width: 20px;
          height: 2px;
          background: currentColor;
          border-radius: var(--radius-full);
          transition: all 350ms var(--ease-out-expo);
          transform-origin: center;
        }

        .hamburger-open .hamburger-line-top {
          transform: translateY(7px) rotate(45deg);
        }

        .hamburger-open .hamburger-line-mid {
          transform: scaleX(0);
          opacity: 0;
        }

        .hamburger-open .hamburger-line-bot {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ===================== OVERLAY ===================== */
        .navbar-overlay { display: none; }

        /* ===================== MOBILE ===================== */
        @media (max-width: 768px) {
          .navbar-island {
            padding: var(--space-4) 0 0;
          }

          .navbar-island .navbar-container {
            max-width: calc(100% - var(--space-8));
            margin: 0 auto;
            padding: var(--space-2) var(--space-3);
            border-radius: var(--radius-full);
          }

          .navbar-hamburger { display: flex; }

          .navbar-nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100dvh;
            background: rgba(255, 255, 255, 0.96);
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: var(--space-24) var(--space-8) var(--space-8);
            opacity: 0;
            visibility: hidden;
            transition: opacity var(--transition-base), visibility var(--transition-base);
            z-index: var(--z-navbar);
            gap: var(--space-8);
          }

          [data-theme="dark"] .navbar-nav {
            background: rgba(6, 14, 9, 0.96);
            backdrop-filter: blur(40px);
          }

          .navbar-nav-open {
            opacity: 1;
            visibility: visible;
          }

          .navbar-nav-list {
            flex-direction: column;
            gap: var(--space-2);
            text-align: center;
          }

          .navbar-nav-link {
            display: block;
            padding: var(--space-3) var(--space-6);
            font-size: var(--font-size-2xl);
            color: var(--color-text) !important;
            border-radius: var(--radius-md);
          }

          .navbar-nav-link-active {
            background: var(--color-primary-bg) !important;
            color: var(--color-primary) !important;
          }

          .navbar-nav-link-active::after { display: none; }
          .navbar-nav-link:not(.navbar-nav-link-active)::after { display: none; }

          .navbar-nav-cta {
            display: block;
            margin-top: var(--space-4);
          }

          .navbar-cta-link {
            display: inline-flex;
            align-items: center;
            gap: var(--space-2);
            padding: var(--space-3) var(--space-8);
            border-radius: var(--radius-full);
            background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
            color: var(--color-white);
            font-weight: 600;
            font-size: var(--font-size-base);
            text-decoration: none;
            box-shadow: var(--shadow-gold);
            transition: transform var(--transition-base), box-shadow var(--transition-base);
          }

          .navbar-cta-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(200, 168, 78, 0.4);
          }

          .navbar-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.3);
            z-index: calc(var(--z-navbar) - 1);
          }

          /* Staggered mask reveal for mobile menu items */
          .nav-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 500ms var(--ease-out-expo), transform 500ms var(--ease-out-expo);
            transition-delay: calc(var(--nav-index, 0) * 80ms);
          }

          .nav-item-reveal {
            opacity: 1;
            transform: translateY(0);
          }

          .navbar-nav-cta.nav-item-reveal {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 500ms var(--ease-out-expo) 400ms, transform 500ms var(--ease-out-expo) 400ms;
          }
        }

        @media (min-width: 769px) {
          .navbar-nav-cta { display: flex; }
        }

        @media (max-width: 640px) {
          .navbar-logo-title { font-size: var(--font-size-lg); }
          .navbar-logo-subtitle { font-size: 0.625rem; }
        }
      `}</style>
    </header>
  );
};

export default React.memo(Navbar);
