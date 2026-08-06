import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HotelSearchWidget } from './HotelSearchWidget';
import { AirportTransferWidget } from './AirportTransferWidget';
import { EsimWidget } from './EsimWidget';
import { getWhiteLabelIdByHostname } from "../../config/regions";
import { Sparkles, Plane, Building, Car, Smartphone } from 'lucide-react';

// Ambient declarations for browser globals and DOM types in TS compiler
declare const window: any;
declare const document: any;
declare const setTimeout: (callback: () => void, ms?: number) => any;
declare const clearTimeout: (timeoutId: any) => void;
declare var MutationObserver: any;

export const FlightSearchUI = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'transfers' | 'esim'>('flights');

  const tabs = [
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'hotels', label: 'Hotels', icon: Building },
    { id: 'transfers', label: 'Transfers', icon: Car },
    { id: 'esim', label: 'eSIM Data', icon: Smartphone },
  ] as const;

  const heroContent = {
    flights: {
      badge: 'Airfare Comparison',
      headline: 'Compare & Book Cheap Flights',
      subtitle: 'Search 100+ airlines with transparent pricing.',
      image: 'https://images.unsplash.com/photo-1569839333583-7375336cde4b?q=80&w=1030&auto=format&fit=crop'
    },
    hotels: {
      badge: 'Hotel Engine',
      headline: 'Find Hotels For Your Budget',
      subtitle: 'Compare thousands of resorts with zero markup.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2200&q=85'
    },
    transfers: {
      badge: 'Airport Transfers',
      headline: 'Reliable Rides Worldwide',
      subtitle: 'Fixed-price pickups with professional drivers.',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2200&q=85'
    },
    esim: {
      badge: 'Global Connectivity',
      headline: 'Instant Travel eSIM Data',
      subtitle: 'Activation in 180+ countries with no physical SIM.',
      image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=2200&q=85'
    },
  };

 useEffect(() => {
  if (activeTab !== 'flights') return;

  let resizeObserverInstance: ResizeObserver | null = null;
  let timer: ReturnType<typeof setTimeout> | null = null;

  timer = setTimeout(() => {
    const searchContainer = document.getElementById('tpwl-search');
    const ticketsContainer = document.getElementById('tpwl-tickets');

    if (!searchContainer) return;

    // Clear previous widget
    searchContainer.innerHTML = '';
    if (ticketsContainer) ticketsContainer.innerHTML = '';

    // Remove previous script
    const oldScript = document.getElementById('tpwl-script');
    if (oldScript) oldScript.remove();

    // Dynamic WhiteLabel
    const currentHostname = window.location.hostname;
    const dynamicWlId = getWhiteLabelIdByHostname(currentHostname);

    // Inject widget
    const script = document.createElement('script');
    script.id = 'tpwl-script';
    script.async = true;
    script.type = 'module';
    script.src = `https://tpwgts.com/wl_web/main.js?wl_id=${dynamicWlId}&_t=${Date.now()}`;

    document.head.appendChild(script);

    // Auto-scroll when results appear
    let hasScrolledForCurrentSearch = false;

    if (ticketsContainer && typeof ResizeObserver !== 'undefined') {
      resizeObserverInstance = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const height = entry.contentRect.height;

          if (height > 400 && !hasScrolledForCurrentSearch) {
            setTimeout(() => {
              ticketsContainer.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }, 100);

            hasScrolledForCurrentSearch = true;
          } else if (height < 200) {
            hasScrolledForCurrentSearch = false;
          }
        }
      });

      resizeObserverInstance.observe(ticketsContainer);
    }
  }, 50);

  return () => {
    if (timer) clearTimeout(timer);

    if (resizeObserverInstance) {
      resizeObserverInstance.disconnect();
    }

    const script = document.getElementById('tpwl-script');
    if (script) script.remove();

    const searchContainer = document.getElementById('tpwl-search');
    const ticketsContainer = document.getElementById('tpwl-tickets');

    if (searchContainer) searchContainer.innerHTML = '';
    if (ticketsContainer) ticketsContainer.innerHTML = '';
  };
}, [activeTab, location.key]);

  const currentHero = heroContent[activeTab];

  return (
    <div className="pt-16 sm:pt-20 pb-8 font-sans bg-[#F8FAFC]">
      
      {/* HERO HEADER */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="hidden sm:flex relative rounded-[2rem] overflow-hidden bg-slate-950 min-h-[280px] items-center justify-center text-center p-8 shadow-xl border border-slate-200/50">
          <img 
            src={currentHero.image} 
            alt={currentHero.badge} 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 z-10" />

          <div className="relative z-20 max-w-[680px] mx-auto space-y-3 pb-12 text-white">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-white/15 border border-white/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" /> {currentHero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              {currentHero.headline}
            </h1>
            <p className="text-sm text-slate-200 font-medium max-w-md mx-auto">
              {currentHero.subtitle}
            </p>
          </div>
        </div>

        <div className="sm:hidden pt-4 pb-2 text-center space-y-1.5">
          <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-50 text-[#2563EB] border border-blue-200/60">
            <Sparkles className="w-3 h-3 text-[#2563EB]" /> FlySava Smart Engine
          </div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">
            {currentHero.headline}
          </h1>
        </div>
      </div>

      {/* SERVICE SELECTOR & SEARCH WIDGET */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 sm:-mt-10 relative z-30 pt-3">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white/95 backdrop-blur-xl border border-[#E5E7EB] p-1.5 rounded-2xl shadow-lg shadow-slate-900/5 grid grid-cols-4 sm:flex gap-1 w-full sm:w-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
  // If switching back to Flights, reload once
  if (tab.id === 'flights' && activeTab !== 'flights') {
    sessionStorage.setItem('reload-flight-widget', '1');
    window.location.reload();
    return;
  }

  setActiveTab(tab.id);
}}
                 className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-5 py-2.5 rounded-xl transition-all duration-200 whitespace-nowrap ${
  isActive
    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/25 scale-[1.02]'
    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
}`}
                >
                  <Icon size={16} className={`flex-shrink-0 min-w-[16px] min-h-[16px] ${isActive ? 'text-white' : 'text-[#2563EB]'
  }`}
/>
                  <span className="text-[10px] sm:text-xs font-bold">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SEARCH FORM */}
       <div
  className={`relative rounded-[24px] border border-[#E5E7EB] shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-visible ${
    activeTab === "flights"
      ? "bg-white p-4 sm:p-6"
      : "bg-[#F8FAFC]"
  }`}
>
  {activeTab === "flights" && (
    <div id="tpwl-search" className="w-full min-h-[140px]" />
  )}

  {activeTab === "hotels" && (
    <div className="p-2 sm:p-3">
      <HotelSearchWidget />
    </div>
  )}

  {activeTab === "transfers" && (
    <div className="p-2 sm:p-3">
      <AirportTransferWidget />
    </div>
  )}

  {activeTab === "esim" && (
    <div className="p-2 sm:p-3">
      <EsimWidget />
    </div>
  )}
</div>

        {/* FLIGHT RESULTS CONTAINER */}
        {activeTab === 'flights' && (
          <div id="tpwl-tickets" className="mt-8 max-w-[1280px] mx-auto scroll-mt-28"></div>
        )}

      </div>

    </div>
  );
};