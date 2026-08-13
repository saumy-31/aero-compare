import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, Clock, User, Search, ArrowRightLeft } from 'lucide-react';
import {
  AutoEuropeCityLocation,
  AUTO_EUROPE_CITIES,
  searchCities,
} from '../../utils/AutoEuropeUtils';
import { buildAutoEuropeUrl, AutoEuropeSearchParams } from '../../services/AutoEuropeService';

export const CarRentalSearch: React.FC = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextThreeDays = new Date(tomorrow);
  nextThreeDays.setDate(nextThreeDays.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  // Locations state
  const [pickupInput, setPickupInput] = useState('');
  const [selectedPickup, setSelectedPickup] = useState<AutoEuropeCityLocation | null>(AUTO_EUROPE_CITIES[0]); // Default: London (GB)
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);

  const [dropoffInput, setDropoffInput] = useState('');
  const [selectedDropoff, setSelectedDropoff] = useState<AutoEuropeCityLocation | null>(null);
  const [showDropoffDropdown, setShowDropoffDropdown] = useState(false);

  const [differentDropoff, setDifferentDropoff] = useState(false);
  const [pickupDate, setPickupDate] = useState(formatDate(tomorrow));
  const [pickupTime, setPickupTime] = useState('10:00');
  const [dropoffDate, setDropoffDate] = useState(formatDate(nextThreeDays));
  const [dropoffTime, setDropoffTime] = useState('10:00');
  const [driverAge, setDriverAge] = useState<number>(30);

  const containerRef = useRef<HTMLFormElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowPickupDropdown(false);
        setShowDropoffDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const pickupSearchResults = searchCities(pickupInput);
  const dropoffSearchResults = searchCities(dropoffInput);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPickup) {
      alert('Please select a valid pick-up city from the list.');
      return;
    }

    if (differentDropoff && !selectedDropoff) {
      alert('Please select a valid drop-off city from the list.');
      return;
    }

    const params: AutoEuropeSearchParams = {
      pickupLocation: selectedPickup,
      dropoffLocation: differentDropoff && selectedDropoff ? selectedDropoff : selectedPickup,
      pickupDate,
      pickupTime,
      dropoffDate,
      dropoffTime,
      driverAge,
      differentDropoff,
    };

    const targetUrl = buildAutoEuropeUrl(params);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSearchSubmit} ref={containerRef} className="w-full space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        
        {/* PICKUP CITY SELECTOR */}
        <div className={`relative ${differentDropoff ? 'md:col-span-3' : 'md:col-span-4'}`}>
          <div className="h-[56px] min-h-[56px] rounded-2xl bg-white border border-[#0F172A] px-4 flex items-center gap-3 transition-all duration-200 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20">
            <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500">
                Pick-up City
              </label>
              <input
                type="text"
                value={selectedPickup ? selectedPickup.displayName : pickupInput}
                onChange={(e) => {
                  setPickupInput(e.target.value);
                  setSelectedPickup(null);
                  setShowPickupDropdown(true);
                }}
                onFocus={() => setShowPickupDropdown(true)}
                placeholder="Search City (e.g. London, Rome)"
                className="w-full bg-transparent text-sm font-bold text-[#0F172A] outline-none placeholder:text-slate-400 placeholder:font-medium truncate"
                required
              />
            </div>
          </div>

          {/* Autocomplete Dropdown */}
          {showPickupDropdown && (
            <div className="absolute top-[60px] left-0 right-0 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl max-h-60 overflow-y-auto p-1">
              {(pickupSearchResults.length > 0 ? pickupSearchResults : AUTO_EUROPE_CITIES).map((city) => (
                <button
                  key={`${city.countryCode}-${city.cityName}`}
                  type="button"
                  onClick={() => {
                    setSelectedPickup(city);
                    setPickupInput(city.displayName);
                    setShowPickupDropdown(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between text-xs font-bold text-[#0F172A]"
                >
                  <span className="truncate">{city.displayName}</span>
                  <span className="ml-2 text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                    pucode={city.countryCode}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* DROPOFF CITY SELECTOR (Optional) */}
        {differentDropoff && (
          <div className="md:col-span-3 relative">
            <div className="h-[56px] min-h-[56px] rounded-2xl bg-white border border-[#0F172A] px-4 flex items-center gap-3 transition-all duration-200 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20">
              <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Drop-off City
                </label>
                <input
                  type="text"
                  value={selectedDropoff ? selectedDropoff.displayName : dropoffInput}
                  onChange={(e) => {
                    setDropoffInput(e.target.value);
                    setSelectedDropoff(null);
                    setShowDropoffDropdown(true);
                  }}
                  onFocus={() => setShowDropoffDropdown(true)}
                  placeholder="Search Drop-off City"
                  className="w-full bg-transparent text-sm font-bold text-[#0F172A] outline-none placeholder:text-slate-400 placeholder:font-medium truncate"
                  required
                />
              </div>
            </div>

            {showDropoffDropdown && (
              <div className="absolute top-[60px] left-0 right-0 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl max-h-60 overflow-y-auto p-1">
                {(dropoffSearchResults.length > 0 ? dropoffSearchResults : AUTO_EUROPE_CITIES).map((city) => (
                  <button
                    key={`dropoff-${city.countryCode}-${city.cityName}`}
                    type="button"
                    onClick={() => {
                      setSelectedDropoff(city);
                      setDropoffInput(city.displayName);
                      setShowDropoffDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between text-xs font-bold text-[#0F172A]"
                  >
                    <span className="truncate">{city.displayName}</span>
                    <span className="ml-2 text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                      docode={city.countryCode}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* DATES & TIMES */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 ${differentDropoff ? 'md:col-span-5' : 'md:col-span-5'}`}>
          <div className="h-[56px] min-h-[56px] rounded-2xl bg-white border border-[#0F172A] px-3 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <label className="block text-[9px] font-black uppercase tracking-wider text-slate-500 truncate">
                Pick Date
              </label>
              <input
                type="date"
                value={pickupDate}
                min={formatDate(today)}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-[#0F172A] outline-none cursor-pointer"
                required
              />
            </div>
          </div>

          <div className="h-[56px] min-h-[56px] rounded-2xl bg-white border border-[#0F172A] px-3 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <label className="block text-[9px] font-black uppercase tracking-wider text-slate-500 truncate">
                Time
              </label>
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-[#0F172A] outline-none cursor-pointer"
                required
              />
            </div>
          </div>

          <div className="h-[56px] min-h-[56px] rounded-2xl bg-white border border-[#0F172A] px-3 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <label className="block text-[9px] font-black uppercase tracking-wider text-slate-500 truncate">
                Drop Date
              </label>
              <input
                type="date"
                value={dropoffDate}
                min={pickupDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-[#0F172A] outline-none cursor-pointer"
                required
              />
            </div>
          </div>

          <div className="h-[56px] min-h-[56px] rounded-2xl bg-white border border-[#0F172A] px-3 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <label className="block text-[9px] font-black uppercase tracking-wider text-slate-500 truncate">
                Time
              </label>
              <input
                type="time"
                value={dropoffTime}
                onChange={(e) => setDropoffTime(e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-[#0F172A] outline-none cursor-pointer"
                required
              />
            </div>
          </div>
        </div>

        {/* DRIVER AGE */}
        <div className="md:col-span-2 relative">
          <div className="h-[56px] min-h-[56px] rounded-2xl bg-white border border-[#0F172A] px-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500">
                Driver Age
              </label>
              <select
                value={driverAge}
                onChange={(e) => setDriverAge(Number(e.target.value))}
                className="w-full bg-transparent text-sm font-bold text-[#0F172A] outline-none cursor-pointer"
              >
                {Array.from({ length: 53 }, (_, i) => i + 18).map((age) => (
                  <option key={age} value={age}>
                    {age} yrs
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* SEARCH BUTTON */}
        <div className={`w-full ${differentDropoff ? 'md:col-span-12' : 'md:col-span-1'}`}>
          <button
            type="submit"
            className="w-full h-[56px] min-h-[56px] rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base transition-all duration-200 shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 px-6"
          >
            <Search className="w-5 h-5 text-white flex-shrink-0" />
            <span className="whitespace-nowrap">Search Cars</span>
          </button>
        </div>

      </div>

      {/* FOOTER TOGGLE */}
      <div className="flex items-center gap-2 pt-1 text-xs font-bold text-slate-600">
        <button
          type="button"
          onClick={() => setDifferentDropoff(!differentDropoff)}
          className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer select-none"
        >
          <ArrowRightLeft className="w-3.5 h-3.5 text-blue-600" />
          <span>{differentDropoff ? 'Return car to same location' : 'Drop off at different location'}</span>
        </button>
      </div>
    </form>
  );
};