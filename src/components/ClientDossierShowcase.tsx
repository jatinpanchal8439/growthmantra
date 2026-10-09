import React, { useState, useMemo } from 'react';
import { ClientCaseStudy } from '../types';
import { CLIENT_CASE_STUDIES } from '../data/clients';
import { 
  Building2, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2, 
  Search, 
  Filter, 
  X, 
  Sparkles, 
  BarChart3, 
  Layers, 
  Quote, 
  ShieldCheck, 
  Calendar, 
  DollarSign, 
  Zap,
  Target,
  FileText
} from 'lucide-react';

interface ClientDossierShowcaseProps {
  selectedClientId?: string | null;
  onSelectClient?: (client: ClientCaseStudy | null) => void;
  onOpenBooking: () => void;
}

export const ClientDossierShowcase: React.FC<ClientDossierShowcaseProps> = ({
  selectedClientId,
  onSelectClient,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDossier, setActiveDossier] = useState<ClientCaseStudy | null>(null);

  // Synchronize if selectedClientId prop changes from outside
  React.useEffect(() => {
    if (selectedClientId) {
      const found = CLIENT_CASE_STUDIES.find((c) => c.id === selectedClientId);
      if (found) {
        setActiveDossier(found);
      }
    }
  }, [selectedClientId]);

  const categories = [
    { id: 'all', label: 'All Verticals (8+)' },
    { id: 'ecommerce', label: 'D2C & E-Commerce' },
    { id: 'b2b-saas', label: 'B2B Enterprise SaaS' },
    { id: 'fintech', label: 'FinTech & Mobile Apps' },
    { id: 'health-wellness', label: 'Health & Supplements' },
    { id: 'edtech', label: 'EdTech & High-Ticket' },
  ];

  const filteredClients = useMemo(() => {
    return CLIENT_CASE_STUDIES.filter((client) => {
      const matchesCategory = activeCategory === 'all' || client.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        client.name.toLowerCase().includes(q) ||
        client.categoryLabel.toLowerCase().includes(q) ||
        client.summary.toLowerCase().includes(q) ||
        client.channelsUsed.some(ch => ch.toLowerCase().includes(q)) ||
        client.tagline.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleOpenDossier = (client: ClientCaseStudy) => {
    setActiveDossier(client);
    if (onSelectClient) onSelectClient(client);
  };

  const handleCloseDossier = () => {
    setActiveDossier(null);
    if (onSelectClient) onSelectClient(null);
  };

  return (
    <section id="clients" className="py-24 relative overflow-hidden bg-[#F5FAFD] border-t border-[#DCEAF3]">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#078CCB]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#07579D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FB] border border-[#078CCB]/30 text-[#07579D] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <FileText className="w-3.5 h-3.5 text-[#078CCB]" />
              Verified Client Dossiers & Unit Economics
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#031A3D] tracking-tight">
              Real Client Data. Real ROAS. Zero Vanity.
            </h2>
            <p className="mt-3 text-[#475569] text-base sm:text-lg max-w-2xl">
              Inspect comprehensive client breakdowns including before/after unit economics, exact creative testing angles, channel allocations, and verified results.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#8295A8] font-medium hidden sm:inline">
              Showing <strong className="text-[#031A3D]">{filteredClients.length}</strong> case dossiers
            </span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#DCEAF3]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] text-white shadow-md shadow-[#078CCB]/20'
                    : 'bg-white text-[#475569] hover:text-[#031A3D] hover:bg-[#EAF5FB] border border-[#DCEAF3]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#8295A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search client, channel, or metric..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-[#DCEAF3] rounded-xl text-[#031A3D] placeholder-[#8295A8] focus:outline-none focus:border-[#078CCB] transition-colors shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8295A8] hover:text-[#031A3D]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="group rounded-3xl bg-white border border-[#DCEAF3] hover:border-[#078CCB] p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Header & Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EAF5FB] text-[#07579D] border border-[#DCEAF3]">
                    {client.categoryLabel}
                  </span>
                  <span className="text-xs text-[#8295A8] font-mono font-medium flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#8295A8]" />
                    {client.timeframe}
                  </span>
                </div>

                {/* Client Name & Tagline */}
                <div className="mb-4">
                  <h3 className="font-display text-2xl font-extrabold text-[#031A3D] group-hover:text-[#078CCB] transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-[#475569] line-clamp-2 mt-1">
                    {client.tagline}
                  </p>
                </div>

                {/* Performance Metrics Hero Bento */}
                <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] mb-5">
                  <div>
                    <span className="text-[10px] text-[#8295A8] font-semibold uppercase block">Monthly Output</span>
                    <span className="font-display font-extrabold text-lg text-[#07579D]">
                      {client.currentRevenue}
                    </span>
                    <span className="text-[10px] text-[#8295A8] block font-mono">from {client.initialRevenue}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#8295A8] font-semibold uppercase block">Performance</span>
                    <span className="font-display font-extrabold text-lg text-[#078CCB]">
                      {client.roasAchieved}
                    </span>
                    <span className="text-[10px] text-[#07579D] block font-mono">{client.cacReduction}</span>
                  </div>
                </div>

                {/* Core Challenge & Solution */}
                <div className="space-y-2 text-xs text-[#475569] mb-5">
                  <div className="line-clamp-2">
                    <strong className="text-[#031A3D]">Challenge:</strong> {client.challenge}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {client.channelsUsed.slice(0, 3).map((ch, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-[#EAF5FB] text-[#07579D] border border-[#DCEAF3]">
                        {ch}
                      </span>
                    ))}
                    {client.channelsUsed.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#EAF5FB] text-[#8295A8]">
                        +{client.channelsUsed.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Client Quote snippet */}
                <div className="p-3 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3] text-xs text-[#475569] italic mb-5 flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-[#078CCB] flex-shrink-0 mt-0.5" />
                  <p className="line-clamp-2">
                    "{client.testimonial.quote}"
                  </p>
                </div>
              </div>

              {/* Action Button to Open Full Dossier */}
              <button
                onClick={() => handleOpenDossier(client)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F5FAFD] hover:bg-gradient-to-r hover:from-[#07579D] hover:via-[#078CCB] hover:to-[#09B5E5] hover:text-white text-[#07579D] font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-[#DCEAF3] hover:border-transparent cursor-pointer shadow-xs"
              >
                <span>Inspect Full Client Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {filteredClients.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#DCEAF3]">
            <p className="text-[#8295A8] text-sm">No client dossiers found matching your search or vertical.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-[#078CCB] font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* FULL CLIENT DOSSIER MODAL */}
      {activeDossier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#031A3D]/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-[#DCEAF3] rounded-3xl shadow-2xl p-6 sm:p-8 space-y-8">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#DCEAF3] pb-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EAF5FB] text-[#07579D] border border-[#DCEAF3]">
                    {activeDossier.categoryLabel}
                  </span>
                  <span className="text-xs text-[#8295A8] font-mono">
                    {activeDossier.location} • Founded {activeDossier.founded}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#031A3D]">
                  {activeDossier.name} Case Study & Execution Dossier
                </h3>
                <p className="text-sm text-[#078CCB] mt-1 font-semibold">
                  {activeDossier.tagline}
                </p>
              </div>

              <button
                onClick={handleCloseDossier}
                className="p-2 rounded-xl bg-[#EAF5FB] text-[#475569] hover:text-[#031A3D] hover:bg-[#DCEAF3] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Level Metric Snapshot */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] text-center">
                <span className="text-[10px] uppercase font-semibold text-[#8295A8] block">Growth Multiplier</span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#07579D] mt-1 block">
                  {activeDossier.growthMultiplier}
                </span>
                <span className="text-[11px] text-[#8295A8] font-mono">{activeDossier.timeframe}</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] text-center">
                <span className="text-[10px] uppercase font-semibold text-[#8295A8] block">Blended ROAS</span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#078CCB] mt-1 block">
                  {activeDossier.roasAchieved}
                </span>
                <span className="text-[11px] text-[#8295A8] font-mono">Scaled Spend</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] text-center">
                <span className="text-[10px] uppercase font-semibold text-[#8295A8] block">Current Run-Rate</span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#031A3D] mt-1 block">
                  {activeDossier.currentRevenue}
                </span>
                <span className="text-[11px] text-[#8295A8] font-mono">from {activeDossier.initialRevenue}</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] text-center">
                <span className="text-[10px] uppercase font-semibold text-[#8295A8] block">Acquisition Efficiency</span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#07579D] mt-1 block">
                  {activeDossier.cacReduction}
                </span>
                <span className="text-[11px] text-[#8295A8] font-mono">Per Unit Cost</span>
              </div>
            </div>

            {/* Problem vs Solution Deep Dive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] space-y-3">
                <div className="flex items-center gap-2 text-[#07579D] font-bold text-sm">
                  <Target className="w-4 h-4 text-[#078CCB]" />
                  <span>The Baseline Growth Roadblock</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {activeDossier.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#EAF5FB] border border-[#078CCB]/30 space-y-3">
                <div className="flex items-center gap-2 text-[#07579D] font-bold text-sm">
                  <Zap className="w-4 h-4 text-[#078CCB]" />
                  <span>The Groowth Mantra Playbook</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                  {activeDossier.solution.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#078CCB] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Before vs After Audit Table */}
            <div>
              <h4 className="font-display text-lg font-bold text-[#031A3D] mb-3 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#078CCB]" />
                <span>Verified Unit Economics (Before vs After)</span>
              </h4>
              <div className="overflow-x-auto rounded-2xl border border-[#DCEAF3] bg-white">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#F5FAFD] text-[#07579D] uppercase text-[10px] tracking-wider border-b border-[#DCEAF3]">
                    <tr>
                      <th className="p-3 sm:p-4">Key Metric</th>
                      <th className="p-3 sm:p-4">Prior Baseline</th>
                      <th className="p-3 sm:p-4">With Groowth Mantra</th>
                      <th className="p-3 sm:p-4 text-right">Net Differential</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DCEAF3]">
                    {activeDossier.resultsBreakdown.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#F5FAFD]">
                        <td className="p-3 sm:p-4 font-semibold text-[#031A3D]">{row.metric}</td>
                        <td className="p-3 sm:p-4 text-[#8295A8] font-mono">{row.before}</td>
                        <td className="p-3 sm:p-4 font-bold text-[#07579D] font-mono">{row.after}</td>
                        <td className="p-3 sm:p-4 text-right font-extrabold text-[#078CCB] font-mono">{row.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Winning Creative Angles & Hooks Used */}
            {activeDossier.creativeAngles && activeDossier.creativeAngles.length > 0 && (
              <div>
                <h4 className="font-display text-lg font-bold text-[#031A3D] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#078CCB]" />
                  <span>Winning Direct-Response Creative Hooks</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeDossier.creativeAngles.map((hook, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3] flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#07579D] tracking-wider block mb-1">
                          {hook.format}
                        </span>
                        <p className="text-xs text-[#031A3D] font-medium italic">
                          {hook.hook}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono mt-3 pt-2 border-t border-[#DCEAF3] text-[#8295A8]">
                        <span>CTR: <strong className="text-[#078CCB]">{hook.ctr}</strong></span>
                        <span>ROAS: <strong className="text-[#07579D]">{hook.roas}</strong></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Client Testimonial Card */}
            <div className="p-5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] flex flex-col sm:flex-row items-center gap-4">
              <img
                src={activeDossier.testimonial.avatar}
                alt={activeDossier.testimonial.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#078CCB] flex-shrink-0"
              />
              <div className="flex-grow text-center sm:text-left">
                <p className="text-xs sm:text-sm text-[#475569] italic mb-2">
                  "{activeDossier.testimonial.quote}"
                </p>
                <div className="text-xs font-bold text-[#031A3D]">
                  {activeDossier.testimonial.author} — <span className="text-[#078CCB] font-semibold">{activeDossier.testimonial.role}, {activeDossier.name}</span>
                </div>
              </div>
            </div>

            {/* Footer Modal CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#DCEAF3]">
              <div className="text-xs text-[#8295A8]">
                Want similar unit economics for your business?
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleCloseDossier}
                  className="px-4 py-2 rounded-xl bg-[#EAF5FB] text-[#475569] hover:text-[#031A3D] text-xs font-semibold cursor-pointer"
                >
                  Close Dossier
                </button>
                <button
                  onClick={() => {
                    handleCloseDossier();
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] text-white font-bold text-xs shadow-md shadow-[#078CCB]/25 hover:brightness-105 cursor-pointer"
                >
                  Deploy This Strategy
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
