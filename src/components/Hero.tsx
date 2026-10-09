import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AppPage } from '../types';
import { CountUp } from './CountUp';

interface HeroProps {
  onOpenAuditWithUrl: (url: string) => void;
  onOpenBooking: () => void;
  onOpenClientDetails: (clientId: string) => void;
  onNavigate?: (page: AppPage) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.3], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 1]);
  
  // Carousel items
  const carouselItems = [
    { label: "Performance Ads", color: "#EF4444" },
    { label: "SEO Optimization", color: "#10B981" },
    { label: "Web Ecosystems", color: "#3B82F6" },
    { label: "Social Media Lab", color: "#8B5CF6" },
    { label: "Viral Creative", color: "#F59E0B" },
    { label: "CRO & Speed", color: "#06B6D4" },
    { label: "Brand Identity", color: "#EC4899" },
    { label: "Digital Events", color: "#14B8A6" },
  ];

  const stats = [
    { component: <CountUp to={40} suffix="+" />, label: "Growth Experts" },
    { component: <CountUp to={150} prefix="₹" suffix="+" />, label: "Crore Revenue" },
    { component: <CountUp to={4.8} decimals={1} suffix="x" />, label: "Average ROAS" },
    { component: <CountUp to={24} suffix="/7" />, label: "Always-on Gen" },
  ];

  return (
    <section ref={containerRef} className="relative pt-32 bg-white overflow-hidden">
      
      {/* Background Concentric Orbits */}
      <div className="absolute top-0 left-0 w-full h-[700px] flex items-center justify-center overflow-hidden pointer-events-none z-[1]">

        {/* Inner Ring */}
        <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full border border-gray-200 opacity-80">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-emerald-500 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
          </motion.div>
        </div>

        {/* Middle Ring */}
        <div className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-gray-200 opacity-60">
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="w-full h-full relative">
            <div className="absolute top-1/2 left-0 w-2.5 h-2.5 rounded-full bg-amber-500 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
          </motion.div>
        </div>

        {/* Outer Ring */}
        <div className="absolute w-[800px] h-[800px] sm:w-[1100px] sm:h-[1100px] rounded-full border border-gray-200 opacity-40">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="w-full h-full relative">
            <div className="absolute bottom-1/4 right-0 w-3 h-3 rounded-full bg-blue-500 translate-x-1/2 translate-y-1/2 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          </motion.div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10 text-center">
        
        {/* Headlines */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            Award-Winning Performance Marketing <br className="hidden lg:block" />
            <span className="text-[#79903b]">& Digital Growth Agency</span>
          </h1>
          
          <p className="text-gray-600 text-base sm:text-xl max-w-2xl mx-auto">
            We build scalable web ecosystems, run ROI-driven social labs, and execute high-converting ad campaigns to scale your revenue across B2B and B2C sectors.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={onOpenBooking}
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-[#3f9e4c] to-[#4ab95a] hover:from-[#3a9346] hover:to-[#41a34f] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto"
          >
            <span>Claim Free Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full bg-white text-gray-900 border border-gray-200 font-bold text-sm sm:text-base hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm w-full sm:w-auto"
          >
            Schedule Strategy Call
          </button>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div 
          style={{ rotateX, scale, y, opacity, transformPerspective: 1200 }}
          className="mt-16 relative mx-auto w-full max-w-[1200px] z-20 px-2 sm:px-4"
        >
          {/* Subtle glow behind the dashboard */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-[100px] opacity-50 -z-10 rounded-full" />
          
          <div className="rounded-t-2xl sm:rounded-t-[2rem] p-2 sm:p-4 bg-gray-100 border-x-[6px] border-t-[6px] sm:border-x-[12px] sm:border-t-[12px] border-gray-200 shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden">
            {/* Camera dot */}
            <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gray-700"></div>
            
            {/* The Image inside the screen */}
            <div className="rounded-md sm:rounded-xl overflow-hidden mt-2 sm:mt-3 bg-[#0a0a0a] relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              <img 
                src="/hero-dashboard-banner.jpg" 
                alt="Performance Marketing Analytics and Digital Growth Dashboard" 
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Marquee Carousel */}
      <div className="bg-gray-50 border-y border-gray-200 py-6 relative overflow-hidden z-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1.5 text-[9px] sm:text-[10px] font-extrabold text-gray-500 tracking-[0.25em] border border-gray-200 rounded-full z-10 whitespace-nowrap shadow-sm">
          ONE COCKPIT • 30+ CONNECTED MODULES
        </div>
        
        <div className="flex whitespace-nowrap mt-3 group relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }} 
            className="flex items-center min-w-max"
          >
            {/* Double the items for seamless loop */}
            {[...carouselItems, ...carouselItems, ...carouselItems, ...carouselItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 px-8">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm font-bold text-gray-600">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 pb-16 pt-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#79903b]">
                {stat.component}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-gray-500 mt-3 lowercase tracking-wide font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
