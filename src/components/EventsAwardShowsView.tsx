import React, { useState } from 'react';
import { DIGITAL_EVENTS_AWARDS_DATA, EVENTS_AGENCY_CAPABILITIES } from '../data/eventsAwardData';
import { DigitalEventAward } from '../types';
import { 
  Award, 
  Trophy, 
  Sparkles, 
  Video, 
  Radio, 
  Users, 
  Newspaper, 
  Tv, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Flame, 
  Star, 
  Eye, 
  IndianRupee, 
  Megaphone,
  X
} from 'lucide-react';

interface EventsAwardShowsViewProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
}

export const EventsAwardShowsView: React.FC<EventsAwardShowsViewProps> = ({
  onOpenBooking,
  onOpenAudit
}) => {
  const [selectedEvent, setSelectedEvent] = useState<DigitalEventAward>(DIGITAL_EVENTS_AWARDS_DATA[0]);
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  return (
    <div className="py-12 sm:py-20 relative overflow-hidden bg-[#F5FAFD]">
      
      {/* Ambient Radiance */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#078CCB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[#09B5E5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FB] border border-[#078CCB]/30 text-[#07579D] text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-[#078CCB]" />
            Digital Events, Award Shows & Experiential Galas
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#031A3D] tracking-tight">
            Award Shows, Brand Summits & High-Impact Digital Productions
          </h1>
          <p className="text-base sm:text-lg text-[#475569]">
            From star-studded red carpets and 4K livestream commerce galas to national founder summits, we engineer experiential events that dominate news cycles and drive millions in earned media.
          </p>
        </div>

        {/* Aggregate Event & Production Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-3xl bg-white border border-[#DCEAF3] shadow-sm text-center space-y-1">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF5FB] border border-[#078CCB]/30 text-[#07579D] flex items-center justify-center mx-auto mb-2">
              <Tv className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#031A3D]">480,000+</div>
            <div className="text-xs text-[#8295A8]">Peak Live Stream Viewers</div>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-[#DCEAF3] shadow-sm text-center space-y-1">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF5FB] border border-[#078CCB]/30 text-[#078CCB] flex items-center justify-center mx-auto mb-2">
              <IndianRupee className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#07579D]">₹240+ Cr</div>
            <div className="text-xs text-[#8295A8]">Sponsor Media Value Generated</div>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-[#DCEAF3] shadow-sm text-center space-y-1">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF5FB] border border-[#078CCB]/30 text-[#07579D] flex items-center justify-center mx-auto mb-2">
              <Newspaper className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#031A3D]">280+</div>
            <div className="text-xs text-[#8295A8]">Tier-1 Press Articles (Forbes, Vogue)</div>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-[#DCEAF3] shadow-sm text-center space-y-1">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF5FB] border border-[#078CCB]/30 text-[#078CCB] flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#07579D]">18 Gilded</div>
            <div className="text-xs text-[#8295A8]">Custom Category Trophies Awarded</div>
          </div>
        </div>

        {/* Main Event Showcase Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {DIGITAL_EVENTS_AWARDS_DATA.map((event) => {
            const isSelected = selectedEvent.id === event.id;
            return (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`p-6 rounded-3xl text-left transition-all border flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#EAF5FB] border-[#078CCB] shadow-lg shadow-[#078CCB]/10 ring-1 ring-[#078CCB]'
                    : 'bg-white border-[#DCEAF3] hover:border-[#078CCB]/40 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#07579D] text-white text-[10px] font-mono font-bold uppercase">
                      {event.badgeText}
                    </span>
                    <span className="text-xs font-mono text-[#8295A8]">{event.year}</span>
                  </div>

                  <h3 className={`font-display text-lg font-bold mb-2 ${isSelected ? 'text-[#07579D]' : 'text-[#031A3D]'}`}>
                    {event.title}
                  </h3>

                  <p className="text-xs text-[#475569] line-clamp-2">
                    {event.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#DCEAF3] flex items-center justify-between text-xs text-[#8295A8]">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#078CCB]" />
                    <span>{event.location.split('&')[0]}</span>
                  </div>
                  <span className="text-[#07579D] font-bold">{event.stats.inPersonAttendees}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Event Immersive Deep-Dive */}
        {selectedEvent && (
          <div className="bg-white border border-[#DCEAF3] rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
            
            {/* Top Event Banner */}
            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 border border-[#DCEAF3]">
              <img
                src={selectedEvent.heroImage}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031A3D] via-[#031A3D]/70 to-transparent flex flex-col justify-end p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#078CCB] text-white font-bold text-xs">
                    {selectedEvent.categoryLabel}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-mono">
                    {selectedEvent.date}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#09B5E5]" />
                    {selectedEvent.venue}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                  {selectedEvent.title}
                </h2>
                <p className="text-slate-200 text-sm sm:text-base mt-1 max-w-3xl">
                  {selectedEvent.subtitle}
                </p>
              </div>
            </div>

            {/* Event Metrics Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
                <div className="text-[10px] uppercase font-bold text-[#8295A8]">In-Person VIPs</div>
                <div className="text-sm sm:text-base font-bold text-[#031A3D] mt-0.5">{selectedEvent.stats.inPersonAttendees}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
                <div className="text-[10px] uppercase font-bold text-[#8295A8]">4K Live Stream</div>
                <div className="text-sm sm:text-base font-bold text-[#07579D] mt-0.5">{selectedEvent.stats.liveStreamViewers}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
                <div className="text-[10px] uppercase font-bold text-[#8295A8]">Press Articles</div>
                <div className="text-sm sm:text-base font-bold text-[#031A3D] mt-0.5">{selectedEvent.stats.pressCoverages}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
                <div className="text-[10px] uppercase font-bold text-[#8295A8]">Social Reach</div>
                <div className="text-sm sm:text-base font-bold text-[#078CCB] mt-0.5">{selectedEvent.stats.socialImpressions}</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
                <div className="text-[10px] uppercase font-bold text-[#8295A8]">Sponsor Value</div>
                <div className="text-sm sm:text-base font-bold text-[#07579D] mt-0.5">{selectedEvent.stats.sponsorMediaValue}</div>
              </div>
            </div>

            {/* Scope of Production & Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Scope of Work */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-[#031A3D] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#078CCB]" />
                  <span>Groowth Mantra Production Scope</span>
                </h3>
                <div className="space-y-2.5">
                  {selectedEvent.scopeOfWork.map((scope, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569]">
                      <CheckCircle2 className="w-4 h-4 text-[#078CCB] flex-shrink-0 mt-0.5" />
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#DCEAF3]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8295A8] mb-2">
                    Event Sponsors & Media Partners
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.sponsorLogos.map((sp, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3] text-xs font-mono text-[#07579D]">
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Awards Presented / Trophy Winners or Key Highlights */}
              <div className="lg:col-span-6 space-y-4">
                {selectedEvent.awardsWonOrPresented ? (
                  <div className="p-5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] space-y-3">
                    <h3 className="font-display text-sm font-bold text-[#07579D] uppercase tracking-wider flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-[#078CCB]" />
                      <span>Featured Trophy Winners & Categories</span>
                    </h3>
                    <div className="space-y-2.5">
                      {selectedEvent.awardsWonOrPresented.map((award, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white border border-[#DCEAF3] flex items-center justify-between text-xs shadow-sm">
                          <div>
                            <div className="font-bold text-[#031A3D]">{award.category}</div>
                            <div className="text-[#07579D] text-[11px]">Winner: {award.winner}</div>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30 font-semibold">
                            {award.trophy}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] space-y-3">
                    <h3 className="font-display text-sm font-bold text-[#07579D] uppercase tracking-wider flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#078CCB]" />
                      <span>Key Activations & Milestones</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-[#475569]">
                      {selectedEvent.keyHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#078CCB] mt-1.5 flex-shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* VIP Celebrities & Keynotes */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8295A8]">
                    Featured VIP Hosts & Keynotes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedEvent.celebrityVIPs.map((vip, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3] flex items-center gap-3">
                        <img
                          src={vip.image}
                          alt={vip.name}
                          className="w-9 h-9 rounded-full object-cover border border-[#078CCB]"
                        />
                        <div className="text-xs truncate">
                          <div className="font-bold text-[#031A3D] truncate">{vip.name}</div>
                          <div className="text-[#8295A8] text-[10px] truncate">{vip.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Gallery Carousel / Grid */}
            <div className="space-y-3 pt-4 border-t border-[#DCEAF3]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8295A8]">
                Event Photo & Red Carpet Gallery
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedEvent.gallery.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveGalleryImage(img)}
                    className="relative rounded-xl overflow-hidden h-32 bg-[#F5FAFD] border border-[#DCEAF3] group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${i}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#031A3D]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white drop-shadow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Agency Event Production Capabilities */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-[#031A3D]">
              Complete Event & Experiential Marketing Stack
            </h3>
            <p className="text-xs sm:text-sm text-[#8295A8] mt-1">
              We handle every detail from venue scenography to digital ticketing and post-event viral PR distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EVENTS_AGENCY_CAPABILITIES.map((cap, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-[#DCEAF3] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30 flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <h4 className="font-display text-base font-bold text-[#031A3D]">
                  {cap.title}
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#031A3D] via-[#07579D] to-[#031A3D] border border-[#078CCB]/30 text-center space-y-4 shadow-xl">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            Planning an Award Show, Brand Launch, or Digital Summit?
          </h3>
          <p className="text-slate-200 text-sm max-w-2xl mx-auto">
            Partner with Groowth Mantra for end-to-end production, celebrity influencer talent acquisition, broadcast streaming, and guaranteed press placement.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-bold text-sm shadow-xl shadow-[#078CCB]/25 inline-flex items-center gap-2 cursor-pointer transition-all"
            >
              <Trophy className="w-4 h-4 text-white" />
              <span>Inquire About Event Production</span>
            </button>
          </div>
        </div>

      </div>

      {/* Gallery Lightbox Modal */}
      {activeGalleryImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#031A3D]/80 backdrop-blur-xl animate-fade-in"
          onClick={() => setActiveGalleryImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-[#DCEAF3] shadow-2xl bg-white">
            <img src={activeGalleryImage} alt="Enlarged gallery photo" className="w-full h-auto object-contain" />
            <button
              onClick={() => setActiveGalleryImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#031A3D]/80 text-white hover:bg-[#031A3D] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
