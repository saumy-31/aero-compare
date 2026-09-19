import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ShieldCheck, Compass, Zap, Globe } from 'lucide-react';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CookieConsent } from './components/layout/CookieConsent';
import { EmailCaptureModal } from './components/layout/EmailCaptureModal';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Analytics } from './components/seo/Analytics';

import AppRoutes from './routes/AppRoutes';

export const TrustBar = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="feature-card-light p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <Zap className="w-6 h-6 text-blue-600 mb-3" />
            <h3 className="text-slate-900 font-bold text-base mb-1">Compare 100+ Airlines</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Search major carriers and budget options simultaneously in real time.</p>
          </div>

          <div className="feature-card-light p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <ShieldCheck className="w-6 h-6 text-blue-600 mb-3" />
            <h3 className="text-slate-900 font-bold text-base mb-1">No Hidden Fees</h3>
            <p className="text-xs text-slate-500 leading-relaxed">100% transparent pricing directly from airlines and travel partners.</p>
          </div>

          <div className="feature-card-light p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <Compass className="w-6 h-6 text-blue-600 mb-3" />
            <h3 className="text-slate-900 font-bold text-base mb-1">Best Price Search</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Advanced fare tracking to help you book at the optimal moment.</p>
          </div>

          <div className="feature-card-light p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <Globe className="w-6 h-6 text-blue-600 mb-3" />
            <h3 className="text-slate-900 font-bold text-base mb-1">Global Connectivity</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Instant eSIM activation for seamless mobile data across 180+ destinations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        {/* Automatic Viewport Scroll-To-Top on Route Change */}
        <ScrollToTop />
        <Analytics />
        <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
          <CookieConsent />
          <EmailCaptureModal />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;