import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plane, Clock, AlertCircle, Terminal, DoorOpen } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

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

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    inputRef.current?.focus();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const sanitized = flightNumber.trim();
    if (!sanitized) return;

    setIsLoading(true);
    setError(null);
    setFlightData(null); // Clear old results

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

  // Date Formatting: "6 July 2026"
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

  // Status Badge Colors
  const getStatusConfig = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'active': return { label: 'Active', color: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 border-green-200 dark:border-green-500/30' };
      case 'scheduled': return { label: 'Scheduled', color: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 border-blue-200 dark:border-blue-500/30' };
      case 'delayed': return { label: 'Delayed', color: 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400 border-orange-200 dark:border-orange-500/30' };
      case 'cancelled': return { label: 'Cancelled', color: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400 border-red-200 dark:border-red-500/30' };
      case 'landed': return { label: 'Landed', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30' };
      default: return { label: status || 'Unknown', color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700' };
    }
  };

  const SkeletonLoader = () => (
    <div className="bg-white dark:bg-[#0c1a33] rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-2xl p-6 md:p-10 w-full animate-pulse">
      <div className="flex justify-between items-center border-b border-gray-100 dark:border-white/5 pb-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gray-200 dark:bg-slate-800 rounded-full" />
          <div className="w-32 h-6 bg-gray-200 dark:bg-slate-800 rounded-lg" />
        </div>
        <div className="w-24 h-8 bg-gray-200 dark:bg-slate-800 rounded-full" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        <div className="w-full md:w-1/3 space-y-3">
          <div className="w-16 h-4 bg-gray-200 dark:bg-slate-800 rounded-lg" />
          <div className="w-24 h-10 bg-gray-200 dark:bg-slate-800 rounded-lg" />
        </div>
        <div className="hidden md:block w-1/3 h-0.5 bg-gray-200 dark:bg-slate-800" />
        <div className="w-full md:w-1/3 space-y-3 md:text-right flex flex-col md:items-end">
          <div className="w-16 h-4 bg-gray-200 dark:bg-slate-800 rounded-lg" />
          <div className="w-24 h-10 bg-gray-200 dark:bg-slate-800 rounded-lg" />
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
      />

      <div className="min-h-screen bg-gray-50 dark:bg-[#071226] pt-24 pb-16 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Header & Search */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              Live Flight Tracker
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Track real-time flight status, departure and arrival times, and terminal information.
            </p>

            <form onSubmit={handleSearch} className="max-w-xl mx-auto relative flex shadow-2xl rounded-2xl group focus-within:ring-4 focus-within:ring-blue-500/20 transition-all">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                placeholder="e.g. AI101"
                className="block w-full pl-14 pr-32 py-5 bg-white dark:bg-[#0c1a33] border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-lg font-black tracking-widest transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !flightNumber.trim()}
                className="absolute right-2 top-2 bottom-2 px-8 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors disabled:opacity-50 flex items-center shadow-md"
              >
                Search
              </button>
            </form>
          </div>

          {/* Results Area */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              
              {error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="mb-8 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 p-5 rounded-2xl flex items-center gap-4 font-medium shadow-sm"
                >
                  <AlertCircle className="w-6 h-6 flex-shrink-0" />
                  <p>{error}</p>
                </motion.div>
              )}

              {isLoading && (
                <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <SkeletonLoader />
                </motion.div>
              )}

              {flightData && !isLoading && !error && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-[#0c1a33] rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden"
                >
                  {/* Header Row */}
                  <div className="bg-gray-50/50 dark:bg-slate-900/30 px-8 py-6 border-b border-gray-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-black text-xl shadow-inner border-2 border-white/20">
                        {flightData.airline?.name?.charAt(0) || <Plane className="w-6 h-6" />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{flightData.airline?.name || 'Unknown Airline'}</p>
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{flightData.flight?.iata || flightNumber}</h2>
                      </div>
                    </div>
                    
                    <div className={`px-4 py-2 rounded-full border text-sm font-black uppercase tracking-wider shadow-sm flex items-center ${getStatusConfig(flightData.flight_status).color}`}>
                      <span className="w-2 h-2 rounded-full bg-current mr-2 animate-pulse" />
                      {getStatusConfig(flightData.flight_status).label}
                    </div>
                  </div>

                  {/* Main Flight Path Section */}
                  <div className="p-8 md:p-12 relative flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    {/* Departure */}
                    <div className="w-full md:w-1/3 text-center md:text-left z-10">
                      <p className="text-sm font-bold text-blue-500 mb-2 uppercase tracking-widest">Departure</p>
                      <h3 className="text-5xl font-black text-gray-900 dark:text-white mb-2">{flightData.departure?.iata || '--'}</h3>
                      <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">{flightData.departure?.airport || 'Unknown Airport'}</p>
                      <div className="inline-block bg-gray-50 dark:bg-[#071226] border border-gray-100 dark:border-white/5 rounded-xl px-4 py-2 text-left w-full md:w-auto">
                        <span className="flex items-center text-xs font-bold text-gray-400 uppercase"><Clock className="w-3 h-3 mr-1"/> Scheduled</span>
                        <span className="block text-xl font-black text-gray-900 dark:text-white">{formatTime(flightData.departure?.scheduled)}</span>
                        <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">{formatDate(flightData.departure?.scheduled)}</span>
                      </div>
                    </div>

                    {/* Connectors */}
                    <div className="hidden md:flex w-1/3 relative items-center justify-center px-4">
                      <div className="absolute w-full h-0.5 border-t-2 border-dashed border-gray-200 dark:border-gray-700" />
                      <div className="relative z-10 bg-white dark:bg-[#0c1a33] px-2 text-blue-500">
                        <Plane className="w-8 h-8 rotate-90" />
                      </div>
                    </div>
                    <div className="md:hidden flex flex-col items-center justify-center py-4 text-gray-300 dark:text-gray-700">
                      <div className="h-8 border-l-2 border-dashed border-current mb-2" />
                      <Plane className="w-6 h-6 text-blue-500 rotate-180" />
                      <div className="h-8 border-l-2 border-dashed border-current mt-2" />
                    </div>

                    {/* Arrival */}
                    <div className="w-full md:w-1/3 text-center md:text-right z-10">
                      <p className="text-sm font-bold text-blue-500 mb-2 uppercase tracking-widest">Arrival</p>
                      <h3 className="text-5xl font-black text-gray-900 dark:text-white mb-2">{flightData.arrival?.iata || '--'}</h3>
                      <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">{flightData.arrival?.airport || 'Unknown Airport'}</p>
                      <div className="inline-block bg-gray-50 dark:bg-[#071226] border border-gray-100 dark:border-white/5 rounded-xl px-4 py-2 text-left md:text-right w-full md:w-auto">
                        <span className="flex items-center md:justify-end text-xs font-bold text-gray-400 uppercase"><Clock className="w-3 h-3 mr-1"/> Estimated</span>
                        <span className="block text-xl font-black text-gray-900 dark:text-white">{formatTime(flightData.arrival?.estimated || flightData.arrival?.scheduled)}</span>
                        <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">{formatDate(flightData.arrival?.estimated || flightData.arrival?.scheduled)}</span>
                      </div>
                    </div>

                  </div>

                  {/* Terminals and Gates */}
                  <div className="bg-blue-50/50 dark:bg-blue-900/10 border-t border-blue-100 dark:border-white/5 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-blue-100 dark:divide-white/5">
                    <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white dark:hover:bg-slate-800/50 transition-colors">
                      <Terminal className="w-5 h-5 text-gray-400 mb-2" />
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">Dep Terminal</span>
                      <span className="text-lg font-black text-gray-900 dark:text-white">{flightData.departure?.terminal || 'Not announced'}</span>
                    </div>
                    <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white dark:hover:bg-slate-800/50 transition-colors">
                      <DoorOpen className="w-5 h-5 text-gray-400 mb-2" />
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">Dep Gate</span>
                      <span className="text-lg font-black text-gray-900 dark:text-white">{flightData.departure?.gate || 'Not announced'}</span>
                    </div>
                    <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white dark:hover:bg-slate-800/50 transition-colors">
                      <Terminal className="w-5 h-5 text-gray-400 mb-2" />
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">Arr Terminal</span>
                      <span className="text-lg font-black text-gray-900 dark:text-white">{flightData.arrival?.terminal || 'Not announced'}</span>
                    </div>
                    <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-white dark:hover:bg-slate-800/50 transition-colors">
                      <DoorOpen className="w-5 h-5 text-gray-400 mb-2" />
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">Arr Gate</span>
                      <span className="text-lg font-black text-gray-900 dark:text-white">{flightData.arrival?.gate || 'Not announced'}</span>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Disclaimer */}
          <div className="mt-16 text-center border-t border-gray-200 dark:border-white/5 pt-8">
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium leading-relaxed max-w-xl mx-auto">
              Flight data is provided by third-party sources and may change. Please confirm final details directly with the airline or airport prior to your departure.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};