import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

export const CookieBanner: React.FC<{ onOpenPrivacy: () => void }> = ({ onOpenPrivacy }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('aurevon_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('aurevon_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('aurevon_cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Consentimento de privacidade e cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 p-5 rounded-2xl bg-[#0B0A0F]/95 backdrop-blur-md border border-[#C5C9D0]/20 shadow-2xl text-xs text-[#C5C9D0] animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3 mb-3">
        <Shield className="w-4 h-4 text-white shrink-0 mt-0.5" />
        <p className="leading-relaxed font-light">
          Utilizamos cookies essenciais para garantir o funcionamento técnico e a segurança da navegação, em respeito à sua privacidade.{' '}
          <button
            onClick={onOpenPrivacy}
            className="text-white underline hover:text-[#C5C9D0] focus:outline-none"
          >
            Saiba mais
          </button>
          .
        </p>
      </div>

      <div className="flex items-center gap-2 justify-end pt-2 border-t border-white/[0.08]">
        <button
          onClick={handleDecline}
          className="px-3.5 py-1.5 text-[11px] font-medium text-[#C5C9D0] hover:text-white transition-colors"
        >
          Apenas essenciais
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-1.5 text-[11px] font-semibold text-black bg-white rounded-lg hover:bg-[#F5F7FA] transition-colors"
        >
          Concordar
        </button>
      </div>
    </aside>
  );
};
