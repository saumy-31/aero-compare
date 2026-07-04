import React from 'react';
import { Filter, Briefcase } from 'lucide-react';

export interface FilterState {
  stops: string[];
  maxPrice: number;
  airlines: string[];
  baggageIncluded: boolean | null;
}

interface FlightFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  maxAvailablePrice?: number;
  availableAirlines?: string[];
}

export const FlightFilters: React.FC<FlightFiltersProps> = ({ 
  filters, 
  setFilters, 
  maxAvailablePrice = 2000,
  availableAirlines = ['Indigo', 'Air India', 'Vistara', 'Emirates', 'Qatar Airways', 'Singapore Airlines']
}) => {

  const handleStopChange = (stop: string) => {
    setFilters(prev => ({
      ...prev,
      stops: prev.stops.includes(stop) 
        ? prev.stops.filter(s => s !== stop)
        : [...prev.stops, stop]
    }));
  };

  const handleAirlineChange = (airline: string) => {
    setFilters(prev => ({
      ...prev,
      airlines: prev.airlines.includes(airline)
        ? prev.airlines.filter(a => a !== airline)
        : [...prev.airlines, airline]
    }));
  };

  const handleClearAll = () => {
    setFilters({
      stops: [],
      maxPrice: maxAvailablePrice,
      airlines: [],
      baggageIncluded: null
    });
  };

  const activeFilterCount = filters.stops.length + filters.airlines.length + (filters.baggageIncluded !== null ? 1 : 0) + (filters.maxPrice < maxAvailablePrice ? 1 : 0);

  return (
    <div className="bg-white dark:bg-dark-card p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border sticky top-28">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-black text-lg flex items-center dark:text-white">
          <Filter className="w-5 h-5 mr-2 text-brand-500" />
          Filters
        </h3>
        {activeFilterCount > 0 && (
          <button 
            onClick={handleClearAll}
            className="text-xs font-bold text-red-500 hover:text-red-600 transition"
          >
            Clear All
          </button>
        )}
      </div>
      
      {/* Stops Filter */}
      <div className="mb-6 border-b border-gray-100 dark:border-dark-border pb-6">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Stops</h4>
        {['Direct', '1 Stop', '2+ Stops'].map(stop => (
          <label key={stop} className="flex items-center space-x-3 mb-2.5 cursor-pointer group">
            <input 
              type="checkbox" 
              checked={filters.stops.includes(stop)}
              onChange={() => handleStopChange(stop)}
              className="w-4 h-4 rounded text-brand-500 focus:ring-brand-500 bg-gray-50 dark:bg-slate-800 border-gray-300 dark:border-gray-600 cursor-pointer" 
            />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
              {stop}
            </span>
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 border-b border-gray-100 dark:border-dark-border pb-6">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white">Max Price</h4>
          <span className="text-xs font-bold text-brand-600 dark:text-brand-400">${filters.maxPrice}</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max={maxAvailablePrice} 
          step="50"
          value={filters.maxPrice}
          onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-500 dark:bg-gray-700" 
        />
        <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
          <span>$0</span>
          <span>${maxAvailablePrice}</span>
        </div>
      </div>

      {/* Airlines Filter */}
      <div className="mb-6 border-b border-gray-100 dark:border-dark-border pb-6">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Airlines</h4>
        <div className="space-y-2.5 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
          {availableAirlines.map(airline => (
            <label key={airline} className="flex items-center space-x-3 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={filters.airlines.includes(airline)}
                onChange={() => handleAirlineChange(airline)}
                className="w-4 h-4 rounded text-brand-500 focus:ring-brand-500 bg-gray-50 dark:bg-slate-800 border-gray-300 dark:border-gray-600 cursor-pointer" 
              />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {airline}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Baggage Filter */}
      <div>
        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center">
          <Briefcase className="w-4 h-4 mr-2 text-gray-400" /> Extras
        </h4>
        <label className="flex items-center space-x-3 cursor-pointer group">
          <input 
            type="checkbox" 
            checked={filters.baggageIncluded === true}
            onChange={(e) => setFilters(prev => ({ ...prev, baggageIncluded: e.target.checked ? true : null }))}
            className="w-4 h-4 rounded text-brand-500 focus:ring-brand-500 bg-gray-50 dark:bg-slate-800 border-gray-300 dark:border-gray-600 cursor-pointer" 
          />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            Checked Baggage Included
          </span>
        </label>
      </div>
    </div>
  );
};