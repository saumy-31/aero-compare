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
    // 1. Remove any previously injected script to ensure a clean slate
    const existingScript = document.getElementById('tpwl-script-reinit');
    if (existingScript) {
      existingScript.remove();
    }

    // 2. Dynamically inject the script so it executes after DOM containers are ready
    const script = document.createElement("script");
    script.id = "tpwl-script-reinit";
    script.async = true;
    script.type = "module";
    script.src = "https://tpwgts.com/wl_web/main.js?wl_id=209";
    script.setAttribute('data-noptimize', '1');
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('data-wpfc-render', 'false');
    script.setAttribute('seraph-accel-crit', '1');
    script.setAttribute('data-no-defer', '1');
    
    document.body.appendChild(script);

    // 3. Cleanup script element when leaving the Home page
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
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