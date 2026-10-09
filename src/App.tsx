import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClientDossierShowcase } from './components/ClientDossierShowcase';
import { SolutionsAccordionSection } from './components/SolutionsAccordionSection';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { RoiCalculator } from './components/RoiCalculator';
import { ClientPortalPreview } from './components/ClientPortalPreview';
import { GrowthBlueprintFramework } from './components/GrowthBlueprintFramework';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { InteractiveAuditModal } from './components/InteractiveAuditModal';
import { BookingModal } from './components/BookingModal';
import { WebsitesShowcaseView } from './components/WebsitesShowcaseView';
import { SocialMediaInstagramHub } from './components/SocialMediaInstagramHub';
import { EventsAwardShowsView } from './components/EventsAwardShowsView';
import { GSAPTeaserSection } from './components/GSAPTeaserSection';
import { AppPage } from './types';
import { 
  PhoneCall, 
  Sparkles, 
  Globe, 
  Instagram, 
  Trophy, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  ShieldCheck,
  ChevronRight,
  Home
} from 'lucide-react';
import { CLIENT_WEBSITES_DATA } from './data/websitesData';
import { SOCIAL_MEDIA_POSTS } from './data/socialMediaData';
import { DIGITAL_EVENTS_AWARDS_DATA } from './data/eventsAwardData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('overview');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isClientPortalModalOpen, setIsClientPortalModalOpen] = useState(false);
  const [selectedClientIdForDossier, setSelectedClientIdForDossier] = useState<string | null>(null);

  const [auditInitialData, setAuditInitialData] = useState<{
    url?: string;
    spend?: number;
    revenue?: number;
  }>({});

  const handleNavigate = (page: AppPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAuditWithUrl = (url: string) => {
    setAuditInitialData({ url });
    setIsAuditModalOpen(true);
  };

  const handleOpenAuditWithData = (spend: number, revenue: number) => {
    setAuditInitialData({ spend, revenue });
    setIsAuditModalOpen(true);
  };

  const handleOpenClientDetails = (clientId: string) => {
    setSelectedClientIdForDossier(clientId);
    setCurrentPage('case-studies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5FAFD] text-[#475569] font-sans selection:bg-[#078CCB] selection:text-white overflow-x-hidden relative">
      
      {/* Navigation Header with Page Indicator */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAudit={() => {
          setAuditInitialData({});
          setIsAuditModalOpen(true);
        }}
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onOpenClientPortal={() => handleNavigate('command-center')}
      />

      {/* Main Page Content */}
      <main className="transition-all duration-300">
        
        {/* Page 1: OVERVIEW (Home Growth Engine) */}
        {currentPage === 'overview' && (
          <div className="space-y-0 animate-fade-in">
            {/* 1. Hero */}
            <Hero
              onOpenAuditWithUrl={handleOpenAuditWithUrl}
              onOpenBooking={() => setIsBookingModalOpen(true)}
              onOpenClientDetails={handleOpenClientDetails}
              onNavigate={handleNavigate}
            />

            {/* Unified GSAP Full-Screen Animated Teaser Section (Replaces the 3 old sections) */}
            <GSAPTeaserSection onNavigate={handleNavigate} />

            {/* Client Dossiers Showcase was here (removed per request) */}

            {/* 6. Solutions Accordion Framework (Replaces old Services) */}
            <div id="services">
              <SolutionsAccordionSection
                onOpenBooking={() => setIsBookingModalOpen(true)}
                onOpenAudit={() => {
                  setAuditInitialData({});
                  setIsAuditModalOpen(true);
                }}
              />
            </div>

            {/* 7. Transparent Pricing Plans */}
            <div id="pricing-section">
              <PricingSection
                onOpenBooking={() => setIsBookingModalOpen(true)}
                onOpenAudit={() => {
                  setAuditInitialData({});
                  setIsAuditModalOpen(true);
                }}
              />
            </div>

            {/* 9. 90-Day Growth Blueprint Framework (Removed per request) */}

            {/* 10. Verified Client Testimonials */}
            <div id="testimonials">
              <TestimonialsSection
                onOpenBooking={() => setIsBookingModalOpen(true)}
              />
            </div>

            {/* 11. Full Contact & Map Section */}
            <div id="contact-home">
              <ContactSection
                onOpenBooking={() => setIsBookingModalOpen(true)}
              />
            </div>

            {/* 12. FAQ Section */}
            <FaqSection
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
          </div>
        )}

        {/* Page 2: ABOUT US */}
        {currentPage === 'about' && (
          <div className="animate-fade-in pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
              <div className="flex items-center gap-2 text-xs text-[#8295A8]">
                <button onClick={() => handleNavigate('overview')} className="hover:text-[#07579D] flex items-center gap-1 cursor-pointer">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3 h-3 text-[#8295A8]" />
                <span className="text-[#07579D] font-semibold">About Groowth Mantra</span>
              </div>
            </div>

            <AboutSection
              onOpenBooking={() => setIsBookingModalOpen(true)}
              isStandalonePage={true}
            />

            <GrowthBlueprintFramework
              onOpenBooking={() => setIsBookingModalOpen(true)}
              onOpenAudit={() => {
                setAuditInitialData({});
                setIsAuditModalOpen(true);
              }}
            />

            <ContactSection
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
          </div>
        )}

        {/* Page 3: SERVICES */}
        {currentPage === 'services' && (
          <div className="animate-fade-in pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
              <div className="flex items-center gap-2 text-xs text-[#8295A8]">
                <button onClick={() => handleNavigate('overview')} className="hover:text-[#07579D] flex items-center gap-1 cursor-pointer">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3 h-3 text-[#8295A8]" />
                <span className="text-[#07579D] font-semibold">Our 12 Full-Stack Services</span>
              </div>
            </div>

            <SolutionsAccordionSection
              onOpenBooking={() => setIsBookingModalOpen(true)}
              onOpenAudit={() => {
                setAuditInitialData({});
                setIsAuditModalOpen(true);
              }}
              isStandalonePage={true}
            />

            <PricingSection
              onOpenBooking={() => setIsBookingModalOpen(true)}
              onOpenAudit={() => {
                setAuditInitialData({});
                setIsAuditModalOpen(true);
              }}
            />

            <ContactSection
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
          </div>
        )}

        {/* Page 4: WEBSITES WE WORK WITH */}
        {currentPage === 'websites' && (
          <div className="animate-fade-in pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
              <div className="flex items-center gap-2 text-xs text-[#8295A8]">
                <button onClick={() => handleNavigate('overview')} className="hover:text-[#07579D] flex items-center gap-1 cursor-pointer">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3 h-3 text-[#8295A8]" />
                <span className="text-[#07579D] font-semibold">Websites We Work With</span>
              </div>
            </div>

            <WebsitesShowcaseView
              onOpenBooking={() => setIsBookingModalOpen(true)}
              onOpenAudit={() => {
                setAuditInitialData({});
                setIsAuditModalOpen(true);
              }}
            />
          </div>
        )}

        {/* Page 5: SOCIAL MEDIA & INSTAGRAM LAB */}
        {currentPage === 'social-media' && (
          <div className="animate-fade-in pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
              <div className="flex items-center gap-2 text-xs text-[#8295A8]">
                <button onClick={() => handleNavigate('overview')} className="hover:text-[#07579D] flex items-center gap-1 cursor-pointer">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3 h-3 text-[#8295A8]" />
                <span className="text-[#07579D] font-semibold">Social Media, Instagram & Viral Promotion Lab</span>
              </div>
            </div>

            <SocialMediaInstagramHub
              onOpenBooking={() => setIsBookingModalOpen(true)}
              onOpenAudit={() => {
                setAuditInitialData({});
                setIsAuditModalOpen(true);
              }}
            />
          </div>
        )}

        {/* Page 6: DIGITAL EVENTS & AWARD SHOWS */}
        {currentPage === 'events-awards' && (
          <div className="animate-fade-in pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
              <div className="flex items-center gap-2 text-xs text-[#8295A8]">
                <button onClick={() => handleNavigate('overview')} className="hover:text-[#07579D] flex items-center gap-1 cursor-pointer">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3 h-3 text-[#8295A8]" />
                <span className="text-[#07579D] font-semibold">Digital Events & Award Shows</span>
              </div>
            </div>

            <EventsAwardShowsView
              onOpenBooking={() => setIsBookingModalOpen(true)}
              onOpenAudit={() => {
                setAuditInitialData({});
                setIsAuditModalOpen(true);
              }}
            />
          </div>
        )}

        {/* Page 7: CASE STUDIES */}
        {currentPage === 'case-studies' && (
          <div className="animate-fade-in pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
              <div className="flex items-center gap-2 text-xs text-[#8295A8]">
                <button onClick={() => handleNavigate('overview')} className="hover:text-[#07579D] flex items-center gap-1 cursor-pointer">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3 h-3 text-[#8295A8]" />
                <span className="text-[#07579D] font-semibold">Client Dossiers & Unit Economics</span>
              </div>
            </div>

            <ClientDossierShowcase
              selectedClientId={selectedClientIdForDossier}
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
          </div>
        )}

        {/* Page 8: PRICING (INR ₹) */}
        {currentPage === 'pricing' && (
          <div className="animate-fade-in pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
              <div className="flex items-center gap-2 text-xs text-[#8295A8]">
                <button onClick={() => handleNavigate('overview')} className="hover:text-[#07579D] flex items-center gap-1 cursor-pointer">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3 h-3 text-[#8295A8]" />
                <span className="text-[#07579D] font-semibold">Pricing & Growth Packages (INR ₹)</span>
              </div>
            </div>

            <PricingSection
              onOpenBooking={() => setIsBookingModalOpen(true)}
              onOpenAudit={() => {
                setAuditInitialData({});
                setIsAuditModalOpen(true);
              }}
              isStandalonePage={true}
            />

            <ContactSection
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
          </div>
        )}

        {/* Page 9: CONTACT & OFFICE LOCATION */}
        {currentPage === 'contact' && (
          <div className="animate-fade-in pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
              <div className="flex items-center gap-2 text-xs text-[#8295A8]">
                <button onClick={() => handleNavigate('overview')} className="hover:text-[#07579D] flex items-center gap-1 cursor-pointer">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3 h-3 text-[#8295A8]" />
                <span className="text-[#07579D] font-semibold">Contact & Office Locations</span>
              </div>
            </div>

            <ContactSection
              onOpenBooking={() => setIsBookingModalOpen(true)}
              isStandalonePage={true}
            />
          </div>
        )}


        {/* Page 11: CLIENT COMMAND CENTER PORTAL */}
        {currentPage === 'command-center' && (
          <div className="animate-fade-in pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
              <div className="flex items-center gap-2 text-xs text-[#8295A8]">
                <button onClick={() => handleNavigate('overview')} className="hover:text-[#07579D] flex items-center gap-1 cursor-pointer">
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3 h-3 text-[#8295A8]" />
                <span className="text-[#07579D] font-semibold">Client Command Center</span>
              </div>
            </div>

            <ClientPortalPreview
              onOpenBooking={() => setIsBookingModalOpen(true)}
            />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onOpenAudit={() => {
          setAuditInitialData({});
          setIsAuditModalOpen(true);
        }}
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <InteractiveAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        initialUrl={auditInitialData.url}
        initialSpend={auditInitialData.spend}
        initialRevenue={auditInitialData.revenue}
        onOpenBooking={() => {
          setIsAuditModalOpen(false);
          setIsBookingModalOpen(true);
        }}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {isClientPortalModalOpen && (
        <ClientPortalPreview
          isOpenModal={true}
          onCloseModal={() => setIsClientPortalModalOpen(false)}
          onOpenBooking={() => {
            setIsClientPortalModalOpen(false);
            setIsBookingModalOpen(true);
          }}
        />
      )}

    </div>
  );
}
