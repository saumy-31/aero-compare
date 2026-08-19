const RATES_STORAGE_KEY = 'flysava_exchange_rates';
const RATES_CACHE_TTL = 1000 * 60 * 60 * 12; // 12 hours
const USER_PREFERENCE_KEY = 'flysava_user_currency_preference';

// Comprehensive Country to Currency Code mapping
const REGION_CURRENCY_MAP: Record<string, string> = {
  IN: 'INR',
  US: 'USD',
  GB: 'GBP',
  UK: 'GBP',
  JP: 'JPY',
  AE: 'AED',
  CA: 'CAD',
  AU: 'AUD',
  NZ: 'NZD',
  SG: 'SGD',
  HK: 'HKD',
  TH: 'THB',
  CH: 'CHF',
  SE: 'SEK',
  NO: 'NOK',
  DK: 'DKK',
  ZA: 'ZAR',
  BR: 'BRL',
  MX: 'MXN',
  // Eurozone countries
  FR: 'EUR',
  DE: 'EUR',
  IT: 'EUR',
  ES: 'EUR',
  NL: 'EUR',
  BE: 'EUR',
  AT: 'EUR',
  IE: 'EUR',
  PT: 'EUR',
  FI: 'EUR',
  GR: 'EUR',
};

// Timezone fallback mapping for ambiguous language locales
const TIMEZONE_FALLBACK_MAP: Record<string, string> = {
  'Asia/Kolkata': 'INR',
  'Asia/Calcutta': 'INR',
  'Asia/Tokyo': 'JPY',
  'Asia/Dubai': 'AED',
  'Europe/London': 'GBP',
  'Europe/Paris': 'EUR',
  'Europe/Berlin': 'EUR',
  'Europe/Rome': 'EUR',
  'Europe/Madrid': 'EUR',
  'Europe/Amsterdam': 'EUR',
  'America/New_York': 'USD',
  'America/Chicago': 'USD',
  'America/Denver': 'USD',
  'America/Los_Angeles': 'USD',
  'America/Toronto': 'CAD',
  'America/Vancouver': 'CAD',
  'Australia/Sydney': 'AUD',
  'Australia/Melbourne': 'AUD',
  'Asia/Singapore': 'SGD',
  'Asia/Hong_Kong': 'HKD',
  'Asia/Bangkok': 'THB',
};

interface CachedRates {
  timestamp: number;
  rates: Record<string, number>;
}

/**
 * Parses browser region/locale to resolve ISO currency code
 */
function getCurrencyFromLocale(localeString: string): string | null {
  try {
    if (!localeString) return null;
    
    // Modern Intl.Locale parsing
    if (typeof Intl !== 'undefined' && (Intl as any).Locale) {
      const loc = new (Intl as any).Locale(localeString);
      const region = loc.region || loc.maximize?.().region;
      if (region && REGION_CURRENCY_MAP[region.toUpperCase()]) {
        return REGION_CURRENCY_MAP[region.toUpperCase()];
      }
    }

    // Standard string fallback (e.g. en-US -> US)
    const parts = localeString.split(/[-_]/);
    if (parts.length > 1) {
      const region = parts[parts.length - 1].toUpperCase();
      if (REGION_CURRENCY_MAP[region]) {
        return REGION_CURRENCY_MAP[region];
      }
    }
  } catch {}

  return null;
}

/**
 * Automatic Currency Detection
 * Priority: Manual Preference -> Browser Locale/Region -> Timezone Fallback -> 'USD'
 * NOTE: Automatic detection NEVER writes to localStorage.
 */
