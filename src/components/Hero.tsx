import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/hero_cinematic_geometry_1791166969832.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenDemo: () => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onExploreSolutions }) => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const cornerTagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Timeline for high-impact initial entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Subtle scale-in of the background monolith
      tl.fromTo(
        imageRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1.02, opacity: 1, duration: 1.6, ease: 'expo.out' }
      );

      // Eyebrow reveal
      tl.fromTo(
        eyebrowRef.current,
        { y: -15, opacity: 0, letterSpacing: '0.1em' },
        { y: 0, opacity: 1, letterSpacing: '0.24em', duration: 0.8 },
        '-=1.2'
      );

      // Main Title split line reveal
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current.children,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 },
          '-=0.9'
        );
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );

      // Buttons
      tl.fromTo(
        buttonsRef.current,
        { y: 20, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 },
        '-=0.6'
      );

      // Scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        '-=0.4'
      );

      // Corner tags
      tl.fromTo(
        cornerTagsRef.current,
        { opacity: 0, x: 15 },
        { opacity: 1, x: 0, duration: 0.8 },
        '-=0.6'
      );

      // Parallax scroll effect on monolith image as user scrolls down
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 18,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-20 bg-[#0B0A0F] text-[#F5F7FA] overflow-hidden border-b border-white/[0.06]"
    >
      {/* Full-bleed atmospheric background: monolith seamlessly blends behind the letters */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Monólito escultural AUREVON TECHNOLOGY"
          referrerPolicy="no-referrer"
          className="absolute right-0 top-0 h-full w-full lg:w-[68%] object-cover object-center grayscale contrast-125 brightness-105 will-change-transform"
        />
        {/* Seamless horizontal gradient: black on the left behind text, bleeding into the image on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A0F] from-25% via-[#0B0A0F]/90 via-45% to-transparent" />
        {/* Bottom edge fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0A0F] to-transparent" />
        {/* Top edge fade under header */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0B0A0F] to-transparent opacity-80" />

        {/* Elegant luxury purple ambient backlights */}
        <div className="absolute top-1/4 right-[25%] w-[480px] h-[480px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-[10%] w-[320px] h-[320px] bg-purple-900/15 rounded-full blur-[110px] pointer-events-none" />
      </div>

      {/* Main Content Container directly overlaid on the atmosphere */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="max-w-2xl lg:max-w-xl flex flex-col justify-center">
          {/* Eyebrow */}
          <span
            ref={eyebrowRef}
            className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-sans font-medium uppercase text-[#C5C9D0] mb-4"
            style={{ letterSpacing: '0.24em' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.8)] inline-block" />
            TECNOLOGIA QUE IMPULSIONA EMPRESAS.
          </span>

          {/* Title (3 lines): TECNOLOGIA / QUE IMPULSIONA / O FUTURO. */}
          <h1
            ref={titleRef}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.4rem] uppercase tracking-tight text-white leading-[1.02] mb-6 drop-shadow-lg"
          >
            <span className="block">TECNOLOGIA</span>
            <span className="block">QUE IMPULSIONA</span>
            <span className="block text-metallic-purple drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]">O FUTURO.</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-sans text-sm sm:text-base text-[#C5C9D0] max-w-lg leading-relaxed mb-8 font-light drop-shadow-sm"
          >
            Transformamos desafios empresariais em soluções digitais inteligentes, conectando tecnologia, estratégia e crescimento.
          </p>

          {/* Dual Action Buttons (iOS style pill buttons with tactile feedback) */}
          <div ref={buttonsRef} className="flex flex-wrap items-center gap-3.5 mb-14">
            <button
              onClick={onExploreSolutions}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] text-xs font-semibold tracking-wider text-[#0B0A0F] bg-white hover:bg-[#F5F7FA] rounded-[10px] transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.25)] active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span>Conheça nossas soluções</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] text-xs font-medium tracking-wider text-white bg-white/[0.04] backdrop-blur-xl border border-white/20 hover:border-violet-400/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] rounded-[10px] transition-all hover:bg-white/10 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              <span>Solicite uma demonstração</span>
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <div ref={scrollIndicatorRef} className="flex items-center gap-3 text-xs text-[#C5C9D0] select-none">
            <div className="w-5 h-8 rounded-full border border-[#C5C9D0]/40 flex items-start justify-center p-1 bg-black/20 backdrop-blur-sm">
              <div className="w-1 h-2 rounded-full bg-violet-300 animate-bounce shadow-[0_0_6px_rgba(168,85,247,0.6)]" />
            </div>
            <span className="text-[11px] tracking-wider uppercase font-light">Role para explorar</span>
          </div>
        </div>
      </div>

      {/* Bottom Right Corner Pillar Labels directly overlaid on landscape */}
      <div
        ref={cornerTagsRef}
        className="absolute bottom-8 right-6 sm:right-8 z-10 hidden sm:flex flex-col items-end text-[10px] font-mono tracking-[0.25em] text-[#8E95A0] uppercase space-y-1 select-none pointer-events-none"
      >
        <span>INOVAÇÃO</span>
        <span>ESTRATÉGIA</span>
        <span>RESULTADOS</span>
      </div>
    </section>
  );
};
