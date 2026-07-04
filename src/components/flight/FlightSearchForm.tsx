import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapPin, Calendar, Users, Search, ArrowRightLeft } from 'lucide-react';

export const FlightSearchForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Local state for form fields. We initialize destination from the URL query param if it exists!
  const [origin, setOrigin] = useState('NYC');
  const [destination, setDestination] = useState(searchParams.get('dest') || '');
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState('1');

  // If the user is already on the home page and the URL changes, sync the destination field
  useEffect(() => {
    const destParam = searchParams.get('dest');
    if (destParam) {
      setDestination(destParam);
    }
  }, [searchParams]);

  const handleSwap = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-3xl shadow-xl border border-gray-100 dark:border-dark-border p-4 sm:p-6 lg:p-8 transition-colors">
      <form onSubmit={handleSearch}>
        
        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          
          {/* Origin & Destination */}
          <div className="lg:col-span-6 relative flex flex-col md:flex-row gap-4">
            
            {/* Origin Input */}
            <div className="flex-1 relative">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">From</label>
              <div className="relative flex items-center bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-gray-700 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                <MapPin className="w-5 h-5 text-gray-400 absolute left-4" />
                <input
                  type="text"
                  placeholder="City or Airport"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full bg-transparent text-gray-900 dark:text-white font-semibold pl-12 pr-4 py-3.5 outline-none placeholder:text-gray-400 placeholder:font-medium"
                />
              </div>
            </div>

            {/* Swap Button */}
            <button
              type="button"
              onClick={handleSwap}
              className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1 z-10 items-center justify-center w-10 h-10 bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-full text-blue-500 shadow-sm hover:scale-110 transition-transform"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>

            {/* Destination Input (Prefilled from URL) */}
            <div className="flex-1 relative">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">To</label>
              <div className="relative flex items-center bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-gray-700 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                <MapPin className="w-5 h-5 text-gray-400 absolute left-4" />
                <input
                  type="text"
                  placeholder="City or Airport"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-gray-900 dark:text-white font-semibold pl-12 pr-4 py-3.5 outline-none placeholder:text-gray-400 placeholder:font-medium"
                />
              </div>
            </div>

          </div>

          {/* Dates */}
          <div className="lg:col-span-3 relative">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Departure</label>
            <div className="relative flex items-center bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-gray-700 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
              <Calendar className="w-5 h-5 text-gray-400 absolute left-4" />
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full bg-transparent text-gray-900 dark:text-white font-semibold pl-12 pr-4 py-3.5 outline-none [color-scheme:light] dark:[color-scheme:dark]"
              />
            </div>
          </div>

          {/* Passengers & Search Button */}
          <div className="lg:col-span-3 flex items-end gap-4">
            
            <div className="flex-1 relative">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Travelers</label>
              <div className="relative flex items-center bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-gray-700 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                <Users className="w-5 h-5 text-gray-400 absolute left-4" />
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full bg-transparent text-gray-900 dark:text-white font-semibold pl-12 pr-8 py-3.5 outline-none appearance-none cursor-pointer"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4+ Passengers</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold h-[52px] px-6 rounded-xl transition-colors shadow-lg shadow-blue-500/30 w-14 lg:w-auto flex-shrink-0"
              aria-label="Search Flights"
            >
              <Search className="w-5 h-5 lg:mr-2" />
              <span className="hidden lg:inline">Search</span>
            </button>

          </div>
        </div>
      </form>
    </div>
  );
};