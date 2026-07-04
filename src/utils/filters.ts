import { Flight } from '../types/flight.types';

/**
 * Extracts a unique, alphabetically sorted list of airlines from the current flight results.
 * @param flights - Array of flight objects.
 * @returns Array of unique airline names.
 */
export const getUniqueAirlines = (flights: Flight[]): string[] => {
  const airlines = flights.map(flight => flight.segments[0].airline);
  return Array.from(new Set(airlines)).sort();
};

/**
 * Calculates the absolute minimum and maximum prices in the current flight results.
 * @param flights - Array of flight objects.
 * @returns Tuple containing [minPrice, maxPrice].
 */
export const getPriceRange = (flights: Flight[]): [number, number] => {
  if (!flights || flights.length === 0) return [0, 2000];
  
  const prices = flights.map(flight => flight.cheapestPrice);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  
  // Round max price up to nearest 50 for clean slider boundaries
  const roundedMax = Math.ceil(maxPrice / 50) * 50;
  
  return [minPrice, roundedMax];
};

/**
 * Calculates the fastest and longest flight durations in minutes.
 * @param flights - Array of flight objects.
 * @returns Tuple containing [minMinutes, maxMinutes].
 */
export const getDurationRange = (flights: Flight[]): [number, number] => {
  if (!flights || flights.length === 0) return [0, 1440];
  
  const durations = flights.map(flight => flight.totalDurationMinutes);
  return [Math.min(...durations), Math.max(...durations)];
};