import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Scale, 
  ArrowRight, 
  Sparkles, 
  Mail, 
  AlertTriangle, 
  ShieldCheck, 
  Plane, 
  Building2, 
  Car, 
  Smartphone, 
  FileText, 
  Layers, 
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';

declare const window: any;
declare const document: any;

export const Terms: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'intro', title: '1. Introduction & Acceptance' },
    { id: 'service', title: '2. Multi-Service Overview' },
    { id: 'third-party', title: '3. Third-Party Booking Providers' },
    { id: 'affiliate', title: '4. Affiliate & Commercial Disclosure' },
    { id: 'price', title: '5. Pricing & Availability Disclaimer' },
    { id: 'use', title: '6. Acceptable Platform Use' },
    { id: 'ip', title: '7. Intellectual Property Rights' },
    { id: 'travel-info', title: '8. Editorial & Destination Information' },
    { id: 'warranty', title: '9. Disclaimer of Warranties' },
    { id: 'liability', title: '10. Limitation of Liability' },
    { id: 'indemnification', title: '11. User Indemnification' },
    { id: 'privacy', title: '12. Privacy & Cookie Compliance' },
    { id: 'changes', title: '13. Modifications to Terms' },
    { id: 'governing-law', title: '14. Governing Law & Jurisdiction' },
    { id: 'contact', title: '15. Legal Contact Desk' }
  ];

  const termsJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Use | FlySava",
    "description": "Terms and conditions governing access to FlySava's search engine, flight comparison, hotel discovery, car rental, eSIM, and travel guide services.",
    "url": "https://flysava.com/terms",
    "publisher": {
      "@type": "Organization",
      "name": "FlySava",
      "url": "https://flysava.com"
    }
  };

  return (
    <>
      <SEO 
        title="Terms of Use | FlySava"
        description="Legal terms and guidelines governing your access to and use of FlySava's flight search, hotel comparison, car rentals, eSIM packages, and travel guides."
        canonicalUrl="/terms"
        jsonLd={termsJsonLd}
      />
      
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER                                                            */}
        {/* ========================================================================= */}
        <section className="pt-12 sm:pt-16 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 text-center border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            
            {/* Soft Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100 shadow-2xs">
                <Scale className="w-3.5 h-3.5" />
                <span>Legal Framework & Terms</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Terms of Use
              </h1>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl mx-auto">
                Legal terms and operational guidelines governing your access to and use of the FlySava travel platform.
              </p>

              <div className="pt-2 text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                Last Updated: August 2026
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MAIN DOCUMENT LAYOUT                                                   */}
        {/* ========================================================================= */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sticky Navigation Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-white p-6 rounded-[2rem] border border-slate-200/90 shadow-sm space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">
                    Document Index
                  </h3>
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>

                <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-2 text-xs">
                  {sections.map((sec) => (
                    <a 
                      key={sec.id} 
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className="block px-3 py-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 font-bold transition-all duration-200"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>

              </div>
            </aside>

            {/* Terms Document Body */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-900/5 space-y-10 text-slate-600 text-sm leading-relaxed">
                
                {/* 1. INTRODUCTION */}
                <section id="intro" className="scroll-mt-28 space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">1. Introduction & Acceptance</h2>
                  <p>
                    Welcome to FlySava. These Terms of Use ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and FlySava ("FlySava," "we," "us," or "our"), governing your access to and use of flysava.com, including all associated subdomains, tools, search engines, mobile layouts, APIs, and content.
                  </p>
                  <p>
                    By accessing, browsing, or utilizing any feature of FlySava, you acknowledge that you have read, understood, and agreed to be bound by these Terms, along with our <a href="/privacy" className="text-blue-600 font-bold hover:underline">Privacy Policy</a> and <a href="/cookies" className="text-blue-600 font-bold hover:underline">Cookie Policy</a>. If you do not agree to these Terms, you must immediately refrain from using our platform.
                  </p>
                </section>

                {/* 2. MULTI-SERVICE OVERVIEW */}
                <section id="service" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">2. Multi-Service Overview</h2>
                  <p>
                    FlySava operates as an integrated travel technology aggregator and destination discovery platform. Our ecosystem facilitates comparison and access across several verticals:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <Plane className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Flight Search & Airfare Aggregation</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <Building2 className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>Hotels, Resorts & Stay Discovery</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <Car className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Car Rental Search (Auto Europe Partner)</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Travel eSIM Roaming (Airalo Partner)</span>
                    </div>
                  </div>

                  <div className="bg-blue-50/80 border-l-4 border-blue-600 p-4 rounded-r-2xl text-xs font-semibold text-slate-800 my-2 leading-relaxed">
                    <strong>Crucial Operational Boundary:</strong> FlySava is not an airline, hotelier, vehicle rental company, eSIM carrier, travel agency, or licensed booking merchant. We do not issue tickets, manage hotel reservations, supply rental vehicles, configure eSIM data profiles, or process customer payments directly.
                  </div>
                </section>

                {/* 3. THIRD-PARTY PROVIDERS */}
                <section id="third-party" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">3. Third-Party Booking Providers & External Links</h2>
                  <p>
                    When you select a travel option, flight deal, vehicle rental, or digital eSIM package on FlySava, you are linked directly to external third-party provider platforms (such as airlines, online travel agencies, Auto Europe, or Airalo).
                  </p>
                  <p>
                    All contracts, payment transactions, booking confirmations, baggage policies, seat selections, modifications, cancellations, and refunds are entered into exclusively between you and the respective third-party provider. FlySava bears no responsibility or liability for third-party terms, fulfillment errors, service disruptions, or customer support disputes.
                  </p>
                </section>

                {/* 4. AFFILIATE DISCLOSURE */}
                <section id="affiliate" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">4. Affiliate & Commercial Disclosure</h2>
                  <p>
                    FlySava participates in affiliate partnerships and travel distribution networks. When users click referral links, engage with booking widgets, or finalize bookings with third-party providers, FlySava may receive referral commissions at no additional cost to you.
                  </p>
                  <p>
                    These commercial partnerships enable us to maintain, develop, and provide our search engine, destination catalogs, and editorial guides completely free of charge to global travelers.
                  </p>
                </section>

                {/* 5. PRICING & AVAILABILITY DISCLAIMER */}
                <section id="price" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">5. Pricing & Availability Disclaimer</h2>
                  <p>
                    Airfares, hotel nightly rates, rental car quotes, and eSIM packages are highly dynamic and fluctuate in real time due to seat inventory, seasonality, foreign exchange rates, local taxes, and provider demand algorithms.
                  </p>
                  
                  <div className="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-2xl text-xs font-semibold text-slate-800 my-2 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>FlySava does not warrant that listed prices represent the absolute lowest market fare at any given second, nor that displayed availability will remain open. The binding price is confirmed solely on the partner provider's checkout page prior to payment.</span>
                  </div>
                </section>

                {/* 6. ACCEPTABLE USE */}
                <section id="use" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">6. Acceptable Platform Use</h2>
                  <p>You agree to use FlySava solely for lawful, personal, non-commercial travel search purposes. You agree not to:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 font-medium">
                    <li>Employ automated scrapers, web spiders, data mining bots, or extraction scripts without express written consent</li>
                    <li>Circumvent, disable, or tamper with security protocols, rate limiters, or search infrastructure</li>
                    <li>Conduct speculative, fraudulent, or false queries designed to stress or disrupt data endpoints</li>
                    <li>Mirror, frame, or republish FlySava search interfaces or editorial articles without attribution</li>
                  </ul>
                </section>

                {/* 7. INTELLECTUAL PROPERTY */}
                <section id="ip" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">7. Intellectual Property Rights</h2>
                  <p>
                    All trademarks, service marks, software code, user interface designs, logos, graphics, destination guide texts, matrices, and original editorial dispatches featured on FlySava are the exclusive property of FlySava or licensed from third-party copyright holders.
                  </p>
                  <p>
                    No content from flysava.com may be copied, modified, distributed, or repurposed for commercial gain without prior written authorization from FlySava.
                  </p>
                </section>

                {/* 8. EDITORIAL DISCLAIMER */}
                <section id="travel-info" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">8. Editorial & Destination Information</h2>
                  <p>
                    Destination guides, budget estimations, seasonal windows, and travel articles published across FlySava are curated for informational and inspirational purposes only.
                  </p>
                  <p>
                    Travel requirements, visa regulations, entry protocols, local health mandates, and airline transit rules are subject to rapid international changes. Travelers are solely responsible for verifying official government travel advisories and consulate guidelines before departure.
                  </p>
                </section>

                {/* 9. NO WARRANTY */}
                <section id="warranty" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">9. Disclaimer of Warranties</h2>
                  <p>
                    FlySava is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express, implied, statutory, or otherwise. We expressly disclaim all warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted server access.
                  </p>
                </section>

                {/* 10. LIMITATION OF LIABILITY */}
                <section id="liability" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">10. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by applicable law, FlySava, its founders, affiliates, and technical partners shall not be liable for any direct, indirect, incidental, punitive, or consequential damages resulting from:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600 font-medium">
                    <li>Booking failures, cancellations, delays, or rescheduling by third-party airlines or travel suppliers</li>
                    <li>Discrepancies between fares listed on FlySava and rates on third-party provider checkouts</li>
                    <li>Technical interruptions, data stream outages, or server downtime</li>
                    <li>Losses incurred during travel, vehicle rentals, or reliance on published destination guides</li>
                  </ul>
                </section>

                {/* 11. INDEMNIFICATION */}
                <section id="indemnification" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">11. User Indemnification</h2>
                  <p>
                    You agree to defend, indemnify, and hold harmless FlySava, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, or legal expenses arising from your violation of these Terms, unauthorized platform usage, or infringement of third-party rights.
                  </p>
                </section>

                {/* 12. PRIVACY & COOKIES */}
                <section id="privacy" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">12. Privacy & Cookie Compliance</h2>
                  <p>
                    Our data governance protocols are established in our <a href="/privacy" className="text-blue-600 font-bold hover:underline">Privacy Policy</a> and <a href="/cookies" className="text-blue-600 font-bold hover:underline">Cookie Policy</a>, which govern the collection and use of personal and telemetry information.
                  </p>
                </section>

                {/* 13. CHANGES TO TERMS */}
                <section id="changes" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">13. Modifications to Terms</h2>
                  <p>
                    We reserve the right to revise or update these Terms at our sole discretion. Any modifications take effect immediately upon publication on flysava.com. Continued use of our platform following updates constitutes irrevocable acceptance of the revised Terms.
                  </p>
                </section>

                {/* 14. GOVERNING LAW */}
                <section id="governing-law" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">14. Governing Law & Jurisdiction</h2>
                  <p>
                    These Terms of Use shall be governed by and construed in accordance with applicable legal frameworks without regard to principles of conflicts of law. Any legal proceedings arising hereunder shall be resolved in competent courts of jurisdiction.
                  </p>
                </section>

                {/* 15. CONTACT INFORMATION */}
                <section id="contact" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">15. Legal Contact Desk</h2>
                  <p>For questions or formal inquiries regarding these Terms of Use, please reach out to:</p>
                  <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/60 font-bold text-slate-900 text-xs space-y-1">
                    <p className="text-blue-600 font-black uppercase tracking-wider text-[10px]">FlySava Legal Operations</p>
                    <p>General Inquiries: <a href="mailto:contact@flysava.com" className="text-blue-600 hover:underline">contact@flysava.com</a></p>
                    <p>Business Desk: <a href="mailto:business@flysava.com" className="text-blue-600 hover:underline">business@flysava.com</a></p>
                  </div>
                </section>

              </div>

              {/* Bottom Support CTA Box */}
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 text-center border border-blue-200/80 shadow-xl shadow-blue-600/5 space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto border border-blue-100">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Need Legal Support or Clarification?</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Our team is available to assist with questions regarding our terms, partner integrations, or platform policies.
                </p>
                <button 
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md shadow-blue-600/25 cursor-pointer active:scale-95"
                >
                  Contact Support <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

            </div>

          </div>
        </main>

      </div>
    </>
  );
};

export default Terms;