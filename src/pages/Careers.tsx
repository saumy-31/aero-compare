import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Search, 
  Lightbulb, 
  ShieldCheck, 
  Globe2, 
  Sparkles, 
  Laptop, 
  BookOpen, 
  Users, 
  Target, 
  Rocket, 
  ArrowRight,
  Compass, 
  CheckCircle2, 
  Mail, 
  Briefcase,
  Plane,
  Building2,
  Car,
  Smartphone,
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';

declare const window: any;

export const Careers: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  // Direct page reload to mount the Travelpayouts flight search engine widget cleanly
  const handleExploreFlights = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/#tpwl-search';
    }
  };

  const values = [
    { 
      icon: <Target className="w-5 h-5 text-blue-600" />, 
      title: "Traveler-First Clarity", 
      desc: "We design transparent tools that eliminate booking friction, hidden markups, and tab overload." 
    },
    { 
      icon: <Layers className="w-5 h-5 text-indigo-600" />, 
      title: "End-to-End Thinking", 
      desc: "Flights are just one part of a trip. We connect stays, ground transit, eSIM connectivity, and local insights." 
    },
    { 
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />, 
      title: "High Agency & Velocity", 
      desc: "Small, autonomous teams shipping performant, elegant digital products with high craft and minimal bureaucracy." 
    },
    { 
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />, 
      title: "Reliability & Speed", 
      desc: "Lightning-fast aggregation engines with robust API integrations across global airline and mobility partners." 
    },
    { 
      icon: <Globe2 className="w-5 h-5 text-sky-500" />, 
      title: "Global Mindset", 
      desc: "Building tools that empower modern explorers, digital nomads, and vacationers traveling across 180+ countries." 
    },
    { 
      icon: <Sparkles className="w-5 h-5 text-purple-600" />, 
      title: "Refined Simplicity", 
      desc: "Transforming complex multi-source travel data into intuitive, human-centered interfaces." 
    },
  ];

  const focusAreas = [
    {
      icon: <Search className="w-5 h-5 text-blue-600" />,
      title: "Search & Aggregation Engines",
      desc: "Engineering high-throughput pipelines that query hundreds of global airline routes, hotel inventories, and car rentals in real time."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
      title: "Travel Infrastructure & Connectivity",
      desc: "Integrating digital roaming via instant eSIM delivery (Airalo) and ground fleet logistics (Auto Europe)."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
      title: "Editorial Intelligence & Discovery",
      desc: "Building rich destination guides, seasonal matrices, price-tracking tools, and actionable travel strategies."
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-600" />,
      title: "Modern Web Architecture",
      desc: "Crafting sub-second, SEO-optimized, responsive web applications built with TypeScript, React, and modern edge tooling."
    }
  ];

  const lifeItems = [
    { 
      icon: <Laptop className="w-5 h-5 text-blue-600" />, 
      title: "Remote-First Flexibility", 
      desc: "Work asynchronously with autonomy, deep-work focus, and flexible hours from anywhere in the world." 
    },
    { 
      icon: <Terminal className="w-5 h-5 text-indigo-600" />, 
      title: "Modern Tech Stack", 
      desc: "Zero legacy debt. We build with modern React, TypeScript, Tailwind CSS, Vite, and distributed edge APIs." 
    },
    { 
      icon: <Users className="w-5 h-5 text-sky-600" />, 
      title: "Cross-Functional Synergy", 
      desc: "Engineers, designers, and travel writers work closely together to build cohesive end-to-end features." 
    },
    { 
      icon: <Rocket className="w-5 h-5 text-purple-600" />, 
      title: "Rapidly Expanding Scope", 
      desc: "From airfare search to a complete journey platform covering stays, cars, eSIMs, and destination intelligence." 
    },
  ];

  const careersJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at FlySava",
    "description": "Explore careers and future opportunities at FlySava. Help build the next-generation platform for global flights, stays, mobility, and travel discovery.",
    "url": "https://flysava.com/careers"
  };

  return (
    <>
      <SEO 
        title="Careers at FlySava | Building the Future of Travel"
        description="Join FlySava's mission to transform how modern travelers search, compare, and prepare for journeys worldwide."
        canonicalUrl="/careers"
        jsonLd={careersJsonLd}
      />
      
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER                                                            */}
        {/* ========================================================================= */}
        <section className="pt-12 sm:pt-16 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 lg:p-16 text-center border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            
            {/* Subtle glow background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Travel Technology & Exploration</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Building the future of <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  how people travel.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                FlySava is creating the connected platform for modern voyagers — uniting airfare search, curated stays, car rentals, travel eSIMs, and destination intelligence in one seamless experience.
              </p>

              {/* Feature Pills */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 text-xs font-extrabold text-slate-700">
                <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Complete Travel Stack
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Remote-First Culture
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Global Impact
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. OUR CORE PURPOSE                                                       */}
        {/* ========================================================================= */}
        <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-xl shadow-slate-900/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-6 lg:pb-0 lg:pr-10 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-2xs">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-blue-600 block">
                  Our Mission
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  One unified hub for the entire journey.
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                  Travel planning shouldn’t require juggling a dozen disconnected apps, opaque airline booking channels, and surprise fees. 
                </p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  At FlySava, we build software and editorial tools that give travelers absolute clarity. We aggregate flights, hotels, car rentals, and mobile connectivity under one intuitive roof so people can focus on the adventure, not the logistics.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. TECHNICAL & PRODUCT FOCUS AREAS                                        */}
        {/* ========================================================================= */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
              What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Engineering the Modern Travel Platform
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              The core technical pillars powering the FlySava ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {area.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-black text-slate-900 leading-snug">{area.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WHAT WE VALUE (OUR CULTURE)                                            */}
        {/* ========================================================================= */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
              Principles & Ethos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What We Value
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              The guiding standards behind our product design and engineering decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 p-7 sm:p-8 rounded-[2rem] shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200/80 shadow-2xs">
                  {value.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-black text-slate-900">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. LIFE AT FLYSAVA                                                        */}
        {/* ========================================================================= */}
        <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-xl shadow-slate-900/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Photo Collage */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 group">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 group mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                    alt="Developer workspace" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>

              {/* Features List */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-blue-600 block mb-1">
                    Work Environment
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Life at FlySava
                  </h2>
                </div>
                
                <div className="space-y-3.5">
                  {lifeItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-200/80 shadow-2xs">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-slate-900">{item.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed font-normal mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. FUTURE TALENT NETWORK / RESUME SUBMISSION                              */}
        {/* ========================================================================= */}
        <section className="pt-8 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Status Note */}
          <div className="bg-white border border-slate-200/90 p-8 sm:p-10 rounded-[2.5rem] text-center shadow-xl shadow-slate-900/5 max-w-4xl mx-auto space-y-3">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto border border-blue-100 shadow-2xs">
              <Rocket className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Building for the Long Run
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              While we may not have specific open listings posted at this exact moment, FlySava continues to rapidly scale. As our travel services, route indexes, and mobility integrations expand, future roles in engineering, product design, content strategy, and partner integrations will open.
            </p>
          </div>

          {/* Email Talent Network Card */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 text-center border border-blue-200/80 shadow-xl shadow-blue-600/5 max-w-4xl mx-auto space-y-6">
            
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-widest bg-blue-50 text-blue-600 border border-blue-200/70">
                <Briefcase className="w-3.5 h-3.5" /> Future Talent Network
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Connect with FlySava
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
                Passionate about shaping modern travel technology? Send us your portfolio, GitHub, or resume. We review incoming profiles for future team expansions.
              </p>
            </div>

            {/* Email Box */}
            <div className="bg-blue-50/80 rounded-2xl p-6 border border-blue-200/60 max-w-md mx-auto space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-widest text-blue-600 font-extrabold">
                <Mail className="w-3.5 h-3.5" /> Direct Talent Inbox
              </div>
              <a 
                href="mailto:careers@flysava.com" 
                className="text-xl sm:text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors tracking-wide block"
              >
                careers@flysava.com
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button 
                type="button"
                onClick={handleExploreFlights}
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md shadow-blue-600/25 cursor-pointer active:scale-95 inline-flex items-center gap-2"
              >
                <span>Search Flights</span>
                <Plane className="w-3.5 h-3.5 transform -rotate-45" />
              </button>
              <button 
                type="button"
                onClick={() => navigate('/destinations')}
                className="px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-xs uppercase tracking-wider rounded-2xl transition-all border border-slate-200 cursor-pointer active:scale-95 inline-flex items-center gap-2"
              >
                <span>Explore Destinations</span>
                <Compass className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>

          </div>

        </section>

      </div>
    </>
  );
};

export default Careers;