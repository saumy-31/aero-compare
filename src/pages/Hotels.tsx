import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building, Plane, Car, Smartphone, Award, ShieldCheck, 
  Wifi, TrendingUp, ChevronDown, Heart, ArrowUpRight, ArrowRight
} from 'lucide-react';
import { HotelSearchWidget } from '../components/shared/HotelSearchWidget';
import { SEO } from '../components/seo/SEO';

export const Hotels: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefitsPills = [
    { icon: Award, label: 'Best Rate Guarantee' },
    { icon: Building, label: '2M+ Worldwide Hotels' },
    { icon: ShieldCheck, label: 'Free Cancellation Options' },
    { icon: Wifi, label: '24/7 Guest Support' },
  ];

  // Popular Stays Cards Data
  const popularStays = [
    {
      id: 'dubai',
      city: 'Dubai',
      country: 'UAE',
      priceInr: '₹8,490',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop',
    },
    {
      id: 'bali',
      city: 'Bali',
      country: 'Indonesia',
      priceInr: '₹3,250',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&auto=format&fit=crop',
    },
    {
      id: 'paris',
      city: 'Paris',
      country: 'France',
      priceInr: '₹11,120',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop',
    },
    {
      id: 'bangkok',
      city: 'Bangkok',
      country: 'Thailand',
      priceInr: '₹2,890',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&auto=format&fit=crop',
    },
  ];

  const faqs = [
    {
      q: 'How do I search hotel rates on FlySava?',
      a: 'Enter your destination, check-in/out dates, and guest count in the search bar above to instantly view real-time direct rates across top global hotel options.',
    },
    {
      q: 'Are taxes and fees included in the room price?',
      a: 'All applicable nightly rates, taxes, and service charges are itemized before you confirm your booking, ensuring zero hidden surprise fees at checkout.',
    },
    {
      q: 'Can I modify or cancel my hotel reservation?',
      a: 'Cancellation terms depend on the specific room rate selected (e.g., Free Cancellation vs. Non-Refundable). Cancellation windows are clearly specified on each stay deal.',
    },
    {
      q: 'Do I pay online or directly at the property?',
      a: 'Payment policies vary by hotel and rate type. Many properties offer flexible options, including instant online payment or pay-upon-arrival options.',
    },
    {
      q: 'Can I request early check-in or late check-out?',
      a: 'Special requests can be submitted directly through your booking confirmation with the property prior to your arrival date.',
    },
    {
      q: 'What amenities are included in the room price?',
      a: 'Inclusions such as complimentary Wi-Fi, breakfast, pool access, and parking are listed directly on each individual stay package card.',
    },
  ];

  return (
    <>
      <SEO 
        title="Search & Compare Hotel Deals | FlySava"
        description="Compare 2M+ hotels, resorts, and apartments worldwide with transparent pricing and zero hidden fees."
        canonicalUrl="/hotels"
      />

      <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#0F172A] pt-20 sm:pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          
          {/* ================= 1. HERO + HOTEL SEARCH CONTAINER ================= */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden space-y-6 sm:space-y-8">
            
            {/* HERO SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Headline & Tab Navigation */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                  Explore 2M+ hotel deals <br />
                  from <span className="text-blue-600">top stays.</span>
                </h1>

                {/* Service Navigation Tabs */}
                <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none">
                  <button
                    type="button"
                    onClick={() => navigate('/flights')}
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-600 font-extrabold text-xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Plane className="w-4 h-4 text-slate-500" />
                    <span>Flights</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 text-white font-extrabold text-xs transition-all shadow-md shadow-blue-600/20 cursor-pointer whitespace-nowrap"
                  >
                    <Building className="w-4 h-4 text-white" />
                    <span>Hotels</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate('/cars')}
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-600 font-extrabold text-xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Car className="w-4 h-4 text-slate-500" />
                    <span>Car Rental</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate('/esim')}
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-600 font-extrabold text-xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Smartphone className="w-4 h-4 text-slate-500" />
                    <span>eSIM</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Promotional Card */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative h-48 rounded-3xl overflow-hidden shadow-md group">
                  <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop" 
                    alt="Luxury Hotel Resorts" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-200">LUXURY RESORTS</span>
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <TrendingUp className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* DIVIDER */}
            <div className="border-t border-slate-100" />

            {/* HOTEL SEARCH WIDGET */}
            <HotelSearchWidget />

          </div>


          {/* ================= 2. HOTEL BENEFITS ROW ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
            {benefitsPills.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div
                  key={i}
                  className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-white border border-slate-200/80 text-slate-800 shadow-2xs transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-xs font-black tracking-tight whitespace-nowrap">{badge.label}</span>
                </div>
              );
            })}
          </div>


          {/* ================= 3. POPULAR STAYS DISCOVERY SECTION ================= */}
          <section className="space-y-6 pt-2">
            
            {/* Header */}
            <div className="flex items-end justify-between border-b border-slate-200/60 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                  POPULAR STAYS
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                  Explore hotels travellers love
                </h2>
              </div>

              {/* Right Link */}
              <button
                type="button"
                onClick={() => navigate('/destinations')}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer"
              >
                <span>View all hotels</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* 4-Card Horizontal Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {popularStays.map((stay) => (
                <div
                  key={stay.id}
                  onClick={() => navigate(`/destinations/${stay.id}`)}
                  className="group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between p-5"
                >
                  {/* Hotel Image */}
                  <img
                    src={stay.image}
                    alt={stay.city}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />

                  {/* Favorite Icon */}
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

                  {/* Bottom Details */}
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
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                        Hotels from {stay.priceInr}
                      </span>
                      <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </section>


          {/* ================= 4. FREQUENTLY ASKED QUESTIONS ================= */}
          <section className="space-y-4 pt-4 border-t border-slate-200/60 w-full">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">HOTEL GUIDE</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2.5 max-w-4xl mx-auto w-full">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index}
                    className={`w-full rounded-2xl bg-white border transition-all duration-200 shadow-2xs overflow-hidden ${
                      isOpen ? 'border-blue-600 ring-2 ring-blue-600/10' : 'border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 flex items-center justify-between gap-4 focus:outline-none cursor-pointer select-none"
                    >
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">{faq.q}</span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
                        isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 text-xs font-medium text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/40">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default Hotels;