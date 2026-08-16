import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  ArrowRight, 
  Sparkles, 
  Mail, 
  CheckCircle2, 
  Lock, 
  Globe2, 
  FileText, 
  Layers, 
  Smartphone, 
  Eye, 
  Database,
  UserCheck,
  Server, Plane, Car
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';

declare const window: any;
declare const document: any;

export const Privacy: React.FC = () => {
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
    { id: 'intro', title: '1. Introduction & Overview' },
    { id: 'info-collect', title: '2. Information We Collect' },
    { id: 'how-use', title: '3. How We Use Information' },
    { id: 'ecosystem-data', title: '4. Service-Specific Data Practices' },
    { id: 'cookies', title: '5. Cookies & Tracking Technologies' },
    { id: 'third-party', title: '6. Third-Party Integrations & Affiliates' },
    { id: 'sharing', title: '7. Information Sharing & Disclosure' },
    { id: 'security', title: '8. Data Security & Storage' },
    { id: 'retention', title: '9. Data Retention Policy' },
    { id: 'rights', title: '10. Your Privacy Rights' },
    { id: 'international', title: '11. International Data Transfers' },
    { id: 'children', title: "12. Children's Privacy" },
    { id: 'updates', title: '13. Policy Updates' },
    { id: 'contact', title: '14. Contact Information' }
  ];

  const privacyJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | FlySava",
    "description": "Learn how FlySava collects, uses, processes, and protects your information across our flight, hotel, car rental, eSIM, and destination guide services.",
    "url": "https://flysava.com/privacy",
    "publisher": {
      "@type": "Organization",
      "name": "FlySava",
      "url": "https://flysava.com"
    }
  };

  return (
    <>
      <SEO 
        title="Privacy Policy | FlySava"
        description="Learn how FlySava collects, uses, processes, and protects your personal information across our travel search, comparison, and planning services."
        canonicalUrl="/privacy"
        jsonLd={privacyJsonLd}
      />
      
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER                                                            */}
        {/* ========================================================================= */}
        <section className="pt-12 sm:pt-16 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 text-center border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            
            {/* Subtle glow background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100 shadow-2xs">
                <Shield className="w-3.5 h-3.5" />
                <span>Transparency & Trust</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Privacy Policy
              </h1>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl mx-auto">
                How FlySava collects, uses, and safeguards information across our search, mobility, connectivity, and destination planning tools.
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
                    Policy Index
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

            {/* Policy Document Content */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-900/5 space-y-10 text-slate-600 text-sm leading-relaxed">
                
                {/* 1. INTRODUCTION */}
                <section id="intro" className="scroll-mt-28 space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">1. Introduction & Overview</h2>
                  <p>
                    FlySava ("we," "our," or "us") operates the travel search, comparison, and destination discovery platform accessible at flysava.com. This Privacy Policy outlines how we handle personal and non-personal data when you access our flight comparison engine, hotel discovery tools, car rental search, travel eSIM packages, destination guides, and flight status features.
                  </p>
                  <p>
                    By using FlySava, you acknowledge the data practices described in this policy. If you do not agree with these practices, please discontinue use of our platform.
                  </p>
                </section>

                {/* 2. INFORMATION WE COLLECT */}
                <section id="info-collect" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">2. Information We Collect</h2>
                  <p>We collect information in two primary categories depending on how you interact with our platform:</p>
                  
                  <div className="space-y-3 pt-1">
                    <h3 className="font-black text-slate-900 uppercase tracking-wider text-xs">A. Directly Provided Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Name & Contact Details (Form inquiries)</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Email Address (Newsletter & alerts)</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Search Parameters (Airports, dates, cities)</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Support Inquiries & Feedback</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="font-black text-slate-900 uppercase tracking-wider text-xs">B. Automatically Collected Technical Data</h3>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 font-medium">
                      <li>Device telemetry, browser type, operating system, and screen resolution</li>
                      <li>Approximate geographical location derived from IP address</li>
                      <li>Referral URLs, navigational paths, and interaction logs with search widgets</li>
                    </ul>
                  </div>
                </section>

                {/* 3. HOW WE USE INFORMATION */}
                <section id="how-use" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">3. How We Use Information</h2>
                  <p>We process collected information to:</p>
                  <div className="grid grid-cols-1 gap-2.5 text-xs font-semibold text-slate-700 pt-1">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      Deliver real-time search queries across flights, hotel stays, rental cars, and eSIM connectivity.
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      Improve search performance, user interface responsiveness, and editorial guide relevance.
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      Process newsletter updates and respond to customer support inquiries submitted via our contact desk.
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      Prevent fraudulent activity, enforce platform security, and ensure regulatory compliance.
                    </div>
                  </div>
                </section>

                {/* 4. SERVICE-SPECIFIC DATA PRACTICES */}
                <section id="ecosystem-data" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">4. Service-Specific Data Practices</h2>
                  <p>
                    Because FlySava encompasses multiple travel services, data handling varies slightly depending on which tool you use:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-medium">
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1.5">
                      <div className="flex items-center gap-2 text-blue-700 font-black">
                        <Plane className="w-4 h-4" /> Flights & Hotel Search
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Route parameters, origin/destination codes, and passenger counts are transmitted to comparison engines to retrieve live provider airfares.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-1.5">
                      <div className="flex items-center gap-2 text-amber-800 font-black">
                        <Car className="w-4 h-4" /> Car Rental (Auto Europe)
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Pickup locations, vehicle preferences, and driver age criteria are handled directly through integrated partner search interfaces.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1.5">
                      <div className="flex items-center gap-2 text-emerald-800 font-black">
                        <Smartphone className="w-4 h-4" /> Travel eSIM (Airalo)
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Country selection and data plan preferences direct you to verified Airalo checkouts where digital delivery is finalized.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-1.5">
                      <div className="flex items-center gap-2 text-indigo-800 font-black">
                        <FileText className="w-4 h-4" /> Destination & Blog Intelligence
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Interaction with curated articles, budgets, and itineraries uses anonymous analytics to rank helpful dispatches.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 5. COOKIES & TRACKING */}
                <section id="cookies" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">5. Cookies & Tracking Technologies</h2>
                  <p>
                    FlySava uses functional, analytical, and affiliate tracking cookies. Cookies allow us to remember filter selections, measure platform traffic patterns, and credit bookings completed with partner travel providers.
                  </p>
                  <p>
                    You may modify your cookie preferences through browser settings or our website consent banner. Disabling cookies may limit certain interactive features. For more information, visit our <a href="/cookies" className="text-blue-600 font-bold hover:underline">Cookie Policy</a>.
                  </p>
                </section>

                {/* 6. THIRD-PARTY INTEGRATIONS & AFFILIATES */}
                <section id="third-party" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">6. Third-Party Integrations & Affiliates</h2>
                  <p>
                    When you click an outbound link or complete a booking from FlySava, you leave our environment and enter a third-party site (e.g., airlines, online travel agencies, Auto Europe, Airalo).
                  </p>
                  
                  <div className="bg-blue-50/80 border-l-4 border-blue-600 p-4 rounded-r-2xl text-xs font-semibold text-slate-800 my-2">
                    Third-party platforms operate under their own independent privacy policies, terms of service, and security standards. We encourage you to review their respective disclosures before finalizing transactions.
                  </div>
                </section>

                {/* 7. INFORMATION SHARING */}
                <section id="sharing" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">7. Information Sharing & Disclosure</h2>
                  <p>
                    FlySava does not sell, rent, or trade your personal information to third parties for direct monetary compensation. We share data only with:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600 font-medium">
                    <li>Cloud infrastructure and web hosting partners under strict confidentiality agreements</li>
                    <li>Analytics and telemetry services that help us monitor uptime and performance</li>
                    <li>Law enforcement or regulatory bodies when mandated by valid legal processes</li>
                  </ul>
                </section>

                {/* 8. DATA SECURITY */}
                <section id="security" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">8. Data Security & Storage</h2>
                  <p>
                    We employ industry-standard TLS/SSL encryption across all connections, hardened server environments, and regular vulnerability audits. While we implement rigorous technical safeguards, no digital system or internet transmission can be guaranteed to be 100% secure.
                  </p>
                </section>

                {/* 9. DATA RETENTION */}
                <section id="retention" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">9. Data Retention Policy</h2>
                  <p>
                    We retain personal details (such as support ticket correspondence or newsletter emails) only for as long as necessary to fulfill the operational purposes described herein, address inquiries, resolve disputes, and maintain statutory compliance.
                  </p>
                </section>

                {/* 10. YOUR PRIVACY RIGHTS */}
                <section id="rights" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">10. Your Privacy Rights</h2>
                  <p>
                    Depending on your geographic location (such as the EEA, UK, or California), you may hold statutory rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600 font-medium">
                    <li>Right to access, inspect, or request a portable copy of personal data</li>
                    <li>Right to rectify inaccurate or incomplete records</li>
                    <li>Right to request erasure of personal data ("Right to be Forgotten")</li>
                    <li>Right to withdraw marketing consent at any time via unsubscribe links</li>
                  </ul>
                  <p className="pt-1">
                    To exercise any of these rights, email our data desk at <a href="mailto:contact@flysava.com" className="text-blue-600 font-bold hover:underline">contact@flysava.com</a>.
                  </p>
                </section>

                {/* 11. INTERNATIONAL DATA TRANSFERS */}
                <section id="international" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">11. International Data Transfers</h2>
                  <p>
                    FlySava operates globally. Information collected may be stored and processed on servers located in various jurisdictions with standard contractual protections and security baselines in place.
                  </p>
                </section>

                {/* 12. CHILDREN'S PRIVACY */}
                <section id="children" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">12. Children's Privacy</h2>
                  <p>
                    FlySava is intended solely for users aged 18 and older. We do not knowingly collect personal identifiable information from children under 13 (or under 16 in certain jurisdictions).
                  </p>
                </section>

                {/* 13. POLICY UPDATES */}
                <section id="updates" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">13. Policy Updates</h2>
                  <p>
                    We may revise this Privacy Policy periodically to reflect new features, integrations, or regulatory changes. The "Last Updated" timestamp at the top of this document indicates the effective date of the latest version.
                  </p>
                </section>

                {/* 14. CONTACT INFORMATION */}
                <section id="contact" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">14. Contact Information</h2>
                  <p>For questions, privacy inquiries, or data access requests, please contact our data team:</p>
                  <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/60 font-bold text-slate-900 text-xs space-y-1">
                    <p className="text-blue-600 font-black uppercase tracking-wider text-[10px]">FlySava Privacy & Data Desk</p>
                    <p>Official Inquiries: <a href="mailto:contact@flysava.com" className="text-blue-600 hover:underline">contact@flysava.com</a></p>
                    <p>Business Relations: <a href="mailto:business@flysava.com" className="text-blue-600 hover:underline">business@flysava.com</a></p>
                  </div>
                </section>

              </div>

              {/* Bottom Support CTA Box */}
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 text-center border border-blue-200/80 shadow-xl shadow-blue-600/5 space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto border border-blue-100">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Have Questions About Your Privacy?</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Our team is available to assist with data requests, consent management, and policy inquiries.
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

export default Privacy;