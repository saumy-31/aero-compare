import { useState, useEffect } from 'react';

/**
 * A hook that delays updating a value until after a specified delay has passed.
 * Perfect for search inputs, autocomplete, and heavy filter calculations.
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent the update if the user keeps typing/interacting
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}