import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur';
  delay?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
  /** Spring stiffness (higher = snappier). Default 120 */
  stiffness?: number;
  /** Spring damping (higher = less bounce). Default 20 */
  damping?: number;
}

/* Per Jakub Krehel's enter recipe: opacity + translateY + blur for materializing effect.
   Spring with bounce:0 for professional polish. Blur adds a "coming into focus" feel. */
const directionVariants = (
  direction: ScrollRevealProps['direction'],
  distance: number
): Variants => {
  const offsets: Record<string, { x?: number; y?: number; scale?: number; filter?: string }> = {
    up: { y: distance, filter: 'blur(4px)' },
    down: { y: -distance, filter: 'blur(4px)' },
    left: { x: distance, filter: 'blur(4px)' },
    right: { x: -distance, filter: 'blur(4px)' },
    scale: { scale: 0.85, filter: 'blur(4px)' },
    blur: { y: distance, filter: 'blur(6px)' },
  };

  const offset = offsets[direction ?? 'up'];

  return {
    hidden: {
      opacity: 0,
      ...offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        mass: 0.5,
        delay: delay ?? 0,
      },
    },
  };
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  distance = 40,
  once = false,
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={directionVariants(direction, distance)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{ willChange: 'transform, opacity, filter' }}
    >
      {children}
    </motion.div>
  );
};

/* ===================== STAGGERED REVEAL CONTAINER ===================== */

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Delay between each child animation in ms */
  staggerDelay?: number;
  /** Direction for each child */
  direction?: ScrollRevealProps['direction'];
  /** Threshold for the container */
  threshold?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className,
  staggerDelay = 80,
  direction = 'up',
  threshold = 0.05,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: threshold });
  const prefersReducedMotion = useReducedMotion();

  /* Per Jakub Krehel: staggered entries with spring physics and blur for materializing feel.
     Stagger delay creates a cascading reveal effect without needing manual delay props. */
  const childrenArray = React.Children.toArray(children);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        const yOffset = direction === 'up' || direction === 'blur' ? 30 : direction === 'down' ? -30 : 0;
        const xOffset = direction === 'left' ? 30 : direction === 'right' ? -30 : 0;

        return (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: yOffset,
              x: xOffset,
              scale: direction === 'scale' ? 0.9 : 1,
              filter: 'blur(4px)',
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                  }
                : {}
            }
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 22,
              mass: 0.5,
              delay: index * (staggerDelay / 1000),
            }}
            style={{ willChange: 'transform, opacity, filter' }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};

/* ===================== PARALLAX SCROLL SECTION ===================== */

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className,
  speed = 0.5,
  direction = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const multiplier = direction === 'up' ? 1 : -1;

  return (
    <div ref={ref} className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        animate={
          isInView
            ? { y: [20 * speed * multiplier, -20 * speed * multiplier] }
            : { y: 0 }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/* ===================== COUNT-UP ANIMATION ===================== */

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // easeOutExpo easing
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className={className}>
      {prefix}{count}{suffix}
    </div>
  );
};

export default ScrollReveal;
