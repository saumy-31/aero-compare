import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { FlightSearchUI } from '../features/flights/components/FlightSearchUI';

export const FlightsPage = () => {
  const location = useLocation();

  // Dynamic Metadata, Schema, and Section rendering based on current path
  const routeConfig = useMemo(() => {
    switch (location.pathname) {
      case '/hotels':
        return {
          title: "Compare Cheap Hotels & Resorts Worldwide | FlySava",
          description: "Search and compare the best hotel deals, luxury resorts, and budget stays across the globe with FlySava.",
          canonicalUrl: "/hotels",
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cheap Hotel Search & Accommodation Comparison | FlySava",
            "description": "Compare hotel deals from top booking platforms worldwide with FlySava.",
            "url": "https://flysava.com/hotels"
          }
        };
      case '/cars':
        return {
          title: "Cheap Car Rentals & Airport Transfers | FlySava",
          description: "Compare car rental prices from top global agencies and find the best rates for your next road trip with FlySava.",
          canonicalUrl: "/cars",
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cheap Car Rentals & Global Fleet Search | FlySava",
            "description": "Compare car rental options and book vehicles worldwide with FlySava.",
            "url": "https://flysava.com/cars"
          }
        };
      case '/esim':
        return {
          title: "Global Travel eSIMs & Instant Mobile Data | FlySava",
          description: "Stay connected in 180+ countries with instant prepaid travel eSIM data plans. No physical SIM card required.",
          canonicalUrl: "/esim",
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Global Travel eSIM Data Plans | FlySava",
            "description": "Get instant mobile data connectivity worldwide with FlySava eSIMs.",
            "url": "https://flysava.com/esim"
          }
        };
      default: // '/flights' or fallback
        return {
          title: "Cheap Flight Search & Flight Comparison | FlySava",
          description: "Compare cheap flights from hundreds of airlines and travel sites. Search, compare prices, and book the best flight deals worldwide with FlySava.",
          canonicalUrl: "/flights",
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cheap Flight Search & Flight Comparison | FlySava",
            "description": "Compare cheap flights from hundreds of airlines and travel sites. Search, compare prices, and book the best flight deals worldwide with FlySava.",
            "url": "https://flysava.com/flights"
          }
        };
    }
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title={routeConfig.title}
        description={routeConfig.description}
        canonicalUrl={routeConfig.canonicalUrl}
        jsonLd={routeConfig.jsonLd}
      />
      <FlightSearchUI />
    </>
  );
};

export default FlightsPage;