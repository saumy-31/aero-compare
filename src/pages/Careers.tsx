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
  Briefcase
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';

// Explicit ambient declarations for VS Code editor stability
declare const window: any;

export const Careers = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleExploreFlights = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  const values = [
    { icon: <Heart className="w-5 h-5 text-rose-500" />, title: "User First", desc: "We build intuitive experiences tailored strictly around traveler needs." },
    { icon: <Search className="w-5 h-5 text-blue-500" />, title: "Transparency", desc: "100% clear information with zero hidden fees or agent markups." },
    { icon: <Lightbulb className="w-5 h-5 text-amber-500" />, title: "Innovation", desc: "Continuously pushing boundaries in real-time airfare comparison." },
    { icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />, title: "Reliability", desc: "Lightning-fast, highly secure, and dependable flight engines." },
    { icon: <Globe2 className="w-5 h-5 text-sky-500" />, title: "Global Mindset", desc: "Empowering explorers across 180+ countries with effortless tools." },
    { icon: <Sparkles className="w-5 h-5 text-purple-500" />, title: "Simplicity", desc: "Removing travel complexities through minimalist, elegant design." },
  ];

  const lifeItems = [
    { icon: <Laptop className="w-5 h-5 text-blue-600" />, title: "Remote-friendly Mindset", desc: "Embracing flexibility, autonomy, and modern digital collaboration." },
    { icon: <BookOpen className="w-5 h-5 text-indigo-600" />, title: "Continuous Learning", desc: "Exploring cutting-edge web technologies, systems, and travel trends." },
    { icon: <Users className="w-5 h-5 text-sky-600" />, title: "Cross-Functional Synergy", desc: "Solving high-impact, complex engineering and travel challenges." },
    { icon: <Target className="w-5 h-5 text-emerald-600" />, title: "Customer-Centric Focus", desc: "Every architectural decision starts with the traveler's perspective." },
    { icon: <Rocket className="w-5 h-5 text-purple-600" />, title: "Scalable Growth", desc: "Designing robust, high-performance infrastructure for global flight search." },
  ];

  const careersJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at FlySava",
    "description": "Explore career opportunities at FlySava. Join our mission to make travel planning simpler, more transparent, and accessible for everyone.",
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
      
      <div className="min-h-screen bg-[#EEF2F6] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
        
        {/* ================= BRIGHT & CLEAN LIGHT HERO HEADER ================= */}
        <section className="pt-16 sm:pt-20 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-600 border border-blue-200/70 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" /> Shaping Travel Technology
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Building Better <br className="hidden sm:inline" />
                <span className="text-blue-600">Travel Experiences</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                At FlySava, we are focused on creating faster, clearer, and more transparent tools for explorers discovering flights around the world.
              </p>

              {/* Feature Pills */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-slate-700">
                <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Travel Tech Innovation
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Remote-Friendly Culture
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Global Impact
                </span>
              </div>

            </div>

          </div>

        </section>

        {/* ================= MISSION & PURPOSE SECTION ================= */}
        <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-xl shadow-slate-900/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-6 lg:pb-0 lg:pr-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100 shadow-xs">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 block mb-1">
                  Our Core Purpose
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Our Mission
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-medium">
                  FlySava is dedicated to making travel planning simpler, more transparent, and more accessible for everyone. We believe that technology should remove the friction from flight discovery, allowing travelers to focus on the journey ahead rather than the complexities of booking.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= WHAT WE VALUE ================= */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 block mb-1">
              Our Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What We Value
            </h2>
            <p className="text-sm text-slate-500 font-normal mt-1">
              The core principles that guide our product decisions and team ethos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200/80 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-2xs">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ================= LIFE AT FLYSAVA ================= */}
        <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-xl shadow-slate-900/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Side: Photo Collage */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 group">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 group mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                    alt="Workspace" 
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Right Side: Features List */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 block mb-1">
                    Work Environment
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Life at FlySava
                  </h2>
                </div>
                
                <div className="space-y-3.5">
                  {lifeItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-200/80 shadow-2xs">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-slate-900">{item.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed font-normal mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= FUTURE TALENT CTA ================= */}
        <section className="pt-4 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Status Note Banner */}
          <div className="bg-white border border-slate-200/90 p-8 sm:p-10 rounded-[2.5rem] text-center shadow-xl shadow-slate-900/5 max-w-4xl mx-auto">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100 shadow-xs">
              <Rocket className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 tracking-tight">
              Building for the Future
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              While we are not actively hiring for immediate roles, FlySava continues to rapidly evolve. As we expand our flight indexes and services, future engineering, design, and marketing opportunities will open up.
            </p>
          </div>

          {/* Clean Light-Themed Email Contact Card */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 text-center border border-blue-200/80 shadow-xl shadow-blue-600/5 max-w-4xl mx-auto space-y-5">
            
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-blue-50 text-blue-600 border border-blue-200/70">
              <Briefcase className="w-3.5 h-3.5" /> Future Talent Network
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Join Our Future Team
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
              We are always excited to connect with talented people passionate about travel, technology, and user experience.
            </p>

            {/* Email Box */}
            <div className="bg-blue-50/70 rounded-2xl p-5 border border-blue-200/60 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-blue-600 font-extrabold mb-1">
                <Mail className="w-3.5 h-3.5" /> Send Your Resume To
              </div>
              <a 
                href="mailto:careers@flysava.com" 
                className="text-xl sm:text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors tracking-wide"
              >
                careers@flysava.com
              </a>
            </div>

            {/* Action Button */}
            <div>
              <button 
                type="button"
                onClick={handleExploreFlights}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-2xl transition-all shadow-md shadow-blue-600/25 cursor-pointer active:scale-95"
              >
                Explore Flight Search <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

          </div>

        </section>

      </div>
    </>
  );
};