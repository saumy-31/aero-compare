/**
 * Formats a raw number into a localized currency string.
 * @param amount - The price amount.
 * @param currencyCode - The ISO currency code (default: USD).
 * @returns Formatted currency string (e.g., "$450").
 */
export const formatCurrency = (amount: number, currencyCode: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Formats total minutes into a readable hour/minute string.
 * @param totalMinutes - Total duration in minutes.
 * @returns Formatted duration string (e.g., "2h 45m").
 */
export const formatDuration = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
};

/**
 * Formats an ISO date string into a readable time.
 * @param isoString - The ISO date string.
 * @returns Formatted time string (e.g., "08:30 AM").
 */
export const formatTime = (isoString: string): string => {
  return new Date(isoString).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Formats an ISO date string into a readable date.
 * @param isoString - The ISO date string.
 * @returns Formatted date string (e.g., "Mon, Oct 12").
 */
export const formatDate = (isoString: string): string => {
  return new Date(isoString).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};