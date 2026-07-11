import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaAward, FaHandshake, FaFlask, FaCheckCircle, FaArrowRight, FaBullseye, FaEye } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { companyValues, timeline, teamMembers } from '../data/companyData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Tentang Kami - MBA Mandiri Buton Atsiri';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Pelajari lebih lanjut tentang sejarah, visi, misi, dan nilai-nilai perusahaan MBA Mandiri Buton Atsiri.');
    }
  }, []);

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="breadcrumb">
              <Link to="/">Beranda</Link> / <span>Tentang Kami</span>
            </div>
            <h1>Tentang Kami</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto' }}>
              Perjalanan panjang kami dalam menghadirkan essential oil premium Indonesia ke pasar global
            </p>
          </div>
        </div>
      </section>

      <StorySection />
      <VisionMissionSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <CTASection />
    </main>
  );
};

const StorySection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section">
      <div className="container">
        <div ref={ref} className="story-grid">
          <div className={`story-content fade-in-left ${isVisible ? 'visible' : ''}`}>
            <span className="section-subtitle">Sejarah Kami</span>
            <h2 className="section-title" style={{ textAlign: 'left', maxWidth: 500 }}>
              Dari Buton untuk Dunia
            </h2>
            <div className="section-divider" style={{ margin: 'var(--space-6) 0' }} />
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Berdiri sejak tahun 2008, MBA Mandiri Buton Atsiri memulai perjalanan sebagai perusahaan 
              keluarga yang fokus pada pengolahan minyak nilam, komoditas unggulan dari tanah Buton, 
              Sulawesi Tenggara — daerah yang dikenal sebagai salah satu penghasil minyak nilam terbaik di dunia.
            </p>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Berbekal kekayaan alam Buton dan keahlian turun-temurun dalam penyulingan minyak atsiri, 
              kami tumbuh menjadi perusahaan yang dipercaya oleh pembeli dari berbagai penjuru dunia. 
              Dari Jerman hingga Jepang, dari Amerika Serikat hingga Perancis — essential oil kami telah 
              menjadi pilihan utama bagi industri parfum, kosmetik, farmasi, dan aromaterapi global.
            </p>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              Kini dengan kapasitas produksi lebih dari 500 ton per tahun dan jaringan petani binaan 
              di seluruh Sulawesi Tenggara, kami terus berkomitmen untuk menghadirkan essential oil 
              berkualitas premium yang membawa nama baik Indonesia di pasar internasional.
            </p>
            <Button variant="primary" href="/produk">
              Lihat Produk Kami <FaArrowRight />
            </Button>
          </div>
          <div className={`story-visual fade-in-right ${isVisible ? 'visible' : ''}`}>
            <div className="story-image-grid">
              <div className="story-image-main">
                <div className="story-image-placeholder">
                  <svg viewBox="0 0 400 300" fill="none" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
                    <rect width="400" height="300" rx="16" fill="var(--color-primary-bg)"/>
                    <path d="M200 50C150 100 120 150 120 200C120 250 160 280 200 280C240 280 280 250 280 200C280 150 250 100 200 50Z" fill="rgba(26,125,58,0.15)"/>
                    <path d="M200 80C165 120 140 160 140 200C140 240 170 260 200 260C230 260 260 240 260 200C260 160 235 120 200 80Z" fill="rgba(200,168,78,0.12)"/>
                    <circle cx="200" cy="170" r="60" fill="rgba(26,125,58,0.1)"/>
                    <text x="200" y="180" textAnchor="middle" fill="var(--color-primary)" fontSize="16" fontFamily="Playfair Display, serif" fontWeight="600">2008</text>
                    <text x="200" y="220" textAnchor="middle" fill="var(--color-text-light)" fontSize="11" fontFamily="Inter, sans-serif">Sejak 2008</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-12);
          align-items: center;
        }

        .story-image-main {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .story-image-placeholder {
          width: 100%;
          height: 100%;
          min-height: 300px;
        }

        @media (min-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr 1fr;
          }
          .story-image-placeholder {
            min-height: 350px;
          }
        }
      `}</style>
    </section>
  );
};

const VisionMissionSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section section-primary-bg">
      <div className="container">
        <div ref={ref} className="vm-grid">
          <div className={`vm-card fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="vm-icon">
              <FaEye />
            </div>
            <h3 className="vm-title">Visi</h3>
            <p className="vm-text">
              Menjadi produsen dan eksportir minyak atsiri terkemuka asal Indonesia yang diakui 
              dunia atas kualitas premium, inovasi berkelanjutan, dan kontribusi nyata dalam 
              pemberdayaan petani lokal serta kelestarian lingkungan.
            </p>
          </div>
          <div className={`vm-card fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            <div className="vm-icon">
              <FaBullseye />
            </div>
            <h3 className="vm-title">Misi</h3>
            <ul className="vm-list">
              <li className="vm-list-item">
                <FaCheckCircle className="vm-check" />
                <span>Memproduksi essential oil berkualitas premium yang memenuhi standar internasional</span>
              </li>
              <li className="vm-list-item">
                <FaCheckCircle className="vm-check" />
                <span>Memberdayakan petani lokal melalui kemitraan yang adil dan berkelanjutan</span>
              </li>
              <li className="vm-list-item">
                <FaCheckCircle className="vm-check" />
                <span>Menerapkan teknologi produksi ramah lingkungan dan berkelanjutan</span>
              </li>
              <li className="vm-list-item">
                <FaCheckCircle className="vm-check" />
                <span>Terus berinovasi dalam pengembangan produk dan proses produksi</span>
              </li>
              <li className="vm-list-item">
                <FaCheckCircle className="vm-check" />
                <span>Memberikan pelayanan terbaik kepada mitra bisnis di seluruh dunia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .vm-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }

        .vm-card {
          background: var(--color-white);
          padding: var(--space-10);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
        }

        .vm-card:hover {
          box-shadow: var(--shadow-md);
        }

        .vm-icon {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-lg);
          background: var(--color-primary-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-2xl);
          color: var(--color-primary);
          margin-bottom: var(--space-5);
        }

        .vm-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          margin-bottom: var(--space-4);
        }

        .vm-text {
          font-size: var(--font-size-base);
          line-height: var(--line-height-relaxed);
          color: var(--color-text-light);
          margin: 0;
        }

        .vm-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .vm-list-item {
          display: flex;
          gap: var(--space-3);
          font-size: var(--font-size-base);
          color: var(--color-text);
          line-height: var(--line-height-normal);
        }

        .vm-check {
          color: var(--color-primary);
          margin-top: 3px;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .vm-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
};

const ValuesSection: React.FC = () => {
  const valueIcons = [FaLeaf, FaAward, FaHandshake, FaFlask];
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          subtitle="Nilai Perusahaan"
          title="Prinsip yang Kami Pegang"
          description="Nilai-nilai ini menjadi landasan dalam setiap langkah dan keputusan kami."
        />
        <div ref={ref} className="grid grid-4 stagger-children">
          {companyValues.map((value, index) => {
            const Icon = valueIcons[index];
            return (
              <div key={index} className={`value-card fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="value-icon">
                  <Icon />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .value-card {
          text-align: center;
          padding: var(--space-8) var(--space-6);
          background: var(--color-white);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          transition: all var(--transition-base);
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary);
        }

        .value-icon {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-full);
          background: var(--color-primary-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-5);
          font-size: var(--font-size-2xl);
          color: var(--color-primary);
          transition: all var(--transition-base);
        }

        .value-card:hover .value-icon {
          background: var(--color-primary);
          color: var(--color-white);
          transform: scale(1.1);
        }

        .value-title {
          font-size: var(--font-size-lg);
          font-weight: 700;
          margin-bottom: var(--space-3);
        }

        .value-desc {
          font-size: var(--font-size-sm);
          color: var(--color-text-light);
          line-height: var(--line-height-relaxed);
          margin: 0;
        }
      `}</style>
    </section>
  );
};

const TimelineSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="Perjalanan"
          title="Timeline Perusahaan"
          description="Perjalanan panjang MBA Mandiri Buton Atsiri sejak berdiri hingga menjadi perusahaan yang diakui secara global."
        />
        <div ref={ref} className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`timeline-item fade-in ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="timeline-marker" aria-hidden="true">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          max-width: 680px;
          margin: 0 auto;
          padding-left: var(--space-8);
        }

        .timeline-line {
          position: absolute;
          left: 15px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--color-gold), var(--color-primary));
        }

        .timeline-item {
          position: relative;
          padding-bottom: var(--space-10);
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: calc(-1 * var(--space-8));
          top: 4px;
          width: 32px;
          display: flex;
          justify-content: center;
        }

        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: var(--radius-full);
          background: var(--color-gold);
          border: 3px solid var(--color-white);
          box-shadow: 0 0 0 2px var(--color-gold);
        }

        .timeline-content {
          background: var(--color-white);
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
          transition: all var(--transition-base);
        }

        .timeline-content:hover {
          box-shadow: var(--shadow-md);
          transform: translateX(4px);
        }

        .timeline-year {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: var(--font-size-sm);
          font-weight: 700;
          color: var(--color-gold);
          margin-bottom: var(--space-2);
          padding: var(--space-1) var(--space-3);
          background: var(--color-primary-bg);
          border-radius: var(--radius-full);
        }

        .timeline-title {
          font-size: var(--font-size-lg);
          font-weight: 700;
          margin-bottom: var(--space-2);
        }

        .timeline-desc {
          font-size: var(--font-size-sm);
          color: var(--color-text-light);
          line-height: var(--line-height-relaxed);
          margin: 0;
        }

        @media (min-width: 768px) {
          .timeline {
            padding-left: var(--space-12);
          }
          .timeline-marker {
            left: calc(-1 * var(--space-12));
          }
        }
      `}</style>
    </section>
  );
};

const TeamSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          subtitle="Tim Kami"
          title="Kepemimpinan Perusahaan"
          description="Tim profesional yang berdedikasi dalam mengelola dan mengembangkan perusahaan."
        />
        <div ref={ref} className="grid grid-3 stagger-children">
          {teamMembers.map((member, index) => (
            <div key={member.id} className={`team-card fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="team-avatar-wrapper">
                <img src={member.avatar} alt={member.name} className="team-avatar" loading="lazy" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <div className="team-position">{member.position}</div>
              <p className="team-desc">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .team-card {
          text-align: center;
          padding: var(--space-8) var(--space-6);
          background: var(--color-white);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          transition: all var(--transition-base);
        }

        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .team-avatar-wrapper {
          width: 120px;
          height: 120px;
          border-radius: var(--radius-full);
          overflow: hidden;
          margin: 0 auto var(--space-5);
          border: 3px solid var(--color-gold);
          padding: 3px;
        }

        .team-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--radius-full);
        }

        .team-name {
          font-size: var(--font-size-lg);
          font-weight: 700;
          margin-bottom: var(--space-1);
        }

        .team-position {
          font-size: var(--font-size-sm);
          color: var(--color-gold);
          font-weight: 600;
          margin-bottom: var(--space-3);
        }

        .team-desc {
          font-size: var(--font-size-sm);
          color: var(--color-text-light);
          line-height: var(--line-height-relaxed);
          margin: 0;
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
          <h2 className="cta-title">Ingin Tahu Lebih Lanjut?</h2>
          <p className="cta-description">
            Kami siap menjawab pertanyaan Anda tentang produk, kerjasama, atau kebutuhan essential oil khusus.
          </p>
          <div className="cta-actions">
            <Button variant="gold" size="lg" href="/kontak">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .cta-section {
          position: relative;
          padding: var(--space-20) 0;
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
          margin-bottom: var(--space-6);
        }
        .cta-actions {
          display: flex;
          justify-content: center;
          gap: var(--space-4);
        }
        @media (max-width: 639px) {
          .cta-title { font-size: var(--font-size-2xl); }
        }
      `}</style>
    </section>
  );
};

export default About;
