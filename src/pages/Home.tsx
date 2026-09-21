import { SEO } from '../components/seo/SEO';
import { FlightSearchUI } from '../features/flights/components/FlightSearchUI';

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
          "target": "https://flysava.com/flights?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://flysava.com/#main-nav",
        "name": "FlySava Products",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "Flights",
            "url": "https://flysava.com/flights",
            "description": "Compare cheap flight deals from 100s of airlines and travel sites."
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Hotels",
            "url": "https://flysava.com/hotels",
            "description": "Compare hotel rates across 2M+ stays worldwide."
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Car Rentals",
            "url": "https://flysava.com/cars",
            "description": "Compare car rental prices from leading suppliers worldwide."
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "eSIM",
            "url": "https://flysava.com/esim",
            "description": "Prepaid travel eSIM mobile data plans for 200+ countries."
          }
        ]
      }
    ]
  };

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

export default Home;