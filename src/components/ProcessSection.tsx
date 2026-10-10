import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsGridRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: '01',
      title: 'Diagnóstico',
      desc: 'Entendimento das necessidades e dos desafios do cliente.',
    },
    {
      number: '02',
      title: 'Estratégia',
      desc: 'Planejamento da solução mais adequada.',
    },
    {
      number: '03',
      title: 'Desenvolvimento',
      desc: 'Construção, configuração e integração da solução.',
    },
    {
      number: '04',
      title: 'Implementação',
      desc: 'Testes, implantação e orientação para utilização.',
    },
    {
      number: '05',
      title: 'Evolução',
      desc: 'Acompanhamento, suporte e melhorias contínuas.',
    },
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

      // Staggered steps entrance
      if (stepsGridRef.current) {
        gsap.fromTo(
          stepsGridRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepsGridRef.current,
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
      className="py-24 bg-[#F5F7FA] text-[#0B0A0F] border-b border-[#E2E5EA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <span
            className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-sans font-medium uppercase text-[#6B7280] mb-2"
            style={{ letterSpacing: '0.24em' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 inline-block" />
            NOSSO PROCESSO
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-3xl uppercase tracking-tight text-[#0B0A0F]">
            DA IDEIA À EVOLUÇÃO.
          </h2>
        </div>

        {/* 5 Steps Row with Circles and Connecting Arrows */}
        <div ref={stepsGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-start">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col items-start pr-4 group">
              <div className="flex items-center gap-3 mb-4 w-full">
                {/* Number in circle (iOS style tactile badge with violet hover) */}
                <div className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center text-xs font-mono font-bold text-black shrink-0 bg-white shadow-sm group-hover:scale-110 group-hover:border-violet-600 group-hover:text-violet-700 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300">
                  {step.number}
                </div>

                {/* Arrow to next step */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex flex-1 items-center justify-center text-black/25 group-hover:text-violet-500/70 transition-colors">
                    <ArrowRight className="w-4 h-4 stroke-[1.25]" />
                  </div>
                )}
              </div>

              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#0B0A0F] mb-1.5 group-hover:text-violet-950 transition-colors">
                {step.title}
              </h3>

              <p className="text-[11px] text-[#525760] leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
