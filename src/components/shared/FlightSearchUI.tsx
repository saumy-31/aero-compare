import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HotelSearchWidget } from './HotelSearchWidget';
import { AirportTransferWidget } from './AirportTransferWidget';
import { EsimWidget } from './EsimWidget';
import { getWhiteLabelIdByHostname } from "../../config/regions";
import { Sparkles, Plane, Building, Car, Smartphone } from 'lucide-react';

declare const window: any;
declare const document: any;
declare const setTimeout: (callback: () => void, ms?: number) => any;
declare const clearTimeout: (timeoutId: any) => void;

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

  // Force page reload when clicking the Flights button
  const handleTabClick = (tabId: 'flights' | 'hotels' | 'transfers' | 'esim') => {
    if (tabId === 'flights') {
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
    } else {
      setActiveTab(tabId);
    }
  };

  useEffect(() => {
    if (activeTab !== 'flights') return;

    let isMounted = true;

    const initializeWidget = () => {
      const searchContainer = document.getElementById('tpwl-search');
      if (!searchContainer || !isMounted) return;

      const currentHostname = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
      const dynamicWlId = getWhiteLabelIdByHostname(currentHostname);

      const existingScript = document.getElementById('tpwl-main-script');
      if (existingScript) {
        existingScript.remove();
      }

      searchContainer.innerHTML = '';
      const ticketsContainer = document.getElementById('tpwl-tickets');
      if (ticketsContainer) ticketsContainer.innerHTML = '';

      const script = document.createElement('script');
      script.id = 'tpwl-main-script';
      script.async = true;
      script.type = 'module';
      script.src = `https://tpwgts.com/wl_web/main.js?wl_id=${dynamicWlId}`;

      document.head.appendChild(script);
    };

    const timer = setTimeout(initializeWidget, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [activeTab]);

  const currentHero = heroContent[activeTab];

  return (
    <div className="pt-16 sm:pt-20 pb-8 font-sans bg-[#F8FAFC]">
      
      {/* ================= 1. HERO HEADER ================= */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* DESKTOP HERO */}
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

        {/* MOBILE COMPACT HEADER */}
        <div className="sm:hidden pt-4 pb-2 text-center space-y-1.5">
          <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-50 text-[#2563EB] border border-blue-200/60">
            <Sparkles className="w-3 h-3 text-[#2563EB]" /> FlySava Smart Engine
          </div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">
            {currentHero.headline}
          </h1>
        </div>

      </div>

      {/* ================= 2. SERVICE SELECTOR & WIDGET ================= */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 sm:-mt-10 relative z-30 pt-3">
        
        {/* Switcher Bar */}
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white/95 backdrop-blur-xl border border-[#E5E7EB] p-1.5 rounded-2xl shadow-lg shadow-slate-900/5 grid grid-cols-4 sm:flex gap-1 w-full sm:w-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/25 scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#2563EB]'}`} /> 
                  <span className="text-[11px] sm:text-xs">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Widget Box Container */}
        <div className="bg-white rounded-[24px] border border-[#E5E7EB] p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] min-h-[160px]">
          {activeTab === 'flights' && (
            <div id="tpwl-search" className="w-full min-h-[140px]"></div>
          )}
          {activeTab === 'hotels' && <HotelSearchWidget />}
          {activeTab === 'transfers' && <AirportTransferWidget />}
          {activeTab === 'esim' && <EsimWidget />}
        </div>

        {/* Ticket Search Output Slot */}
        {activeTab === 'flights' && (
          <div id="tpwl-tickets" className="mt-8 max-w-[1280px] mx-auto"></div>
        )}

      </div>

    </div>
  );
};