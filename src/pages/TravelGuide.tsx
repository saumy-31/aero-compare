import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Calendar, Wallet, CheckCircle2, Plane, ArrowLeft, Star, 
  Clock, Sun, Compass, ShieldAlert, Utensils, DollarSign, 
  Navigation, Share2, Heart, Building, Car, Smartphone, Check
} from 'lucide-react';
import { MOCK_DESTINATIONS } from '../data/mockDestinations';
import { SEO } from '../components/seo/SEO';

declare const window: any;

export const TravelGuide: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'attractions' | 'tips'>('overview');
  const [selectedService, setSelectedService] = useState<'flights' | 'hotels' | 'cars' | 'esim'>('flights');

  // Explicit back navigation label & route
  const backLabel = 'Back to Destinations';
  const backRoute = '/destinations';

  // Flexible destination matching by string ID, numeric ID, city name, or slug
  const destination = MOCK_DESTINATIONS.find((d: any) => {
    if (!id) return false;
    const cleanParam = id.toLowerCase().trim();
    return (
      d.id?.toString().toLowerCase() === cleanParam ||
      d.city?.toLowerCase() === cleanParam ||
      d.slug?.toLowerCase() === cleanParam
    );
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!destination) {
    return (
      <>
        <SEO title="Page Not Found | FlySava" description="Page not found." preventIndex={true} />
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC]">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4 border border-blue-100 shadow-2xs">
            <Compass className="w-7 h-7 animate-spin text-[#2563EB]" />
          </div>
          <h2 className="text-xl font-black text-slate-900 mb-1">Destination Not Found</h2>
          <p className="text-slate-500 text-xs mb-6 font-medium">We couldn't locate the destination you were looking for.</p>
          <button 
            type="button" 
            onClick={() => navigate(backRoute)} 
            className="px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer active:scale-95"
          >
            &larr; {backLabel}
          </button>
        </div>
      </>
    );
  }

  // Extract actual attraction objects from dataset for TouristAttraction schema
  const touristAttractionsSchema = (destination.attractions || []).map((attr: any) => ({
    "@type": "TouristAttraction",
    "name": typeof attr === 'string' ? attr : attr.name
  }));

  // Dynamic Destination JSON-LD (@graph combining TouristDestination + BreadcrumbList)
  const destinationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristDestination",
        "name": destination.city,
        "description": `Plan your trip to ${destination.city}, ${destination.country}. Discover top attractions, the best time to visit, estimated daily budget, and practical travel tips.`,
        "url": `https://flysava.com/destinations/${destination.id}`,
        "image": destination.image,
        "containedInPlace": {
          "@type": "Country",
          "name": destination.country
        },
        ...(touristAttractionsSchema.length > 0 && {
          "includesAttraction": touristAttractionsSchema
        })
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://flysava.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Destinations",
            "item": "https://flysava.com/destinations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": destination.city,
            "item": `https://flysava.com/destinations/${destination.id}`
          }
        ]
      }
    ]
  };

  const handleServiceAction = () => {
    if (typeof window === 'undefined') return;

    let targetWidgetId = '';
    let targetRoute = '';

    switch (selectedService) {
      case 'flights':
        targetWidgetId = 'flight-search-widget';
        targetRoute = `/?destination=${destination.airportCode || 'DPS'}`;
        break;
      case 'hotels':
        targetWidgetId = 'hotel-search-widget';
        targetRoute = `/hotels?destination=${encodeURIComponent(destination.city)}`;
        break;
      case 'cars':
        targetWidgetId = 'car-rental-widget';
        targetRoute = `/cars?destination=${encodeURIComponent(destination.city)}`;
        break;
      case 'esim':
        targetWidgetId = 'esim-search-widget';
        targetRoute = `/esim?destination=${encodeURIComponent(destination.city)}`;
        break;
    }

    const widgetElement = document.getElementById(targetWidgetId);
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = targetRoute;
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${destination.city} Travel Guide | FlySava`,
        url: window.location.href,
      }).catch(() => {});
    }
  };

  const scrollToSection = (elementId: string, tab: 'overview' | 'attractions' | 'tips') => {
    setActiveTab(tab);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SEO 
        title={`${destination.city} Travel Guide: Things to Do, Budget & Best Time | FlySava`}
        description={`Plan your trip to ${destination.city}, ${destination.country}. Discover top attractions, the best time to visit, estimated daily budget, and practical travel tips.`}
        canonicalUrl={`/destinations/${destination.id}`}
        image={destination.image}
        type="website"
        jsonLd={destinationJsonLd}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-28 font-sans selection:bg-blue-600 selection:text-white">
        
        {/* HERO HEADER */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md h-[380px] sm:h-[460px] flex flex-col justify-between p-6 sm:p-10">
            
            {/* Background Image */}
            <img 
              src={destination.image} 
              alt={`${destination.city}, ${destination.country} Travel Guide`} 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.85] contrast-[1.05] scale-105 transition-transform duration-1000"
            />
            {/* Ambient Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent z-10" />

            {/* TOP NAVIGATION BAR */}
            <div className="relative z-20 flex items-center justify-between">
              <button
                type="button"
                onClick={() => navigate(backRoute)}
                className="inline-flex items-center gap-2 bg-slate-900/60 hover:bg-slate-900/90 text-white px-4 py-2 rounded-full text-xs font-extrabold backdrop-blur-md border border-white/20 transition-all cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> {backLabel}
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsSaved(!isSaved)}
                  className={`w-9 h-9 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
                    isSaved ? 'bg-rose-500 text-white border-rose-400' : 'bg-slate-900/60 text-white hover:bg-white hover:text-rose-500'
                  }`}
                  title="Save Destination"
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="w-9 h-9 rounded-full bg-slate-900/60 hover:bg-white hover:text-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  title="Share Destination"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* HERO TITLE */}
            <div className="relative z-20 space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#2563EB] text-white shadow-xs">
                  <MapPin className="w-3 h-3" /> {destination.country}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 text-white backdrop-blur-md border border-white/20">
                  <Compass className="w-3 h-3 text-blue-300" /> {destination.tripType || 'Popular Destination'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
                {destination.city}
              </h1>

              <p className="text-slate-100 text-xs sm:text-sm font-semibold leading-relaxed opacity-95 line-clamp-2 drop-shadow-xs">
                {destination.description}
              </p>
            </div>

          </div>
        </section>

        {/* STICKY SUB-NAV */}
        <div className="sticky top-20 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <div className="bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-1.5 shadow-xs flex items-center gap-1 max-w-md">
            <button
              type="button"
              onClick={() => scrollToSection('guide-overview', 'overview')}
              className={`flex-1 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'overview' ? 'bg-[#2563EB] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('guide-attractions', 'attractions')}
              className={`flex-1 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'attractions' ? 'bg-[#2563EB] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Attractions
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('guide-tips', 'tips')}
              className={`flex-1 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'tips' ? 'bg-[#2563EB] text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Essential Tips
            </button>
          </div>
        </div>

        {/* MAIN DESTINATION LAYOUT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT MAIN DESTINATION CONTENT */}
            <div className="lg:col-span-8 space-y-8">
              
              <div id="guide-overview" className="scroll-mt-32 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Best Time</span>
                    <span className="text-sm font-black text-slate-900">{destination.bestSeason || (destination as any).bestTime || 'Apr – Oct'}</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Est. Daily Budget</span>
                    <span className="text-sm font-black text-slate-900">${destination.dailyBudget || '150'} / day</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Trip Vibe</span>
                    <span className="text-sm font-black text-slate-900">{destination.tripType || 'Sightseeing'}</span>
                  </div>
                </div>
              </div>

              {/* ATTRACTIONS (WITH RESPONSIVE MOBILE FIXES) */}
              <section id="guide-attractions" className="scroll-mt-32 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-widest block">Must-See Spots</span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Top Attractions in {destination.city}</h2>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100">
                    <Navigation className="w-5 h-5" />
                  </div>
                </div>

                {destination.attractions && destination.attractions.length > 0 ? (
                  <div className="space-y-3">
                    {destination.attractions.map((attraction: any, i: number) => {
                      const name = typeof attraction === 'string' ? attraction : attraction.name;
                      const duration = typeof attraction === 'object' ? attraction.duration : null;
                      const bestTime = typeof attraction === 'object' ? attraction.bestTime : null;
                      const cost = typeof attraction === 'object' ? (attraction.cost || attraction.entryFee) : null;

                      return (
                        <div 
                          key={i} 
                          className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all gap-3 sm:gap-4"
                        >
                          <div className="flex items-start gap-3.5 min-w-0">
                            <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 shadow-2xs">
                              {String(i + 1).padStart(2, '0')}
                            </div>

                            <div className="space-y-1 min-w-0 flex-1">
                              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-[#2563EB] transition-colors leading-snug">
                                {name}
                              </h3>
                              
                              {(duration || bestTime) && (
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-slate-500 pt-0.5">
                                  {duration && (
                                    <span className="inline-flex items-center gap-1 shrink-0">
                                      <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                      <span>{duration}</span>
                                    </span>
                                  )}
                                  {bestTime && (
                                    <span className="inline-flex items-center gap-1 shrink-0">
                                      <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                                      <span>{bestTime}</span>
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>

                          {cost && (
                            <div className="pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/60 flex items-center justify-start sm:justify-end shrink-0">
                              <span className="inline-block px-3 py-1.5 rounded-xl bg-white sm:bg-slate-100/80 border border-slate-200/80 text-xs font-black text-slate-900 tracking-tight shadow-2xs break-words max-w-full">
                                {cost}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-6 text-center bg-slate-50 rounded-2xl border border-slate-200/60">
                    <p className="text-xs font-semibold text-slate-500">
                      No attractions have been added for this destination yet.
                    </p>
                  </div>
                )}
              </section>

              {/* TIPS */}
              <section id="guide-tips" className="scroll-mt-32 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-widest block">Insider Knowledge</span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Essential Travel Tips</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                    <div className="p-2 bg-[#2563EB] text-white rounded-lg shrink-0">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-0.5">Getting Around</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Use verified ride-hailing apps (Uber, Grab, or local scooter taxis) for transparent fares and safe transport.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                    <div className="p-2 bg-purple-600 text-white rounded-lg shrink-0">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-0.5">Local Etiquette</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Respect local customs, dress modestly when visiting historical/religious sites, and carry small local cash bills.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                    <div className="p-2 bg-amber-600 text-white rounded-lg shrink-0">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-0.5">Money & Tipping</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Inform your bank before traveling. Keep small cash bills handy as card terminals aren't available in street markets.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                    <div className="p-2 bg-emerald-600 text-white rounded-lg shrink-0">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-0.5">Dining Culture</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Seek out popular local eateries with high turnover for authentic cuisine and peak food freshness.
                      </p>
                    </div>
                  </div>
                </div>

                {destination.travelTips && destination.travelTips.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {destination.travelTips.map((tip: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>

            </div>

            {/* RIGHT SIDEBAR WITH MULTI-SERVICE TABS */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
              <div className="bg-[#0B132B] text-white rounded-[32px] p-6 sm:p-7 border border-slate-800/80 shadow-2xl space-y-5 relative h-auto">
                
                {/* Custom scrollbar utility */}
                <style>{`
                  .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {/* Integrated Service Selector Tabs */}
                <div className="relative z-10 w-full flex overflow-x-auto scrollbar-hide snap-x snap-mandatory flex-nowrap gap-1.5 p-1 bg-[#131D3B] rounded-2xl border border-slate-800/80 lg:grid lg:grid-cols-4">
                  <button
                    type="button"
                    onClick={() => setSelectedService('flights')}
                    className={`h-9 shrink-0 snap-start flex items-center justify-center gap-1.5 px-3.5 lg:px-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                      selectedService === 'flights'
                        ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Plane className="w-3.5 h-3.5 shrink-0" />
                    <span>Flights</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedService('hotels')}
                    className={`h-9 shrink-0 snap-start flex items-center justify-center gap-1.5 px-3.5 lg:px-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                      selectedService === 'hotels'
                        ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Building className="w-3.5 h-3.5 shrink-0" />
                    <span>Hotels</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedService('cars')}
                    className={`h-9 shrink-0 snap-start flex items-center justify-center gap-1.5 px-3.5 lg:px-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                      selectedService === 'cars'
                        ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Car className="w-3.5 h-3.5 shrink-0" />
                    <span>Cars</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedService('esim')}
                    className={`h-9 shrink-0 snap-start flex items-center justify-center gap-1.5 px-3.5 lg:px-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                      selectedService === 'esim'
                        ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5 shrink-0" />
                    <span>eSIM</span>
                  </button>
                </div>

                {/* Main Headline & Short Description */}
                <div className="relative z-10 space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                    {selectedService === 'flights' && `Fly to ${destination.city}`}
                    {selectedService === 'hotels' && `Stay in ${destination.city}`}
                    {selectedService === 'cars' && `Drive in ${destination.city}`}
                    {selectedService === 'esim' && `Stay connected in ${destination.city}`}
                  </h3>

                  <p className="text-slate-400 font-medium text-xs sm:text-sm leading-relaxed">
                    {selectedService === 'flights' && `Compare flight options and airfares from travel providers to ${destination.city}.`}
                    {selectedService === 'hotels' && `Compare available hotels and stays in ${destination.city} for your trip.`}
                    {selectedService === 'cars' && `Search rental car options and pickup locations in ${destination.city}.`}
                    {selectedService === 'esim' && `Explore travel eSIM mobile data plans for ${destination.city}.`}
                  </p>
                </div>

                {/* Destination Info Container Box */}
                <div className="relative z-10 bg-[#131D3B] border border-slate-800/80 rounded-2xl p-4 flex items-center justify-between">
                  {selectedService === 'flights' && (
                    <>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                          DESTINATION CODE
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-blue-400 tracking-wider leading-none">
                          {destination.airportCode || 'DPS'}
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-[#1D2B52] border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <Plane className="w-6 h-6 transform -rotate-45" />
                      </div>
                    </>
                  )}

                  {selectedService === 'hotels' && (
                    <>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                          DESTINATION
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-blue-400 tracking-tight truncate max-w-[180px] block leading-none">
                          {destination.city}
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-[#1D2B52] border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <Building className="w-6 h-6" />
                      </div>
                    </>
                  )}

                  {selectedService === 'cars' && (
                    <>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                          DESTINATION
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-blue-400 tracking-tight truncate max-w-[180px] block leading-none">
                          {destination.city}
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-[#1D2B52] border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <Car className="w-6 h-6" />
                      </div>
                    </>
                  )}

                  {selectedService === 'esim' && (
                    <>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                          DESTINATION
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-blue-400 tracking-tight truncate max-w-[180px] block leading-none">
                          {destination.city}
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-[#1D2B52] border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <Smartphone className="w-6 h-6" />
                      </div>
                    </>
                  )}
                </div>

                {/* Service Feature Highlights */}
                <div className="relative z-10 space-y-2.5 pt-1 border-t border-slate-800/80">
                  {selectedService === 'flights' && (
                    <>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                        <div className="w-5 h-5 rounded-full border border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                        </div>
                        <span>Real-time fare aggregation</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                        <div className="w-5 h-5 rounded-full border border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                        </div>
                        <span>Transparent price breakdown</span>
                      </div>
                    </>
                  )}

                  {selectedService === 'hotels' && (
                    <>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                        <div className="w-5 h-5 rounded-full border border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                        </div>
                        <span>Direct partner inventory</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                        <div className="w-5 h-5 rounded-full border border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                        </div>
                        <span>Itemized nightly rates</span>
                      </div>
                    </>
                  )}

                  {selectedService === 'cars' && (
                    <>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                        <div className="w-5 h-5 rounded-full border border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                        </div>
                        <span>Clear supplier terms & policies</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                        <div className="w-5 h-5 rounded-full border border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                        </div>
                        <span>Multiple vehicle categories</span>
                      </div>
                    </>
                  )}

                  {selectedService === 'esim' && (
                    <>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                        <div className="w-5 h-5 rounded-full border border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                        </div>
                        <span>Instant digital QR delivery</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                        <div className="w-5 h-5 rounded-full border border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                        </div>
                        <span>Prepaid local & regional data plans</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Blue CTA Button */}
                <button
                  type="button"
                  onClick={handleServiceAction}
                  className="relative z-10 w-full h-14 bg-gradient-to-r from-[#2B61FF] to-[#3B82F6] hover:from-blue-600 hover:to-blue-500 text-white font-black text-sm uppercase tracking-wider rounded-2xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95 mt-2"
                >
                  <span>
                    {selectedService === 'flights' && 'Search Flight Deals'}
                    {selectedService === 'hotels' && 'Search Hotels'}
                    {selectedService === 'cars' && 'Search Car Rentals'}
                    {selectedService === 'esim' && 'Get eSIM Data'}
                  </span>
                  
                  {selectedService === 'flights' && <Plane className="w-4 h-4 transform -rotate-45" />}
                  {selectedService === 'hotels' && <Building className="w-4 h-4" />}
                  {selectedService === 'cars' && <Car className="w-4 h-4" />}
                  {selectedService === 'esim' && <Smartphone className="w-4 h-4" />}
                </button>

              </div>
            </aside>

          </div>
        </div>

      </div>
    </>
  );
};

export default TravelGuide;