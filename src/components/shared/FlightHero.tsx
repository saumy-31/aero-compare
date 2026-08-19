import React from 'react';
import { TrendingUp } from 'lucide-react';
import { FlightServiceTabs, TabItem } from './FlightServiceTabs';

interface FlightHeroProps {
  currentHero: {
    headlinePrefix: string;
    headlineHighlight: string;
    topImage: string;
    topImageTag: string;
  };
  tabs: readonly TabItem[];
  activeTab: 'flights' | 'hotels' | 'cars' | 'esim';
  onTabChange: (tabId: 'flights' | 'hotels' | 'cars' | 'esim') => void;
}

export const FlightHero: React.FC<FlightHeroProps> = ({
  currentHero,
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-8 items-center">
      {/* Heading & Service Tabs */}
      <div className="lg:col-span-7 flex flex-col items-center justify-center text-center lg:items-start lg:text-left space-y-3 sm:space-y-4">
        <h1 className="text-xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15] text-center lg:text-left">
          {currentHero.headlinePrefix}
          <span className="text-blue-600 inline-block">{currentHero.headlineHighlight}</span>
        </h1>

        {/* Service Tabs */}
        <FlightServiceTabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
      </div>

      {/* Desktop Hero Image */}
      <div className="hidden lg:flex lg:col-span-5 flex-col">
        <div className="relative h-48 lg:h-52 rounded-3xl overflow-hidden shadow-xs border border-slate-100 group cursor-pointer">
          <img
            src={currentHero.topImage}
            alt="Top Deals"
            loading="lazy"
            decoding="async"
            width="600"
            height="208"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <span className="text-xs font-black tracking-wider uppercase drop-shadow-md">
              {currentHero.topImageTag}
            </span>
            <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};