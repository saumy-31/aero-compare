import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, MessageSquare, Send, ChevronDown } from 'lucide-react';

const faqs = [
  { id: "faq1", q: "What is Flysava?", a: "Flysava is a travel comparison website that helps users search and compare flight options from third-party travel providers. Our goal is to make it easier to find useful travel options quickly and clearly." },
  { id: "faq2", q: "Does Flysava sell flight tickets directly?", a: "No. Flysava does not sell tickets directly. When you choose a flight or travel deal, you may be redirected to a third-party provider where the booking is completed." },
  { id: "faq3", q: "Is Flysava free to use?", a: "Yes. Flysava is free for users. We may earn a commission from affiliate partners if you click through our website and complete a booking with a third-party provider." },
  { id: "faq4", q: "Does Flysava add extra booking fees?", a: "Flysava does not add its own booking fees. Final prices, taxes, service fees, baggage fees, and other charges are determined by the third-party provider or airline." },
  { id: "faq5", q: "Are the prices on Flysava guaranteed?", a: "No. Flight prices can change quickly. Flysava helps you compare available options, but final price and availability are confirmed only on the third-party provider's website before booking." },
  { id: "faq6", q: "Why did the price change after I clicked a deal?", a: "Flight prices are dynamic and may change due to demand, seat availability, airline updates, currency changes, provider fees, or taxes. Always check the final price on the booking provider's website before payment." },
  { id: "faq7", q: "Who handles my booking after I choose a flight?", a: "The third-party provider, airline, or travel website where you complete the booking handles your ticket, payment, cancellation, refund, schedule change, and customer support." },
  { id: "faq8", q: "Can Flysava change or cancel my booking?", a: "No. Since Flysava does not sell tickets directly, we cannot change, cancel, refund, or manage bookings. You must contact the provider or airline used for your booking." },
  { id: "faq9", q: "Does Flysava compare hotels too?", a: "Flysava may include hotel comparison tools, travel widgets, or third-party hotel offers. Hotel bookings are also completed through third-party providers." },
  { id: "faq10", q: "How does Flysava make money?", a: "Flysava may earn affiliate commissions when users click partner links or complete bookings through third-party travel providers. This helps support the website and keep it free to use." },
  { id: "faq11", q: "Does affiliate commission affect search results?", a: "Flysava aims to provide a helpful and transparent comparison experience. However, some third-party widgets and travel tools may control how offers are displayed. Always compare final details before booking." },
  { id: "faq12", q: "Can I trust third-party providers shown on Flysava?", a: "Flysava aims to work with trusted travel tools and providers, but each third-party provider operates independently. You should review their terms, reviews, cancellation policy, and privacy policy before booking." },
  { id: "faq13", q: "Does Flysava collect my personal information?", a: "Flysava may collect limited information such as IP address, device information, analytics data, contact form details, or email subscription details. Please read our Privacy Policy for more information." },
  { id: "faq14", q: "Does Flysava use cookies?", a: "Yes. Flysava may use cookies for essential website functions, analytics, performance, affiliate tracking, and third-party travel widgets. Please read our Cookie Policy for details." },
  { id: "faq15", q: "How can I contact Flysava?", a: "You can contact us by email at contact@flysava.com." },
  { id: "faq16", q: "What should I check before booking a flight?", a: "Before booking, always confirm:\n• Final price\n• Baggage allowance\n• Cancellation and refund policy\n• Travel dates and times\n• Airport and terminal details\n• Visa and entry requirements\n• Airline rules and provider service fees" },
  { id: "faq17", q: "Does Flysava provide travel advice?", a: "Flysava may publish travel tips and guides for general information. Travel rules can change, so you should always verify important requirements with official government, airline, airport, or provider sources before traveling." }
];

export const Contact = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper to cleanly format bullet points inside FAQ answers
  const formatAnswer = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.trim().startsWith('•')) {
        return (
          <div key={i} className="flex items-start ml-2 mt-1.5">
            <span className="text-blue-500 mr-2 font-bold">•</span>
            <span className="text-gray-600 dark:text-gray-300">{line.replace('•', '').trim()}</span>
          </div>
        );
      }
      return <p key={i} className={i > 0 ? "mt-3" : ""}>{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-20 transition-colors">
      
      {/* Hero */}
      <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
        >
          Contact Support
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
        >
          We're here to help. Send us a message or browse our frequently asked questions below.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Form (Sticky) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 h-fit lg:sticky lg:top-28"
          >
            <div className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-gray-100 dark:border-dark-border shadow-xl shadow-gray-200/50 dark:shadow-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 dark:text-white transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 dark:text-white transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 dark:text-white transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 dark:text-white transition-all resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-500/30"
                >
                  Send Message <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Info & Accordion FAQs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-12"
          >
            {/* Contact Information Blocks */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm">
                  <Mail className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">General Support</p>
                    <a href="mailto:support@flysava.com" className="text-gray-900 dark:text-white font-medium hover:text-blue-500 transition-colors">support@flysava.com</a>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm">
                  <MessageSquare className="w-6 h-6 text-purple-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Business Inquiries</p>
                    <a href="mailto:business@flysava.com" className="text-gray-900 dark:text-white font-medium hover:text-purple-500 transition-colors">business@flysava.com</a>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm sm:col-span-2">
                  <Clock className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Response Time</p>
                    <p className="text-gray-900 dark:text-white font-medium">We typically reply within 24–48 hours.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div 
                      key={faq.id} 
                      className={`bg-white dark:bg-dark-card border ${isOpen ? 'border-blue-500 shadow-md' : 'border-gray-100 dark:border-dark-border shadow-sm'} rounded-2xl overflow-hidden transition-all`}
                    >
                      <button
                        onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                      >
                        <span className={`font-bold pr-4 transition-colors ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                          {faq.q}
                        </span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-500' : 'text-gray-400'}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-800/50 pt-4 mt-1">
                              {formatAnswer(faq.a)}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};