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
  Image as ImageIcon
} from 'lucide-react';

export const Press = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const overviewCards = [
    { icon: <Search />, title: "Travel Comparison Platform" },
    { icon: <Globe2 />, title: "Global Destination Discovery" },
    { icon: <Plane />, title: "Flight Search Tools" },
    { icon: <BookOpen />, title: "Travel Guides & Content" },
    { icon: <UserCheck />, title: "User-Focused Experience" },
    { icon: <Smartphone />, title: "Mobile Friendly Platform" },
  ];

  const brandCards = [
    { icon: <ImageIcon />, title: "FlySava Logo Usage" },
    { icon: <Palette />, title: "Brand Colors" },
    { icon: <Type />, title: "Company Naming" },
    { icon: <ShieldAlert />, title: "Media References" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors pb-10">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* Professional, corporate travel-tech background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
            alt="Corporate workspace and media" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80 dark:bg-gray-900/90 z-10" />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 max-w-4xl text-center pt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md"
          >
            <Newspaper className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg"
          >
            News, Updates & Media Resources
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed drop-shadow-md font-medium max-w-3xl mx-auto"
          >
            Learn more about FlySava, our mission, and resources for journalists, media professionals, and industry partners.
          </motion.p>
        </div>
      </div>

      {/* 2. ABOUT FLYSAVA */}
      <div className="container mx-auto px-4 max-w-4xl py-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">About FlySava</h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              Flysava is a travel comparison platform designed to help travelers search, compare, and discover flight options from third-party travel providers.
            </p>
            <p className="font-medium text-gray-900 dark:text-gray-200">
              Our mission is to make travel planning simpler, more transparent, and more accessible through a fast and user-friendly experience.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 3. COMPANY OVERVIEW */}
      <div className="bg-white dark:bg-dark-card border-y border-gray-100 dark:border-dark-border py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Company Overview</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">The core pillars of our travel platform.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {overviewCards.map((card, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="flex items-center p-6 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-white dark:bg-dark-card text-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-sm flex-shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{card.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 4. PRESS & MEDIA INFORMATION */}
      <div className="container mx-auto px-4 max-w-5xl py-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-[2.5rem] p-8 md:p-14 shadow-xl shadow-gray-200/50 dark:shadow-none"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">Press & Media Information</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                FlySava is a travel comparison platform focused on helping travelers discover, compare, and explore flight options from third-party travel providers.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                For media inquiries, interview requests, partnership discussions, or brand-related questions, please contact us directly.
              </p>
            </div>
            
            {/* Professional Contact Card */}
            <div className="bg-gray-50 dark:bg-slate-800/50 p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-700/50 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Media Inquiries</h3>
              <a 
                href="mailto:contact@flysava.com" 
                className="block text-lg text-gray-600 dark:text-gray-300 mb-8 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                contact@flysava.com
              </a>
              <a 
                href="mailto:contact@flysava.com"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-md shadow-blue-500/20 group"
              >
                Contact Media Team <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. BRAND GUIDELINES */}
      <div className="bg-slate-900 py-24 border-y border-white/10 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-black text-white mb-4">Brand Guidelines</h2>
            <p className="text-lg text-gray-400">Rules and resources for representing FlySava.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {brandCards.map((card, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex items-center text-white hover:bg-white/10 transition-colors"
              >
                <div className="text-blue-400 mr-4">{card.icon}</div>
                <h3 className="font-bold">{card.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded-r-2xl max-w-3xl mx-auto text-center"
          >
            <p className="text-blue-100 font-medium">
              Please contact us before using FlySava branding in publications, promotional materials, or commercial content.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 6. COMPANY UPDATES */}
      <div className="container mx-auto px-4 max-w-4xl py-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-center bg-white dark:bg-dark-card rounded-3xl p-10 md:p-16 border border-gray-100 dark:border-dark-border shadow-sm"
        >
          <div className="w-16 h-16 bg-gray-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Newspaper className="w-8 h-8 text-gray-400 dark:text-gray-500" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">Company Updates</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            As FlySava grows, official announcements, product updates, and company news will be published here. Check back periodically for the latest information regarding our platform.
          </p>
        </motion.div>
      </div>

    </div>
  );
};