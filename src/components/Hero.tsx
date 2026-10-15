import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, ArrowUpRight, TrendingUp, Star, Play } from 'lucide-react';
import { AppPage } from '../types';
import { CountUp } from './CountUp';
import { CLIENT_CASE_STUDIES } from '../data/clients';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenAuditWithUrl: (url: string) => void;
  onOpenBooking: () => void;
  onOpenClientDetails: (clientId: string) => void;
  onNavigate?: (page: AppPage) => void;
}

const CYCLING_WORDS = ['Revenue', 'Growth', 'Results', 'Impact', 'Success'];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigate, onOpenClientDetails }) => {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<SVGSVGElement>(null);

  const [activeWord, setActiveWord] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Word cycling effect (BanegaBrand style)
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveWord(prev => (prev + 1) % CYCLING_WORDS.length);
        setAnimating(false);
      }, 400);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // GSAP entrance animations (LaunchVeda style)
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(badgeRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.2')
      .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
      .fromTo(ctaRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
      .fromTo(statsRef.current?.children ? Array.from(statsRef.current.children) : [], 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.4');
  }, { scope: containerRef });

  // Orbit SVG parallax on scroll
  useGSAP(() => {
    gsap.to(orbRef.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: 'none',
      transformOrigin: '50% 50%'
    });
  });

  const stats = [
    { value: 40, suffix: '+', label: 'Growth Experts' },
    { value: 150, prefix: '₹', suffix: '+Cr', label: 'Client Revenue' },
    { value: 4.8, decimals: 1, suffix: 'x', label: 'Avg ROAS' },
    { value: 240, suffix: '+', label: 'Brands Scaled' },
  ];

  const carouselItems = [
    { label: 'Performance Ads', color: '#EF4444' },
    { label: 'SEO Optimization', color: '#10B981' },
    { label: 'Web Ecosystems', color: '#3B82F6' },
    { label: 'Social Media Lab', color: '#8B5CF6' },
    { label: 'Viral Creative', color: '#F59E0B' },
    { label: 'CRO & Speed', color: '#06B6D4' },
    { label: 'Brand Identity', color: '#EC4899' },
    { label: 'Digital Events', color: '#14B8A6' },
    { label: 'Google Ads', color: '#078CCB' },
    { label: 'Meta Ads Scaling', color: '#4F46E5' },
  ];

  return (
    <section ref={containerRef} className="relative pt-32 sm:pt-36 lg:pt-40 bg-white overflow-hidden">
      
      {/* Orbital Background — BanegaBrand style SVG orbit */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg ref={orbRef} className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-[0.06]" viewBox="0 0 900 900">
          <circle cx="450" cy="450" r="200" fill="none" stroke="#07579D" strokeWidth="1.5" strokeDasharray="8 12" />
          <circle cx="450" cy="450" r="310" fill="none" stroke="#078CCB" strokeWidth="1" strokeDasharray="4 18" />
          <circle cx="450" cy="450" r="420" fill="none" stroke="#09B5E5" strokeWidth="0.8" strokeDasharray="2 24" />
        </svg>

        {/* Radial gradient ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[600px] blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(9,181,229,0.12) 0%, rgba(7,140,203,0.06) 40%, transparent 70%)' }} />
        <div className="absolute top-1/4 right-0 w-[300px] h-[400px] bg-[#3f9e4c]/6 rounded-full blur-3xl" />
      </div>

      {/* Floating orbit dots */}
      <div className="absolute top-36 left-[8%] w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.7)] animate-float pointer-events-none" />
      <div className="absolute top-52 right-[12%] w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.7)] animate-float pointer-events-none" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-80 left-[20%] w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.7)] animate-float pointer-events-none" style={{ animationDelay: '2.1s' }} />

      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* Badge (LaunchVeda style) */}
        <div ref={badgeRef} className="flex justify-center mt-3 sm:mt-6 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: 'rgba(7,87,157,0.08)', border: '1px solid rgba(7,140,203,0.25)' }}>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[#07579D]">India's Award-Winning Performance Marketing Agency</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#078CCB]" />
          </div>
        </div>

        {/* Main Heading — BanegaBrand word cycling style */}
        <div ref={headingRef} className="text-center">
          <h1 className="font-display font-black text-[#0F172A] tracking-tight leading-none mb-4">
            <span className="block text-[clamp(32px,5vw,68px)] font-semibold text-[#334155]">
              We Drive Your
            </span>
            {/* Animated cycling word */}
            <div className="relative inline-flex flex-col items-center justify-center overflow-hidden" style={{ height: 'clamp(60px, 10vw, 130px)' }}>
              <span className="invisible text-[clamp(56px,9vw,124px)] font-black leading-none">
                Revenue
              </span>
              {CYCLING_WORDS.map((word, i) => (
                <span
                  key={word}
                  className="absolute text-[clamp(56px,9vw,124px)] font-black leading-none brand-gradient-text"
                  style={{
                    transition: 'opacity 0.4s cubic-bezier(0.76, 0, 0.24, 1), transform 0.4s cubic-bezier(0.76, 0, 0.24, 1)',
                    opacity: i === activeWord ? (animating ? 0 : 1) : 0,
                    transform: i === activeWord 
                      ? (animating ? 'translateY(-60%)' : 'translateY(0)') 
                      : 'translateY(60%)',
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
            <span className="block text-[clamp(28px,4.5vw,60px)] font-bold text-[#334155] mt-2">
              with Full-Stack Digital Power
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <p ref={subRef} className="text-center text-gray-500 text-base sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
          Performance Ads · Web Ecosystems · Viral Social Labs · Digital Award Shows — 
          all engineered to compound your growth.
        </p>

        {/* CTA Buttons (LaunchVeda style) */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={onOpenBooking}
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] text-white font-bold text-base flex items-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 btn-glow overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            <span>Claim Free Growth Audit</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenBooking}
            className="group px-8 py-4 rounded-2xl bg-white text-[#07579D] border border-[#DCEAF3] font-bold text-base flex items-center gap-2 hover:bg-[#EAF5FB] hover:border-[#078CCB] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
          >
            <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            <span>Schedule Strategy Call</span>
          </button>
        </div>

        {/* Social proof trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-8">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-gray-700">4.9</span>
            <span>from 80+ clients</span>
          </div>
          <div className="w-px h-4 bg-gray-200 hidden sm:block" />
          <div className="text-sm text-gray-500">
            <span className="font-bold text-[#07579D]">No long-term lock-in</span> · cancel anytime
          </div>
          <div className="w-px h-4 bg-gray-200 hidden sm:block" />
          <div className="text-sm text-gray-500">
            <span className="font-bold text-[#07579D]">₹150+ Crore</span> revenue generated
          </div>
        </div>

        {/* ─── PROFESSIONAL CLIENT SHOWCASE CARDS (HERO VISUAL SECTION) ─── */}
        <div className="mt-12 max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#07579D] font-mono bg-[#EAF5FB] px-3.5 py-1 rounded-full border border-[#DCEAF3]">
              PROVEN CLIENT IMPACT · 2026 BENCHMARKS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {CLIENT_CASE_STUDIES.slice(0, 3).map((client) => (
              <div
                key={client.id}
                onClick={() => onOpenClientDetails?.(client.id)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
              >
                {/* Image Container with high-end photography */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={client.heroImage}
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider text-slate-800 uppercase shadow-xs">
                    {client.categoryLabel}
                  </div>

                  {/* Growth Pill */}
                  <div className="absolute top-3 right-3 bg-[#07579D] text-white px-2.5 py-1 rounded-full text-[11px] font-black tracking-wide shadow-md flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-[#09B5E5]" />
                    {client.growthMultiplier}
                  </div>

                  {/* Brand & Metric in overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-display font-bold text-lg leading-tight group-hover:text-[#09B5E5] transition-colors flex items-center justify-between">
                      <span>{client.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#09B5E5]" />
                    </h3>
                  </div>
                </div>

                {/* Card Content & Metrics */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="grid grid-cols-2 gap-2 mb-3 pb-3 border-b border-slate-100 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Before</span>
                        <span className="font-semibold text-slate-700">{client.initialRevenue}</span>
                      </div>
                      <div>
                        <span className="text-[#078CCB] block text-[10px] uppercase font-bold tracking-wider">Scaled To</span>
                        <span className="font-bold text-[#031A3D]">{client.currentRevenue}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {client.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#07579D] bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                      {client.roasAchieved}
                    </span>
                    <span className="text-slate-600 font-semibold group-hover:text-[#078CCB] flex items-center gap-1 transition-colors">
                      View Case Study <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── MARQUEE STRIP ─── */}
      <div className="mt-14 bg-gray-50 border-y border-gray-100 py-5 relative overflow-hidden marquee-wrapper z-20">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        
        {/* Center pill label */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 text-[9px] font-extrabold text-gray-400 tracking-[0.2em] border border-gray-200 rounded-full z-20 whitespace-nowrap shadow-sm uppercase">
          Our Full-Stack Capabilities
        </div>

        <div className="marquee-track">
          {[...carouselItems, ...carouselItems, ...carouselItems, ...carouselItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 px-7">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
              <span className="text-sm font-bold text-gray-600 whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── STATS SECTION ─── */}
      <div ref={statsRef} className="bg-white pb-16 pt-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center group">
              <div className="font-display text-4xl sm:text-5xl font-black brand-gradient-text group-hover:scale-110 transition-transform">
                <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-400 mt-2 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
