import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  User, 
  Mail, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  Download,
  Phone,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'datetime' | 'details' | 'confirmed'>('datetime');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow at 3:00 PM IST');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '₹25,000 – ₹50,000 / mo',
    goals: 'Scale profitable ROAS, build high-speed website & drive high-intent leads'
  });

  const availableSlots = [
    'Tomorrow at 11:30 AM IST',
    'Tomorrow at 3:00 PM IST',
    'Tomorrow at 5:30 PM IST',
    'Wednesday at 11:00 AM IST',
    'Wednesday at 4:00 PM IST',
    'Thursday at 2:30 PM IST',
    'Friday at 12:00 PM IST',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: '1-on-1 Growth Strategy Session',
          budget: formData.budget,
          message: `Slot: ${selectedDate} | Goals: ${formData.goals}`
        })
      });
    } catch (err) {
      console.warn('Booking log fallback');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#031A3D]/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border border-[#DCEAF3] rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#DCEAF3] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#031A3D]">
                Book 1-on-1 Growth Strategy Session
              </h3>
              <p className="text-xs text-[#8295A8]">
                30-Minute Growth Blueprint Review with our Senior Performance Director
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

        {/* STEP 1: DATE & TIME */}
        {step === 'datetime' && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] flex items-center gap-3 text-xs text-[#475569]">
              <ShieldCheck className="w-5 h-5 text-[#078CCB] flex-shrink-0" />
              <span>We limit new client intake to 3 brands per month to guarantee dedicated senior partner attention and high ROAS.</span>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#031A3D] mb-3">
                Select Strategy Session Slot (IST)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedDate(slot)}
                    className={`p-3.5 rounded-xl text-left text-xs font-semibold transition-all border flex items-center justify-between cursor-pointer ${
                      selectedDate === slot
                        ? 'bg-[#EAF5FB] border-[#078CCB] text-[#07579D] shadow-sm'
                        : 'bg-[#F5FAFD] border-[#DCEAF3] text-[#475569] hover:border-[#078CCB]/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#078CCB]" />
                      <span>{slot}</span>
                    </div>
                    {selectedDate === slot && (
                      <CheckCircle2 className="w-4 h-4 text-[#078CCB]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#DCEAF3] flex justify-end">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-bold text-xs shadow-lg shadow-[#078CCB]/25 flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>Continue to Brand Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: DETAILS */}
        {step === 'details' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3 rounded-xl bg-[#EAF5FB] border border-[#078CCB]/30 text-xs text-[#07579D] flex items-center justify-between">
              <span>Selected Slot: <strong>{selectedDate}</strong></span>
              <button
                type="button"
                onClick={() => setStep('datetime')}
                className="text-[11px] underline hover:text-[#031A3D] cursor-pointer"
              >
                Change
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#031A3D] mb-1">Your Full Name <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8295A8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Rahul Sharma"
                    className="w-full pl-9 pr-3 py-2 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#031A3D] mb-1">Work Email <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8295A8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@company.com"
                    className="w-full pl-9 pr-3 py-2 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#031A3D] mb-1">Company / Brand Name</label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-[#8295A8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Lumina Apparel"
                    className="w-full pl-9 pr-3 py-2 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#031A3D] mb-1">Phone / WhatsApp <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8295A8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-3 py-2 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#031A3D] mb-1">Estimated Monthly Marketing Budget (INR ₹)</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-3 py-2 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white cursor-pointer font-medium"
              >
                <option value="Under ₹15,000 / mo">Under ₹15,000 / mo (Starter Website / Local SEO)</option>
                <option value="₹15,000 – ₹35,000 / mo">₹15,000 – ₹35,000 / mo (Starter Growth Plan)</option>
                <option value="₹35,000 – ₹75,000 / mo">₹35,000 – ₹75,000 / mo (Standard Scale Plan)</option>
                <option value="₹75,000 – ₹2,00,000 / mo">₹75,000 – ₹2,00,000 / mo (Enterprise Omnichannel)</option>
                <option value="₹2,00,000+ / mo">₹2,00,000+ / mo (High Volume D2C & Global)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#031A3D] mb-1">Primary Growth Focus / Challenges</label>
              <textarea
                rows={2}
                value={formData.goals}
                onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                className="w-full p-2.5 bg-[#F5FAFD] border border-[#DCEAF3] rounded-xl text-[#031A3D] text-xs focus:outline-none focus:border-[#078CCB] focus:bg-white"
              />
            </div>

            <div className="pt-3 border-t border-[#DCEAF3] flex justify-between items-center">
              <button
                type="button"
                onClick={() => setStep('datetime')}
                className="text-xs text-[#8295A8] hover:text-[#031A3D] cursor-pointer"
              >
                Back
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-bold text-xs shadow-lg shadow-[#078CCB]/25 flex items-center gap-2 cursor-pointer transition-all disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Scheduling Call...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Confirm Strategy Session</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: CONFIRMED */}
        {step === 'confirmed' && (
          <div className="text-center py-6 space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="font-display text-2xl font-bold text-[#031A3D]">
                Strategy Session Confirmed!
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto">
                We've sent the Google Meet invite to <strong>{formData.email || 'your email'}</strong> for <strong>{selectedDate}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] max-w-md mx-auto text-left space-y-2 text-xs text-[#475569]">
              <div className="font-bold text-[#031A3D] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#078CCB]" />
                <span>What happens next:</span>
              </div>
              <ul className="list-disc pl-4 space-y-1">
                <li>Our senior strategist will conduct a pre-call analysis of your ad accounts and website.</li>
                <li>You will receive a custom 90-day scaling framework during the call.</li>
                <li>Questions beforehand? Message us directly on WhatsApp.</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/918505866668?text=${encodeURIComponent(`Hello Groowth Mantra, I just booked a strategy session for ${selectedDate}. Name: ${formData.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Notify via WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-[#07579D] text-white font-bold text-xs hover:bg-[#031A3D] transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
