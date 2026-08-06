import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

// Explicit ambient declarations for VS Code editor stability
declare const window: any;
declare const document: any;

export const Privacy = () => {
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
    { id: 'intro', title: '1. Introduction' },
    { id: 'info-collect', title: '2. Information We Collect' },
    { id: 'how-use', title: '3. How We Use Information' },
    { id: 'cookies', title: '4. Cookies & Tracking' },
    { id: 'third-party', title: '5. Third-Party Tools' },
    { id: 'sharing', title: '6. Sharing Information' },
    { id: 'security', title: '7. Data Security' },
    { id: 'retention', title: '8. Data Retention' },
    { id: 'rights', title: '9. Your Privacy Rights' },
    { id: 'marketing', title: '10. Marketing' },
    { id: 'international', title: '11. International Transfers' },
    { id: 'children', title: "12. Children's Privacy" },
    { id: 'external', title: '13. External Links' },
    { id: 'updates', title: '14. Updates' },
    { id: 'contact', title: '15. Contact' }
  ];

  const privacyJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | FlySava",
    "description": "Learn how FlySava collects, uses, and protects your personal information when using our travel comparison platform.",
    "url": "https://flysava.com/privacy"
  };

  return (
    <>
      <SEO 
        title="Privacy Policy | FlySava"
        description="Learn how FlySava collects, uses, and protects your personal information when using our travel comparison platform."
        canonicalUrl="/privacy"
        jsonLd={privacyJsonLd}
      />
      
      <div className="min-h-screen bg-[#EEF2F6] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
        
        {/* ================= HERO HEADER ================= */}
        <section className="pt-16 sm:pt-20 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 text-center border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-600 border border-blue-200/70 shadow-2xs">
                <Shield className="w-3.5 h-3.5" /> Legal & Transparency
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Privacy Policy
              </h1>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl mx-auto">
                How FlySava collects, uses, and protects your information when using our travel platform.
              </p>

              <div className="pt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                Last Updated: August 2026
              </div>

            </div>

          </div>
        </section>

        {/* ================= MAIN LAYOUT ================= */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sticky Navigation Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-white p-6 rounded-[2rem] border border-slate-200/90 shadow-sm space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">
                    Page Contents
                  </h3>
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>

                <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-2 text-xs">
                  {sections.map((sec) => (
                    <a 
                      key={sec.id} 
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className="block px-3 py-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 font-semibold transition-all duration-200"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>

              </div>
            </aside>

            {/* Legal Policy Document Body */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-900/5 space-y-10 text-slate-600 text-sm leading-relaxed">
                
                <section id="intro" className="scroll-mt-28 space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">1. Introduction</h2>
                  <p>This Privacy Policy explains how Flysava collects, uses, shares, and protects information when you visit or use flysava.com.</p>
                  <p>By using Flysava, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the website.</p>
                </section>

                <section id="info-collect" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">2. Information We Collect</h2>
                  <p>Flysava may collect personal and non-personal information depending on how you use the website.</p>
                  
                  <div className="space-y-2 pt-2">
                    <p className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">Personal information may include:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
                      <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Name (via web forms)</li>
                      <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Email address</li>
                      <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Support inquiry details</li>
                      <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> IP address & Location</li>
                    </ul>
                  </div>

                  <div className="space-y-2 pt-4">
                    <p className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">Non-personal information may include:</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 font-medium">
                      <li>Browser type, version, and device type</li>
                      <li>Operating system & referring URLs</li>
                      <li>Pages visited, duration, and interaction with search widgets</li>
                    </ul>
                  </div>
                </section>

                <section id="how-use" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">3. How We Use Information</h2>
                  <p>Flysava uses collected information to:</p>
                  <ul className="grid grid-cols-1 gap-2 text-xs font-semibold text-slate-700 pt-1">
                    <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">Provide, maintain, and enhance website comparison tools</li>
                    <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">Respond to customer service inquiries and support requests</li>
                    <li className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">Monitor security, prevent fraud, and comply with legal obligations</li>
                  </ul>
                </section>

                <section id="cookies" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">4. Cookies and Tracking Technologies</h2>
                  <p>Flysava may use cookies and similar technologies to support website functionality, analytics, personalization, affiliate tracking, and advertising measurement.</p>
                  <p>You can manage or disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.</p>
                </section>

                <section id="third-party" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">5. Third-Party Travel Tools & Affiliate Partners</h2>
                  <p>Flysava displays flight search widgets, booking links, maps, and advertisements from third-party travel partners.</p>
                  
                  <div className="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl text-xs font-semibold text-slate-800 my-2">
                    When you click through to a third-party partner, their individual privacy policy and terms govern your transaction.
                  </div>
                </section>

                <section id="sharing" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">6. Sharing of Information</h2>
                  <p>We share information strictly with hosting providers, analytics tools, and legal authorities if required by law.</p>
                  <p className="font-extrabold text-slate-900 bg-slate-100 p-3 rounded-xl text-xs inline-block">
                    Flysava does not sell your personal information for direct monetary payment.
                  </p>
                </section>

                <section id="security" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">7. Data Security</h2>
                  <p>We use SSL encryption and secure cloud infrastructure to protect data. However, no internet transmission is 100% secure, and absolute security cannot be guaranteed.</p>
                </section>

                <section id="retention" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">8. Data Retention</h2>
                  <p>Personal information is retained only as long as necessary for the operational purposes outlined in this policy or required by law.</p>
                </section>

                <section id="rights" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">9. Your Privacy Rights</h2>
                  <p>Depending on your region, you may request access to, correction of, or deletion of your personal data by contacting <a href="mailto:contact@flysava.com" className="text-blue-600 font-bold hover:underline">contact@flysava.com</a>.</p>
                </section>

                <section id="marketing" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">10. Marketing Communications</h2>
                  <p>If you subscribe to updates, you may opt out at any time using the unsubscribe link provided in our emails.</p>
                </section>

                <section id="international" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">11. International Data Transfers</h2>
                  <p>Data may be processed on secure servers located outside your home country with standard protective safeguards.</p>
                </section>

                <section id="children" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">12. Children's Privacy</h2>
                  <p>Flysava is not intended for children under 13. We do not knowingly collect personal data from minors.</p>
                </section>

                <section id="external" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">13. External Links</h2>
                  <p>We are not responsible for the privacy practices or content of third-party external sites linked from our platform.</p>
                </section>

                <section id="updates" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">14. Updates to This Privacy Policy</h2>
                  <p>This policy may be updated periodically. Your continued use of the site constitutes acceptance of updated terms.</p>
                </section>

                <section id="contact" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">15. Contact Us</h2>
                  <p>For questions or privacy requests, reach out to:</p>
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/60 font-bold text-slate-900 text-xs">
                    Flysava Privacy Desk <br />
                    Email: <a href="mailto:contact@flysava.com" className="text-blue-600 hover:underline">contact@flysava.com</a>
                  </div>
                </section>

              </div>

              {/* Bottom Support CTA Box */}
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 text-center border border-blue-200/80 shadow-xl shadow-blue-600/5 space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto border border-blue-100">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Have Questions About This Policy?</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">Contact our privacy team anytime at contact@flysava.com</p>
                <button 
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-2xl transition-all shadow-md shadow-blue-600/25 cursor-pointer active:scale-95"
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