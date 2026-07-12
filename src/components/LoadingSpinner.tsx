import React from 'react';

interface LoadingSpinnerProps {
  size?: number;
  text?: string;
  overlay?: boolean;
  fullPage?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  text = 'Memuat...',
  overlay = false,
  fullPage = false,
}) => {
  if (overlay || fullPage) {
    return (
      <div
        className="loading-overlay"
        role="alert"
        aria-busy="true"
        aria-label={text}
        style={{
          position: fullPage ? 'fixed' : 'absolute',
        }}
      >
        <div className="loading-overlay-content">
          <div className="loading-spinner-ring" style={{ width: size, height: size }}>
            <div className="loading-ring-segment" />
            <div className="loading-ring-segment" />
            <div className="loading-ring-segment" />
          </div>
          {text && <p className="loading-overlay-text">{text}</p>}
        </div>

        <style>{`
          .loading-overlay {
            inset: 0;
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(4px);
            animation: overlay-fade-in 0.2s ease-out;
          }

          [data-theme="dark"] .loading-overlay {
            background: rgba(6, 14, 9, 0.85);
          }

          .loading-overlay-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-4);
          }

          .loading-spinner-ring {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .loading-ring-segment {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: var(--color-primary);
            animation: ring-spin 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          }

          .loading-ring-segment:nth-child(2) {
            inset: 4px;
            border-top-color: var(--color-gold);
            animation-delay: -0.15s;
            animation-duration: 1s;
          }

          .loading-ring-segment:nth-child(3) {
            inset: 8px;
            border-top-color: var(--color-primary-light);
            animation-delay: -0.3s;
            animation-duration: 1.2s;
          }

          .loading-overlay-text {
            font-size: var(--font-size-sm);
            color: var(--color-text-light);
            margin: 0;
            animation: text-pulse 1.5s ease-in-out infinite;
          }

          @keyframes ring-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes overlay-fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes text-pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      className="loading-spinner"
      role="status"
      aria-label={text}
    >
      <div className="spinner" style={{ width: size, height: size }} />
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
          animation: text-pulse 1.5s ease-in-out infinite;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--color-gray-200);
          border-top-color: var(--color-primary);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes text-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

/* ===================== SKELETON LOADER ===================== */

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  borderRadius = 'var(--radius-md)',
  className = '',
}) => (
  <div
    className={`skeleton ${className}`}
    style={{ width, height, borderRadius }}
    aria-hidden="true"
  >
    <style>{`
      .skeleton {
        background: linear-gradient(
          90deg,
          var(--color-gray-200) 25%,
          var(--color-gray-100) 50%,
          var(--color-gray-200) 75%
        );
        background-size: 200% 100%;
        animation: skeleton-shimmer 1.5s ease-in-out infinite;
      }

      [data-theme="dark"] .skeleton {
        background: linear-gradient(
          90deg,
          var(--color-gray-300) 25%,
          var(--color-gray-200) 50%,
          var(--color-gray-300) 75%
        );
        background-size: 200% 100%;
      }

      @keyframes skeleton-shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `}</style>
  </div>
);

/* ===================== SKELETON CARD ===================== */

export const SkeletonCard: React.FC = () => (
  <div className="skeleton-card">
    <Skeleton height="180px" borderRadius="var(--radius-xl) var(--radius-xl) 0 0" />
    <div className="skeleton-card-body">
      <Skeleton width="60%" height="22px" />
      <Skeleton height="14px" />
      <Skeleton width="80%" height="14px" />
      <Skeleton width="40%" height="14px" />
    </div>

    <style>{`
      .skeleton-card {
        background: var(--color-white);
        border-radius: var(--radius-xl);
        overflow: hidden;
        box-shadow: var(--shadow-sm);
        border: 1px solid var(--color-border);
      }
      .skeleton-card-body {
        padding: var(--space-6);
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
      }
    `}</style>
  </div>
);

export default LoadingSpinner;
