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

        

      </div>
    </>
  );
};