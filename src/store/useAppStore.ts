import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  theme: 'light' | 'dark';
  currency: string;
  savedFlights: string[];
  priceAlerts: string[];
  compareList: string[];

  setTheme: (theme: 'light' | 'dark') => void;
  toggleSavedFlight: (flightId: string) => void;
  toggleCompareFlight: (flightId: string) => void;
  clearCompareList: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      currency: 'USD',
      savedFlights: [],
      priceAlerts: [],
      compareList: [],

      setTheme: (theme: 'light' | 'dark') =>
        set({ theme }),

      toggleSavedFlight: (id: string) =>
        set((state: AppState) => ({
          savedFlights: state.savedFlights.includes(id)
            ? state.savedFlights.filter((f: string) => f !== id)
            : [...state.savedFlights, id],
        })),

      toggleCompareFlight: (id: string) =>
        set((state: AppState) => {
          const exists = state.compareList.includes(id);

          if (exists) {
            return {
              compareList: state.compareList.filter(
                (f: string) => f !== id
              ),
            };
          }

          if (state.compareList.length >= 4) {
            return {};
          }

          return {
            compareList: [...state.compareList, id],
          };
        }),

      clearCompareList: () =>
        set({ compareList: [] }),
    }),
    {
      name: 'aerocompare-store',
    }
  )
);