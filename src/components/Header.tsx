import React, { useState, useEffect, useRef } from 'react';
import { GroowthLogo } from './GroowthLogo';
import GooeyNav from './GooeyNav';
import { 
  PhoneCall, 
  Sparkles, 
  Menu, 
  X, 
  TrendingUp, 
  Activity,
  Instagram,
  Trophy,
  ChevronRight,
  MessageSquare,
  Phone,
  Home,
  Layers,
  Globe,
  DollarSign,
  Calculator,
  Mail,
  UserCheck,
  Award
} from 'lucide-react';
import { AGENCY_STATS } from '../data/clients';
import { AppPage } from '../types';

interface HeaderProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
  onOpenAudit: () => void;
  onOpenBooking: () => void;
  onOpenClientPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenAudit,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 15);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true); // Hide on scroll down
      } else {
        setIsHidden(false); // Show on scroll up
      }
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Clean menu items for optimal space and zero overflow
  const navTabs: { 
    id: AppPage; 
    name: string; 
    icon: React.ComponentType<{ className?: string }>;
    badge?: string; 
  }[] = [
    { id: 'overview', name: 'Overview', icon: Home },
    { id: 'about', name: 'About', icon: UserCheck },
    { id: 'services', name: 'Services', icon: Layers },
    { id: 'websites', name: 'Websites', icon: Globe, badge: 'Live' },
    { id: 'case-studies', name: 'Case Studies', icon: TrendingUp },
    { id: 'pricing', name: 'Pricing', icon: DollarSign },
    { id: 'social-media', name: 'Social Lab', icon: Instagram, badge: 'Viral' },
    { id: 'events-awards', name: 'Events & Awards', icon: Award, badge: 'New' },

    { id: 'contact', name: 'Contact', icon: Mail },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 w-full select-none transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
        
        {/* 1. Top Real-Time Performance Ticker */}
        <div className="bg-[#031A3D] border-b border-[#07579D]/30 text-xs py-1.5 px-3 sm:px-6 backdrop-blur-md overflow-hidden relative z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2 text-[#09B5E5] font-medium whitespace-nowrap text-[11px] sm:text-xs">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#09B5E5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#09B5E5]"></span>
              </span>
              <span className="truncate text-white">
                GROWTH AGENCY: <strong className="text-[#09B5E5]">₹150+ Cr Client Revenue</strong>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-4 text-slate-300 text-[11px] whitespace-nowrap flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#09B5E5]" />
                <span>Avg ROAS: <strong className="text-white">{AGENCY_STATS.averageRoas}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-[#078CCB]" />
                <span>Viral Views: <strong className="text-white">85M+</strong></span>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href="https://wa.me/918505866668?text=Hello%20Groowth%20Mantra%2C%20I%20want%20to%20consult%20on%20my%20business%20growth."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#25D366] hover:text-white transition-colors whitespace-nowrap bg-[#25D366]/20 hover:bg-[#25D366]/40 border border-[#25D366]/40 px-2.5 py-0.5 rounded-full cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="hidden xs:inline">WhatsApp Direct</span>
                <span className="xs:hidden">WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate('command-center')}
                className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#09B5E5] hover:text-white transition-colors whitespace-nowrap bg-[#07579D]/40 hover:bg-[#07579D]/70 border border-[#078CCB]/40 px-2 py-0.5 rounded-full cursor-pointer"
              >
                <Activity className="w-3 h-3 animate-pulse text-[#09B5E5]" />
                <span>Portal</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Rebound Style Dark Pill Nav */}
        <div className={`w-full flex justify-center transition-all duration-300 ${isScrolled ? 'mt-2' : 'mt-4'} px-2 sm:px-4`}>
          <nav className="w-full max-w-7xl bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center justify-between shadow-2xl relative z-40">
            
            {/* Logo */}
            <button 
              onClick={() => {
                onNavigate('overview');
                setMobileMenuOpen(false);
              }}
              className="flex items-center pl-2 pr-2 sm:pl-4 focus:outline-none cursor-pointer flex-shrink-0"
              aria-label="Groowth Mantra Home"
            >
              <GroowthLogo size="md" isLightMode={false} />
            </button>

            {/* Desktop Navigation Links (Scrolling Pill) */}
            <div className="hidden lg:flex items-center mx-2 flex-shrink overflow-x-auto scrollbar-none max-w-3xl">
              <div className="bg-[#1A1A1A] rounded-full border border-white/5 p-1 flex items-center h-[42px] overflow-hidden">
                <GooeyNav
                  items={navTabs.map(tab => ({
                    label: tab.name,
                    href: tab.id,
                    onClick: (e) => {
                      e.preventDefault();
                      onNavigate(tab.id);
                    }
                  }))}
                  activeIndex={navTabs.findIndex(tab => tab.id === currentPage) === -1 ? 0 : navTabs.findIndex(tab => tab.id === currentPage)}
                  colors={[1, 2, 3]} 
                />
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0 pr-1 sm:pr-2">


              <button
                onClick={onOpenBooking}
                className="hidden md:flex px-4 py-2 text-xs font-bold text-[#031A3D] bg-white hover:bg-gray-100 rounded-full shadow-md transition-all items-center gap-1.5 cursor-pointer transform active:scale-95 whitespace-nowrap flex-shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5 flex-shrink-0 text-[#078CCB]" />
                <span>Get Consultation</span>
              </button>

              {/* Mobile Menu Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="lg:hidden px-3 py-2 text-white focus:outline-none rounded-full bg-[#1A1A1A] border border-white/10 hover:bg-[#2A2A2A] transition-all flex items-center justify-center gap-1.5 cursor-pointer flex-shrink-0"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <>
                    <Menu className="w-5 h-5 text-white" />
                    <span className="text-xs font-bold text-white hidden xs:inline">Menu</span>
                  </>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* 3. Mobile / Tablet Full Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[100] lg:hidden bg-[#031A3D]/70 backdrop-blur-sm animate-fade-in flex justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            ref={menuRef}
            className="w-full max-w-xs sm:max-w-sm bg-white border-l border-[#DCEAF3] shadow-2xl h-full h-dvh flex flex-col overflow-hidden animate-slide-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-4 border-b border-[#DCEAF3] flex items-center justify-between bg-[#F5FAFD]">
              <div 
                onClick={() => {
                  onNavigate('overview');
                  setMobileMenuOpen(false);
                }}
                className="cursor-pointer"
              >
                <GroowthLogo size="sm" isLightMode={true} />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#031A3D] hover:text-[#07579D] rounded-xl bg-white border border-[#DCEAF3] hover:bg-[#EAF5FB] transition-colors cursor-pointer shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Audit Banner */}
            <div className="p-3 bg-gradient-to-r from-[#031A3D] to-[#07579D] text-white mx-3 mt-3 rounded-xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#09B5E5]/20 border border-[#09B5E5]/40 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-[#09B5E5]" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">Free Growth Audit</div>
                  <div className="text-[10px] text-slate-300">Revenue & funnel analysis</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="px-2.5 py-1 rounded-lg bg-[#09B5E5] text-[#031A3D] text-[11px] font-extrabold hover:bg-white transition-colors cursor-pointer flex-shrink-0"
              >
                Run
              </button>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-3 space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#8295A8] px-2 py-1">
                Explore Sections
              </div>

              <div className="space-y-1">
                {navTabs.map((tab) => {
                  const isActive = currentPage === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        onNavigate(tab.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/40 shadow-xs font-bold'
                          : 'text-[#475569] bg-[#F5FAFD]/60 border border-transparent hover:border-[#DCEAF3] hover:bg-[#F5FAFD] hover:text-[#031A3D]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#07579D] text-white' : 'bg-[#EAF5FB] text-[#078CCB]'}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{tab.name}</span>
                        {tab.badge && (
                          <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-bold ${
                            isActive ? 'bg-[#07579D] text-white' : 'bg-[#EAF5FB] text-[#078CCB] border border-[#078CCB]/30'
                          }`}>
                            {tab.badge}
                          </span>
                        )}
                      </div>
                      <ChevronRight className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#07579D]' : 'text-[#8295A8]'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Quick Contact Box */}
              <div className="pt-3 mt-3 border-t border-[#DCEAF3] space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#8295A8] px-2">
                  Direct Support
                </div>
                <a
                  href="https://wa.me/918505866668?text=Hello%20Groowth%20Mantra%2C%20I%20am%20interested%20in%20scaling%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp: +91 85058 66668</span>
                </a>
                <a
                  href="tel:+918505866668"
                  className="w-full p-2.5 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3] hover:border-[#078CCB]/40 text-[#07579D] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#078CCB]" />
                  <span>Call: +91 85058 66668</span>
                </a>
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-3.5 border-t border-[#DCEAF3] bg-[#F5FAFD] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md shadow-[#078CCB]/25 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Get Free Consultation</span>
              </button>
              <div className="text-center pt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('privacy-policy');
                  }}
                  className="text-[11px] text-[#8295A8] hover:text-[#07579D] transition-colors cursor-pointer"
                >
                  Privacy Policy & DPDP Compliance
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