export function detectUserCurrency(): string {
  if (typeof window === 'undefined') return 'USD';

  // 1. Explicit User Manual Selection ONLY
  try {
    const manualPref = localStorage.getItem(USER_PREFERENCE_KEY);
    if (manualPref && manualPref.length === 3) {
      return manualPref.toUpperCase();
    }
  } catch {}

  // 2. Browser Locale & Region Detection (Primary Auto Source)
  try {
    const candidateLocales: string[] = [];
    if (navigator.languages && navigator.languages.length > 0) {
      candidateLocales.push(...navigator.languages);
    }
    if (navigator.language) {
      candidateLocales.push(navigator.language);
    }

    for (const loc of candidateLocales) {
      const matchedCurrency = getCurrencyFromLocale(loc);
      if (matchedCurrency) {
        return matchedCurrency;
      }
    }
  } catch {}

  // 3. Client Timezone Detection (Secondary Fallback)
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone && TIMEZONE_FALLBACK_MAP[timeZone]) {
      return TIMEZONE_FALLBACK_MAP[timeZone];
    }
  } catch {}

  // 4. Default Base Fallback
  return 'USD';
}

/**
 * Saves explicit manual user selection
 */
export function saveUserCurrency(currencyCode: string): void {
  try {
    if (!currencyCode || currencyCode.length !== 3) return;
    localStorage.setItem(USER_PREFERENCE_KEY, currencyCode.toUpperCase());
    window.dispatchEvent(new Event('flysava_currency_changed'));
  } catch {}
}

/**
 * Clears manual user currency selection, reverting to automatic browser detection
 */
export function clearUserCurrencyPreference(): void {
  try {
    localStorage.removeItem(USER_PREFERENCE_KEY);
    localStorage.removeItem('user_currency'); // Clean legacy keys
    window.dispatchEvent(new Event('flysava_currency_changed'));
  } catch {}
}

/**
 * Shared Exchange Rate Fetcher with 12-Hour Client-side Cache
 */
export async function getExchangeRates(): Promise<Record<string, number>> {
  if (typeof window === 'undefined') return { USD: 1 };

  try {
    const cachedStr = localStorage.getItem(RATES_STORAGE_KEY);
    if (cachedStr) {
      const parsed: CachedRates = JSON.parse(cachedStr);
      if (Date.now() - parsed.timestamp < RATES_CACHE_TTL && parsed.rates?.USD) {
        return parsed.rates;
      }
    }
  } catch {}

  try {
    const response = await fetch('https://open.er-api.com/v6/latest/USD');
    if (!response.ok) throw new Error('Exchange rate network failure');
    const data = await response.json();
    
    if (data && data.rates) {
      const cachePayload: CachedRates = {
        timestamp: Date.now(),
        rates: data.rates,
      };
      try {
        localStorage.setItem(RATES_STORAGE_KEY, JSON.stringify(cachePayload));
      } catch {}
      return data.rates;
    }
  } catch (err) {
    console.warn('Currency service using fallback baseline:', err);
  }

  return { USD: 1 };
}

/**
 * Formats price using native Intl.NumberFormat
 */
export function formatDestinationPrice(
  amount: number,
  baseCurrency: string = 'USD',
  targetCurrency: string = 'USD',
  rates: Record<string, number> = { USD: 1 }
): string {
  try {
    const base = baseCurrency.toUpperCase();
    const target = targetCurrency.toUpperCase();
    
    const baseRate = rates[base] || 1;
    const targetRate = rates[target] || (target === 'USD' ? 1 : null);

    // If rate unavailable, fallback to base currency formatting
    if (!targetRate) {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: base,
        maximumFractionDigits: 0,
      }).format(amount);
    }

    const amountInUSD = amount / baseRate;
    const convertedAmount = amountInUSD * targetRate;

    const noDecimalCurrencies = ['JPY', 'KRW', 'VND', 'IDR', 'CLP', 'PYG'];
    const fractionDigits = noDecimalCurrencies.includes(target) || convertedAmount >= 100 ? 0 : 2;

    const formatter = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: target,
      maximumFractionDigits: fractionDigits,
      minimumFractionDigits: fractionDigits,
    });

    return formatter.format(Math.round(convertedAmount));
  } catch {
    return `$${amount}`;
  }
}