import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  // Load Travelpayouts Widget
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.src = 'https://tpwgts.com/wl_web/main.js?wl_id=209';

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Show results container after user interaction
  useEffect(() => {
    const handleClick = () => {
      const results = document.getElementById('results-wrapper');

      if (results) {
        results.classList.remove('hidden');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
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

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            Where to next?
          </h1>

          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
            Compare prices across hundreds of airlines and find the perfect flight for your next adventure.
          </p>
        </div>
      </div>

      {/* TravelPayouts Widget */}
      <section className="container mx-auto px-4 max-w-7xl -mt-20 relative z-20 pb-32">

        <div className="bg-white rounded-3xl shadow-2xl p-6">
          <div id="tpwl-search"></div>
        </div>

        <div
          id="results-wrapper"
          className="bg-white rounded-3xl shadow-2xl p-6 mt-8 hidden"
        >
          <div id="tpwl-tickets"></div>
        </div>

      </section>

    </div>
  );
};