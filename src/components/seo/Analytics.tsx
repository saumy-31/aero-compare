import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Tell TypeScript about the global gtag function injected in index.html
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Only run if gtag is loaded
    if (typeof window.gtag === 'function') {
      
      // A tiny 100ms timeout ensures React Helmet has time to update the <title> tag 
      // before we send the data to Google Analytics.
      const timeoutId = setTimeout(() => {
        window.gtag('event', 'page_view', {
          page_path: location.pathname + location.search,
          page_location: window.location.href,
          page_title: document.title,
        });
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [location]);

  return null; // This component renders absolutely nothing
};