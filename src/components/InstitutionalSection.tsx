import React, { useEffect, useRef } from 'react';
import institutionalImage from '../assets/images/institutional_evolution_1791166984697.jpg';
import { Target, Eye, Scale, Compass, Handshake, ArrowRight } from 'lucide-react';
import { siteConfig } from '../site.config';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface InstitutionalSectionProps {
  onOpenHistory?: () => void;
}

export const InstitutionalSection: React.FC<InstitutionalSectionProps> = ({ onOpenHistory }) => {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const items = [
    {
      title: 'Missão',
      desc: siteConfig.institutional.missao,
      icon: Target,
    },
    {
      title: 'Visão',
      desc: siteConfig.institutional.visao,
      icon: Eye,
    },
    {
      title: 'Valores',
      desc: siteConfig.institutional.valores,
      icon: Scale,
    },
    {
      title: 'Posicionamento',
      desc: siteConfig.institutional.posicionamento,
      icon: Compass,
    },
    {
      title: 'Compromisso',
      desc: siteConfig.institutional.compromisso,
      icon: Handshake,
    },
  ];

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Left Column entrance
      gsap.fromTo(
        leftColRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );

      // 5 Items staggered entrance
      if (itemsRef.current) {
        gsap.fromTo(
          itemsRef.current.children,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: itemsRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Skyscraper image reveal & parallax
      if (imageWrapperRef.current && imageRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: 'top 80%',
            },
          }
        );

        // Smooth vertical parallax on scroll
        gsap.to(imageRef.current, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="sobre-nos"
      className="py-28 bg-[#F5F7FA] text-[#0B0A0F] border-b border-[#E2E5EA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Brand Statement */}
          <div ref={leftColRef} className="lg:col-span-4 flex flex-col justify-start">
            <span
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-sans font-medium uppercase text-[#6B7280] mb-3"
              style={{ letterSpacing: '0.24em' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 inline-block" />
              SOBRE A AUREVON
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] uppercase tracking-tight text-[#0B0A0F] leading-[1.08] mb-6">
              MAIS DO QUE<br />
              TECNOLOGIA.<br />
              <span className="text-[#0B0A0F] hover:text-violet-950 transition-colors">EVOLUÇÃO.</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-8 font-light max-w-sm">
              A AUREVON TECHNOLOGY nasce com o propósito de ajudar empresas a evoluir por meio de soluções digitais, automação e inovação. Desenvolvemos tecnologia com foco em eficiência, organização e resultados.
            </p>

            <div>
              <button
                onClick={onOpenHistory}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] text-xs font-medium tracking-wider text-[#0B0A0F] bg-white border border-[#0B0A0F]/20 hover:border-violet-600 hover:text-violet-900 rounded-[10px] transition-all hover:bg-violet-50/50 active:scale-95 cursor-pointer shadow-sm"
              >
                <span>Conheça nossa história</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center Column: 5 Core Items */}
          <div ref={itemsRef} className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:px-4">
            {items.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center shrink-0 mt-0.5 text-black bg-white group-hover:border-violet-600 group-hover:text-violet-700 group-hover:bg-violet-50/80 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.18)] transition-all">
                    <IconComponent className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#0B0A0F] mb-1 group-hover:text-violet-950 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#525760] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Skyscraper Architectural Photo (iOS glass frame) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div
              ref={imageWrapperRef}
              className="w-full aspect-[3/4] rounded-[22px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-[#E2E5EA] bg-black relative group"
            >
              <img
                ref={imageRef}
                src={institutionalImage}
                alt="Fachada de edifício corporativo da AUREVON TECHNOLOGY"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-125 brightness-95 scale-105 will-change-transform transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono tracking-wider uppercase">
                <span>PADRÃO ARQUITETURAL · SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
