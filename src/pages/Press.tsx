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
  Sparkles, 
  Newspaper, 
  Mail, 
  Palette, 
  Type, 
  ShieldAlert, 
  ArrowRight, 
  Info,
  Download,
  CheckCircle2,
  FileText,
  Share2,
  Layers
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';

declare const window: any;

export const Press: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  // Full Ecosystem Pillars
  const ecosystemPillars = [
    { 
      icon: <Plane className="w-5 h-5 text-blue-600" />, 
      title: "Flight Aggregation Engine",
      desc: "Real-time transparent fare comparisons across 100+ global airlines with zero platform markups."
    },
    { 
      icon: <Building2 className="w-5 h-5 text-indigo-600" />, 
      title: "Hotels & Lodging",
      desc: "Comprehensive hotel and stay comparisons tailored for every travel budget and itinerary."
    },
    { 
      icon: <Car className="w-5 h-5 text-amber-600" />, 
      title: "Ground Mobility & Rental Cars",
      desc: "Integrated car rental search and vehicle category comparison powered by Auto Europe."
    },
    { 
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />, 
      title: "International eSIM Roaming",
      desc: "Instant digital roaming mobile data packages in 180+ countries powered by Airalo."
    },
    { 
      icon: <MapPin className="w-5 h-5 text-rose-600" />, 
      title: "Destination Guides & Insights",
      desc: "Curated city directories, best travel windows, daily budget expectations, and verified attractions."
    },
    { 
      icon: <BookOpen className="w-5 h-5 text-cyan-600" />, 
      title: "Editorial Travel Journal",
      desc: "Deep-dive travel playbooks, airfare savings strategies, itineraries, and practical voyaging advice."
    },
  ];

  const brandCards = [
    { 
      icon: <FileText className="w-5 h-5 text-blue-600" />, 
      title: "FlySava Logo Suite", 
      desc: "High-resolution vector SVG and PNG logos for digital and print media." 
    },
    { 
      icon: <Palette className="w-5 h-5 text-indigo-600" />, 
      title: "Color Palette", 
      desc: "Official hex codes: Primary Blue (#2563EB), Dark Navy (#0F172A), and Slate neutrals." 
    },
    { 
      icon: <Type className="w-5 h-5 text-cyan-600" />, 
      title: "Company Naming", 
      desc: "Written as 'FlySava' (single word, camel-cased capital S). Never 'Fly Sava' or 'flysava'." 
    },
    { 
      icon: <ShieldAlert className="w-5 h-5 text-emerald-600" />, 
      title: "Media Attribution", 
      desc: "Guidelines for citing FlySava price indexes, guides, and travel trends." 
    },
  ];

  const pressJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Press & Media Resources | FlySava",
    "description": "Official press kit, media resources, brand assets, and platform updates from FlySava.",
    "url": "https://flysava.com/press"
  };

  return (
    <>
      <SEO 
        title="Press & Media Kit | FlySava Newsroom"
        description="Official press releases, media assets, platform capabilities, and brand guidelines from FlySava. Contact our media relations desk."
        canonicalUrl="/press"
        jsonLd={pressJsonLd}
      />
      
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER                                                            */}
        {/* ========================================================================= */}
        <section className="pt-12 sm:pt-16 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 lg:p-16 text-center border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            
            {/* Soft Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FlySava Newsroom & Press Kit</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                News, Updates & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Media Resources
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                Official resources, brand guidelines, and platform updates for journalists, content creators, researchers, and industry partners.
              </p>

              {/* Quick Pills */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-extrabold text-slate-700">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                  Press Inquiries
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                  Brand Guidelines
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                  Platform Architecture
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. ABOUT FLYSAVA EXECUTIVE SUMMARY                                        */}
        {/* ========================================================================= */}
        <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="bg-white rounded-[2.5rem] border border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-xl shadow-slate-900/5 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-6 lg:pb-0 lg:pr-8 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-2xs">
                  <Newspaper className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-blue-600 block">
                  Company Background
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  About FlySava
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                  FlySava is a modern travel aggregation and journey-planning platform that simplifies how travelers search, compare, and prepare for trips worldwide.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Beyond comparing airline fares across 100+ carriers, FlySava connects essential aspects of travel: hotel discovery, rental car fleets via Auto Europe, instant international eSIM connectivity via Airalo, destination directories, and practical editorial travel intelligence.
                </p>
              </div>

            </div>
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* 3. PLATFORM PILLARS (The Complete FlySava Ecosystem)                      */}
        {/* ========================================================================= */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              The FlySava Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Key areas of coverage for journalists, industry analysts, and media partners.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ecosystemPillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white border border-slate-200/90 p-7 rounded-3xl shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200/80 shadow-2xs">
                  {pillar.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-black text-slate-900 text-base">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PRESS & MEDIA CONTACT DESK                                            */}
        {/* ========================================================================= */}
        <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="bg-white border border-blue-200/80 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-xl shadow-blue-600/5 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[11px] font-black uppercase tracking-widest text-blue-600 block">
                  Media Inquiries & Partnerships
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Press & Communications Desk
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Our communications team assists with interview requests, data citations on travel trends, partner integrations, product announcements, and high-resolution brand assets.
                </p>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Executive commentary & travel industry insights</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Partnership & affiliate integration discussions</span>
                  </div>
                </div>
              </div>

              {/* Direct Press Box */}
              <div className="lg:col-span-5 bg-blue-50/80 p-7 sm:p-8 rounded-3xl border border-blue-200/60 text-center space-y-4">
                <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mx-auto border border-blue-100 shadow-2xs">
                  <Mail className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-blue-600 font-extrabold block mb-1">
                    Direct Media Inquiries
                  </span>
                  <a 
                    href="mailto:business@flysava.com" 
                    className="block text-xl sm:text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors tracking-wide"
                  >
                    business@flysava.com
                  </a>
                </div>

                <a 
                  href="mailto:contact@flysava.com"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/25 group cursor-pointer active:scale-95 gap-2"
                >
                  <span>Contact Communications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* 5. BRAND GUIDELINES & IDENTITY ASSETS                                     */}
        {/* ========================================================================= */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
              Identity Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Brand Guidelines & Assets
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Standards for accurately representing FlySava across digital and print publications.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {brandCards.map((card, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="bg-white border border-slate-200/90 p-6 sm:p-7 rounded-3xl shadow-2xs hover:shadow-lg transition-all space-y-3"
              >
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200/80 shadow-2xs">
                  {card.icon}
                </div>
                <h3 className="font-black text-slate-900 text-sm">{card.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="bg-blue-50/70 border border-blue-200/60 p-5 rounded-2xl max-w-3xl mx-auto text-center flex items-center justify-center gap-3"
          >
            <Info className="w-5 h-5 text-blue-600 shrink-0" />
            <p className="text-xs font-bold text-slate-700">
              Please contact the press desk before using official FlySava trademarks or assets in broadcast or commercial campaigns.
            </p>
          </motion.div>

        </section>

      </div>
    </>
  );
};

export default Press;