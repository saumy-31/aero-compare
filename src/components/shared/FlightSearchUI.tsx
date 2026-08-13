import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { HotelSearchWidget } from './HotelSearchWidget';
import { CarRentalWidget } from './CarRentalWidget';
import { EsimWidget } from './EsimWidget';
import { getWhiteLabelIdByHostname } from '../../config/regions';
import { MOCK_BLOG_POSTS } from '../../data/mockBlogPosts';
import { SEO } from '../seo/SEO';
import { 
  Plane, Building, Car, Smartphone,
  Tag, Zap, Heart, TrendingUp,
  FileCheck, Luggage, ChevronDown, ArrowUpRight, ArrowRight,
  Award, ShieldCheck, Wifi, Sparkles, Fuel, Navigation, Globe,
  Users, Briefcase, CheckCircle2, Clock
} from 'lucide-react';

declare const window: any;
declare const document: any;
declare const setTimeout: (callback: () => void, ms?: number) => any;
declare const clearTimeout: (timeoutId: any) => void;

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

// Flight FAQs
const flightFaqs: FAQItem[] = [
  {
    question: "How does FlySava find cheap flight deals?",
    answer: "FlySava aggregates real-time flight data from hundreds of major airlines, low-cost carriers, and travel providers worldwide. We display direct and connecting routes side-by-side with transparent pricing so you can lock in the best fare."
  },
  {
    question: "Are there any hidden fees when booking flights through FlySava?",
    answer: "No. FlySava is committed to 100% price transparency. What you see is the final price provided by our travel partners, including mandatory taxes and standard fees."
  },
  {
    question: "When is the best time to book cheap flights?",
    answer: "Generally, booking 2 to 6 weeks in advance for domestic routes and 2 to 4 months in advance for international flights yields the best fares. Mid-week departures (Tuesdays and Wednesdays) also tend to offer lower rates."
  },
  {
    question: "Can I compare flights from multiple airlines on FlySava?",
    answer: "Yes. Our search engine scans multiple global carriers simultaneously, allowing you to easily compare flight times, layovers, ticket classes, and total prices in one place."
  },
  {
    question: "Can I find both direct and connecting flights on FlySava?",
    answer: "Absolutely. Search results clearly highlight nonstop routes alongside multi-stop itineraries, giving you full flexibility to prioritize either speed or cost."
  }
];

// Hotel FAQs with Clickable Manage Booking Link
const hotelFaqs: FAQItem[] = [
  {
    question: "How do I search hotel rates on FlySava?",
    answer: "Enter your destination, check-in/out dates, and guest count to view real-time direct rates across top global properties."
  },
  {
    question: "Are taxes and fees included in the room price?",
    answer: "All applicable nightly rates, taxes, and service charges are itemized before you confirm your booking."
  },
  {
    question: "Can I modify or cancel my hotel reservation?",
    answer: "Cancellation terms depend on the specific room rate selected (e.g., Free Cancellation vs. Non-Refundable)."
  },
  {
    question: "What amenities are included with my hotel booking?",
    answer: "Included amenities depend on the specific hotel and room rate. Check the room details before booking to see what is included."
  },
  {
    question: "What time is hotel check-in and check-out?",
    answer: "Check-in and check-out times vary by hotel. You can find the property's specific times in the hotel and room details before booking."
  },
  {
    question: "How can I check or manage my hotel booking?",
    answer: (
      <span>
        You can check your hotel reservation, view your booking details, or manage your reservation through FlySava's{' '}
        <a
          href="https://flysava.nuitee.link/manage-bookings?language=en&currency=INR&from=Lz9sYW5ndWFnZT1lbiZjdXJyZW5jeT1JTlI="
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 underline font-extrabold transition-colors"
        >
          Manage Booking page
        </a>
        .
      </span>
    )
  }
];

// Car FAQs
const carFaqs: FAQItem[] = [
  {
    question: "What do I need to rent a car?",
    answer: "You typically need a valid driver's license, a credit card in the main driver's name, and an International Driving Permit (IDP) if traveling abroad."
  },
  {
    question: "Are insurance and unlimited mileage included?",
    answer: "Most rentals include standard collision damage waivers (CDW) and theft protection. Rental terms highlight mileage limits clearly before booking."
  },
  {
    question: "Can I return the car to a different location?",
    answer: "Yes, many suppliers offer one-way rentals, allowing you to pick up your car in one city and drop it off in another. A one-way drop fee may apply."
  },
  {
    question: "Can I modify or cancel my rental?",
    answer: "Most bookings include free cancellation up to 48 hours before pick-up. You can easily manage your reservation online through your booking confirmation."
  },
  {
    question: "What should I check before picking up my rental car?",
    answer: "Always inspect the vehicle for existing damage, take photos of the exterior and interior, check the fuel level, and ensure you understand the toll and refueling policies."
  }
];

