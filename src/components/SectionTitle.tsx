import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`section-header ${align === 'left' ? 'text-left' : ''} ${className} fade-in ${isVisible ? 'visible' : ''}`}
      style={{ textAlign: align }}
    >
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      <div className="section-divider" />
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};

export default React.memo(SectionTitle);
