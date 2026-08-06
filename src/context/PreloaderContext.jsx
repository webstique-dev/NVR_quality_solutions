import { createContext, useContext, useState } from 'react';

/* The preloader is a cinematic first-visit experience. It must NOT
   reappear on F5 / Ctrl+Shift+R refreshes (that causes a blank flash).
   We persist the "done" flag in sessionStorage so refreshes in the same
   tab always skip the overlay and show content immediately. */
const STORAGE_KEY = '__NVR_PRELOADER_DONE__';

const hasPreloaderRun = () => {
  if (typeof window === 'undefined') return false;
  if (window.__NVR_PRELOADER_DONE__) return true;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
};

const persistPreloaderDone = () => {
  if (typeof window === 'undefined') return;
  window.__NVR_PRELOADER_DONE__ = true;
  try {
    sessionStorage.setItem(STORAGE_KEY, '1');
  } catch {
    /* storage unavailable — window flag is enough */
  }
};

const PreloaderContext = createContext({
  isPreloaderActive: true,
  isReady: false,
  isPreloaderGone: false,
  setPreloaderComplete: () => {},
  setPreloaderFinished: () => {},
});

export const PreloaderProvider = ({ children }) => {
  const [isPreloaderActive, setIsPreloaderActive] = useState(() => !hasPreloaderRun());

  const [isReady, setIsReady] = useState(() => hasPreloaderRun());

  // True only after the preloader's exit animation has finished AND the
  // overlay is fully removed from the DOM. The Hero waits on this so
  // there is zero overlap between the loading screen and the entrance.
  const [isPreloaderGone, setIsPreloaderGone] = useState(() => hasPreloaderRun());

  const setPreloaderComplete = () => {
    persistPreloaderDone();
    setIsReady(true);
    setIsPreloaderActive(false);
  };

  const setPreloaderFinished = () => {
    setIsPreloaderGone(true);
  };

  return (
    <PreloaderContext.Provider
      value={{
        isPreloaderActive,
        isReady,
        isPreloaderGone,
        setPreloaderComplete,
        setPreloaderFinished,
      }}
    >
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => useContext(PreloaderContext);
