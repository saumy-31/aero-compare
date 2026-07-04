import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PlaneTakeoff, PlaneLanding, Map, Clock, Info } from 'lucide-react';

export const FlightStatus = () => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    
    setIsSearching(true);
    setHasSearched(false);
    
    // Simulate network delay
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 1200);
  };

  // Mock progress state (65% complete)
  const progressPercent = 65;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-black dark:text-white mb-4">Live Flight Tracker</h1>
          <p className="text-gray-500 text-lg">Enter a flight number to see real-time status and gates.</p>
        </div>

        <form onSubmit={handleSearch} className="relative mb-12 shadow-xl shadow-brand-500/5 rounded-2xl">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-16 pr-32 py-5 bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-brand-500 dark:text-white uppercase transition-all"
            placeholder="e.g., AI 101 or EK 500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            disabled={isSearching}
            className="absolute inset-y-2 right-2 px-8 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-colors disabled:opacity-70"
          >
            {isSearching ? '...' : 'Track'}
          </button>
        </form>

        <AnimatePresence mode="wait">
          {hasSearched && !isSearching && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white dark:bg-dark-card rounded-3xl shadow-xl border border-gray-100 dark:border-dark-border overflow-hidden"
            >
              {/* Header */}
              <div className="bg-brand-600 p-8 text-white flex justify-between items-start relative overflow-hidden">
                <Map className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10" />
                <div>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
                    In Air • On Time
                  </div>
                  <h2 className="text-4xl font-black mb-1">{query.toUpperCase()}</h2>
                  <p className="text-brand-100 font-medium">Operated by SkyAir Airlines</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-brand-200 uppercase font-bold tracking-widest mb-1">Arriving In</p>
                  <p className="text-3xl font-black">2h 15m</p>
                </div>
              </div>

              {/* Progress & Route */}
              <div className="p-8">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-3xl font-black dark:text-white mb-1">08:30</p>
                    <p className="text-gray-500 font-bold">JFK • Terminal 4</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black dark:text-white mb-1">20:45</p>
                    <p className="text-gray-500 font-bold">LHR • Terminal 2</p>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="relative py-8">
                  <div className="h-3 bg-gray-100 dark:bg-slate-800 rounded-full w-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-brand-500 rounded-full relative"
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-white/30" />
                    </motion.div>
                  </div>
                  
                  {/* Plane Icon corresponding to progress */}
                  <motion.div 
                    initial={{ left: '0%' }}
                    animate={{ left: `${progressPercent}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-1/2 -translate-y-1/2 -ml-6 bg-white dark:bg-dark-card p-2 rounded-full border-4 border-brand-500 shadow-xl z-10"
                  >
                    <PlaneTakeoff className="w-5 h-5 text-brand-500" />
                  </motion.div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 dark:border-dark-border pt-8">
                  <div className="text-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl">
                    <Clock className="w-5 h-5 mx-auto text-gray-400 mb-2" />
                    <p className="text-xs text-gray-500 font-bold uppercase">Duration</p>
                    <p className="font-bold dark:text-white mt-1">7h 15m</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl">
                    <PlaneLanding className="w-5 h-5 mx-auto text-gray-400 mb-2" />
                    <p className="text-xs text-gray-500 font-bold uppercase">Aircraft</p>
                    <p className="font-bold dark:text-white mt-1">Boeing 777</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl">
                    <Info className="w-5 h-5 mx-auto text-gray-400 mb-2" />
                    <p className="text-xs text-gray-500 font-bold uppercase">Status</p>
                    <p className="font-bold text-green-500 mt-1">Airborne</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};