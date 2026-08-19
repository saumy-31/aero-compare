import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface TabItem {
  id: 'flights' | 'hotels' | 'cars' | 'esim';
  label: string;
  icon: LucideIcon;
}

interface FlightServiceTabsProps {
  tabs: readonly TabItem[];
  activeTab: 'flights' | 'hotels' | 'cars' | 'esim';
  onTabChange: (tabId: 'flights' | 'hotels' | 'cars' | 'esim') => void;
}

export const FlightServiceTabs: React.FC<FlightServiceTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="grid grid-cols-4 gap-1.5 sm:gap-3 max-w-md w-full pt-1" role="tablist">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Switch to ${tab.label} search`}
            onClick={() => onTabChange(tab.id)}
            className={`relative group h-16 sm:h-20 rounded-[20px] sm:rounded-[22px] flex flex-col items-center justify-center text-center px-1 gap-1 transition-all duration-200 cursor-pointer select-none ${
              isActive
                ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-600/20 scale-[1.02]'
                : 'bg-slate-50/90 border border-slate-200/80 text-slate-700 hover:bg-slate-100/80 hover:border-slate-300 hover:scale-[1.01]'
            }`}
          >
            <div
              className={`p-1.5 sm:p-2 rounded-xl transition-all duration-200 flex items-center justify-center ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-white text-slate-700 border border-slate-200/60 group-hover:text-blue-600'
              }`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </div>

            <span className="tracking-tight font-black text-[10px] sm:text-xs leading-tight text-center w-full truncate">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};