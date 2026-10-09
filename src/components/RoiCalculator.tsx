import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  BarChart2,
  Sliders,
  ShieldAlert
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
  onOpenAuditWithData: (spend: number, revenue: number, roas: number) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({
  onOpenBooking,
  onOpenAuditWithData,
}) => {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(150000);
  const [monthlySpend, setMonthlySpend] = useState<number>(35000);
  const [currentRoas, setCurrentRoas] = useState<number>(2.1);
  const [industryTrack, setIndustryTrack] = useState<string>('ecommerce');

  // Dynamic calculations based on industry track and inputs
  const calculation = useMemo(() => {
    const industryMultipliers: Record<string, { roasBoost: number; ltvLift: number; cacDrop: number }> = {
      ecommerce: { roasBoost: 2.1, ltvLift: 0.35, cacDrop: 0.42 },
      saas: { roasBoost: 2.4, ltvLift: 0.48, cacDrop: 0.45 },
      fintech: { roasBoost: 2.6, ltvLift: 0.52, cacDrop: 0.50 },
      edtech: { roasBoost: 2.2, ltvLift: 0.30, cacDrop: 0.38 }
    };

    const multiplier = industryMultipliers[industryTrack] || industryMultipliers.ecommerce;

    // Projected target ROAS with Groowth Mantra optimization
    const targetRoas = Math.min(6.8, Number((currentRoas * multiplier.roasBoost).toFixed(2)));
    
    // Revenue projected from ad spend
    const adGeneratedRevenue = monthlySpend * targetRoas;
    // Organic/Base revenue with retention & CRO lift
    const baseLift = (monthlyRevenue - (monthlySpend * currentRoas)) * (1 + multiplier.ltvLift);
    const projectedMonthlyRevenue = Math.round(Math.max(monthlyRevenue * 1.6, adGeneratedRevenue + Math.max(0, baseLift)));
    
    const monthlyNetGain = Math.round(projectedMonthlyRevenue - monthlyRevenue);
    const annualNetGain = monthlyNetGain * 12;
    const projectedThreeMonth = Math.round(monthlyRevenue * 1.85);
    const projectedTwelveMonth = Math.round(projectedMonthlyRevenue * 1.9);
    const estimatedCacSavings = Math.round(monthlySpend * multiplier.cacDrop);

    return {
      targetRoas,
      projectedMonthlyRevenue,
      monthlyNetGain,
      annualNetGain,
      projectedThreeMonth,
      projectedTwelveMonth,
      estimatedCacSavings
    };
  }, [monthlyRevenue, monthlySpend, currentRoas, industryTrack]);

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-white border-t border-[#DCEAF3]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[#09B5E5]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#07579D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FB] border border-[#078CCB]/30 text-[#07579D] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-[#078CCB]" />
            Interactive ROI & Revenue Forecaster
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#031A3D] tracking-tight">
            Calculate Your Untapped Revenue Potential
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569]">
            Slide to your current metrics to see how Groowth Mantra’s full-funnel CRO, high-velocity creative, and paid media scaling impacts your bottom line.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-6 bg-[#F5FAFD] border border-[#DCEAF3] rounded-3xl p-6 sm:p-8 shadow-md space-y-7">
            
            {/* Industry Selector Tabs */}
            <div>
              <label className="text-xs font-semibold uppercase text-[#8295A8] tracking-wider block mb-3">
                Select Your Industry / Business Model
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'ecommerce', label: 'D2C & E-Com' },
                  { id: 'saas', label: 'B2B SaaS' },
                  { id: 'fintech', label: 'FinTech / App' },
                  { id: 'edtech', label: 'EdTech / Info' },
                ].map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setIndustryTrack(ind.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      industryTrack === ind.id
                        ? 'bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] text-white font-bold shadow-md shadow-[#078CCB]/20'
                        : 'bg-white border border-[#DCEAF3] text-[#475569] hover:text-[#031A3D] hover:border-[#078CCB]'
                    }`}
                  >
                    {ind.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Current Monthly Revenue */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-[#031A3D]">Current Monthly Revenue</span>
                <span className="text-base sm:text-lg font-mono font-bold text-[#07579D]">
                  ₹{monthlyRevenue.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="25000"
                max="2500000"
                step="25000"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full h-2 bg-[#DCEAF3] rounded-lg appearance-none cursor-pointer accent-[#078CCB]"
              />
              <div className="flex justify-between text-[11px] text-[#8295A8] mt-1 font-mono">
                <span>₹25k/mo</span>
                <span>₹10 Lakh/mo</span>
                <span>₹25 Lakh+/mo</span>
              </div>
            </div>

            {/* Slider 2: Current Monthly Ad Spend */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-[#031A3D]">Current Monthly Ad Spend</span>
                <span className="text-base sm:text-lg font-mono font-bold text-[#07579D]">
                  ₹{monthlySpend.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="10000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-[#DCEAF3] rounded-lg appearance-none cursor-pointer accent-[#078CCB]"
              />
              <div className="flex justify-between text-[11px] text-[#8295A8] mt-1 font-mono">
                <span>₹10k/mo</span>
                <span>₹5 Lakh/mo</span>
                <span>₹10 Lakh+/mo</span>
              </div>
            </div>

            {/* Slider 3: Current Blended ROAS */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-[#031A3D]">Current Blended ROAS / Return Ratio</span>
                <span className="text-base sm:text-lg font-mono font-bold text-[#07579D]">
                  {currentRoas.toFixed(1)}x
                </span>
              </div>
              <input
                type="range"
                min="0.8"
                max="4.0"
                step="0.1"
                value={currentRoas}
                onChange={(e) => setCurrentRoas(Number(e.target.value))}
                className="w-full h-2 bg-[#DCEAF3] rounded-lg appearance-none cursor-pointer accent-[#078CCB]"
              />
              <div className="flex justify-between text-[11px] text-[#8295A8] mt-1 font-mono">
                <span>0.8x (Loss / Break-even)</span>
                <span>2.0x (Average)</span>
                <span>4.0x+ (High)</span>
              </div>
            </div>

            {/* Strategy Highlights for selected model */}
            <div className="pt-3 border-t border-[#DCEAF3] space-y-2 text-xs text-[#475569]">
              <div className="font-semibold text-[#031A3D] text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#078CCB]" />
                Tailored Growth Levers Applied In Model:
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#078CCB] flex-shrink-0" />
                <span>40+ Modular Direct-Response UGC variations monthly to eliminate creative fatigue</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#078CCB] flex-shrink-0" />
                <span>Server-side Conversions API & 1st-party intent pixels to bypass privacy drop-offs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#078CCB] flex-shrink-0" />
                <span>Multi-tier replenishment, VIP loyalty & automated email/SMS retention funnels</span>
              </div>
            </div>

          </div>

          {/* Results Column (Right) */}
          <div className="lg:col-span-6 bg-white border border-[#DCEAF3] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#DCEAF3] pb-4">
              <div>
                <span className="text-xs font-bold text-[#078CCB] uppercase tracking-widest block">Projected Outcome</span>
                <h3 className="font-display text-xl font-bold text-[#031A3D]">Estimated Groowth Mantra Trajectory</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#EAF5FB] border border-[#DCEAF3] text-[#07579D] text-xs font-bold flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#078CCB]" />
                High Confidence
              </span>
            </div>

            {/* Big Metrics Bento */}
            <div className="grid grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
                <span className="text-xs text-[#8295A8] font-medium">Projected Monthly Revenue</span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#031A3D] mt-1">
                  ₹{calculation.projectedMonthlyRevenue.toLocaleString('en-IN')}
                </div>
                <span className="text-[11px] text-[#078CCB] font-semibold mt-1 inline-block">
                  +₹{calculation.monthlyNetGain.toLocaleString('en-IN')}/mo increase
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
                <span className="text-xs text-[#8295A8] font-medium">Projected Blended ROAS</span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#07579D] mt-1">
                  {calculation.targetRoas}x
                </div>
                <span className="text-[11px] text-[#078CCB] font-semibold mt-1 inline-block">
                  From {currentRoas.toFixed(1)}x baseline
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
                <span className="text-xs text-[#8295A8] font-medium">12-Month Net Added Revenue</span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#07579D] mt-1">
                  +₹{calculation.annualNetGain.toLocaleString('en-IN')}
                </div>
                <span className="text-[11px] text-[#8295A8] mt-1 inline-block">
                  Based on continuous sprint scaling
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
                <span className="text-xs text-[#8295A8] font-medium">Monthly CAC Waste Saved</span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#078CCB] mt-1">
                  ₹{calculation.estimatedCacSavings.toLocaleString('en-IN')}
                </div>
                <span className="text-[11px] text-[#8295A8] mt-1 inline-block">
                  Via creative & CAPI optimization
                </span>
              </div>

            </div>

            {/* Visual Growth Path Forecast */}
            <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3]">
              <div className="flex justify-between text-xs text-[#8295A8] mb-2 font-medium">
                <span>Month 1 (Audit & Creative)</span>
                <span>Month 3 (Sprint Scale)</span>
                <span>Month 12 (Market Dominance)</span>
              </div>
              <div className="relative h-12 flex items-end">
                {/* SVG Curve */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 50" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="calcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#07579D" />
                      <stop offset="50%" stopColor="#078CCB" />
                      <stop offset="100%" stopColor="#09B5E5" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,45 Q 100,38 150,22 T 300,5"
                    fill="none"
                    stroke="url(#calcGrad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="0" cy="45" r="4" fill="#07579D" />
                  <circle cx="150" cy="22" r="4" fill="#078CCB" />
                  <circle cx="300" cy="5" r="5" fill="#09B5E5" />
                </svg>
              </div>
              <div className="flex justify-between text-xs font-mono font-bold text-[#031A3D] mt-2">
                <span>₹{monthlyRevenue.toLocaleString('en-IN')}</span>
                <span className="text-[#078CCB]">₹{calculation.projectedThreeMonth.toLocaleString('en-IN')}</span>
                <span className="text-[#07579D]">₹{calculation.projectedTwelveMonth.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => onOpenAuditWithData(monthlySpend, monthlyRevenue, currentRoas)}
                className="flex-1 py-3.5 px-4 rounded-xl bg-white border border-[#DCEAF3] hover:border-[#078CCB] text-[#07579D] font-bold text-sm transition-all hover:bg-[#EAF5FB] flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#078CCB]" />
                <span>Get Full 48-Point Audit</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-105 text-white font-bold text-sm transition-all shadow-md shadow-[#078CCB]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Execute This Strategy</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
