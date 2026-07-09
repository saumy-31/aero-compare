import React from 'react';
import { SEO } from '../components/seo/SEO';
import { FlightSearchUI } from '../components/shared/FlightSearchUI';

export const FlightsPage = () => {
  const flightsJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cheap Flight Search & Flight Comparison | FlySava",
    "description": "Compare cheap flights from hundreds of airlines and travel sites. Search, compare prices, and book the best flight deals worldwide with FlySava.",
    "url": "https://flysava.com/flights"
  };

  return (
    <>
      <SEO 
        title="Cheap Flight Search & Flight Comparison | FlySava"
        description="Compare cheap flights from hundreds of airlines and travel sites. Search, compare prices, and book the best flight deals worldwide with FlySava."
        canonicalUrl="/flights"
        jsonLd={flightsJsonLd}
      />
      <FlightSearchUI />
    </>
  );
};