import React, { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { AurevonLogo } from './AurevonLogo';
import { siteConfig } from '../site.config';
import { openWhatsApp } from '../utils/whatsapp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface DemoContactSectionProps {
  onOpenDemoModal: () => void;
}

export const DemoContactSection: React.FC<DemoContactSectionProps> = ({ onOpenDemoModal }) => {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const centerColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const handleWhatsAppRedirect = () => {
    openWhatsApp(
      'Olá! Gostaria de conversar com um especialista da AUREVON TECHNOLOGY sobre soluções para a minha empresa.'
    );
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        centerColRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        rightColRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="demonstracao"
      className="py-24 bg-[#0B0A0F] text-[#F5F7FA] border-b border-white/[0.06] overflow-hidden relative"
    >
      {/* Luxury purple ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-purple-900/12 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Big Title */}
          <div ref={leftColRef} className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <span className="text-[11px] font-sans font-medium uppercase text-[#C5C9D0] tracking-[0.24em]">
                ATENDIMENTO CORPORATIVO
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
              SEU PRÓXIMO PASSO<br /><span className="text-metallic-purple">COMEÇA AQUI.</span>
            </h2>
          </div>

          {/* Center Column: Text & Buttons */}
          <div ref={centerColRef} className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <p className="text-xs sm:text-sm text-[#C5C9D0] font-light leading-relaxed max-w-md">
              Vamos entender os desafios da sua empresa e explorar como a tecnologia pode ajudar a transformar seus processos.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] text-xs font-semibold tracking-wider text-[#0B0A0F] bg-white rounded-[10px] hover:bg-[#F5F7FA] transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] active:scale-95 cursor-pointer"
              >
                <span>Solicitar demonstração</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleWhatsAppRedirect}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] text-xs font-medium tracking-wider text-white bg-white/[0.04] backdrop-blur-xl border border-white/20 hover:border-emerald-400 rounded-[10px] transition-all hover:bg-white/10 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Falar pelo WhatsApp</span>
              </button>
            </div>

            {/* Direct Gmail contact */}
            <div className="pt-1 flex items-center gap-2 text-xs">
              <span className="text-[#6B7280]">E-mail oficial:</span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-1.5 text-violet-300 hover:text-white font-mono transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-violet-400 group-hover:scale-110 transition-transform" />
                <span className="underline decoration-violet-500/40 underline-offset-4">{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Brand Lockup with Slogan */}
          <div
            ref={rightColRef}
            className="lg:col-span-3 flex flex-col items-start lg:items-end justify-center text-left lg:text-right pt-6 lg:pt-0 border-t lg:border-t-0 border-white/[0.08]"
          >
            <AurevonLogo size="md" />
            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#6B7280] mt-3">
              {siteConfig.slogan}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
