import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Filter, Sun, Mountain, Building, Wallet, Compass } from 'lucide-react';
import { MOCK_DESTINATIONS } from '../data/mockDestinations';

export const Destinations = () => {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState<string>('All');
  const [budgetFilter, setBudgetFilter] = useState<string>('All');

  const categories = [
    { name: 'All', icon: <Compass className="w-4 h-4 mr-2" /> },
    { name: 'Beach', icon: <Sun className="w-4 h-4 mr-2" /> },
    { name: 'City', icon: <Building className="w-4 h-4 mr-2" /> },
    { name: 'Adventure', icon: <Mountain className="w-4 h-4 mr-2" /> },
    { name: 'Culture', icon: <MapPin className="w-4 h-4 mr-2" /> },
  ];

  const filteredDestinations = MOCK_DESTINATIONS.filter(dest => {
    const typeMatch = activeType === 'All' || dest.tripType === activeType;
    const budgetMatch = budgetFilter === 'All' || dest.budget === budgetFilter;
    return typeMatch && budgetMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black dark:text-white mb-4 tracking-tight">Explore the World</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Not sure where to go? Browse top destinations by budget, season, or trip type and find the perfect flight.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex overflow-x-auto hide-scrollbar w-full md:w-auto space-x-2 pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveType(cat.name)}
                className={`flex items-center px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                  activeType === cat.name
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                    : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200 dark:border-dark-border'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center w-full md:w-auto bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl px-4 py-2">
            <Filter className="w-4 h-4 text-gray-400 mr-2" />
            <select 
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="bg-transparent text-sm font-bold text-gray-700 dark:text-gray-300 outline-none cursor-pointer"
            >
              <option value="All">Any Budget</option>
              <option value="Budget">Budget Friendly</option>
              <option value="Moderate">Moderate</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredDestinations.map((dest) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={dest.id}
                onClick={() => navigate(`/guide/${dest.id}`)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-dark-card shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-dark-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img 
                    src={dest.image} 
                    alt={dest.city} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-2xl font-black text-white">{dest.city}</h3>
                    <p className="text-gray-200 font-medium flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1" /> {dest.country}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900 dark:text-white flex items-center">
                    <Wallet className="w-3 h-3 mr-1 text-green-600" />
                    {dest.budget}
                  </div>
                </div>
                
                <div className="p-5">
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      From ${dest.dailyBudget} / day
                    </span>
                    <span className="text-brand-600 dark:text-brand-400 text-sm font-bold group-hover:underline">
                      View Guide &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-20">
            <Compass className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold dark:text-white mb-2">No destinations found</h3>
            <p className="text-gray-500">Try adjusting your filters to discover more places.</p>
          </div>
        )}

      </div>
    </div>
  );
};