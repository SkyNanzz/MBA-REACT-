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

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, aspectRatio = '16/10', className = '' }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

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
        <div
          style={{
            width: '100%',
            aspectRatio,
            backgroundColor: '#f0f1f3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca0a9',
            fontSize: '0.875rem',
          }}
          aria-label="Image failed to load"
        >
          Gambar tidak tersedia
        </div>
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
