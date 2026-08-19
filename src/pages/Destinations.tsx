import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Compass, 
  ArrowRight, 
  ArrowUpRight, 
  Sun, 
  Mountain, 
  Building2, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown,
  ChevronUp,
  Palmtree, 
  Globe2, 
  Heart 
} from 'lucide-react';
import { MOCK_DESTINATIONS } from '../data/mockDestinations';
import { SEO } from '../components/seo/SEO';

declare const window: any;

export const Destinations: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  
  // Persist selected letter tab across back navigation
  const [selectedLetter, setSelectedLetter] = useState<string>(() => {
    return sessionStorage.getItem('destinations_selected_letter') || 'All';
  });
  
  // Persisted state so "Show More" and expanded accordions don't collapse on back navigation
  const [expandedCountry, setExpandedCountry] = useState<string | null>(() => {
    return sessionStorage.getItem('destinations_expanded_country') || null;
  });
  const [directoryVisibleCount, setDirectoryVisibleCount] = useState<number>(() => {
    const saved = sessionStorage.getItem('destinations_directory_count');
    return saved ? parseInt(saved, 10) : 16;
  });
  const [activeStyle, setActiveStyle] = useState<string>(() => {
    return sessionStorage.getItem('destinations_active_style') || 'All';
  });
  const [styleVisibleCount, setStyleVisibleCount] = useState<number>(() => {
    const saved = sessionStorage.getItem('destinations_style_count');
    return saved ? parseInt(saved, 10) : 12;
  });
  
  const [savedIds, setSavedIds] = useState<string[]>([]);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const trendingScrollRef = useRef<HTMLDivElement>(null);
  const beachScrollRef = useRef<HTMLDivElement>(null);

  // 1. Scroll Position Recording & Restoration
  useEffect(() => {
    const savedY = sessionStorage.getItem('destinations_scroll_pos');
    if (savedY) {
      const targetY = parseInt(savedY, 10);
      window.scrollTo(0, targetY);
      
      const checkAndScroll = setInterval(() => {
        if (document.documentElement.scrollHeight >= targetY) {
          window.scrollTo({ top: targetY, behavior: 'instant' });
          clearInterval(checkAndScroll);
        }
      }, 50);
      
      const timeout = setTimeout(() => clearInterval(checkAndScroll), 1200);
      return () => {
        clearInterval(checkAndScroll);
        clearTimeout(timeout);
      };
    }
  }, []);

  // Record scroll continuously with debounce
  useEffect(() => {
    let timeoutId: any;
    const handleScrollPos = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        sessionStorage.setItem('destinations_scroll_pos', window.scrollY.toString());
      }, 100);
    };

    window.addEventListener('scroll', handleScrollPos, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollPos);
      clearTimeout(timeoutId);
    };
  }, []);

  // Persist selected letter, view counts, and UI state
  useEffect(() => {
    sessionStorage.setItem('destinations_selected_letter', selectedLetter);
    sessionStorage.setItem('destinations_active_style', activeStyle);
    sessionStorage.setItem('destinations_style_count', styleVisibleCount.toString());
    sessionStorage.setItem('destinations_directory_count', directoryVisibleCount.toString());
    if (expandedCountry) {
      sessionStorage.setItem('destinations_expanded_country', expandedCountry);
    } else {
      sessionStorage.removeItem('destinations_expanded_country');
    }
  }, [selectedLetter, activeStyle, styleVisibleCount, directoryVisibleCount, expandedCountry]);

  // Navigate to destination detail after saving exact state
  const handleDestinationClick = (id: string) => {
    sessionStorage.setItem('destinations_scroll_pos', window.scrollY.toString());
    sessionStorage.setItem('destinations_selected_letter', selectedLetter);
    sessionStorage.setItem('destinations_directory_count', directoryVisibleCount.toString());
    sessionStorage.setItem('destinations_style_count', styleVisibleCount.toString());
    if (expandedCountry) {
      sessionStorage.setItem('destinations_expanded_country', expandedCountry);
    }
    navigate(`/destinations/${id}`);
  };

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSavedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleScroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleCountryExpand = (country: string) => {
    setExpandedCountry(prev => prev === country ? null : country);
  };

  // Valid master destination dataset
  const allDestinations = useMemo(() => {
    return MOCK_DESTINATIONS.filter(d => d && d.id && d.city && d.country);
  }, []);

  // Search Results
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    return allDestinations.filter(d => 
      d.city.toLowerCase().includes(query) || 
      d.country.toLowerCase().includes(query) ||
      Boolean(d.tripType && d.tripType.toLowerCase().includes(query))
    ).slice(0, 8);
  }, [searchQuery, allDestinations]);

  // Section 2: Popular Destinations
  const popularDestinations = useMemo(() => {
    return allDestinations.slice(0, 5);
  }, [allDestinations]);

  // Section 3: Trending Destinations
  const trendingDestinations = useMemo(() => {
    return allDestinations.slice(5, 11);
  }, [allDestinations]);

  // Section 4: Travel Styles Filter
  const styleCategories = [
    { label: 'All', icon: <Compass className="w-3.5 h-3.5" /> },
    { label: 'Beach', icon: <Sun className="w-3.5 h-3.5" /> },
    { label: 'City', icon: <Building2 className="w-3.5 h-3.5" /> },
    { label: 'Adventure', icon: <Mountain className="w-3.5 h-3.5" /> },
    { label: 'Culture', icon: <MapPin className="w-3.5 h-3.5" /> },
    { label: 'Luxury', icon: <Sparkles className="w-3.5 h-3.5" /> },
  ];

  const filteredByStyle = useMemo(() => {
    if (activeStyle === 'All') return allDestinations;
    return allDestinations.filter(d => 
      Boolean(d.tripType && d.tripType.toLowerCase().includes(activeStyle.toLowerCase()))
    );
  }, [activeStyle, allDestinations]);

  const visibleStyleDestinations = useMemo(() => {
    return filteredByStyle.slice(0, styleVisibleCount);
  }, [filteredByStyle, styleVisibleCount]);

  // Section 5: Budget Destinations
  const budgetDestinations = useMemo(() => {
    return allDestinations.filter(d => {
      const budgetNum = typeof d.dailyBudget === 'number' 
        ? d.dailyBudget 
        : parseInt(String(d.dailyBudget || '999').replace(/\D/g, ''), 10);
      return budgetNum <= 150 || (d.budget && d.budget.toLowerCase() === 'budget');
    }).slice(0, 4);
  }, [allDestinations]);

  // Section 6: Beach Escapes
  const beachDestinations = useMemo(() => {
    return allDestinations.filter(d => 
      Boolean(d.tripType && d.tripType.toLowerCase().includes('beach'))
    ).slice(0, 5);
  }, [allDestinations]);

  // Section 7: City Breaks
  const cityDestinations = useMemo(() => {
    return allDestinations.filter(d => 
      Boolean(d.tripType && d.tripType.toLowerCase().includes('city'))
    ).slice(0, 4);
  }, [allDestinations]);

  // Section 8: Adventure Escapes
  const adventureDestinations = useMemo(() => {
    return allDestinations.filter(d => 
      Boolean(d.tripType && d.tripType.toLowerCase().includes('adventure'))
    ).slice(0, 3);
  }, [allDestinations]);

  // Section 9: Country/City Directory with Alphabet Filter
  const { groupedDirectory, availableLetters, totalCountriesCount, totalCitiesCount } = useMemo(() => {
    const map: { [country: string]: Array<{ city: string; id: string }> } = {};
    
    allDestinations.forEach(d => {
      if (!map[d.country]) {
        map[d.country] = [];
      }
      if (!map[d.country].some(c => c.id === d.id)) {
        map[d.country].push({ city: d.city, id: d.id });
      }
    });

    const sortedEntries = Object.entries(map).sort((a, b) => a[0].localeCompare(b[0]));
    const letters = Array.from(new Set(sortedEntries.map(([country]) => country[0].toUpperCase()))).sort();
    
    const filtered = selectedLetter === 'All'
      ? sortedEntries
      : sortedEntries.filter(([country]) => country[0].toUpperCase() === selectedLetter);

    const totalCities = sortedEntries.reduce((acc, [, cities]) => acc + cities.length, 0);

    return {
      groupedDirectory: filtered,
      availableLetters: letters,
      totalCountriesCount: sortedEntries.length,
      totalCitiesCount: totalCities
    };
  }, [allDestinations, selectedLetter]);

  const visibleCountries = useMemo(() => {
    return groupedDirectory.slice(0, directoryVisibleCount);
  }, [groupedDirectory, directoryVisibleCount]);

  const destinationsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Explore Destinations & Travel Guides | FlySava",
    "description": "Discover curated global escapes, city breaks, budget getaways, and detailed travel guides with FlySava.",
    "url": "https://flysava.com/destinations"
  };

  return (
    <>
      <SEO 
        title="Explore Destinations & Travel Guides | FlySava"
        description="Discover world-class travel destinations, beach escapes, city breaks, budget trips, and complete itinerary guides with FlySava."
        canonicalUrl="/destinations"
        jsonLd={destinationsJsonLd}
      />

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO — COMPACT DESTINATION DISCOVERY                                    */}
        {/* ========================================================================= */}
        <header className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 z-30">
          <div className="relative rounded-[28px] sm:rounded-[36px] bg-slate-950 p-6 sm:p-12 text-center flex flex-col items-center justify-center min-h-[300px] sm:min-h-[360px] shadow-xl border border-slate-800">
            
            {/* Background image container */}
            <div className="absolute inset-0 rounded-[28px] sm:rounded-[36px] overflow-hidden pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
                alt="Destination Discovery Hub" 
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover brightness-[0.75] contrast-[1.08] scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-2xl w-full space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-600/90 text-white backdrop-blur-md border border-blue-400/30 shadow-xs">
                <Sparkles className="w-3 h-3 text-amber-300" /> Destination Discovery Hub
              </span>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Where will you go next?
              </h1>

              <p className="text-slate-200 text-xs sm:text-sm font-semibold max-w-md mx-auto leading-relaxed">
                Discover destinations, find travel inspiration, and explore detailed guides for your next journey.
              </p>

              {/* Prominent Search Box */}
              <div ref={searchRef} className="pt-3 w-full max-w-lg mx-auto relative">
                <div className="relative flex items-center bg-white rounded-2xl p-1.5 shadow-2xl border border-white/20 focus-within:ring-2 focus-within:ring-blue-600 transition-all">
                  <Search className="w-4 h-4 text-slate-400 ml-3.5 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Search destinations, cities, or countries..." 
                    value={searchQuery}
                    onFocus={() => setIsSearchFocused(true)}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsSearchFocused(true);
                    }}
                    className="w-full pl-3 pr-4 py-2.5 bg-transparent text-xs sm:text-sm font-bold text-slate-900 outline-none placeholder:text-slate-400"
                  />
                  {searchQuery && (
                    <button 
                      type="button" 
                      onClick={() => setSearchQuery('')}
                      className="px-3 text-xs font-bold text-slate-400 hover:text-slate-700 cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Search Dropdown with Results */}
                {isSearchFocused && searchQuery.trim().length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden z-50 text-left max-h-[380px] overflow-y-auto">
                    {searchResults.length > 0 ? (
                      <div className="p-2 space-y-1">
                        {searchResults.map((dest) => (
                          <div
                            key={dest.id}
                            onClick={() => {
                              setIsSearchFocused(false);
                              handleDestinationClick(dest.id);
                            }}
                            className="p-3 hover:bg-blue-50/80 rounded-xl cursor-pointer transition-all flex items-center justify-between group"
                          >
                            <div className="flex items-center gap-3">
                              <img 
                                src={dest.image} 
                                alt={dest.city} 
                                className="w-10 h-10 rounded-lg object-cover" 
                              />
                              <div>
                                <h4 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                                  {dest.city}
                                </h4>
                                <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-blue-500" /> {dest.country} {dest.tripType ? `• ${dest.tripType}` : ''}
                                </span>
                              </div>
                            </div>
                            <span className="text-[11px] font-black text-blue-600 inline-flex items-center gap-1">
                              Explore <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 text-center text-xs text-slate-500 font-bold">
                        No destinations found for "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* 2. POPULAR DESTINATIONS (Asymmetric Editorial Grid)                       */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-3">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block">
                ICONIC GETAWAYS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Popular destinations
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-semibold">Places travelers are exploring right now.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Primary Large Lead (7 cols) */}
            {popularDestinations[0] && (
              <article
                onClick={() => handleDestinationClick(popularDestinations[0].id)}
                className="md:col-span-7 relative bg-slate-900 rounded-[32px] overflow-hidden min-h-[340px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-9 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all cursor-pointer group select-none"
              >
                <img 
                  src={popularDestinations[0].image} 
                  alt={popularDestinations[0].city} 
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.88] contrast-[1.05]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">
                  <span className="px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-slate-900 shadow-xs">
                    {popularDestinations[0].tripType || 'Popular'}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => toggleSave(e, popularDestinations[0].id)}
                    className="w-8 h-8 rounded-full bg-slate-900/60 text-white hover:bg-white hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Heart className={`w-3.5 h-3.5 ${savedIds.includes(popularDestinations[0].id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>
                </div>

                <div className="relative z-10 space-y-2 text-white">
                  <span className="text-[11px] font-black uppercase tracking-wider text-blue-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {popularDestinations[0].country}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight group-hover:text-blue-300 transition-colors">
                    {popularDestinations[0].city}
                  </h3>
                  <p className="text-xs text-slate-200 font-medium line-clamp-2 max-w-lg">
                    {popularDestinations[0].description}
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-white/20 text-xs font-black">
                    <span className="text-emerald-300 font-black">${popularDestinations[0].dailyBudget || '150'}/day</span>
                    <span className="inline-flex items-center gap-1 text-white bg-white/20 px-3 py-1.5 rounded-xl backdrop-blur-md">
                      <span>Explore Guide</span> <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            )}

            {/* 4 Medium Secondary Cards (5 cols / 2x2 grid) */}
            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {popularDestinations.slice(1, 5).map((dest) => (
                <article
                  key={dest.id}
                  onClick={() => handleDestinationClick(dest.id)}
                  className="relative bg-slate-900 rounded-3xl overflow-hidden min-h-[190px] sm:min-h-[200px] flex flex-col justify-end p-4 border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all cursor-pointer group select-none"
                >
                  <img 
                    src={dest.image} 
                    alt={dest.city} 
                    loading="lazy" 
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.88]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  <div className="relative z-10 space-y-1 text-white">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-300 block">
                      {dest.country}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white group-hover:text-blue-300 transition-colors leading-snug">
                      {dest.city}
                    </h3>
                    <div className="pt-1.5 border-t border-white/15 flex items-center justify-between text-[11px] font-bold">
                      <span className="text-emerald-300 font-extrabold">${dest.dailyBudget || '150'}/day</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. TRENDING NOW (Horizontal Carousel)                                     */}
        {/* ========================================================================= */}
        <section className="py-8 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block">
                  REAL-TIME DISCOVERY
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Trending destinations
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleScroll(trendingScrollRef, 'left')}
                  className="w-8 h-8 rounded-full border border-slate-200 hover:border-blue-600 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all cursor-pointer"
                  aria-label="Scroll trending left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll(trendingScrollRef, 'right')}
                  className="w-8 h-8 rounded-full border border-slate-200 hover:border-blue-600 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all cursor-pointer"
                  aria-label="Scroll trending right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div 
              ref={trendingScrollRef}
              className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1"
            >
              {trendingDestinations.map((dest, i) => (
                <div
                  key={dest.id}
                  onClick={() => handleDestinationClick(dest.id)}
                  className="shrink-0 w-60 sm:w-64 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 overflow-hidden hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group select-none"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.city} 
                      loading="lazy" 
                      decoding="async" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-lg bg-slate-950/80 backdrop-blur-md text-[9px] font-black uppercase text-white">
                      #{i + 1} Trending
                    </span>
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {dest.country}
                    </span>
                    <h3 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                      {dest.city}
                    </h3>
                    <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-500 border-t border-slate-100">
                      <span>{dest.tripType || 'Popular'}</span>
                      <span className="text-blue-600 font-black inline-flex items-center gap-0.5">
                        Guide <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. TRAVEL BY STYLE                                                        */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-3">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block">
                CUSTOM EXPEDITIONS
              </span>
              <div className="flex items-baseline gap-2">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Find your kind of trip
                </h2>
                
              </div>
            </div>
            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {styleCategories.map((cat) => (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => {
                    setActiveStyle(cat.label);
                    setStyleVisibleCount(12);
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                    activeStyle === cat.label
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleStyleDestinations.map((dest) => (
              <article
                key={dest.id}
                onClick={() => handleDestinationClick(dest.id)}
                className="bg-white rounded-3xl border border-slate-200/80 p-5 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex items-center gap-4 cursor-pointer group select-none"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                  <img 
                    src={dest.image} 
                    alt={dest.city} 
                    loading="lazy" 
                    decoding="async" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 block">
                    {dest.country}
                  </span>
                  <h3 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                    {dest.city}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                    {dest.description}
                  </p>
                  <div className="pt-1 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span className="text-emerald-600 font-black">${dest.dailyBudget || '150'}/day</span>
                    <span className="text-blue-600 font-black text-[11px] inline-flex items-center gap-0.5">
                      Explore &rarr;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button for Style Section */}
          {styleVisibleCount < filteredByStyle.length && (
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={() => setStyleVisibleCount(prev => prev + 12)}
                className="px-6 py-3 bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-slate-800 font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-2xs flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>View More {activeStyle} Destinations</span>
                <ChevronDown className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* 5. BUDGET DESTINATIONS                                                    */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 block">
                  MAXIMIZE VALUE
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Travel more. Spend less.
                </h2>
              </div>
              <span className="text-xs font-bold text-slate-400">Under $150 / day</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {budgetDestinations.map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => handleDestinationClick(dest.id)}
                  className="bg-[#F8FAFC] rounded-3xl border border-slate-200/80 overflow-hidden hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group select-none"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.city} 
                      loading="lazy" 
                      decoding="async" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-xl bg-emerald-600 text-white font-black text-xs shadow-xs">
                      ${dest.dailyBudget || '95'}/day
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {dest.country}
                      </span>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {dest.city}
                      </h3>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-500">
                      <span>{dest.bestSeason || 'Apr–Oct'}</span>
                      <span className="text-emerald-600 font-black inline-flex items-center gap-1">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. BEACH DESTINATIONS                                                     */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block">
                SUN & COASTLINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Beach escapes
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll(beachScrollRef, 'left')}
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-blue-600 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all cursor-pointer"
                aria-label="Scroll beach left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll(beachScrollRef, 'right')}
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-blue-600 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all cursor-pointer"
                aria-label="Scroll beach right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div 
            ref={beachScrollRef}
            className="flex items-center gap-5 overflow-x-auto no-scrollbar scroll-smooth py-1"
          >
            {beachDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => handleDestinationClick(dest.id)}
                className="shrink-0 w-72 sm:w-80 relative bg-slate-950 rounded-[32px] overflow-hidden min-h-[300px] flex flex-col justify-end p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all cursor-pointer group select-none"
              >
                <img 
                  src={dest.image} 
                  alt={dest.city} 
                  loading="lazy" 
                  decoding="async" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.88]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                <div className="relative z-10 space-y-1.5 text-white">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-white/20 backdrop-blur-md text-[9px] font-black uppercase tracking-wider text-white">
                    <Palmtree className="w-3 h-3 text-emerald-300" /> Coastline
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-blue-300 transition-colors">
                    {dest.city}, {dest.country}
                  </h3>
                  <div className="pt-2 flex items-center justify-between text-xs font-bold border-t border-white/20">
                    <span className="text-slate-300">{dest.bestSeason || 'Summer'}</span>
                    <span className="text-white font-black inline-flex items-center gap-1">
                      View Guide &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. CITY BREAKS                                                            */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block">
                  URBAN HUBS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  City breaks
                </h2>
              </div>
              <span className="text-xs font-bold text-slate-400">Culture & Metro Exploration</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cityDestinations.map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => handleDestinationClick(dest.id)}
                  className="bg-[#F8FAFC] rounded-3xl border border-slate-200/80 p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 group select-none"
                >
                  <div className="relative h-40 rounded-2xl overflow-hidden bg-slate-100">
                    <img 
                      src={dest.image} 
                      alt={dest.city} 
                      loading="lazy" 
                      decoding="async" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {dest.country}
                    </span>
                    <h3 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      {dest.city}
                    </h3>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span>${dest.dailyBudget || '180'}/day</span>
                    <span className="text-blue-600 font-black inline-flex items-center gap-1">
                      Guide <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. ADVENTURE DESTINATIONS                                                 */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border-b border-slate-200/80 pb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 block">
              OFF THE BEATEN PATH
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Go somewhere unforgettable.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adventureDestinations.map((dest) => (
              <article
                key={dest.id}
                onClick={() => handleDestinationClick(dest.id)}
                className="relative bg-slate-950 rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[340px] flex flex-col justify-end p-6 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all cursor-pointer group select-none"
              >
                <img 
                  src={dest.image} 
                  alt={dest.city} 
                  loading="lazy" 
                  decoding="async" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                <div className="relative z-10 space-y-2 text-white">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-amber-500/90 text-slate-950 font-black text-[10px] uppercase tracking-wider">
                    <Mountain className="w-3 h-3" /> Wild Adventure
                  </div>
                  <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                    {dest.city}, {dest.country}
                  </h3>
                  <p className="text-xs text-slate-200 font-medium line-clamp-2">
                    {dest.description}
                  </p>
                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs font-black">
                    <span className="text-slate-300">{dest.bestSeason || 'Peak Season'}</span>
                    <span className="inline-flex items-center gap-1 text-white bg-white/20 px-3 py-1.5 rounded-xl backdrop-blur-md">
                      <span>Explore</span> <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. INTERACTIVE ACCORDION A–Z COUNTRY DIRECTORY                            */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100 mb-2">
                  <Globe2 className="w-3.5 h-3.5" /> Global Atlas
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Explore destinations by country
                </h2>
              </div>
              
            </div>

            {/* A–Z Filter Bar */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              <button
                type="button"
                onClick={() => {
                  setSelectedLetter('All');
                  setDirectoryVisibleCount(16);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer select-none ${
                  selectedLetter === 'All'
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                All
              </button>
              {availableLetters.map(letter => (
                <button
                  key={letter}
                  type="button"
                  onClick={() => {
                    setSelectedLetter(letter);
                    setDirectoryVisibleCount(16);
                  }}
                  className={`w-8 h-8 rounded-xl text-xs font-black transition-all cursor-pointer select-none shrink-0 flex items-center justify-center ${
                    selectedLetter === letter
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Compact Click-to-Expand Accordion Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 items-start">
              {visibleCountries.map(([country, cities]) => {
                const isExpanded = expandedCountry === country;

                return (
                  <div
                    key={country}
                    className={`rounded-2xl transition-all duration-200 border ${
                      isExpanded
                        ? 'bg-white border-blue-300 shadow-md ring-1 ring-blue-500/20'
                        : 'bg-[#F8FAFC] border-slate-200/80 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    {/* Clean Clickable Header */}
                    <button
                      type="button"
                      onClick={() => toggleCountryExpand(country)}
                      className="w-full p-4 flex items-center justify-between text-left cursor-pointer select-none group"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <Globe2 className={`w-4 h-4 shrink-0 transition-colors ${isExpanded ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`} />
                        <span className="text-xs sm:text-sm font-black text-slate-900 truncate">
                          {country}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-black text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200/60 shadow-2xs">
                          {cities.length}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-blue-600' : ''}`} />
                      </div>
                    </button>

                    {/* Expandable City Pills Container */}
                    {isExpanded && (
                      <div className="px-4 pb-4 pt-1 border-t border-slate-100/80 space-y-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block pt-1">
                          Cities & Destinations:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cities.map((c) => (
                            <button
                              key={c.id}
                              type="button"
                              onClick={() => handleDestinationClick(c.id)}
                              className="px-2.5 py-1.5 rounded-lg bg-blue-50/70 hover:bg-blue-600 hover:text-white border border-blue-100 text-slate-800 text-xs font-bold transition-all inline-flex items-center gap-1 cursor-pointer"
                            >
                              <span>{c.city}</span>
                              <ChevronRight className="w-3 h-3 opacity-60" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Show More / Show Less Button for Countries */}
            {groupedDirectory.length > 16 && (
              <div className="pt-4 flex justify-center gap-3">
                {directoryVisibleCount < groupedDirectory.length ? (
                  <button
                    type="button"
                    onClick={() => setDirectoryVisibleCount(prev => prev + 24)}
                    className="px-6 py-3 bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-slate-800 font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-2xs flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Show More Countries ({groupedDirectory.length - directoryVisibleCount} remaining)</span>
                    <ChevronDown className="w-4 h-4 text-blue-600" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setDirectoryVisibleCount(16);
                      window.scrollTo({ top: window.scrollY - 300, behavior: 'smooth' });
                    }}
                    className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-2xs flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Show Less</span>
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  </button>
                )}
              </div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. FINAL CTA                                                             */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-200">
                START PLANNING TODAY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Your next destination is waiting.
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 font-medium">
                Explore destinations, compare your options, and start planning your next journey with FlySava.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => { window.location.href = '/#tpwl-search'; }}
                className="px-7 py-3.5 rounded-2xl bg-white hover:bg-blue-50 text-blue-600 font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Search Flights
              </button>
              <button
                type="button"
                onClick={() => navigate('/blog')}
                className="px-7 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-black text-xs uppercase tracking-wider backdrop-blur-md border border-white/30 transition-all active:scale-95 cursor-pointer"
              >
                Explore Travel Guides
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Destinations;