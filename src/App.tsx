import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import LoadingSpinner from './components/LoadingSpinner';
import { ToastProvider, ToastContainer } from './contexts/ToastContext';
import { useTheme } from './hooks/useTheme';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  useTheme();
  const location = useLocation();

  return (
    <>
      <ScrollToTopOnNavigate />
      <div className="app noise-overlay">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner fullPage text="Memuat halaman..." />}>
            <div className="page-transition-wrapper" key={location.pathname}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/tentang" element={<About />} />
                <Route path="/produk" element={<Products />} />
                <Route path="/galeri" element={<Gallery />} />
                <Route path="/kontak" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppFloat />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ToastProvider>
        <AppContent />
        <ToastContainer />
      </ToastProvider>
      <style>{`
        .app {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          min-height: 100dvh;
          background: var(--color-bg);
        }
        .main-content {
          flex: 1;
        }
        /* Ganti framer-motion page transition yang bermasalah di HP.
           Pakai CSS animation sederhana — tidak ada opacity:0 flash karena
           browser menerapkan CSS @keyframes SEBELUM first paint. */
        .page-transition-wrapper {
          animation: page-fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes page-fade-in {
          from {
            transform: translateY(8px);
          }
          to {
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .page-transition-wrapper {
            animation: none;
          }
        }
      `}</style>
    </Router>
  );
};

export default App;
