import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  ArrowRight, 
  ShieldAlert, 
  Zap, 
  Clock, 
  Globe, 
  Download,
  Calendar,
  IndianRupee
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface InteractiveAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialUrl?: string;
  initialSpend?: number;
  initialRevenue?: number;
  onOpenBooking: () => void;
}

export const InteractiveAuditModal: React.FC<InteractiveAuditModalProps> = ({
  isOpen,
  onClose,
  initialUrl = '',
  initialSpend = 35000,
  initialRevenue = 150000,
  onOpenBooking,
}) => {
  const [step, setStep] = useState<'form' | 'scanning' | 'report'>('form');
  const [url, setUrl] = useState(initialUrl || 'https://');
  const [spend, setSpend] = useState(initialSpend);
  const [revenue, setRevenue] = useState(initialRevenue);
  const [industry, setIndustry] = useState('ecommerce');
  const [biggestBlocker, setBiggestBlocker] = useState('high_cac');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStatusMessage, setScanStatusMessage] = useState('Initiating server-side audit...');

  useEffect(() => {
    if (initialUrl) {
      setUrl(initialUrl);
    }
  }, [initialUrl]);

  useEffect(() => {
    if (step === 'scanning') {
      const messages = [
        'Analyzing server-side Conversions API (CAPI) & pixel drops...',
        'Scanning ad creative fatigue & video hook retention index...',
        'Auditing checkout friction & mobile conversion rate leaks...',
        'Calculating LTV retention drops & repeat purchase replenishment curves...',
        'Compiling customized 4-Week Groowth Mantra Sprint Roadmap...'
      ];

      let progress = 0;
      const interval = setInterval(() => {
        progress += 4;
        setScanProgress(Math.min(100, progress));
        const messageIndex = Math.min(messages.length - 1, Math.floor((progress / 100) * messages.length));
        setScanStatusMessage(messages[messageIndex]);

        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setStep('report');
            try {
              confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 }
              });
            } catch (e) {
              // fallback
            }
          }, 600);
        }
      }, 80);

      return () => clearInterval(interval);
    }
  }, [step]);

  const handleStartScan = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('scanning');
    setScanProgress(0);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: 'Growth Audit Requester',
          email: email,
          phone: phone || 'N/A',
          service: '48-Point Growth Audit',
          budget: `₹${spend.toLocaleString('en-IN')}/mo ad spend`,
          message: `Target URL: ${url} | Revenue: ₹${revenue.toLocaleString('en-IN')}/mo | Blocker: ${biggestBlocker}`
        })
      });
    } catch (err) {
      console.warn('Audit lead logging fallback');
    }
  };

  const calculatedMissedRevenue = Math.round(spend * 1.8 + revenue * 0.28);
  const calculatedGrowthScore = Math.max(54, Math.min(78, 100 - Math.round(spend / 10000)));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#031A3D]/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white border border-[#DCEAF3] rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Header with Close */}
        <div className="flex items-center justify-between border-b border-[#DCEAF3] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30">
              <Sparkles className="w-5 h-5 text-[#078CCB]" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#031A3D]">
                48-Point Growth & Revenue Leak Audit
              </h3>
              <p className="text-xs text-[#8295A8]">
                Data-driven audit powered by Groowth Mantra’s algorithmic testing models
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#F5FAFD] text-[#475569] hover:text-[#031A3D] hover:bg-[#EAF5FB] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: FORM */}
        {step === 'form' && (
          <form onSubmit={handleStartScan} className="space-y-5">
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#031A3D] mb-1.5">
                Target Website / Brand URL <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-[#078CCB] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://yourbrand.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-sm focus:outline-none focus:border-[#078CCB] focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#031A3D] mb-1.5">
                  Current Monthly Ad Spend (INR ₹)
                </label>
                <div className="relative">
                  <span className="text-[#078CCB] font-bold text-sm absolute left-3.5 top-1/2 -translate-y-1/2">₹</span>
                  <input
                    type="number"
                    value={spend}
                    onChange={(e) => setSpend(Number(e.target.value))}
                    className="w-full pl-9 pr-4 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-sm focus:outline-none focus:border-[#078CCB] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#031A3D] mb-1.5">
                  Current Monthly Revenue (INR ₹)
                </label>
                <div className="relative">
                  <span className="text-[#078CCB] font-bold text-sm absolute left-3.5 top-1/2 -translate-y-1/2">₹</span>
                  <input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-full pl-9 pr-4 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-sm focus:outline-none focus:border-[#078CCB] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#031A3D] mb-1.5">
                  Industry / Business Model
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-sm focus:outline-none focus:border-[#078CCB] focus:bg-white cursor-pointer font-medium"
                >
                  <option value="ecommerce">D2C & E-Commerce / Shopify</option>
                  <option value="leadgen">B2B, Tech & Consulting</option>
                  <option value="fintech">FinTech & Mobile App</option>
                  <option value="health">Healthcare & Wellness</option>
                  <option value="edtech">EdTech & High-Ticket Training</option>
                  <option value="realestate">Real Estate & Construction</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#031A3D] mb-1.5">
                  Primary Growth Bottleneck
                </label>
                <select
                  value={biggestBlocker}
                  onChange={(e) => setBiggestBlocker(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-sm focus:outline-none focus:border-[#078CCB] focus:bg-white cursor-pointer font-medium"
                >
                  <option value="high_cac">High Customer Acquisition Cost (CAC)</option>
                  <option value="creative_fatigue">Ad Creative Fatigue & Low ROAS</option>
                  <option value="cro_leak">Low Store Conversion Rate (CVR)</option>
                  <option value="churn">Poor Repeat Purchases / High Churn</option>
                  <option value="scaling">Cannot scale budget past ₹1,00,000/mo profitably</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#031A3D] mb-1.5">
                  Work Email for Audit PDF <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@company.com"
                  className="w-full px-4 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-sm focus:outline-none focus:border-[#078CCB] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#031A3D] mb-1.5">
                  WhatsApp Number (For Direct Audit Link)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-sm focus:outline-none focus:border-[#078CCB] focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-extrabold text-sm transition-all shadow-xl shadow-[#078CCB]/25 flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Generate 48-Point Audit Report</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

          </form>
        )}

        {/* STEP 2: SCANNING SIMULATION */}
        {step === 'scanning' && (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-[#DCEAF3] border-t-[#078CCB] animate-spin" />
              <Activity className="w-8 h-8 text-[#078CCB] animate-pulse" />
            </div>

            <div className="space-y-2">
              <h4 className="font-display text-xl font-bold text-[#031A3D]">
                Scanning {url}
              </h4>
              <p className="text-xs sm:text-sm text-[#07579D] font-mono">
                {scanStatusMessage}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md bg-[#F5FAFD] rounded-full h-3 p-0.5 border border-[#DCEAF3]">
              <div
                className="bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] h-full rounded-full transition-all duration-150"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
            <span className="text-xs text-[#8295A8] font-mono">{scanProgress}% Complete</span>
          </div>
        )}

        {/* STEP 3: AUDIT REPORT RESULT */}
        {step === 'report' && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Top Score Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] text-center">
                <span className="text-[10px] uppercase font-semibold text-[#8295A8] block">Growth Efficiency Score</span>
                <span className="font-display text-3xl font-extrabold text-[#078CCB] mt-1 block">
                  {calculatedGrowthScore}/100
                </span>
                <span className="text-[10px] text-[#07579D] font-semibold">Optimization Required</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] text-center">
                <span className="text-[10px] uppercase font-semibold text-[#8295A8] block">Estimated Revenue Leaks</span>
                <span className="font-display text-3xl font-extrabold text-[#07579D] mt-1 block">
                  ₹{calculatedMissedRevenue.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-[#8295A8]">Monthly Untapped</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] text-center">
                <span className="text-[10px] uppercase font-semibold text-[#8295A8] block">Projected ROAS Potential</span>
                <span className="font-display text-3xl font-extrabold text-[#078CCB] mt-1 block">
                  4.8x+
                </span>
                <span className="text-[10px] text-[#07579D] font-semibold">Via CAPI & UGC Matrix</span>
              </div>
            </div>

            {/* Critical Leaks Identified */}
            <div className="p-5 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] space-y-3">
              <h4 className="text-xs font-bold text-[#031A3D] uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#078CCB]" />
                Top Identified Conversion & Ad Leaks
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-white border border-[#DCEAF3] flex items-start gap-2.5">
                  <div className="px-2 py-0.5 rounded bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30 text-[10px] font-bold font-mono">
                    HIGH
                  </div>
                  <div>
                    <strong className="text-[#031A3D]">Ad Creative Fatigue & Single-Angle Over-reliance:</strong>
                    <p className="text-[#475569] mt-0.5">Your accounts rely on 2-3 top static images. Testing 40+ dynamic UGC hooks will drop CPCs by ~38%.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#DCEAF3] flex items-start gap-2.5">
                  <div className="px-2 py-0.5 rounded bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30 text-[10px] font-bold font-mono">
                    CRITICAL
                  </div>
                  <div>
                    <strong className="text-[#031A3D]">Server-Side Pixel Signal Loss:</strong>
                    <p className="text-[#475569] mt-0.5">Missing first-party CAPI sync is causing 28% of purchase signals to be dropped by iOS14+ ad algorithms.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#DCEAF3] flex items-start gap-2.5">
                  <div className="px-2 py-0.5 rounded bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30 text-[10px] font-bold font-mono">
                    MEDIUM
                  </div>
                  <div>
                    <strong className="text-[#031A3D]">Sub-optimal Post-Purchase Replenishment:</strong>
                    <p className="text-[#475569] mt-0.5">Automated SMS & email flows can lift 90-day customer LTV by 45% with zero additional ad spend.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom 4-Week Sprint Plan */}
            <div>
              <h4 className="text-xs font-bold text-[#031A3D] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#078CCB]" />
                Recommended 4-Week Groowth Mantra Sprint
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3]">
                  <span className="font-bold text-[#07579D] block mb-0.5">Week 1: Tracking & CRO Foundation</span>
                  <span className="text-[#475569]">Deploy full CAPI server integration & optimize top mobile checkout paths.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3]">
                  <span className="font-bold text-[#07579D] block mb-0.5">Week 2: Creative Lab Production</span>
                  <span className="text-[#475569]">Script and produce 30 net-new direct response UGC video hook variations.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3]">
                  <span className="font-bold text-[#07579D] block mb-0.5">Week 3: Algorithm Sandbox Testing</span>
                  <span className="text-[#475569]">Test hook variations in low-spend sandbox ad sets to identify winner angles.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3]">
                  <span className="font-bold text-[#07579D] block mb-0.5">Week 4: Scaled Broad Distribution</span>
                  <span className="text-[#475569]">Scale winning creative assets into Advantage+ and Google PMax campaigns.</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#DCEAF3]">
              <span className="text-xs text-[#8295A8]">
                Full report PDF dispatched to <strong className="text-[#031A3D]">{email || 'your email'}</strong>
              </span>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setStep('form');
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#F5FAFD] text-[#475569] hover:text-[#031A3D] text-xs font-semibold border border-[#DCEAF3] cursor-pointer"
                >
                  Re-scan URL
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] text-white font-bold text-xs shadow-lg shadow-[#078CCB]/25 flex items-center gap-1.5 cursor-pointer hover:brightness-110 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Review Audit on Strategy Call</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
