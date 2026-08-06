import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plane, Clock, AlertCircle, Terminal, DoorOpen, Sparkles, ArrowRight } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

// Explicit ambient declarations for VS Code editor
declare const window: any;
declare const fetch: any;

// --- Strict TypeScript Interfaces ---
interface AirportInfo {
  airport: string;
  iata: string;
  terminal: string | null;
  gate: string | null;
  scheduled: string;
  estimated: string;
}

interface FlightData {
  flight_status: string;
  departure: AirportInfo;
  arrival: AirportInfo;
  airline: { name: string; iata: string };
  flight: { iata: string };
}

export const FlightStatus = () => {
  const [flightNumber, setFlightNumber] = useState<string>('');
  const [flightData, setFlightData] = useState<FlightData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // --- SEO JSON-LD Structured Data ---
  const statusJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Live Flight Status Tracker | FlySava",
        "description": "Track real-time flight status, departure and arrival times, delays, and terminal information for any global flight.",
        "url": "https://flysava.com/status"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://flysava.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Flight Status",
            "item": "https://flysava.com/status"
          }
        ]
      }
    ]
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const sanitized = flightNumber.trim();
    if (!sanitized) return;

    setIsLoading(true);
    setError(null);
    setFlightData(null);

    try {
      const response = await fetch(`/api/flight-status?flight=${encodeURIComponent(sanitized)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch flight data');
      }

      setFlightData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('A network error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Date Formatting: "6 August 2026"
  const formatDate = (isoString: string) => {
    if (!isoString) return 'Not announced';
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
  };

  // Time Formatting: "10:45 AM"
  const formatTime = (isoString: string) => {
    if (!isoString) return '--:--';
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).format(date);
  };

  // Status Badge Colors (Minimal Light Theme)
  const getStatusConfig = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'active': return { label: 'Active', color: 'bg-emerald-50 text-emerald-700 border-emerald-200/80' };
      case 'scheduled': return { label: 'Scheduled', color: 'bg-blue-50 text-blue-700 border-blue-200/80' };
      case 'delayed': return { label: 'Delayed', color: 'bg-amber-50 text-amber-700 border-amber-200/80' };
      case 'cancelled': return { label: 'Cancelled', color: 'bg-rose-50 text-rose-700 border-rose-200/80' };
      case 'landed': return { label: 'Landed', color: 'bg-teal-50 text-teal-700 border-teal-200/80' };
      default: return { label: status || 'Unknown', color: 'bg-slate-100 text-slate-700 border-slate-200' };
    }
  };

  const SkeletonLoader = () => (
    <div className="bg-white rounded-[24px] border border-[#E5E7EB] shadow-2xs p-6 md:p-10 w-full animate-pulse space-y-8">
      <div className="flex justify-between items-center border-b border-[#E5E7EB] pb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-100 rounded-2xl" />
          <div className="space-y-2">
            <div className="w-20 h-3 bg-slate-100 rounded-md" />
            <div className="w-32 h-6 bg-slate-100 rounded-lg" />
          </div>
        </div>
        <div className="w-24 h-7 bg-slate-100 rounded-full" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-full md:w-1/3 space-y-3">
          <div className="w-16 h-3 bg-slate-100 rounded-md" />
          <div className="w-24 h-10 bg-slate-100 rounded-lg" />
          <div className="w-40 h-4 bg-slate-100 rounded-md" />
        </div>
        <div className="hidden md:block w-1/3 h-0.5 bg-slate-100" />
        <div className="w-full md:w-1/3 space-y-3 md:text-right flex flex-col md:items-end">
          <div className="w-16 h-3 bg-slate-100 rounded-md" />
          <div className="w-24 h-10 bg-slate-100 rounded-lg" />
          <div className="w-40 h-4 bg-slate-100 rounded-md" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SEO 
        title="Live Flight Status Tracker | FlySava"
        description="Track real-time flight status, departure and arrival times, delays, and terminal information for any global flight."
        canonicalUrl="/status"
        jsonLd={statusJsonLd}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-[#111827] font-sans pt-20 sm:pt-24 pb-20 relative overflow-hidden selection:bg-blue-100 selection:text-blue-900">
        
        {/* Soft Ambient Radial Light Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-blue-100/50 via-indigo-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Header & Search Bar Section */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-widest bg-blue-50 text-[#2563EB] border border-blue-200/60 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" /> Real-Time Telemetry
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] text-slate-900">
              Live Flight Tracker
            </h1>

            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-md mx-auto">
              Track live departure and arrival times, gate updates, terminal changes, and flight status worldwide.
            </p>

            {/* Input Form Card */}
            <form 
              onSubmit={handleSearch} 
              className="pt-4 max-w-lg mx-auto"
            >
              <div className="relative flex items-center bg-white border border-[#E5E7EB] rounded-2xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.06)] focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-blue-500/10 transition-all duration-200">
                <Search className="h-5 w-5 text-slate-400 ml-3 flex-shrink-0" />
                <input
                  type="text"
                  value={flightNumber}
                  onChange={(e: any) => setFlightNumber(e.target.value.toUpperCase())}
                  placeholder="Enter flight number (e.g. AI101)"
                  className="w-full bg-transparent px-3 py-2 text-slate-900 placeholder-slate-400 outline-none text-sm sm:text-base font-bold tracking-wider"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-[#2563EB] hover:bg-blue-700 active:bg-blue-800 text-white font-black rounded-xl transition-all shadow-md shadow-blue-600/20 text-xs sm:text-sm cursor-pointer whitespace-nowrap flex-shrink-0 active:scale-95"
                >
                  {isLoading ? 'Searching...' : 'Search Flight'}
                </button>
              </div>
            </form>
          </div>

          {/* Results Display Area */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              
              {/* Error Alert */}
              {error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="mb-8 bg-rose-50 border border-rose-200/80 text-rose-700 p-5 rounded-2xl flex items-center gap-3 text-xs sm:text-sm font-semibold shadow-2xs"
                >
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <p>{error}</p>
                </motion.div>
              )}

              {/* Skeleton Loader */}
              {isLoading && (
                <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <SkeletonLoader />
                </motion.div>
              )}

              {/* Flight Result Card */}
              {flightData && !isLoading && !error && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-[24px] border border-[#E5E7EB] shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden"
                >
                  {/* Flight Header Row */}
                  <div className="bg-slate-50/60 px-6 sm:px-8 py-5 border-b border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center font-black text-base shadow-md shadow-blue-600/20">
                        {flightData.airline?.name?.charAt(0) || <Plane className="w-5 h-5 transform -rotate-45" />}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{flightData.airline?.name || 'Unknown Airline'}</p>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{flightData.flight?.iata || flightNumber}</h2>
                      </div>
                    </div>
                    
                    <div className={`px-3.5 py-1 rounded-full border text-[11px] font-black uppercase tracking-wider shadow-2xs flex items-center ${getStatusConfig(flightData.flight_status).color}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse" />
                      {getStatusConfig(flightData.flight_status).label}
                    </div>
                  </div>

                  {/* Main Flight Path Section */}
                  <div className="p-6 sm:p-10 relative flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    {/* Departure Node */}
                    <div className="w-full md:w-1/3 text-center md:text-left z-10 space-y-1">
                      <span className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-widest block">Departure</span>
                      <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">{flightData.departure?.iata || '--'}</h3>
                      <p className="text-slate-500 font-medium text-xs leading-snug line-clamp-1">{flightData.departure?.airport || 'Unknown Airport'}</p>
                      
                      <div className="pt-3">
                        <div className="inline-block bg-slate-50 border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-left w-full sm:w-auto">
                          <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                            <Clock className="w-3 h-3 mr-1 text-slate-400" /> Scheduled
                          </span>
                          <span className="block text-base font-black text-slate-900">{formatTime(flightData.departure?.scheduled)}</span>
                          <span className="block text-[11px] text-slate-500 mt-0.5">{formatDate(flightData.departure?.scheduled)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Flight Path Connector */}
                    <div className="hidden md:flex w-1/3 relative items-center justify-center px-2">
                      <div className="absolute w-full h-[1px] border-t border-dashed border-slate-300" />
                      <div className="relative z-10 bg-white p-2 rounded-full border border-[#E5E7EB] shadow-2xs text-[#2563EB]">
                        <Plane className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                    
                    <div className="md:hidden flex flex-col items-center justify-center py-1 text-slate-300">
                      <div className="h-4 border-l border-dashed border-slate-300 mb-1" />
                      <Plane className="w-4 h-4 text-[#2563EB] rotate-180" />
                      <div className="h-4 border-l border-dashed border-slate-300 mt-1" />
                    </div>

                    {/* Arrival Node */}
                    <div className="w-full md:w-1/3 text-center md:text-right z-10 space-y-1">
                      <span className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-widest block">Arrival</span>
                      <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">{flightData.arrival?.iata || '--'}</h3>
                      <p className="text-slate-500 font-medium text-xs leading-snug line-clamp-1">{flightData.arrival?.airport || 'Unknown Airport'}</p>
                      
                      <div className="pt-3">
                        <div className="inline-block bg-slate-50 border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-left md:text-right w-full sm:w-auto">
                          <span className="flex items-center md:justify-end text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                            <Clock className="w-3 h-3 mr-1 text-slate-400" /> Estimated
                          </span>
                          <span className="block text-base font-black text-slate-900">{formatTime(flightData.arrival?.estimated || flightData.arrival?.scheduled)}</span>
                          <span className="block text-[11px] text-slate-500 mt-0.5">{formatDate(flightData.arrival?.estimated || flightData.arrival?.scheduled)}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Terminals & Gates Grid */}
                  <div className="bg-slate-50/70 border-t border-[#E5E7EB] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E5E7EB]">
                    <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-white transition-colors">
                      <Terminal className="w-4 h-4 text-slate-400 mb-1" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Dep Terminal</span>
                      <span className="text-sm font-black text-slate-900">{flightData.departure?.terminal || 'Not announced'}</span>
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-white transition-colors">
                      <DoorOpen className="w-4 h-4 text-slate-400 mb-1" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Dep Gate</span>
                      <span className="text-sm font-black text-slate-900">{flightData.departure?.gate || 'Not announced'}</span>
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-white transition-colors">
                      <Terminal className="w-4 h-4 text-slate-400 mb-1" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Arr Terminal</span>
                      <span className="text-sm font-black text-slate-900">{flightData.arrival?.terminal || 'Not announced'}</span>
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-white transition-colors">
                      <DoorOpen className="w-4 h-4 text-slate-400 mb-1" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Arr Gate</span>
                      <span className="text-sm font-black text-slate-900">{flightData.arrival?.gate || 'Not announced'}</span>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Disclaimer */}
          <div className="mt-12 text-center border-t border-[#E5E7EB] pt-6">
            <p className="text-[11px] text-slate-400 font-normal leading-relaxed max-w-lg mx-auto">
              Flight data is provided by third-party aviation telemetry systems and may change rapidly. Please verify final gate assignments directly with your airline prior to departure.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};