// eSIM FAQs
const esimFaqs: FAQItem[] = [
  {
    question: "Do I need a physical SIM card?",
    answer: "No, an eSIM is a digital SIM embedded directly in your smartphone. You do not need to insert or swap physical plastic cards."
  },
  {
    question: "How do I activate my travel eSIM?",
    answer: "Upon purchase, you will receive an instant QR code. Simply scan it in your phone settings under Cellular/Mobile Data to install your data profile."
  },
  {
    question: "Can I use an eSIM while keeping my regular SIM active?",
    answer: "Yes. On compatible devices, you can use the travel eSIM for mobile data while keeping your primary SIM active for calls and messages."
  },
  {
    question: "Will my eSIM work as soon as I arrive?",
    answer: "Once your eSIM is installed and activated, it can connect to a supported network in your destination. Follow the activation instructions provided with your eSIM plan."
  },
  {
    question: "How do I know if my phone supports eSIM?",
    answer: "Most newer smartphones support eSIM, but compatibility depends on your device model and region. Check your phone's network or SIM settings to confirm eSIM support."
  }
];

export const FlightSearchUI: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const activeTabFromUrl = useMemo(() => {
    const path = location.pathname.replace('/', '');
    if (['hotels', 'cars', 'esim', 'flights'].includes(path)) {
      return path as 'flights' | 'hotels' | 'cars' | 'esim';
    }
    const tabParam = searchParams.get('tab');
    if (tabParam && ['flights', 'hotels', 'cars', 'esim'].includes(tabParam)) {
      return tabParam as 'flights' | 'hotels' | 'cars' | 'esim';
    }
    return 'flights';
  }, [location.pathname, searchParams]);

  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'cars' | 'esim'>(activeTabFromUrl);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedTrustIndex, setSelectedTrustIndex] = useState<number | null>(null);

  useEffect(() => {
    setActiveTab(activeTabFromUrl);
    setSelectedTrustIndex(null);
  }, [activeTabFromUrl]);

  // Unique SEO metadata per tab
  const currentServiceSeo = useMemo(() => {
    switch (activeTab) {
      case 'hotels':
        return {
          title: "Search Hotel Deals Worldwide | FlySava",
          description: "Search hotels, resorts, and apartments worldwide. Compare available stays, room options, prices, and booking conditions for your trip.",
          canonicalUrl: "/hotels",
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "FlySava Hotel Search",
            "serviceType": "Hotel Comparison",
            "provider": {
              "@type": "Organization",
              "name": "FlySava",
              "url": "https://flysava.com"
            },
            "description": "Search hotels, resorts, and apartments worldwide and compare available stays, room options, prices, and booking conditions."
          }
        };
      case 'cars':
        return {
          title: "Compare Car Rental Deals Worldwide | FlySava",
          description: "Search and compare rental cars from leading suppliers worldwide. Explore vehicle options, rental terms, prices, and pickup locations for your trip.",
          canonicalUrl: "/cars",
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "FlySava Car Rental Search",
            "serviceType": "Car Rental Search",
            "provider": {
              "@type": "Organization",
              "name": "FlySava",
              "url": "https://flysava.com"
            },
            "description": "Search and compare rental cars from suppliers worldwide with options for vehicle types, rental terms, and pickup locations."
          }
        };
      case 'esim':
        return {
          title: "Travel eSIM Plans for 200+ Countries | FlySava",
          description: "Explore travel eSIM plans for destinations worldwide. Stay connected with mobile data while traveling and choose a plan that fits your trip.",
          canonicalUrl: "/esim",
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "FlySava Travel eSIM Data Service",
            "serviceType": "Mobile Connectivity",
            "provider": {
              "@type": "Organization",
              "name": "FlySava",
              "url": "https://flysava.com"
            },
            "description": "Explore travel eSIM mobile data plans for destinations worldwide to stay connected during international travel."
          }
        };
      case 'flights':
      default:
        return {
          title: "Compare Cheap Flights & Airline Deals | FlySava",
          description: "Compare flight options from airlines and travel providers worldwide. Search direct and connecting flights and compare routes, schedules, and fares in one place.",
          canonicalUrl: "/flights",
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "FlySava Flight Search & Comparison",
            "serviceType": "Flight Comparison",
            "provider": {
              "@type": "Organization",
              "name": "FlySava",
              "url": "https://flysava.com"
            },
            "description": "Search and compare flight options, routes, schedules, and fares from airlines and travel providers worldwide."
          }
        };
    }
  }, [activeTab]);

  const tabs = useMemo(
    () => [
      { id: 'flights', label: 'Flights', icon: Plane },
      { id: 'hotels', label: 'Hotels', icon: Building },
      { id: 'cars', label: 'Car Rental', icon: Car },
      { id: 'esim', label: 'eSIM', icon: Smartphone },
    ] as const,
    []
  );

  const heroContent = useMemo(
    () => ({
      flights: {
        headlinePrefix: 'Compare flight deals from ',
        headlineHighlight: '100s of sites.',
        topImage: 'https://images.pexels.com/photos/13342472/pexels-photo-13342472.jpeg',
        topImageTag: 'TOP DEALS TODAY',
      },
      hotels: {
        headlinePrefix: 'Explore 2M+ hotel deals from ',
        headlineHighlight: 'top stays.',
        topImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
        topImageTag: 'LUXURY RESORTS',
      },
      cars: {
        headlinePrefix: 'Search rental cars from ',
        headlineHighlight: 'suppliers.',
        topImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
        topImageTag: 'HERTZ • AVIS • SIXT',
      },
      esim: {
        headlinePrefix: 'Instant travel eSIM data in ',
        headlineHighlight: '200+ countries.',
        topImage: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=800&auto=format&fit=crop',
        topImageTag: 'INSTANT ACTIVATION',
      },
    }),
    []
  );

  const trustHighlightsMap = {
    flights: [
      { icon: Tag, label: 'Final Price Shown', color: 'text-blue-600' },
      { icon: Zap, label: 'No Hidden Fees', color: 'text-blue-600' },
      { icon: Luggage, label: 'Baggage Info', color: 'text-blue-600' },
      { icon: FileCheck, label: 'Visa Requirement', color: 'text-blue-600' },
    ],
    hotels: [
      { icon: Award, label: 'Best Rate Guarantee', color: 'text-blue-600' },
      { icon: Building, label: '2M+ Worldwide Hotels', color: 'text-blue-600' },
      { icon: ShieldCheck, label: 'Free Cancellation Options', color: 'text-blue-600' },
      { icon: Wifi, label: '24/7 Guest Support', color: 'text-blue-600' },
    ],
    cars: [
      { icon: ShieldCheck, label: 'Free Cancellation', color: 'text-blue-600' },
      { icon: Fuel, label: 'Fair Fuel Policies', color: 'text-blue-600' },
      { icon: Navigation, label: 'Unlimited Mileage', color: 'text-blue-600' },
      { icon: Award, label: 'Trusted Car Brands', color: 'text-blue-600' },
    ],
    esim: [
      { icon: Zap, label: 'Instant Digital Delivery', color: 'text-blue-600' },
      { icon: Tag, label: '200+ Destination Plans', color: 'text-blue-600' },
      { icon: Luggage, label: 'No Roaming Fees', color: 'text-blue-600' },
      { icon: FileCheck, label: 'Keep Primary Number', color: 'text-blue-600' },
    ],
  };

  const currentTrustHighlights = trustHighlightsMap[activeTab];

  const popularDestinations = useMemo(() => {
    return [
      { 
        id: 'paris', 
        city: 'Paris', 
        country: 'France', 
        priceUsd: '$160', 
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop' 
      },
      { 
        id: 'tokyo', 
        city: 'Tokyo', 
        country: 'Japan', 
        priceUsd: '$150', 
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&auto=format&fit=crop' 
      },
      { 
        id: 'dubai', 
        city: 'Dubai', 
        country: 'UAE', 
        priceUsd: '$250', 
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop' 
      },
      { 
        id: 'bali', 
        city: 'Bali', 
        country: 'Indonesia', 
        priceUsd: '$65', 
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&auto=format&fit=crop' 
      },
    ];
  }, []);

  const popularStays = useMemo(() => {
    return [
      {
        id: 'maldives',
        city: 'Maldives',
        country: 'Indian Ocean',
        description: 'Beach resorts & private villas',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&auto=format&fit=crop',
      },
      {
        id: 'santorini',
        city: 'Santorini',
        country: 'Greece',
        description: 'Luxury stays & sunset views',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&auto=format&fit=crop',
      },
      {
        id: 'singapore',
        city: 'Singapore',
        country: 'Southeast Asia',
        description: 'Premium city hotels',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&auto=format&fit=crop',
      },
      {
        id: 'swiss-alps-ch',
        city: 'Swiss Alps',
        country: 'Switzerland',
        description: 'Mountain resorts & scenic escapes',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&auto=format&fit=crop',
      },
    ];
  }, []);

  const vehicleCategories = [
    { title: 'Economy', description: 'Best for city trips and fuel savings', icon: Car, badge: 'Best Value', highlight: 'Easy Parking', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&auto=format&fit=crop' },
    { title: 'SUV', description: 'More space for passengers and luggage', icon: Users, badge: 'Family Choice', highlight: 'Extra Legroom', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop' },
    { title: 'Luxury', description: 'Premium sedans and high-end rides', icon: Sparkles, badge: 'First Class', highlight: 'Top Comfort', image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&auto=format&fit=crop' },
    { title: 'Van / Minivan', description: 'Ideal for groups and heavy baggage', icon: Briefcase, badge: 'Group Travel', highlight: '7+ Seaters', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop' },
  ];

  const carDestinations = useMemo(() => {
    return [
      { id: 'miami-us', city: 'Miami', country: 'Florida, USA', description: 'Coastal drives & city escapes', image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=1600&q=80' },
      { id: 'los-angeles-us', city: 'Los Angeles', country: 'California, USA', description: 'Road trips & California adventures', image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=1600&q=80' },
      { id: 'dubai', city: 'Dubai', country: 'UAE', description: 'Premium cars & desert drives', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop' },
      { id: 'rome', city: 'Rome', country: 'Italy', description: 'Scenic drives & Italian getaways', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&auto=format&fit=crop' },
    ];
  }, []);

  const flightBlogArticles = useMemo(() => {
    return MOCK_BLOG_POSTS.slice(0, 3).map(post => ({
      title: post.title,
      slug: post.slug,
      readTime: post.readTime,
      image: post.image
    }));
  }, []);

  const hotelBlogArticles = [
    {
      title: 'How to Choose the Right Hotel for Your Trip',
      slug: 'how-to-choose-the-right-hotel',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    },
    {
      title: 'What to Check Before Booking a Hotel',
      slug: 'what-to-check-before-booking-a-hotel',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80',
    },
    {
      title: 'Best Hotel Destinations for Your Next Trip',
      slug: 'best-hotel-destinations',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const esimBlogArticles = [
    {
      slug: 'how-to-use-an-esim-when-traveling-abroad',
      title: 'How to Use an eSIM When Traveling Abroad',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    },
    {
      slug: 'how-to-save-mobile-data-while-traveling',
      title: 'How to Save Mobile Data While Traveling',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1600&q=80',
    },
    {
      slug: 'esim-vs-physical-sim-for-travel',
      title: 'eSIM vs Physical SIM: Which Is Better for Travel?',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1600&q=80',
    }
  ];

  const roadTripArticles = [
    { 
      title: 'How to Choose the Right Rental Car for Your Trip', 
      slug: 'how-to-choose-the-right-rental-car', 
      readTime: '3 min read', 
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop' 
    },
    { 
      title: 'What to Check Before Picking Up Your Rental Car', 
      slug: 'what-to-check-before-picking-up-your-rental-car', 
      readTime: '4 min read', 
      image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&auto=format&fit=crop' 
    },
    { 
      title: 'Best Destinations for a Road Trip', 
      slug: 'best-destinations-for-a-road-trip', 
      readTime: '5 min read', 
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop' 
    },
  ];

  const esimConnectivityFeatures = [
    {
      title: "No Physical SIM",
      description: "Skip the SIM card shop and activate your travel data digitally.",
      icon: Smartphone
    },
    {
      title: "Keep Your Number",
      description: "Stay reachable on your primary number while using travel data abroad.",
      icon: ShieldCheck
    },
    {
      title: "Activate in Minutes",
      description: "Set up your eSIM before departure or activate it when you arrive.",
      icon: Zap
    },
    {
      title: "Travel Without Roaming Stress",
      description: "Use a dedicated travel data plan instead of relying on expensive roaming.",
      icon: Globe
    }
  ];

  const esimPopularDestinations = [
    {
      name: 'Japan',
      url: 'https://www.airalo.com/japan-esim?sharedID=633257_in.flysava.com&subId1=f4d154617e9d492ebb722dacf-633257'
    },
    {
      name: 'United Kingdom',
      url: 'https://www.airalo.com/united-kingdom-esim?sharedID=633257_in.flysava.com&subId1=f4d154617e9d492ebb722dacf-633257'
    },
    {
      name: 'USA',
      url: 'https://www.airalo.com/united-states-esim?sharedID=633257_in.flysava.com&subId1=f4d154617e9d492ebb722dacf-633257'
    },
    {
      name: 'Thailand',
      url: 'https://www.airalo.com/thailand-esim?sharedID=633257_in.flysava.com&subId1=f4d154617e9d492ebb722dacf-633257'
    },
    {
      name: 'Dubai',
      url: 'https://www.airalo.com/united-arab-emirates-esim?sharedID=633257_in.flysava.com&subId1=f4d154617e9d492ebb722dacf-633257'
    },
    {
      name: 'Europe',
      url: 'https://www.airalo.com/europe-esim?sharedID=633257_in.flysava.com&subId1=f4d154617e9d492ebb722dacf-633257'
    }
  ];

  // Flight Script Loading + Live Tickets Results Container Mounting
  useEffect(() => {
    if (activeTab !== 'flights') return;

    let resizeObserverInstance: any = null;
    let timer: ReturnType<typeof setTimeout> | null = null;

    timer = setTimeout(() => {
      const searchContainer = document.getElementById('tpwl-search');
      const ticketsContainer = document.getElementById('tpwl-tickets');

      if (!searchContainer) return;

      // Clear previous search instances
      searchContainer.innerHTML = '';
      if (ticketsContainer) ticketsContainer.innerHTML = '';

      const oldScript = document.getElementById('tpwl-script');
      if (oldScript) oldScript.remove();

      const currentHostname = window.location.hostname;
      const dynamicWlId = getWhiteLabelIdByHostname(currentHostname);

      // Inject Travelpayouts script
      const script = document.createElement('script');
      script.id = 'tpwl-script';
      script.async = true;
      script.type = 'module';
      script.src = `https://tpwgts.com/wl_web/main.js?wl_id=${dynamicWlId}&_t=${Date.now()}`;

      document.head.appendChild(script);

      // Smooth Auto-scroll to results container when search tickets load
      let hasScrolledForCurrentSearch = false;

      if (ticketsContainer && typeof ResizeObserver !== 'undefined') {
        resizeObserverInstance = new ResizeObserver((entries: any) => {
          for (const entry of entries) {
            const height = entry.contentRect.height;

            if (height > 400 && !hasScrolledForCurrentSearch) {
              setTimeout(() => {
                ticketsContainer.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }, 100);

              hasScrolledForCurrentSearch = true;
            } else if (height < 200) {
              hasScrolledForCurrentSearch = false;
            }
          }
        });

        resizeObserverInstance.observe(ticketsContainer);
      }
    }, 50);

    return () => {
      if (timer) clearTimeout(timer);

      if (resizeObserverInstance) {
        resizeObserverInstance.disconnect();
      }

      const script = document.getElementById('tpwl-script');
      if (script) script.remove();

      const searchContainer = document.getElementById('tpwl-search');
      const ticketsContainer = document.getElementById('tpwl-tickets');

      if (searchContainer) searchContainer.innerHTML = '';
      if (ticketsContainer) ticketsContainer.innerHTML = '';
    };
  }, [activeTab, location.key]);

  const currentHero = heroContent[activeTab];

  const scrollToCarRentalWidget = () => {
    const widgetElem = document.getElementById('car-rental-widget');
    if (widgetElem) {
      widgetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTabChange = (tabId: 'flights' | 'hotels' | 'cars' | 'esim') => {
    if (tabId === 'flights') {
      window.location.href = '/flights';
      return;
    }

    if (tabId === 'cars' && activeTab === 'cars') {
      scrollToCarRentalWidget();
      return;
    }

    setActiveTab(tabId);
    navigate(`/${tabId}`);
  };

  const handleEsimPopularClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const currentFaqsMap = {
    flights: flightFaqs,
    hotels: hotelFaqs,
    cars: carFaqs,
    esim: esimFaqs,
  };

  const currentFaqs = currentFaqsMap[activeTab];

  return (
    <>
      {/* Inject dynamic SEO per service tab */}
      <SEO 
        title={currentServiceSeo.title}
        description={currentServiceSeo.description}
        canonicalUrl={currentServiceSeo.canonicalUrl}
        jsonLd={currentServiceSeo.jsonLd}
      />

      <div className="font-sans bg-[#F4F6F9] text-[#0F172A] min-h-screen pb-16 selection:bg-blue-600 selection:text-white overflow-x-hidden">
        <style>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* ================= 1. UNIFIED MOBILE HERO + SEARCH WIDGET ================= */}
        <div className="max-w-[1360px] mx-auto px-2.5 sm:px-6 pt-2.5 sm:pt-6">
          <div className="bg-white rounded-2xl sm:rounded-[36px] border border-slate-200/80 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.06)] p-4 sm:p-8 lg:p-10 space-y-3.5 sm:space-y-8 overflow-visible">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-8 items-center">
              
              {/* Standardized Heading & Service Tabs */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center text-center lg:items-start lg:text-left space-y-3 sm:space-y-5">
                <h1 className="text-xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12] text-center lg:text-left">
                  {currentHero.headlinePrefix}
                  <span className="text-blue-600 inline-block">{currentHero.headlineHighlight}</span>
                </h1>

                {/* Standardized Service Tabs */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-3 max-w-md w-full pt-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => handleTabChange(tab.id)}
                        className={`relative group h-14 sm:h-20 rounded-[18px] sm:rounded-[22px] flex flex-col items-center justify-center text-center px-1 gap-1 transition-all duration-200 cursor-pointer select-none ${
                          isActive
                            ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-600/20 scale-[1.02]'
                            : 'bg-slate-50/90 border border-slate-200/80 text-slate-700 hover:bg-slate-100/80 hover:border-slate-300 hover:scale-[1.01]'
                        }`}
                      >
                        <div className={`p-1 sm:p-2 rounded-xl transition-all duration-200 flex items-center justify-center ${
                          isActive ? 'bg-white/15 text-white' : 'bg-white text-slate-700 border border-slate-200/60 group-hover:text-blue-600'
                        }`}>
                          <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                        </div>

                        <span className="tracking-tight font-black text-[10px] sm:text-xs leading-tight text-center w-full truncate">
                          {tab.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Desktop Hero Image */}
              <div className="hidden lg:flex lg:col-span-5 flex-col">
                <div className="relative h-56 lg:h-60 rounded-3xl overflow-hidden shadow-xs border border-slate-100 group cursor-pointer">
                  <img
                    src={currentHero.topImage}
                    alt="Top Deals"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-black tracking-wider uppercase drop-shadow-md">
                      {currentHero.topImageTag}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* DYNAMIC PER-TAB SNUG WIDGET VIEWPORT CONTAINER */}
            {/* DYNAMIC PER-TAB WIDGET VIEWPORT CONTAINER */}
<div 
  id={activeTab === 'cars' ? 'car-rental-widget' : undefined}
  className={`pt-3.5 sm:pt-4 relative overflow-visible w-full scroll-mt-24 ${
    activeTab === 'flights' ? 'min-h-[100px]' : ''
  } ${
    activeTab === 'hotels' ? 'min-h-[70px]' : ''
  } ${
    activeTab === 'cars' ? 'min-h-[320px] sm:min-h-[220px]' : ''
  } ${
    activeTab === 'esim' ? 'min-h-[90px]' : ''
  }`}
>
  {activeTab === 'flights' && <div id="tpwl-search" className="w-full min-h-[100px]" />}
  {activeTab === 'hotels' && <HotelSearchWidget />}
  {activeTab === 'cars' && <CarRentalWidget />}
  {activeTab === 'esim' && <EsimWidget />}
</div>

          </div>
        </div>

        {/* ================= LIVE FLIGHT RESULTS CONTAINER ================= */}
        {activeTab === 'flights' && (
          <div className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-6">
            <div id="tpwl-tickets" className="w-full scroll-mt-28" />
          </div>
        )}

        {/* ================= 2. TRUST / BENEFITS STRIP ================= */}
        <div className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-4 sm:mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {currentTrustHighlights.map((item, i) => {
              const Icon = item.icon;
              const isSelected = selectedTrustIndex === i;

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() =>
                    setSelectedTrustIndex(isSelected ? null : i)
                  }
                  className={`
                    group
                    flex items-center justify-center gap-2
                    px-3 py-2.5 sm:py-3.5
                    rounded-2xl
                    border
                    text-slate-800
                    cursor-pointer
                    select-none
                    transition-all duration-200
                    focus:outline-none
                    ${
                      isSelected
                        ? 'bg-blue-50 border-blue-600 shadow-md shadow-blue-600/10 -translate-y-0.5'
                        : 'bg-white border-slate-200/80 shadow-2xs hover:border-blue-300 hover:bg-blue-50/40 hover:-translate-y-0.5 hover:shadow-sm'
                    }
                  `}
                >
                  <Icon
                    className={`
                      w-4 h-4 shrink-0 transition-colors duration-200
                      ${
                        isSelected
                          ? 'text-blue-600'
                          : 'text-blue-600 group-hover:text-blue-600'
                      }
                    `}
                  />

                  <span className="text-xs font-black tracking-tight truncate">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= 3A. FLIGHTS SECTION ================= */}
        {activeTab === 'flights' && (
          <>
            <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-10 sm:mt-14 space-y-6">
              <div className="flex items-end justify-between border-b border-slate-200/60 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                    POPULAR RIGHT NOW
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                    Explore popular flight destinations
                  </h2>
                </div>

                {/* Visible on Desktop Header */}
                <button
                  type="button"
                  onClick={() => navigate('/destinations')}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer shrink-0"
                >
                  <span>View all destinations</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Horizontal Scroll Cards with End-Card for "View All" */}
              <div className="flex overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible pb-2 sm:pb-0">
                {popularDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => navigate(`/destinations/${dest.id}`)}
                    className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between p-5"
                  >
                    <img
                      src={dest.image}
                      alt={dest.city}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />

                    <div className="relative z-10 flex items-center justify-end">
                      <button 
                        type="button" 
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="w-9 h-9 rounded-full bg-slate-950/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-all duration-200 cursor-pointer"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="relative z-10 space-y-1.5">
                      <div>
                        <h3 className="text-2xl font-black text-white tracking-tight leading-none group-hover:text-blue-300 transition-colors">
                          {dest.city}
                        </h3>
                        <p className="text-xs font-semibold text-slate-200 mt-1 drop-shadow-xs">
                          {dest.country}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                          From {dest.priceUsd}
                        </span>
                        <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* MOBILE END CARD: Popular Destinations */}
                <div
                  onClick={() => navigate('/destinations')}
                  className="w-[50vw] sm:hidden shrink-0 snap-start h-80 rounded-3xl bg-blue-50 border-2 border-dashed border-blue-200 hover:border-blue-500 transition-all cursor-pointer flex flex-col items-center justify-center text-center p-5 group active:scale-95"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-black text-slate-900 leading-tight">
                    View All
                  </span>
                  <span className="text-[11px] font-bold text-blue-600 mt-0.5">
                    Destinations &rarr;
                  </span>
                </div>
              </div>
            </section>

            <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
              <div className="border-b border-slate-200/60 pb-3 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">TRAVEL GUIDES</span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">Flight booking tips & inspiration</h2>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/blog')}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer shrink-0"
                >
                  <span>View all articles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="flex items-stretch overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 sm:overflow-visible pb-2 sm:pb-0">
                {flightBlogArticles.map((article, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => navigate(`/blog/${article.slug}`)} 
                    className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink group flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      <div className="absolute top-4 left-4">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-slate-800 border border-white/20 shadow-sm">
                          <Clock className="w-3 h-3 text-blue-600" /> {article.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{article.title}</h3>
                      <div className="pt-4 mt-2 flex items-center justify-between border-t border-slate-100 text-xs font-extrabold text-blue-600">
                        <span>Read article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* MOBILE END CARD: Flight Articles */}
                <div
                  onClick={() => navigate('/blog')}
                  className="w-[50vw] sm:hidden shrink-0 snap-start self-stretch rounded-3xl bg-blue-50 border-2 border-dashed border-blue-200 hover:border-blue-500 transition-all cursor-pointer flex flex-col items-center justify-center text-center p-5 group active:scale-95"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-black text-slate-900 leading-tight">
                    View All
                  </span>
                  <span className="text-[11px] font-bold text-blue-600 mt-0.5">
                    Articles &rarr;
                  </span>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ================= 3B. HOTELS SECTION ================= */}
        {activeTab === 'hotels' && (
          <>
            <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-10 sm:mt-14 space-y-6">
              <div className="flex items-end justify-between border-b border-slate-200/60 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                    POPULAR HOTEL DESTINATIONS
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                    Explore stays in top destinations
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/destinations')}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer shrink-0"
                >
                  <span>Explore all destinations</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="flex overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible pb-2 sm:pb-0">
                {popularStays.map((stay) => (
                  <div
                    key={stay.id}
                    onClick={() => navigate(`/destinations/${stay.id}`)}
                    className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between p-5"
                  >
                    <img
                      src={stay.image}
                      alt={stay.city}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    <div className="relative z-10 flex items-center justify-end">
                      <button 
                        type="button" 
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="w-9 h-9 rounded-full bg-slate-950/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-all duration-200 cursor-pointer"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="relative z-10 space-y-1.5">
                      <div>
                        <h3 className="text-2xl font-black text-white tracking-tight leading-none group-hover:text-blue-300 transition-colors">
                          {stay.city}
                        </h3>
                        <p className="text-xs font-semibold text-slate-200 mt-1 drop-shadow-xs">
                          {stay.country}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-slate-200 truncate pr-2">
                          {stay.description}
                        </span>
                        <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2 py-1 rounded-xl border border-white/20 shrink-0">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* MOBILE END CARD: Hotel Destinations */}
                <div
                  onClick={() => navigate('/destinations')}
                  className="w-[50vw] sm:hidden shrink-0 snap-start h-80 rounded-3xl bg-blue-50 border-2 border-dashed border-blue-200 hover:border-blue-500 transition-all cursor-pointer flex flex-col items-center justify-center text-center p-5 group active:scale-95"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-black text-slate-900 leading-tight">
                    View All
                  </span>
                  <span className="text-[11px] font-bold text-blue-600 mt-0.5">
                    Destinations &rarr;
                  </span>
                </div>
              </div>
            </section>

            <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
              <div className="border-b border-slate-200/60 pb-3 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">HOTEL GUIDES</span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">Where to stay & accommodation tips</h2>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/blog')}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer shrink-0"
                >
                  <span>View all articles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="flex items-stretch overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 sm:overflow-visible pb-2 sm:pb-0">
                {hotelBlogArticles.map((article, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => navigate(`/blog/${article.slug}`)} 
                    className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink group flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      <div className="absolute top-4 left-4">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-slate-800 border border-white/20 shadow-sm">
                          <Clock className="w-3 h-3 text-blue-600" /> {article.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{article.title}</h3>
                      <div className="pt-4 mt-2 flex items-center justify-between border-t border-slate-100 text-xs font-extrabold text-blue-600">
                        <span>Read article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* MOBILE END CARD: Hotel Guides */}
                <div
                  onClick={() => navigate('/blog')}
                  className="w-[50vw] sm:hidden shrink-0 snap-start self-stretch rounded-3xl bg-blue-50 border-2 border-dashed border-blue-200 hover:border-blue-500 transition-all cursor-pointer flex flex-col items-center justify-center text-center p-5 group active:scale-95"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-black text-slate-900 leading-tight">
                    View All
                  </span>
                  <span className="text-[11px] font-bold text-blue-600 mt-0.5">
                    Articles &rarr;
                  </span>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ================= 3C. CARS SECTION ================= */}
        {activeTab === 'cars' && (
          <>
            <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-10 sm:mt-14 space-y-6">
              <div className="border-b border-slate-200/60 pb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">FLEET CATEGORIES</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">Explore Car Rental Options</h2>
              </div>

              <div className="flex overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible pb-2 sm:pb-0">
                {vehicleCategories.map((cat, idx) => (
                  <div 
                    key={idx} 
                    onClick={scrollToCarRentalWidget}
                    className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink relative rounded-3xl bg-white border border-slate-200/80 shadow-2xs overflow-hidden flex flex-col hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer select-none group"
                  >
                    <div className="relative h-44 overflow-hidden bg-slate-100 shrink-0">
                      <img src={cat.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" alt={cat.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/20 shadow-sm">
                          {cat.badge}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-sm">
                          <cat.icon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">{cat.title}</h3>
                        <p className="text-xs font-medium text-slate-500 mt-1 leading-relaxed">{cat.description}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{cat.highlight}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
              <div className="flex items-end justify-between border-b border-slate-200/60 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                    POPULAR DESTINATIONS
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                    Where will you drive next?
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/destinations')}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer shrink-0"
                >
                  <span>View all destinations</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="flex overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible pb-2 sm:pb-0">
                {carDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => navigate(`/destinations/${dest.id}`)}
                    className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-end p-5"
                  >
                    <img
                      src={dest.image}
                      alt={dest.city}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    <div className="relative z-10 space-y-1.5">
                      <div>
                        <h3 className="text-2xl font-black text-white tracking-tight leading-none group-hover:text-blue-300 transition-colors">
                          {dest.city}
                        </h3>
                        <p className="text-xs font-semibold text-slate-200 mt-1 drop-shadow-xs">
                          {dest.country}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-slate-200 truncate pr-2">
                          {dest.description}
                        </span>
                        <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2 py-1 rounded-xl border border-white/20 shrink-0">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* MOBILE END CARD: Car Destinations */}
                <div
                  onClick={() => navigate('/destinations')}
                  className="w-[50vw] sm:hidden shrink-0 snap-start h-80 rounded-3xl bg-blue-50 border-2 border-dashed border-blue-200 hover:border-blue-500 transition-all cursor-pointer flex flex-col items-center justify-center text-center p-5 group active:scale-95"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-black text-slate-900 leading-tight">
                    View All
                  </span>
                  <span className="text-[11px] font-bold text-blue-600 mt-0.5">
                    Destinations &rarr;
                  </span>
                </div>
              </div>
            </section>

            <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
              <div className="border-b border-slate-200/60 pb-3 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">ROAD TRIP INSPIRATION</span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">Make the journey part of the adventure</h2>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/blog')}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer shrink-0"
                >
                  <span>View all articles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="flex items-stretch overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 sm:overflow-visible pb-2 sm:pb-0">
                {roadTripArticles.map((article, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => navigate(`/blog/${article.slug}`)} 
                    className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink group flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      <div className="absolute top-4 left-4">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-slate-800 border border-white/20 shadow-sm">
                          <Clock className="w-3 h-3 text-blue-600" /> {article.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{article.title}</h3>
                      <div className="pt-4 mt-2 flex items-center justify-between border-t border-slate-100 text-xs font-extrabold text-blue-600">
                        <span>Read article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* MOBILE END CARD: Road Trip Articles */}
                <div
                  onClick={() => navigate('/blog')}
                  className="w-[50vw] sm:hidden shrink-0 snap-start self-stretch rounded-3xl bg-blue-50 border-2 border-dashed border-blue-200 hover:border-blue-500 transition-all cursor-pointer flex flex-col items-center justify-center text-center p-5 group active:scale-95"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-black text-slate-900 leading-tight">
                    View All
                  </span>
                  <span className="text-[11px] font-bold text-blue-600 mt-0.5">
                    Articles &rarr;
                  </span>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ================= 3D. ESIM SECTION ================= */}
        {activeTab === 'esim' && (
          <>
            <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-10 sm:mt-14 space-y-4">
              <div className="border-b border-slate-200/60 pb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Quick Select</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">Popular eSIM Destinations</h2>
              </div>

              <div className="flex overflow-x-auto scrollbar-hide gap-2.5 pt-1 sm:flex-wrap pb-2 sm:pb-0">
                {esimPopularDestinations.map((dest) => (
                  <button
                    key={dest.name}
                    type="button"
                    onClick={() => handleEsimPopularClick(dest.url)}
                    className="shrink-0 sm:shrink inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 border cursor-pointer select-none bg-white border-slate-200/80 hover:border-blue-600 hover:bg-blue-50/50 text-slate-800 shadow-2xs"
                  >
                    <span>{dest.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </section>

            <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
              <div className="border-b border-slate-200/60 pb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                  TRAVEL CONNECTIVITY
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                  Stay connected wherever you go
                </h2>
              </div>

              <div className="flex overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible pb-2 sm:pb-0">
                {esimConnectivityFeatures.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink p-6 rounded-3xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col space-y-4"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="space-y-1.5 flex-1">
                        <h3 className="text-base font-black text-slate-900 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs font-medium text-slate-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
              <div className="border-b border-slate-200/60 pb-3 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">CONNECTIVITY GUIDES</span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">Mobile data tips & guides</h2>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/blog')}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer shrink-0"
                >
                  <span>View all articles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="flex items-stretch overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 sm:overflow-visible pb-2 sm:pb-0">
                {esimBlogArticles.map((article, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => navigate(`/blog/${article.slug}`)} 
                    className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink group flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      <div className="absolute top-4 left-4">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-slate-800 border border-white/20 shadow-sm">
                          <Clock className="w-3 h-3 text-blue-600" /> {article.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{article.title}</h3>
                      <div className="pt-4 mt-2 flex items-center justify-between border-t border-slate-100 text-xs font-extrabold text-blue-600">
                        <span>Read article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* MOBILE END CARD: eSIM Guides */}
                <div
                  onClick={() => navigate('/blog')}
                  className="w-[50vw] sm:hidden shrink-0 snap-start self-stretch rounded-3xl bg-blue-50 border-2 border-dashed border-blue-200 hover:border-blue-500 transition-all cursor-pointer flex flex-col items-center justify-center text-center p-5 group active:scale-95"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-black text-slate-900 leading-tight">
                    View All
                  </span>
                  <span className="text-[11px] font-bold text-blue-600 mt-0.5">
                    Articles &rarr;
                  </span>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ================= 4. CLEAN & COMPACT FAQ ACCORDION ================= */}
        <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16">
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs p-5 sm:p-7 max-w-4xl mx-auto space-y-5">
            
            <div className="text-center space-y-0.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-2.5">
              {currentFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                      isOpen 
                        ? 'border-blue-600/60 bg-blue-50/20' 
                        : 'border-slate-200/80 bg-white hover:border-slate-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full px-5 py-3.5 flex items-center justify-between text-left font-extrabold text-xs sm:text-sm text-slate-900 cursor-pointer select-none gap-4"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown 
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-blue-600' : ''
                        }`} 
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-3.5 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default FlightSearchUI;