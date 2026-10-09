import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  ChevronDown, ArrowRight, Code, Sparkles, Layers, Search, Database, 
  ShoppingCart, Mail, MessageSquare, BadgeDollarSign, Target, 
  TrendingUp, Activity, Instagram, PenTool, Palette, Video, Camera, Calendar 
} from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

gsap.registerPlugin(ScrollTrigger);

const SOLUTIONS = [
  {
    id: "tech",
    title: "Technology Solutions",
    desc1: "Our Digital Transformation Team uses bleeding-edge technology to enable you to nurture customer relationships at every stage. We create integrated digital ecosystems covering web, social & paid media, CRM, ERP, search, e-commerce and other channels.",
    desc2: "Our custom-made platforms and solutions help you attract, retain and engage every prospect with a personalized touch.",
    partnersText: "Proudly innovating with leading technology leaders in the market...",
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
    title: "Media Solutions",
    desc1: "Our Media Sciences department specializes in implementing and managing paid marketing strategies to increase your brand awareness, market share and business revenue.",
    desc2: "",
    partnersText: "Proud to be collaborating with media industry leaders to power growth for brands!",
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
    title: "Brand Solutions",
    desc1: "Our Strategists, Designers, Video Editors and Animators provide you with holistic solutions to grow your digital presence and achieve your business goals through both day-to-day content and integrated flagship campaigns.",
    desc2: "",
    partnersText: "Proud to work with the biggest brands in India & Abroad",
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

const AccordionItem: React.FC<{ svc: any, isOpen: boolean, onClick: () => void, onOpenBooking?: () => void }> = ({ svc, isOpen, onClick, onOpenBooking }) => {
  const Icon = svc.icon;
  return (
    <div className="border-b border-slate-100">
      <button 
        onClick={onClick}
        className="w-full py-2.5 sm:py-3 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
      >
        <div className="flex items-center gap-3">
          {Icon && (
            <div className={`p-1.5 rounded-lg transition-all duration-300 ${isOpen ? 'bg-[#3B82F6] text-white shadow-md shadow-blue-500/20' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600'}`}>
              <Icon className="w-4 h-4" />
            </div>
          )}
          <span className={`text-sm sm:text-base font-extrabold transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'}`}>
            {svc.name}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-3' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl">{svc.content}</p>
        <button onClick={onOpenBooking} className="mt-3 flex items-center gap-2 text-[#3B82F6] font-bold text-xs hover:text-blue-500 transition-colors group/btn cursor-pointer">
          <span>Learn more</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export const SolutionsAccordionSection = ({ onOpenBooking, onOpenAudit, isStandalonePage }: { onOpenBooking?: () => void, onOpenAudit?: () => void, isStandalonePage?: boolean }) => {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.solution-horizontal-card');
    
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        start: "center center",
        end: () => "+=" + scrollWrapperRef.current?.offsetWidth,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-[100dvh] flex flex-col justify-center relative overflow-hidden pt-16 sm:pt-24 pb-8 sm:pb-12 bg-white">
      
      {/* Section Header */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 mb-6 shrink-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Solutions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-md md:text-right">
            End-to-end digital transformation across technology, media, and brand.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div ref={scrollWrapperRef} className="flex flex-1 min-h-0 items-center" style={{ width: `${SOLUTIONS.length * 100}vw` }}>
        {SOLUTIONS.map((solution, idx) => {
          const [openIndex, setOpenIndex] = useState<number | null>(0);
          
          return (
            <div 
              key={idx} 
              className="solution-horizontal-card w-screen px-4 md:px-8 lg:px-12 flex items-center justify-center h-full max-h-[800px]"
            >
              <div className="solution-inner rounded-[30px] shadow-xl w-full h-full max-w-7xl mx-auto border border-slate-200 bg-white overflow-hidden flex flex-col">
                
                <div className="p-4 sm:p-6 lg:p-8 flex-1 overflow-hidden flex flex-col">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100 shrink-0">
                    <div className="flex items-center gap-4">
                      <span className="font-display font-black text-4xl sm:text-5xl text-slate-100">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                          {solution.title}
                        </h2>
                        <p className="text-slate-500 text-[10px] sm:text-xs font-mono mt-1 uppercase tracking-widest">
                          {solution.id} ecosystem
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body - 2 Column */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start flex-1 overflow-hidden">
                    
                    {/* Left Column: Descriptions and Logos */}
                    <div className="space-y-3 shrink-0">
                      <p className="text-slate-500 text-sm leading-relaxed">{solution.desc1}</p>
                      {solution.desc2 && <p className="text-slate-500 text-sm leading-relaxed">{solution.desc2}</p>}
                      
                      <div className="pt-4 border-t border-slate-100 mt-4">
                        <p className="font-bold text-slate-700 mb-3 text-xs sm:text-sm">{solution.partnersText}</p>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {solution.partners.map((p: any, i: number) => (
                            <div key={i} className="flex flex-col items-center justify-center w-[50px] h-[50px] sm:w-[60px] h-[60px] rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group/logo cursor-default">
                              <img 
                                src={p.logo || `https://www.google.com/s2/favicons?domain=${p.domain}&sz=128`} 
                                alt={p.name}
                                className="h-4 w-4 sm:h-5 sm:w-5 object-contain mb-1 group-hover/logo:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  if (!e.currentTarget.src.includes('google.com/s2/favicons')) {
                                    e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${p.domain}&sz=128`;
                                  }
                                }}
                              />
                              <span className="text-slate-500 text-[7px] sm:text-[8px] font-semibold tracking-wide text-center px-1 leading-tight">
                                {p.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Interactive Accordion */}
                    <div className="border-t border-slate-100 lg:border-t-0">
                      {solution.services.map((svc, sIdx) => (
                        <AccordionItem 
                          key={sIdx}
                          svc={svc}
                          isOpen={openIndex === sIdx}
                          onClick={() => setOpenIndex(openIndex === sIdx ? null : sIdx)}
                          onOpenBooking={onOpenBooking}
                        />
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
