import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Plane, 
  BookOpen, 
  UserCheck, 
  Smartphone, 
  Globe2, 
  Mail, 
  Palette, 
  Type, 
  ShieldAlert, 
  ArrowRight,
  Newspaper,
  Image as ImageIcon,
  Sparkles,
  Info
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';

// Explicit ambient declarations for VS Code editor stability
declare const window: any;

export const Press = () => {
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

  const overviewCards = [
    { icon: <Search className="w-5 h-5 text-blue-600" />, title: "Travel Comparison Platform" },
    { icon: <Globe2 className="w-5 h-5 text-blue-600" />, title: "Global Destination Discovery" },
    { icon: <Plane className="w-5 h-5 text-blue-600" />, title: "Flight Search Tools" },
    { icon: <BookOpen className="w-5 h-5 text-blue-600" />, title: "Travel Guides & Content" },
    { icon: <UserCheck className="w-5 h-5 text-blue-600" />, title: "User-Focused Experience" },
    { icon: <Smartphone className="w-5 h-5 text-blue-600" />, title: "Mobile Friendly Platform" },
  ];

  const brandCards = [
    { icon: <ImageIcon className="w-5 h-5 text-blue-600" />, title: "FlySava Logo Usage" },
    { icon: <Palette className="w-5 h-5 text-blue-600" />, title: "Brand Colors" },
    { icon: <Type className="w-5 h-5 text-blue-600" />, title: "Company Naming" },
    { icon: <ShieldAlert className="w-5 h-5 text-blue-600" />, title: "Media References" },
  ];

  const pressJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Press & Media Resources | FlySava",
    "description": "Official press releases, media resources, brand guidelines, and company updates from FlySava.",
    "url": "https://flysava.com/press"
  };

  return (
    <>
      <SEO 
        title="Press & Media Resources | FlySava"
        description="Official press releases, media resources, brand guidelines, and company updates from FlySava. Contact our media team for inquiries."
        canonicalUrl="/press"
        jsonLd={pressJsonLd}
      />
      
      <div className="min-h-screen bg-[#EEF2F6] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
        
        {/* ================= 1. BRIGHT & CLEAN HERO HEADER ================= */}
        <section className="pt-16 sm:pt-20 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-600 border border-blue-200/70 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" /> Media Kit & Resources
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                News, Updates & <br className="hidden sm:inline" />
                <span className="text-blue-600">Media Resources</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                Learn more about FlySava, our mission, and resources for journalists, media professionals, and industry partners.
              </p>

            </div>

          </div>

        </section>

        {/* ================= 2. ABOUT FLYSAVA ================= */}
        <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="bg-white rounded-[2.5rem] border border-slate-200/90 p-8 sm:p-12 lg:p-14 text-center shadow-xl shadow-slate-900/5 max-w-4xl mx-auto"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100 shadow-2xs">
              <Newspaper className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              About FlySava
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              <p>
                FlySava is a travel comparison platform designed to help travelers search, compare, and discover flight options from third-party travel providers.
              </p>
              <p className="font-bold text-slate-900">
                Our mission is to make travel planning simpler, more transparent, and more accessible through a fast and user-friendly experience.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= 3. COMPANY OVERVIEW ================= */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 block mb-1">
              Platform Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Company Overview
            </h2>
            <p className="text-sm text-slate-500 font-normal mt-1">
              The core foundations powering our flight comparison suite.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {overviewCards.map((card, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="flex items-center p-6 bg-white rounded-[2rem] border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mr-4 border border-blue-100 flex-shrink-0 shadow-2xs">
                  {card.icon}
                </div>
                <h3 className="font-black text-slate-900 text-base">{card.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= 4. PRESS & MEDIA CONTACT ================= */}
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
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 block">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Press & Media Inquiries
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  FlySava is a travel comparison platform focused on helping travelers discover, compare, and explore flight options from third-party travel providers.
                </p>
                <p className="text-slate-900 text-xs sm:text-sm leading-relaxed font-bold">
                  For media inquiries, interview requests, partnership discussions, or brand-related questions, please contact us directly.
                </p>
              </div>

              {/* Contact Card */}
              <div className="lg:col-span-5 bg-blue-50/70 p-8 rounded-3xl border border-blue-200/60 text-center">
                <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100 shadow-2xs">
                  <Mail className="w-7 h-7" />
                </div>

                <span className="text-[10px] uppercase tracking-widest text-blue-600 font-extrabold block mb-1">
                  Official Press Desk
                </span>

                <a 
                  href="mailto:business@flysava.com" 
                  className="block text-xl font-black text-slate-900 hover:text-blue-600 transition-colors mb-6"
                >
                  business@flysava.com
                </a>

                <a 
                  href="mailto:contact@flysava.com"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl text-xs transition-all shadow-md shadow-blue-600/25 group cursor-pointer active:scale-95"
                >
                  Contact Media Team <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </motion.div>
        </section>

        {/* ================= 5. BRAND GUIDELINES ================= */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 block mb-1">
              Identity Assets
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Brand Guidelines
            </h2>
            <p className="text-sm text-slate-500 font-normal mt-1">
              Standard rules and resources for representing FlySava.
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
                className="bg-white border border-slate-200/90 p-6 rounded-[2rem] flex items-center shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mr-3.5 border border-blue-100 flex-shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-black text-slate-900 text-sm">{card.title}</h3>
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
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <p className="text-xs font-bold text-slate-700">
              Please contact us before using FlySava branding in publications, promotional materials, or commercial content.
            </p>
          </motion.div>

        </section>

        {/* ================= 6. COMPANY UPDATES ================= */}
        <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="text-center bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-900/5 max-w-4xl mx-auto"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100 shadow-2xs">
              <Newspaper className="w-6 h-6" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
              Company Updates
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              As FlySava grows, official announcements, product updates, and company news will be published here. Check back periodically for the latest information regarding our platform.
            </p>
          </motion.div>
        </section>

      </div>
    </>
  );
};