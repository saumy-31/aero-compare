import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does FlySava find the cheapest flight deals?",
    answer: "FlySava aggregates real-time flight data from hundreds of major airlines, low-cost carriers, and travel providers worldwide. We compare transparent prices side-by-side so you can select the best rate with zero added markups."
  },
  {
    question: "Are there any hidden fees when booking flights through FlySava?",
    answer: "No. FlySava is 100% committed to price transparency. What you see is the final price shown by our booking partners, including mandatory taxes and standard fees."
  },
  {
    question: "When is the best time to book cheap flights?",
    answer: "Generally, booking 2 to 6 weeks in advance for domestic routes and 2 to 4 months in advance for international flights yields the best fares. Mid-week departures (Tuesdays and Wednesdays) are also typically cheaper."
  },
  {
    question: "Can I check baggage allowances and visa requirements before booking?",
    answer: "Yes. Our flight search results display baggage allowance details for each ticket tier. Additionally, we provide helpful travel guidelines for visa requirements based on your destination."
  },
  {
    question: "What happens if I need to change or cancel my flight reservation?",
    answer: "Flight modifications, cancellations, and refunds are managed directly according to the issuing airline or partner's policy. Your booking confirmation email will contain direct links and contact info to manage your itinerary."
  }
];

export const FlightFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1360px] mx-auto px-2 sm:px-6 mt-12 sm:mt-16">
      <div className="bg-white rounded-2xl sm:rounded-[32px] border border-slate-200/80 shadow-2xs p-5 sm:p-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 border border-blue-100 text-blue-600">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-500">
            Everything you need to know about searching, comparing, and booking flights on FlySava.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left font-black text-xs sm:text-sm text-slate-900 cursor-pointer select-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-blue-600' : ''
                    }`} 
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FlightFAQ;