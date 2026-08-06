import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTopOnRoute from './components/Common/ScrollToTopOnRoute';
import ScrollToTopButton from './components/Common/ScrollToTopButton';
import Preloader from './components/Common/Preloader';
import { PreloaderProvider, usePreloader } from './context/PreloaderContext';

import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const TrainingPrograms = lazy(() => import('./pages/TrainingPrograms'));
const TrainingDetail = lazy(() => import('./pages/TrainingDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageFallback = () => (
  <div className="route-fallback" aria-hidden="true" role="status" aria-label="Loading page">
    <div className="route-fallback__inner">
      <div className="route-fallback__line route-fallback__line--sm" />
      <div className="route-fallback__line route-fallback__line--md" />
      <div className="route-fallback__line route-fallback__line--lg" />
      <div className="route-fallback__card" />
      <div className="route-fallback__card" />
    </div>
  </div>
);

function AppContent() {
  const { isPreloaderActive, setPreloaderComplete, setPreloaderFinished } = usePreloader();
  const [showPreloader, setShowPreloader] = useState(isPreloaderActive);

  return (
    <>
      <ScrollToTopOnRoute />
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/training-programs" element={<TrainingPrograms />} />
            <Route path="/training-programs/:slug" element={<TrainingDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTopButton />
      <AnimatePresence mode="wait">
        {showPreloader && (
          <Preloader
            key="preloader"
            onStartExit={() => {
              // Reveal the site immediately as the overlay begins zooming
              // out, so content is fully painted behind the exit — no
              // blank/flash frame during the transition.
              setPreloaderComplete();
              setPreloaderFinished();
            }}
            onFinish={() => {
              setShowPreloader(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <PreloaderProvider>
      <AppContent />
    </PreloaderProvider>
  );
}

export default App;
