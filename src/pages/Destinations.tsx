import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Filter, Sun, Mountain, Building, Wallet, Compass, Search, ChevronDown, Diamond } from 'lucide-react';
import { MOCK_DESTINATIONS } from '../data/mockDestinations';
import { SEO } from '../components/seo/SEO';

export const Destinations = () => {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState<string>('All');
  const [budgetFilter, setBudgetFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const categories = [
    { name: 'All', icon: <Compass className="w-4 h-4 mr-2" /> },
    { name: 'Beach', icon: <Sun className="w-4 h-4 mr-2" /> },
    { name: 'City', icon: <Building className="w-4 h-4 mr-2" /> },
    { name: 'Adventure', icon: <Mountain className="w-4 h-4 mr-2" /> },
    { name: 'Culture', icon: <MapPin className="w-4 h-4 mr-2" /> },
    { name: 'Nature', icon: <Mountain className="w-4 h-4 mr-2" /> },
    { name: 'Luxury', icon: <Diamond className="w-4 h-4 mr-2" /> },
  ];

  const validDestinations = MOCK_DESTINATIONS.filter(
    dest => dest && dest.id && dest.city && dest.country && dest.budget && dest.description
  );

  const filteredDestinations = validDestinations.filter(dest => {
    const typeMatch = activeType === 'All' || dest.tripType === activeType;
    const budgetMatch = budgetFilter === 'All' || dest.budget === budgetFilter;
    
    const normalizedSearch = searchQuery.toLowerCase().trim();
    const searchMatch = !normalizedSearch || 
      dest.city.toLowerCase().includes(normalizedSearch) || 
      dest.country.toLowerCase().includes(normalizedSearch);
    
    return typeMatch && budgetMatch && searchMatch;
  });

  const visibleDestinations = filteredDestinations.slice(0, visibleCount);
  const hasMore = visibleCount < filteredDestinations.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const destinationsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Explore Destinations Worldwide | FlySava",
    "description": "Browse top global destinations by budget, season, or trip type and find the perfect flight.",
    "url": "https://flysava.com/destinations"
  };

  return (
    <>
      <SEO 
        title="Explore Destinations Worldwide | FlySava"
        description="Browse top global destinations by budget, season, or trip type and find the perfect flight for your next adventure."
        canonicalUrl="/destinations"
        jsonLd={destinationsJsonLd}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black dark:text-white mb-4 tracking-tight">Explore the World</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Browse {validDestinations.length}+ top global destinations by budget, season, or trip type and find the perfect flight.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-4">
            
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    setActiveType(cat.name);
                    setVisibleCount(12);
                  }}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                    activeType === cat.name
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200 dark:border-dark-border'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center w-full lg:w-auto gap-3">
              
              <div className="flex items-center w-full sm:w-64 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl px-4 py-2.5 transition-colors focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                <Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                <input 
                  type="text"
                  placeholder="Search city or country..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(12);
                  }}
                  className="bg-transparent text-sm font-medium text-gray-900 dark:text-white outline-none w-full placeholder:text-gray-400"
                />
              </div>

              <div className="flex items-center w-full sm:w-auto bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl px-4 py-2.5">
                <Filter className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                <select 
                  value={budgetFilter}
                  onChange={(e) => {
                    setBudgetFilter(e.target.value);
                    setVisibleCount(12);
                  }}
                  className="bg-transparent text-sm font-bold text-gray-700 dark:text-gray-300 outline-none cursor-pointer pr-4"
                >
                  <option value="All">Any Budget</option>
                  <option value="Budget">Budget Friendly</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>
              
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
              Showing {visibleDestinations.length} of {filteredDestinations.length} destinations
            </p>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {visibleDestinations.map((dest) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={dest.id}
                  onClick={() => navigate(`/guide/${dest.id}`)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-dark-card shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-dark-border flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent z-10" />
                    
                    <img 
                      src={dest.image} 
                      alt={dest.city} 
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://picsum.photos/seed/${dest.id}/800/600`;
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute bottom-4 left-4 z-20 pr-4">
                      <h3 className="text-2xl font-black text-white leading-tight">{dest.city}</h3>
                      <p className="text-gray-300 font-medium flex items-center mt-1 text-sm">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-blue-400" /> {dest.country}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 dark:text-white flex items-center shadow-sm">
                      <Wallet className={`w-3.5 h-3.5 mr-1.5 ${dest.budget === 'Budget' ? 'text-green-500' : dest.budget === 'Luxury' ? 'text-purple-500' : 'text-blue-500'}`} />
                      {dest.budget}
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 min-h-[2.5rem] mb-4 flex-grow">
                      {dest.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Est. Budget</span>
                        <span className="text-sm font-black text-gray-900 dark:text-white">
                          ${dest.dailyBudget} <span className="text-gray-500 font-medium text-xs">/ day</span>
                        </span>
                      </div>
                      <span className="bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-lg text-sm font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        Guide &rarr;
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button 
                onClick={handleLoadMore}
                className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-900 dark:text-white font-bold py-3 px-8 rounded-xl transition shadow-sm flex items-center"
              >
                Load More <ChevronDown className="w-5 h-5 ml-2 text-gray-400" />
              </button>
            </div>
          )}

          {filteredDestinations.length === 0 && (
            <div className="text-center py-24 bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm">
              <Compass className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold dark:text-white mb-2">No destinations found</h3>
              <p className="text-gray-500">We couldn't find any locations matching your filters or search.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveType('All');
                  setBudgetFilter('All');
                }}
                className="mt-6 text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
};