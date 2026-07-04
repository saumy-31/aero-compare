import React, { useMemo } from 'react';
import { format, addDays, subDays, isSameDay } from 'date-fns';
import { Calendar as CalendarIcon, TrendingDown } from 'lucide-react';

interface FareCalendarProps {
  baseDate: Date;
  basePrice: number;
  onSelectDate?: (date: Date) => void;
}

export const FareCalendar: React.FC<FareCalendarProps> = ({ baseDate, basePrice, onSelectDate }) => {
  // Generate 7 days: 3 days before, the selected date, and 3 days after
  const dates = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => {
      const date = addDays(subDays(baseDate, 3), i);
      // Deterministic price variance based on the date's day of month
      const variance = (date.getDate() % 5) * 15 - 30; // Varies between -30 and +30
      const price = basePrice + variance;
      
      return {
        date,
        price,
        isCheapest: variance <= -15, // Highlight unusually low prices
      };
    });
  }, [baseDate, basePrice]);

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-dark-border mb-6">
      <div className="flex items-center justify-between mb-4 px-2">
        <h3 className="font-bold flex items-center dark:text-white">
          <CalendarIcon className="w-5 h-5 mr-2 text-brand-500" /> 
          Flexible Dates
        </h3>
        <span className="text-xs font-semibold text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-md flex items-center">
          <TrendingDown className="w-3 h-3 mr-1" /> Save up to $30
        </span>
      </div>
      
      <div className="flex overflow-x-auto hide-scrollbar gap-2 snap-x">
        {dates.map((day, idx) => {
          const isSelected = isSameDay(day.date, baseDate);
          return (
            <button
              key={idx}
              onClick={() => onSelectDate?.(day.date)}
              className={`min-w-[90px] flex-1 flex flex-col items-center p-3 rounded-xl border-2 transition-all snap-center ${
                isSelected 
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20' 
                  : day.isCheapest 
                    ? 'border-green-200 bg-green-50/50 dark:border-green-900/30 dark:bg-green-900/10 hover:border-green-300'
                    : 'border-transparent hover:border-gray-200 dark:hover:border-slate-700 bg-gray-50/50 dark:bg-slate-800/30'
              }`}
            >
              <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-brand-600 dark:text-brand-400' : 'text-gray-500'}`}>
                {format(day.date, 'MMM')}
              </span>
              <span className={`text-xl font-black my-1 ${isSelected ? 'text-brand-700 dark:text-brand-300' : 'dark:text-white'}`}>
                {format(day.date, 'dd')}
              </span>
              <span className={`text-sm font-bold ${
                day.isCheapest ? 'text-green-600 dark:text-green-400' : isSelected ? 'text-brand-600 dark:text-brand-400' : 'text-gray-600 dark:text-gray-400'
              }`}>
                ${day.price}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};