import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { navLinks, socialLinks, contactInfo } from '../data/companyData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaInstagram': return <FaInstagram />;
      case 'FaFacebook': return <FaFacebook />;
      case 'FaLinkedin': return <FaLinkedinIn />;
      default: return null;
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" width="1440" height="100">
          <path d="M0,50 C300,100 600,0 1440,50 L1440,100 L0,100 Z" fill="var(--color-white)"/>
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="16" cy="16" r="15" fill="var(--color-gold)" opacity="0.3"/>
                  <path d="M16 6C12 6 8 9 8 14C8 18 12 22 16 26C20 22 24 18 24 14C24 9 20 6 16 6Z" fill="var(--color-gold)" opacity="0.7"/>
                  <path d="M16 10C13.5 10 11 12 11 15C11 18 13.5 21 16 23C18.5 21 21 18 21 15C21 12 18.5 10 16 10Z" fill="var(--color-gold)"/>
                </svg>
                <div className="footer-logo-text">
                  <span className="footer-logo-title">MBA</span>
                  <span className="footer-logo-subtitle">Mandiri Buton Atsiri</span>
                </div>
              </Link>
              <p className="footer-description">
                Produsen minyak atsiri (essential oil) dari Buton, Sulawesi Tenggara. Berkomitmen pada kualitas, keberlanjutan, dan kepuasan pelanggan di Indonesia.
              </p>
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={social.name}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Navigasi</h4>
              <ul className="footer-links">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Produk</h4>
              <ul className="footer-links">
                <li><Link to="/produk#minyak-nilam" className="footer-link">Minyak Nilam</Link></li>
                <li><Link to="/produk" className="footer-link footer-link-soon">Produk Lainnya <span className="footer-coming-soon">Segera</span></Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Kontak</h4>
              <ul className="footer-contact">
                <li className="footer-contact-item">
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <span className="footer-contact-text">{contactInfo.address}</span>
                </li>
                <li className="footer-contact-item">
                  <FaEnvelope className="footer-contact-icon" />
                  <a href={`mailto:${contactInfo.email}`} className="footer-contact-link">{contactInfo.email}</a>
                </li>
                <li className="footer-contact-item">
                  <FaPhone className="footer-contact-icon" />
                  <a href={`tel:${contactInfo.phone}`} className="footer-contact-link">{contactInfo.phone}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; {currentYear} MBA Mandiri Buton Atsiri. All rights reserved.
            </p>
            <p className="footer-credit">
              Essential Oil Asli Buton untuk Indonesia
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          background: linear-gradient(135deg, var(--color-gray-900), #0d1f12);
          color: rgba(255, 255, 255, 0.85);
        }

        .footer-wave {
          position: absolute;
          top: -2px;
          left: 0;
          right: 0;
          line-height: 0;
          overflow: hidden;
        }

        .footer-wave svg {
          width: 100%;
          height: 60px;
        }

        .footer-content {
          padding: var(--space-16) 0 var(--space-8);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-10);
        }

        .footer-brand {
          max-width: 380px;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: var(--space-3);
          text-decoration: none;
          margin-bottom: var(--space-4);
        }

        .footer-logo-text {
          line-height: 1.2;
        }

        .footer-logo-title {
          font-family: var(--font-heading);
          font-size: var(--font-size-xl);
          font-weight: 700;
          color: var(--color-white);
        }

        .footer-logo-subtitle {
          display: block;
          font-size: var(--font-size-xs);
          color: var(--color-gold-light);
          letter-spacing: 0.5px;
        }

        .footer-description {
          font-size: var(--font-size-sm);
          line-height: var(--line-height-relaxed);
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: var(--space-6);
        }

        .footer-social {
          display: flex;
          gap: var(--space-3);
        }

        .footer-social-link {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: var(--font-size-base);
          will-change: transform;
          transition:
            transform var(--transition-fast),
            background var(--transition-fast),
            color var(--transition-fast);
        }

        .footer-social-link:hover {
          background: var(--color-gold);
          color: var(--color-white);
          transform: translateY(-2px);
        }

        .footer-heading {
          font-family: var(--font-heading);
          font-size: var(--font-size-lg);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: var(--space-6);
          position: relative;
          padding-bottom: var(--space-3);
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--color-gold);
          border-radius: var(--radius-full);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.6);
          font-size: var(--font-size-sm);
          text-decoration: none;
          display: inline-block;
          transition:
            color var(--transition-fast),
            transform var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--color-gold-light);
          transform: translateX(4px);
        }

        .footer-link-soon {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .footer-coming-soon {
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 1px 6px;
          background: rgba(245, 158, 11, 0.2);
          color: #fbbf24;
          border-radius: var(--radius-full);
          line-height: 1.4;
        }

        .footer-contact {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .footer-contact-item {
          display: flex;
          gap: var(--space-3);
          font-size: var(--font-size-sm);
        }

        .footer-contact-icon {
          color: var(--color-gold);
          margin-top: 4px;
          flex-shrink: 0;
          font-size: var(--font-size-sm);
        }

        .footer-contact-text,
        .footer-contact-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          line-height: var(--line-height-normal);
        }

        .footer-contact-link:hover {
          color: var(--color-gold-light);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: var(--space-8);
          margin-top: var(--space-12);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          text-align: center;
        }

        .footer-copyright {
          font-size: var(--font-size-sm);
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .footer-credit {
          font-size: var(--font-size-xs);
          color: var(--color-gold);
          opacity: 0.7;
          margin: 0;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          }
          .footer-wave svg {
            height: 80px;
          }
        }

        @media (max-width: 639px) {
          .footer-wave svg {
            height: 40px;
          }
          .footer-content {
            padding: var(--space-12) 0 var(--space-6);
          }
          .footer-bottom {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
};

export default React.memo(Footer);
