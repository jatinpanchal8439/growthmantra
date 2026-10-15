import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategoryConsultationBannerProps {
  onOpenBooking: () => void;
}

export const CategoryConsultationBanner: React.FC<CategoryConsultationBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="w-full py-20 sm:py-28 bg-[#F8FBFF] border-y border-[#DCEAF3] relative overflow-hidden text-center">
      
      {/* Groowth Mantra signature ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#078CCB]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[250px] bg-[#09B5E5]/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Overline with side dividers */}
        <div className="flex items-center justify-center gap-4 mb-6 max-w-xl mx-auto">
          <div className="h-px bg-[#DCEAF3] flex-1 hidden sm:block" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#07579D] uppercase font-mono">
            NOT SURE WHICH CATEGORY IS RIGHT FOR YOUR IDEA?
          </span>
          <div className="h-px bg-[#DCEAF3] flex-1 hidden sm:block" />
        </div>

        {/* Main headline with Groowth Mantra brand gradient */}
        <h2 className="font-display font-black text-[#031A3D] text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-6">
          Let's talk before <br />
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5]">
              you invest.
            </span>
            {/* 3-stroke energy burst mark in electric brand cyan */}
            <svg
              className="absolute -top-2.5 -right-6 sm:-right-8 w-6 h-6 text-[#09B5E5]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
            >
              <line x1="12" y1="2" x2="12" y2="8" />
              <line x1="5.5" y1="6.5" x2="9.5" y2="10.5" />
              <line x1="18.5" y1="6.5" x2="14.5" y2="10.5" />
            </svg>
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#475569] text-sm sm:text-base max-w-lg mx-auto mb-9 leading-relaxed">
          Not sure which category is right for your idea? Let's talk before you invest.
        </p>

        {/* CTA Button in Groowth Mantra signature gradient */}
        <button
          onClick={onOpenBooking}
          className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-bold text-sm sm:text-base shadow-xl shadow-[#078CCB]/25 hover:shadow-2xl hover:shadow-[#078CCB]/35 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
        >
          <span>Let's Talk About Your Category</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </section>
  );
};
