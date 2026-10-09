import React from 'react';

interface GroowthLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  isLightMode?: boolean;
}

export const GroowthLogo: React.FC<GroowthLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  isLightMode = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-8 h-8 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
    xl: 'w-16 h-16 sm:w-20 sm:h-20',
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const subSizes = {
    sm: 'text-[8px] sm:text-[9px] tracking-[0.2em]',
    md: 'text-[9px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]',
    xl: 'text-sm tracking-[0.35em]',
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none group cursor-pointer ${className}`}>
      {/* Visual Emblem Icon - Exactly matching official Groowth Mantra logo */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Outer Circular G Gradient */}
            <linearGradient id="gmCircleGradient" x1="20%" y1="10%" x2="80%" y2="90%">
              <stop offset="0%" stopColor="#09B5E5" />
              <stop offset="35%" stopColor="#078CCB" />
              <stop offset="70%" stopColor="#07579D" />
              <stop offset="100%" stopColor="#031A3D" />
            </linearGradient>

            {/* Sweeping Arrow Gradient */}
            <linearGradient id="gmArrowGradient" x1="10%" y1="80%" x2="90%" y2="20%">
              <stop offset="0%" stopColor="#078CCB" />
              <stop offset="40%" stopColor="#09B5E5" />
              <stop offset="100%" stopColor="#00C7FF" />
            </linearGradient>

            {/* Bar 1 Gradient */}
            <linearGradient id="gmBar1" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#031A3D" />
              <stop offset="100%" stopColor="#07579D" />
            </linearGradient>

            {/* Bar 2 Gradient */}
            <linearGradient id="gmBar2" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#07579D" />
              <stop offset="100%" stopColor="#078CCB" />
            </linearGradient>

            {/* Bar 3 Gradient */}
            <linearGradient id="gmBar3" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#078CCB" />
              <stop offset="100%" stopColor="#09B5E5" />
            </linearGradient>
          </defs>

          {/* Outer G Circular Arc */}
          <path
            d="M 60,10 C 28.5,10 10,31.5 10,60 C 10,88.5 28.5,110 60,110 C 88.5,110 104,91.5 107,70 L 76,70 L 76,84 C 73,88 67.5,92 60,92 C 42.5,92 28,78 28,60 C 28,42 42.5,28 60,28 C 72.5,28 82,34.5 88,43.5 L 102.5,31 C 93,18 78,10 60,10 Z"
            fill="url(#gmCircleGradient)"
          />

          {/* Bar 1 (Left / Short) */}
          <rect x="34" y="66" width="12" height="24" rx="2" fill="url(#gmBar1)" />

          {/* Bar 2 (Middle / Medium) */}
          <rect x="50" y="54" width="12" height="36" rx="2" fill="url(#gmBar2)" />

          {/* Bar 3 (Right / Tall) */}
          <rect x="66" y="40" width="12" height="50" rx="2" fill="url(#gmBar3)" />

          {/* G Leg / Crossbar */}
          <path
            d="M 76,70 L 107,70 L 107,88 C 100,98 89,105 76,108 L 76,88 Z"
            fill="#031A3D"
          />

          {/* Sweeping Dynamic Ascending Growth Arrow */}
          <path
            d="M 22,100 C 35,97 58,82 80,48 L 78,60 L 112,26 L 88,38 L 94,44 C 74,74 48,88 24,96 Z"
            fill="url(#gmArrowGradient)"
          />
          {/* Arrowhead Highlight */}
          <polygon points="112,26 88,38 96,46 112,26" fill="#09B5E5" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className={`font-display font-extrabold tracking-tight leading-none ${isLightMode ? 'text-[#031A3D]' : 'text-white'} ${textSizes[size]}`}>
          GR
          <span className="bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] bg-clip-text text-transparent">
            OO
          </span>
          WTH
        </div>
        
        {showTagline && (
          <div className="flex flex-col mt-0.5">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="h-[1px] w-2 sm:w-2.5 bg-[#078CCB]/60" />
              <span className={`font-display tracking-[0.25em] sm:tracking-[0.28em] text-[9px] sm:text-[10px] font-bold uppercase ${isLightMode ? 'text-[#07579D]' : 'text-[#09B5E5]'}`}>
                MANTRA
              </span>
              <span className="h-[1px] flex-grow bg-[#078CCB]/60" />
            </div>
            <div className={`font-sans font-medium uppercase mt-0.5 hidden xs:block ${isLightMode ? 'text-[#8295A8]' : 'text-slate-300'} ${subSizes[size]}`}>
              <span className="hover:text-[#078CCB] transition-colors">BUILD</span>
              <span className="mx-1 text-[#09B5E5]">•</span>
              <span className="hover:text-[#078CCB] transition-colors">BRAND</span>
              <span className="mx-1 text-[#09B5E5]">•</span>
              <span className="hover:text-[#078CCB] transition-colors">GROW</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

