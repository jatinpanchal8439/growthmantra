import React, { useState } from 'react';
import { ClientWebsite } from '../types';
import { 
  X, 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  Tablet, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Code, 
  Sparkles,
  RefreshCw,
  Gauge
} from 'lucide-react';

interface WebsitePreviewModalProps {
  website: ClientWebsite | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const WebsitePreviewModal: React.FC<WebsitePreviewModalProps> = ({
  website,
  onClose,
  onOpenBooking
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'preview' | 'tech' | 'features'>('preview');

  if (!website) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-[#031A3D]/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl bg-white border border-[#DCEAF3] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Browser Bar */}
        <div className="bg-[#F5FAFD] px-4 py-3 border-b border-[#DCEAF3] flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            {/* Window Traffic Lights */}
            <div className="flex items-center gap-1.5">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            {/* URL Address Bar */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#DCEAF3] text-xs font-mono text-[#475569] min-w-[280px] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#078CCB]" />
              <span className="text-[#8295A8]">https://</span>
              <span className="text-[#07579D] font-semibold">{website.displayUrl}</span>
            </div>
          </div>

          {/* Viewport switcher */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#DCEAF3] shadow-sm">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                deviceMode === 'desktop' ? 'bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30' : 'text-[#8295A8] hover:text-[#031A3D]'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Desktop</span>
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                deviceMode === 'tablet' ? 'bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30' : 'text-[#8295A8] hover:text-[#031A3D]'
              }`}
              title="Tablet View"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Tablet</span>
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                deviceMode === 'mobile' ? 'bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30' : 'text-[#8295A8] hover:text-[#031A3D]'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Mobile</span>
            </button>
          </div>

          {/* Close & External */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white border border-[#DCEAF3] text-[#475569] hover:text-[#031A3D] hover:bg-[#EAF5FB] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6">
          
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#DCEAF3]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30 text-[10px] font-mono font-bold uppercase">
                  {website.categoryLabel}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#EAF5FB] text-[#078CCB] border border-[#078CCB]/30 text-[10px] font-mono font-bold">
                  {website.highlightBadge}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#031A3D]">
                {website.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-2xl">
                {website.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-bold text-xs shadow-lg shadow-[#078CCB]/25 flex items-center gap-2 cursor-pointer whitespace-nowrap transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Build Similar Website</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
              <div className="text-[10px] uppercase font-bold text-[#8295A8] flex items-center gap-1.5 mb-1">
                <TrendingUp className="w-3 h-3 text-[#078CCB]" />
                Conversion Rate
              </div>
              <div className="text-base sm:text-lg font-display font-bold text-[#031A3D]">
                {website.results.conversionRate}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
              <div className="text-[10px] uppercase font-bold text-[#8295A8] flex items-center gap-1.5 mb-1">
                <Gauge className="w-3 h-3 text-[#07579D]" />
                Lighthouse Score
              </div>
              <div className="text-base sm:text-lg font-display font-bold text-[#07579D]">
                {website.results.speedScore} / 100
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
              <div className="text-[10px] uppercase font-bold text-[#8295A8] flex items-center gap-1.5 mb-1">
                <Zap className="w-3 h-3 text-[#078CCB]" />
                Monthly Traffic
              </div>
              <div className="text-base sm:text-lg font-display font-bold text-[#031A3D]">
                {website.results.monthlyTraffic}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
              <div className="text-[10px] uppercase font-bold text-[#8295A8] flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-3 h-3 text-[#07579D]" />
                Revenue Scaled
              </div>
              <div className="text-base sm:text-lg font-display font-bold text-[#07579D]">
                {website.results.revenueScaled}
              </div>
            </div>
          </div>

          {/* Interactive Screen Frame */}
          <div className="flex justify-center bg-[#F5FAFD] rounded-2xl p-4 sm:p-6 border border-[#DCEAF3]">
            <div 
              className={`transition-all duration-300 rounded-xl overflow-hidden shadow-2xl border border-[#DCEAF3] bg-white relative ${
                deviceMode === 'desktop' 
                  ? 'w-full max-w-4xl' 
                  : deviceMode === 'tablet' 
                    ? 'w-[560px] max-w-full' 
                    : 'w-[320px]'
              }`}
            >
              {/* Device Header Accent */}
              <div className="bg-[#EAF5FB] px-3 py-1.5 flex items-center justify-between border-b border-[#DCEAF3] text-[10px] text-[#07579D] font-mono">
                <span>{website.name} • Live Preview</span>
                <span className="text-[#078CCB] font-bold">● SSL Active</span>
              </div>

              {/* Website Image Mockup */}
              <div className="relative group overflow-hidden">
                <img
                  src={deviceMode === 'mobile' && website.mobilePreviewImage ? website.mobilePreviewImage : website.previewImage}
                  alt={website.name}
                  className="w-full h-auto object-cover max-h-[450px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031A3D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-xs text-white">
                    <p className="font-bold">{website.name}</p>
                    <p className="text-slate-200 text-[11px]">{website.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Features Built */}
            <div className="p-5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#031A3D] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#078CCB]" />
                <span>Engineered Core Features</span>
              </h4>
              <ul className="space-y-2">
                {website.features.map((feat, i) => (
                  <li key={i} className="text-xs text-[#475569] flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#078CCB] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack & Architecture */}
            <div className="p-5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#031A3D] flex items-center gap-2">
                <Code className="w-4 h-4 text-[#078CCB]" />
                <span>Production Technology Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {website.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl bg-white border border-[#DCEAF3] text-xs font-medium text-[#07579D] shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[#DCEAF3] text-xs text-[#475569]">
                <strong className="text-[#031A3D]">Architecture Guarantee:</strong> Zero bloatware, sub-1.2s First Contentful Paint (FCP), fully decoupled CMS, and server-side tracking integrity.
              </div>
            </div>

          </div>

        </div>

        {/* Footer CTA Bar */}
        <div className="bg-[#F5FAFD] px-6 py-4 border-t border-[#DCEAF3] flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="text-xs text-[#475569]">
            Want a high-converting website architecture tailored for your business?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white border border-[#DCEAF3] text-[#475569] hover:bg-[#EAF5FB] text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={onOpenBooking}
              className="py-2 px-5 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-bold text-xs shadow-md cursor-pointer transition-all"
            >
              Book 1-on-1 Web Strategy Call
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
