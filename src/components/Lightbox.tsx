import React, { useEffect, useCallback } from 'react';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onNavigate }) => {
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      e.stopPropagation();
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (hasPrev) onNavigate(currentIndex - 1);
          break;
        case 'ArrowRight':
          if (hasNext) onNavigate(currentIndex + 1);
          break;
      }
    },
    [currentIndex, hasPrev, hasNext, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!images[currentIndex]) return null;

  return (
    <div
      className="lightbox-overlay active"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Lightbox gambar"
      aria-describedby="lightbox-description"
    >
      <span id="lightbox-description" className="sr-only">
        Gambar {currentIndex + 1} dari {images.length}: {images[currentIndex]?.alt}
      </span>

      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Tutup lightbox"
      >
        <IoClose />
      </button>

      {hasPrev && (
        <button
          className="lightbox-nav lightbox-prev"
          onClick={() => onNavigate(currentIndex - 1)}
          aria-label="Gambar sebelumnya"
        >
          <IoChevronBack />
        </button>
      )}

      {hasNext && (
        <button
          className="lightbox-nav lightbox-next"
          onClick={() => onNavigate(currentIndex + 1)}
          aria-label="Gambar berikutnya"
        >
          <IoChevronForward />
        </button>
      )}

      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="lightbox-image"
      />

      <div className="lightbox-counter">
        {currentIndex + 1} / {images.length}
      </div>

      <style>{`
        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: var(--color-white);
          font-size: var(--font-size-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          z-index: 1;
        }

        .lightbox-nav:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .lightbox-prev {
          left: var(--space-4);
        }

        .lightbox-next {
          right: var(--space-4);
        }

        .lightbox-counter {
          position: absolute;
          bottom: var(--space-6);
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.7);
          font-size: var(--font-size-sm);
          font-family: var(--font-body);
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
};

export default Lightbox;
