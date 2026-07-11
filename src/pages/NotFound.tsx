import React, { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = '404 - Halaman Tidak Ditemukan - MBA Mandiri Buton Atsiri';
  }, []);

  return (
    <main>
      <div className="not-found">
        <div className="container">
          <div className="not-found-content">
            <div className="not-found-code">404</div>
            <h1 className="not-found-title">Halaman Tidak Ditemukan</h1>
            <p className="not-found-desc">
              Maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan. 
              Silakan kembali ke beranda atau jelajahi halaman lainnya.
            </p>
            <Button variant="primary" size="lg" href="/">
              <FaHome /> Kembali ke Beranda
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .not-found {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: var(--space-20) 0;
        }
        .not-found-content {
          max-width: 500px;
          margin: 0 auto;
        }
        .not-found-code {
          font-family: var(--font-heading);
          font-size: 8rem;
          font-weight: 700;
          color: var(--color-primary);
          opacity: 0.15;
          line-height: 1;
          margin-bottom: var(--space-4);
        }
        .not-found-title {
          font-size: var(--font-size-3xl);
          margin-bottom: var(--space-4);
        }
        .not-found-desc {
          color: var(--color-text-light);
          margin-bottom: var(--space-8);
          line-height: var(--line-height-relaxed);
        }
        @media (max-width: 639px) {
          .not-found-code { font-size: 5rem; }
          .not-found-title { font-size: var(--font-size-2xl); }
        }
      `}</style>
    </main>
  );
};

export default NotFound;
