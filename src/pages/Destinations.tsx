import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Filter, Sun, Mountain, Building, Compass, Search, 
  ChevronDown, Diamond, Sparkles, ArrowUpRight, Globe
} from 'lucide-react';
import { MOCK_DESTINATIONS } from '../data/mockDestinations';
import { SEO } from '../components/seo/SEO';

// Explicit ambient declarations for VS Code editor stability
declare const window: any;
declare const document: any;
declare const sessionStorage: any;
declare const setInterval: any;
declare const clearInterval: any;
declare const setTimeout: any;
declare const clearTimeout: any;

export const Destinations = () => {
  const navigate = useNavigate();
  
  // 1. Static keys to maintain stability across HMR
  const [activeType, setActiveType] = useState<string>(() => 
    sessionStorage.getItem('explore_type') || 'All'
  );
  const [budgetFilter, setBudgetFilter] = useState<string>(() => 
    sessionStorage.getItem('explore_budget') || 'All'
  );
  const [searchQuery, setSearchQuery] = useState<string>(() => 
    sessionStorage.getItem('explore_search') || ''
  );
  const [visibleCount, setVisibleCount] = useState<number>(() => {
    const saved = sessionStorage.getItem('explore_count');
    return saved ? parseInt(saved, 10) : 12;
  });

  // 2. Persist state
  useEffect(() => {
    sessionStorage.setItem('explore_type', activeType);
    sessionStorage.setItem('explore_budget', budgetFilter);
    sessionStorage.setItem('explore_search', searchQuery);
    sessionStorage.setItem('explore_count', visibleCount.toString());
  }, [activeType, budgetFilter, searchQuery, visibleCount]);

  // 3. Scroll Restoration
  useEffect(() => {
    const savedScroll = sessionStorage.getItem('explore_scroll');
    
    if (savedScroll) {
      const targetScroll = parseInt(savedScroll, 10);
      
      const checkAndScroll = setInterval(() => {
        if (document.documentElement.scrollHeight >= (targetScroll + window.innerHeight * 0.5)) {
          window.scrollTo({ top: targetScroll, behavior: 'instant' });
          clearInterval(checkAndScroll);
        }
      }, 50);

      setTimeout(() => clearInterval(checkAndScroll), 1000);
      
    } else {
      window.scrollTo(0, 0);
    }

    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        sessionStorage.setItem('explore_scroll', window.scrollY.toString());
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  const categories = [
    { name: 'All', icon: <Compass className="w-3.5 h-3.5 mr-1.5" /> },
    { name: 'Beach', icon: <Sun className="w-3.5 h-3.5 mr-1.5" /> },
    { name: 'City', icon: <Building className="w-3.5 h-3.5 mr-1.5" /> },
    { name: 'Adventure', icon: <Mountain className="w-3.5 h-3.5 mr-1.5" /> },
    { name: 'Culture', icon: <MapPin className="w-3.5 h-3.5 mr-1.5" /> },
    { name: 'Nature', icon: <Mountain className="w-3.5 h-3.5 mr-1.5" /> },
    { name: 'Luxury', icon: <Diamond className="w-3.5 h-3.5 mr-1.5" /> },
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

  const featuredDestination = validDestinations[0];
  const visibleDestinations = filteredDestinations.slice(0, visibleCount);
  const hasMore = visibleCount < filteredDestinations.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const destinationsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Explore Destinations Worldwide | FlySava",
    "description": "Discover curated global escapes with FlySava's luxury travel catalog.",
    "url": "https://flysava.com/destinations"
  };

  return (
    <>
      <SEO 
        title="Curated Global Escapes & Destinations | FlySava"
        description="Browse luxury travel guides, iconic escapes, and curated city guides tailored for the modern voyager."
        canonicalUrl="/destinations"
        jsonLd={destinationsJsonLd}
      />

      <div className="min-h-screen bg-[#FAFAFC] text-[#0F172A] font-sans pb-32 selection:bg-blue-100 selection:text-blue-900">
        
        {/* ================= EDITORIAL MAGAZINE HERO ================= */}
        <header className="pt-20 sm:pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-extrabold bg-blue-50/80 text-blue-600 border border-blue-200/50 uppercase tracking-widest backdrop-blur-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Issue No. 04 — Curated Escapes
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
              Where Next, <br />
              <span className="text-blue-600 font-serif italic font-normal">Wanderer?</span>
            </h1>

            <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed">
              Explore {validDestinations.length}+ handpicked global sanctuaries, vibrant metropolises, and remote coastal havens.
            </p>

            {/* Floating Glassmorphic Search Bar */}
            <div className="pt-4 max-w-lg mx-auto">
              <div className="flex items-center bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl px-5 py-3.5 shadow-xl shadow-slate-900/5 transition-all focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-600/10">
                <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                <input 
                  type="text"
                  placeholder="Search a city, sanctuary, or coastline..."
                  value={searchQuery}
                  onChange={(e: any) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(12);
                  }}
                  className="bg-transparent text-xs sm:text-sm font-semibold text-slate-900 outline-none w-full placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* FEATURED COVER STORY CAROUSEL BANNER */}
          {featuredDestination && !searchQuery && activeType === 'All' && budgetFilter === 'All' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => navigate(`/guide/${featuredDestination.id}`)}
              className="group relative h-[420px] sm:h-[500px] lg:h-[560px] rounded-[24px] overflow-hidden cursor-pointer shadow-2xl border border-slate-200/60"
            >
              <img 
                src={featuredDestination.image} 
                alt={featuredDestination.city} 
                className="absolute inset-0 w-full h-full object-cover contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent z-10" />

              <div className="absolute top-6 left-6 z-20">
                <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Featured Escape of the Month
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-white">
                <div className="max-w-xl space-y-2">
                  <span className="text-blue-300 font-extrabold uppercase text-xs tracking-widest flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {featuredDestination.country}
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                    {featuredDestination.city}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 font-normal leading-relaxed opacity-90">
                    {featuredDestination.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-2xl font-black text-xs shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all whitespace-nowrap self-start sm:self-auto">
                  Read Editorial <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          )}

        </header>

        {/* ================= MINIMALIST STICKY FILTER CONTROL ================= */}
        <div className="sticky top-20 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white/80 backdrop-blur-2xl border border-slate-200/80 rounded-2xl p-2.5 shadow-xl shadow-slate-900/5 flex flex-col sm:flex-row justify-between items-center gap-3">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => {
                    setActiveType(cat.name);
                    setVisibleCount(12);
                  }}
                  className={`flex items-center px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeType === cat.name
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            {/* Budget Selector */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
              <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest hidden sm:inline">Tier:</span>
              <div className="flex items-center bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5">
                <Filter className="w-3.5 h-3.5 text-slate-400 mr-2" />
                <select 
                  value={budgetFilter}
                  onChange={(e: any) => {
                    setBudgetFilter(e.target.value);
                    setVisibleCount(12);
                  }}
                  className="bg-transparent text-xs font-bold text-slate-800 outline-none cursor-pointer pr-1"
                >
                  <option value="All">All Tier Fares</option>
                  <option value="Budget">Budget ($)</option>
                  <option value="Moderate">Moderate ($$)</option>
                  <option value="Luxury">Luxury ($$$)</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* ================= EDITORIAL GALLERY GRID ================= */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              Displaying {visibleDestinations.length} Curated Escapes
            </h2>
          </div>

          {/* Cards Gallery */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {visibleDestinations.map((dest) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={dest.id}
                  onClick={() => navigate(`/guide/${dest.id}`)}
                  className="group cursor-pointer rounded-[24px] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/70 flex flex-col hover:-translate-y-2"
                >
                  {/* Photo Shell */}
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-100">
                    <img 
                      src={dest.image} 
                      alt={dest.city} 
                      loading="lazy"
                      onError={(e: any) => {
                        e.currentTarget.src = `https://picsum.photos/seed/${dest.id}/800/600`;
                      }}
                      className="w-full h-full object-cover contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay Mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent z-10 pointer-events-none" />

                    {/* Top Floating Glass Pills */}
                    <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-2xs">
                        {dest.tripType || 'Escape'}
                      </span>

                      <span className="bg-slate-900/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-extrabold text-white">
                        {dest.budget}
                      </span>
                    </div>

                    {/* Bottom Floating Title Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 z-20 space-y-1 text-white">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-300 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {dest.country}
                      </span>
                      <h3 className="text-2xl font-black tracking-tight group-hover:text-blue-200 transition-colors">
                        {dest.city}
                      </h3>
                    </div>
                  </div>

                  {/* Minimal Editorial Footer */}
                  <div className="p-6 flex flex-col flex-grow bg-white space-y-4">
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium">
                      {dest.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                      <div>
                        <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Est. Daily Budget</span>
                        <span className="text-sm font-black text-slate-900">
                          ${dest.dailyBudget} <span className="text-slate-400 font-normal text-xs">/ day</span>
                        </span>
                      </div>

                      <div className="w-9 h-9 rounded-xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-2xs">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Trigger */}
          {hasMore && (
            <div className="mt-16 flex justify-center">
              <button 
                type="button"
                onClick={handleLoadMore}
                className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 font-black py-4 px-9 rounded-2xl transition-all shadow-md hover:shadow-xl flex items-center text-xs cursor-pointer active:scale-95"
              >
                Discover More Escapes <ChevronDown className="w-4 h-4 ml-2 text-slate-400" />
              </button>
            </div>
          )}

          {/* Fallback View */}
          {filteredDestinations.length === 0 && (
            <div className="text-center py-24 bg-white rounded-[24px] border border-slate-200/80 shadow-2xs">
              <Compass className="w-12 h-12 text-slate-300 mx-auto mb-3 animate-bounce" />
              <h3 className="text-lg font-black text-slate-900 mb-1">No matching escapes</h3>
              <p className="text-slate-500 text-xs max-w-sm mx-auto mb-6">We couldn't find any destinations matching your active query.</p>
              <button 
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveType('All');
                  setBudgetFilter('All');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black py-3 px-7 rounded-full text-xs transition-all shadow-md shadow-blue-600/20 cursor-pointer"
              >
                Reset Filter Parameters
              </button>
            </div>
          )}

        </main>

      </div>
    </>
  );
};