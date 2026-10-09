import React, { useState, useMemo } from 'react';
import { CLIENT_WEBSITES_DATA } from '../data/websitesData';
import { ClientWebsite } from '../types';
import { 
  Globe, 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  Gauge, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  ExternalLink,
  Code2,
  CheckCircle2,
  SlidersHorizontal,
  LayoutGrid,
  Filter
} from 'lucide-react';
import { WebsitePreviewModal } from './WebsitePreviewModal';

interface WebsitesShowcaseViewProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
}

export const WebsitesShowcaseView: React.FC<WebsitesShowcaseViewProps> = ({
  onOpenBooking,
  onOpenAudit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePreviewWebsite, setActivePreviewWebsite] = useState<ClientWebsite | null>(null);

  const categories = [
    { id: 'all', label: 'All Client Websites' },
    { id: 'ecommerce', label: 'D2C E-Commerce Stores' },
    { id: 'saas', label: 'B2B SaaS Portals' },
    { id: 'fashion', label: 'Fashion & Luxury Brands' },
    { id: 'fintech', label: 'FinTech Apps' },
    { id: 'edtech', label: 'EdTech Academies' },
  ];

  const filteredWebsites = useMemo(() => {
    return CLIENT_WEBSITES_DATA.filter((site) => {
      const matchesCategory = selectedCategory === 'all' || site.category === selectedCategory;
      const matchesSearch = 
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-20 relative overflow-hidden bg-[#F5FAFD]">
      
      {/* Background Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#078CCB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#09B5E5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FB] border border-[#078CCB]/30 text-[#07579D] text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Globe className="w-3.5 h-3.5 text-[#078CCB]" />
            Live Client Websites & Digital Ecosystems
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#031A3D] tracking-tight">
            Websites We Engineer, Design & Scale
          </h1>
          <p className="text-base sm:text-lg text-[#475569]">
            Explore the high-converting storefronts, enterprise SaaS portals, and luxury editorial web experiences built and managed by Groowth Mantra.
          </p>

          {/* Quick Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-[#475569]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#078CCB] animate-pulse" />
              <strong className="text-[#031A3D]">98.4/100</strong> Avg Speed Score
            </div>
            <div className="text-[#DCEAF3]">•</div>
            <div>
              <strong className="text-[#031A3D]">+145%</strong> Avg CVR Lift
            </div>
            <div className="text-[#DCEAF3]">•</div>
            <div>
              <strong className="text-[#031A3D]">100%</strong> Server-Side CAPI Ready
            </div>
          </div>
        </div>

        {/* Controls: Search & Category Filter */}
        <div className="bg-white border border-[#DCEAF3] rounded-3xl p-4 sm:p-6 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#8295A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search websites by name, tech (e.g., Shopify, Next.js), industry..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-2xl text-[#031A3D] placeholder-[#8295A8] text-xs sm:text-sm focus:outline-none focus:border-[#078CCB] focus:bg-white transition-colors"
              />
            </div>

            {/* Results count & CTA */}
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <span className="text-xs text-[#8295A8] font-mono">
                Showing <strong className="text-[#07579D]">{filteredWebsites.length}</strong> live client web builds
              </span>
              <button
                onClick={onOpenBooking}
                className="hidden sm:flex py-2 px-4 rounded-xl bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30 text-xs font-semibold hover:bg-[#DCEAF3] transition-colors cursor-pointer"
              >
                Request Custom Web Audit
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] text-white font-bold shadow-md shadow-[#078CCB]/20'
                    : 'bg-[#F5FAFD] text-[#475569] border border-[#DCEAF3] hover:border-[#078CCB]/50 hover:text-[#031A3D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Websites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredWebsites.map((site) => (
            <div
              key={site.id}
              className="group bg-white border border-[#DCEAF3] hover:border-[#078CCB] rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl"
            >
              <div>
                {/* Visual Thumbnail / Device Mock Frame */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#F5FAFD] border-b border-[#DCEAF3]">
                  <img
                    src={site.previewImage}
                    alt={site.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category & Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#031A3D]/90 backdrop-blur-md text-white border border-white/20 text-[10px] font-mono font-bold uppercase">
                      {site.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#EAF5FB]/90 backdrop-blur-md text-[#07579D] border border-[#078CCB]/30 text-[10px] font-mono font-bold">
                      {site.highlightBadge}
                    </span>
                  </div>

                  {/* Quick Inspect Button Overlay */}
                  <div className="absolute inset-0 bg-[#031A3D]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                    <button
                      onClick={() => setActivePreviewWebsite(site)}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] text-white text-xs font-bold shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform cursor-pointer hover:brightness-110"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                      <span>Inspect Live Build</span>
                    </button>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display text-xl font-bold text-[#031A3D] group-hover:text-[#078CCB] transition-colors">
                        {site.name}
                      </h3>
                      <span className="text-[11px] font-mono text-[#07579D] flex items-center gap-1 font-semibold">
                        <Gauge className="w-3.5 h-3.5 text-[#078CCB]" />
                        {site.results.speedScore}/100 Speed
                      </span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                      {site.tagline}
                    </p>
                  </div>

                  {/* Results Highlights */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#DCEAF3]">
                    <div className="p-2.5 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3]">
                      <div className="text-[10px] uppercase font-bold text-[#8295A8]">Conversion Rate</div>
                      <div className="text-xs font-bold text-[#07579D] mt-0.5">{site.results.conversionRate}</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3]">
                      <div className="text-[10px] uppercase font-bold text-[#8295A8]">Revenue Scaled</div>
                      <div className="text-xs font-bold text-[#078CCB] mt-0.5">{site.results.revenueScaled}</div>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] uppercase font-bold text-[#8295A8]">Tech Stack</div>
                    <div className="flex flex-wrap gap-1.5">
                      {site.techStack.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-[#F5FAFD] text-[#07579D] border border-[#DCEAF3] text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                      {site.techStack.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-[#F5FAFD] text-[#8295A8] border border-[#DCEAF3] text-[10px]">
                          +{site.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActivePreviewWebsite(site)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F5FAFD] hover:bg-[#EAF5FB] border border-[#DCEAF3] hover:border-[#078CCB]/50 text-[#07579D] text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Full Architecture & Metrics</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#078CCB]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Web Builds */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#031A3D] via-[#07579D] to-[#031A3D] border border-[#078CCB]/30 text-center space-y-4 shadow-xl">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            Need a High-Conversion Website Rebuild in Under 30 Days?
          </h3>
          <p className="text-slate-200 text-sm max-w-2xl mx-auto">
            From headless Shopify stores to enterprise SaaS Webflow/Next.js portals with sub-second page speed and server-side tracking, we engineer high-converting digital foundations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-bold text-sm shadow-xl shadow-[#078CCB]/25 inline-flex items-center gap-2 cursor-pointer transition-all"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book Web Architecture Strategy Call</span>
            </button>
            <button
              onClick={onOpenAudit}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold cursor-pointer transition-all"
            >
              Get Free 48-Point Speed & Funnel Scan
            </button>
          </div>
        </div>

      </div>

      {/* Website Live Preview Modal */}
      <WebsitePreviewModal
        website={activePreviewWebsite}
        onClose={() => setActivePreviewWebsite(null)}
        onOpenBooking={() => {
          setActivePreviewWebsite(null);
          onOpenBooking();
        }}
      />

    </div>
  );
};
