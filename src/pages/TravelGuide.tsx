import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Calendar, Wallet, CheckCircle2, Plane, ArrowLeft, Star, 
  Clock, Sun, Sparkles, Compass, ShieldAlert, Utensils, DollarSign, 
  Navigation, Share2, Heart, Tag
} from 'lucide-react';
import { MOCK_DESTINATIONS } from '../data/mockDestinations';
import { SEO } from '../components/seo/SEO';

// Explicit ambient declaration for VS Code editor stability
declare const window: any;

export const TravelGuide = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  const destination = MOCK_DESTINATIONS.find(d => d.id === id);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!destination) {
    return (
      <>
        <SEO title="Destination Not Found | FlySava" description="Destination not found." preventIndex={true} />
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-dark-bg">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <Compass className="w-8 h-8 animate-spin" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Destination Not Found</h2>
          <p className="text-slate-500 text-sm mb-6">We couldn't locate the travel guide you're looking for.</p>
          <button 
            type="button" 
            onClick={() => navigate('/destinations')} 
            className="px-6 py-3 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 cursor-pointer"
          >
            &larr; Back to Explore
          </button>
        </div>
      </>
    );
  }

  const handleFindFlights = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `/?destination=${destination.airportCode || 'DPS'}`;
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${destination.city} Travel Guide`,
        url: window.location.href,
      }).catch(() => {});
    }
  };

  const destinationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristDestination",
        "name": destination.city,
        "description": destination.description,
        "image": destination.image,
        "containedInPlace": {
          "@type": "Country",
          "name": destination.country
        }
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
            "name": "Explore Destinations",
            "item": "https://flysava.com/destinations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": destination.city,
            "item": `https://flysava.com/guide/${destination.id}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title={`${destination.city} Travel Guide & Flights | FlySava`}
        description={`Plan your trip to ${destination.city}. Read our complete travel guide, discover top attractions, and find cheap flights.`}
        canonicalUrl={`/guide/${destination.id}`}
        image={destination.image}
        jsonLd={destinationJsonLd}
        type="article"
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-24 font-sans selection:bg-blue-100 selection:text-blue-900">
        
        {/* ================= HERO HEADER ================= */}
        <section className="relative h-[65vh] min-h-[460px] max-h-[600px] w-full overflow-hidden bg-slate-950 rounded-b-[2.5rem] sm:rounded-b-[3.5rem] shadow-2xl">
          
          {/* Background Image & Multi-Stage Gradient Overlay */}
          <img 
            src={destination.image} 
            alt={destination.city} 
            className="w-full h-full object-cover brightness-[0.85] contrast-[1.08] scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30 z-10" />

          {/* Top Bar Navigation Actions */}
          <div className="absolute top-20 sm:top-24 left-4 right-4 sm:left-8 sm:right-8 z-20 flex items-center justify-between max-w-7xl mx-auto">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-xs font-bold backdrop-blur-xl border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Explore
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2.5 rounded-full backdrop-blur-xl border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95 ${
                  isSaved ? 'bg-rose-500 text-white border-rose-400' : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
                title="Save Destination"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
                title="Share Guide"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Main Info Block */}
          <div className="absolute bottom-10 sm:bottom-14 left-0 right-0 z-20 max-w-7xl mx-auto px-5 sm:px-8">
            
            {/* Pill Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-600 text-white shadow-md shadow-blue-600/30">
                <MapPin className="w-3.5 h-3.5" /> {destination.country}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/15 text-white backdrop-blur-md border border-white/20">
                <Compass className="w-3.5 h-3.5 text-blue-300" /> {destination.tripType || 'Popular Escape'}
              </span>
            </div>

            {/* Destination Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-md">
              {destination.city}
            </h1>

            {/* Description Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-2xl mt-3 font-normal leading-relaxed drop-shadow-xs opacity-95">
              {destination.description}
            </p>

          </div>
        </section>

        {/* ================= MAIN CONTENT & SIDEBAR ================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT COLUMN: GUIDES & DETAILS */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* --- FEATURE CARDS GRID --- */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Best Season Card */}
                <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Best Time</span>
                      <span className="text-xs font-bold text-slate-900">Optimal Weather</span>
                    </div>
                  </div>
                  <p className="text-lg font-black text-slate-900 tracking-tight">
                    {destination.bestSeason || destination.bestTime || 'Apr – Oct'}
                  </p>
                </div>

                {/* Daily Budget Card */}
                <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Daily Budget</span>
                      <span className="text-xs font-bold text-slate-900">Est. Expense</span>
                    </div>
                  </div>
                  <p className="text-lg font-black text-slate-900 tracking-tight">
                    ${destination.dailyBudget} <span className="text-xs text-slate-400 font-normal">/ day</span>
                  </p>
                </div>

                {/* Trip Style Card */}
                <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                      <Star className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Vibe</span>
                      <span className="text-xs font-bold text-slate-900">Experience</span>
                    </div>
                  </div>
                  <p className="text-lg font-black text-slate-900 tracking-tight">
                    {destination.tripType || 'Sightseeing'}
                  </p>
                </div>

              </div>

              {/* --- TOP ATTRACTIONS SECTION --- */}
              <section className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-200/90 shadow-sm">
                
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-widest block mb-1">
                      Must-See Spots
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      Top Attractions in {destination.city}
                    </h2>
                  </div>
                  <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600">
                    <Navigation className="w-6 h-6" />
                  </div>
                </div>

                {/* Timeline / Card List */}
                <div className="space-y-4">
                  {(destination.attractions || [
                    { name: "Historic City Center & Landmarks", duration: "2–3 hours", bestTime: "Morning", entryFee: "Free Access" },
                    { name: "Scenic Coastal Promenade", duration: "1–2 hours", bestTime: "Sunset", entryFee: "Free Access" },
                    { name: "Local Cultural Museum & Market", duration: "2 hours", bestTime: "Afternoon", entryFee: "$10 USD" },
                  ]).map((attraction: any, i: number) => (
                    <div 
                      key={i} 
                      className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all duration-200 gap-4"
                    >
                      <div className="flex items-start gap-4">
                        
                        {/* Number Index Pill */}
                        <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center flex-shrink-0 shadow-sm shadow-blue-600/20 group-hover:scale-110 transition-transform">
                          {String(i + 1).padStart(2, '0')}
                        </div>

                        <div>
                          <h3 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                            {attraction.name}
                          </h3>
                          
                          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mt-1.5">
                            {attraction.duration && (
                              <span className="flex items-center text-slate-600">
                                <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" /> {attraction.duration}
                              </span>
                            )}
                            {attraction.bestTime && (
                              <span className="flex items-center text-slate-600">
                                <Sun className="w-3.5 h-3.5 mr-1 text-amber-500" /> {attraction.bestTime}
                              </span>
                            )}
                          </div>
                        </div>

                      </div>

                      {/* Entry Fee Pill */}
                      {attraction.entryFee && (
                        <div className="self-start sm:self-center px-4 py-2 bg-slate-900 text-white text-xs font-extrabold rounded-xl shadow-xs group-hover:bg-blue-600 transition-colors whitespace-nowrap">
                          {attraction.entryFee}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* --- LOCAL TRAVEL TIPS SECTION --- */}
              <section className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-200/90 shadow-sm">
                
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-widest block mb-1">
                    Insider Knowledge
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Essential Travel Tips
                  </h2>
                </div>

                {/* Categorized Callout Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Transit Tip */}
                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-start gap-3.5">
                    <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-xs flex-shrink-0">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-1">Getting Around</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Use verified ride-hailing apps (Uber, Grab, or local scooter taxis) for transparent fares and safe city transport.
                      </p>
                    </div>
                  </div>

                  {/* Etiquette Tip */}
                  <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-start gap-3.5">
                    <div className="p-2.5 bg-purple-600 text-white rounded-xl shadow-xs flex-shrink-0">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-1">Local Etiquette</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Respect local customs, dress modestly when visiting historical/religious sites, and carry local currency for markets.
                      </p>
                    </div>
                  </div>

                  {/* Safety Tip */}
                  <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 flex items-start gap-3.5">
                    <div className="p-2.5 bg-amber-600 text-white rounded-xl shadow-xs flex-shrink-0">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-1">Money & Tipping</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Inform your bank before traveling. Keep small cash bills handy as card terminals aren't available in street markets.
                      </p>
                    </div>
                  </div>

                  {/* Food Tip */}
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3.5">
                    <div className="p-2.5 bg-emerald-600 text-white rounded-xl shadow-xs flex-shrink-0">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-1">Dining Culture</h4>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        Seek out popular local eateries with high turnover for authentic cuisine and peak food freshness.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Raw Travel Tips List if present */}
                {destination.travelTips && destination.travelTips.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5">
                    {destination.travelTips.map((tip: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs font-medium text-slate-700 leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                )}

              </section>

            </div>

            {/* RIGHT COLUMN: STICKY FLIGHT BOOKING SIDEBAR */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              
              <div className="bg-slate-900 text-white rounded-[2rem] p-7 border border-slate-800 shadow-2xl shadow-slate-950/20 space-y-6 relative overflow-hidden">
                
                {/* Decorative Glowing Accent Blur */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-3">
                    <Sparkles className="w-3 h-3 text-amber-300" /> Direct Flight Match
                  </div>
                  
                  <h3 className="text-2xl font-black text-white tracking-tight leading-snug">
                    Fly to {destination.city}
                  </h3>
                  
                  <p className="text-slate-400 font-normal text-xs mt-1.5 leading-relaxed">
                    Compare live airfares across 100s of airlines for the cheapest dates to {destination.city}.
                  </p>
                </div>

                {/* Airport Code Graphic Box */}
                <div className="relative z-10 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between shadow-inner">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                      Destination Code
                    </span>
                    <span className="text-3xl font-black text-blue-400 tracking-wider">
                      {destination.airportCode || 'DPS'}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-sm">
                    <Plane className="w-6 h-6 transform -rotate-45" />
                  </div>
                </div>

                {/* Feature Bullet Perks */}
                <div className="relative z-10 space-y-2 pt-1 border-t border-slate-800">
                  <div className="flex items-center text-xs font-semibold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Zero booking commissions
                  </div>
                  <div className="flex items-center text-xs font-semibold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Real-time route pricing
                  </div>
                </div>

                {/* Flight Search CTA Button */}
                <button
                  type="button"
                  onClick={handleFindFlights}
                  className="relative z-10 w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm rounded-2xl transition-all duration-200 shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  Search Flight Deals <Plane className="w-4 h-4" />
                </button>

              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  );
};