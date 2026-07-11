import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useScrollPosition } from '../hooks/useIntersectionObserver';

const ScrollToTop: React.FC = () => {
  const { isScrolled } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button
        className={`scroll-to-top ${isScrolled ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        title="Kembali ke atas"
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default React.memo(ScrollToTop);
