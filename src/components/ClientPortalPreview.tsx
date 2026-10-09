import React, { useState } from 'react';
import { 
  Activity, 
  TrendingUp, 
  DollarSign, 
  Users, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  Layers, 
  Flame, 
  Sparkles,
  ArrowUpRight,
  Shield,
  Eye,
  Sliders,
  X
} from 'lucide-react';
import { CLIENT_CASE_STUDIES } from '../data/clients';

interface ClientPortalPreviewProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
  onOpenBooking: () => void;
}

export const ClientPortalPreview: React.FC<ClientPortalPreviewProps> = ({
  isOpenModal = false,
  onCloseModal,
  onOpenBooking,
}) => {
  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0);
  const activeClient = CLIENT_CASE_STUDIES[selectedDemoIndex] || CLIENT_CASE_STUDIES[0];

  const content = (
    <div className="bg-white border border-[#DCEAF3] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
      
      {/* Portal Top Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#DCEAF3] pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#EAF5FB] border border-[#078CCB]/30 text-[#07579D]">
            <Activity className="w-5 h-5 text-[#078CCB] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#031A3D]">
                Groowth Mantra Command Center
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30 font-bold">
                LIVE DEMO PORTAL
              </span>
            </div>
            <p className="text-xs text-[#475569]">
              Live multi-touch attribution, active sprint boards, and creative velocity logs.
            </p>
          </div>
        </div>

        {/* Client Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3] overflow-x-auto max-w-full">
          {CLIENT_CASE_STUDIES.slice(0, 3).map((client, idx) => (
            <button
              key={client.id}
              onClick={() => setSelectedDemoIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedDemoIndex === idx
                  ? 'bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] text-white font-bold shadow-md'
                  : 'text-[#475569] hover:text-[#031A3D]'
              }`}
            >
              {client.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Live Campaign Performance Ticker */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
          <div className="flex items-center justify-between text-[#8295A8] text-xs mb-1">
            <span>Today's Real-Time ROAS</span>
            <TrendingUp className="w-3.5 h-3.5 text-[#078CCB]" />
          </div>
          <div className="text-xl sm:text-2xl font-display font-extrabold text-[#078CCB]">
            {activeClient.roasAchieved}
          </div>
          <span className="text-[10px] text-[#07579D] font-mono font-semibold">100% CAPI Server Verified</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
          <div className="flex items-center justify-between text-[#8295A8] text-xs mb-1">
            <span>30-Day Revenue Output</span>
            <DollarSign className="w-3.5 h-3.5 text-[#07579D]" />
          </div>
          <div className="text-xl sm:text-2xl font-display font-extrabold text-[#031A3D]">
            {activeClient.currentRevenue}
          </div>
          <span className="text-[10px] text-[#078CCB] font-mono font-semibold">from {activeClient.initialRevenue}</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
          <div className="flex items-center justify-between text-[#8295A8] text-xs mb-1">
            <span>CAC Reduction Rate</span>
            <Flame className="w-3.5 h-3.5 text-[#07579D]" />
          </div>
          <div className="text-xl sm:text-2xl font-display font-extrabold text-[#07579D]">
            {activeClient.cacReduction}
          </div>
          <span className="text-[10px] text-[#8295A8] font-mono">Target: &lt; ₹450</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
          <div className="flex items-center justify-between text-[#8295A8] text-xs mb-1">
            <span>Creative Velocity</span>
            <Sparkles className="w-3.5 h-3.5 text-[#078CCB]" />
          </div>
          <div className="text-xl sm:text-2xl font-display font-extrabold text-[#031A3D]">
            48 Assets / Mo
          </div>
          <span className="text-[10px] text-[#078CCB] font-mono font-semibold">8 Live A/B Iterations</span>
        </div>
      </div>

      {/* Two-Column Middle: Active Sprints & Live Creative Winners */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Active 2-Week Sprint Tasks (Left) */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#031A3D] uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#078CCB]" />
              Current Sprint Milestones (Week 2 of 2)
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30 font-semibold">
              Sprint 14 Active
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-white border border-[#DCEAF3] flex items-start justify-between gap-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#078CCB] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#031A3D] font-medium">TikTok Spark UGC Angle Deployment</span>
                  <p className="text-[#475569] text-[11px]">8 UGC variants with hooks testing dermatological proof</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#07579D] font-bold">COMPLETE</span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#DCEAF3] flex items-start justify-between gap-2">
              <div className="flex items-start gap-2">
                <Activity className="w-4 h-4 text-[#078CCB] flex-shrink-0 mt-0.5 animate-spin" />
                <div>
                  <span className="text-[#031A3D] font-medium">Shopify Quiz CRO Lander Optimization</span>
                  <p className="text-[#475569] text-[11px]">Testing 1-click bundle step vs. personalized routine</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#078CCB] font-bold">IN PROGRESS</span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#DCEAF3] flex items-start justify-between gap-2">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#8295A8] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#031A3D] font-medium">Klaviyo Post-Purchase Winback Sequences</span>
                  <p className="text-[#475569] text-[11px]">Scheduled launch on Day 45 replenishment cadence</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#8295A8]">QUEUED</span>
            </div>
          </div>
        </div>

        {/* Top Creative Angles Ranker (Right) */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#031A3D] uppercase tracking-wider flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#078CCB]" />
              Winning Creatives Leaderboard
            </span>
            <span className="text-[10px] text-[#8295A8] font-mono">Last 7 Days</span>
          </div>

          <div className="space-y-2 text-xs">
            {activeClient.creativeAngles.slice(0, 3).map((angle, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white border border-[#DCEAF3] flex items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30 font-mono">
                      #{idx + 1}
                    </span>
                    <span className="text-[#031A3D] font-medium line-clamp-1">{angle.hook}</span>
                  </div>
                  <span className="text-[10px] text-[#8295A8]">{angle.format}</span>
                </div>
                <div className="text-right font-mono flex-shrink-0">
                  <div className="text-[#07579D] font-bold">{angle.roas}</div>
                  <div className="text-[10px] text-[#8295A8]">CTR {angle.ctr}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom CTA Banner */}
      <div className="p-4 rounded-2xl bg-[#EAF5FB] border border-[#078CCB]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-[#078CCB]" />
          <span className="text-xs sm:text-sm text-[#031A3D]">
            Every Groowth Mantra client gets a dedicated Slack Connect channel + 24/7 live Looker Studio dashboard.
          </span>
        </div>
        <button
          onClick={onOpenBooking}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-bold text-xs shadow-lg shadow-[#078CCB]/25 whitespace-nowrap cursor-pointer transition-all"
        >
          Get Client Access
        </button>
      </div>

    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#031A3D]/70 backdrop-blur-md animate-fade-in">
        <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto">
          {onCloseModal && (
            <button
              onClick={onCloseModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-[#F5FAFD] text-[#475569] hover:text-[#031A3D] hover:bg-[#EAF5FB] border border-[#DCEAF3] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          {content}
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 relative bg-white border-t border-[#DCEAF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FB] border border-[#078CCB]/30 text-[#07579D] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Eye className="w-3.5 h-3.5 text-[#078CCB]" />
            Client Experience & Reporting Transparency
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#031A3D] tracking-tight">
            Inside the Client Command Center
          </h2>
          <p className="mt-3 text-[#475569] text-sm sm:text-base">
            No vague monthly slide decks. Groowth Mantra clients have 24/7 real-time telemetry into ad spend efficiency, active experiments, and revenue growth.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
};
