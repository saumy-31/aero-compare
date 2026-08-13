import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('flysava_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('flysava_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] space-y-3">
        
        {/* Header Row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/80">
              <Cookie className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-black text-slate-900 tracking-tight">
              We value your privacy
            </h3>
          </div>

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close privacy notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Description Text */}
        {/* Description Text */}
<p className="text-xs font-semibold text-slate-600 leading-relaxed">
  FlySava uses cookies to enhance your experience, serve personalized content, and analyze site traffic.{' '}
  <a
    href="/cookies" // <--- Change /privacy to your cookie policy route
    className="text-blue-600 hover:underline font-extrabold"
  >
    Cookie Policy
  </a>
</p>

        {/* Single CTA Button */}
        <div className="pt-1">
          <button
            type="button"
            onClick={handleAccept}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs tracking-wide uppercase transition-all shadow-md shadow-blue-600/25 active:scale-[0.98] cursor-pointer"
          >
            Sounds good!
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookieConsent;