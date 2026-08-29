import React from 'react';
import { 
  ArrowRight, ArrowUpRight, Heart, MapPin, 
  Palmtree, Building2, Mountain,
  Plane, Building, Car, Smartphone 
} from 'lucide-react';

export interface DestinationItem {
  id: string;
  city: string;
  country: string;
  priceUsd: string;
  image: string;
}

interface FlightDestinationsProps {
  destinations: DestinationItem[];
  onNavigate: (path: string) => void;
}

export const FlightDestinations: React.FC<FlightDestinationsProps> = ({
  destinations,
  onNavigate,
}) => {
  const handleMoodSelect = (mood: string) => {
    sessionStorage.setItem('destinations_active_style', mood);
    onNavigate('/destinations');
  };

  return (
    <>
      {/* 1. POPULAR DESTINATIONS */}
      <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-10 sm:mt-14 space-y-6">
        <div className="flex items-end justify-between border-b border-slate-200/60 pb-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
              POPULAR RIGHT NOW
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
              Explore popular flight destinations
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/destinations')}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer shrink-0"
          >
            <span>View all destinations</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible pb-2 sm:pb-0">
          {destinations.map((dest, index) => (
            <div
              key={dest.id}
              onClick={() => onNavigate(`/destinations/${dest.id}`)}
              className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between p-5"
            >
              <img
                src={dest.image}
                alt={dest.city}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                width="600"
                height="320"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />

              <div className="relative z-10 flex items-center justify-end">
                <button
                  type="button"
                  aria-label="Save to favorites"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="w-9 h-9 rounded-full bg-slate-950/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-all duration-200 cursor-pointer"
                >
                  <Heart className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <div className="relative z-10 space-y-1.5">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight leading-none group-hover:text-blue-300 transition-colors">
                    {dest.city}
                  </h3>
                  <p className="text-xs font-semibold text-slate-200 mt-1 drop-shadow-xs">
                    {dest.country}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                    From {dest.priceUsd}
                  </span>
                  <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            onClick={() => onNavigate('/destinations')}
            className="w-[50vw] sm:hidden shrink-0 snap-start h-80 rounded-3xl bg-blue-50 border-2 border-dashed border-blue-200 hover:border-blue-500 transition-all cursor-pointer flex flex-col items-center justify-center text-center p-5 group active:scale-95"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-6 h-6" />
            </div>
            <span className="text-sm font-black text-slate-900 leading-tight">
              View All
            </span>
            <span className="text-[11px] font-bold text-blue-600 mt-0.5">
              Destinations &rarr;
            </span>
          </div>
        </div>
      </section>

      {/* 2. FIND YOUR NEXT TRIP */}
      <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-14 space-y-6">
        <div className="flex items-end justify-between border-b border-slate-200/60 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
              Find your next trip
            </h2>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 block mt-1">
              Explore destinations based on how you want to travel.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => handleMoodSelect('All')}
            className="bg-white rounded-3xl border border-slate-200/80 p-5 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                Budget escapes
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Affordable destinations and smart travel ideas.
              </p>
            </div>
            <span className="text-xs font-black text-emerald-600 inline-flex items-center gap-1 pt-2 border-t border-slate-100">
              Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          <div
            onClick={() => handleMoodSelect('Beach')}
            className="bg-white rounded-3xl border border-slate-200/80 p-5 hover:border-amber-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform shrink-0">
              <Palmtree className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                Beach getaways
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Sun, beaches and relaxing escapes.
              </p>
            </div>
            <span className="text-xs font-black text-amber-500 inline-flex items-center gap-1 pt-2 border-t border-slate-100">
              Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          <div
            onClick={() => handleMoodSelect('City')}
            className="bg-white rounded-3xl border border-slate-200/80 p-5 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                City breaks
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Great cities for a short trip.
              </p>
            </div>
            <span className="text-xs font-black text-blue-600 inline-flex items-center gap-1 pt-2 border-t border-slate-100">
              Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          <div
            onClick={() => handleMoodSelect('Adventure')}
            className="bg-white rounded-3xl border border-slate-200/80 p-5 hover:border-rose-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform shrink-0">
              <Mountain className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h3 className="text-lg font-black text-slate-900 group-hover:text-rose-500 transition-colors">
                Adventure
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Mountains, nature and unforgettable experiences.
              </p>
            </div>
            <span className="text-xs font-black text-rose-500 inline-flex items-center gap-1 pt-2 border-t border-slate-100">
              Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </section>

      {/* 3. NEW SECTION: WHY FLYSAVA? (Split Composition Layout) */}
      <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[24px] sm:rounded-[36px] border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] overflow-hidden">
          
          {/* Left Panel: Branded Intro */}
          <div className="lg:w-[42%] xl:w-[40%] bg-slate-950 p-8 sm:p-12 lg:p-14 relative flex flex-col justify-center overflow-hidden">
            {/* Subtle Design Elements */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <Plane className="absolute -bottom-16 -left-12 w-80 h-80 text-white/5 -rotate-45 pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-blue-300 text-[10px] font-black uppercase tracking-widest border border-white/10">
                Why FlySava?
              </span>
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.15]">
                  Everything you need to plan your trip.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                  Flights, stays, cars, connectivity and travel inspiration — all in one place.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel: Clean Service Rows */}
          <div className="lg:w-[58%] xl:w-[60%] p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
            <div className="space-y-1">
              
              {/* Row 1: Flights */}
              {/* Row 1: Flights */}
<div 
  onClick={() => {
    window.location.href = '/flights';
  }}
  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
>
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs group-hover:shadow-md">
                    <Plane className="w-4 h-4 sm:w-5 sm:h-5 transform -rotate-45" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      Compare Flights
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      Find flight options from multiple providers.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Row 2: Hotels */}
              <div 
                onClick={() => onNavigate('/hotels')}
                className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xs group-hover:shadow-md">
                    <Building className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                      Find Hotels
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      Compare accommodation for your trip.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Row 3: Cars */}
              <div 
                onClick={() => onNavigate('/cars')}
                className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-xs group-hover:shadow-md">
                    <Car className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                      Rent a Car
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      Find car rental options at your destination.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Row 4: eSIM */}
              <div 
                onClick={() => onNavigate('/esim')}
                className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs group-hover:shadow-md">
                    <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                      Stay Connected
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      Get an eSIM for your journey.
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </div>

            </div>

            {/* Bottom CTA */}
            <div className="pt-5 mt-1 px-4 sm:px-5 border-t border-slate-100">
              <button
                type="button"
                onClick={() => onNavigate('/destinations')}
                className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 hover:text-blue-700 uppercase tracking-wider transition-colors group cursor-pointer"
              >
                <span>Explore FlySava</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};