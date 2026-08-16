import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Building2, 
  Car, 
  Smartphone, 
  MapPin, 
  Radio, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Compass, 
  SlidersHorizontal,
  Globe2,
  CheckCircle2,
  Lock,
  Cpu,
  Zap,
  Server,
  HeartHandshake,
  Check,
  Search,
  ExternalLink,
  Shield,
  HelpCircle,
  Clock,
  TrendingUp,
  Map,
  BadgeCheck,
  Workflow
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';

export const About: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDirectNavigation = (path: string) => {
    window.location.href = path;
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const platformStats = [
    { value: "100+", label: "Airline Data Feeds", desc: "Real-time airfare comparison engine" },
    { value: "180+", label: "eSIM Roaming Countries", desc: "Instant digital roaming mobile data" },
    { value: "50,000+", label: "Flight Routes Indexed", desc: "Nonstop, layover & multi-city transit" },
    { value: "0%", label: "Platform Surcharges", desc: "Direct partner rates without hidden fees" },
  ];

  const milestones = [
    {
      year: "2023",
      title: "The Airfare Metasearch Engine",
      desc: "FlySava launched with a core focus on solving flight search fragmentation, querying multiple GDS and low-cost carrier systems simultaneously to deliver honest, transparent flight comparison."
    },
    {
      year: "2024",
      title: "Expanding to Stays & Accommodations",
      desc: "Recognizing that flights are only the beginning of a journey, we integrated hotel discovery, giving travelers access to boutique stays, resorts, and apartments mapped directly to their destination airports."
    },
    {
      year: "2025",
      title: "Ground Mobility & Global eSIM Roaming",
      desc: "Partnered with Auto Europe for worldwide vehicle rentals and Airalo for prepaid digital eSIM connectivity, allowing travelers to arrange transport and mobile data before boarding."
    },
    {
      year: "2026",
      title: "The Complete Journey Platform",
      desc: "United all verticals with real-time flight tracking, live schedule updates, and comprehensive destination intelligence into one seamless, fast web platform."
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Single Search Query",
      desc: "You enter your departure, destination, and travel dates once. No need to visit ten different airline websites.",
      icon: <Search className="w-5 h-5 text-blue-600" />
    },
    {
      step: "02",
      title: "Real-Time Aggregation",
      desc: "Our engine queries hundreds of airline, hotel, car rental, and eSIM providers simultaneously in milliseconds.",
      icon: <Cpu className="w-5 h-5 text-indigo-600" />
    },
    {
      step: "03",
      title: "Transparent Comparison",
      desc: "Filter by price, duration, stops, baggage allowance, or provider. We display the exact price with zero platform markup.",
      icon: <SlidersHorizontal className="w-5 h-5 text-emerald-600" />
    },
    {
      step: "04",
      title: "Direct Merchant Booking",
      desc: "Click through directly to the airline or provider's secure checkout page to finalize your booking with complete protection.",
      icon: <ExternalLink className="w-5 h-5 text-amber-600" />
    }
  ];

  const regionsCovered = [
    {
      region: "Europe",
      cities: "London, Paris, Rome, Barcelona, Amsterdam, Berlin, Vienna",
      highlight: "Full Schengen & UK airfare, rail-link and city guide coverage"
    },
    {
      region: "North & South America",
      cities: "New York, Los Angeles, Miami, Toronto, Cancún, Rio de Janeiro",
      highlight: "Transcontinental flight indexes, regional car fleets & eSIMs"
    },
    {
      region: "Asia-Pacific",
      cities: "Tokyo, Bangkok, Singapore, Bali, Sydney, Seoul, Dubai",
      highlight: "Extensive low-cost carrier routing & instant regional data eSIMs"
    },
    {
      region: "Middle East & Africa",
      cities: "Dubai, Doha, Cairo, Cape Town, Marrakech, Istanbul",
      highlight: "Major hub transit connections, stopover planning & guides"
    }
  ];

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About FlySava - Global Travel Metasearch & Journey Platform",
    "description": "FlySava is a modern travel metasearch platform that aggregates airline tickets, hotel stays, rental cars, and international eSIM mobile data in a unified interface.",
    "url": "https://flysava.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "FlySava",
      "url": "https://flysava.com",
      "logo": "https://flysava.com/logo.png"
    }
  };

  return (
    <>
      <SEO 
        title="About FlySava | Global Travel Search & Journey Hub"
        description="Learn how FlySava simplifies global travel by bringing real-time flight comparison, hotel discovery, car rentals, and international eSIM connectivity into one platform."
        canonicalUrl="/about"
        jsonLd={aboutJsonLd}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-24">
        
        {/* ========================================================================= */}
        {/* 1. HERO — Powerful Editorial Showcase                                     */}
        {/* ========================================================================= */}
        <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The FlySava Story & Platform</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                  Smarter travel discovery. <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Built for the whole journey.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                  FlySava is a modern travel metasearch and journey-planning platform engineered to eliminate friction from trip coordination. By consolidating airline fare feeds, hotel accommodations, rental car networks, and international eSIM mobile data into a single search environment, we empower modern explorers to compare itineraries with absolute transparency.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={() => handleDirectNavigation('/#tpwl-search')}
                    className="px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Search Flights</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate('/destinations')}
                    className="px-7 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-extrabold text-xs uppercase tracking-wider transition-all border border-slate-200/60 active:scale-95 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Explore Destinations</span>
                    <Compass className="w-4 h-4 text-slate-500" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none rounded-[32px] overflow-hidden bg-slate-900 shadow-xl border border-slate-200/80 aspect-4/3 sm:aspect-5/4">
                  <img 
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80" 
                    alt="Global traveler researching destinations and flight itineraries" 
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover brightness-[0.92] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                        <Globe2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Ecosystem</span>
                        <span className="text-xs font-black text-slate-900">8 Integrated Travel Services</span>
                      </div>
                    </div>
                    <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">2026</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. STATS & AT-A-GLANCE METRICS                                            */}
        {/* ========================================================================= */}
        <section className="py-10 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {platformStats.map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">{stat.value}</div>
                  <div className="text-xs font-black text-slate-900">{stat.label}</div>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. OUR STORY & EVOLUTION (Redesigned 2-Column Showcase Layout)             */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Rich Story Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
                COMPANY MISSION & VISION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Evolving from airfare search into a comprehensive journey platform.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                FlySava was founded on a straightforward principle: finding dependable travel options should not require opening dozens of browser tabs or navigating through misleading price jumps. While our journey began with real-time flight metasearch, we quickly recognized that airline tickets represent only the initial leg of any voyage.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Today, FlySava bridges the gap between searching for transit and preparing for on-the-ground reality. We aggregate verified accommodations, ground mobility partnerships with Auto Europe, digital roaming solutions powered by Airalo, and deep destination guides into an accessible, unified travel interface.
              </p>

              {/* 3 Value Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <BadgeCheck className="w-5 h-5 text-blue-600" />
                  <h4 className="text-xs font-black text-slate-900">Zero Added Fees</h4>
                  <p className="text-[11px] text-slate-500">100% direct provider pricing with no platform surcharges.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <Zap className="w-5 h-5 text-indigo-600" />
                  <h4 className="text-xs font-black text-slate-900">Sub-Second Search</h4>
                  <p className="text-[11px] text-slate-500">High-throughput queries across global inventory feeds.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <h4 className="text-xs font-black text-slate-900">Verified Providers</h4>
                  <p className="text-[11px] text-slate-500">Direct booking links to licensed airlines & global suppliers.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Journey Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white rounded-[32px] p-7 sm:p-9 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-black uppercase tracking-wider text-blue-400">The Connected Stack</span>
                <span className="text-xs font-bold text-slate-400">All-in-One Hub</span>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <Plane className="w-4 h-4 text-blue-400" />, title: "Airfare Metasearch", desc: "Compare 100+ airlines simultaneously" },
                  { icon: <Building2 className="w-4 h-4 text-indigo-400" />, title: "Hotel Stays", desc: "Discover boutique & budget accommodations" },
                  { icon: <Car className="w-4 h-4 text-amber-400" />, title: "Car Rental", desc: "Global airport & city fleet comparisons" },
                  { icon: <Smartphone className="w-4 h-4 text-emerald-400" />, title: "Digital eSIM Roaming", desc: "Prepaid mobile data delivered via QR code" },
                  { icon: <MapPin className="w-4 h-4 text-rose-400" />, title: "Destination Atlas", desc: "Seasonal timing, budgets & city guides" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-700 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleDirectNavigation('/#tpwl-search')}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start Exploring Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 4. THE EVOLUTION TIMELINE                                                 */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                GROWTH & MILESTONES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                How FlySava was built.
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                A timeline of how we expanded from a flight comparison tool into an end-to-end travel platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, i) => (
                <div 
                  key={i}
                  className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200/80 space-y-3 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 rounded-xl bg-blue-50 text-blue-600 font-black text-xs border border-blue-100">
                      {m.year}
                    </span>
                    <h3 className="text-base font-black text-slate-900">{m.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. HOW FLYSAVA METASEARCH WORKS (Visual Blueprint)                         */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">
              TRANSPARENT PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              How FlySava search works.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              We connect travelers with live pricing feeds directly from official airlines and travel partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((w, i) => (
              <div 
                key={i}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs space-y-4 flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {w.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-200">{w.step}</span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-black text-slate-900">{w.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. GLOBAL COVERAGE BY REGION                                              */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                WORLDWIDE REACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Global destination coverage.
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Explore how FlySava supports travel across six continents with flight, hotel, and mobility routing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {regionsCovered.map((r, i) => (
                <div 
                  key={i}
                  className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200/80 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-wider">
                      <Globe2 className="w-4 h-4" />
                      <span>{r.region}</span>
                    </div>
                    <h3 className="text-sm font-black text-slate-900">{r.cities}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{r.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. PLATFORM COMPARISON MATRIX                                             */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">
              PLATFORM VALUE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why modern travelers choose FlySava.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              A transparent breakdown comparing our connected metasearch model against conventional travel agency portals.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-black uppercase tracking-wider text-slate-600">
                    <th className="py-4 px-6">Travel Feature</th>
                    <th className="py-4 px-6 text-blue-600 bg-blue-50/70">FlySava Discovery Engine</th>
                    <th className="py-4 px-6 text-slate-500">Traditional Booking Sites</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/60 text-xs font-medium text-slate-700">
                  {[
                    {
                      feature: "Airfare Price Transparency",
                      flysava: "Direct fares with zero hidden markups or FlySava fees",
                      legacy: "Convenience and processing surcharges added at payment"
                    },
                    {
                      feature: "Integrated Journey Stack",
                      flysava: "Flights, hotel stays, rental cars, and eSIMs in one hub",
                      legacy: "Disjointed tools requiring multiple separate websites"
                    },
                    {
                      feature: "International Mobile Data",
                      flysava: "Digital QR-code eSIM profiles delivered before takeoff",
                      legacy: "Expensive carrier roaming or physical airport SIM queues"
                    },
                    {
                      feature: "Destination Context",
                      flysava: "Curated seasonal timing, estimated budgets, and city guides",
                      legacy: "Basic booking forms without local travel intelligence"
                    }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                      <td className="py-4 px-6 text-blue-900 bg-blue-50/30 font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{row.flysava}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-500">{row.legacy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. TRUST & PARTNERSHIP TRANSPARENCY                                       */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-2xs space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Partner Integrations & Transparency Statement</h3>
                <span className="text-xs text-slate-500 font-medium">How FlySava aggregates and presents third-party travel options</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              FlySava operates as an independent travel metasearch and aggregation engine. We do not sell airline tickets, issue hotel vouchers, operate car rental fleets, or directly process financial transactions. When you select an itinerary or service, you are redirected to the official carrier or licensed travel partner to complete your reservation under their respective terms and conditions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 text-xs font-medium text-slate-700 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Zero platform markup fees added by FlySava to airline tickets.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 text-xs font-medium text-slate-700 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Integrated with verified partner networks including Auto Europe and Airalo.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. FINAL CTA                                                              */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-200">
                START PLANNING TODAY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Your next journey starts here.
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 font-medium">
                Search. Compare. Plan. Go.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleDirectNavigation('/flights')}
                className="px-7 py-3.5 rounded-2xl bg-white hover:bg-blue-50 text-blue-600 font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Search Flights
              </button>
              <button
                type="button"
                onClick={() => navigate('/destinations')}
                className="px-7 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-black text-xs uppercase tracking-wider backdrop-blur-md border border-white/30 transition-all active:scale-95 cursor-pointer"
              >
                Explore Destinations
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;