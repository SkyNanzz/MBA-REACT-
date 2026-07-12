import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';
import { navLinks } from '../data/companyData';
import { useScrollPosition } from '../hooks/useIntersectionObserver';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

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

  const navbarClass = `
    navbar
    ${isScrolled || !isHomePage ? 'navbar-solid' : 'navbar-transparent'}
    ${isMenuOpen ? 'navbar-menu-open' : ''}
  `;

  return (
    <header className={navbarClass} role="banner">
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
          <button
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>

        <nav className={`navbar-nav ${isMenuOpen ? 'navbar-nav-open' : ''}`} role="navigation" aria-label="Navigasi utama">
          <ul className="navbar-nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
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
          <div className="navbar-nav-cta">
            <Link to="/kontak" className="btn btn-gold btn-sm" onClick={closeMenu}>
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
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-navbar);
          transition: all var(--transition-base);
          padding: var(--space-4) 0;
        }

        .navbar-transparent {
          background: transparent;
        }

        .navbar-solid {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          padding: var(--space-3) 0;
        }

        [data-theme="dark"] .navbar-solid {
          background: rgba(6, 14, 9, 0.95);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

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

        .navbar-transparent .navbar-logo-text {
          color: var(--color-white);
        }

        .navbar-solid .navbar-logo-text {
          color: var(--color-heading);
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

        .navbar-transparent .navbar-actions {
          color: var(--color-white);
        }

        .navbar-solid .navbar-actions {
          color: var(--color-heading);
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
          transition: all var(--transition-fast);
          text-decoration: none;
          letter-spacing: 0.3px;
        }

        .navbar-transparent .navbar-nav-link {
          color: rgba(255, 255, 255, 0.9);
        }

        .navbar-solid .navbar-nav-link {
          color: var(--color-text);
        }

        .navbar-nav-link:hover {
          opacity: 1;
          transform: translateY(-1px);
        }

        .navbar-transparent .navbar-nav-link:hover {
          color: var(--color-white);
          background: rgba(255, 255, 255, 0.15);
        }

        .navbar-solid .navbar-nav-link:hover {
          color: var(--color-primary);
          background: var(--color-primary-bg);
        }

        .navbar-nav-link-active {
          position: relative;
        }

        .navbar-transparent .navbar-nav-link-active {
          color: var(--color-white);
        }

        .navbar-solid .navbar-nav-link-active {
          color: var(--color-primary);
          font-weight: 600;
        }

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
          background: var(--color-gold);
          border-radius: var(--radius-full);
          transform: scaleX(0);
          transition: transform var(--transition-fast);
        }

        .navbar-nav-link:not(.navbar-nav-link-active):hover::after {
          transform: scaleX(1);
        }

        .navbar-nav-link {
          position: relative;
        }

        .navbar-nav-cta {
          display: none;
        }

        .navbar-toggle {
          display: none;
          z-index: calc(var(--z-navbar) + 1);
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-2);
          color: inherit;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
        }

        .navbar-transparent .navbar-toggle {
          color: var(--color-white);
        }

        .navbar-solid .navbar-toggle {
          color: var(--color-heading);
        }

        .navbar-overlay {
          display: none;
        }

        @media (max-width: 768px) {
          .navbar-nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: var(--color-white);
            flex-direction: column;
            padding: var(--space-24) var(--space-6) var(--space-6);
            transition: right var(--transition-base);
            box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
            z-index: var(--z-navbar);
            gap: var(--space-6);
            align-items: stretch;
          }

          .navbar-nav-open {
            right: 0;
          }

          .navbar-nav-list {
            flex-direction: column;
            gap: var(--space-1);
          }

          .navbar-nav-link {
            display: block;
            padding: var(--space-3) var(--space-4);
            font-size: var(--font-size-base);
            color: var(--color-text) !important;
            border-radius: var(--radius-md);
          }

          .navbar-nav-link-active {
            background: var(--color-primary-bg) !important;
            color: var(--color-primary) !important;
          }

          .navbar-nav-link-active::after {
            display: none;
          }

          .navbar-nav-cta {
            display: block;
            margin-top: var(--space-4);
          }

          .navbar-nav-cta .btn {
            width: 100%;
            text-align: center;
          }

          .navbar-toggle {
            display: flex;
          }

          .navbar-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: calc(var(--z-navbar) - 1);
          }
        }

        @media (min-width: 769px) {
          .navbar-nav-cta {
            display: flex;
          }
        }

        @media (max-width: 640px) {
          .navbar-logo-title {
            font-size: var(--font-size-lg);
          }
          .navbar-logo-subtitle {
            font-size: 0.625rem;
          }
        }
      `}</style>
    </header>
  );
};

export default React.memo(Navbar);
