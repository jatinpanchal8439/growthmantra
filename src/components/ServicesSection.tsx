import React, { useState } from 'react';
import { ALL_SERVICES, SERVICE_PILLARS } from '../data/services';
import { 
  LayoutTemplate, 
  ShoppingBag, 
  Globe, 
  Search, 
  Target, 
  TrendingUp, 
  Instagram, 
  Sparkles, 
  Zap, 
  Layers, 
  FileText, 
  Activity,
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Repeat,
  Wrench,
  BarChart,
  DollarSign
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
  isStandalonePage?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  onOpenAudit,
  isStandalonePage = false
}) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('build');
  const [serviceFilter, setServiceFilter] = useState<string>('all');

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutTemplate': return <LayoutTemplate className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Repeat': return <Repeat className="w-6 h-6" />;
      default: return <TrendingUp className="w-6 h-6" />;
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutTemplate': return <LayoutTemplate className="w-5 h-5 text-[#078CCB]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#078CCB]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#078CCB]" />;
      case 'Search': return <Search className="w-5 h-5 text-[#078CCB]" />;
      case 'Target': return <Target className="w-5 h-5 text-[#078CCB]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#078CCB]" />;
      case 'Instagram': return <Instagram className="w-5 h-5 text-[#078CCB]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#078CCB]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#078CCB]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#078CCB]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#078CCB]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#078CCB]" />;
      default: return <Sparkles className="w-5 h-5 text-[#078CCB]" />;
    }
  };

  const activePillar = SERVICE_PILLARS.find(p => p.id === selectedPillarId) || SERVICE_PILLARS[0];

  const categories = [
    { id: 'all', label: 'All Services (12)' },
    { id: 'dev', label: 'Web & eCommerce', match: ['web-design-dev', 'shopify-development', 'wordpress-development', 'ecommerce-development', 'landing-page-development'] },
    { id: 'ads', label: 'Paid Advertising', match: ['google-ads-ppc', 'meta-ads-scaling', 'performance-marketing'] },
    { id: 'growth', label: 'SEO & Social Media', match: ['seo-search-engine-optimization', 'social-media-marketing'] },
    { id: 'cro', label: 'Branding & CRO', match: ['branding-creative-design', 'website-optimization-cro'] }
  ];

  const filteredServices = ALL_SERVICES.filter(service => {
    if (serviceFilter === 'all') return true;
    const cat = categories.find(c => c.id === serviceFilter);
    return cat?.match ? cat.match.includes(service.id) : true;
  });

  return (
    <section id="services" className={`py-16 sm:py-24 bg-[#F5FAFD] relative overflow-hidden ${isStandalonePage ? 'pt-8' : 'border-t border-[#DCEAF3]'}`}>
      
      {/* Background Soft Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#078CCB]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCEAF3] text-[#07579D] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#078CCB]" />
            Full-Stack Digital Growth Agency
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031A3D] tracking-tight">
            Our Core Agency Services <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5]">
              Engineered to Drive Real ROI
            </span>
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            From high-speed custom web development to full-funnel media buying and viral creative production, we provide end-to-end digital mastery for ambitious businesses.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setServiceFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                serviceFilter === cat.id
                  ? 'bg-[#07579D] text-white shadow-md'
                  : 'bg-white text-[#475569] border border-[#DCEAF3] hover:border-[#078CCB] hover:text-[#031A3D]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#DCEAF3] hover:border-[#078CCB] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF5FB] border border-[#DCEAF3] group-hover:border-[#078CCB] flex items-center justify-center transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30 text-[10px] font-bold uppercase tracking-wider">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#031A3D] group-hover:text-[#07579D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#475569] mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Pricing Banner */}
                <div className="p-3 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3] flex items-center justify-between text-xs">
                  <span className="text-[#8295A8] font-medium">Pricing:</span>
                  <span className="font-extrabold text-[#07579D]">{service.startingPrice}</span>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8295A8]">Key Deliverables:</div>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#475569]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#078CCB] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#DCEAF3] flex items-center gap-2">
                <button
                  onClick={onOpenBooking}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#EAF5FB] hover:bg-[#07579D] text-[#07579D] hover:text-white border border-[#DCEAF3] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/918505866668?text=${encodeURIComponent(`Hello Groowth Mantra, I am interested in ${service.title} (${service.startingPrice}). Please share more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white hover:bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] transition-colors cursor-pointer"
                  title="Inquire on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* The 4 Pillars Deep-Dive Bento Framework */}
        <div className="pt-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#031A3D]">
              The 4-Pillar Growth Flywheel
            </h3>
            <p className="text-xs sm:text-sm text-[#475569]">
              How we sync funnel technology, creative assets, paid acquisition, and LTV retention into one unified revenue engine.
            </p>
          </div>

          {/* 4 Pillar Switcher Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {SERVICE_PILLARS.map((pillar) => {
              const isSelected = selectedPillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#078CCB] shadow-xl shadow-[#078CCB]/15 ring-2 ring-[#078CCB]'
                      : 'bg-white/80 border-[#DCEAF3] hover:border-[#078CCB] hover:bg-white shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-gradient-to-r from-[#07579D] to-[#078CCB] text-white font-bold' : 'bg-[#EAF5FB] text-[#078CCB]'}`}>
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <span className={`text-[10px] font-display font-black tracking-widest px-2 py-0.5 rounded ${
                      isSelected ? 'bg-[#EAF5FB] text-[#07579D] border border-[#DCEAF3]' : 'text-[#8295A8]'
                    }`}>
                      {pillar.pillar}
                    </span>
                  </div>
                  <div>
                    <h3 className={`font-display text-base font-bold ${isSelected ? 'text-[#031A3D]' : 'text-[#475569]'}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#8295A8] mt-1 line-clamp-1">
                      {pillar.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Pillar Feature Bento */}
          <div className="bg-white border border-[#DCEAF3] rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Col: Overview & Deliverables */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FB] text-[#07579D] border border-[#DCEAF3] text-xs font-mono mb-3 font-semibold">
                    PILLAR {activePillar.pillar} EXECUTION
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#031A3D]">
                    {activePillar.title}
                  </h3>
                  <p className="text-sm text-[#475569] mt-3 leading-relaxed">
                    {activePillar.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div>
                  <h4 className="text-xs font-bold text-[#8295A8] uppercase tracking-wider mb-3">
                    Included Capabilities & Deliverables:
                  </h4>
                  <div className="space-y-2.5">
                    {activePillar.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569]">
                        <CheckCircle2 className="w-4 h-4 text-[#078CCB] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Outcome Banner */}
                <div className="p-4 rounded-2xl bg-[#EAF5FB] border border-[#DCEAF3] flex items-center gap-3">
                  <BarChart className="w-5 h-5 text-[#078CCB] flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#07579D] tracking-wider block">Expected Velocity</span>
                    <span className="text-xs sm:text-sm text-[#031A3D] font-semibold">{activePillar.sampleOutcome}</span>
                  </div>
                </div>
              </div>

              {/* Right Col: KPIs & Tool Stack */}
              <div className="lg:col-span-5 space-y-6 bg-[#F5FAFD] border border-[#DCEAF3] rounded-2xl p-6">
                <div>
                  <h4 className="text-xs font-bold text-[#07579D] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-[#078CCB]" />
                    Target Key Performance Indicators (KPIs)
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {activePillar.kpis.map((kpi, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-white border border-[#DCEAF3] text-xs font-semibold text-[#031A3D] shadow-xs">
                        {kpi}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#07579D] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-[#078CCB]" />
                    Enterprise Tooling & Tech
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activePillar.tools.map((tool, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-white border border-[#DCEAF3] text-xs font-mono text-[#07579D] font-medium shadow-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DCEAF3] flex flex-col gap-2.5">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-105 text-white font-bold text-xs transition-all shadow-md shadow-[#078CCB]/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Deploy {activePillar.pillar} for Your Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onOpenAudit}
                    className="w-full py-2.5 px-4 rounded-xl bg-white text-[#07579D] border border-[#DCEAF3] text-xs font-semibold hover:bg-[#EAF5FB] hover:border-[#078CCB] transition-colors cursor-pointer"
                  >
                    Audit My Current {activePillar.pillar} Setup
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
