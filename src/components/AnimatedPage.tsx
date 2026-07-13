import React, { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/* ===================== PREMIUM PAGE TRANSITION ===================== */
/* Per design-motion-principles (Jakub Krehel):
   - Enter: opacity + translateY + blur for a "materializing" effect
   - Spring animation with bounce:0 for professional polish
   - Exit: subtler than enter (smaller translate, same blur)
   - Direction-aware: slides left/right when navigating forward/back
   - Mobile-optimized: shorter distances, snappier springs
   - Accessibility: useReducedMotion() disables animation when user prefers reduced motion
*/

interface AnimatedPageProps {
  children: React.ReactNode;
  className?: string;
}

type NavDirection = 'forward' | 'back' | 'none';

// Ordered routes for directional awareness
const routeOrder: Record<string, number> = {
  '/': 0,
  '/tentang': 1,
  '/produk': 2,
  '/galeri': 3,
  '/kontak': 4,
};

function getNavDirection(from: string, to: string): NavDirection {
  const fromIdx = routeOrder[from] ?? -1;
  const toIdx = routeOrder[to] ?? -1;
  if (fromIdx === -1 || toIdx === -1) return 'none';
  if (toIdx > fromIdx) return 'forward';
  if (toIdx < fromIdx) return 'back';
  return 'none';
}

/* Module-level flag that persists across component (un)mounts.
   Only the very first app load skips the initial animation to prevent
   the mobile flash where content appears briefly, then disappears (opacity: 0)
   before the framer-motion spring animates it back to opacity: 1.
   Subsequent navigations via route changes get full page transitions. */
let didInitialAppRender = false;

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children, className }) => {
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const [direction, setDirection] = useState<NavDirection>('none');

  useEffect(() => {
    const dir = getNavDirection(prevPath.current, location.pathname);
    setDirection(dir);
    prevPath.current = location.pathname;
  }, [location.pathname]);

  // Build variants based on direction
  const slideOffset = 60;
  const slideX = direction === 'forward' ? slideOffset : direction === 'back' ? -slideOffset : 0;

  const pageVariants: Variants = {
    initial: {
      opacity: 0,
      x: slideX,
      filter: 'blur(4px)',
    },
    animate: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 23,
        mass: 0.4,
      },
    },
    exit: {
      opacity: 0,
      x: -slideX * 0.6,
      filter: 'blur(3px)',
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 22,
        mass: 0.35,
      },
    },
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // On very first app load only: skip initial opacity:0 to avoid flash on mobile.
  // All subsequent mounts (route changes) get the full page transition.
  const skipInitialAnimation = !didInitialAppRender;
  if (skipInitialAnimation) {
    didInitialAppRender = true;
  }

  return (
    <motion.div
      className={className}
      variants={pageVariants}
      initial={skipInitialAnimation ? false : 'initial'}
      animate="animate"
      exit="exit"
      style={{ willChange: 'transform, opacity, filter' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
