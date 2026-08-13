import { parseDateTime, formatCityForAutoEurope, AutoEuropeCityLocation } from '../utils/AutoEuropeUtils';

export interface AutoEuropeSearchParams {
  pickupLocation: AutoEuropeCityLocation;
  dropoffLocation?: AutoEuropeCityLocation;
  pickupDate: string;  // YYYY-MM-DD
  pickupTime: string;  // HH:MM
  dropoffDate: string; // YYYY-MM-DD
  dropoffTime: string; // HH:MM
  driverAge: number;
  differentDropoff?: boolean;
}

export const AUTO_EUROPE_AFFILIATE_ID = '73002586';
export const AUTO_EUROPE_BASE_URL = 'https://booking.autoeurope.com/';

/**
 * Builds the Auto Europe Whitelabel Deep Link according to documentation specifications:
 * - pucode / docode = 2-letter Country Code (e.g. GB, US, IT)
 * - pucity / docity = English City Name with spaces encoded as %20 (e.g. LAS%20VEGAS)
 */
export const buildAutoEuropeUrl = (params: AutoEuropeSearchParams): string => {
  const pickupDT = parseDateTime(params.pickupDate, params.pickupTime);
  const dropoffDT = parseDateTime(params.dropoffDate, params.dropoffTime);

  const puCode = params.pickupLocation.countryCode.toUpperCase();
  const puCity = formatCityForAutoEurope(params.pickupLocation.cityName);

  const dropoffLoc = params.differentDropoff && params.dropoffLocation
    ? params.dropoffLocation
    : params.pickupLocation;

  const doCode = dropoffLoc.countryCode.toUpperCase();
  const doCity = formatCityForAutoEurope(dropoffLoc.cityName);

  // Construct raw query string to ensure exact %20 encoding without double escaping
  const queryString = [
    `aff=${AUTO_EUROPE_AFFILIATE_ID}`,
    `pucode=${puCode}`,
    `pucity=${puCity}`,
    `puday=${pickupDT.day}`,
    `pumonth=${pickupDT.month}`,
    `puyear=${pickupDT.year}`,
    `putime=${pickupDT.hours}`,
    `pumin=${pickupDT.minutes}`,
    `docode=${doCode}`,
    `docity=${doCity}`,
    `doday=${dropoffDT.day}`,
    `domonth=${dropoffDT.month}`,
    `doyear=${dropoffDT.year}`,
    `dotime=${dropoffDT.hours}`,
    `domin=${dropoffDT.minutes}`,
    `driverage=${params.driverAge}`,
  ].join('&');

  return `${AUTO_EUROPE_BASE_URL}?${queryString}`;
};