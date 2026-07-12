import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, animate = true, delay = 0 }) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`card${hover ? '' : ''} ${animate ? `fade-in ${isVisible ? 'visible' : ''}` : ''} ${className}`}
      style={animate && delay ? { transitionDelay: `${delay}ms` } : undefined}
      role="article"
    >
      {children}
    </div>
  );
};

const PlaceholderSVG: React.FC<{ aspectRatio: string }> = ({ aspectRatio }) => (
  <div
    style={{
      width: '100%',
      aspectRatio,
      background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      padding: '24px',
    }}
    aria-label="Gambar belum tersedia"
  >
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
    <span style={{
      fontFamily: 'Raleway, sans-serif',
      fontSize: '0.875rem',
      fontWeight: 600,
      color: '#15803d',
      letterSpacing: '0.5px',
    }}>
      Gambar Belum Tersedia
    </span>
  </div>
);

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, aspectRatio = '16/10', className = '' }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const isEmpty = !src || src.trim() === '';

  if (isEmpty) {
    return (
      <div className={`card-img-wrapper ${className}`}>
        <PlaceholderSVG aspectRatio={aspectRatio} />
      </div>
    );
  }

  return (
    <div className={`card-img-wrapper ${className}`} style={{ position: 'relative' }}>
      {!loaded && !error && (
        <div
          style={{
            width: '100%',
            aspectRatio,
            backgroundColor: '#f0f1f3',
            animation: 'pulse 1.5s infinite',
          }}
          aria-hidden="true"
        />
      )}
      {error ? (
        <PlaceholderSVG aspectRatio={aspectRatio} />
      ) : (
        <img
          src={src}
          alt={alt}
          className={`card-img ${loaded ? '' : 'opacity-0'}`}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => (
  <div className={`card-body ${className}`}>{children}</div>
);

export default Card;
