import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  User, 
  Mail, 
  Building2, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  Layers,
  DollarSign
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Website Design & Development',
    budget: '₹25,000 – ₹50,000',
    message: ''
  });

  const servicesList = [
    'Website Design & Development',
    'Shopify / eCommerce Store Development',
    'WordPress Development',
    'Google Ads (Search & PMax)',
    'Meta Ads (Facebook & Instagram)',
    'SEO (Search Engine Optimization)',
    'Social Media Marketing & Viral Reels',
    'Branding & Creative Design',
    'Full-Stack Performance Marketing'
  ];

  const budgetRanges = [
    'Under ₹10,000',
    '₹10,000 – ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹2,00,000',
    '₹2,00,000+'
  ];

  // Reset to form step when modal reopens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message || 'Direct enquiry submission'
        })
      });

      if (!res.ok && res.status === 404) {
        await fetch('/send-mail.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            full_name: formData.name,
            phone: formData.phone,
            email: formData.email,
            company: formData.company,
            service: formData.service,
            budget: formData.budget,
            message: formData.message || 'Direct enquiry submission'
          })
        });
      }
    } catch (err) {
      console.warn('Booking form fallback');
    }

    setIsSubmitting(false);
    setStep('confirmed');
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (e) {
      // fallback
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#031A3D]/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-white border border-[#DCEAF3] rounded-3xl shadow-2xl p-6 sm:p-8 space-y-5 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#DCEAF3] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#07579D] to-[#078CCB] text-white shadow-md shadow-[#078CCB]/25">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#031A3D]">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#64748B]">
                Fill out the form below. Our team will contact you shortly.
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

        {/* DIRECT CONTACT FORM */}
        {step === 'form' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Row 1: Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-[#031A3D] mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8295A8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-9 pr-3 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#031A3D] mb-1">
                  Phone / WhatsApp <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8295A8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-3 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Email & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-[#031A3D] mb-1">
                  Work Email <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8295A8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@company.com"
                    className="w-full pl-9 pr-3 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#031A3D] mb-1">
                  Company / Brand Name
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-[#8295A8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Lumina Apparel"
                    className="w-full pl-9 pr-3 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Service & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-[#031A3D] mb-1">
                  Service Required
                </label>
                <div className="relative">
                  <Layers className="w-4 h-4 text-[#8295A8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white cursor-pointer font-medium"
                  >
                    {servicesList.map((srv, idx) => (
                      <option key={idx} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#031A3D] mb-1">
                  Estimated Budget
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 text-[#8295A8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white cursor-pointer font-medium"
                  >
                    {budgetRanges.map((bgt, idx) => (
                      <option key={idx} value={bgt}>{bgt}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Row 4: Message */}
            <div>
              <label className="block text-xs font-bold text-[#031A3D] mb-1">
                Your Message / Requirements
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your business requirements or any questions you have..."
                className="w-full p-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white transition-colors"
              />
            </div>

            <div className="pt-3 border-t border-[#DCEAF3] flex items-center justify-between gap-3">
              <a
                href={`https://wa.me/918505866668?text=${encodeURIComponent('Hello Groowth Mantra, I want to discuss a project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#25D366] hover:text-[#1da851] font-bold flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-bold text-xs shadow-lg shadow-[#078CCB]/25 flex items-center gap-2 cursor-pointer transition-all disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-white" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: CONFIRMED */}
        {step === 'confirmed' && (
          <div className="text-center py-6 space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="font-display text-2xl font-bold text-[#031A3D]">
                Message Sent Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto">
                Thank you, <strong>{formData.name || 'there'}</strong>! We have received your inquiry. Our team will get in touch with you at <strong>{formData.phone || formData.email}</strong> shortly.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/918505866668?text=${encodeURIComponent(`Hello Groowth Mantra, I just submitted an inquiry. Name: ${formData.name}, Phone: ${formData.phone}, Service: ${formData.service}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Fast-Track on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-[#07579D] text-white font-bold text-xs hover:bg-[#031A3D] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
