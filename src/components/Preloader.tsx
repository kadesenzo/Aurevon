import React, { useEffect, useState } from 'react';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const hasLoaded = sessionStorage.getItem('aurevon_preloaded');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasLoaded || prefersReducedMotion) {
      setVisible(false);
      onComplete();
      return;
    }

    const timer1 = setTimeout(() => {
      setAnimatingOut(true);
    }, 1200);

    const timer2 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('aurevon_preloaded', 'true');
      onComplete();
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0B0A0F] flex flex-col items-center justify-center transition-all duration-500 ease-out select-none ${
        animatingOut ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Subtle luxury violet halo */}
        <div className="absolute -inset-10 bg-violet-600/15 rounded-full blur-2xl pointer-events-none animate-pulse" />

        {/* Animated official symbol drawing */}
        <svg
          viewBox="0 0 100 100"
          className="w-20 h-20 sm:w-24 sm:h-24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="preloader-metal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#C5C9D0" />
              <stop offset="100%" stopColor="#6B7280" />
            </linearGradient>
          </defs>

          {/* Facets of the official Aurevon Monogram */}
          <polygon
            points="46,14 18,84 34,84 53,38"
            stroke="#C5C9D0"
            strokeWidth="1.5"
            fill="url(#preloader-metal)"
            className="animate-pulse"
          />
          <polygon
            points="54,14 47,32 66,74 82,74"
            stroke="#C5C9D0"
            strokeWidth="1.5"
            fill="url(#preloader-metal)"
          />
          <polygon
            points="50,12 55,14 74,58 64,58"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            fill="#FFFFFF"
          />
        </svg>

        <div className="mt-6 flex flex-col items-center text-center">
          <span className="font-display font-bold text-sm tracking-[0.35em] text-white uppercase">
            AUREVON
          </span>
          <span className="font-sans text-[9px] tracking-[0.4em] text-[#C5C9D0] uppercase mt-1">
            TECHNOLOGY
          </span>
        </div>
      </div>
    </div>
  );
};
