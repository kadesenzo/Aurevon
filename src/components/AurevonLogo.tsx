import React from 'react';

interface AurevonLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'monochrome' | 'metallic';
}

export const AurevonLogo: React.FC<AurevonLogoProps> = ({
  className = '',
  showWordmark = true,
  size = 'md',
  variant = 'metallic',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const wordmarkSizes = {
    sm: 'text-sm tracking-[0.25em]',
    md: 'text-base tracking-[0.3em]',
    lg: 'text-xl tracking-[0.35em]',
    xl: 'text-2xl tracking-[0.4em]',
  };

  const subtitleSizes = {
    sm: 'text-[8px] tracking-[0.3em]',
    md: 'text-[9px] tracking-[0.35em]',
    lg: 'text-[11px] tracking-[0.4em]',
    xl: 'text-[13px] tracking-[0.45em]',
  };

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Aurevon Stylized "A" Monogram */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} shrink-0 transition-transform duration-300 hover:scale-105`}
        aria-label="Aurevon Logo Icon"
      >
        <defs>
          <linearGradient id="aurevon-metal-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#C5C9D0" />
            <stop offset="100%" stopColor="#7E8590" />
          </linearGradient>
          <linearGradient id="aurevon-metal-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E9ECEF" />
            <stop offset="60%" stopColor="#9CA3AF" />
            <stop offset="100%" stopColor="#4B5563" />
          </linearGradient>
          <linearGradient id="aurevon-metal-dark" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A505A" />
            <stop offset="100%" stopColor="#8C93A0" />
          </linearGradient>
        </defs>

        {/* Left facet / wing */}
        <polygon
          points="46,14 18,84 34,84 53,38"
          fill={variant === 'metallic' ? 'url(#aurevon-metal-1)' : '#FFFFFF'}
        />

        {/* Left lower geometric bevel */}
        <polygon
          points="18,84 30,55 38,72 34,84"
          fill={variant === 'metallic' ? 'url(#aurevon-metal-dark)' : '#A8ADB4'}
        />

        {/* Right diagonal main facet */}
        <polygon
          points="54,14 47,32 66,74 82,74"
          fill={variant === 'metallic' ? 'url(#aurevon-metal-2)' : '#E9E9E9'}
        />

        {/* Dynamic center apex & crossbeam facet */}
        <polygon
          points="50,12 55,14 74,58 64,58"
          fill={variant === 'metallic' ? 'url(#aurevon-metal-1)' : '#FFFFFF'}
        />

        {/* Angular base accent wedge */}
        <polygon
          points="62,64 78,84 88,84 72,64"
          fill={variant === 'metallic' ? 'url(#aurevon-metal-dark)' : '#A8ADB4'}
        />
      </svg>

      {/* Brand Typography Lockup */}
      {showWordmark && (
        <div className="flex flex-col justify-center text-left leading-none">
          <span
            className={`font-display font-extrabold text-white uppercase ${wordmarkSizes[size]} transition-colors group-hover:text-[#A8ADB4]`}
            style={{ letterSpacing: '0.28em' }}
          >
            AUREVON
          </span>
          <span
            className={`font-sans font-medium text-[#A8ADB4] uppercase mt-1 ${subtitleSizes[size]}`}
            style={{ letterSpacing: '0.36em' }}
          >
            TECHNOLOGY
          </span>
        </div>
      )}
    </div>
  );
};
