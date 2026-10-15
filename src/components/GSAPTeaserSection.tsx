import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Globe, Instagram, Trophy, ArrowRight, ArrowUpRight, TrendingUp, Zap, Star, Play, Sparkles, CheckCircle2 } from 'lucide-react';
import { AppPage } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  onNavigate: (page: AppPage) => void;
}

// ─── Infinite marquee strip (second marquee, reversed direction)
const SERVICES_MARQUEE = [
  'Google Ads', 'Meta Ads', 'SEO', 'CRO', 'Shopify', 'Next.js', 'Instagram Reels', 
  'UGC Content', 'Award Shows', 'Brand Identity', 'Landing Pages', 'WhatsApp Automation',
];

const StatCard: React.FC<{ value: string; label: string; color?: string }> = ({ value, label, color = '#078CCB' }) => (
  <div className="flex flex-col items-center text-center">
    <span className="font-display text-3xl sm:text-4xl font-black" style={{ color }}>{value}</span>
    <span className="text-xs font-semibold text-gray-400 mt-1 tracking-wide uppercase">{label}</span>
  </div>
);

export const GSAPTeaserSection: React.FC<Props> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLElement>(null);
  const statsBarRef = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  // BanegaBrand-style numbered pillars / service grid
  const pillars = [
    { num: '01', title: 'Product Discovery', desc: 'Finding the right audience, category and digital positioning.', color: '#078CCB', bg: '#EAF5FB' },
    { num: '02', title: 'Build & Launch', desc: 'Shopify/Next.js web ecosystems with performance-first architecture.', color: '#3B82F6', bg: '#EEF4FF' },
    { num: '03', title: 'Media Buying', desc: 'Full-funnel Meta & Google campaigns scaled to 4x+ ROAS.', color: '#10B981', bg: '#ECFDF5' },
    { num: '04', title: 'Creative Lab', desc: 'UGC hooks, reels, and scroll-stopping ad creatives that convert.', color: '#8B5CF6', bg: '#F5F3FF' },
    { num: '05', title: 'Social Growth', desc: 'Instagram, YouTube & WhatsApp marketing with viral velocity.', color: '#EC4899', bg: '#FDF2F8' },
    { num: '06', title: 'Scale & Retain', desc: 'Email, SMS, LTV maximization and loyalty programs for repeat revenue.', color: '#F59E0B', bg: '#FFFBEB' },
  ];

  useGSAP(() => {
    // Stats bar slide up
    if (statsBarRef.current) {
      gsap.fromTo(statsBarRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: {
            trigger: statsBarRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Numbered pillars stagger
    const pillarsEls = gsap.utils.toArray<HTMLElement>('.gsap-pillar-card');
    if (pillarsEls.length) {
      gsap.fromTo(
        pillarsEls,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pillarsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#0B0F1A] overflow-hidden relative">
      
      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#078CCB]/15 to-transparent pointer-events-none blur-3xl" />

      {/* ─────────────────────── STATS BAR (BanegaBrand style) ─────────────────────── */}
      <div ref={statsBarRef} className="border-t border-white/5 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <StatCard value="₹150Cr+" label="Revenue Generated" color="#09B5E5" />
          <div className="hidden md:block w-px h-12 self-center bg-white/10 mx-auto" />
          <StatCard value="240+" label="Brands Scaled" color="#10B981" />
          <div className="hidden md:block w-px h-12 self-center bg-white/10 mx-auto" />
          <StatCard value="4.8x" label="Average ROAS" color="#F59E0B" />
          <div className="hidden md:block w-px h-12 self-center bg-white/10 mx-auto" />
          <StatCard value="85M+" label="Social Views" color="#EC4899" />
        </div>
      </div>

      {/* ─────────────────────── REVERSE MARQUEE ─────────────────────── */}
      <div className="overflow-hidden relative z-10 py-5 marquee-wrapper">
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0B0F1A, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0B0F1A, transparent)' }} />

        <div className="marquee-track-reverse">
          {[...SERVICES_MARQUEE, ...SERVICES_MARQUEE, ...SERVICES_MARQUEE].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 px-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#078CCB]/70 flex-shrink-0" />
              <span className="text-sm font-bold text-[#475569] whitespace-nowrap">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────── NUMBERED PILLARS (BanegaBrand Service Grid) ─────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 pb-24 relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#078CCB] mb-4" style={{ background: 'rgba(7,140,203,0.1)', border: '1px solid rgba(7,140,203,0.2)' }}>
            <Zap className="w-3.5 h-3.5" />
            WHAT WE DO
          </div>
          <h3 className="font-display font-black text-white mb-3" style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.03em' }}>
            From <span style={{ color: '#078CCB' }}>Idea</span> to Scale,
            <br className="hidden sm:block" /> We Handle the Pieces.
          </h3>
          <p className="text-[#64748B] text-base max-w-xl mx-auto">
            You don't need to figure everything out before you start. We handle the critical parts of building a brand that scales.
          </p>
        </div>

        <div ref={pillarsRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="gsap-pillar-card rounded-2xl p-5 sm:p-6 group cursor-pointer transition-all duration-300"
              style={{ background: 'rgba(22,28,50,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(22,28,50,0.95)';
                (e.currentTarget as HTMLElement).style.borderColor = `${pillar.color}30`;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${pillar.color}15`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(22,28,50,0.6)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: pillar.bg }}>
                  <TrendingUp className="w-5 h-5" style={{ color: pillar.color }} />
                </div>
                <span className="text-2xl font-black" style={{ color: pillar.color, opacity: 0.4 }}>{pillar.num}</span>
              </div>
              {/* Underline bar */}
              <div className="w-8 h-[2px] mb-3 rounded-full" style={{ background: pillar.color }} />
              <h4 className="font-display font-bold text-white text-base sm:text-lg mb-2">{pillar.title}</h4>
              <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('services')}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg, #07579D, #09B5E5)', boxShadow: '0 8px 30px rgba(7,140,203,0.3)' }}
          >
            <span>View All 12 Services</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

    </section>
  );
};
