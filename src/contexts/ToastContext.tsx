import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: React.ReactNode;
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const counterRef = useRef(0);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (toast: Omit<Toast, 'id'>): string => {
      counterRef.current += 1;
      const id = `toast-${counterRef.current}-${Date.now()}`;
      const newToast: Toast = { ...toast, id };

      setToasts((prev) => {
        const updated = [...prev, newToast];
        return updated.length > maxToasts
          ? updated.slice(updated.length - maxToasts)
          : updated;
      });

      const duration = toast.duration ?? 4000;
      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }

      return id;
    },
    [maxToasts, removeToast]
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

/* ===================== TOAST DISPLAY COMPONENT ===================== */

const typeStyles: Record<ToastType, { bg: string; icon: string; border: string }> = {
  success: {
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    icon: '✓',
    border: 'var(--color-primary)',
  },
  error: {
    bg: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
    icon: '✕',
    border: '#ef4444',
  },
  info: {
    bg: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    icon: 'ℹ',
    border: '#3b82f6',
  },
  warning: {
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    icon: '⚠',
    border: '#f59e0b',
  },
};

const ToastItem: React.FC<{
  toast: Toast;
  onRemove: (id: string) => void;
}> = ({ toast, onRemove }) => {
  const style = typeStyles[toast.type];
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  return (    <div
        className={`toast-item toast-${toast.type}`}
        role="alert"
        aria-live="polite"
        data-toast-type={toast.type}
        style={{
          background: isDark ? 'var(--color-gray-800)' : style.bg,
          borderLeft: `4px solid ${style.border}`,
        }}
      >
      <span
        className="toast-icon"
        style={{
          color: style.border,
        }}
        aria-hidden="true"
      >
        {style.icon}
      </span>
      <p className="toast-message">{toast.message}</p>
      <button
        className="toast-close"
        onClick={() => onRemove(toast.id)}
        aria-label="Tutup notifikasi"
      >
        ✕
      </button>
    </div>
  );
};

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-label="Notifikasi">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
      ))}

      <style>{`
        .toast-container {
          position: fixed;
          top: var(--space-20);
          right: var(--space-4);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          max-width: 380px;
          width: 100%;
          pointer-events: none;
        }

        .toast-item {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          padding: var(--space-4) var(--space-4);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
          pointer-events: auto;
          animation: toast-slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
        }

        .toast-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: var(--color-primary);
          border-radius: var(--radius-full);
          animation: toast-progress 4s linear forwards;
        }

        .toast-item[data-toast-type='error']::after {
          background: #ef4444;
        }

        .toast-item[data-toast-type='info']::after {
          background: #3b82f6;
        }

        .toast-item[data-toast-type='warning']::after {
          background: #f59e0b;
        }

        .toast-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-sm);
          font-weight: 700;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          margin-top: 1px;
        }

        .toast-message {
          flex: 1;
          font-size: var(--font-size-sm);
          color: var(--color-text);
          line-height: var(--line-height-normal);
          margin: 0;
          word-break: break-word;
        }

        .toast-close {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          border-radius: var(--radius-full);
          font-size: 10px;
          cursor: pointer;
          color: var(--color-text-light);
          transition: all var(--transition-fast);
          opacity: 0;
        }

        .toast-item:hover .toast-close {
          opacity: 1;
        }

        .toast-close:hover {
          background: rgba(0, 0, 0, 0.1);
          color: var(--color-text);
        }

        @keyframes toast-slide-in {
          from {
            opacity: 0;
            transform: translateX(100%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes toast-progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        @media (max-width: 480px) {
          .toast-container {
            top: auto;
            bottom: var(--space-4);
            right: var(--space-4);
            left: var(--space-4);
            max-width: none;
          }

          .toast-item {
            animation: toast-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          @keyframes toast-slide-up {
            from {
              opacity: 0;
              transform: translateY(100%) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        }
      `}</style>
    </div>
  );
};
