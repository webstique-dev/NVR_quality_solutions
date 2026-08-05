import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTopOnRoute from './components/Common/ScrollToTopOnRoute';
import ScrollToTopButton from './components/Common/ScrollToTopButton';
import Preloader from './components/Common/Preloader';
import { PreloaderProvider, usePreloader } from './context/PreloaderContext';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import TrainingPrograms from './pages/TrainingPrograms';
import TrainingDetail from './pages/TrainingDetail';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

function AppContent() {
  const { isPreloaderActive, setPreloaderComplete } = usePreloader();
  const [showPreloader, setShowPreloader] = useState(isPreloaderActive);

  return (
    <>
      <ScrollToTopOnRoute />
      <Navbar />
      <main id="main-content">
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
      </main>
      <Footer />
      <ScrollToTopButton />
      {showPreloader && (
        <Preloader
          onStartExit={() => setPreloaderComplete()}
          onFinish={() => setShowPreloader(false)}
        />
      )}
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

