import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck,
  Building,
  User,
  DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ContactFormData, AppPage } from '../types';

interface ContactSectionProps {
  onOpenBooking?: () => void;
  onNavigate?: (page: AppPage) => void;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  onOpenBooking,
  onNavigate,
  isStandalonePage = false 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    full_name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Website Design & Development',
    budget: '₹25,000 – ₹50,000',
    message: '',
    honeypot: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState<string>('');

  const servicesList = [
    'Website Design & Development',
    'Shopify / eCommerce Store Development',
    'WordPress Development',
    'SEO (Search Engine Optimization)',
    'Google Ads (Search & PMax)',
    'Meta Ads (Facebook & Instagram)',
    'Social Media Marketing & Viral Reels',
    'Branding & Creative Design',
    'Full-Stack Performance Marketing',
    'Landing Page & Speed CRO'
  ];

  const budgetRanges = [
    'Under ₹10,000',
    '₹10,000 – ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹2,00,000',
    '₹2,00,000+'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setResponseMessage('');

    try {
      // Send to Express API endpoint (or fallback to send-mail.php)
      let res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // If Express route not reached, try send-mail.php
      if (!res.ok && res.status === 404) {
        res = await fetch('/send-mail.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });
      }

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setResponseMessage(data.message || 'Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.');
        setFormData({
          full_name: '',
          phone: '',
          email: '',
          company: '',
          service: 'Website Design & Development',
          budget: '₹25,000 – ₹50,000',
          message: '',
          honeypot: ''
        });

        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {
          // confetti fallback
        }
      } else {
        setStatus('error');
        setResponseMessage(data.message || 'There was an issue sending your message. Please try again or message us on WhatsApp.');
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      setStatus('error');
      setResponseMessage('Network error. Please message us on WhatsApp directly at +91 85058 66668.');
    }
  };

  const whatsappDirectUrl = `https://wa.me/918505866668?text=${encodeURIComponent(
    `Hello Groowth Mantra,\nI want to discuss a project for my business.\nName: ${formData.full_name || 'Business Owner'}\nService: ${formData.service}\nBudget: ${formData.budget}`
  )}`;

  return (
    <section id="contact" className={`py-16 sm:py-24 bg-white relative overflow-hidden ${isStandalonePage ? 'pt-8' : 'border-t border-[#DCEAF3]'}`}>
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAF5FB] rounded-full blur-3xl -z-10 opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5FAFD] rounded-full blur-3xl -z-10 opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031A3D] tracking-tight">
            Ready to Scale Your Business? <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5]">
              Get Your Free Consultation
            </span>
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            Fill out the form below or connect instantly on WhatsApp. Our senior growth strategists will analyze your brand and deliver a custom 90-day scaling roadmap.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details, WhatsApp & Google Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-[#F5FAFD] border border-[#DCEAF3] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-display text-xl font-bold text-[#031A3D]">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:+918505866668"
                  className="group flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-[#DCEAF3] hover:border-[#078CCB] transition-all cursor-pointer shadow-xs hover:shadow-md"
                >
                  <div className="p-2.5 rounded-xl bg-[#EAF5FB] text-[#07579D] group-hover:bg-[#07579D] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#8295A8]">Direct Phone Call</div>
                    <div className="text-sm sm:text-base font-bold text-[#031A3D] group-hover:text-[#07579D] transition-colors">
                      +91 85058 66668
                    </div>
                    <div className="text-[11px] text-[#475569]">Mon – Sat: 9:30 AM – 7:00 PM IST</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@groowthmantra.com"
                  className="group flex items-start gap-4 p-3.5 rounded-2xl bg-white border border-[#DCEAF3] hover:border-[#078CCB] transition-all cursor-pointer shadow-xs hover:shadow-md"
                >
                  <div className="p-2.5 rounded-xl bg-[#EAF5FB] text-[#07579D] group-hover:bg-[#07579D] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#8295A8]">Official Email</div>
                    <div className="text-sm sm:text-base font-bold text-[#031A3D] group-hover:text-[#07579D] transition-colors break-all">
                      info@groowthmantra.com
                    </div>
                    <div className="text-[11px] text-[#475569]">Guaranteed response within 4 hours</div>
                  </div>
                </a>

                {/* WhatsApp Chat Banner */}
                <a
                  href="https://wa.me/918505866668?text=Hello%20Groowth%20Mantra%2C%20I%20am%20interested%20in%20your%20digital%20marketing%2Fweb%20development%20services.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-[#25D366]/30">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#031A3D]">Chat on WhatsApp</div>
                      <div className="text-[11px] text-[#475569]">Instant replies from growth leads</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Office Address & Business Hours */}
              <div className="pt-4 border-t border-[#DCEAF3] space-y-3 text-xs text-[#475569]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#078CCB] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#031A3D]">Corporate Headquarters:</strong><br />
                    Block A-26, Sector 4, Noida, Uttar Pradesh 201301, India
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-[#078CCB] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#031A3D]">Regional Growth Hub:</strong><br />
                    Delhi NCR & Pan-India Client Operations
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#078CCB] flex-shrink-0" />
                  <span>Monday – Saturday: 9:30 AM – 7:00 PM IST</span>
                </div>
              </div>
            </div>



          </div>

          {/* Right Column: Functional Form with Validation & UX (7 cols) */}
          <div className="lg:col-span-7 bg-[#F5FAFD] border border-[#DCEAF3] rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
            
            <div className="space-y-1">
              <h3 className="font-display text-2xl font-bold text-[#031A3D]">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#475569]">
                Share your business details and requirements. All inquiries receive a reply within 24 hours.
              </p>
            </div>

            {/* Submission Status Alerts */}
            {status === 'success' && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold text-emerald-900">Enquiry Submitted Successfully!</div>
                  <p>{responseMessage}</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <div className="font-bold text-rose-900">Submission Error</div>
                  <p>{responseMessage}</p>
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:brightness-105"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send directly via WhatsApp</span>
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" id="main-contact-form">
              
              {/* Honeypot field (hidden from real users, catches bots) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="full_name" className="block text-xs font-bold text-[#031A3D] mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8295A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      placeholder="e.g. Rahul Verma"
                      className="w-full pl-10 pr-3.5 py-3 bg-white border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs sm:text-sm focus:outline-none focus:border-[#078CCB] focus:ring-2 focus:ring-[#078CCB]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-[#031A3D] mb-1.5">
                    Phone Number (with WhatsApp) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8295A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-3.5 py-3 bg-white border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs sm:text-sm focus:outline-none focus:border-[#078CCB] focus:ring-2 focus:ring-[#078CCB]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email Address & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#031A3D] mb-1.5">
                    Work Email <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8295A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@company.com"
                      className="w-full pl-10 pr-3.5 py-3 bg-white border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs sm:text-sm focus:outline-none focus:border-[#078CCB] focus:ring-2 focus:ring-[#078CCB]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-[#031A3D] mb-1.5">
                    Company / Brand Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#8295A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Lumina Apparel"
                      className="w-full pl-10 pr-3.5 py-3 bg-white border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs sm:text-sm focus:outline-none focus:border-[#078CCB] focus:ring-2 focus:ring-[#078CCB]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Service Required & Estimated Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-[#031A3D] mb-1.5">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-3 bg-white border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs sm:text-sm focus:outline-none focus:border-[#078CCB] focus:ring-2 focus:ring-[#078CCB]/20 transition-all cursor-pointer"
                  >
                    {servicesList.map((svc, idx) => (
                      <option key={idx} value={svc}>{svc}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs font-bold text-[#031A3D] mb-1.5">
                    Estimated Monthly Budget (INR ₹)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-3 bg-white border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs sm:text-sm focus:outline-none focus:border-[#078CCB] focus:ring-2 focus:ring-[#078CCB]/20 transition-all cursor-pointer font-medium"
                  >
                    {budgetRanges.map((bg, idx) => (
                      <option key={idx} value={bg}>{bg}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Project Message / Notes */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#031A3D] mb-1.5">
                  Project Details / Goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your current challenges, target audience, and expected goals..."
                  className="w-full p-3.5 bg-white border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs sm:text-sm focus:outline-none focus:border-[#078CCB] focus:ring-2 focus:ring-[#078CCB]/20 transition-all"
                />
              </div>

              {/* Submit Buttons and Guarantees */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-[#078CCB]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  id="submit-contact-btn"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Your Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Project Enquiry</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-[#8295A8] mt-3">
                  🔒 We respect your confidentiality. Your data is protected under our{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate ? onNavigate('privacy-policy') : undefined}
                    className="text-[#078CCB] font-semibold hover:underline cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                  . Never shared or sold.
                </p>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
