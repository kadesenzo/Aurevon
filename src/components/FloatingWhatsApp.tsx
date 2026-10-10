import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../site.config';
import { openWhatsApp } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2 pulse cycles max per visit
    const pulseCountKey = 'aurevon_wa_pulses';
    const currentPulses = parseInt(sessionStorage.getItem(pulseCountKey) || '0', 10);

    if (currentPulses < 2) {
      const interval = setInterval(() => {
        setPulse(true);
        setTimeout(() => setPulse(false), 2000);
        const next = currentPulses + 1;
        sessionStorage.setItem(pulseCountKey, next.toString());
        if (next >= 2) clearInterval(interval);
      }, 12000);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearInterval(interval);
      };
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    openWhatsApp(
      'Olá! Gostaria de falar com um especialista da AUREVON TECHNOLOGY sobre soluções para minha empresa.'
    );
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Discreet pill badge on hover / desktop */}
      <button
        onClick={handleClick}
        className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0B0A0F]/90 backdrop-blur-xl border border-white/20 text-white text-xs font-mono shadow-2xl hover:border-white transition-all cursor-pointer group"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[#C5C9D0] group-hover:text-white transition-colors">
          WhatsApp: {siteConfig.contact.whatsappShort}
        </span>
      </button>

      <button
        onClick={handleClick}
        aria-label={`Falar pelo WhatsApp ${siteConfig.contact.whatsappShort}`}
        className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0B0A0F] border border-[#C5C9D0]/30 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:border-white hover:bg-black/90 active:scale-95 group cursor-pointer ${
          pulse ? 'ring-4 ring-emerald-400/40 animate-pulse' : ''
        }`}
      >
        <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0B0A0F]" />
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5C9D0] group-hover:text-emerald-400 transition-colors" />
        <span className="sr-only">Falar pelo WhatsApp</span>
      </button>
    </div>
  );
};
