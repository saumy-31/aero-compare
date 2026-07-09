import React from 'react';
import { SEO } from '../components/seo/SEO';
import { FlightSearchUI } from '../components/shared/FlightSearchUI';

export const Home = () => {
  // --- SEO JSON-LD Structured Data specifically for the Root Homepage ---
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "FlySava",
        "url": "https://flysava.com",
        "logo": "https://flysava.com/logo.png"
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

  return (
    <>
      {/* Root-specific SEO Metadata targeting general brand and broad flight comparison */}
      <SEO 
        title="Compare Cheap Flights Worldwide | FlySava"
        description="Search, compare, and book the cheapest flights from hundreds of airlines and travel agencies worldwide with FlySava."
        canonicalUrl="/"
        jsonLd={homeJsonLd}
      />
      
      {/* 
        The actual visual UI, search widget, scroll behavior, and animations 
        have been extracted to this shared component.
      */}
      <FlightSearchUI />
    </>
  );
};