import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  ArrowRight 
} from 'lucide-react';

export const Careers = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    { icon: <Heart />, title: "User First", desc: "We build experiences around traveler needs." },
    { icon: <Search />, title: "Transparency", desc: "Clear information and honest comparisons." },
    { icon: <Lightbulb />, title: "Innovation", desc: "Continuously improving travel discovery." },
    { icon: <ShieldCheck />, title: "Reliability", desc: "Fast, secure, and dependable experiences." },
    { icon: <Globe2 />, title: "Global Mindset", desc: "Helping travelers explore the world." },
    { icon: <Sparkles />, title: "Simplicity", desc: "Making travel planning easier." },
  ];

  const lifeItems = [
    { icon: <Laptop />, title: "Remote-friendly mindset", desc: "Embracing flexibility and digital collaboration." },
    { icon: <BookOpen />, title: "Continuous learning", desc: "Always exploring new technologies and industry trends." },
    { icon: <Users />, title: "Collaboration", desc: "Working together to solve complex travel challenges." },
    { icon: <Target />, title: "Customer-focused thinking", desc: "Every decision starts with the traveler's perspective." },
    { icon: <Rocket />, title: "Growth and innovation", desc: "Building scalable solutions for the future of travel." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors pb-10">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* High-quality travel-tech abstract background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
            alt="Modern technology and collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 dark:bg-gray-900/80 z-10" />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 max-w-4xl text-center pt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Building Better Travel Experiences
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed drop-shadow-md font-medium"
          >
            At FlySava, we're focused on creating smarter ways for travelers to discover, compare, and explore flight options around the world.
          </motion.p>
        </div>
      </div>

      {/* 2. OUR MISSION */}
      <div className="container mx-auto px-4 max-w-5xl py-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            FlySava is dedicated to making travel planning simpler, more transparent, and more accessible for everyone. We believe that technology should remove the friction from flight discovery, allowing travelers to focus on the journey ahead rather than the complexities of booking.
          </p>
        </motion.div>
      </div>

      {/* 3. WHAT WE VALUE */}
      <div className="bg-white dark:bg-dark-card border-y border-gray-100 dark:border-dark-border py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">What We Value</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">The core principles that guide our product and our people.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-gray-700/50 p-8 rounded-3xl hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white dark:bg-dark-card text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 4. LIFE AT FLYSAVA */}
      <div className="container mx-auto px-4 max-w-7xl py-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Visual Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-3xl w-full h-64 object-cover shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Workspace" 
                className="rounded-3xl w-full h-64 object-cover shadow-lg mt-8"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">Life at FlySava</h2>
            <div className="space-y-6">
              {lifeItems.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mr-5 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. BUILDING FOR THE FUTURE */}
      <div className="bg-slate-900 py-24 border-y border-white/10 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1920&q=80" 
            alt="Abstract technology" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-5xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 md:p-16 rounded-[2.5rem] text-center shadow-2xl"
          >
            <div className="w-20 h-20 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-8">
              <Rocket className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Building for the Future</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              While we are not currently hiring, FlySava continues to grow and evolve. As we expand our platform and services, future opportunities may become available. Our focus remains on refining our technology and building the ultimate tool for modern travelers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 6. STAY CONNECTED CTA */}
      <div className="container mx-auto px-4 max-w-5xl py-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl shadow-blue-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Interested in FlySava's Journey?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            Follow our updates, explore our platform, and stay connected as we continue building smarter travel experiences.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg text-lg group"
          >
            Explore FlySava <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

    </div>
  );
};