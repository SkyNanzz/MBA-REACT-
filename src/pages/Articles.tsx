import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaFolder, FaArrowRight } from 'react-icons/fa';
import { articles } from '../data/companyData';
import Card, { CardImage, CardBody } from '../components/Card';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Articles: React.FC = () => {
  useEffect(() => {
    document.title = 'Artikel & Berita - MBA Mandiri Buton Atsiri';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Artikel dan berita terbaru tentang MBA Mandiri Buton Atsiri, industri essential oil, dan tips memilih minyak atsiri berkualitas.');
    }
  }, []);

  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="breadcrumb">
              <Link to="/">Beranda</Link> / <span>Artikel</span>
            </div>
            <h1>Artikel & Berita</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto' }}>
              Informasi terbaru seputar industri essential oil dan perkembangan perusahaan
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {articles.length === 0 ? (
            <div className="articles-empty">
              <p>Belum ada artikel.</p>
            </div>
          ) : (
            <div ref={ref} className="articles-grid">
              {articles.map((article, index) => (
                <article
                  key={article.id}
                  className={`article-card fade-in ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index % 6) * 80}ms` }}
                >
                  <Card>
                    <CardImage src={article.image} alt={article.title} aspectRatio="16/9" />
                    <CardBody>
                      <div className="article-meta">
                        <span className="article-meta-item">
                          <FaCalendarAlt /> {article.date}
                        </span>
                        <span className="article-meta-item">
                          <FaFolder /> {article.category}
                        </span>
                      </div>
                      <h3 className="card-title" style={{ fontSize: 'var(--font-size-lg)' }}>
                        {article.title}
                      </h3>
                      <p className="card-text">
                        {article.summary}
                      </p>
                      <div className="article-footer">
                        <Link to={`/artikel/${article.slug}`} className="article-read-more">
                          Baca Selengkapnya <FaArrowRight />
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .articles-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }

        .article-meta {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-3);
          margin-bottom: var(--space-3);
        }

        .article-meta-item {
          display: inline-flex;
          align-items: center;
          gap: var(--space-1);
          font-size: var(--font-size-xs);
          color: var(--color-text-light);
        }

        .article-footer {
          padding-top: var(--space-3);
          border-top: 1px solid var(--color-border);
        }

        .article-read-more {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--font-size-sm);
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
          transition: gap var(--transition-fast);
        }

        .article-read-more:hover {
          gap: var(--space-3);
        }

        .articles-empty {
          text-align: center;
          padding: var(--space-16);
          color: var(--color-text-light);
        }

        @media (min-width: 640px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .articles-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </main>
  );
};

export default Articles;
