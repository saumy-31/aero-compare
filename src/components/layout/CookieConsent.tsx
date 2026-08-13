import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    const consent = localStorage.getItem('flysava-cookie-consent');
    if (consent !== 'accepted' && consent !== 'customized') {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('flysava-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('flysava-cookie-consent', 'dismissed');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          // Prevent search engines from indexing snippet text inside popups
          data-nosnippet
          role="dialog"
          aria-label="Cookie Consent"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0, transition: { duration: 0.2 } }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          className="fixed bottom-2.5 sm:bottom-5 left-0 right-0 z-[90] px-2.5 sm:px-4 flex justify-center pointer-events-none"
        >
          {/* FLOATING COMPACT CONTAINER */}
          <div className="relative w-full max-w-[680px] bg-white border border-slate-200/90 rounded-[20px] shadow-[0_12px_30px_-6px_rgba(15,23,42,0.12)] p-3.5 sm:p-4 pointer-events-auto text-slate-900 font-sans">
            
            {/* CLOSE X BUTTON */}
            <button
              type="button"
              onClick={handleDismiss}
              className="absolute top-3 right-3 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer select-none"
              aria-label="Dismiss cookie notice"
            >
              <X className="w-4 h-4" />
            </button>

            {/* MAIN LAYOUT */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pr-6 sm:pr-4">
              
              {/* COOKIE ICON */}
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] shrink-0 shadow-2xs">
                <Cookie className="w-4 h-4" />
              </div>

              {/* CONTENT & DESCRIPTION */}
              <div className="flex-1 space-y-0.5 min-w-0">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-none">
                  We Value Your Privacy
                </h3>
                
                <p className="text-[11px] sm:text-xs font-medium text-slate-500 leading-snug truncate sm:whitespace-normal">
                  FlySava uses cookies to improve your experience, personalize content, and analyze traffic.{' '}
                  <Link
                    to="/cookies"
                    className="text-[#2563EB] hover:underline font-bold inline-block"
                  >
                    Cookie Policy
                  </Link>
                </p>
              </div>

              {/* ACTIONS: MANAGE & ACCEPT */}
              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <Link
                  to="/cookies"
                  className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-extrabold text-xs transition-colors text-center cursor-pointer select-none"
                >
                  Manage
                </Link>

                <button
                  type="button"
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-extrabold text-xs transition-all shadow-sm shadow-blue-600/20 active:scale-95 text-center cursor-pointer select-none whitespace-nowrap"
                >
                  Accept
                </button>
              </div>

            </div>

          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;