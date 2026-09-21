import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Direct Eager Imports for Core Pages
import { Home } from '../pages/Home';
import { FlightsPage } from '../pages/FlightsPage';

// Lazy Loaded Secondary Pages
const About = lazy(() => import('../pages/About').then(m => ({ default: m.About })));
const Careers = lazy(() => import('../pages/Careers').then(m => ({ default: m.Careers })));
const Destinations = lazy(() => import('../pages/Destinations').then(m => ({ default: m.Destinations })));
const FlightStatus = lazy(() => import('../pages/FlightStatus').then(m => ({ default: m.FlightStatus })));
const Blog = lazy(() => import('../pages/Blog').then(m => ({ default: m.Blog })));
const DestinationHub = lazy(() => import('../pages/DestinationHub').then(m => ({ default: m.DestinationHub })));
const BlogPost = lazy(() => import('../pages/BlogPost').then(m => ({ default: m.BlogPost })));
const TravelGuide = lazy(() => import('../pages/TravelGuide').then(m => ({ default: m.TravelGuide })));
const Contact = lazy(() => import('../pages/Contact').then(m => ({ default: m.Contact })));
const Press = lazy(() => import('../pages/Press').then(m => ({ default: m.Press })));
const Terms = lazy(() => import('../pages/Terms').then(m => ({ default: m.Terms })));
const Privacy = lazy(() => import('../pages/Privacy').then(m => ({ default: m.Privacy })));
const Cookies = lazy(() => import('../pages/Cookies').then(m => ({ default: m.Cookies })));
const NotFound = lazy(() => import('../pages/NotFound').then(m => ({ default: m.NotFound })));
const DestinationDirectory = lazy(() => import('../pages/DestinationDirectory').then(m => ({ default: m.DestinationDirectory })));

// --- FLIGHT NAVIGATION GUARD ---
// Reloads when returning to / or /flights from any blog post, travel guide, or destination
const FlightNavigationGuard: React.FC = () => {
  const location = useLocation();
  const previousPathRef = useRef<string>(location.pathname);

  useEffect(() => {
    const currentPath = location.pathname;
    const previousPath = previousPathRef.current;

    const isFromContentRoute =
      previousPath.startsWith('/blog') || 
      previousPath.startsWith('/destinations') ||
      previousPath.startsWith('/travel-guides');

    const isFlightOrHomeRoute = 
      currentPath === '/' || 
      currentPath === '/flights';

    // If coming from any content guide back to Home or Flights, do a fresh load
    if (isFromContentRoute && isFlightOrHomeRoute) {
      window.location.replace(currentPath);
      return;
    }

    previousPathRef.current = currentPath;
  }, [location.pathname]);

  return null;
};

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#F8FAFC]">
    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <>
      <FlightNavigationGuard />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Unified Search Engine Routes Sharing the Same Hero Box Shell */}
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/hotels" element={<FlightsPage />} />
          <Route path="/cars" element={<FlightsPage />} />
          <Route path="/esim" element={<FlightsPage />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/status" element={<FlightStatus />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<TravelGuide />} />
          
          <Route path="/blog" element={<Blog />} />
          {/* Specific destination cluster route MUST be placed before generic /blog/:slug */}
          <Route path="/blog/destinations/:destinationSlug" element={<DestinationHub />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/press" element={<Press />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/blog" element={<Blog />} />
          {/* Destination Directory (Static route MUST precede dynamic :destinationSlug) */}
          <Route path="/blog/destinations" element={<DestinationDirectory />} />
          <Route path="/blog/destinations/:destinationSlug" element={<DestinationHub />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;