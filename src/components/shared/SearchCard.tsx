import React from 'react';

interface SearchCardProps {
  tabs: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const SearchCard: React.FC<SearchCardProps> = ({ tabs, children, footer }) => {
  return (
    <div className="w-full">
      {/* TABS CONTAINER */}
      <div className="mb-4 sm:mb-6 flex justify-start sm:justify-center overflow-x-auto no-scrollbar py-1">
        {tabs}
      </div>

      {/* DESKTOP SURFACE: Floating White Card */}
      <div className="hidden lg:block bg-white rounded-[32px] border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-4 relative backdrop-blur-xl transition-all duration-300">
        {children}
      </div>

      {/* MOBILE SURFACE: Outer Card Removed, Independent Stacked Cards */}
      <div className="lg:hidden space-y-3 relative z-20">
        {children}
      </div>

      {/* FOOTER BADGES */}
      {footer && <div className="mt-4 sm:mt-6">{footer}</div>}
    </div>
  );
};