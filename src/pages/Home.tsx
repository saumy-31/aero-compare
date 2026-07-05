import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  // Re-initialize TravelPayouts widget on mount
  useEffect(() => {
    const searchContainer = document.getElementById('tpwl-search');
    const ticketsContainer = document.getElementById('tpwl-tickets');

    // 1. Clear containers to prevent duplicate rendering attempts
    if (searchContainer) searchContainer.innerHTML = '';
    if (ticketsContainer) ticketsContainer.innerHTML = '';

    // 2. Remove old script to prevent execution block
    const oldScript = document.getElementById('tpwl-script');
    if (oldScript) oldScript.remove();

    // 3. Inject new script with a timestamp to bypass browser caching 
    const script = document.createElement('script');
    script.id = 'tpwl-script';
    script.async = true;
    script.type = 'module';
    script.src = `https://tpwgts.com/wl_web/main.js?wl_id=209&_t=${Date.now()}`;

    document.head.appendChild(script);

    // --- ENHANCED AUTO-SCROLL LOGIC ---
    // Use ResizeObserver to detect when actual results populate (height expands)
    let hasScrolledForCurrentSearch = false;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const height = entry.contentRect.height;

        // If height is massive (results loaded) and we haven't scrolled yet
        if (height > 400 && !hasScrolledForCurrentSearch) {
          // Scroll to the tickets container with a slight delay for smooth painting
          setTimeout(() => {
            ticketsContainer?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
          
          hasScrolledForCurrentSearch = true; // Lock it so filtering doesn't cause jumpiness
        } 
        // If height drops (user started a new search and widget went back to loading state)
        else if (height < 200) {
          hasScrolledForCurrentSearch = false; // Reset the lock for the next search
        }
      }
    });

    if (ticketsContainer) {
      resizeObserver.observe(ticketsContainer);
    }
    // ----------------------------------

    // 4. Clean up completely on unmount
    return () => {
      resizeObserver.disconnect();
      const scriptToRemove = document.getElementById('tpwl-script');
      if (scriptToRemove) scriptToRemove.remove();
      if (searchContainer) searchContainer.innerHTML = '';
      if (ticketsContainer) ticketsContainer.innerHTML = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#071226] transition-colors duration-200">

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-[#071226]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Compare & Book the <br/> <span className="text-brand-500">Best Flight Deals</span>
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl">
            Search 100+ travel sites at once. Find the cheapest, fastest, and best value flights globally.
          </p>
        </div>
      </div>

      {/* TravelPayouts Widget */}
      <section className="container mx-auto px-4 max-w-7xl -mt-20 relative z-20 pb-32">

        {/* Search Widget */}
        <div className="bg-white rounded-3xl shadow-2xl p-6">
          <div id="tpwl-search"></div>
        </div>

        {/* Results Widget - Hidden Until Results Load */}
        <div id="tpwl-tickets"></div>

      </section>

    </div>
  );
};