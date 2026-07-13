import { useRef, useEffect, type RefObject } from 'react';

export type SwipeDirection = 'left' | 'right' | 'up' | 'down';

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onSwipe?: (direction: SwipeDirection) => void;
}

interface UseSwipeGestureOptions {
  threshold?: number;
  /** Prevent default scroll when swiping vertically. Default false */
  preventScroll?: boolean;
  /** Angle tolerance in degrees. Default 45 */
  angleThreshold?: number;
}

const DEFAULT_THRESHOLD = 50;
const DEFAULT_ANGLE = 45;

/**
 * useSwipeGesture - Detects swipe gestures on mobile with spring-physics feel.
 *
 * Per Jakub Krehel: mobile touch interactions should feel immediate and
 * physical — like pushing a real object. The threshold prevents accidental
 * triggers during scroll, and the angle threshold distinguishes horizontal
 * swipes from vertical scrolling.
 *
 * Usage:
 *   const ref = useSwipeGesture<HTMLDivElement>({
 *     onSwipeLeft: () => navigate(-1),
 *     onSwipeRight: () => navigate(1),
 *   });
 *   <div ref={ref}>...</div>
 */
export function useSwipeGesture<T extends HTMLElement>(
  handlers: SwipeHandlers,
  options: UseSwipeGestureOptions = {}
): RefObject<T | null> {
  const {
    threshold = DEFAULT_THRESHOLD,
    preventScroll = false,
    angleThreshold = DEFAULT_ANGLE,
  } = options;

  const ref = useRef<T>(null);
  // Store handlers in a ref to avoid stale closures in effects
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;
    let isTracking = false;

    const handleTouchStart = (e: TouchEvent) => {
      // Ignore swipes that start on scrollable/interactive elements
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.no-swipe')
      ) {
        return;
      }

      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      isTracking = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTracking) return;

      const touch = e.touches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;

      if (preventScroll) {
        const angle = (Math.abs(deltaY) / Math.max(Math.abs(deltaX), 1));
        const angleDeg = (Math.atan(angle) * 180) / Math.PI;
        if (angleDeg < angleThreshold) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isTracking) return;
      isTracking = false;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;

      const absDx = Math.abs(deltaX);
      const absDy = Math.abs(deltaY);

      if (Math.max(absDx, absDy) < threshold) return;

      const angle = (Math.min(absDy, absDx) / Math.max(absDy, absDx, 1));
      const angleDeg = (Math.atan(angle) * 180) / Math.PI;

      let direction: SwipeDirection | null = null;

      if (absDx > absDy && angleDeg < angleThreshold) {
        direction = deltaX > 0 ? 'right' : 'left';
      } else if (absDy > absDx && angleDeg < angleThreshold) {
        direction = deltaY > 0 ? 'down' : 'up';
      }

      // Use the latest handlers via ref
      const h = handlersRef.current;
      if (direction) {
        h.onSwipe?.(direction);
        switch (direction) {
          case 'left': h.onSwipeLeft?.(); break;
          case 'right': h.onSwipeRight?.(); break;
          case 'up': h.onSwipeUp?.(); break;
          case 'down': h.onSwipeDown?.(); break;
        }
      }
    };

    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: !preventScroll });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, [threshold, angleThreshold, preventScroll]);

  return ref;
}

export default useSwipeGesture;
