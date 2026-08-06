import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ShieldCheck, Compass, Zap, Globe } from 'lucide-react';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CookieConsent } from './components/layout/CookieConsent';
import { Analytics } from './components/seo/Analytics';

// Direct Eager Imports for Core Pages (Fixes Suspense Loading Lock)
import { Home } from './pages/Home';
import { FlightsPage } from './pages/FlightsPage';

// Secondary Pages Lazy Loaded
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Careers = lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers })));
const Destinations = lazy(() => import('./pages/Destinations').then(m => ({ default: m.Destinations })));
const FlightStatus = lazy(() => import('./pages/FlightStatus').then(m => ({ default: m.FlightStatus })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })));
const TravelGuide = lazy(() => import('./pages/TravelGuide').then(m => ({ default: m.TravelGuide })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Press = lazy(() => import('./pages/Press').then(m => ({ default: m.Press })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Cookies = lazy(() => import('./pages/Cookies').then(m => ({ default: m.Cookies })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#F8FAFC]">
    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      {/* Removed location and key props from Routes to stop re-triggering Suspense */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<FlightsPage />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/status" element={<FlightStatus />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<TravelGuide />} />
        <Route path="/explore/:id" element={<TravelGuide />} />
        <Route path="/guide/:id" element={<TravelGuide />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<Press />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Analytics />
        <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;