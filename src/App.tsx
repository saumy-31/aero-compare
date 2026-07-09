import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components (Keep synchronous to prevent layout shifts)
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CookieConsent } from './components/layout/CookieConsent';
import { Analytics } from './components/seo/Analytics';

// Core Pages (Lazy-loaded for SEO Performance)
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const FlightsPage = lazy(() => import('./pages/FlightsPage').then(m => ({ default: m.FlightsPage }))); // <-- ADDED LAZY IMPORT
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Careers = lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers })));
const Destinations = lazy(() => import('./pages/Destinations').then(m => ({ default: m.Destinations })));
const FlightStatus = lazy(() => import('./pages/FlightStatus').then(m => ({ default: m.FlightStatus })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })));

// --- RESTORED MISSING PAGES ---
const TravelGuide = lazy(() => import('./pages/TravelGuide').then(m => ({ default: m.TravelGuide })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Press = lazy(() => import('./pages/Press').then(m => ({ default: m.Press })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Cookies = lazy(() => import('./pages/Cookies').then(m => ({ default: m.Cookies })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Global Loading Fallback for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-bg">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      {/* Keyed to location.pathname for reliable route transitions & scroll restoration */}
      <Routes location={location} key={location.pathname}>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<FlightsPage />} /> {/* <-- ADDED DEDICATED FLIGHTS SEO ROUTE */}
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/status" element={<FlightStatus />} />
        
        {/* Destinations & Dynamic Travel Guides */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<TravelGuide />} />
        <Route path="/explore/:id" element={<TravelGuide />} />
        <Route path="/guide/:id" element={<TravelGuide />} />
        
        {/* Blog & Dynamic Articles */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
        {/* Legal, Contact & Press Routes */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<Press />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        
        {/* Custom 404 Page */}
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
        <div className="flex flex-col min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
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