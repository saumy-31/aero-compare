import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Clock, 
  Send, 
  ChevronDown, 
  Sparkles, 
  MessageSquare, 
  HelpCircle,
  Plane,
  Building2,
  Car,
  Smartphone,
  ShieldCheck,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';

// Explicit ambient declarations for VS Code editor stability
declare const window: any;

interface FAQItem {
  id: string;
  category: string;
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  { 
    id: "faq1", 
    category: "Platform & Services",
    q: "What is FlySava?", 
    a: "FlySava is a modern travel aggregation and journey-planning platform. We help travelers search, compare, and organize their travel across flights, hotel stays, rental cars, international eSIM data, destination guides, and live flight status tracking." 
  },
  { 
    id: "faq2", 
    category: "Platform & Services",
    q: "Does FlySava sell airline tickets or bookings directly?", 
    a: "No. FlySava is an aggregation and discovery search engine. When you choose a flight, hotel, rental car, or eSIM package, you are redirected securely to official airlines, verified travel providers, or integration partners (such as Auto Europe or Airalo) to finalize your booking directly." 
  },
  { 
    id: "faq3", 
    category: "Platform & Services",
    q: "What services can I search and compare on FlySava?", 
    a: "FlySava provides search and comparison tools across multiple travel essentials:\n• Flights — Compare routes and fares across 100+ global airlines\n• Hotels — Find boutique stays, resorts, and budget lodging\n• Car Rental — Compare global fleets and rental terms powered by Auto Europe\n• eSIM Mobile Data — Instant prepaid digital roaming in 180+ countries powered by Airalo\n• Destinations & Guides — Access seasonal weather windows, local budget matrices, and curated itineraries\n• Flight Status — Real-time flight tracking on the move" 
  },
  { 
    id: "faq4", 
    category: "Pricing & Fees",
    q: "Is FlySava free to use?", 
    a: "Yes, FlySava is 100% free for travelers. We never charge subscription fees or add hidden service charges for searching or comparing options on our platform." 
  },
  { 
    id: "faq5", 
    category: "Pricing & Fees",
    q: "Does FlySava add extra booking markups?", 
    a: "No. FlySava adds zero booking markups or platform fees to airline tickets or travel deals. Final fares, local taxes, baggage fees, and payment processing terms are provided directly by the partner or airline you select." 
  },
  { 
    id: "faq6", 
    category: "Pricing & Fees",
    q: "Why do airfare prices sometimes fluctuate?", 
    a: "Airlines and travel providers use dynamic pricing algorithms based on seat inventory, consumer demand, route capacity, and currency exchanges. FlySava displays real-time available rates, but final seat pricing is locked and confirmed directly on the partner provider's checkout page." 
  },
  { 
    id: "faq7", 
    category: "Bookings & Customer Support",
    q: "Who manages my ticket or booking after checkout?", 
    a: "The airline, hotel provider, rental supplier, or booking agency where you completed your transaction manages your ticket issuance, payments, confirmation emails, schedule changes, and direct customer support." 
  },
  { 
    id: "faq8", 
    category: "Bookings & Customer Support",
    q: "Can FlySava modify, cancel, or refund my booking?", 
    a: "Because FlySava is a comparison engine and does not hold booking records or process financial transactions directly, we cannot make modifications, cancellations, or issue refunds. Please reach out directly to the airline or provider listed on your confirmation email." 
  },
  { 
    id: "faq9", 
    category: "Bookings & Customer Support",
    q: "How does the Travel eSIM work?", 
    a: "Our eSIM packages are powered by Airalo. After selecting your destination and data bundle, you receive an instant digital QR code via email. Simply scan the QR code in your smartphone settings before departure to connect to local mobile data upon landing without physical SIM card swapping." 
  },
  { 
    id: "faq10", 
    category: "Bookings & Customer Support",
    q: "What should I verify before completing a travel booking?", 
    a: "Before confirming payment on any provider site, always double-check:\n• Exact travel dates, departure times, and layover durations\n• Origin and destination airport codes and terminals\n• Included baggage allowances and carry-on restrictions\n• Cancellation, reschedule, and refund policies\n• Visa, passport validity, and destination entry requirements" 
  },
  { 
    id: "faq11", 
    category: "Privacy & Business",
    q: "How does FlySava generate revenue?", 
    a: "FlySava earns affiliate commissions from partner networks and travel providers when travelers click through and complete bookings. This monetization model keeps our search engine, travel guides, and comparison tools completely free for all users." 
  },
  { 
    id: "faq12", 
    category: "Privacy & Business",
    q: "How can I contact FlySava for partnerships or press inquiries?", 
    a: "You can reach our general contact and support desk via the contact form on this page or by emailing contact@flysava.com. For press, media, and business partnership discussions, contact business@flysava.com." 
  }
];

