const RATES_STORAGE_KEY = 'flysava_exchange_rates';
const RATES_CACHE_TTL = 1000 * 60 * 60 * 12; // 12 hours cache
const USER_CURRENCY_KEY = 'user_currency';

// Common timezone to ISO 4217 currency mapping for high-accuracy detection
const TIMEZONE_CURRENCY_MAP: Record<string, string> = {
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
 * 1. Automatic Currency Detection
 * Priority: LocalStorage -> Timezone -> Locale -> 'USD'
 */
export function detectUserCurrency(): string {
  if (typeof window === 'undefined') return 'USD';

  // 1. Saved manual currency
  try {
    const saved = localStorage.getItem(USER_CURRENCY_KEY);
    if (saved && saved.length === 3) return saved.toUpperCase();
  } catch {}

  // 2. Timezone-based detection
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone && TIMEZONE_CURRENCY_MAP[timeZone]) {
      return TIMEZONE_CURRENCY_MAP[timeZone];
    }
  } catch {}

  // 3. Browser locale detection
  try {
    const locale = navigator.language || (navigator.languages && navigator.languages[0]);
    if (locale) {
      const region = locale.split('-')[1]?.toUpperCase();
      if (region === 'IN') return 'INR';
      if (region === 'GB') return 'GBP';
      if (region === 'JP') return 'JPY';
      if (region === 'AE') return 'AED';
      if (region === 'US') return 'USD';
      if (['FR', 'DE', 'IT', 'ES', 'NL'].includes(region)) return 'EUR';
    }
  } catch {}

  return 'USD';
}

export function saveUserCurrency(currencyCode: string): void {
  try {
    localStorage.setItem(USER_CURRENCY_KEY, currencyCode.toUpperCase());
    window.dispatchEvent(new Event('flysava_currency_changed'));
  } catch {}
}

/**
 * 2. Shared Exchange Rate Fetcher with 12-Hour Cache
 * Uses free, reliable open exchange rates (open.er-api.com)
 */
export async function getExchangeRates(): Promise<Record<string, number>> {
  if (typeof window === 'undefined') return { USD: 1 };

  // Check cached rates in localStorage
  try {
    const cachedStr = localStorage.getItem(RATES_STORAGE_KEY);
    if (cachedStr) {
      const parsed: CachedRates = JSON.parse(cachedStr);
      if (Date.now() - parsed.timestamp < RATES_CACHE_TTL && parsed.rates?.USD) {
        return parsed.rates;
      }
    }
  } catch {}

  // Fetch live rates
  try {
    const response = await fetch('https://open.er-api.com/v6/latest/USD');
    if (!response.ok) throw new Error('Exchange rate fetch failed');
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
    console.warn('Using fallback currency rates due to API error:', err);
  }

  return { USD: 1 };
}

/**
 * 3. Currency Conversion & Intl.NumberFormat Formatter
 */
export function formatDestinationPrice(
  amount: number,
  baseCurrency: string = 'USD',
  targetCurrency: string = 'USD',
  rates: Record<string, number> = { USD: 1 }
): string {
  try {
    const baseRate = rates[baseCurrency.toUpperCase()] || 1;
    const targetRate = rates[targetCurrency.toUpperCase()] || 1;

    // Convert amount to USD base then to target currency
    const amountInUSD = amount / baseRate;
    const convertedAmount = amountInUSD * targetRate;

    // Zero decimal places for high-value currencies (e.g. INR, JPY) and clean travel estimates
    const fractionDigits = ['JPY', 'KRW', 'VND', 'IDR'].includes(targetCurrency) || convertedAmount >= 100 ? 0 : 2;

    const formatter = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: targetCurrency,
      maximumFractionDigits: fractionDigits,
      minimumFractionDigits: fractionDigits,
    });

    return formatter.format(Math.round(convertedAmount));
  } catch {
    // Graceful fallback to default USD formatting if locale/currency formatting fails
    return `$${amount}`;
  }
}