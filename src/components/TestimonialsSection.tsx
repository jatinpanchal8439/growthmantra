import React from 'react';
import { TESTIMONIALS_DATA } from '../data/services';
import { Star, ShieldCheck, Quote, CheckCircle2, Award, Sparkles } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white border-t border-[#DCEAF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FB] border border-[#078CCB]/30 text-[#07579D] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#078CCB]" />
            Verified Founder Testimonials
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#031A3D] tracking-tight">
            Loved By 240+ Category Leaders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569]">
            Hear from the founders, CMOs, and venture-backed operators who partnered with Groowth Mantra to scale their revenue.
          </p>

          {/* Aggregate Rating Badge */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1 text-[#078CCB]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#078CCB]" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#031A3D]">4.9 / 5.0 Rating</span>
            <span className="text-xs text-[#8295A8]">• Over 80+ Verified Client Endorsements</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#F5FAFD] border border-[#DCEAF3] hover:border-[#078CCB] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Rating and Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#078CCB]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#078CCB]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#EAF5FB] text-[#07579D] border border-[#DCEAF3] flex items-center gap-1 font-semibold">
                    <ShieldCheck className="w-3 h-3 text-[#078CCB]" />
                    {testimonial.verifiedRevenue}
                  </span>
                </div>

                {/* Highlight */}
                <h3 className="font-display text-lg font-bold text-[#031A3D] mb-3">
                  "{testimonial.highlight}"
                </h3>

                {/* Quote */}
                <p className="text-sm text-[#475569] leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#DCEAF3]">

                <div>
                  <div className="font-bold text-[#031A3D] text-sm flex items-center gap-1.5">
                    <span>{testimonial.clientName}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#078CCB]" />
                  </div>
                  <div className="text-xs text-[#8295A8]">
                    {testimonial.role}, <strong className="text-[#031A3D]">{testimonial.company}</strong>
                  </div>
                  <div className="text-[10px] text-[#078CCB] font-mono mt-0.5 font-semibold">
                    Vertical: {testimonial.industry}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

