import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    const consent = localStorage.getItem('flysava-cookie-consent');
    if (consent !== 'accepted') {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('flysava-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          {/* Glassmorphism Container */}
          <div className="max-w-4xl mx-auto bg-[#0c1a33]/90 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Content Section */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400">
                  <Cookie className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">We Value Your Privacy</h3>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                FlySava uses cookies to improve your browsing experience, personalize content, and analyze website traffic. By continuing to use our site, you agree to our use of cookies.{' '}
                <Link 
                  to="/cookies" 
                  className="text-blue-400 hover:text-white font-bold transition-colors underline underline-offset-4 decoration-blue-500/30 hover:decoration-white"
                >
                  Learn more in our Cookie Policy
                </Link>.
              </p>
            </div>

            {/* Single Action Button */}
            <button 
              onClick={handleAccept}
              className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/50 text-sm whitespace-nowrap"
            >
              Sounds Good
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};