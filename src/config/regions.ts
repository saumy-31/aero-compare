// src/config/regions.ts

export interface RegionConfig {
  countryCode: string;
  subdomain: string;
  wl_id: string;
}

// The default White Label ID for flysava.com (Global)
export const DEFAULT_WL_ID = '209';

// Map specific countries to their subdomains and Travelpayouts wl_ids
export const REGIONS: Record<string, RegionConfig> = {
  IN: { countryCode: 'IN', subdomain: 'in', wl_id: '20140' },
  US: { countryCode: 'US', subdomain: 'us', wl_id: '20144' }, // Replace with real US wl_id
  UK: { countryCode: 'UK', subdomain: 'uk', wl_id: '20143' }, // Replace with real UK wl_id
  AU: { countryCode: 'AU', subdomain: 'au', wl_id: '20147' }, // Replace with real AU wl_id
  AE: { countryCode: 'AE', subdomain: 'ae', wl_id: 'XXXXX' }, // Replace with real AE wl_id
  CA: { countryCode: 'CA', subdomain: 'ca', wl_id: '20146' }, // Replace with real CA wl_id
};

/**
 * Helper to get the correct wl_id based on the current hostname
 */
export const getWhiteLabelIdByHostname = (hostname: string): string => {
  // Find a matching region based on the subdomain
  const matchingRegion = Object.values(REGIONS).find(
    (region) => hostname.startsWith(`${region.subdomain}.`)
  );

  // Return the region's wl_id, or fallback to the global default
  return matchingRegion ? matchingRegion.wl_id : DEFAULT_WL_ID;
};