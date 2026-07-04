import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOCK_FLIGHTS } from '../data/mockFlightGenerator';
import { FlightCard } from '../components/flight/FlightCard';
import { FareCalendar } from '../components/flight/FareCalendar';
import { PriceTrendChart } from '../components/flight/PriceTrendChart';
import type { Flight } from '../types/flight.types';

export const Results = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [flights, setFlights] = useState<Flight[]>([]);
  
  // Create a stable baseline date for the UI (Defaulting to +14 days from now if not specified)
  const [travelDate, setTravelDate] = useState<Date>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d;
  });

  const origin = searchParams.get('origin')?.toUpperCase();
  const destination = searchParams.get('destination')?.toUpperCase();

  useEffect(() => {
    setLoading(true);
    // Simulate API network request and basic filtering
    setTimeout(() => {
      let filtered = [...MOCK_FLIGHTS];
      if (origin) filtered = filtered.filter(f => f.segments[0].origin.code.includes(origin));
      if (destination) filtered = filtered.filter(f => f.segments[0].destination.code.includes(destination));
      
      // Sort by cheapest
      filtered.sort((a, b) => a.cheapestPrice - b.cheapestPrice);
      setFlights(filtered);
      setLoading(false);
    }, 1200);
  }, [origin, destination]);

  const medianPrice = flights.length > 0 
    ? flights[Math.floor(flights.length / 2)].cheapestPrice 
    : 450; // Fallback price if no flights match

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-12">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <aside className="hidden lg:block col-span-1">
          <div className="bg-white dark:bg-dark-card p-5 rounded-xl shadow-sm border border-gray-100 dark:border-dark-border sticky top-28">
            <h3 className="font-bold text-lg mb-4 dark:text-white">Filters</h3>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">Stops</h4>
              {['Direct', '1 Stop', '2+ Stops'].map(stop => (
                <label key={stop} className="flex items-center space-x-2 mb-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-brand-500 focus:ring-brand-500 bg-gray-100 dark:bg-slate-800 border-gray-300 dark:border-gray-600" />
                  <span className="text-sm dark:text-gray-300">{stop}</span>
                </label>
              ))}
            </div>
            {/* Added Price Range Slider Placeholder */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">Price Range</h4>
              <input type="range" className="w-full accent-brand-500" min="0" max="2000" />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
                <span>$0</span>
                <span>$2,000+</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="col-span-1 lg:col-span-3">
          {/* Inject Data Insights Here */}
          {!loading && flights.length > 0 && (
            <>
              <FareCalendar 
                baseDate={travelDate} 
                basePrice={flights[0].cheapestPrice} 
                onSelectDate={setTravelDate} 
              />
              <PriceTrendChart currentPrice={flights[0].cheapestPrice} />
            </>
          )}

          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-black dark:text-white">
              {loading ? 'Searching flights...' : `${flights.length} flights found`}
            </h2>
            <select className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg px-4 py-2 text-sm font-medium outline-none dark:text-white shadow-sm">
              <option>Cheapest First</option>
              <option>Fastest First</option>
              <option>Earliest Departure</option>
            </select>
          </div>

          <div className="space-y-4">
            {loading ? (
              [1, 2, 3, 4].map(i => <div key={i} className="h-44 bg-gray-200 dark:bg-slate-800 rounded-xl animate-pulse" />)
            ) : flights.length > 0 ? (
              flights.map(flight => <FlightCard key={flight.id} flight={flight} />)
            ) : (
              <div className="text-center p-12 bg-white dark:bg-dark-card rounded-xl border border-gray-100 dark:border-dark-border">
                <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">No flights found for this route.</p>
                <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">Try adjusting your filters or searching a different date.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};