import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaIndustry, FaGlobeAsia, FaUsers, FaCertificate, FaTruck, FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import Card, { CardImage, CardBody } from '../components/Card';
import { products, testimonials, statistics, advantages } from '../data/companyData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-overlay" />
        <div className="hero-pattern" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge fade-in visible">Premium Essential Oil Indonesia</span>
          <h1 className="hero-title fade-in visible">
            MBA <span className="text-gold">Mandiri</span> Buton Atsiri
          </h1>
          <p className="hero-description fade-in visible">
            Produsen dan eksportir minyak atsiri (essential oil) premium dari Buton, 
            Sulawesi Tenggara. Menghadirkan kekayaan alam Indonesia ke pasar global 
            dengan kualitas terbaik dan komitmen keberlanjutan.
          </p>
          <div className="hero-actions fade-in visible">
            <Button variant="gold" size="lg" href="/tentang">
              Pelajari Lebih Lanjut
              <FaArrowRight />
            </Button>
            <Button variant="white" size="lg" href="/kontak">
              Hubungi Kami
            </Button>
          </div>
        </div>
        <div className="hero-visual fade-in visible">
          <div className="hero-image-frame">
            <div className="hero-image-placeholder">
              <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className="hero-svg">
                <circle cx="200" cy="200" r="180" fill="rgba(26,125,58,0.15)" stroke="var(--color-gold)" strokeWidth="2" strokeDasharray="8 8"/>
                <circle cx="200" cy="200" r="140" fill="rgba(200,168,78,0.1)"/>
                <path d="M200 60C140 120 100 180 100 240C100 300 150 340 200 340C250 340 300 300 300 240C300 180 260 120 200 60Z" fill="rgba(26,125,58,0.2)"/>
                <path d="M200 100C160 150 130 200 130 240C130 280 165 310 200 310C235 310 270 280 270 240C270 200 240 150 200 100Z" fill="rgba(200,168,78,0.15)"/>
                <path d="M200 140C175 175 155 210 155 240C155 270 180 290 200 290C220 290 245 270 245 240C245 210 225 175 200 140Z" fill="rgba(26,125,58,0.25)"/>
                <text x="200" y="210" textAnchor="middle" fill="var(--color-gold)" fontSize="20" fontFamily="Playfair Display, serif" fontWeight="600">MBA</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: var(--space-24) 0 var(--space-16);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0a1f10 0%, #145a2a 40%, #1a7d3a 70%, #0f361a 100%);
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(ellipse at 20% 50%, rgba(200,168,78,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(26,125,58,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(200,168,78,0.05) 0%, transparent 50%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--space-6);
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-12);
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: rgba(200, 168, 78, 0.15);
          border: 1px solid rgba(200, 168, 78, 0.3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 600;
          color: var(--color-gold-light);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: var(--space-6);
        }

        .hero-title {
          font-size: var(--font-size-5xl);
          font-weight: 700;
          color: var(--color-white);
          line-height: 1.1;
          margin-bottom: var(--space-6);
        }

        .hero-description {
          font-size: var(--font-size-lg);
          color: rgba(255, 255, 255, 0.75);
          line-height: var(--line-height-relaxed);
          max-width: 560px;
          margin-bottom: var(--space-8);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-4);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-frame {
          width: 320px;
          height: 320px;
          position: relative;
        }

        .hero-image-placeholder {
          width: 100%;
          height: 100%;
        }

        .hero-svg {
          width: 100%;
          height: 100%;
        }

        @media (min-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr 1fr;
          }
          .hero-title {
            font-size: var(--font-size-6xl);
          }
          .hero-image-frame {
            width: 400px;
            height: 400px;
          }
        }

        @media (max-width: 639px) {
          .hero {
            min-height: 90vh;
          }
          .hero-title {
            font-size: var(--font-size-4xl);
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
          .hero-image-frame {
            width: 240px;
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
};

const AdvantagesSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section section-alt" id="keunggulan">
      <div className="container">
        <SectionTitle
          subtitle="Keunggulan Kami"
          title="Mengapa Memilih MBA?"
          description="Kami berkomitmen memberikan yang terbaik melalui kualitas produk, inovasi teknologi, dan pemberdayaan petani lokal."
        />
        <div ref={ref} className="grid grid-3 stagger-children">
          {advantages.map((adv, index) => (
            <div key={index} className={`advantage-card fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="advantage-icon">
                {index === 0 && <FaLeaf />}
                {index === 1 && <FaIndustry />}
                {index === 2 && <FaGlobeAsia />}
                {index === 3 && <FaUsers />}
                {index === 4 && <FaCertificate />}
                {index === 5 && <FaTruck />}
              </div>
              <h3 className="advantage-title">{adv.title}</h3>
              <p className="advantage-desc">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .advantage-card {
          background: var(--color-white);
          padding: var(--space-8);
          border-radius: var(--radius-xl);
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-base);
          border: 1px solid var(--color-border);
        }

        .advantage-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary);
        }

        .advantage-icon {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-lg);
          background: var(--color-primary-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-5);
          font-size: var(--font-size-2xl);
          color: var(--color-primary);
          transition: all var(--transition-base);
        }

        .advantage-card:hover .advantage-icon {
          background: var(--color-primary);
          color: var(--color-white);
          transform: scale(1.1);
        }

        .advantage-title {
          font-size: var(--font-size-xl);
          font-weight: 700;
          margin-bottom: var(--space-3);
          color: var(--color-heading);
        }

        .advantage-desc {
          font-size: var(--font-size-sm);
          color: var(--color-text-light);
          line-height: var(--line-height-relaxed);
          margin: 0;
        }
      `}</style>
    </section>
  );
};

const FeaturedProductsSection: React.FC = () => {
  const { ref } = useIntersectionObserver({ threshold: 0.1 });
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="section" id="produk">
      <div className="container">
        <SectionTitle
          subtitle="Produk Unggulan"
          title="Essential Oil Premium Kami"
          description="Kami memproduksi berbagai jenis minyak atsiri berkualitas ekspor dengan kadar senyawa aktif yang optimal."
        />
        <div ref={ref} className="grid grid-3 stagger-children">
          {featuredProducts.map((product, index) => (
            <Card key={product.id} delay={index * 100}>
              <CardImage src={product.image} alt={product.name} />
              <CardBody>
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">{product.description.slice(0, 120)}...</p>
                <Link to={`/produk#${product.slug}`} className="product-link">
                  Lihat Detail <FaArrowRight />
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12 fade-in ${isVisible ? 'visible' : ''}">
          <Button variant="outline" size="lg" href="/produk">
            Lihat Semua Produk <FaArrowRight />
          </Button>
        </div>
      </div>

      <style>{`
        .product-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--color-primary);
          font-weight: 600;
          font-size: var(--font-size-sm);
          text-decoration: none;
          transition: gap var(--transition-fast);
        }
        .product-link:hover {
          gap: var(--space-3);
          color: var(--color-primary-dark);
        }
      `}</style>
    </section>
  );
};

const StatsSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="stats-section" id="statistik">
      <div className="stats-bg" aria-hidden="true" />
      <div className="container">
        <div ref={ref} className="stats-grid">
          {statistics.map((stat) => (
            <div key={stat.id} className={`stat-item fade-in-scale ${isVisible ? 'visible' : ''}`}>
              <div className="stat-icon">
                {stat.id === 's1' && <FaLeaf />}
                {stat.id === 's2' && <FaIndustry />}
                {stat.id === 's3' && <FaGlobeAsia />}
                {stat.id === 's4' && <FaStar />}
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          position: relative;
          padding: var(--space-20) 0;
          overflow: hidden;
        }

        .stats-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
        }

        .stats-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-8);
        }

        .stat-item {
          text-align: center;
          padding: var(--space-8) var(--space-4);
          border-radius: var(--radius-xl);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-icon {
          font-size: var(--font-size-3xl);
          color: var(--color-gold);
          margin-bottom: var(--space-4);
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: var(--font-size-4xl);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: var(--space-2);
        }

        .stat-label {
          font-size: var(--font-size-sm);
          color: rgba(255, 255, 255, 0.75);
          font-weight: 500;
        }

        @media (min-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .stat-value {
            font-size: var(--font-size-5xl);
          }
        }

        @media (max-width: 639px) {
          .stats-section {
            padding: var(--space-12) 0;
          }
          .stat-item {
            padding: var(--space-6) var(--space-3);
          }
          .stat-value {
            font-size: var(--font-size-3xl);
          }
        }
      `}</style>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section section-alt" id="testimoni">
      <div className="container">
        <SectionTitle
          subtitle="Testimoni"
          title="Apa Kata Klien Kami"
          description="Kepercayaan mitra global kami adalah bukti nyata komitmen kami terhadap kualitas dan pelayanan terbaik."
        />
        <div ref={ref} className="testimonials-grid stagger-children">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-card fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <FaQuoteLeft className="testimonial-quote-icon" />
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="star-filled" />
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <FaStar key={`empty-${i}`} className="star-empty" />
                ))}
              </div>
              <div className="testimonial-author">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div>
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-position">{testimonial.position}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }

        .testimonial-card {
          background: var(--color-white);
          padding: var(--space-8);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
          position: relative;
          transition: all var(--transition-base);
        }

        .testimonial-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .testimonial-quote-icon {
          font-size: var(--font-size-2xl);
          color: var(--color-gold);
          opacity: 0.3;
          margin-bottom: var(--space-4);
        }

        .testimonial-quote {
          font-size: var(--font-size-base);
          line-height: var(--line-height-relaxed);
          color: var(--color-text);
          font-style: italic;
          margin-bottom: var(--space-4);
        }

        .testimonial-rating {
          display: flex;
          gap: 2px;
          margin-bottom: var(--space-4);
        }

        .star-filled {
          color: #f59e0b;
          font-size: var(--font-size-sm);
        }

        .star-empty {
          color: var(--color-gray-200);
          font-size: var(--font-size-sm);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding-top: var(--space-4);
          border-top: 1px solid var(--color-gray-100);
        }

        .testimonial-avatar {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-full);
          object-fit: cover;
        }

        .testimonial-name {
          font-size: var(--font-size-sm);
          font-weight: 600;
          color: var(--color-heading);
        }

        .testimonial-position {
          font-size: var(--font-size-xs);
          color: var(--color-text-light);
        }

        @media (min-width: 640px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

const CTASection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg" aria-hidden="true" />
      <div className="container">
        <div ref={ref} className={`cta-content fade-in-scale ${isVisible ? 'visible' : ''}`}>
          <h2 className="cta-title">Siap Bermitra dengan Kami?</h2>
          <p className="cta-description">
            Hubungi tim kami untuk informasi lebih lanjut tentang produk, kerjasama distribusi, 
            atau kebutuhan essential oil khusus untuk bisnis Anda.
          </p>
          <div className="cta-actions">
            <Button variant="gold" size="lg" href="/kontak">
              Hubungi Kami Sekarang
            </Button>
            <Button variant="outline-gold" size="lg" href="/produk">
              Lihat Katalog Produk
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .cta-section {
          position: relative;
          padding: var(--space-24) 0;
          overflow: hidden;
        }

        .cta-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0a1f10 0%, #145a2a 50%, #1a7d3a 100%);
        }

        .cta-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: var(--space-4);
        }

        .cta-description {
          font-size: var(--font-size-lg);
          color: rgba(255, 255, 255, 0.75);
          line-height: var(--line-height-relaxed);
          margin-bottom: var(--space-8);
        }

        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-4);
        }

        @media (max-width: 639px) {
          .cta-section {
            padding: var(--space-16) 0;
          }
          .cta-title {
            font-size: var(--font-size-2xl);
          }
          .cta-actions {
            flex-direction: column;
          }
          .cta-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = 'MBA Mandiri Buton Atsiri - Premium Essential Oil Indonesia';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'MBA Mandiri Buton Atsiri - Produsen dan eksportir minyak atsiri (essential oil) premium dari Buton, Sulawesi Tenggara. Kualitas ekspor, harga kompetitif.');
    }
  }, []);

  return (
    <main>
      <HeroSection />
      <AdvantagesSection />
      <FeaturedProductsSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Home;
