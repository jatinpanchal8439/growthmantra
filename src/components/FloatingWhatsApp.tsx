import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '918505866668',
  defaultMessage = 'Hello Groowth Mantra,\nI am interested in your digital marketing/web development services.\nPlease share more details.'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* Tooltip on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#031A3D] text-white px-3.5 py-2 rounded-2xl shadow-xl border border-[#078CCB]/40 text-xs animate-fade-in relative">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span className="font-medium text-slate-200">
            Chat on <strong className="text-white">WhatsApp</strong>
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          {/* Arrow */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-[#031A3D] hidden" />
        </div>
      )}

      {/* Floating Button with WhatsApp SVG & Pulse ring */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat with Groowth Mantra on WhatsApp"
        id="floating-whatsapp-btn"
      >
        {/* Pulse rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping pointer-events-none" />
        <span className="absolute -inset-2 rounded-full bg-[#25D366] opacity-15 pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.201-.351.226-.652.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.15-.176.2-.301.301-.502.1-.201.05-.376-.025-.526s-.677-1.632-.928-2.235c-.244-.588-.492-.508-.677-.518-.175-.008-.376-.01-.576-.01s-.527.075-.802.376c-.276.301-1.054 1.03-1.054 2.512s1.079 2.913 1.23 3.114c.15.201 2.124 3.243 5.145 4.548.718.311 1.278.497 1.716.637.721.23 1.377.197 1.896.12.578-.087 1.78-.728 2.03-1.431.25-.703.25-1.306.175-1.431-.075-.125-.276-.201-.577-.351zm-5.467 7.423c-1.848 0-3.655-.497-5.241-1.442l-.376-.223-3.896 1.022 1.04-3.797-.245-.39a9.63 9.63 0 0 1-1.479-5.163c0-5.352 4.356-9.708 9.71-9.708 2.593 0 5.031 1.01 6.865 2.846a9.66 9.66 0 0 1 2.843 6.861c0 5.354-4.357 9.71-9.712 9.71zm8.384-18.093A11.758 11.758 0 0 0 12.005 0C5.385 0 0 5.385 0 12.005c0 2.112.551 4.175 1.597 5.99L0 24l6.183-1.623a11.96 11.96 0 0 0 5.822 1.503h.005c6.619 0 12.005-5.386 12.005-12.006 0-3.208-1.25-6.223-3.52-8.493z" />
        </svg>

        {/* Online Indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#09B5E5] border-2 border-white shadow-xs" />
      </a>
    </div>
  );
};
