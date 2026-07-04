/**
 * Represents the authenticated user's profile information.
 */
export interface UserProfile {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
}

/**
 * Represents a user's active price tracking alert.
 */
export interface PriceAlert {
  id: string;
  origin: string;
  destination: string;
  dates: string;
  targetPrice: number;
  currentBestPrice: number;
  active: boolean;
}

/**
 * Represents the user's global application preferences.
 */
export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  currency: string;
  language: string;
}

/**
 * Represents the complete shape of the user-related state.
 * Useful for scaling the Zustand store or integrating an external Auth provider.
 */
export interface UserState {
  profile: UserProfile | null;
  preferences: UserPreferences;
  savedFlights: string[]; // Array of Flight IDs
  compareFlights: string[]; // Array of Flight IDs (Max 4)
  priceAlerts: PriceAlert[];
}