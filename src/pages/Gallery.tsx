import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../data/companyData';
import Lightbox from '../components/Lightbox';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const categories = ['semua', 'perkebunan', 'produksi', 'perusahaan', 'produk'];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Galeri - MBA Mandiri Buton Atsiri';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Galeri foto MBA Mandiri Buton Atsiri - perkebunan, proses produksi, produk, dan kegiatan perusahaan.');
    }
  }, []);

  const filteredItems = activeCategory === 'semua'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const lightboxImages = filteredItems.map((item) => ({
    src: item.src,
    alt: item.alt,
  }));

  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="breadcrumb">
              <Link to="/">Beranda</Link> / <span>Galeri</span>
            </div>
            <h1>Galeri</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto' }}>
              Dokumentasi kegiatan dan produk MBA Mandiri Buton Atsiri
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat === 'semua' ? 'Semua' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div ref={ref} className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`gallery-item fade-in-scale ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${(index % 6) * 80}ms` }}
              >
                <button
                  className="gallery-item-btn"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Lihat gambar: ${item.alt}`}
                >
                  <div className="gallery-item-image-wrapper">
                    {item.src ? (
                      <>
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="gallery-item-image"
                          loading="lazy"
                        />
                        <div className="gallery-item-overlay" aria-hidden="true">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                        </div>
                      </>
                    ) : (
                      <div className="gallery-item-placeholder">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span className="gallery-placeholder-text">Gambar Belum Tersedia</span>
                      </div>
                    )}
                  </div>
                  <div className="gallery-item-label">
                    <span className="gallery-item-category">
                      {item.category === 'perkebunan' ? 'Perkebunan' : 
                       item.category === 'produksi' ? 'Produksi' :
                       item.category === 'perusahaan' ? 'Perusahaan' : 'Produk'}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="gallery-empty">
              <p>Tidak ada gambar dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      <style>{`
        .gallery-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-3);
          margin-bottom: var(--space-10);
        }

        .gallery-filter-btn {
          padding: var(--space-2) var(--space-5);
          border-radius: var(--radius-full);
          border: 2px solid var(--color-border);
          background: var(--color-white);
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--color-text);
          cursor: pointer;
          will-change: transform;
          transition:
            transform var(--transition-fast),
            border-color var(--transition-fast),
            color var(--transition-fast),
            background var(--transition-fast),
            box-shadow var(--transition-fast);
        }

        .gallery-filter-btn:hover {
          border-color: var(--color-gold);
          color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-gold);
        }

        .gallery-filter-btn:active {
          transform: translateY(0);
        }

        .gallery-filter-btn.active {
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          border-color: var(--color-primary);
          color: var(--color-white);
          box-shadow: var(--shadow-green);
        }

        .gallery-filter-btn.active:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(26, 125, 58, 0.35);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
        }

        .gallery-item-btn {
          display: block;
          width: 100%;
          padding: 0;
          border: none;
          background: none;
          cursor: pointer;
          text-align: left;
        }

        .gallery-item-image-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 4/3;
        }

        .gallery-item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .gallery-item:hover .gallery-item-image {
          transform: scale(1.1);
        }

        .gallery-item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-base);
        }

        .gallery-item-overlay svg {
          transform: translateY(10px) scale(0.9);
          transition: transform var(--transition-base);
        }

        .gallery-item-btn:hover .gallery-item-overlay {
          opacity: 1;
        }

        .gallery-item-btn:hover .gallery-item-overlay svg {
          transform: translateY(0) scale(1);
        }

        .gallery-item-label {
          padding: var(--space-2) 0;
          transition: padding var(--transition-fast);
        }

        .gallery-item-btn:hover .gallery-item-label {
          padding-left: var(--space-1);
        }

        .gallery-item-category {
          display: inline-block;
          font-size: var(--font-size-xs);
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color var(--transition-fast);
        }

        .gallery-item-btn:hover .gallery-item-category {
          color: var(--color-primary-dark);
        }

        .gallery-item-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #15803d;
        }

        .gallery-item-placeholder svg {
          opacity: 0.5;
        }

        .gallery-placeholder-text {
          font-size: var(--font-size-xs);
          font-weight: 600;
          color: #15803d;
          opacity: 0.7;
          letter-spacing: 0.5px;
        }

        .gallery-empty {
          text-align: center;
          padding: var(--space-16);
          color: var(--color-text-light);
        }

        @media (min-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 639px) {
          .gallery-grid {
            gap: var(--space-2);
            grid-template-columns: repeat(2, 1fr);
          }
          .gallery-filters {
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            gap: var(--space-2);
            padding-bottom: var(--space-2);
          }
          .gallery-filter-btn {
            flex-shrink: 0;
            scroll-snap-align: start;
            white-space: nowrap;
          }
        }
      `}</style>
    </main>
  );
};

export default Gallery;
