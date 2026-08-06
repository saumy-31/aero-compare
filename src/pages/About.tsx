import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Search, 
  ShieldCheck, 
  Map, 
  Zap, 
  Smartphone, 
  Tag, 
  Globe2, 
  Plane, 
  Clock, 
  MapPin,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';

export const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExploreFlights = () => {
    // Navigates to home with a hard refresh and automatically anchors to the widget
    window.location.href = '/#tpwl-search';
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const featureCards = [
    { title: "Flight Comparison", icon: <Search className="w-6 h-6" />, desc: "A clean and easy-to-use flight comparison experience." },
    { title: "Trusted Providers", icon: <ShieldCheck className="w-6 h-6" />, desc: "Access to offers from trusted third-party travel providers." },
    { title: "Fast Search Experience", icon: <Zap className="w-6 h-6" />, desc: "Direct links to booking sources." },
    { title: "Travel Insights", icon: <Map className="w-6 h-6" />, desc: "Helpful travel tips, route information, and savings guides." },
    { title: "Mobile Friendly", icon: <Smartphone className="w-6 h-6" />, desc: "A fast, mobile-friendly website experience." },
    { title: "Transparent Pricing", icon: <Tag className="w-6 h-6" />, desc: "Transparent information without hidden Flysava booking fees." },
  ];

  const stats = [
    { icon: <Globe2 className="w-6 h-6" />, value: "100+", label: "Travel Sources" },
    { icon: <MapPin className="w-6 h-6" />, value: "200+", label: "Destinations" },
    { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Search Access" },
    { icon: <Plane className="w-6 h-6 transform -rotate-45" />, value: "Global", label: "Coverage" },
  ];

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About FlySava",
    "description": "Flysava is a modern travel comparison platform created to help travelers search, compare, and discover better flight deals with less effort.",
    "url": "https://flysava.com/about"
  };

  return (
    <>
      <SEO 
        title="About Us | FlySava"
        description="Flysava is a modern travel comparison platform created to help travelers search, compare, and discover better flight deals with transparency and ease."
        canonicalUrl="/about"
        jsonLd={aboutJsonLd}
      />
      <div className="min-h-screen bg-[#F8FAFC] transition-colors pb-12">
        
        {/* 1. HERO SECTION */}
        <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 w-full flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
          {/* Light Hero Background Image with Soft Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80" 
              alt="Travel background" 
              className="w-full h-full object-cover opacity-15 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#F8FAFC]/80 to-[#F8FAFC]" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200/80 mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" /> About FlySava
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
            >
              Your Gateway to <span className="text-blue-600">Smarter Flight Savings</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-base sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto font-normal"
            >
              Flysava is a modern travel comparison platform created to help travelers search, compare, and discover better flight deals with less effort. Our goal is simple: make flight planning faster, clearer, and more transparent.
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onClick={handleExploreFlights}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all shadow-md shadow-blue-600/20 text-base"
            >
              Start Exploring Flights <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </div>

        {/* ALTERNATING SECTIONS */}
        <div className="container mx-auto px-4 max-w-7xl py-12 lg:py-20 space-y-24 lg:space-y-32">
          
          {/* Section 1: Text Left, Image Right */}
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          >
            <div className="lg:w-1/2 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">What We Do</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Flysava helps users compare flight prices, routes, airlines, travel times, and booking options from third-party travel providers. Instead of visiting multiple websites one by one, travelers can use Flysava to explore available options and then continue directly to the provider they choose.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative h-[360px] sm:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80" 
                  alt="Traveler booking flight" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.section>

          {/* Section 2: Image Left, Text Right */}
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16"
          >
            <div className="lg:w-1/2 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">How Booking Works</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We do not sell flight tickets directly. We do not operate airlines, issue tickets, or manage bookings. When you select a flight or travel deal, you may be redirected to a third-party provider where the booking is completed under that provider's terms and conditions.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our platform is designed to be fast, simple, and easy to use across desktop and mobile devices.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative h-[360px] sm:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80" 
                  alt="Airplane tails at terminal" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.section>

          {/* Section 3: Text Left, Image Right */}
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          >
            <div className="lg:w-1/2 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Our Commitment</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We are committed to building a travel platform that is useful, transparent, and traveler-focused. Flysava is designed to help people compare options quickly, understand their choices, and book directly with the provider that best fits their needs.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We work to keep the website fast, secure, and easy to navigate. As Flysava grows, we plan to continue improving our search experience, travel content, route pages, and tools that help users make smarter travel decisions.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative h-[360px] sm:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1503221043305-f7498f8b7888?auto=format&fit=crop&w=800&q=80" 
                  alt="Travelers moving through airport" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.section>

        </div>

        {/* STATISTICS SECTION */}
        <div className="bg-white py-16 border-y border-slate-200/80">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-200/60"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* WHY CHOOSE FLYSAVA (FEATURE CARDS) */}
        <div className="container mx-auto px-4 max-w-7xl py-20 lg:py-24">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Why Choose Flysava</h2>
            <p className="text-base sm:text-lg text-slate-600">
              Flysava is built for travelers who want a straightforward way to compare travel options without distractions. We aim to provide:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featureCards.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="bg-blue-50/80 border-l-4 border-blue-600 p-6 rounded-r-2xl max-w-4xl mx-auto shadow-sm"
          >
            <p className="text-blue-950 text-sm sm:text-base italic font-medium leading-relaxed">
              Flight prices can change quickly due to airline availability, demand, currency changes, provider updates, and other factors. Flysava helps you discover available options, but final prices, baggage rules, seat availability, refunds, and booking terms are always controlled by the provider you choose.
            </p>
          </motion.div>
        </div>

        {/* MISSION SECTION (LIGHT EDITORIAL ELEVATION) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 max-w-5xl py-12"
        >
          <div className="bg-white border border-slate-200/80 rounded-3xl p-10 sm:p-16 text-center shadow-sm relative overflow-hidden">
            {/* Subtle Accent Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200/80 mb-6 shadow-sm">
              ✨ Core Purpose
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Our Mission
            </h2>
            <p className="text-lg sm:text-2xl text-slate-700 leading-relaxed mb-6 font-semibold max-w-3xl mx-auto">
              Our mission is to help people travel smarter and save more by making flight comparison simple, transparent, and accessible.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              We believe travel planning should feel clear, not complicated. Flysava exists to help travelers find useful information, compare options with confidence, and reach their next destination with more control over their budget.
            </p>
          </div>
        </motion.div>

        {/* INSPIRATION BANNER (PREMIUM BLUE ACCENT CTA CARD) */}
        <div className="container mx-auto px-4 max-w-7xl pt-8 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white"
          >
            {/* High-Clarity Light Blended Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1920&q=80" 
                alt="Beautiful beach sunset" 
                className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-800/40 to-transparent z-10" />
            </div>
            
            <div className="relative z-20 p-8 sm:p-14 lg:p-20 max-w-3xl">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                Fly Smart. Save More.
              </h2>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-8 font-normal">
                Flysava is built around one idea: better travel decisions should be easier to make. Whether you are planning a short domestic trip, an international journey, or your next holiday, Flysava helps you explore your options and move one step closer to your destination.
              </p>
              <button 
                onClick={handleExploreFlights}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-2xl transition-all shadow-lg hover:scale-105 text-base"
              >
                Start Your Journey <ArrowRight className="w-5 h-5 ml-2 text-blue-600" />
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </>
  );
};