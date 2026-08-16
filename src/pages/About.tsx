import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Building2, 
  Car, 
  Smartphone, 
  MapPin, 
  BookOpen, 
  Radio, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck, 
  Compass, 
  SlidersHorizontal,
  ChevronRight,
  Globe2,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { MOCK_BLOG_POSTS } from '../data/mockBlogPosts';

export const About: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Full-page location transition to re-mount Travelpayouts script widgets
  const handleDirectNavigation = (path: string) => {
    window.location.href = path;
  };

  // Top 3 curated stories from existing verified blog dataset
  const featuredArticles = MOCK_BLOG_POSTS.slice(0, 3);

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About FlySava - The Complete Travel Planning Platform",
    "description": "Learn how FlySava brings flights, hotels, car rentals, eSIMs, destinations, and expert travel guides together to help travelers plan more of their journey in one place.",
    "url": "https://flysava.com/about",
    "publisher": {
      "@type": "Organization",
      "name": "FlySava",
      "url": "https://flysava.com"
    }
  };

  return (
    <>
      <SEO 
        title="About FlySava | Smarter Travel, Complete Journeys"
        description="FlySava brings flights, stays, car rentals, eSIMs, destinations, and essential travel tools together into one modern platform for global voyagers."
        canonicalUrl="/about"
        jsonLd={aboutJsonLd}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-16">
        
        {/* ========================================================================= */}
        {/* 1. HERO — "Travel smarter. Go further."                                    */}
        {/* ========================================================================= */}
        <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The FlySava Story</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                  Travel smarter. <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Go further.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                  FlySava brings flights, stays, car rentals, travel eSIMs, curated destinations, and practical guides together into one unified experience — helping travelers plan and manage more of their journey in one place.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={() => handleDirectNavigation('/#tpwl-search')}
                    className="px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Explore FlySava</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate('/blog')}
                    className="px-7 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-extrabold text-xs uppercase tracking-wider transition-all border border-slate-200/60 active:scale-95 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Read Travel Guides</span>
                    <BookOpen className="w-4 h-4 text-slate-500" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none rounded-[32px] overflow-hidden bg-slate-900 shadow-xl border border-slate-200/80 aspect-4/3 sm:aspect-5/4">
                  <img 
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80" 
                    alt="Traveler exploring picturesque destination" 
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
        {/* 2. OUR STORY — Timeline Evolution                                         */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="space-y-4 max-w-3xl mb-12 sm:mb-16"
          >
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">
              ORIGIN & PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              From finding a flight to planning the journey.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              FlySava started with a clear goal: simplify flight comparison without hidden fees. But as modern travelers move across countries, their needs quickly expand beyond the runway. Today, FlySava unites every layer of trip preparation — from booking your transit and lodging to staying connected anywhere on Earth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {[
              { icon: <Plane className="w-5 h-5 text-blue-600" />, step: "01", name: "Flights", desc: "Transparent airfare search across 100+ airlines." },
              { icon: <Building2 className="w-5 h-5 text-indigo-600" />, step: "02", name: "Hotels", desc: "Handpicked stays tailored to every budget." },
              { icon: <Car className="w-5 h-5 text-amber-600" />, step: "03", name: "Car Rental", desc: "Seamless global fleet comparison via Auto Europe." },
              { icon: <Smartphone className="w-5 h-5 text-emerald-600" />, step: "04", name: "Travel eSIM", desc: "Instant digital roaming data powered by Airalo." },
              { icon: <MapPin className="w-5 h-5 text-rose-600" />, step: "05", name: "Destinations", desc: "Deep cultural guides, itineraries & city insights." },
              { icon: <Radio className="w-5 h-5 text-cyan-600" />, step: "06", name: "Live Updates", desc: "Real-time flight status & direct booking tools." },
            ].map((node, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    {node.icon}
                  </div>
                  <span className="text-xs font-black text-slate-300">{node.step}</span>
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900">{node.name}</h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. ONE PLATFORM. MORE OF THE JOURNEY (Asymmetric Service Matrix)          */}
        {/* ========================================================================= */}
        <section id="ecosystem-section" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                  COMPLETE ECOSYSTEM
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  One platform. More of the journey.
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md">
                Every service in the FlySava ecosystem is engineered to eliminate friction from planning, booking, and transiting.
              </p>
            </div>

            {/* Asymmetric 7-Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
              
              {/* FLIGHTS (5 cols) */}
              <div 
                onClick={() => handleDirectNavigation('/flights')}
                className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-7 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all cursor-pointer group select-none min-h-[260px]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    <Plane className="w-6 h-6 transform -rotate-45" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-200 block">Core Search</span>
                    <h3 className="text-2xl font-black text-white tracking-tight">Flight Search & Comparison</h3>
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed font-medium">
                    Search and compare flight options from 100+ airlines simultaneously with transparent fare insights and zero platform markups.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-black text-white border-t border-white/20">
                  <span>Search Flights</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* HOTELS (4 cols) */}
              <div 
                onClick={() => handleDirectNavigation('/hotels')}
                className="lg:col-span-4 bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group select-none min-h-[260px]"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Lodging</span>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Hotels & Stays</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Discover quality hotels, boutique villas, and stays matched to your itinerary and budget profile.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-bold text-slate-900 border-t border-slate-200">
                  <span>Explore Stays</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* CAR RENTAL (3 cols) */}
              <div 
                onClick={() => handleDirectNavigation('/cars')}
                className="lg:col-span-3 bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group select-none min-h-[260px]"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Mobility</span>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Car Rental</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Integrated vehicle rental search powered by trusted global fleets.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-bold text-slate-900 border-t border-slate-200">
                  <span>Find Cars</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* eSIM (4 cols) */}
              <div 
                onClick={() => handleDirectNavigation('/esim')}
                className="lg:col-span-4 bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group select-none min-h-[240px]"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Connectivity</span>
                    <h3 className="text-lg font-black text-slate-900">Travel eSIM Mobile Data</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Skip airport SIM queues. Instant digital QR activation in 180+ global destinations.
                  </p>
                </div>
                <div className="pt-3 flex items-center justify-between text-xs font-bold text-slate-900 border-t border-slate-200">
                  <span>Get eSIM Data</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* DESTINATIONS & GUIDES (5 cols) */}
              <div 
                onClick={() => navigate('/destinations')}
                className="lg:col-span-5 bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group select-none min-h-[240px]"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Inspiration</span>
                    <h3 className="text-lg font-black text-slate-900">Destination Directory</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Explore seasonal timing, estimated budgets, local etiquette, and verified top attractions.
                  </p>
                </div>
                <div className="pt-3 flex items-center justify-between text-xs font-bold text-slate-900 border-t border-slate-200">
                  <span>Explore Catalog</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* FLIGHT STATUS (3 cols) */}
              <div 
                onClick={() => navigate('/status')}
                className="lg:col-span-3 bg-slate-900 text-white rounded-3xl p-7 flex flex-col justify-between shadow-md hover:shadow-xl transition-all cursor-pointer group select-none min-h-[240px]"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 text-blue-400 flex items-center justify-center border border-slate-700">
                    <Radio className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">En Route</span>
                    <h3 className="text-lg font-black text-white">Flight Status</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Live flight departure and arrival tracking tools on the move.
                  </p>
                </div>
                <div className="pt-3 flex items-center justify-between text-xs font-bold text-slate-200 border-t border-slate-800">
                  <span>Track Flights</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WHY FLYSAVA? (4 Guiding Principles)                                     */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16 space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">
              OUR STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Designed around how travelers think.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <SlidersHorizontal className="w-5 h-5 text-blue-600" />,
                title: "Compare More",
                desc: "Bring airfares, car fleets, and stays into one view so travelers make informed decisions without browser tab overload."
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
                title: "Travel with Clarity",
                desc: "Transparent price breakdowns and provider terms directly linked to official booking partners with zero surprise markups."
              },
              {
                icon: <Layers className="w-5 h-5 text-indigo-600" />,
                title: "One Journey, More Tools",
                desc: "Flights are only the first leg. We connect connectivity, ground transit, lodging, and destination intelligence."
              },
              {
                icon: <Compass className="w-5 h-5 text-amber-600" />,
                title: "Built for Modern Travel",
                desc: "A clean, fast digital experience responsive across mobile and desktop, built for spontaneous and planned travel alike."
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {card.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-black text-slate-900">{card.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. THE FLYSAVA JOURNEY (Interactive 4-Step Continuum)                      */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-slate-900 text-white rounded-[32px] sm:rounded-[48px] max-w-[1360px] mx-auto px-6 sm:px-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-12 sm:space-y-16">
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                END-TO-END WORKFLOW
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Supporting your trip across every stage.
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                FlySava is structured to assist travelers before departure, during logistics planning, and while on the move.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { stage: "01. Search", action: "Compare Airfare & Hotels", desc: "Identify budget options across global carriers and quality accommodations." },
                { stage: "02. Plan", action: "Explore Guides & Itineraries", desc: "Discover curated city guides, local budget estimates, and insider seasonal tips." },
                { stage: "03. Prepare", action: "Activate eSIM & Rental Cars", desc: "Organize international data connection and pickup logistics before arriving." },
                { stage: "04. Travel", action: "Track Status on the Move", desc: "Access flight updates and manage bookings seamlessly while in transit." }
              ].map((step, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                  <span className="text-xs font-black uppercase tracking-wider text-blue-400 block">{step.stage}</span>
                  <h3 className="text-base font-black text-white">{step.action}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. EDITORIAL / TRAVEL DISPATCHES (Using verified mockBlogPosts)           */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                TRAVEL EDITORIAL
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
                Go beyond the booking.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate('/blog')}
              className="text-xs font-black text-blue-600 hover:text-blue-700 uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Explore All Guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => navigate(`/blog/${article.slug}`)}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    loading="lazy" 
                    decoding="async" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-slate-800 shadow-2xs border border-white/40">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium line-clamp-2 mt-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {article.readTime}
                    </span>
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-black text-[11px] uppercase">
                      Read Guide &rarr;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. GLOBAL TRAVEL STATEMENT (Full Width Visual)                           */}
        {/* ========================================================================= */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden bg-slate-950 p-8 sm:p-16 lg:p-20 text-center flex flex-col items-center justify-center min-h-[320px] sm:min-h-[380px] shadow-xl border border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" 
              alt="Global landscape" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-25 brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                A WORLD OF EXPLORATION
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Wherever you're going, <br className="hidden sm:inline" />
                FlySava helps you get there.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-lg mx-auto">
                Built to connect destinations, flights, stays, and mobile connectivity across 6 continents.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. TRUST / TRANSPARENCY                                                   */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-2xs space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Transparency & Provider Partnerships</h3>
                <span className="text-xs text-slate-500 font-medium">How FlySava delivers search and booking capabilities</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              FlySava is a travel technology and aggregation platform. When you compare and select a flight, hotel, rental car, or eSIM, you are linked directly to verified travel partners and providers to complete your booking under their respective terms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 text-xs font-medium text-slate-700 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Zero platform markup fees added by FlySava to airline tickets.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 text-xs font-medium text-slate-700 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Integrated with global partner networks including Auto Europe and Airalo.</span>
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