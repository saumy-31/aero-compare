import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

export const Privacy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
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
    { id: 'children', title: '12. Children\'s Privacy' },
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
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-20 transition-colors">
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
          <div className="w-16 h-16 bg-purple-50 dark:bg-purple-500/10 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 dark:text-gray-400 mb-6"
          >
            How FlySava collects, uses, and protects your information.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-bold text-gray-400 uppercase tracking-wider"
          >
            Last Updated: July 2026
          </motion.p>
        </div>

        {/* Main Layout Grid */}
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sticky Sidebar */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 bg-white dark:bg-dark-card p-6 rounded-3xl border border-gray-100 dark:border-dark-border shadow-sm">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((sec) => (
                    <a 
                      key={sec.id} 
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className="block text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors py-1"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white dark:bg-dark-card rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-dark-border shadow-sm space-y-12 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                
                <section id="intro" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
                  <p className="mb-4">This Privacy Policy explains how Flysava collects, uses, shares, and protects information when you visit or use flysava.com.</p>
                  <p>By using Flysava, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the website.</p>
                </section>

                <section id="info-collect" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
                  <p className="mb-4">Flysava may collect personal and non-personal information depending on how you use the website.</p>
                  <p className="mb-2 font-bold text-gray-900 dark:text-white">Personal information may include:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Name, if you submit it through a form</li>
                    <li>Email address, if you contact us or subscribe to updates</li>
                    <li>Contact details included in messages you send to us</li>
                    <li>IP address</li>
                    <li>Device and browser information</li>
                  </ul>
                  <p className="mb-2 font-bold text-gray-900 dark:text-white">Non-personal information may include:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Browser type and version</li>
                    <li>Device type</li>
                    <li>Operating system</li>
                    <li>Pages visited</li>
                    <li>Referring websites</li>
                    <li>Date and time of visits</li>
                    <li>General location information based on IP address</li>
                    <li>Interactions with pages, links, widgets, and forms</li>
                  </ul>
                  <p>We may also use cookies, analytics tools, affiliate tracking, and third-party widgets to understand website performance and improve the user experience.</p>
                </section>

                <section id="how-use" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. How We Use Information</h2>
                  <p className="mb-4">Flysava may use collected information to:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Provide and improve the website</li>
                    <li>Display travel comparison tools and third-party widgets</li>
                    <li>Understand how users interact with the website</li>
                    <li>Improve page speed, design, content, and functionality</li>
                    <li>Respond to messages or support requests</li>
                    <li>Send updates if you choose to subscribe</li>
                    <li>Monitor website security and prevent misuse</li>
                    <li>Measure affiliate performance and website traffic</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section id="cookies" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Cookies and Tracking Technologies</h2>
                  <p className="mb-4">Flysava may use cookies and similar technologies to support website functionality, analytics, personalization, affiliate tracking, and advertising measurement.</p>
                  <p className="mb-4">Cookies may be placed by Flysava or by third-party services such as analytics providers, affiliate partners, travel widgets, advertising tools, or embedded content providers.</p>
                  <p className="mb-4">You can manage or disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.</p>
                  <p>For more information, please read our Cookie Policy.</p>
                </section>

                <section id="third-party" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Third-Party Travel Tools and Affiliate Partners</h2>
                  <p className="mb-4">Flysava may display travel search widgets, booking links, maps, advertisements, or comparison tools from third-party providers.</p>
                  <p className="mb-4">When you interact with these tools or click through to a third-party website, those providers may collect information according to their own privacy policies. Flysava does not control the privacy practices of third-party websites.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-2xl mb-4">
                    <p className="font-medium text-purple-900 dark:text-purple-100">You should review the privacy policy and terms of any third-party provider before completing a booking or sharing personal information.</p>
                  </div>
                </section>

                <section id="sharing" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Sharing of Information</h2>
                  <p className="mb-4">Flysava may share information with:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Service providers that help operate, host, secure, or analyze the website</li>
                    <li>Analytics providers that help us understand website performance</li>
                    <li>Affiliate and travel partners when users interact with travel links or widgets</li>
                    <li>Legal authorities if required by law or necessary to protect rights and safety</li>
                    <li>Professional advisors, if needed for legal, accounting, or business purposes</li>
                  </ul>
                  <p className="font-bold text-gray-900 dark:text-white">Flysava does not sell your personal information for direct monetary payment.</p>
                </section>

                <section id="security" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Data Security</h2>
                  <p className="mb-4">We use reasonable technical and organizational measures to protect information. These may include SSL encryption, secure hosting, access controls, and monitoring tools.</p>
                  <p>However, no method of internet transmission or electronic storage is completely secure. We cannot guarantee absolute security of information transmitted through the website.</p>
                </section>

                <section id="retention" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Data Retention</h2>
                  <p className="mb-4">Flysava keeps personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
                  <p>Contact messages, analytics data, and subscription records may be retained for business, security, legal, or operational purposes.</p>
                </section>

                <section id="rights" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Your Privacy Rights</h2>
                  <p className="mb-4">Depending on your country or region, you may have rights regarding your personal information, including the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Request access to personal information</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of personal information</li>
                    <li>Object to or restrict certain processing</li>
                    <li>Withdraw consent where processing is based on consent</li>
                    <li>Request a copy of your information</li>
                    <li>Opt out of certain tracking or marketing communications</li>
                  </ul>
                  <p>To make a privacy request, contact us at contact@flysava.com. We may need to verify your identity before processing certain requests.</p>
                </section>

                <section id="marketing" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Marketing Communications</h2>
                  <p>If you subscribe to emails or updates from Flysava, we may send travel tips, website updates, or promotional content. You can unsubscribe at any time using the unsubscribe link in the email or by contacting us.</p>
                </section>

                <section id="international" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. International Data Transfers</h2>
                  <p className="mb-4">Because Flysava may use hosting, analytics, affiliate, and technology providers located in different countries, information may be processed outside your country of residence.</p>
                  <p>Where required, we rely on appropriate safeguards and lawful transfer mechanisms to protect personal information.</p>
                </section>

                <section id="children" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Children's Privacy</h2>
                  <p className="mb-4">Flysava is not intended for children under 13 years old or the minimum legal age required in your country. We do not knowingly collect personal information from children.</p>
                  <p>If you believe a child has provided personal information to Flysava, contact us and we will take appropriate steps to delete it.</p>
                </section>

                <section id="external" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. External Links</h2>
                  <p>Flysava may contain links to third-party websites. We are not responsible for the privacy practices, content, or security of those websites. You should review their policies before sharing information or completing a booking.</p>
                </section>

                <section id="updates" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Updates to This Privacy Policy</h2>
                  <p className="mb-4">We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Last updated" date.</p>
                  <p>Your continued use of Flysava after updates are posted means you accept the revised Privacy Policy.</p>
                </section>

                <section id="contact" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">15. Contact</h2>
                  <p>For questions about this Privacy Policy or to make a privacy request, contact:</p>
                  <p className="mt-4 font-bold text-gray-900 dark:text-white">Flysava<br/>Email: <a href="mailto:contact@flysava.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@flysava.com</a></p>
                </section>
                
              </div>

              {/* Bottom Contact CTA */}
              <div className="mt-12 bg-purple-600 rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-purple-500/20">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Questions about this policy?</h2>
                <p className="text-purple-100 mb-8 text-lg">Contact us at: <a href="mailto:contact@flysava.com" className="font-bold underline hover:text-white">contact@flysava.com</a></p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Contact Support <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};