import React from 'react';
import { FlightSearchForm } from '../components/flight/FlightSearchForm';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors">
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 to-dark-bg/90 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Compare & Book the <br/> <span className="text-brand-500">Best Flight Deals</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl">
            Search 100+ travel sites at once. Find the cheapest, fastest, and best value flights globally.
          </p>
          <FlightSearchForm />
        </div>
      </div>
    </div>
  );
};