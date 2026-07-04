import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Wallet, CheckCircle2, Plane, ArrowLeft, Info, AlertTriangle } from 'lucide-react';
import { MOCK_DESTINATIONS } from '../data/mockDestinations';

export const TravelGuide = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const destination = useMemo(() => MOCK_DESTINATIONS.find(d => d.id === id), [id]);

  if (!destination) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center dark:text-white">
        <h1 className="text-3xl font-black mb-4">Destination Not Found</h1>
        <button onClick={() => navigate('/destinations')} className="text-brand-500 font-bold hover:underline">Return to Explorer</button>
      </div>
    );
  }

  const handleSearchFlights = () => {
    // Navigate to results page with destination airport code pre-filled
    navigate(`/results?destination=${destination.airportCode}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" />
        <img 
          src={destination.image} 
          alt={destination.city} 
          className="w-full h-full object-cover"
        />
        <button 
          onClick={() => navigate('/destinations')} 
          className="absolute top-24 left-4 md:left-8 z-20 flex items-center text-sm font-bold text-white bg-black/30 hover:bg-black/50 backdrop-blur-md px-4 py-2 rounded-full transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </button>
        <div className="absolute bottom-12 left-4 md:left-8 z-20 text-white">
          <div className="flex items-center space-x-2 mb-3">
            <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">{destination.tripType}</span>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">{destination.budget}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2">{destination.city}</h1>
          <p className="text-xl md:text-2xl text-gray-200 flex items-center font-medium">
            <MapPin className="w-6 h-6 mr-2 text-brand-400" /> {destination.country}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-dark-border">
              <h2 className="text-2xl font-black dark:text-white mb-4">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {destination.description}
              </p>
            </section>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border flex items-start">
                <Calendar className="w-8 h-8 text-brand-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold dark:text-white mb-1">Best Time to Visit</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{destination.bestSeason}</p>
                </div>
              </div>
              <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border flex items-start">
                <Wallet className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold dark:text-white mb-1">Estimated Budget</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">~${destination.dailyBudget} USD / day</p>
                </div>
              </div>
            </div>

            {/* Attractions */}
            <section className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-dark-border">
              <h2 className="text-2xl font-black dark:text-white mb-6">Popular Attractions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.attractions.map((attraction, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                    <span className="font-medium dark:text-gray-200">{attraction}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Travel Tips */}
            <section className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-dark-border">
              <h2 className="text-2xl font-black dark:text-white mb-6">Essential Travel Tips</h2>
              <ul className="space-y-4">
                {destination.travelTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start">
                    <Info className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar / CTA Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-brand-600 rounded-3xl p-8 text-white shadow-xl shadow-brand-500/20 sticky top-28">
              <div className="bg-brand-500/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-brand-400">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-black mb-2">Ready to visit {destination.city}?</h2>
              <p className="text-brand-100 mb-8">
                Compare prices from 100+ airlines and travel sites. The primary airport is <strong className="text-white">{destination.airportCode}</strong>.
              </p>
              
              <button 
                onClick={handleSearchFlights}
                className="w-full bg-white text-brand-600 hover:bg-gray-50 font-black py-4 rounded-xl transition flex justify-center items-center text-lg"
              >
                Find Flights <Plane className="w-5 h-5 ml-2" />
              </button>
              
              <p className="text-xs text-brand-200 mt-4 text-center flex items-center justify-center">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Prices vary based on season and availability.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};