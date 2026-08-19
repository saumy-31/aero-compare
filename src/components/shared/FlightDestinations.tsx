import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Heart } from 'lucide-react';
import { 
  detectUserCurrency, 
  getExchangeRates, 
  formatDestinationPrice 
} from '../../services/currencyService';

export interface DestinationItem {
  id: string;
  city: string;
  country: string;
  price: number;
  currency: string;
  priceUsd?: string; // Legacy fallback support
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
  const [targetCurrency, setTargetCurrency] = useState<string>(() => detectUserCurrency());
  const [rates, setRates] = useState<Record<string, number>>({ USD: 1 });

  useEffect(() => {
    let isMounted = true;

    // Fetch shared rates once
    getExchangeRates().then((fetchedRates) => {
      if (isMounted) {
        setRates(fetchedRates);
      }
    });

    // Listen for manual currency changes across tabs/windows
    const handleCurrencyChange = () => {
      setTargetCurrency(detectUserCurrency());
    };

    window.addEventListener('flysava_currency_changed', handleCurrencyChange);
    window.addEventListener('storage', handleCurrencyChange);

    return () => {
      isMounted = false;
      window.removeEventListener('flysava_currency_changed', handleCurrencyChange);
      window.removeEventListener('storage', handleCurrencyChange);
    };
  }, []);

  return (
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
        {destinations.map((dest, index) => {
          const displayPrice = formatDestinationPrice(
            dest.price || (dest.priceUsd ? parseFloat(dest.priceUsd.replace(/\D/g, '')) : 100),
            dest.currency || 'USD',
            targetCurrency,
            rates
          );

          return (
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
                    From {displayPrice}
                  </span>
                  <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

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
  );
};