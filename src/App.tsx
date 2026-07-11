import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import LoadingSpinner from './components/LoadingSpinner';
import { useTheme } from './hooks/useTheme';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Articles = lazy(() => import('./pages/Articles'));
const Contact = lazy(() => import('./pages/Contact'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
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

  return (
    <>
      <ScrollToTopOnNavigate />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner text="Memuat halaman..." />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tentang" element={<About />} />
              <Route path="/produk" element={<Products />} />
              <Route path="/galeri" element={<Gallery />} />
              <Route path="/artikel" element={<Articles />} />
              <Route path="/artikel/:slug" element={<ArticleDetail />} />
              <Route path="/kontak" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
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
      <AppContent />
      <style>{`
        .app {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
        }
      `}</style>
    </Router>
  );
};

export default App;
