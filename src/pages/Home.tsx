import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FlightSearchForm } from '../components/flight/FlightSearchForm';

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-200">
      
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-gray-50 dark:to-dark-bg" />
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

      <section className="container mx-auto px-4 max-w-5xl -mt-20 relative z-20 pb-20">
        <FlightSearchForm />
      </section>

    </div>
  );
};