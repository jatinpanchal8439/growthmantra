import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Trophy, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Globe,
  Award,
  Zap,
  Target
} from 'lucide-react';
import { AGENCY_STATS } from '../data/clients';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onOpenAudit?: () => void;
  isStandalonePage?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBooking,
  isStandalonePage = false
}) => {
  const leadership = [
    {
      name: 'Aditya Singhania',
      role: 'Managing Director & Growth Strategist',
      experience: 'Ex-Performance Lead at D2C Unicorns',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      bio: 'Over 10+ years directing media buying and full-funnel customer acquisition across India, SE Asia, and North America.'
    },
    {
      name: 'Priya Narang',
      role: 'Creative Director & Video Hook Strategist',
      experience: 'Produced 85M+ Viral Video Views',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Pioneered high-retention direct response video frameworks and UGC creator networks for fast-scaling Indian brands.'
    },
    {
      name: 'Rohan Deshmukh',
      role: 'VP of Technology & eCommerce Systems',
      experience: 'Full-Stack Next.js & Shopify Plus Architect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Specialist in sub-second headless storefronts, server-side CAPI tracking, and automated checkout conversions.'
    }
  ];

  const values = [
    {
      title: 'Obsession with Real Unit Economics',
      desc: 'We optimize for net profit, CAC, and blended ROAS—not vanity impressions or useless clicks.',
      icon: TrendingUp
    },
    {
      title: 'Handcrafted Craftsmanship, Zero AI Slop',
      desc: 'Every headline, video hook, line of code, and ad angle is engineered by seasoned senior practitioners.',
      icon: Sparkles
    },
    {
      title: 'Direct Senior Director Access',
      desc: 'No junior account manager handoffs. You work directly with lead strategists who execute your campaigns.',
      icon: Users
    },
    {
      title: 'Full-Funnel Ownership',
      desc: 'From custom web development to viral video production and media buying, we own the entire growth ecosystem.',
      icon: Target
    }
  ];

  return (
    <section id="about" className={`py-16 sm:py-24 bg-white relative overflow-hidden ${isStandalonePage ? 'pt-8' : 'border-t border-[#DCEAF3]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FB] text-[#07579D] border border-[#DCEAF3] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#078CCB]" />
              About Groowth Mantra
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031A3D] tracking-tight">
              We Build Growth Engines <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5]">
                That Scale Profitable Revenue
              </span>
            </h2>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              Groowth Mantra was founded with a single mission: to eliminate the gap between high-end digital design, cutting-edge web technology, and aggressive performance marketing.
            </p>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              Whether you are an ambitious Indian D2C brand scaling to ₹10 Crore+ revenue, an enterprise B2B company capturing high-intent leads, or a local powerhouse dominating regional search, our integrated 4-Pillar methodology delivers predictable, measurable returns.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#078CCB]/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book 1-on-1 Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/918505866668?text=Hello%20Groowth%20Mantra%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20agency%20and%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#F5FAFD] hover:bg-[#EAF5FB] border border-[#DCEAF3] text-[#07579D] font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Image / Trust Stats Card */}
          <div className="lg:col-span-5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
            <h3 className="font-display text-lg font-bold text-[#031A3D]">
              Our Cumulative Agency Impact
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#DCEAF3] shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#07579D] font-display">
                  {AGENCY_STATS.totalRevenueGenerated}
                </div>
                <div className="text-[11px] text-[#8295A8] font-bold uppercase tracking-wider mt-1">
                  Client Revenue Scaled
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#DCEAF3] shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#078CCB] font-display">
                  {AGENCY_STATS.averageRoas}
                </div>
                <div className="text-[11px] text-[#8295A8] font-bold uppercase tracking-wider mt-1">
                  Average ROAS
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#DCEAF3] shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#09B5E5] font-display">
                  85M+
                </div>
                <div className="text-[11px] text-[#8295A8] font-bold uppercase tracking-wider mt-1">
                  Organic & Ad Views
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#DCEAF3] shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#031A3D] font-display">
                  {AGENCY_STATS.scaledBrandsCount}
                </div>
                <div className="text-[11px] text-[#8295A8] font-bold uppercase tracking-wider mt-1">
                  Brands Accelerated
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#EAF5FB] border border-[#078CCB]/30 flex items-center gap-3 text-xs text-[#07579D]">
              <ShieldCheck className="w-5 h-5 text-[#078CCB] flex-shrink-0" />
              <span>Headquartered in Gurugram & New Delhi NCR with active client partnerships across 8 countries.</span>
            </div>
          </div>
        </div>

        {/* Agency Values */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#031A3D]">
              The Core Principles Behind Every Campaign
            </h3>
            <p className="text-xs sm:text-sm text-[#475569]">
              How we consistently engineer outsized returns for our brand partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const IconComponent = v.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] space-y-3 shadow-xs hover:border-[#078CCB] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5FB] text-[#07579D] flex items-center justify-center border border-[#078CCB]/30">
                    <IconComponent className="w-5 h-5 text-[#078CCB]" />
                  </div>
                  <h4 className="font-bold text-[#031A3D] text-sm">
                    {v.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Senior Leadership Team */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#031A3D]">
              Led by Seasoned Growth Practitioners
            </h3>
            <p className="text-xs sm:text-sm text-[#475569]">
              Direct leadership and accountability for your brand's growth trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((member, idx) => (
              <div key={idx} className="bg-white border border-[#DCEAF3] rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#07579D] to-[#078CCB] text-white flex items-center justify-center font-display font-extrabold text-sm shadow-sm flex-shrink-0">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#031A3D] text-base">
                      {member.name}
                    </h4>
                    <div className="text-xs font-bold text-[#078CCB]">
                      {member.role}
                    </div>
                    <div className="text-[11px] text-[#8295A8]">
                      {member.experience}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed pt-2 border-t border-[#DCEAF3]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
