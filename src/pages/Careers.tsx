import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Search, 
  Lightbulb, 
  ShieldCheck, 
  Globe2, 
  Sparkles, 
  Laptop, 
  BookOpen, 
  Users, 
  Target, 
  Rocket, 
  ArrowRight,
  Compass, 
  CheckCircle2, 
  Mail, 
  Briefcase,
  Plane,
  Terminal,
  Cpu,
  Clock,
  Coffee,
  Workflow,
  Code2,
  Lock,
  Layers,
  Award,
  Zap,
  MapPin,
  Check
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';

declare const window: any;

export const Careers: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleExploreFlights = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/#tpwl-search';
    }
  };

  const values = [
    { 
      icon: <Heart className="w-5 h-5 text-rose-500" />, 
      title: "User First", 
      desc: "We build intuitive experiences tailored strictly around traveler needs. Every design decision starts by asking whether it makes trip planning simpler and less stressful." 
    },
    { 
      icon: <Search className="w-5 h-5 text-blue-500" />, 
      title: "Transparency", 
      desc: "100% clear information with zero hidden fees or agent markups. We believe honest pricing creates long-term trust with explorers worldwide." 
    },
    { 
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />, 
      title: "Innovation", 
      desc: "Continuously pushing boundaries in real-time airfare comparison, multi-provider aggregation, and instant international eSIM cellular connectivity." 
    },
    { 
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />, 
      title: "Reliability", 
      desc: "Lightning-fast, highly secure, and dependable flight engines. We design distributed systems built to perform effortlessly under heavy global traffic." 
    },
    { 
      icon: <Globe2 className="w-5 h-5 text-sky-500" />, 
      title: "Global Mindset", 
      desc: "Empowering explorers across 180+ countries with effortless tools tailored for diverse routes, languages, currencies, and travel styles." 
    },
    { 
      icon: <Sparkles className="w-5 h-5 text-purple-500" />, 
      title: "Simplicity", 
      desc: "Removing travel complexities through minimalist, elegant design. We turn millions of complicated data points into clear, actionable travel choices." 
    },
  ];

  const lifeItems = [
    { 
      icon: <Laptop className="w-5 h-5 text-blue-600" />, 
      title: "Remote-friendly Mindset", 
      desc: "Embracing flexibility, autonomy, and modern digital collaboration across time zones without micromanagement." 
    },
    { 
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />, 
      title: "Continuous Learning", 
      desc: "Exploring cutting-edge web technologies, distributed search architectures, and global travel industry dynamics." 
    },
    { 
      icon: <Users className="w-5 h-5 text-sky-600" />, 
      title: "Cross-Functional Synergy", 
      desc: "Solving high-impact, complex engineering and product design challenges in small, collaborative, agile teams." 
    },
    { 
      icon: <Target className="w-5 h-5 text-emerald-600" />, 
      title: "Customer-Centric Focus", 
      desc: "Every architectural decision and frontend enhancement starts directly from the traveler's perspective." 
    },
    { 
      icon: <Rocket className="w-5 h-5 text-purple-600" />, 
      title: "Scalable Growth", 
      desc: "Designing robust, high-performance infrastructure for global flight search, lodging comparison, and eSIM roaming." 
    },
  ];

  const benefits = [
    {
      title: "Autonomous Scheduling",
      desc: "Work on your own terms with flexible working hours designed around your productivity peaks rather than rigid office schedules."
    },
    {
      title: "Workspace & Setup Freedom",
      desc: "Work from anywhere in the world—home, co-working spaces, or while exploring new destinations abroad."
    },
    {
      title: "Direct Engineering Ownership",
      desc: "No corporate red tape. You have full visibility and ownership over the systems and interfaces you build."
    },
    {
      title: "Continuous Skill Development",
      desc: "Work alongside modern web primitives (React, TypeScript, Vite, edge infrastructure) with zero legacy code burdens."
    }
  ];

  const focusDisciplines = [
    {
      title: "Engineering & Architecture",
      desc: "Building high-performance search pipelines, sub-second route indexers, and responsive user interfaces that handle real-time flight and accommodation queries."
    },
    {
      title: "Product Design & Interaction",
      desc: "Creating minimal, scannable, mobile-optimized travel interfaces, destination discovery hubs, and cohesive design system components."
    },
    {
      title: "Editorial & Travel Intelligence",
      desc: "Curating practical travel dispatches, seasonal budget guides, route hacks, and city itineraries for modern voyagers."
    },
    {
      title: "Partnerships & Network Integrations",
      desc: "Expanding direct connections with global airline networks, hotel distributors, mobility providers, and digital roaming partners."
    }
  ];

  const hiringRoadmap = [
    {
      step: "01",
      title: "Direct Introduction",
      desc: "Send your portfolio, GitHub, or resume to our direct talent inbox. We review every submission thoughtfully."
    },
    {
      step: "02",
      title: "Culture & Craft Discussion",
      desc: "A focused conversation about your background, what you love building, and how we collaborate asynchronously."
    },
    {
      step: "03",
      title: "Practical Problem Solving",
      desc: "We discuss real-world architectural and product challenges relevant to travel technology without tricky whiteboard riddles."
    },
    {
      step: "04",
      title: "Offer & Onboarding",
      desc: "A clear offer followed by seamless digital onboarding, giving you immediate ownership of meaningful features."
    }
  ];

  const careersJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at FlySava | Join Our Travel Tech Team",
    "description": "Explore career opportunities, company values, work culture, and future talent programs at FlySava.",
    "url": "https://flysava.com/careers"
  };

  return (
    <>
      <SEO 
        title="Careers at FlySava | Join Our Travel Tech Team"
        description="Explore career opportunities at FlySava. Join our mission to make travel planning simpler, more transparent, and accessible for everyone."
        canonicalUrl="/careers"
        jsonLd={careersJsonLd}
      />
      
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-24">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER                                                            */}
        {/* ========================================================================= */}
        <header className="pt-16 sm:pt-24 pb-16 border-b border-slate-200/80 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5" /> Shaping Travel Technology
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Building Better <br className="hidden sm:inline" />
              <span className="text-blue-600">Travel Experiences</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
              At FlySava, we are focused on creating faster, clearer, and more transparent tools for explorers discovering flights, stays, car rentals, and mobile connectivity around the world.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Travel Tech Innovation
              </span>
              <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Remote-Friendly Culture
              </span>
              <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Global Impact
              </span>
            </div>

            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-100 text-left sm:text-center">
              <div>
                <div className="text-3xl font-black text-slate-900">100%</div>
                <div className="text-xs font-bold text-slate-500 mt-0.5">Remote-First Culture</div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-600">180+</div>
                <div className="text-xs font-bold text-slate-500 mt-0.5">Countries Connected</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">0ms</div>
                <div className="text-xs font-bold text-slate-500 mt-0.5">Legacy Tech Debt</div>
              </div>
              <div>
                <div className="text-3xl font-black text-indigo-600">8+</div>
                <div className="text-xs font-bold text-slate-500 mt-0.5">Integrated Verticals</div>
              </div>
            </div>

          </div>
        </header>

        {/* ========================================================================= */}
        {/* 2. OUR MISSION & VISION                                                   */}
        {/* ========================================================================= */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-28">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
                01 &bull; OUR PURPOSE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our Mission
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                FlySava is dedicated to making travel planning simpler, more transparent, and more accessible for everyone. We believe that modern technology should remove the friction from flight discovery, allowing travelers to focus on the journey ahead rather than the complexities of booking.
              </p>
              <p>
                Traditional travel platforms are cluttered with artificial urgency countdowns, hidden payment surcharges, and confusing navigation paths. We take the opposite approach by prioritizing sub-second performance, absolute price transparency, and clean visual design.
              </p>
              <p>
                As our platform continues to evolve, we are uniting every essential stage of travel—from flights and hotel stays to rental car fleets and instant international eSIM mobile data—into a single intuitive workspace.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. WHAT WE VALUE                                                          */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-y border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
                02 &bull; OUR CULTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                What We Value
              </h2>
              <p className="text-sm text-slate-500 font-normal">
                The core principles that guide our product decisions, code quality, and team ethos every day.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {values.map((value, idx) => (
                <div key={idx} className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-1 p-2 rounded-xl bg-slate-50 border border-slate-100 w-fit">
                    {value.icon}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-lg font-black text-slate-900">{value.title}</h3>
                  </div>
                  <div className="md:col-span-7 text-sm text-slate-600 leading-relaxed font-normal">
                    {value.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. LIFE AT FLYSAVA                                                        */}
        {/* ========================================================================= */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
              03 &bull; WORK ENVIRONMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Life at FlySava
            </h2>
            <p className="text-sm text-slate-500 font-normal">
              How our distributed team collaborates, learns, and builds sustainable software.
            </p>
          </div>

          <div className="divide-y divide-slate-200/70">
            {lifeItems.map((item, idx) => (
              <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-1 p-2 rounded-xl bg-white border border-slate-200/80 w-fit">
                  {item.icon}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-base font-black text-slate-900">{item.title}</h3>
                </div>
                <div className="md:col-span-7 text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 5. TEAM ADVANTAGES & WORKING PRINCIPLES                                   */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-y border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
                04 &bull; WORKSPACE & CULTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                How We Operate
              </h2>
              <p className="text-sm text-slate-500 font-normal">
                We believe exceptional digital products are created when talented people are given trust, clear goals, and deep-work autonomy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="space-y-2 border-l-2 border-blue-600 pl-4">
                  <h3 className="text-base font-black text-slate-900">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{benefit.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. FUTURE DISCIPLINES & AREAS OF IMPACT                                   */}
        {/* ========================================================================= */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
              05 &bull; AREAS OF IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Disciplines We Build With
            </h2>
            <p className="text-sm text-slate-500 font-normal">
              As FlySava continues to scale its travel search indexes and partner ecosystems, these are the core disciplines driving our product forward.
            </p>
          </div>

          <div className="divide-y divide-slate-200/80">
            {focusDisciplines.map((d, idx) => (
              <div key={idx} className="py-6 space-y-2">
                <h3 className="text-lg font-black text-slate-900">{d.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{d.desc}</p>
              </div>
            ))}
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 7. TRANSPARENT HIRING PHILOSOPHY                                          */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-y border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 block">
                06 &bull; HIRING PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our Hiring Philosophy
              </h2>
              <p className="text-sm text-slate-500 font-normal">
                We believe hiring should be respectful, transparent, and focused on real-world engineering and product craft.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {hiringRoadmap.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-2xl font-black text-blue-600 block">{item.step}</span>
                  <h3 className="text-base font-black text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. FUTURE TALENT NETWORK & RESUME SUBMISSION                             */}
        {/* ========================================================================= */}
        <section className="pt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-200/90 p-8 sm:p-14 text-center shadow-xl shadow-slate-900/5 space-y-6">
            
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100">
                <Briefcase className="w-3.5 h-3.5" /> Future Talent Network
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Join Our Future Team
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                While we are not actively hiring for immediate roles, FlySava continues to rapidly evolve. As we expand our flight indexes and partner services, future engineering, design, and product opportunities will open up. We are always excited to connect with talented people passionate about travel technology.
              </p>
            </div>

            <div className="pt-2">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-black mb-1">
                Send Your Resume & Portfolio To
              </p>
              <a 
                href="mailto:careers@flysava.com" 
                className="text-2xl sm:text-3xl font-black text-blue-600 hover:text-blue-700 transition-colors tracking-wide"
              >
                careers@flysava.com
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
              <button 
                type="button"
                onClick={handleExploreFlights}
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md shadow-blue-600/25 cursor-pointer active:scale-95 inline-flex items-center gap-2"
              >
                <span>Search Flights</span>
                <Plane className="w-3.5 h-3.5 transform -rotate-45" />
              </button>
              <button 
                type="button"
                onClick={() => navigate('/destinations')}
                className="px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-xs uppercase tracking-wider rounded-2xl transition-all border border-slate-200 cursor-pointer active:scale-95 inline-flex items-center gap-2"
              >
                <span>Explore Destinations</span>
                <Compass className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default Careers;