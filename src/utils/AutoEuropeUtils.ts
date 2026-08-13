export interface AutoEuropeCityLocation {
  cityName: string;    // English city name (e.g., "LONDON", "NEW YORK")
  countryCode: string; // 2-letter ISO country code (e.g., "GB", "US")
  displayName: string; // Display label for UI dropdown/autocomplete
}

export interface ParsedDateTime {
  day: string;
  month: string;
  year: string;
  hours: string;
  minutes: string;
}

// Popular Auto Europe Location Dictionary with explicit 2-letter Country Codes
export const AUTO_EUROPE_CITIES: AutoEuropeCityLocation[] = [
  { cityName: 'LONDON', countryCode: 'GB', displayName: 'London, United Kingdom (GB)' },
  { cityName: 'MANCHESTER', countryCode: 'GB', displayName: 'Manchester, United Kingdom (GB)' },
  { cityName: 'NEW YORK', countryCode: 'US', displayName: 'New York, United States (US)' },
  { cityName: 'LAS VEGAS', countryCode: 'US', displayName: 'Las Vegas, United States (US)' },
  { cityName: 'LOS ANGELES', countryCode: 'US', displayName: 'Los Angeles, United States (US)' },
  { cityName: 'ROME', countryCode: 'IT', displayName: 'Rome, Italy (IT)' },
  { cityName: 'MILAN', countryCode: 'IT', displayName: 'Milan, Italy (IT)' },
  { cityName: 'PARIS', countryCode: 'FR', displayName: 'Paris, France (FR)' },
  { cityName: 'MUNICH', countryCode: 'DE', displayName: 'Munich, Germany (DE)' },
  { cityName: 'FRANKFURT', countryCode: 'DE', displayName: 'Frankfurt, Germany (DE)' },
  { cityName: 'DUBAI', countryCode: 'AE', displayName: 'Dubai, United Arab Emirates (AE)' },
];

/**
 * Searches the location dictionary for a matching city/country
 */
export const searchCities = (query: string): AutoEuropeCityLocation[] => {
  const cleanQuery = query.trim().toUpperCase();
  if (!cleanQuery) return [];

  return AUTO_EUROPE_CITIES.filter(
    (c) =>
      c.cityName.includes(cleanQuery) ||
      c.displayName.toUpperCase().includes(cleanQuery) ||
      c.countryCode === cleanQuery
  );
};

/**
 * Parses YYYY-MM-DD date and HH:MM time strings into Auto Europe parameter formats
 */
export const parseDateTime = (dateStr: string, timeStr: string): ParsedDateTime => {
  const [year, month, day] = dateStr.split('-');
  const [hours, minutes] = timeStr.split(':');

  return {
    day: day ? day.padStart(2, '0') : '01',
    month: month ? month.padStart(2, '0') : '01',
    year: year || new Date().getFullYear().toString(),
    hours: hours ? hours.padStart(2, '0') : '10',
    minutes: minutes ? minutes.padStart(2, '0') : '00',
  };
};

/**
 * Encodes city names per Auto Europe specification (Spaces replaced by %20)
 */
export const formatCityForAutoEurope = (city: string): string => {
  return city
    .trim()
    .toUpperCase()
    .replace(/\s+/g, '%20');
};