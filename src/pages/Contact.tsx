import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane, FaCheckCircle, FaClock } from 'react-icons/fa';
import { contactInfo } from '../data/companyData';
import Button from '../components/Button';
import { useToast } from '../contexts/ToastContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    document.title = 'Kontak - MBA Mandiri Buton Atsiri';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Hubungi MBA Mandiri Buton Atsiri untuk informasi produk, kerjasama distribusi, atau kebutuhan essential oil khusus.');
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nama harus diisi';
    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.message.trim()) newErrors.message = 'Pesan harus diisi';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    addToast({ type: 'success', message: 'Pesan Anda berhasil terkirim! Kami akan merespon dalam 1x24 jam.' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <div className="breadcrumb">
              <Link to="/">Beranda</Link> / <span>Kontak</span>
            </div>
            <h1>Hubungi Kami</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto' }}>
              Silakan hubungi tim kami untuk informasi lebih lanjut atau konsultasi kebutuhan essential oil Anda
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div ref={ref} className="contact-grid">
            <div className={`contact-info fade-in-left ${isVisible ? 'visible' : ''}`}>
              <h2 className="contact-info-title">Informasi Kontak</h2>
              <p className="contact-info-desc">
                Tim kami siap membantu Anda. Hubungi kami melalui salah satu saluran berikut atau 
                kunjungi kantor kami.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="contact-detail-label">Alamat</h4>
                    <p className="contact-detail-value">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="contact-detail-label">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="contact-detail-link">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="contact-detail-label">Telepon</h4>
                    <a href={`tel:${contactInfo.phone}`} className="contact-detail-link">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon" style={{ background: '#e8f5e9', color: '#25D366' }}>
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="contact-detail-label">WhatsApp</h4>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-detail-link"
                    >
                      +{contactInfo.whatsapp}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-hours">
                <h4 className="contact-hours-title">
                  <FaClock /> Jam Operasional
                </h4>
                <div className="contact-hours-grid">
                  <div>
                    <span className="contact-day">Senin - Minggu</span>
                    <span className="contact-time">08:00 - 17:00</span>
                  </div>
                  <div>
                    <span className="contact-day"></span>
                    <span className="contact-time"></span>
                  </div>
                  <div>
                    <span className="contact-day"></span>
                    <span className="contact-time"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`contact-form-wrapper fade-in-right ${isVisible ? 'visible' : ''}`}>
              {submitted ? (
                <div className="contact-success">
                  <FaCheckCircle className="contact-success-icon" />
                  <h3>Pesan Berhasil Dikirim!</h3>
                  <p>Terima kasih telah menghubungi kami. Tim kami akan merespons pesan Anda dalam 1x24 jam.</p>
                  <Button variant="primary" onClick={() => setSubmitted(false)}>
                    Kirim Pesan Lagi
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <h3 className="contact-form-title">Kirim Pesan</h3>
                  <p className="contact-form-desc">
                    Isi form di bawah dan tim kami akan segera menghubungi Anda.
                  </p>

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nama Lengkap <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Masukkan email Anda"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Nomor Telepon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Masukkan nomor telepon (opsional)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Perusahaan</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nama perusahaan (opsional)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Pesan <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tulis pesan Anda..."
                      rows={5}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }} />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-container">
          <iframe
            src={contactInfo.mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi MBA Mandiri Buton Atsiri"
          />
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-10);
          align-items: start;
        }

        .contact-info-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          margin-bottom: var(--space-3);
        }

        .contact-info-desc {
          color: var(--color-text-light);
          font-size: var(--font-size-base);
          margin-bottom: var(--space-8);
          line-height: var(--line-height-relaxed);
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
          margin-bottom: var(--space-8);
        }

        .contact-detail-item {
          display: flex;
          gap: var(--space-4);
        }

        .contact-detail-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-lg);
          background: var(--color-primary-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-lg);
          color: var(--color-primary);
          flex-shrink: 0;
          will-change: transform;
          transition:
            transform var(--transition-base),
            box-shadow var(--transition-base);
        }

        .contact-detail-item:hover .contact-detail-icon {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 4px 12px rgba(26, 125, 58, 0.2);
        }

        .contact-detail-label {
          font-size: var(--font-size-sm);
          font-weight: 700;
          color: var(--color-heading);
          margin-bottom: var(--space-1);
        }

        .contact-detail-value {
          font-size: var(--font-size-sm);
          color: var(--color-text-light);
          margin: 0;
          line-height: var(--line-height-normal);
        }

        .contact-detail-link {
          font-size: var(--font-size-sm);
          color: var(--color-primary);
          text-decoration: none;
        }

        .contact-detail-link {
          font-size: var(--font-size-sm);
          color: var(--color-primary);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .contact-detail-link:hover {
          color: var(--color-primary-dark);
          text-decoration: underline;
        }

        .contact-detail-item {
          display: flex;
          gap: var(--space-4);
          transition: transform var(--transition-base);
        }

        .contact-detail-item:hover {
          transform: translateX(4px);
        }

        .contact-hours {
          background: var(--color-bg-alt);
          padding: var(--space-6);
          border-radius: var(--radius-lg);
        }

        .contact-hours-title {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--font-size-base);
          font-weight: 700;
          margin-bottom: var(--space-4);
        }

        .contact-hours-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .contact-hours-grid > div {
          display: flex;
          justify-content: space-between;
          font-size: var(--font-size-sm);
        }

        .contact-day {
          color: var(--color-text);
        }

        .contact-time {
          color: var(--color-primary);
          font-weight: 600;
        }

        .contact-form-wrapper {
          background: var(--color-white);
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
          transition:
            border-color var(--transition-base),
            box-shadow var(--transition-base),
            transform var(--transition-base);
          will-change: transform;
        }

        .contact-form-wrapper:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(21, 128, 61, 0.08), 0 0 0 1px rgba(200, 168, 78, 0.1), var(--shadow-md);
          border-color: var(--color-gold);
        }

        .contact-form-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          margin-bottom: var(--space-2);
        }

        .contact-form-desc {
          font-size: var(--font-size-sm);
          color: var(--color-text-light);
          margin-bottom: var(--space-6);
        }

        .contact-success {
          text-align: center;
          padding: var(--space-8) 0;
        }

        .contact-success-icon {
          font-size: 48px;
          color: var(--color-primary);
          margin-bottom: var(--space-4);
        }

        .contact-success h3 {
          font-size: var(--font-size-2xl);
          margin-bottom: var(--space-3);
        }

        .contact-success p {
          color: var(--color-text-light);
          margin-bottom: var(--space-6);
        }

        .contact-map-section {
          padding: 0;
        }

        .contact-map-container {
          width: 100%;
        }

        .contact-map-container iframe {
          display: block;
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr;
          }
          .contact-form-wrapper {
            padding: var(--space-10);
          }
        }

        @media (max-width: 639px) {
          .contact-form-wrapper {
            padding: var(--space-6);
          }
        }
      `}</style>
    </main>
  );
};

export default Contact;
