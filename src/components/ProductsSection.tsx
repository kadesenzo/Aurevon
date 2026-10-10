import React, { useEffect, useRef } from 'react';
import { PRODUCTS_DATA, ProductItem } from '../data/siteContent';
import { ArrowRight } from 'lucide-react';
import flowImg from '../assets/images/product_card_flow_1791170223530.jpg';
import connectImg from '../assets/images/product_card_connect_1791170236073.jpg';
import automateImg from '../assets/images/product_card_automate_1791170247541.jpg';
import insightImg from '../assets/images/product_ecosystem_abstract_1791166997210.jpg';
import customImg from '../assets/images/segment_enterprise_synergy_1791167011438.jpg';
import { siteConfig } from '../site.config';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onExpressInterest: (productName: string) => void;
  onViewAllProducts: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onExpressInterest,
  onViewAllProducts,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  const getProductImage = (id: string) => {
    switch (id) {
      case 'aurevon-flow':
        return flowImg;
      case 'aurevon-connect':
        return connectImg;
      case 'aurevon-automate':
        return automateImg;
      case 'aurevon-insight':
        return insightImg;
      case 'aurevon-custom':
        return customImg;
      default:
        return flowImg;
    }
  };

  const getStatusText = (id: string) => {
    switch (id) {
      case 'aurevon-flow':
        return siteConfig.productStatus.flow;
      case 'aurevon-connect':
        return siteConfig.productStatus.connect;
      case 'aurevon-automate':
        return siteConfig.productStatus.automate;
      case 'aurevon-insight':
        return siteConfig.productStatus.insight;
      case 'aurevon-custom':
        return siteConfig.productStatus.custom;
      default:
        return 'PLANEJADO';
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

      // Staggered products entrance
      if (cardsGridRef.current) {
        gsap.fromTo(
          cardsGridRef.current.children,
          { y: 50, opacity: 0, scale: 0.95 },
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
      id="produtos"
      className="py-28 bg-[#F5F7FA] text-[#0B0A0F] border-b border-[#E2E5EA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-5">
            <span
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-sans font-medium uppercase text-[#6B7280] mb-2"
              style={{ letterSpacing: '0.24em' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 inline-block" />
              CONHEÇA O ECOSSISTEMA AUREVON
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight text-[#0B0A0F] leading-tight">
              SISTEMAS PLANEJADOS<br />PARA O SEU CRESCIMENTO.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs text-[#525760] leading-relaxed font-light">
              Uma linha de produtos em constante evolução, com foco em produtividade, organização e inteligência para o seu negócio.
            </p>
          </div>

          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <button
              onClick={onViewAllProducts}
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] text-xs font-medium tracking-wider text-[#0B0A0F] bg-white border border-[#0B0A0F]/20 hover:border-[#0B0A0F] rounded-[10px] transition-all hover:bg-black/5 cursor-pointer shadow-sm active:scale-95"
            >
              <span>Ver todos os produtos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5 Product Cards (iOS glass shell with high-contrast cinematic image headers) */}
        <div ref={cardsGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between rounded-[18px] overflow-hidden bg-[#0B0A0F] text-[#F5F7FA] border border-white/[0.12] shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:border-violet-500/40 hover:shadow-[0_14px_35px_rgba(139,92,246,0.16)] transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Card Image with cinematic treatment */}
              <div className="aspect-[16/10] overflow-hidden bg-[#16161c] relative">
                <img
                  src={getProductImage(product.id)}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0F] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-1.5 group-hover:text-violet-200 transition-colors">
                    {product.name}
                  </h3>

                  {/* Status Tag with elegant violet glow */}
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-wider uppercase text-violet-300 bg-violet-950/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-violet-500/30 mb-3 font-semibold shadow-[0_0_10px_rgba(168,85,247,0.12)]">
                    <span className="w-1 h-1 rounded-full bg-violet-400 animate-pulse" />
                    {getStatusText(product.id)}
                  </span>

                  <p className="text-[11px] text-[#C5C9D0] font-light leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                {/* Bottom Dual Links */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px]">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="text-white hover:text-[#C5C9D0] flex items-center gap-1 transition-colors cursor-pointer py-1"
                  >
                    <span>Conhecer produto</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>

                  <button
                    onClick={() => onExpressInterest(product.name)}
                    className="text-[#C5C9D0] hover:text-white flex items-center gap-1 transition-colors cursor-pointer py-1 font-medium"
                  >
                    <span>Tenho interesse</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
