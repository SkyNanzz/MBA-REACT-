import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface AnimatedPageProps {
  children: React.ReactNode;
  className?: string;
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      opacity: { duration: 0.35 },
      y: { duration: 0.4 },
      scale: { duration: 0.35 },
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.97,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
