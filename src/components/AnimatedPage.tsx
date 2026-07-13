import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

/* ===================== PREMIUM PAGE TRANSITION ===================== */
/* Per design-motion-principles (Jakub Krehel):
   - Enter: opacity + translateY + blur for a "materializing" effect
   - Spring animation with bounce:0 for professional polish
   - Exit: subtler than enter (smaller translate, same blur)
   - Accessibility: useReducedMotion() disables animation when user prefers reduced motion
*/

interface AnimatedPageProps {
  children: React.ReactNode;
  className?: string;
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(6px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 25,
      mass: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: 'blur(4px)',
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 22,
      mass: 0.4,
    },
  },
};

const staticVariants: Variants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
};

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children, className }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={prefersReducedMotion ? staticVariants : pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
