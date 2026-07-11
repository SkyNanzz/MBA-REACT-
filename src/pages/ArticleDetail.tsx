import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaFolder, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { articles } from '../data/companyData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Button from '../components/Button';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (article) {
      document.title = `${article.title} - MBA Mandiri Buton Atsiri`;
    } else {
      document.title = 'Artikel Tidak Ditemukan - MBA Mandiri Buton Atsiri';
    }
  }, [article]);

  if (!article) {
    return (
      <main>
        <div className="page-header">
          <div className="container">
            <div className="page-header-content">
              <div className="breadcrumb">
                <Link to="/">Beranda</Link> / <Link to="/artikel">Artikel</Link> / <span>Tidak Ditemukan</span>
              </div>
              <h1>Artikel Tidak Ditemukan</h1>
            </div>
          </div>
        </div>
        <div className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <p style={{ marginBottom: 'var(--space-6)' }}>Maaf, artikel yang Anda cari tidak ditemukan.</p>
            <Button variant="primary" href="/artikel">
              <FaArrowLeft /> Kembali ke Artikel
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <main>
      <div className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="breadcrumb">
              <Link to="/">Beranda</Link> / <Link to="/artikel">Artikel</Link> / <span>{article.title}</span>
            </div>
          </div>
        </div>
      </div>

      <article className="section">
        <div className="container container-narrow">
          <div ref={ref} className={`article-detail fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="article-detail-image">
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                style={{ width: '100%', borderRadius: 'var(--radius-xl)', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>

            <div className="article-detail-meta">
              <span className="article-meta-item">
                <FaCalendarAlt /> {article.date}
              </span>
              <span className="article-meta-item">
                <FaUser /> {article.author}
              </span>
              <span className="article-meta-item">
                <FaFolder /> {article.category}
              </span>
            </div>

            <h1 className="article-detail-title">{article.title}</h1>

            <div className="article-detail-content">
              <p>{article.summary}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            <div className="article-detail-nav">
              {prevArticle ? (
                <Link to={`/artikel/${prevArticle.slug}`} className="article-nav-prev">
                  <FaArrowLeft />
                  <div>
                    <small>Artikel Sebelumnya</small>
                    <div>{prevArticle.title}</div>
                  </div>
                </Link>
              ) : <div />}
              {nextArticle ? (
                <Link to={`/artikel/${nextArticle.slug}`} className="article-nav-next">
                  <div>
                    <small>Artikel Selanjutnya</small>
                    <div>{nextArticle.title}</div>
                  </div>
                  <FaArrowRight />
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </article>

      <style>{`
        .article-detail-image {
          margin-bottom: var(--space-8);
        }
        .article-detail-meta {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-4);
          margin-bottom: var(--space-4);
        }
        .article-meta-item {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--font-size-sm);
          color: var(--color-text-light);
        }
        .article-detail-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          margin-bottom: var(--space-6);
        }
        .article-detail-content {
          font-size: var(--font-size-base);
          line-height: var(--line-height-relaxed);
          color: var(--color-text);
        }
        .article-detail-content p {
          margin-bottom: var(--space-4);
        }
        .article-detail-nav {
          display: flex;
          justify-content: space-between;
          gap: var(--space-4);
          margin-top: var(--space-12);
          padding-top: var(--space-8);
          border-top: 1px solid var(--color-border);
        }
        .article-nav-prev,
        .article-nav-next {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          text-decoration: none;
          color: var(--color-text);
          font-size: var(--font-size-sm);
          font-weight: 500;
          max-width: 45%;
          transition: color var(--transition-fast);
        }
        .article-nav-prev:hover,
        .article-nav-next:hover {
          color: var(--color-primary);
        }
        .article-nav-prev small,
        .article-nav-next small {
          display: block;
          font-size: var(--font-size-xs);
          color: var(--color-text-light);
          margin-bottom: var(--space-1);
        }
        .article-nav-prev div div,
        .article-nav-next div div {
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }
        @media (max-width: 639px) {
          .article-detail-title {
            font-size: var(--font-size-2xl);
          }
          .article-nav-prev div div,
          .article-nav-next div div {
            max-width: 120px;
          }
          .article-detail-nav {
            flex-direction: column;
            gap: var(--space-4);
          }
          .article-nav-prev,
          .article-nav-next {
            max-width: 100%;
          }
        }
      `}</style>
    </main>
  );
};

export default ArticleDetail;
