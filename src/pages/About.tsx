import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaAward, FaHandshake, FaFlask, FaCheckCircle, FaArrowRight, FaBullseye, FaEye } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import ScrollReveal, { StaggerContainer } from '../components/ScrollReveal';
import { companyValues, teamMembers } from '../data/companyData';
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
              Perjalanan kami dalam menghadirkan essential oil terbaik dari Buton untuk Indonesia
            </p>
          </div>
        </div>
      </section>

      <StorySection />
      <VisionMissionSection />
      <ValuesSection />
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
              Dari Buton untuk Indonesia
            </h2>
            <div className="section-divider" style={{ margin: 'var(--space-6) 0' }} />
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Berdiri sejak tahun 2014, MBA Mandiri Buton Atsiri memulai perjalanan sebagai perusahaan 
              keluarga yang fokus pada pengolahan minyak nilam, komoditas unggulan dari tanah Buton, 
              Sulawesi Tenggara — daerah yang dikenal sebagai penghasil minyak nilam terbaik di Indonesia.
            </p>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Berbekal kekayaan alam Buton dan keahlian turun-temurun dalam penyulingan minyak atsiri, 
              kami tumbuh menjadi produsen yang dipercaya oleh pelanggan dari berbagai daerah di Indonesia. 
              Dari industri rumah tangga hingga usaha menengah — essential oil kami telah 
              menjadi pilihan utama bagi kebutuhan parfum, kosmetik, farmasi, dan aromaterapi.
            </p>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              Dengan jaringan petani binaan yang terus bertambah di seluruh Sulawesi Tenggara, 
              kami berkomitmen untuk menghadirkan essential oil 
              berkualitas terbaik dari Buton untuk seluruh masyarakat Indonesia.
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
                    <text x="200" y="180" textAnchor="middle" fill="var(--color-primary)" fontSize="16" fontFamily="Playfair Display, serif" fontWeight="600">2014</text>
                    <text x="200" y="220" textAnchor="middle" fill="var(--color-text-light)" fontSize="11" fontFamily="Inter, sans-serif">Sejak 2014</text>
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
  return (
    <section className="section section-primary-bg">
      <div className="container">
        <StaggerContainer staggerDelay={120} direction="up" threshold={0.1} className="vm-grid">
          <div className="doppelrand">
            <div className="doppelrand-inner vm-card">
            <div className="vm-icon">
              <FaEye />
            </div>
            <h3 className="vm-title">Visi</h3>
            <p className="vm-text">
              Menjadi produsen minyak atsiri terkemuka dari Buton yang dikenal 
              di Indonesia atas kualitas terbaik, inovasi berkelanjutan, dan kontribusi nyata dalam 
              pemberdayaan petani lokal serta kelestarian lingkungan.
            </p>
            </div>
          </div>
          <div className="doppelrand">
            <div className="doppelrand-inner vm-card">
            <div className="vm-icon">
              <FaBullseye />
            </div>
            <h3 className="vm-title">Misi</h3>
            <ul className="vm-list">
              <li className="vm-list-item">
                <FaCheckCircle className="vm-check" />
                <span>Memproduksi essential oil berkualitas yang memenuhi standar mutu nasional</span>
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
                <span>Memberikan pelayanan terbaik kepada mitra bisnis di seluruh Indonesia</span>
              </li>
            </ul>
            </div>
          </div>
        </StaggerContainer>
      </div>

      <style>{`
        .vm-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }

        .vm-card {
          padding: var(--space-10);
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
          will-change: transform;
          transition:
            transform var(--transition-base),
            background var(--transition-base),
            color var(--transition-base),
            box-shadow var(--transition-base);
        }

        .vm-card:hover .vm-icon {
          background: var(--color-primary);
          color: var(--color-white);
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 4px 15px rgba(21, 128, 61, 0.3);
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

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          subtitle="Nilai Perusahaan"
          title="Prinsip yang Kami Pegang"
          description="Nilai-nilai ini menjadi landasan dalam setiap langkah dan keputusan kami."
        />
        <StaggerContainer staggerDelay={100} direction="up" threshold={0.05} className="grid grid-4">
          {companyValues.map((value, index) => {
            const Icon = valueIcons[index];
            return (
              <div key={index} className="doppelrand">
                <div className="doppelrand-inner value-card">
                <div className="value-icon">
                  <Icon />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.description}</p>
                </div>
              </div>
            );
          })}
        </StaggerContainer>
      </div>

      <style>{`
        .value-card {
          text-align: center;
          padding: var(--space-8) var(--space-6);
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
          will-change: transform;
          transition:
            transform var(--transition-base),
            background var(--transition-base),
            color var(--transition-base),
            box-shadow var(--transition-base);
        }

        .value-card:hover .value-icon {
          background: var(--color-primary);
          color: var(--color-white);
          transform: scale(1.1) rotate(-3deg);
          box-shadow: 0 4px 15px rgba(21, 128, 61, 0.3);
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

const TeamSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          subtitle="Tim Kami"
          title="Kepemimpinan Perusahaan"
          description="Tim profesional yang berdedikasi dalam mengelola dan mengembangkan perusahaan."
        />
        <StaggerContainer staggerDelay={100} direction="up" threshold={0.05} className="grid grid-3">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="doppelrand">
              <div className="doppelrand-inner team-card">
              <div className="team-avatar-wrapper">
                <img src={member.avatar} alt={member.name} className="team-avatar" loading="lazy" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <div className="team-position">{member.position}</div>
              <p className="team-desc">{member.description}</p>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>

      <style>{`
        .team-card {
          text-align: center;
          padding: var(--space-8) var(--space-6);
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
  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg" aria-hidden="true" />
      <div className="container">
        <ScrollReveal direction="scale" delay={0.15}>
          <div className="cta-content">
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
        </ScrollReveal>
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
          .cta-actions { flex-direction: column; align-items: stretch; }
          .cta-actions .btn { width: 100%; justify-content: center; }
          .vm-card { padding: var(--space-6); }
          .value-card { padding: var(--space-6) var(--space-4); }
          .team-card { padding: var(--space-6) var(--space-4); }
          .story-content .section-title { font-size: var(--font-size-2xl); }
          .story-image-placeholder { min-height: 200px; }
        }
      `}</style>
    </section>
  );
};

export default About;
