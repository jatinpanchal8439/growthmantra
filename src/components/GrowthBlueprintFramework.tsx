import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Search, 
  Palette, 
  TrendingUp, 
  Repeat, 
  ArrowRight
} from 'lucide-react';
import { AppPage } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface GrowthBlueprintFrameworkProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
}

export const GrowthBlueprintFramework: React.FC<GrowthBlueprintFrameworkProps> = ({
  onOpenBooking,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: '01',
      title: 'Forensic Audit & CAPI',
      timeline: 'Days 1 - 14',
      icon: Search,
      tag: 'BUILD PHASE',
      headline: 'Fixing the Foundation Before Fueling the Fire',
      summary: 'Before scaling ad spend, we audit all leak points in your current funnels and install server-side Conversions API to eliminate signal loss.',
      deliverables: [
        'Conversion teardown',
        'Server-Side CAPI',
        'Drop-off analysis',
        'CAC calibration'
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      kpiImpact: 'Recovers 20-30% of lost tracking signals immediately'
    },
    {
      number: '02',
      title: 'Creative Lab & Matrix',
      timeline: 'Days 15 - 30',
      icon: Palette,
      tag: 'BRAND PHASE',
      headline: 'High-Velocity Direct Response Production',
      summary: 'Our in-house creative lab produces 40+ modular video creatives and statics testing problem-agitate hooks, UGC teardowns, and split-screen comparisons.',
      deliverables: [
        'UGC scriptwriting',
        '8-Variation Hooks',
        '3D product renders',
        'Landing page variants'
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      kpiImpact: 'Cuts initial cost-per-click (CPC) by up to 45%'
    },
    {
      number: '03',
      title: 'Algorithmic Sandbox',
      timeline: 'Days 31 - 60',
      icon: TrendingUp,
      tag: 'GROW PHASE',
      headline: 'Precision Scaling on Meta, Google & TikTok',
      summary: 'We isolate winning creative angles in dedicated test sandboxes before systematically graduating them into high-budget broad scaling campaigns.',
      deliverables: [
        'Advantage+ Shopping',
        'Google High-Intent',
        'TikTok Spark ads',
        'Automated dayparting'
      ],
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=1200",
      kpiImpact: 'Averages 4.8x blended ROAS across paid portfolios'
    },
    {
      number: '04',
      title: 'LTV Engine & Retention',
      timeline: 'Days 61 - 90',
      icon: Repeat,
      tag: 'SCALE PHASE',
      headline: 'Turning One-Time Buyers into Compounding LTV',
      summary: 'We build high-converting post-purchase replenishment loops, VIP loyalty tiers, and programmatic SEO hubs that drive high-margin organic revenue.',
      deliverables: [
        'Klaviyo SMS & email',
        'Churn mitigation',
        'Programmatic SEO',
        'Omnichannel retargeting'
      ],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200",
      kpiImpact: 'Generates 35-45% of total revenue from zero ad spend'
    }
  ];

  useGSAP(() => {
    const panels = gsap.utils.toArray('.horizontal-panel');
    
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + scrollWrapperRef.current?.offsetWidth,
      }
    });
  }, { scope: containerRef });

  return (
    <section id="framework" ref={containerRef} className="py-24 relative bg-white overflow-hidden">
      
      {/* Section Header Removed */}

      {/* Horizontal Scroll Wrapper */}
      <div ref={scrollWrapperRef} className="flex" style={{ width: `${steps.length * 100}vw` }}>
        {steps.map((step, idx) => (
          <div key={idx} className="horizontal-panel w-screen px-4 md:px-8 lg:px-12 flex items-center justify-center">
            
            {/* The Card */}
            <div className="bg-[#6f5e82] rounded-[40px] w-full max-w-7xl mx-auto flex flex-col lg:flex-row overflow-hidden shadow-2xl relative min-h-[600px]">
              
              {/* Left Content */}
              <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold mb-8 w-max">
                  0{idx + 1} / 0{steps.length}
                </div>
                
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  {step.headline}
                </h3>
                
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                  {step.summary}
                </p>
                
                {/* Feature Pills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/15 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                      <span className="text-white font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow Button */}
                <button 
                  onClick={onOpenBooking}
                  className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all group"
                >
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Image */}
              <div className="flex-1 relative p-4 sm:p-6 lg:p-8 min-h-[400px] lg:min-h-0">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#6f5e82] z-10 hidden lg:block w-32"></div>
                <div className="w-full h-full rounded-[32px] overflow-hidden relative shadow-2xl group">
                   <div className="absolute inset-0 bg-[#8a76a1] mix-blend-overlay opacity-50 group-hover:opacity-20 transition-opacity duration-500 z-10 pointer-events-none"></div>
                   <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