export const Contact: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq1");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // State for form submission handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const categories = ["All", "Platform & Services", "Pricing & Fees", "Bookings & Customer Support", "Privacy & Business"];

  const filteredFaqs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(f => f.category === selectedCategory);

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@flysava.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const formatAnswer = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.trim().startsWith('•')) {
        return (
          <div key={i} className="flex items-start ml-1 mt-2">
            <span className="text-blue-600 mr-2.5 font-black">•</span>
            <span className="text-slate-600 font-medium">{line.replace('•', '').trim()}</span>
          </div>
        );
      }
      return (
        <p key={i} className={i > 0 ? "mt-3 text-slate-600 font-normal leading-relaxed" : "text-slate-600 font-normal leading-relaxed"}>
          {line}
        </p>
      );
    });
  };

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Contact & Help Center | FlySava Support"
        description="Have questions about flight comparison, hotel searches, car rentals, or travel eSIMs? Contact FlySava support or browse our help center."
        canonicalUrl="/contact"
        jsonLd={contactJsonLd}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION                                                           */}
        {/* ========================================================================= */}
        <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-20 w-full bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FlySava Help Center</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">help you?</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Find instant answers regarding flight comparison, stays, car rentals, and eSIM roaming, or send a direct inquiry to our support desk.
            </p>

            {/* Quick Ecosystem Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-extrabold text-slate-700">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                <Plane className="w-3.5 h-3.5 text-blue-600" /> Flights
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-indigo-600" /> Hotels
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                <Car className="w-3.5 h-3.5 text-amber-600" /> Car Rental
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                <Smartphone className="w-3.5 h-3.5 text-emerald-600" /> Travel eSIM
              </span>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MAIN CONTENT GRID                                                      */}
        {/* ========================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Left Column: Direct Channels & Sticky Contact Form */}
            <div className="lg:col-span-5 h-fit lg:sticky lg:top-28 space-y-6">
              
              {/* Form Box */}
              <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-200/90 shadow-xl shadow-slate-900/5">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-2xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-slate-900 tracking-tight">Send Us a Message</h2>
                    <p className="text-xs text-slate-500 font-medium">We respond within 24–48 business hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New FlySava Help Center Inquiry" />
                  <input type="hidden" name="_template" value="table" />

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/10 text-slate-900 text-sm transition-all font-medium disabled:opacity-60"
                      placeholder="Alex Taylor"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/10 text-slate-900 text-sm transition-all font-medium disabled:opacity-60"
                      placeholder="alex@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                      Topic
                    </label>
                    <select
                      name="topic"
                      defaultValue="Flight Comparison"
                      disabled={isSubmitting}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/10 text-slate-900 text-sm transition-all font-medium disabled:opacity-60 cursor-pointer"
                    >
                      <option value="Flight Comparison">Flight Search & Comparison</option>
                      <option value="Hotels & Stays">Hotels & Accommodations</option>
                      <option value="Car Rental">Car Rental (Auto Europe)</option>
                      <option value="eSIM Data">eSIM Roaming (Airalo)</option>
                      <option value="Destinations & Guides">Destinations & Travel Guides</option>
                      <option value="Partnership & Media">Business & Partnership Inquiry</option>
                      <option value="General Feedback">General Feedback / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      disabled={isSubmitting}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/10 text-slate-900 text-sm transition-all font-medium resize-none disabled:opacity-60"
                      placeholder="Please describe how we can assist you..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-black py-3.5 rounded-xl transition-all shadow-md shadow-blue-600/20 text-xs uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer active:scale-95 gap-2"
                  >
                    {isSubmitting ? (
                      'Sending Message...'
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  {/* Status Notifications */}
                  {status === 'success' && (
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Thank you! Your message has been received.</span>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold">
                      Unable to send message right now. Please email us directly at contact@flysava.com.
                    </div>
                  )}
                </form>
              </div>

              {/* Direct Channels Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-center p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mr-3 flex-shrink-0 border border-blue-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">General Inquiries</p>
                    <a href="mailto:contact@flysava.com" className="text-slate-900 font-black text-xs hover:text-blue-600 transition-colors">contact@flysava.com</a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mr-3 flex-shrink-0 border border-emerald-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Response Window</p>
                    <p className="text-slate-900 font-black text-xs">24–48 Business Hours</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Knowledge Base & Categorized Accordion FAQs */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                    <h2 className="text-xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
                  </div>
                  <span className="text-xs font-bold text-slate-400">({filteredFaqs.length} Articles)</span>
                </div>

                {/* Category Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* FAQ Accordions */}
              <div className="space-y-3">
                {filteredFaqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div 
                      key={faq.id} 
                      className={`bg-white border transition-all duration-200 rounded-2xl overflow-hidden ${
                        isOpen ? 'border-blue-600 shadow-md ring-2 ring-blue-600/10' : 'border-slate-200/80 shadow-2xs hover:border-slate-300'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between focus:outline-none cursor-pointer"
                      >
                        <span className={`font-black text-sm sm:text-base pr-4 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900'}`}>
                          {faq.q}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                          >
                            <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                              {formatAnswer(faq.a)}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Provider Disclaimer Card */}
              <div className="bg-blue-50/70 border border-blue-200/60 p-5 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  <strong>Important Booking Notice:</strong> FlySava helps you discover and compare travel deals from third-party partners. Final ticketing, payment verification, baggage policies, and itinerary modifications are handled directly by the airline or travel provider you choose.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;