import React, { useEffect, useRef } from 'react';
import { SOLUTIONS_DATA, SolutionItem } from '../data/siteContent';
import { Terminal, Cpu, Sparkles, BarChart2, Network, ShieldCheck, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SolutionsSectionProps {
  onSelectSolution: (solution: SolutionItem) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'desenvolvimento-software':
        return <Terminal className="w-4 h-4 stroke-[1.25]" />;
      case 'automacao-empresarial':
        return <Cpu className="w-4 h-4 stroke-[1.25]" />;
      case 'inteligencia-artificial':
        return <Sparkles className="w-4 h-4 stroke-[1.25]" />;
      case 'dados-business-intelligence':
        return <BarChart2 className="w-4 h-4 stroke-[1.25]" />;
      case 'integracao-tecnologica':
        return <Network className="w-4 h-4 stroke-[1.25]" />;
      case 'manutencao-suporte':
        return <ShieldCheck className="w-4 h-4 stroke-[1.25]" />;
      default:
        return <Terminal className="w-4 h-4 stroke-[1.25]" />;
    }
  };

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
            duration: 0.7,
            stagger: 0.08,
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
      id="solucoes"
      className="py-28 bg-[#0B0A0F] text-[#F5F7FA] border-b border-white/[0.06] relative overflow-hidden"
    >
      {/* Ambient luxury purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-purple-900/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-sans font-medium uppercase text-[#C5C9D0] mb-2"
              style={{ letterSpacing: '0.24em' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              NOSSAS SOLUÇÕES
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
              TECNOLOGIA PARA<br />DESAFIOS REAIS.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#C5C9D0] leading-relaxed font-light md:text-right">
            Soluções completas para empresas que buscam mais eficiência, organização e resultados.
          </p>
        </div>

        {/* 6 Cards in a row (iOS glassmorphic containers) */}
        <div ref={cardsGridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SOLUTIONS_DATA.map((solution) => (
            <div
              key={solution.id}
              className="flex flex-col justify-between p-5 rounded-[16px] bg-[#121118]/70 backdrop-blur-xl border border-white/[0.09] hover:border-violet-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_35px_rgba(139,92,246,0.18)] cursor-pointer"
              onClick={() => onSelectSolution(solution)}
            >
              <div>
                {/* Thin outline icon with violet hover glow */}
                <div className="w-10 h-10 rounded-full border border-[#C5C9D0]/30 flex items-center justify-center text-[#C5C9D0] mb-6 group-hover:border-violet-400 group-hover:text-violet-300 group-hover:bg-violet-500/15 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all shadow-sm">
                  {getIcon(solution.id)}
                </div>

                {/* Title */}
                <h3 className="font-display text-sm font-bold text-white mb-2 leading-snug group-hover:text-white transition-colors">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] text-[#C5C9D0] leading-relaxed font-light mb-6">
                  {solution.shortDescription}
                </p>
              </div>

              {/* Link */}
              <div className="pt-3 border-t border-white/[0.06]">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#C5C9D0] group-hover:text-violet-300 transition-colors cursor-pointer"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
