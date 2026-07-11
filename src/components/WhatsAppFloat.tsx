import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '../data/companyData';

const WhatsAppFloat: React.FC = () => {
  const message = encodeURIComponent('Halo MBA Mandiri Buton Atsiri! Saya ingin mengetahui lebih lanjut tentang produk essential oil Anda.');
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Hubungi via WhatsApp"
      title="Hubungi via WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default React.memo(WhatsAppFloat);
