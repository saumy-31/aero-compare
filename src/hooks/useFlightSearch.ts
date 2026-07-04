import { useState, useEffect } from 'react';
import type { Flight } from '../types/flight.types';
import { MOCK_FLIGHTS } from '../data/mockFlightGenerator';
import type { FilterState } from '../components/flight/FlightFilters';
import type { SortOption } from '../components/flight/SortDropdown';

interface UseFlightSearchParams {
  origin?: string | null;
  destination?: string | null;
  filters: FilterState;
  sortBy: SortOption;
}

export const useFlightSearch = ({ origin, destination, filters, sortBy }: UseFlightSearchParams) => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Simulate API network latency
    const timer = setTimeout(() => {
      let result = [...MOCK_FLIGHTS];

      // 1. Apply Route Filtering (Origin & Destination)
      if (origin) {
        result = result.filter(f => 
          f.segments[0].origin.code.toLowerCase().includes(origin.toLowerCase()) ||
          f.segments[0].origin.city.toLowerCase().includes(origin.toLowerCase())
        );
      }
      if (destination) {
        result = result.filter(f => 
          f.segments[0].destination.code.toLowerCase().includes(destination.toLowerCase()) ||
          f.segments[0].destination.city.toLowerCase().includes(destination.toLowerCase())
        );
      }

      // 2. Apply Sidebar Filters
      if (filters.stops.length > 0) {
        result = result.filter(f => {
          const stopsStr = f.stops === 0 ? 'Direct' : f.stops === 1 ? '1 Stop' : '2+ Stops';
          return filters.stops.includes(stopsStr);
        });
      }

      if (filters.airlines.length > 0) {
        result = result.filter(f => filters.airlines.includes(f.segments[0].airline));
      }

      if (filters.baggageIncluded !== null) {
        result = result.filter(f => f.baggageIncluded === filters.baggageIncluded);
      }

      result = result.filter(f => f.cheapestPrice <= filters.maxPrice);

      // 3. Apply Sorting
      result.sort((a, b) => {
        switch (sortBy) {
          case 'Cheapest':
            return a.cheapestPrice - b.cheapestPrice;
          case 'Fastest':
            return a.totalDurationMinutes - b.totalDurationMinutes;
          case 'Earliest Departure':
            return new Date(a.segments[0].departureTime).getTime() - new Date(b.segments[0].departureTime).getTime();
          case 'Latest Departure':
            return new Date(b.segments[0].departureTime).getTime() - new Date(a.segments[0].departureTime).getTime();
          case 'Best Value':
            // Custom algorithm: heavily weight price, lightly weight duration
            const scoreA = a.cheapestPrice + (a.totalDurationMinutes * 0.5);
            const scoreB = b.cheapestPrice + (b.totalDurationMinutes * 0.5);
            return scoreA - scoreB;
          default:
            return 0;
        }
      });

      setFlights(result);
      setLoading(false);
    }, 800); // 800ms mock delay to show skeleton loaders

    return () => clearTimeout(timer);
  }, [origin, destination, filters, sortBy]);

  return { flights, loading };
};