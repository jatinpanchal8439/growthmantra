import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  ChevronDown, ArrowRight, ChevronLeft, ChevronRight, Code, Sparkles, Layers, Search, Database, 
  ShoppingCart, Mail, MessageSquare, BadgeDollarSign, Target, 
  TrendingUp, Activity, Instagram, PenTool, Palette, Video, Camera, Calendar,
  Globe, ShieldCheck
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SOLUTIONS = [
  {
    id: "tech",
    number: "01",
    tag: "TECH ECOSYSTEM",
    title: "Technology Solutions",
    color: "#3B82F6",
    colorBg: "rgba(59,130,246,0.1)",
    desc1: "Our Digital Transformation Team uses bleeding-edge technology to enable you to nurture customer relationships at every stage. We create integrated digital ecosystems covering web, social & paid media, CRM, ERP, search, e-commerce and other channels.",
    desc2: "Our custom-made platforms and solutions help you attract, retain and engage every prospect with a personalized touch.",
    partnersText: "Proudly innovating with leading technology leaders in the market:",
    partners: [
      { name: "Shopify", domain: "shopify.com", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
      { name: "Google", domain: "google.com", logo: "https://cdn.worldvectorlogo.com/logos/google-icon.svg" },
      { name: "HubSpot", domain: "hubspot.com", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
      { name: "Adobe", domain: "adobe.com", logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg" },
      { name: "Zoho", domain: "zoho.com", logo: "https://cdn.worldvectorlogo.com/logos/zoho-1.svg" },
      { name: "ONDC", domain: "ondc.org", logo: "https://ondc.org/assets/theme/images/ondc_registered_logo.svg" },
      { name: "React", domain: "react.dev", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "PHP", domain: "php.net", logo: "https://cdn.worldvectorlogo.com/logos/php-1.svg" },
      { name: "MoEngage", domain: "moengage.com", logo: "https://cdn.worldvectorlogo.com/logos/moengage.svg" }
    ],
    services: [
      { name: "Custom Web Development", icon: Code, content: "We build fast, scalable, and secure websites tailored to your specific business requirements using modern stacks like Next.js and React." },
      { name: "Web Personalization", icon: Sparkles, content: "Deliver unique experiences to every visitor based on their behavior, location, and past interactions to drastically increase conversion rates." },
      { name: "UI/UX", icon: Layers, content: "User-centric design methodologies that maximize conversion rates, brand loyalty, and seamless digital journeys." },
      { name: "Search Engine Optimization", icon: Search, content: "Technical and content-driven SEO to ensure your brand ranks at the top for high-intent keywords in competitive markets." },
      { name: "CRM & ERP Solutions", icon: Database, content: "End-to-end integration of customer and resource management systems (like HubSpot and Zoho) for streamlined operations." },
      { name: "E-Commerce", icon: ShoppingCart, content: "Headless commerce architectures on Shopify and custom backends that drive superior average order values and repeat purchases." },
      { name: "Email Marketing", icon: Mail, content: "Automated retention sequences, newsletter management, and Drip campaigns that bring customers back again and again." },
      { name: "Chatbots", icon: MessageSquare, content: "AI-driven conversational agents to capture leads, answer queries, and support customers 24/7 without human intervention." }
    ]
  },
  {
    id: "media",
    number: "02",
    tag: "MEDIA ECOSYSTEM",
    title: "Media Solutions",
    color: "#10B981",
    colorBg: "rgba(16,185,129,0.1)",
    desc1: "Our Media Sciences department specializes in implementing and managing paid marketing strategies to increase your brand awareness, market share and business revenue.",
    desc2: "We manage over ₹150+ Crore in tracked revenue, turning attention into repeatable customer acquisitions with data-backed attribution models.",
    partnersText: "Proud to be collaborating with media industry leaders to power growth for brands:",
    partners: [
      { name: "Meta", domain: "meta.com", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" },
      { name: "Google", domain: "google.com", logo: "https://cdn.worldvectorlogo.com/logos/google-icon.svg" },
      { name: "Adobe", domain: "adobe.com", logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg" },
      { name: "HubSpot", domain: "hubspot.com", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
      { name: "SEMRUSH", domain: "semrush.com", logo: "https://cdn.worldvectorlogo.com/logos/semrush.svg" },
      { name: "SimilarWeb", domain: "similarweb.com", logo: "https://cdn.worldvectorlogo.com/logos/similarweb.svg" },
      { name: "ONDC", domain: "ondc.org", logo: "https://ondc.org/assets/theme/images/ondc_registered_logo.svg" },
      { name: "MoEngage", domain: "moengage.com", logo: "https://cdn.worldvectorlogo.com/logos/moengage.svg" }
    ],
    services: [
      { name: "Media Buying", icon: BadgeDollarSign, content: "Strategic purchasing of ad inventory across social, search, and programmatic networks to achieve maximum Return on Ad Spend (ROAS)." },
      { name: "Media Planning", icon: Target, content: "Data-driven audience research, competitor analysis, and allocation of budgets to the highest performing channels." },
      { name: "Performance Marketing", icon: TrendingUp, content: "Laser-focused campaigns optimized for conversions, lead generation, and direct sales across all digital touchpoints." },
      { name: "MarTech for Media", icon: Activity, content: "Advanced tracking, server-side tagging, attribution modeling, and analytics to measure every dollar spent." }
    ]
  },
  {
    id: "brand",
    number: "03",
    tag: "BRAND ECOSYSTEM",
    title: "Brand Solutions",
    color: "#EC4899",
    colorBg: "rgba(236,72,153,0.1)",
    desc1: "Our Strategists, Designers, Video Editors and Animators provide you with holistic solutions to grow your digital presence and achieve your business goals through both day-to-day content and integrated flagship campaigns.",
    desc2: "From viral UGC video hooks that stop thumbs in their tracks to full-scale TVCs and product launches, we craft brand narratives that convert.",
    partnersText: "Proud to work with the biggest brands in India & Abroad:",
    partners: [
      { name: "P&G", domain: "pg.com", logo: "https://cdn.worldvectorlogo.com/logos/procter-gamble-2.svg" },
      { name: "Unilever", domain: "unilever.com", logo: "https://cdn.worldvectorlogo.com/logos/unilever-2.svg" },
      { name: "Garnier", domain: "garnier.in", logo: "https://cdn.worldvectorlogo.com/logos/garnier-logo.svg" },
      { name: "Kotak", domain: "kotak.com", logo: "https://cdn.worldvectorlogo.com/logos/kotak-mahindra-bank.svg" },
      { name: "Jio", domain: "jio.com", logo: "https://cdn.worldvectorlogo.com/logos/jio.svg" },
      { name: "Godrej", domain: "godrej.com", logo: "https://cdn.worldvectorlogo.com/logos/godrej-logo.svg" },
      { name: "Ashok Leyland", domain: "ashokleyland.com", logo: "https://cdn.worldvectorlogo.com/logos/ashok-leyland.svg" },
      { name: "Domino's", domain: "dominos.co.in", logo: "https://cdn.worldvectorlogo.com/logos/dominos-pizza.svg" }
    ],
    services: [
      { name: "Social Media Management", icon: Instagram, content: "End-to-end management of your social channels, fostering community, brand voice, and viral organic reach." },
      { name: "Original Content and Copywriting", icon: PenTool, content: "Compelling narratives, blog posts, and ad copy that instantly grab attention and drive user action." },
      { name: "Graphic Design, Iconography and Illustrations", icon: Palette, content: "Bespoke visual assets that elevate your brand's aesthetic across all touchpoints and marketing materials." },
      { name: "Video Editing and Animation", icon: Video, content: "High-retention viral video hooks, UGC editing, and sleek motion graphics that dominate social feeds." },
      { name: "Film Production, AVs and Product Photography", icon: Camera, content: "Premium studio and location shoots for flagship campaigns, TVCs, and high-end product launches." },
      { name: "Campaign Planning", icon: Calendar, content: "Strategic rollout of multi-channel brand campaigns for maximum impact, reach, and audience resonance." }
    ]
  }
];

const AccordionItem: React.FC<{ svc: any, isOpen: boolean, onClick: () => void, onOpenBooking?: () => void, color?: string }> = ({ svc, isOpen, onClick, onOpenBooking, color = "#3B82F6" }) => {
  const Icon = svc.icon;
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button 
        type="button"
        onClick={onClick}
        className="w-full py-3.5 flex items-center justify-between text-left focus:outline-none group cursor-pointer transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && (
            <div 
              className={`p-2 rounded-xl transition-all duration-300 ${isOpen ? 'text-white shadow-md' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}
              style={{ backgroundColor: isOpen ? color : undefined }}
            >
              <Icon className="w-4 h-4" />
            </div>
          )}
          <span className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
            {svc.name}
          </span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-slate-700' : ''}`} 
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-3 pl-11' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">{svc.content}</p>
        <button 
          type="button"
          onClick={onOpenBooking} 
          className="mt-3 flex items-center gap-1.5 font-bold text-xs hover:underline cursor-pointer"
          style={{ color }}
        >
          <span>Get Free Consultation</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export const SolutionsAccordionSection = ({ onOpenBooking, onOpenAudit, isStandalonePage }: { onOpenBooking?: () => void, onOpenAudit?: () => void, isStandalonePage?: boolean }) => {
  const containerRef = useRef<HTMLElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [openIndices, setOpenIndices] = useState<{ [key: number]: number | null }>({
    0: 0,
    1: 0,
    2: 0,
  });

  const currentSolution = SOLUTIONS[activeTab];

  const handleTabChange = (idx: number) => {
    if (idx === activeTab) return;
    if (cardContentRef.current) {
      gsap.fromTo(cardContentRef.current, 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
    setActiveTab(idx);
  };

  const handleAccordionToggle = (solutionIdx: number, serviceIdx: number) => {
    setOpenIndices(prev => ({
      ...prev,
      [solutionIdx]: prev[solutionIdx] === serviceIdx ? null : serviceIdx
    }));
  };

  return (
    <section 
      ref={containerRef} 
      id="services-accordion" 
      className={`w-full py-16 sm:py-24 bg-[#F8FBFF] relative overflow-hidden ${isStandalonePage ? 'pt-8' : ''}`}
    >
      
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/3 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DCEAF3] text-[#07579D] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#078CCB]" />
            Full-Stack Solutions
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Engineered for <span className="brand-gradient-text">Compounded Growth</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            End-to-end digital transformation across technology, media buying, and viral brand creative.
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm max-w-2xl mx-auto">
            {SOLUTIONS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleTabChange(idx)}
                className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${activeTab === idx ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {item.number}
                </span>
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Solution Card — 100% visible, ZERO clipping */}
        <div 
          ref={cardContentRef}
          className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 lg:p-12 relative overflow-hidden transition-all duration-300"
        >
          {/* Top color border accent */}
          <div 
            className="absolute top-0 left-0 right-0 h-1.5" 
            style={{ backgroundColor: currentSolution.color }}
          />

          {/* Card Top Title Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <span 
                className="font-display font-black text-4xl sm:text-5xl opacity-20"
                style={{ color: currentSolution.color }}
              >
                {currentSolution.number}
              </span>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {currentSolution.title}
                </h3>
                <span 
                  className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest mt-1 px-2.5 py-0.5 rounded-full"
                  style={{ background: currentSolution.colorBg, color: currentSolution.color }}
                >
                  {currentSolution.tag}
                </span>
              </div>
            </div>

            {/* Next/Prev Navigation controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleTabChange((activeTab - 1 + SOLUTIONS.length) % SOLUTIONS.length)}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Previous solution"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleTabChange((activeTab + 1) % SOLUTIONS.length)}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Next solution"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card Body — 2 Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (5 cols): Descriptions & Partner Logos */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>{currentSolution.desc1}</p>
                {currentSolution.desc2 && <p>{currentSolution.desc2}</p>}
              </div>

              {/* Partners section */}
              <div className="pt-6 border-t border-slate-100">
                <p className="font-bold text-slate-800 text-xs sm:text-sm mb-3.5">
                  {currentSolution.partnersText}
                </p>
                
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-2.5">
                  {currentSolution.partners.map((p: any, i: number) => (
                    <div 
                      key={i} 
                      className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group/partner cursor-default"
                    >
                      <img 
                        src={p.logo || `https://www.google.com/s2/favicons?domain=${p.domain}&sz=128`} 
                        alt={p.name}
                        className="h-5 w-5 object-contain mb-1 group-hover/partner:scale-110 transition-transform duration-200"
                        onError={(e) => {
                          if (!e.currentTarget.src.includes('google.com/s2/favicons')) {
                            e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${p.domain}&sz=128`;
                          }
                        }}
                      />
                      <span className="text-slate-600 text-[9px] font-semibold tracking-wide text-center truncate w-full">
                        {p.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation callout */}
              <div 
                className="p-4 rounded-2xl border flex items-center justify-between gap-3"
                style={{ background: currentSolution.colorBg, borderColor: `${currentSolution.color}30` }}
              >
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Need custom execution?</div>
                  <div className="text-slate-600">Talk to our lead strategist.</div>
                </div>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-xl font-bold text-xs text-white shadow-md transition-all cursor-pointer whitespace-nowrap"
                  style={{ backgroundColor: currentSolution.color }}
                >
                  Book Strategy Call
                </button>
              </div>
            </div>

            {/* Right Column (7 cols): Interactive Accordion */}
            <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl border border-slate-200/70 p-4 sm:p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
                Included Capabilities ({currentSolution.services.length})
              </div>
              
              <div className="divide-y divide-slate-100">
                {currentSolution.services.map((svc, sIdx) => (
                  <AccordionItem 
                    key={sIdx}
                    svc={svc}
                    isOpen={openIndices[activeTab] === sIdx}
                    onClick={() => handleAccordionToggle(activeTab, sIdx)}
                    onOpenBooking={onOpenBooking}
                    color={currentSolution.color}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
