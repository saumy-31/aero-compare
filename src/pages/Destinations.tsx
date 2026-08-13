import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Sun, Mountain, Building, Compass, Search, 
  ChevronDown, Diamond, Sparkles, Heart, SlidersHorizontal
} from 'lucide-react';
import { MOCK_DESTINATIONS } from '../data/mockDestinations';
import { SEO } from '../components/seo/SEO';

declare const window: any;
declare const document: any;
declare const sessionStorage: any;

export const Destinations: React.FC = () => {
  const navigate = useNavigate();
  const [savedIds, setSavedIds] = useState<string[]>([]);
  
  // Persisted state
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

  useEffect(() => {
    sessionStorage.setItem('explore_type', activeType);
    sessionStorage.setItem('explore_budget', budgetFilter);
    sessionStorage.setItem('explore_search', searchQuery);
    sessionStorage.setItem('explore_count', visibleCount.toString());
  }, [activeType, budgetFilter, searchQuery, visibleCount]);

  // Scroll Restoration
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

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSavedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { name: 'All', icon: <Compass className="w-3.5 h-3.5" /> },
    { name: 'Beach', icon: <Sun className="w-3.5 h-3.5" /> },
    { name: 'City', icon: <Building className="w-3.5 h-3.5" /> },
    { name: 'Adventure', icon: <Mountain className="w-3.5 h-3.5" /> },
    { name: 'Culture', icon: <MapPin className="w-3.5 h-3.5" /> },
    { name: 'Luxury', icon: <Diamond className="w-3.5 h-3.5" /> },
  ];

  const validDestinations = MOCK_DESTINATIONS.filter(
    dest => dest && dest.id && dest.city && dest.country
  );

  const filteredDestinations = validDestinations.filter(dest => {
    const typeMatch = activeType === 'All' || (dest.tripType && dest.tripType.toLowerCase().includes(activeType.toLowerCase()));
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
    "description": "Discover curated global escapes with FlySava's travel catalog.",
    "url": "https://flysava.com/destinations"
  };

  return (
    <>
      <SEO 
        title="Explore Destinations | FlySava"
        description="Browse travel guides, iconic escapes, and curated city guides tailored for the modern voyager."
        canonicalUrl="/destinations"
        jsonLd={destinationsJsonLd}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans pb-32 selection:bg-blue-600 selection:text-white">
        
        {/* HERO SECTION */}
        <header className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm min-h-[280px] sm:min-h-[340px] flex flex-col justify-center items-center text-center p-6 sm:p-10">
            <img 
              src={featuredDestination?.image || "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&auto=format&fit=crop"} 
              alt="Destinations Hero Background" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/25 to-slate-950/70 z-10" />

            <div className="relative z-20 max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-xs">
                <Sparkles className="w-3 h-3 text-amber-300" /> Travel Directory
              </span>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
                Where will you go next?
              </h1>

              <p className="text-slate-100 text-xs sm:text-sm font-semibold leading-relaxed max-w-md mx-auto drop-shadow-xs">
                Find your next place to explore from our handpicked global escapes.
              </p>

              <div className="pt-2 max-w-md mx-auto">
                <div className="relative flex items-center bg-white border border-slate-200/80 rounded-2xl p-1 shadow-lg focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20 transition-all">
                  <Search className="w-4 h-4 text-slate-400 ml-3 shrink-0" />
                  <input 
                    type="text"
                    placeholder="Search city or country..."
                    value={searchQuery}
                    onChange={(e: any) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(12);
                    }}
                    className="bg-transparent text-xs sm:text-sm font-bold text-slate-900 outline-none w-full px-2.5 py-2 placeholder:text-slate-400"
                  />
                  {searchQuery && (
                    <button 
                      type="button" 
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-slate-400 hover:text-slate-700 px-3 font-bold cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </header>

        {/* NON-STICKY SINGLE LINE FILTER TOOLBAR */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-2 shadow-xs flex items-center justify-between gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {/* All Category Pills + Tier Selector in ONE Horizontal Row */}
            <div className="flex items-center gap-1.5 shrink-0">
              {categories.map((cat) => {
                const isActive = activeType === cat.name;
                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => {
                      setActiveType(cat.name);
                      setVisibleCount(12);
                    }}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap select-none ${
                      isActive
                        ? 'bg-[#2563EB] text-white shadow-sm shadow-blue-600/20'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.name}</span>
                  </button>
                );
              })}

              {/* Tier Dropdown inline */}
              <div className="flex items-center bg-slate-50 border border-slate-200/80 rounded-xl px-2.5 py-1.5 shrink-0 ml-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 mr-1.5" />
                <select 
                  value={budgetFilter}
                  onChange={(e: any) => {
                    setBudgetFilter(e.target.value);
                    setVisibleCount(12);
                  }}
                  className="bg-transparent text-xs font-bold text-slate-800 outline-none cursor-pointer pr-1"
                >
                  <option value="All">All Tiers</option>
                  <option value="Budget">Budget ($)</option>
                  <option value="Moderate">Moderate ($$)</option>
                  <option value="Luxury">Luxury ($$$)</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* MAIN EDITORIAL GRID */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6 space-y-1">
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Explore Destinations
            </h2>
            <p className="text-xs text-slate-500 font-semibold">
              Find your next place to explore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence>
              {visibleDestinations.map((dest) => {
                const isSaved = savedIds.includes(dest.id);

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    key={dest.id}
                    onClick={() => navigate(`/destinations/${dest.id}`)}
                    className="group cursor-pointer rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-2xs hover:shadow-xl transition-all duration-500 relative flex flex-col justify-end h-[240px] sm:h-[280px] p-5 hover:-translate-y-1"
                  >
                    <img 
                      src={dest.image} 
                      alt={dest.city} 
                      loading="lazy"
                      onError={(e: any) => {
                        e.currentTarget.src = `https://picsum.photos/seed/${dest.id}/800/600`;
                      }}
                      className="absolute inset-0 w-full h-full object-cover brightness-[0.88] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent z-10 pointer-events-none" />

                    <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between">
                      <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-2xs">
                        {dest.tripType || 'Escape'}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => toggleSave(e, dest.id)}
                        className={`w-8 h-8 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center transition-colors cursor-pointer ${
                          isSaved ? 'bg-rose-500 text-white border-rose-400' : 'bg-slate-900/40 text-white hover:bg-white hover:text-rose-500'
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    <div className="relative z-20 space-y-0.5 text-white">
                      <span className="text-[10px] font-black uppercase tracking-wider text-blue-300 flex items-center gap-1 drop-shadow-xs">
                        <MapPin className="w-3 h-3" /> {dest.country}
                      </span>
                      
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight group-hover:text-blue-300 transition-colors">
                          {dest.city}
                        </h3>

                        <span className="text-[11px] font-black text-emerald-400 bg-slate-900/80 px-2.5 py-1 rounded-xl backdrop-blur-xs border border-white/10 shrink-0">
                          ${dest.dailyBudget || '150'}/day
                        </span>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button 
                type="button"
                onClick={handleLoadMore}
                className="bg-white border border-slate-200/90 hover:bg-slate-50 text-slate-900 font-extrabold py-3.5 px-8 rounded-2xl transition-all shadow-2xs hover:shadow-xs flex items-center text-xs cursor-pointer active:scale-95 gap-2"
              >
                <span>Load More Destinations</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          )}

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 shadow-2xs">
              <Compass className="w-10 h-10 text-slate-300 mx-auto mb-3 animate-bounce" />
              <h3 className="text-base font-black text-slate-900 mb-1">No matching escapes</h3>
              <p className="text-slate-500 text-xs max-w-sm mx-auto mb-5 font-medium">We couldn't find any destinations matching your active query.</p>
              <button 
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveType('All');
                  setBudgetFilter('All');
                }}
                className="bg-[#2563EB] hover:bg-blue-700 text-white font-extrabold py-2.5 px-5 rounded-xl text-xs transition-all shadow-sm shadow-blue-600/20 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

        </main>

      </div>
    </>
  );
};

export default Destinations;