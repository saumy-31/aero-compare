import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export type SortOption = 'Cheapest' | 'Fastest' | 'Best Value' | 'Earliest Departure' | 'Latest Departure';

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SORT_OPTIONS: SortOption[] = [
  'Best Value',
  'Cheapest',
  'Fastest',
  'Earliest Departure',
  'Latest Departure'
];

export const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: SortOption) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-48 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg px-4 py-2.5 text-sm font-bold shadow-sm outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all hover:bg-gray-50 dark:hover:bg-slate-800"
      >
        <span className="truncate">{value}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-xl shadow-xl z-50 overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-50 dark:border-slate-800/50 mb-1">
            Sort Flights By
          </div>
          {SORT_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full text-left px-4 py-2.5 text-sm font-medium flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <span className={value === option ? 'text-brand-600 dark:text-brand-400 font-bold' : 'text-gray-700 dark:text-gray-300'}>
                {option}
              </span>
              {value === option && <Check className="w-4 h-4 text-brand-600 dark:text-brand-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};