import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plane, 
  Building2, 
  Car, 
  Smartphone, 
  MapPin, 
  BookOpen, 
  Sparkles, 
  Newspaper, 
  Mail, 
  Palette, 
  Type, 
  ShieldAlert, 
  ArrowRight, 
  Info,
  CheckCircle2,
  FileText,
  Globe2,
  Download,
  HelpCircle,
  TrendingUp,
  Compass,
  Layers,
  Award,
  Zap,
  Radio
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

  const handleExploreFlights = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/#tpwl-search';
    }
  };

  const fastFacts = [
    { label: "Founded & Mission", value: "Built to simplify global travel planning & price transparency" },
    { label: "Platform Type", value: "Independent travel metasearch & aggregation engine" },
    { label: "Core Verticals", value: "Flights, Hotel Stays, Car Rentals, eSIM Data & Guides" },
    { label: "Coverage", value: "180+ countries & 50,000+ global air routes indexed" },
    { label: "Pricing Model", value: "100% Free for consumers — Zero platform markups" },
    
  ];

  const ecosystemPillars = [
    { 
      icon: <Plane className="w-5 h-5 text-blue-600" />, 
      title: "Flight Aggregation Engine",
      desc: "Real-time transparent fare comparisons querying 100+ global airlines and online travel agencies simultaneously with zero consumer markups."
    },
    { 
      icon: <Building2 className="w-5 h-5 text-indigo-600" />, 
      title: "Lodging & Accommodations",
      desc: "Comprehensive hotel, resort, and apartment comparisons tailored for every travel budget and matched directly to flight arrival routes."
    },
    { 
      icon: <Car className="w-5 h-5 text-amber-600" />, 
      title: "Ground Mobility & Rental Cars",
      desc: "Integrated vehicle rental search powered by Auto Europe, comparing thousands of international airport and city pickup locations."
    },
    { 
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />, 
      title: "International eSIM Roaming",
      desc: "Prepaid digital cellular data packages in 180+ countries powered by Airalo, delivered instantly via QR code to eliminate roaming fees."
    },
    { 
      icon: <MapPin className="w-5 h-5 text-rose-600" />, 
      title: "Destination Guides & Insights",
      desc: "Curated city directories, best seasonal travel windows, daily budget expectations, and verified local attraction indexes."
    },
    { 
      icon: <Radio className="w-5 h-5 text-cyan-600" />, 
      title: "Live Transit & Flight Status",
      desc: "Live departure, arrival, terminal, and gate update tracking tools to support explorers before and during active transit."
    },
  ];

  const brandRules = [
    { 
      icon: <FileText className="w-5 h-5 text-blue-600" />, 
      title: "Logotype & Symbol", 
      desc: "Always display the FlySava logo with clear surrounding padding. Do not rotate, distort, or modify the gradient balance." 
    },
    { 
      icon: <Palette className="w-5 h-5 text-indigo-600" />, 
      title: "Official Palette", 
      desc: "Primary Blue (#2563EB), Indigo Accent (#4F46E5), Dark Navy Slate (#0F172A), and Neutral Canvas (#F8FAFC)." 
    },
    { 
      icon: <Type className="w-5 h-5 text-cyan-600" />, 
      title: "Spelling & Typography", 
      desc: "Written as 'FlySava' (single word with capital 'F' and capital 'S'). Never spell as 'Fly Sava', 'Fly-Sava', or 'flysava'." 
    },
    { 
      icon: <ShieldAlert className="w-5 h-5 text-emerald-600" />, 
      title: "Data & Attribution", 
      desc: "When citing FlySava price indexes, route data, or destination matrices in journalism, attribute directly to 'FlySava (flysava.com)'." 
    },
  ];

  const pressFaqs = [
    {
      q: "What is FlySava's primary platform role?",
      a: "FlySava operates as an independent travel metasearch engine. We do not sell flight tickets or act as a booking merchant; instead, we aggregate real-time prices from airlines, hotel providers, and mobility partners so travelers can compare options with complete transparency."
    },
    {
      q: "Can media outlets and researchers cite FlySava pricing trends?",
      a: "Yes. Journalists and market researchers are welcome to reference route pricing observations, travel indexes, and seasonal matrices published across FlySava with appropriate attribution."
    },
    {
      q: "How does FlySava handle media interviews and executive commentary?",
      a: "Our communications team handles interview requests, founder quotes, travel technology insights, and industry trend analyses via our dedicated press desk at business@flysava.com."
    },
    {
      q: "Where can press partners access high-resolution brand assets?",
      a: "Official vector SVGs, logo lockups, and product screenshots are provided upon request through our media desk."
    }
  ];

  const pressJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Press & Media Resources | FlySava Newsroom",
    "description": "Official press releases, media resources, brand assets, platform capabilities, and newsroom updates from FlySava.",
    "url": "https://flysava.com/press"
  };

  return (
    <>
      <SEO 
        title="Press & Media Kit | FlySava Newsroom"
        description="Official press releases, media assets, platform capabilities, and brand guidelines from FlySava. Contact our communications desk."
        canonicalUrl="/press"
        jsonLd={pressJsonLd}
      />
      
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-24">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER                                                            */}
        {/* ========================================================================= */}
        <header className="pt-16 sm:pt-24 pb-16 border-b border-slate-200/80 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5" /> Newsroom & Media Relations
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
              News, Updates & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Media Resources
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
              Official company background, platform capabilities, brand identity standards, and contact channels for journalists, editors, analysts, and industry partners.
            </p>

            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-100 text-left sm:text-center">
              <div>
                <div className="text-3xl font-black text-slate-900">100+</div>
                <div className="text-xs font-bold text-slate-500 mt-0.5">Airlines Compared</div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-600">180+</div>
                <div className="text-xs font-bold text-slate-500 mt-0.5">Countries Covered</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">100%</div>
                <div className="text-xs font-bold text-slate-500 mt-0.5">Direct Transparency</div>
              </div>
              <div>
                <div className="text-3xl font-black text-indigo-600">0%</div>
                <div className="text-xs font-bold text-slate-500 mt-0.5">Platform Markups</div>
              </div>
            </div>

          </div>
        </header>

        {/* ========================================================================= */}
        {/* 2. ABOUT FLYSAVA / EXECUTIVE SUMMARY                                      */}
        {/* ========================================================================= */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-28">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
                01 &bull; COMPANY OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                About FlySava
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                FlySava is a modern travel metasearch and discovery platform designed to simplify how travelers search, compare, and prepare for international journeys.
              </p>
              <p>
                Rather than forcing explorers to navigate fragmented booking portals with hidden surcharges, FlySava unites the entire journey stack into a clean, intuitive interface: real-time airline fare comparisons, curated hotel stays, vehicle rentals via Auto Europe, instant prepaid eSIM mobile data powered by Airalo, and deep destination guides.
              </p>
              <p>
                We operate with 100% pricing transparency. Users can search and filter available deals freely, clicking through directly to verified airlines and licensed travel partners to finalize bookings under official terms with zero intermediary markups.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. FAST FACTS & METRICS SHEET                                             */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-y border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
                02 &bull; FACT SHEET
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Fast Facts for Media & Analysts
              </h2>
              <p className="text-sm text-slate-500 font-normal">
                Key reference points and organizational details for publications and reporting.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {fastFacts.map((fact, idx) => (
                <div key={idx} className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
                  <div className="sm:col-span-4 text-xs sm:text-sm font-black text-slate-900">
                    {fact.label}
                  </div>
                  <div className="sm:col-span-8 text-xs sm:text-sm text-slate-600 font-medium">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PLATFORM CAPABILITIES & ECOSYSTEM PILLARS                              */}
        {/* ========================================================================= */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
              03 &bull; PLATFORM PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              The FlySava Ecosystem
            </h2>
            <p className="text-sm text-slate-500 font-normal">
              The integrated verticals making up our connected travel technology platform.
            </p>
          </div>

          <div className="divide-y divide-slate-200/70">
            {ecosystemPillars.map((pillar, idx) => (
              <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-1 p-2 rounded-xl bg-white border border-slate-200/80 w-fit">
                  {pillar.icon}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-base font-black text-slate-900">{pillar.title}</h3>
                </div>
                <div className="md:col-span-7 text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 5. BRAND IDENTITY GUIDELINES                                              */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-y border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
                04 &bull; BRAND ASSETS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Brand Guidelines & Usage
              </h2>
              <p className="text-sm text-slate-500 font-normal">
                Standards for accurately representing FlySava in digital, broadcast, and print publications.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {brandRules.map((rule, idx) => (
                <div key={idx} className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-1 p-2 rounded-xl bg-slate-50 border border-slate-100 w-fit">
                    {rule.icon}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-lg font-black text-slate-900">{rule.title}</h3>
                  </div>
                  <div className="md:col-span-7 text-sm text-slate-600 leading-relaxed font-normal">
                    {rule.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/60 flex items-start sm:items-center gap-3">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-xs font-bold text-slate-700 leading-relaxed">
                Please contact our media team before using FlySava branding in commercial advertising or promotional campaigns.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. MEDIA FAQ SECTION                                                      */}
        {/* ========================================================================= */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
              05 &bull; PRESS FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 font-normal">
              Common questions from journalists, researchers, and media partners.
            </p>
          </div>

          <div className="divide-y divide-slate-200/80">
            {pressFaqs.map((faq, idx) => (
              <div key={idx} className="py-6 space-y-2">
                <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-start gap-2">
                  <span className="text-blue-600 font-black">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 7. MEDIA INQUIRIES & CONTACT DESK                                         */}
        {/* ========================================================================= */}
        <section className="pt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-200/90 p-8 sm:p-14 shadow-xl shadow-slate-900/5 text-center space-y-6">
            
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100">
                <Mail className="w-3.5 h-3.5" /> Communications Desk
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Media & Partnership Inquiries
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                For press releases, executive interview requests, travel pricing data citations, or partnership proposals, please reach out directly to our communications team.
              </p>
            </div>

            <div className="pt-2">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-black mb-1">
                Official Media Inquiries
              </p>
              <a 
                href="mailto:business@flysava.com" 
                className="text-2xl sm:text-3xl font-black text-blue-600 hover:text-blue-700 transition-colors tracking-wide"
              >
                business@flysava.com
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
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

export default Press;