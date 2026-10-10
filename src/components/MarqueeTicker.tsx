import React from 'react';

interface MarqueeTickerProps {
  theme?: 'dark' | 'light';
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ theme = 'dark' }) => {
  const words = [
    'AUREVON TECHNOLOGY',
    'TECNOLOGIA QUE IMPULSIONA EMPRESAS',
    'DESENVOLVIMENTO SOB MEDIDA',
    'AUTOMAÇÃO DE PROCESSOS',
    'INTELIGÊNCIA ARTIFICIAL',
    'ARQUITETURA CORPORATIVA',
    'CONFIABILIDADE & LGPD',
  ];

  const isLight = theme === 'light';

  return (
    <div
      className={`w-full overflow-hidden py-4 border-y select-none ${
        isLight
          ? 'bg-[#F4F5F7] border-[#E0E2E7] text-[#111111]'
          : 'bg-[#0a0a0a] border-[#181818] text-[#888888]'
      }`}
    >
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-mono text-xs uppercase tracking-[0.3em]">
        {[...words, ...words].map((word, i) => (
          <div key={i} className="inline-flex items-center gap-8 shrink-0">
            <span className={isLight ? 'font-semibold text-black' : 'hover:text-white transition-colors'}>
              {word}
            </span>
            <span className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-black' : 'bg-white/40'}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
