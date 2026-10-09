import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How is Groowth Mantra different from standard marketing agencies?',
      a: 'Most agencies simply burn money tweaking ad manager settings without touching your website or producing creative. Groowth Mantra provides a full-stack growth infrastructure: our in-house creative lab produces 40+ net-new UGC videos/month, our engineers build server-side CAPI and high-converting landing pages, and our performance leads manage multi-channel paid spend.'
    },
    {
      q: 'What is your typical client engagement and timeline?',
      a: 'We operate in high-velocity 90-day growth sprints. Days 1-14 focus on tracking and CRO foundation, Days 15-30 launch our 40+ creative hook matrix, and Days 31-90 scale profitable ad spend while expanding email/SMS retention LTV.'
    },
    {
      q: 'What minimum ad spend is required to partner with Groowth Mantra?',
      a: 'Our systems are designed for brands spending anywhere from ₹15,000 to ₹10,00,000+ per month on paid media (Meta, Google Ads, YouTube, LinkedIn, Apple Search Ads). If you are an earlier-stage brand, our Free 48-Point Growth Audit provides actionable steps to scale profitably.'
    },
    {
      q: 'Do you guarantee ROAS or performance results?',
      a: 'Yes. We structure performance milestone guarantees into our 90-day agreements. If we do not hit the agreed-upon blended ROAS or CAC reduction targets within 60 days, our creative studio produces additional testing assets at zero agency fee until targets are achieved.'
    },
    {
      q: 'How often do we communicate and review live metrics?',
      a: 'Every client receives a dedicated private Slack Connect channel with your assigned Senior Growth Partner, weekly 30-minute sprint sync calls, and 24/7 access to our live Looker Studio / Command Center dashboard.'
    }
  ];

  return (
    <section className="py-20 relative bg-[#F5FAFD] border-t border-[#DCEAF3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FB] border border-[#078CCB]/30 text-[#07579D] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#078CCB]" />
            Frequently Answered Questions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#031A3D] tracking-tight">
            Everything You Need To Know
          </h2>
          <p className="mt-3 text-[#475569] text-sm sm:text-base">
            Clear answers about our methodology, onboarding, and client guarantees.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#DCEAF3] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-bold text-[#031A3D] text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#078CCB] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#DCEAF3] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
