import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Wallet, CheckCircle, Plane, ArrowLeft, Star } from 'lucide-react';
import { MOCK_DESTINATIONS } from '../data/mockDestinations';

export const TravelGuide = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const destination = MOCK_DESTINATIONS.find(d => d.id === id);

  // Always scroll to top when opening a new guide
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center dark:bg-dark-bg">
        <h2 className="text-2xl font-bold dark:text-white mb-4">Destination not found</h2>
        <button onClick={() => navigate('/destinations')} className="text-blue-500 hover:underline">
          &larr; Back to Explore
        </button>
      </div>
    );
  }

  // The Fixed Button Handler: Navigates cleanly to the root path without anchor jumps
  const handleFindFlights = () => {
  navigate('/');

  setTimeout(() => {
    const searchWidget = document.getElementById('tpwl-search');

    if (searchWidget) {
      searchWidget.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, 500);
};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pb-24">
      
      {/* Hero Image Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" />
        <img 
          src={destination.image} 
          alt={destination.city} 
          className="w-full h-full object-cover"
        />
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 z-20 flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl text-white font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back
        </button>

        <div className="absolute bottom-0 left-0 right-0 z-20 container mx-auto px-6 pb-12 max-w-5xl">
          <div className="flex items-center text-blue-400 font-bold mb-3 tracking-wide uppercase text-sm">
            <MapPin className="w-4 h-4 mr-1.5" /> {destination.country}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            {destination.city}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl font-medium leading-relaxed">
            {destination.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm">
              <Calendar className="w-6 h-6 text-blue-500 mb-3" />
              <div className="text-sm text-gray-500 mb-1">Best Season</div>
              <div className="font-bold dark:text-white">{destination.bestSeason}</div>
            </div>
            <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm">
              <Wallet className="w-6 h-6 text-green-500 mb-3" />
              <div className="text-sm text-gray-500 mb-1">Daily Budget</div>
              <div className="font-bold dark:text-white">${destination.dailyBudget} USD</div>
            </div>
            <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm hidden md:block">
              <Star className="w-6 h-6 text-purple-500 mb-3" />
              <div className="text-sm text-gray-500 mb-1">Trip Style</div>
              <div className="font-bold dark:text-white">{destination.tripType}</div>
            </div>
          </div>

          {/* Attractions */}
          <section>
            <h2 className="text-2xl font-black dark:text-white mb-6">Top Attractions</h2>
            <div className="space-y-3">
              {destination.attractions.map((attraction, i) => (
                <div key={i} className="flex items-center p-4 bg-white dark:bg-dark-card rounded-xl border border-gray-100 dark:border-dark-border shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-4 flex-shrink-0" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{attraction}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Travel Tips */}
          <section>
            <h2 className="text-2xl font-black dark:text-white mb-6">Local Travel Tips</h2>
            <div className="bg-blue-50 dark:bg-blue-500/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-500/20">
              <ul className="space-y-4">
                {destination.travelTips.map((tip, i) => (
                  <li key={i} className="flex items-start text-blue-900 dark:text-blue-100 font-medium">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

        {/* Right Column: Sticky Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white dark:bg-dark-card rounded-3xl p-6 border border-gray-100 dark:border-dark-border shadow-xl shadow-gray-200/50 dark:shadow-none">
            <h3 className="text-xl font-black dark:text-white mb-2">Ready to explore?</h3>
            <p className="text-gray-500 text-sm mb-8">Search for the best flight deals to {destination.city} right now.</p>
            
            <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-4 mb-6">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Destination Airport</div>
              <div className="text-2xl font-black text-blue-600 dark:text-blue-400 flex items-center">
                <Plane className="w-6 h-6 mr-2" />
                {destination.airportCode}
              </div>
            </div>

            <button 
              onClick={handleFindFlights}
              className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/30"
            >
              Find Flights <ArrowLeft className="w-5 h-5 ml-2 rotate-135" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};