import React from 'react';
import { Globe, Luggage, FileText, DollarSign, Sparkles } from 'lucide-react';
import { SEO } from '../components/seo/SEO';
import { FlightSearchUI } from '../components/shared/FlightSearchUI';

export const Home = () => {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "FlySava",
        "url": "https://flysava.com",
        "logo": "https://flysava.com/icon-192.png"
      },
      {
        "@type": "WebSite",
        "name": "FlySava",
        "url": "https://flysava.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://flysava.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  const benefits = [
    {
      icon: Globe,
      title: "Compare 100+ Travel Sites",
      desc: "Search major airlines, regional carriers, and online travel agencies simultaneously in real time."
    },
    {
      icon: Luggage,
      title: "Baggage Info",
      desc: "Clear visibility into cabin and checked baggage allowances before you confirm your booking."
    },
    {
      icon: FileText,
      title: "Visa Requirements",
      desc: "Stay informed with instant layover and destination visa guidelines for your trip."
    },
    {
      icon: DollarSign,
      title: "Final Price, No Hidden Fees",
      desc: "100% transparent pricing directly from airlines and verified travel partners."
    }
  ];

  return (
    <>
      <SEO 
        title="Compare Cheap Flights Worldwide | FlySava"
        description="Search, compare, and book the cheapest flights from hundreds of airlines and travel agencies worldwide with FlySava."
        canonicalUrl="/"
        jsonLd={homeJsonLd}
      />

      <div className="bg-[#F8FAFC] text-[#111827] font-sans selection:bg-blue-100 selection:text-blue-900 min-h-screen">
        
        {/* ================= 1. HERO + SEARCH ENGINE WIDGET ================= */}
        <FlightSearchUI />

        {/* ================= 2. BENEFIT CARDS ROW ================= */}
        <section className="pt-10 sm:pt-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-md mx-auto mb-8 sm:mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-50 text-[#2563EB] border border-blue-200/60 shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#2563EB]" /> Why Choose FlySava
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Smarter Airfare Search
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  className="p-6 rounded-[24px] bg-white border border-[#E5E7EB] shadow-2xs hover:border-blue-500/70 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#2563EB] border border-blue-100/60 flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-black text-[#111827] tracking-tight">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </>
  );
};