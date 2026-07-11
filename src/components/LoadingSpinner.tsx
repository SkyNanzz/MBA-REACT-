import React from 'react';

interface LoadingSpinnerProps {
  size?: number;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 40, text = 'Memuat...' }) => {
  return (
    <div
      className="loading-spinner"
      role="status"
      aria-label={text}
    >
      <div
        className="spinner"
        style={{ width: size, height: size }}
      />
      {text && <p className="loading-text">{text}</p>}

      <style>{`
        .loading-spinner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--space-16);
          gap: var(--space-4);
        }
        .loading-text {
          font-size: var(--font-size-sm);
          color: var(--color-text-light);
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
