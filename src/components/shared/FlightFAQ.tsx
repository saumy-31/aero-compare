import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FlightFAQProps {
  faqs: FAQItem[];
  openIndex: number | null;
  onToggleIndex: (index: number | null) => void;
}

export const FlightFAQ: React.FC<FlightFAQProps> = ({
  faqs,
  openIndex,
  onToggleIndex,
}) => {
  return (
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
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
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
                  onClick={() => onToggleIndex(isOpen ? null : index)}
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
  );
};