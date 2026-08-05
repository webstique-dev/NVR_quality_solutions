import { createContext, useContext, useState } from 'react';

const PreloaderContext = createContext({
  isPreloaderActive: true,
  isReady: false,
  setPreloaderComplete: () => {},
});

export const PreloaderProvider = ({ children }) => {
  const [isPreloaderActive, setIsPreloaderActive] = useState(() => {
    if (typeof window !== 'undefined' && window.__NVR_PRELOADER_DONE__) {
      return false;
    }
    return true;
  });

  const [isReady, setIsReady] = useState(() => {
    if (typeof window !== 'undefined' && window.__NVR_PRELOADER_DONE__) {
      return true;
    }
    return false;
  });

  const setPreloaderComplete = () => {
    if (typeof window !== 'undefined') {
      window.__NVR_PRELOADER_DONE__ = true;
    }
    setIsReady(true);
    setIsPreloaderActive(false);
  };

  return (
    <PreloaderContext.Provider value={{ isPreloaderActive, isReady, setPreloaderComplete }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => useContext(PreloaderContext);
