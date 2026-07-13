import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaFlask, FaGlobe, FaArrowRight, FaCogs } from 'react-icons/fa';
import { products } from '../data/companyData';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Products: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<string>(products[0]?.id || '');

  useEffect(() => {
    document.title = 'Produk - MBA Mandiri Buton Atsiri';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Produk essential oil MBA Mandiri Buton Atsiri: Minyak Nilam, Kayu Putih, Cengkeh, Pala, dan Sereh Wangi. Kualitas terbaik dari Buton.');
    }

    if (window.location.hash) {
      const slug = window.location.hash.replace('#', '');
      const found = products.find((p) => p.slug === slug);
      if (found) {
        setTimeout(() => {
          const el = document.getElementById(slug);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, []);

  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });


  return (
    <main>
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="breadcrumb">
              <Link to="/">Beranda</Link> / <span>Produk</span>
            </div>
            <h1>Produk Kami</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto' }}>
              Essential oil berkualitas dari bahan baku terbaik Buton, Sulawesi Tenggara
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Produk Unggulan"
            title="Essential Oil Premium"
            description="Setiap produk kami melalui proses kontrol kualitas ketat untuk memastikan kemurnian dan konsistensi terbaik."
          />

          <div className="product-filters">
            {products.map((product) => (
              <button
                key={product.id}
                className={`product-filter-btn ${activeProduct === product.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveProduct(product.id);
                  const el = document.getElementById(product.slug);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                aria-pressed={activeProduct === product.id}
              >
                {product.name}
              </button>
            ))}
          </div>

          <div ref={ref} className="product-list">
            {products.map((product, index) => (
              <article
                key={product.id}
                id={product.slug}
                className={`product-detail fade-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="product-detail-grid">
                  <div className="product-detail-image">
                    <div className="product-image-wrapper">
                      {product.comingSoon && (
                        <span className="product-image-badge">Coming Soon</span>
                      )}
                      {product.image ? (
                        <img src={product.image} alt={product.name} loading="lazy" />
                      ) : (
                        <div className="product-image-placeholder">
                          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                            <path d="M12 8v8" />
                            <path d="M8 12h8" />
                          </svg>
                          <span className="product-image-placeholder-text">Segera Hadir</span>
                          {product.comingSoon ? (
                            <span className="product-image-placeholder-hint">Produk ini akan segera tersedia</span>
                          ) : (
                            <span className="product-image-placeholder-hint">Upload gambar ke folder assets untuk menampilkan produk</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="product-detail-info">
                    <h3 className="product-detail-title">{product.name}</h3>
                    <div className="product-meta">
                      <span className="product-meta-item">
                        <FaGlobe /> {product.origin}
                      </span>
                      <span className="product-meta-item">
                        <FaCogs /> {product.extractionMethod}
                      </span>
                    </div>
                    <p className="product-detail-desc">{product.description}</p>

                    <div className="product-section">
                      <h4 className="product-section-title">
                        <FaCheckCircle /> Manfaat
                      </h4>
                      <ul className="product-benefits">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="product-benefit-item">
                            <FaCheckCircle className="benefit-icon" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="product-section">
                      <h4 className="product-section-title">
                        <FaFlask /> Spesifikasi
                      </h4>
                      <div className="product-specs">
                        {product.specifications.map((spec, i) => (
                          <div key={i} className="product-spec-item">
                            <span className="spec-label">{spec.label}</span>
                            <span className="spec-value">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {product.comingSoon ? (
                      <div className="coming-soon-notice">
                        <span className="coming-soon-badge-large">Coming Soon</span>
                        <p className="coming-soon-text">Produk ini akan segera tersedia. Pantau terus website kami untuk informasi terbaru.</p>
                      </div>
                    ) : (
                      <Button variant="primary" href="/kontak">
                        Pesan Sekarang <FaArrowRight />
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .product-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-3);
          margin-bottom: var(--space-12);
        }

        .product-filter-btn {
          padding: var(--space-2) var(--space-5);
          border-radius: var(--radius-full);
          border: 2px solid var(--color-border);
          background: var(--color-white);
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--color-text);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          will-change: transform;
          transition:
            transform var(--transition-fast),
            border-color var(--transition-fast),
            color var(--transition-fast),
            background var(--transition-fast);
        }

        .product-filter-btn:hover {
          border-color: var(--color-gold);
          color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-gold);
        }

        .product-filter-btn:active {
          transform: translateY(0);
        }

        .product-filter-btn.active {
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          border-color: var(--color-primary);
          color: var(--color-white);
          box-shadow: var(--shadow-green);
        }

        .product-filter-btn.active:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(26, 125, 58, 0.35);
        }

        .product-detail {
          margin-bottom: var(--space-16);
          padding-bottom: var(--space-16);
          border-bottom: 1px solid var(--color-border);
        }

        .product-detail:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .product-detail-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
          align-items: start;
        }

        .product-image-wrapper {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          position: relative;
        }

        .product-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 4/3;
          transition: transform var(--transition-slow);
        }

        .product-image-wrapper:hover img {
          transform: scale(1.05);
        }

        .product-image-placeholder {
          width: 100%;
          height: 100%;
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 32px 24px;
          color: #15803d;
        }

        .product-image-placeholder svg {
          opacity: 0.6;
          width: 56px;
          height: 56px;
        }

        .product-image-placeholder-text {
          font-family: var(--font-body);
          font-size: var(--font-size-base);
          font-weight: 700;
          color: #15803d;
          letter-spacing: 0.5px;
        }

        .product-image-placeholder-hint {
          font-family: var(--font-body);
          font-size: var(--font-size-xs);
          color: #166534;
          opacity: 0.7;
          text-align: center;
          max-width: 200px;
          line-height: 1.4;
        }

        .product-image-badge {
          position: absolute;
          top: var(--space-4);
          right: var(--space-4);
          z-index: 2;
          padding: var(--space-1) var(--space-3);
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          font-size: var(--font-size-xs);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
          animation: badge-pulse 2s infinite;
        }

        .product-detail-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          margin-bottom: var(--space-3);
          color: var(--color-primary);
        }

        .product-meta {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-4);
          margin-bottom: var(--space-5);
        }

        .product-meta-item {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--font-size-sm);
          color: var(--color-text-light);
          background: var(--color-primary-bg);
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
        }

        .product-detail-desc {
          font-size: var(--font-size-base);
          line-height: var(--line-height-relaxed);
          color: var(--color-text);
          margin-bottom: var(--space-6);
        }

        .product-section {
          margin-bottom: var(--space-6);
        }

        .product-section-title {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--font-size-base);
          font-weight: 700;
          margin-bottom: var(--space-3);
          color: var(--color-heading);
        }

        .product-section-title svg {
          color: var(--color-primary);
        }

        .product-benefits {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-2);
        }

        .product-benefit-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2);
          font-size: var(--font-size-sm);
          color: var(--color-text);
          line-height: var(--line-height-normal);
        }

        .benefit-icon {
          color: var(--color-primary);
          margin-top: 3px;
          flex-shrink: 0;
          font-size: var(--font-size-sm);
        }

        .product-specs {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-2);
        }

        .product-spec-item {
          display: flex;
          justify-content: space-between;
          padding: var(--space-2) var(--space-4);
          background: var(--color-bg-alt);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
        }

        .spec-label {
          font-weight: 600;
          color: var(--color-heading);
        }

        .spec-value {
          color: var(--color-primary);
          font-weight: 500;
        }

        .coming-soon-notice {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-3);
          padding: var(--space-5);
          background: linear-gradient(135deg, #fffbeb, #fef3c7);
          border: 1px solid #fde68a;
          border-radius: var(--radius-lg);
        }

        .coming-soon-badge-large {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-1) var(--space-4);
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          font-size: var(--font-size-sm);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          border-radius: var(--radius-full);
        }

        .coming-soon-text {
          font-size: var(--font-size-sm);
          color: #92400e;
          margin: 0;
          line-height: var(--line-height-relaxed);
        }

        @media (min-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr 1fr;
          }
          .product-benefits {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 639px) {
          .product-filters {
            flex-direction: row;
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            gap: var(--space-2);
            padding-bottom: var(--space-2);
            margin-bottom: var(--space-8);
          }
          .product-filter-btn {
            flex-shrink: 0;
            scroll-snap-align: start;
            text-align: center;
            white-space: nowrap;
          }
          .product-detail-title {
            font-size: var(--font-size-2xl);
          }
          .product-detail-grid {
            gap: var(--space-6);
          }
          .product-meta {
            flex-direction: column;
            gap: var(--space-2);
          }
          .product-spec-item {
            flex-direction: column;
            gap: var(--space-1);
          }
          .product-benefits {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};

export default Products;
