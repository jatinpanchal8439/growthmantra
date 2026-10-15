import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TESTIMONIALS_DATA } from '../data/services';
import { Star, ShieldCheck, CheckCircle2, Award, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = TESTIMONIALS_DATA.length;

  // Auto play carousel
  useEffect(() => {
    if (!isAutoPlay) return;
    autoRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % total);
    }, 4000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [isAutoPlay, total]);

  const goTo = (idx: number) => {
    setIsAutoPlay(false);
    setActive((idx + total) % total);
    // resume autoplay after 6s
    setTimeout(() => setIsAutoPlay(true), 6000);
  };

  // GSAP animate track on active change
  useEffect(() => {
    if (!trackRef.current) return;
    const cards = Array.from(trackRef.current.children) as HTMLElement[];
    cards.forEach((card, i) => {
      if (i === active) {
        gsap.to(card, { x: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' });
      } else {
        gsap.to(card, { opacity: 0, scale: 0.97, duration: 0.3, ease: 'power2.in' });
      }
    });
  }, [active]);

  // Section entrance animation
  useGSAP(() => {
    if (headingRef.current) {
      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, { scope: containerRef });

  // Marquee testimonial highlights for the bottom strip
  const highlights = TESTIMONIALS_DATA.map(t => t.highlight);

  return (
    <section ref={containerRef} id="testimonials" className="py-20 sm:py-28 relative overflow-hidden bg-[#F8FBFF]">
      
      {/* Soft gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-[#078CCB]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#10B981]/5 rounded-full blur-3xl" />
      </div>

      {/* Watermark text (LaunchVeda style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark-text pointer-events-none select-none">
        TESTIMONIALS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DCEAF3] text-[#07579D] text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#078CCB]" />
            Verified Founder Stories
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Loved by 240+ Category{' '}
            <span className="brand-gradient-text">Leaders</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B]">
            Founders, CMOs, and venture-backed operators share their Groowth Mantra results.
          </p>
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#0F172A]">4.9 / 5.0</span>
            <span className="text-xs text-[#94A3B8]">· 80+ Reviews</span>
          </div>
        </div>

        {/* ── Carousel layout ── */}
        <div className="relative">
          {/* Cards container — single visible card */}
          <div className="relative min-h-[340px] sm:min-h-[300px] overflow-hidden">
            <div ref={trackRef} className="absolute inset-0">
              {TESTIMONIALS_DATA.map((t, idx) => (
                <div
                  key={t.id}
                  className="absolute inset-0 flex items-center justify-center px-2 sm:px-16 lg:px-24"
                  style={{ opacity: idx === 0 ? 1 : 0, transition: 'opacity 0.4s' }}
                >
                  <div className="bg-white rounded-3xl border border-[#DCEAF3] shadow-xl p-8 sm:p-10 max-w-3xl w-full relative overflow-hidden">
                    {/* Quote watermark */}
                    <Quote className="absolute top-6 right-8 w-12 h-12 text-[#EAF5FB] rotate-180 pointer-events-none" />
                    
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-1.5">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold" style={{ background: '#EAF5FB', color: '#07579D', border: '1px solid #DCEAF3' }}>
                        <ShieldCheck className="w-3.5 h-3.5 text-[#078CCB]" />
                        {t.verifiedRevenue}
                      </div>
                    </div>

                    {/* Highlight */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] mb-3 leading-snug">
                      "{t.highlight}"
                    </h3>

                    {/* Full quote */}
                    <p className="text-[#475569] text-sm sm:text-base leading-relaxed italic">
                      "{t.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-[#EAF5FB]">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#07579D] to-[#09B5E5] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-black text-sm">{t.clientName.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-bold text-[#0F172A] text-sm flex items-center gap-1.5">
                          {t.clientName}
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#078CCB]" />
                        </div>
                        <div className="text-xs text-[#64748B]">
                          {t.role}, <strong className="text-[#334155]">{t.company}</strong>
                        </div>
                        <div className="text-[10px] font-mono text-[#078CCB] mt-0.5 font-semibold">{t.industry}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            className="slider-btn absolute left-0 top-1/2 -translate-y-1/2 z-10"
            onClick={() => goTo(active - 1)}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="slider-btn absolute right-0 top-1/2 -translate-y-1/2 z-10"
            onClick={() => goTo(active + 1)}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              className="h-2 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: idx === active ? '24px' : '8px',
                background: idx === active ? '#078CCB' : '#DCEAF3',
              }}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-3 text-xs text-[#94A3B8] font-mono">
          {active + 1} / {total}
        </div>
      </div>

      {/* Bottom scrolling highlights marquee */}
      <div className="mt-16 overflow-hidden relative marquee-wrapper">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F8FBFF] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F8FBFF] to-transparent z-10 pointer-events-none" />
        <div className="marquee-track-slow">
          {[...highlights, ...highlights, ...highlights].map((h, i) => (
            <div key={i} className="flex items-center gap-4 px-6">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" />
              <span className="text-sm font-semibold text-[#475569] whitespace-nowrap">"{h}"</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
