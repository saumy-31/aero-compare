import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getWhiteLabelIdByHostname } from "../../config/regions";
import { Globe, FileText, DollarSign, Luggage } from 'lucide-react';

// --- GLOBAL BACK-BUTTON INTERCEPTOR ---
if (typeof window !== 'undefined' && !(window as any)._flightPageReloadListener) {
  window.addEventListener('popstate', () => {
    // Force refresh for both root and /flights
    if (window.location.pathname === '/' || window.location.pathname === '/flights') {
      window.location.reload();
    }
  });
  (window as any)._flightPageReloadListener = true; 
}

export const FlightSearchUI = () => {
  const location = useLocation();

  // 1. Catch Safari/iOS bfcache
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  // 2. Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  // 3. Re-initialize TravelPayouts widget
  useEffect(() => {
    const searchContainer = document.getElementById('tpwl-search');
    const ticketsContainer = document.getElementById('tpwl-tickets');

    if (searchContainer) searchContainer.innerHTML = '';
    if (ticketsContainer) ticketsContainer.innerHTML = '';

    const oldScript = document.getElementById('tpwl-script');
    if (oldScript) oldScript.remove();

    // --- DYNAMIC REGION LOGIC START ---
    const currentHostname = window.location.hostname;
    const dynamicWlId = getWhiteLabelIdByHostname(currentHostname);
    // --- DYNAMIC REGION LOGIC END ---

    const script = document.createElement('script');
    script.id = 'tpwl-script';
    script.async = true;
    script.type = 'module';
    script.src = `https://tpwgts.com/wl_web/main.js?wl_id=${dynamicWlId}&_t=${Date.now()}`;
    document.head.appendChild(script);

    let hasScrolledForCurrentSearch = false;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const height = entry.contentRect.height;
        if (height > 400 && !hasScrolledForCurrentSearch) {
          setTimeout(() => {
            ticketsContainer?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
          hasScrolledForCurrentSearch = true;
        } else if (height < 200) {
          hasScrolledForCurrentSearch = false;
        }
      }
    });

    if (ticketsContainer) {
      resizeObserver.observe(ticketsContainer);
    }

    return () => {
      resizeObserver.disconnect();
      const scriptToRemove = document.getElementById('tpwl-script');
      if (scriptToRemove) scriptToRemove.remove();
      if (searchContainer) searchContainer.innerHTML = '';
      if (ticketsContainer) ticketsContainer.innerHTML = '';
    };
  }, [location.key]); 

  return (
    <div className="min-h-screen bg-[#071226] transition-colors duration-200">
      {/* Hero Section - Increased height (pt/pb) for more breathing room */}
      <div className="relative pt-28 md:pt-32 lg:pt-36 pb-24 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover object-center md:object-[center_25%] opacity-50"
          />
          {/* Slightly darkened overlay for maximum typography contrast */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.04)_0%,rgba(7,18,38,0.75)_50%,rgba(7,18,38,1)_100%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          {/* Increased margin-bottom to physically separate heading and subtitle */}
          <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black text-white mb-6 tracking-tight leading-[1.1] drop-shadow-lg">
            Compare & Book the <br/> <span className="text-brand-500">Best Flight Deals</span>
          </h1>
          {/* Added margin-bottom to ensure clearance from the overlapping search widget */}
          <p className="text-base md:text-lg text-slate-300 max-w-2xl font-medium drop-shadow-md leading-relaxed mb-4">
            Search 100+ travel sites at once. Find the cheapest, fastest, and best value flights globally.
          </p>
        </div>
      </div>

      {/* Search & Trust Section - Less aggressive negative margin (-mt-24) to balance the layout */}
      <section className="container mx-auto px-4 max-w-7xl -mt-16 md:-mt-20 lg:-mt-24 relative z-20 pb-16 lg:pb-20">
        
        {/* Softer shadow, premium padding, subtle border */}
        <div className="bg-white rounded-[2rem] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.08)] border border-slate-200/50 p-6 md:p-8 lg:p-10">
          <div id="tpwl-search"></div>
        </div>
        
        {/* Desktop Trust Strip (md and above) */}
        <div className="hidden md:flex mt-6 lg:mt-8 items-center justify-center gap-x-6 text-sm font-medium text-slate-400">
          <div className="flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-brand-500 shrink-0" />
            <span>Compare 100+ Travel Sites</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-700/50"></div>
          <div className="flex items-center gap-1.5">
            <Luggage className="w-4 h-4 text-brand-500 shrink-0" />
            <span>Baggage Info</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-700/50"></div>
          <div className="flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-brand-500 shrink-0" />
            <span>Visa Requirements</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-700/50"></div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-brand-500 shrink-0" />
            <span>Final Price, No Hidden Fees</span>
          </div>
        </div>

        {/* Mobile Trust Strip (below md) */}
        <div className="md:hidden mt-6 flex flex-col items-center justify-center gap-3 text-[13px] font-medium text-slate-400">
          {/* Row 1 */}
          <div className="flex items-center justify-center gap-1.5">
            <Globe className="w-4 h-4 text-brand-500 shrink-0" />
            <span>Compare 100+ Travel Sites</span>
          </div>
          
          {/* Row 2 */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-1.5">
              <Luggage className="w-4 h-4 text-brand-500 shrink-0" />
              <span>Baggage Info</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-brand-500 shrink-0" />
              <span>Visa Requirements</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-center gap-1.5">
            <DollarSign className="w-4 h-4 text-brand-500 shrink-0" />
            <span>Final Price, No Hidden Fees</span>
          </div>
        </div>

        {/* Ticket results container */}
        <div id="tpwl-tickets" className="mt-10 md:mt-12"></div>
      </section>
    </div>
  );
};