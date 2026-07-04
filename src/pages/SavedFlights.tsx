import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Search, Plane } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { MOCK_FLIGHTS } from '../data/mockFlightGenerator';
import { FlightCard } from '../components/flight/FlightCard';

export const SavedFlights = () => {
  const navigate = useNavigate();
  const savedFlightIds = useAppStore(state => state.savedFlights);
  
  const savedFlights = useMemo(() => {
    return savedFlightIds
      .map(id => MOCK_FLIGHTS.find(f => f.id === id))
      .filter(Boolean) as typeof MOCK_FLIGHTS;
  }, [savedFlightIds]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center mb-8">
          <Heart className="w-8 h-8 text-red-500 mr-3 fill-red-500" />
          <div>
            <h1 className="text-3xl font-black dark:text-white">Saved Flights</h1>
            <p className="text-gray-500 mt-1">You have {savedFlights.length} flight{savedFlights.length !== 1 ? 's' : ''} saved for later.</p>
          </div>
        </div>

        {savedFlights.length > 0 ? (
          <div className="space-y-4">
            {savedFlights.map(flight => (
              <FlightCard key={`saved-${flight.id}`} flight={flight} />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border p-12 text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-gray-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-10 h-10 text-gray-300 dark:text-gray-600" />
            </div>
            <h3 className="text-xl font-bold dark:text-white mb-2">No saved flights yet</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mb-6">
              Keep track of prices and compare options by saving flights while you search. They will appear right here.
            </p>
            <button 
              onClick={() => navigate('/')}
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-8 rounded-xl transition flex items-center"
            >
              <Search className="w-5 h-5 mr-2" /> Start Searching
            </button>
          </div>
        )}
      </div>
    </div>
  );
};