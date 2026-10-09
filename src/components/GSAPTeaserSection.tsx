import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Globe, Instagram, Trophy, ArrowRight } from 'lucide-react';
import { AppPage } from '../types';
import ScrollExpand from './ScrollExpand';
import BounceCards from './BounceCards';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  onNavigate: (page: AppPage) => void;
}

export const GSAPTeaserSection: React.FC<Props> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    const cards = gsap.utils.toArray('.gsap-teaser-card');
    
    gsap.fromTo(
      cards,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: containerRef });

  const data = [
    {
      title: "Web Ecosystems",
      desc: "Custom headless Shopify & Next.js portals with sub-second page speed. We design experiences that maximize your Average Order Value.",
      icon: Globe,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      link: "websites" as AppPage,
      badge: "LIVE ECOSYSTEMS",
      images: [
        'https://images.unsplash.com/photo-1547658719-da2b51169166?w=480&h=480&fit=crop',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=480&h=480&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&h=480&fit=crop'
      ]
    },
    {
      title: "Viral Social Lab",
      desc: "40+ high-retention direct-response video hooks generating 85M+ views. Our scripts and creatives are built to convert cold traffic into buyers.",
      icon: Instagram,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      link: "social-media" as AppPage,
      badge: "UGC & REELS",
      images: [
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=480&h=480&fit=crop',
        'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=480&h=480&fit=crop',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=480&h=480&fit=crop'
      ]
    },
    {
      title: "Digital Events",
      desc: "From national award ceremonies to 4K livestream commerce galas and founder summits generating millions in earned media.",
      icon: Trophy,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      link: "events-awards" as AppPage,
      badge: "AWARD SHOWS",
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=480&h=480&fit=crop',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=480&h=480&fit=crop',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=480&h=480&fit=crop'
      ]
    }
  ];

  return (
    <section ref={containerRef} className="w-full bg-[#111111] pt-16 pb-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {data.map((item, idx) => (
            <div key={idx} className="gsap-teaser-card bg-[#1a1a1a] border border-white/10 p-8 sm:p-10 rounded-[2rem] flex flex-col justify-between items-start hover:border-white/30 transition-colors shadow-2xl group cursor-pointer relative overflow-hidden" onClick={() => onNavigate(item.link)}>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>

              <div className="relative z-10 w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2a2a] text-xs font-bold text-slate-300 border border-white/10 mb-8 relative z-20">
                  {item.badge}
                </div>
                
                <div className="w-full h-32 relative flex justify-center items-center mb-6 pointer-events-none">
                   <div className="absolute inset-0 pointer-events-auto flex justify-center">
                     <BounceCards 
                       images={item.images} 
                       containerWidth={240}
                       containerHeight={160} 
                       cardSize={90}
                       spread={35}
                       rotation={20}
                       pushDistance={60}
                       hoverScale={1.15}
                       bounciness={0.7}
                       shadow={true}
                       borderWidth={3}
                       borderColor="#2a2a2a"
                     />
                   </div>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-4 relative z-20">{item.title}</h3>
                <p className="text-slate-400 mt-4 text-sm leading-relaxed relative z-20">{item.desc}</p>
              </div>
              
              <button onClick={(e) => { e.stopPropagation(); onNavigate(item.link); }} className="relative z-20 mt-10 flex items-center gap-2 text-white font-bold group-hover:text-blue-400 transition-colors bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full w-full justify-center border border-white/5">
                <span>Explore Details</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
