import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const THUMB_SIZE = 16;
const TRACK_PADDING = 2;
const TRACK_WIDTH = 40;
const THUMB_OFFSET = TRACK_WIDTH - THUMB_SIZE - TRACK_PADDING * 2;

const springConfig = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 30,
  mass: 0.5,
};

import type { Variants } from 'framer-motion';

const iconVariants: Variants = {
  initial: { rotate: -90, opacity: 0, scale: 0.5 },
  animate: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
  exit: {
    rotate: 90,
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.15 },
  },
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <motion.button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
      title={isDark ? 'Mode Terang' : 'Mode Gelap'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="theme-toggle-track"
        animate={{
          background: isDark
            ? 'rgba(26, 125, 58, 0.3)'
            : 'rgba(200, 168, 78, 0.25)',
          borderColor: isDark
            ? 'rgba(34, 197, 94, 0.3)'
            : 'rgba(200, 168, 78, 0.3)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.div
          className="theme-toggle-thumb"
          animate={{
            x: isDark ? THUMB_OFFSET : 0,
            background: isDark
              ? 'var(--color-primary)'
              : 'var(--color-gold)',
          }}
          transition={springConfig}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.span
                key="moon"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <FaMoon size={10} />
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <FaSun size={10} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <style>{`
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border: none;
          background: none;
          cursor: pointer;
          border-radius: var(--radius-full);
        }

        .theme-toggle-track {
          width: ${TRACK_WIDTH}px;
          height: 22px;
          border-radius: var(--radius-full);
          position: relative;
          border: 2px solid transparent;
          background: rgba(200, 168, 78, 0.25);
          border-color: rgba(200, 168, 78, 0.3);
        }

        .navbar-transparent .theme-toggle-track {
          background: rgba(255, 255, 255, 0.25) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
        }

        .navbar-solid .theme-toggle-track {
          background: var(--color-gray-200);
          border-color: var(--color-border);
        }

        .theme-toggle-thumb {
          position: absolute;
          top: 1px;
          left: 1px;
          width: ${THUMB_SIZE}px;
          height: ${THUMB_SIZE}px;
          border-radius: var(--radius-full);
          background: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </motion.button>
  );
};

export default React.memo(ThemeToggle);
