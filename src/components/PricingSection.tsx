import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Check, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  PhoneCall,
  Clock,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
import { PRICING_PLANS, SERVICE_PACKAGES_DATA } from '../data/pricingData';

interface PricingSectionProps {
  onOpenBooking: () => void;
  onOpenAudit?: () => void;
  isStandalonePage?: boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ 
  onOpenBooking, 
  onOpenAudit,
  isStandalonePage = false 
}) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('growth');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'quarterly'>('monthly');

  const containerRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Entrance animation for the 3 main pricing cards
    gsap.fromTo('.pricing-card-gsap', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.pricing-cards-container',
          start: "top 80%",
        }
      }
    );

    // 2. Entrance animation for packages
      gsap.fromTo('.package-card-gsap',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: '.packages-container',
            start: "top 80%",
          }
        }
      );
    }, { scope: containerRef });

    useGSAP(() => {
      gsap.fromTo('.price-text-gsap',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' }
      );
    }, { dependencies: [billingPeriod], scope: containerRef });

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const amount = direction === 'left' ? -340 : 340;
    
    gsap.to(sliderRef.current, {
      scrollLeft: sliderRef.current.scrollLeft + amount,
      duration: 0.5,
      ease: "power2.inOut"
    });
  };

  const faqs = [
    {
      q: 'Do you charge a percentage of ad spend on top of monthly retainer?',
      a: 'No. Unlike traditional agencies that charge 15-20% ad spend commissions, our fixed monthly plans include end-to-end ad account management up to the designated spend tiers with zero hidden fees.'
    },
    {
      q: 'What is the minimum contract commitment?',
      a: 'We work on month-to-month agreements after an initial 90-day growth sprint. We believe in earning your business every single month through measurable ROAS and lead volume.'
    },
    {
      q: 'Do you work with businesses across all Indian cities and international clients?',
      a: 'Yes. We manage digital marketing and web infrastructure for clients across Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, as well as global brands in the US, UK, UAE, and Singapore.'
    },
    {
      q: 'How fast can our marketing campaigns or website go live?',
      a: 'Standard ad campaigns and creative testing go live within 48 to 72 hours of onboarding. Custom websites and Shopify stores are delivered in 7 to 14 business days with full QA testing.'
    }
  ];

  return (
    <section id="pricing" ref={containerRef} className={`py-16 sm:py-24 bg-[#F5FAFD] relative overflow-hidden ${isStandalonePage ? 'pt-8' : 'border-t border-[#DCEAF3]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031A3D] tracking-tight">
            High-Impact Growth Plans <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5]">
              Priced for Indian & Global Scale
            </span>
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            Predictable, transparent monthly retainers and project packages designed to deliver maximum Return on Ad Spend (ROAS) and profitable growth.
          </p>

          {/* Billing Switcher (10% off quarterly) */}
          <div className="relative inline-flex items-center p-1.5 rounded-full bg-white border border-[#DCEAF3] shadow-xs">
            {/* Animated Pill Background */}
            <div 
              className="absolute top-1.5 bottom-1.5 rounded-full bg-[#07579D] transition-all duration-300 shadow-sm"
              style={{
                left: billingPeriod === 'monthly' ? '6px' : 'calc(50% + 2px)',
                width: 'calc(50% - 8px)'
              }}
            />
            
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer z-10 w-40 text-center ${
                billingPeriod === 'monthly'
                  ? 'text-white'
                  : 'text-[#475569] hover:text-[#031A3D]'
              }`}
            >
              Monthly Retainer
            </button>
            <button
              onClick={() => setBillingPeriod('quarterly')}
              className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer z-10 w-44 flex items-center justify-center gap-1.5 ${
                billingPeriod === 'quarterly'
                  ? 'text-white'
                  : 'text-[#475569] hover:text-[#031A3D]'
              }`}
            >
              <span>Quarterly Sprint</span>
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-extrabold transition-colors ${
                billingPeriod === 'quarterly' ? 'bg-white text-[#07579D]' : 'bg-[#09B5E5] text-white'
              }`}>
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Main Pricing Cards */}
        <div className="pricing-cards-container grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`pricing-card-gsap opacity-0 relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-white border-2 border-[#078CCB] shadow-xl shadow-[#078CCB]/15 lg:-translate-y-2'
                    : 'bg-white border border-[#DCEAF3] shadow-md hover:border-[#078CCB]/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] text-white text-[11px] font-extrabold tracking-wider uppercase shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Tagline */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#031A3D]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#475569] mt-1 line-clamp-2">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pb-4 border-b border-[#DCEAF3] price-text-gsap">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#031A3D] font-display">
                        {billingPeriod === 'quarterly' ? (
                          plan.id === 'starter' ? '₹38,250' : 
                          plan.id === 'growth' ? '₹89,250' : 
                          '₹191,250'
                        ) : plan.price}
                      </span>
                      <span className="text-xs text-[#8295A8] font-medium">
                        {billingPeriod === 'quarterly' ? '/ quarter' : plan.period}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#078CCB] font-semibold mt-1">
                      {billingPeriod === 'quarterly' ? 'Includes 15% Quarterly Growth Discount' : 'No lock-in contract. Cancel anytime.'}
                    </p>
                  </div>

                  {/* Best For */}
                  <div className="p-3 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3] text-xs text-[#031A3D]">
                    <strong className="text-[#07579D] block text-[10px] uppercase tracking-wider mb-0.5">Best For:</strong>
                    {plan.bestFor}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#031A3D]">
                      Included in this plan:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#475569]">
                          <div className="w-4 h-4 rounded-full bg-[#EAF5FB] text-[#07579D] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#078CCB]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="pt-8 mt-6 border-t border-[#DCEAF3] space-y-3">
                  <button
                    onClick={onOpenBooking}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white shadow-lg shadow-[#078CCB]/25'
                        : 'bg-[#EAF5FB] hover:bg-[#07579D] text-[#07579D] hover:text-white border border-[#DCEAF3]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/918505866668?text=${encodeURIComponent(plan.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#F5FAFD] border border-[#25D366]/40 text-[#031A3D] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* One-Time Project Packages Section - GSAP SLIDER */}
        <div className="packages-container bg-white border border-[#DCEAF3] rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DCEAF3] pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#07579D] uppercase tracking-wider mb-1">
                <Layers className="w-4 h-4 text-[#078CCB]" />
                One-Time Project Delivery
              </div>
              <h3 className="font-display text-2xl font-bold text-[#031A3D]">
                Specialized Web & Creative Build Packages
              </h3>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => scrollSlider('left')}
                  className="w-10 h-10 rounded-full border border-[#DCEAF3] bg-[#F5FAFD] text-[#07579D] flex items-center justify-center hover:bg-[#07579D] hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollSlider('right')}
                  className="w-10 h-10 rounded-full border border-[#DCEAF3] bg-[#F5FAFD] text-[#07579D] flex items-center justify-center hover:bg-[#07579D] hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={onOpenBooking}
                className="hidden sm:block px-5 py-2.5 rounded-full bg-[#07579D] hover:bg-[#031A3D] text-white text-xs font-bold transition-all cursor-pointer shadow-md"
              >
                Get Custom Quote
              </button>
            </div>
          </div>

          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pt-8 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}} />
            
            {SERVICE_PACKAGES_DATA.map((pkg, idx) => (
              <div key={idx} className="package-card-gsap opacity-0 min-w-[280px] sm:min-w-[320px] flex-shrink-0 snap-center p-6 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] space-y-4 flex flex-col justify-between hover:border-[#078CCB]/40 transition-colors shadow-sm">
                <div className="space-y-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#EAF5FB] text-[#07579D] text-[10px] font-bold uppercase tracking-wider">
                    {pkg.category}
                  </span>
                  <h4 className="font-bold text-[#031A3D] text-base leading-snug">
                    {pkg.title}
                  </h4>
                  <div className="text-xl font-extrabold text-[#07579D]">
                    {pkg.price}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#8295A8] font-medium bg-white p-2 rounded-lg border border-[#DCEAF3]/50">
                    <Clock className="w-3.5 h-3.5 text-[#078CCB]" />
                    <span>{pkg.timeline}</span>
                  </div>
                  <ul className="space-y-2 pt-3 border-t border-[#DCEAF3]/50 text-xs text-[#475569]">
                    {pkg.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#078CCB] flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/918505866668?text=${encodeURIComponent(`Hello Groowth Mantra, I am interested in the ${pkg.title} package (${pkg.price}). Please share details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#EAF5FB] border border-[#DCEAF3] text-center text-xs font-bold text-[#07579D] transition-colors cursor-pointer mt-4"
                >
                  Book Package
                </a>
              </div>
            ))}
          </div>
          
          <button
            onClick={onOpenBooking}
            className="w-full sm:hidden mt-4 px-5 py-3 rounded-xl bg-[#07579D] text-white text-xs font-bold transition-all cursor-pointer shadow-md"
          >
            Get Custom Quote
          </button>
        </div>



      </div>
    </section>
  );
};
