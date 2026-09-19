import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface TrustHighlightItem {
  icon: LucideIcon;
  label: string;
  color: string;
}

interface FlightTrustHighlightsProps {
  highlights: TrustHighlightItem[];
  selectedIndex: number | null;
  onSelectIndex: (index: number | null) => void;
}

export const FlightTrustHighlights: React.FC<FlightTrustHighlightsProps> = ({
  highlights,
  selectedIndex,
  onSelectIndex,
}) => {
  return (
    <div className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-4 sm:mt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
        {highlights.map((item, i) => {
          const Icon = item.icon;
          const isSelected = selectedIndex === i;

          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelectIndex(isSelected ? null : i)}
              className={`
                group
                flex items-center justify-center gap-2
                px-3 py-2.5 sm:py-3.5
                rounded-2xl
                border
                text-slate-800
                cursor-pointer
                select-none
                transition-all duration-200
                focus:outline-none
                ${
                  isSelected
                    ? 'bg-blue-50 border-blue-600 shadow-md shadow-blue-600/10 -translate-y-0.5'
                    : 'bg-white border-slate-200/80 shadow-2xs hover:border-blue-300 hover:bg-blue-50/40 hover:-translate-y-0.5 hover:shadow-sm'
                }
              `}
            >
              <Icon
                className={`
                  w-4 h-4 shrink-0 transition-colors duration-200
                  ${
                    isSelected
                      ? 'text-blue-600'
                      : 'text-blue-600 group-hover:text-blue-600'
                  }
                `}
              />

              <span className="text-xs font-black tracking-tight truncate">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};