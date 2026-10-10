import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Shield, Target, Cpu, Sparkles } from 'lucide-react';
import healthImg from '../assets/images/segment_card_health_1791170271968.jpg';
import automotiveImg from '../assets/images/segment_card_automotive_1791170257462.jpg';
import constructionImg from '../assets/images/segment_card_construction_1791170283385.jpg';
import enterpriseImg from '../assets/images/segment_enterprise_synergy_1791167011438.jpg';
import { siteConfig } from '../site.config';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SegmentsSectionProps {
  onSelectSegment: (segmentName: string) => void;
  onExpressInterest: (segmentName: string) => void;
}

export const SegmentsSection: React.FC<SegmentsSectionProps> = ({
  onSelectSegment,
  onExpressInterest,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  const segments = [
    {
      id: 'saude',
      name: 'Saúde',
      image: healthImg,
      status: siteConfig.segmentStatus.saude,
      desc: 'Organização de processos, automações administrativas e ferramentas digitais seguras.',
    },
    {
      id: 'oficinas-automotivas',
      name: 'Oficinas automotivas',
      image: automotiveImg,
      status: siteConfig.segmentStatus.automotivo,
      desc: 'Controle de serviços, atendimento, agendamentos e processos operacionais.',
    },
    {
      id: 'construcao-civil',
      name: 'Construção civil',
      image: constructionImg,
      status: siteConfig.segmentStatus.construcao,
      desc: 'Organização de projetos, equipes, tarefas e indicadores de obra.',
    },
    {
      id: 'medio-porte',
      name: 'Empresa de médio porte',
      image: enterpriseImg,
      status: siteConfig.segmentStatus.medioPorte,
      desc: 'Automação, integração e digitalização de operações corporativas.',
    },
  ];

  const differentiators = [
    { text: 'Soluções reais para problemas reais', icon: Target },
    { text: 'Tecnologia alinhada aos seus objetivos', icon: Shield },
    { text: 'Processos mais organizados', icon: CheckCircle2 },
    { text: 'Personalização sob medida', icon: Cpu },
    { text: 'Foco em eficiência e evolução contínua', icon: Sparkles },
  ];

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );

      // Staggered cards entrance
      if (cardsGridRef.current) {
        gsap.fromTo(
          cardsGridRef.current.children,
          { y: 45, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsGridRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-28 bg-[#0B0A0F] text-[#F5F7FA] border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <span className="text-[11px] font-sans font-medium uppercase text-[#C5C9D0] tracking-[0.24em]">
              SEGMENTOS ATENDIDOS
            </span>
          </div>
          <h2 className="font-display font-extrabold text-xl sm:text-3xl uppercase tracking-tight text-white mb-2">
            UMA TECNOLOGIA. DIFERENTES POSSIBILIDADES.
          </h2>
          <p className="text-xs text-[#C5C9D0] font-light">
            Soluções adaptáveis a diferentes setores e desafios.
          </p>
        </div>

        {/* 5 Columns Layout (4 Segment Cards + 1 Highlight Card) */}
        <div ref={cardsGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* 4 Segment Cards */}
          {segments.map((seg) => (
            <div
              key={seg.id}
              className="flex flex-col justify-between rounded-[18px] overflow-hidden bg-[#121118]/80 backdrop-blur-xl border border-white/[0.1] hover:border-violet-500/40 transition-all duration-300 group hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_14px_35px_rgba(139,92,246,0.14)]"
            >
              {/* Image with cinematic treatment */}
              <div className="aspect-[16/10] overflow-hidden bg-[#16161c] relative">
                <img
                  src={seg.image}
                  alt={seg.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0F] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-1.5 group-hover:text-violet-200 transition-colors">
                    {seg.name}
                  </h3>

                  <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-wider uppercase text-violet-300 bg-violet-950/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-violet-500/30 mb-3 font-semibold shadow-[0_0_10px_rgba(168,85,247,0.12)]">
                    <span className="w-1 h-1 rounded-full bg-violet-400 animate-pulse" />
                    {seg.status}
                  </span>

                  <p className="text-[11px] text-[#C5C9D0] font-light leading-relaxed mb-4">
                    {seg.desc}
                  </p>
                </div>

                {/* Bottom Dual Links */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px]">
                  <button
                    onClick={() => onSelectSegment(seg.name)}
                    className="text-white hover:text-violet-200 flex items-center gap-1 transition-colors cursor-pointer py-1"
                  >
                    <span>Conhecer soluções</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>

                  <button
                    onClick={() => onExpressInterest(seg.name)}
                    className="text-[#C5C9D0] hover:text-white flex items-center gap-1 transition-colors cursor-pointer py-1 font-medium"
                  >
                    <span>Tenho interesse</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* 5th Card: FEITA PARA IMPULSIONAR RESULTADOS. (Luxury violet spotlight) */}
          <div className="rounded-[18px] p-5 bg-gradient-to-b from-[#1c142c]/95 via-[#131120]/95 to-[#0e0c16]/95 backdrop-blur-xl border border-violet-500/30 flex flex-col justify-between shadow-[0_12px_35px_rgba(139,92,246,0.15)] hover:border-violet-400/50 transition-all duration-300 group">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase text-violet-400 tracking-wider font-semibold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
                METODOLOGIA EXCLUSIVA
              </div>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-6 leading-snug">
                FEITA PARA<br />IMPULSIONAR<br /><span className="text-violet-300">RESULTADOS.</span>
              </h3>

              <div className="space-y-4">
                {differentiators.map((diff, idx) => {
                  const IconComp = diff.icon;
                  return (
                    <div key={idx} className="flex items-start gap-2.5 group/item">
                      <div className="w-6 h-6 rounded-full border border-violet-500/30 flex items-center justify-center shrink-0 mt-0.5 text-violet-300 bg-violet-950/40 group-hover/item:border-violet-400 group-hover/item:bg-violet-500/20 transition-all shadow-sm">
                        <IconComp className="w-3 h-3 stroke-[1.5]" />
                      </div>
                      <span className="text-[11px] text-[#C5C9D0] group-hover/item:text-white leading-tight font-light transition-colors">
                        {diff.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-violet-500/20 text-[9px] font-mono uppercase tracking-widest text-violet-400/80 flex items-center justify-between">
              <span>PADRÃO ENGENHARIA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
