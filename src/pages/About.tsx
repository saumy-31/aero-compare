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
  MapPin 
} from 'lucide-react';

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
    { title: "Flight Comparison", icon: <Search />, desc: "A clean and easy-to-use flight comparison experience." },
    { title: "Trusted Providers", icon: <ShieldCheck />, desc: "Access to offers from trusted third-party travel providers." },
    { title: "Fast Search Experience", icon: <Zap />, desc: "Direct links to booking sources." },
    { title: "Travel Insights", icon: <Map />, desc: "Helpful travel tips, route information, and savings guides." },
    { title: "Mobile Friendly", icon: <Smartphone />, desc: "A fast, mobile-friendly website experience." },
    { title: "Transparent Pricing", icon: <Tag />, desc: "Transparent information without hidden Flysava booking fees." },
  ];

  const stats = [
    { icon: <Globe2 />, value: "100+", label: "Travel Sources" },
    { icon: <MapPin />, value: "200+", label: "Destinations" },
    { icon: <Clock />, value: "24/7", label: "Search Access" },
    { icon: <Plane />, value: "Global", label: "Coverage" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors pb-10">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* High-quality airport terminal view */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80" 
            alt="Travel background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/60 dark:bg-gray-900/80 z-10" />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 max-w-4xl text-center pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Your Gateway to Smarter Flight Savings
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed drop-shadow-md"
          >
            Flysava is a modern travel comparison platform created to help travelers search, compare, and discover better flight deals with less effort. Our goal is simple: make flight planning faster, clearer, and more transparent.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onClick={handleExploreFlights}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/30 text-lg"
          >
            Start Exploring Flights <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </div>
      </div>

      {/* ALTERNATING SECTIONS */}
      <div className="container mx-auto px-4 max-w-7xl py-24 space-y-32">
        
        {/* Section 1: Text Left, Image Right */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">What We Do</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Flysava helps users compare flight prices, routes, airlines, travel times, and booking options from third-party travel providers. Instead of visiting multiple websites one by one, travelers can use Flysava to explore available options and then continue directly to the provider they choose.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
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
          className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
        >
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">How Booking Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We do not sell flight tickets directly. We do not operate airlines, issue tickets, or manage bookings. When you select a flight or travel deal, you may be redirected to a third-party provider where the booking is completed under that provider's terms and conditions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Our platform is designed to be fast, simple, and easy to use across desktop and mobile devices.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
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
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">Our Commitment</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We are committed to building a travel platform that is useful, transparent, and traveler-focused. Flysava is designed to help people compare options quickly, understand their choices, and book directly with the provider that best fits their needs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We work to keep the website fast, secure, and easy to navigate. As Flysava grows, we plan to continue improving our search experience, travel content, route pages, and tools that help users make smarter travel decisions.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
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
      <div className="bg-slate-900 py-16 border-y border-white/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE FLYSAVA (FEATURE CARDS) */}
      <div className="container mx-auto px-4 max-w-7xl py-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">Why Choose Flysava</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
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
              className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-2xl max-w-4xl mx-auto"
        >
          <p className="text-blue-900 dark:text-blue-100 italic font-medium leading-relaxed">
            Flight prices can change quickly due to airline availability, demand, currency changes, provider updates, and other factors. Flysava helps you discover available options, but final prices, baggage rules, seat availability, refunds, and booking terms are always controlled by the provider you choose.
          </p>
        </motion.div>
      </div>

      {/* MISSION SECTION (FULL WIDTH) */}
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
        className="relative w-full py-32 flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1920&q=80" 
            alt="Above the clouds" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 dark:bg-gray-900/80 z-10" />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight drop-shadow-lg">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 font-medium">
            Our mission is to help people travel smarter and save more by making flight comparison simple, transparent, and accessible.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We believe travel planning should feel clear, not complicated. Flysava exists to help travelers find useful information, compare options with confidence, and reach their next destination with more control over their budget.
          </p>
        </div>
      </motion.div>

      {/* INSPIRATION BANNER */}
      <div className="container mx-auto px-4 max-w-7xl pt-24 pb-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1920&q=80" 
              alt="Beautiful beach sunset" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent z-10" />
          </div>
          
          <div className="relative z-20 p-10 md:p-16 lg:p-24 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Fly Smart. Save More.
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 font-medium">
              Flysava is built around one idea: better travel decisions should be easier to make. Whether you are planning a short domestic trip, an international journey, or your next holiday, Flysava helps you explore your options and move one step closer to your destination.
            </p>
            <button 
              onClick={handleExploreFlights}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-lg"
            >
              Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>
      </div>

    </div>
  );
};