import React from 'react';
import { DIFFERENTIATORS_DATA } from '../data/siteContent';

export const DifferentiatorsSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#FFFFFF] text-[#080808] border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs tracking-[0.35em] uppercase text-[#6B7280] font-mono block mb-3">
            05 · Princípios & Rigor Técnico
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#080808] uppercase tracking-tight leading-[1.05] [text-wrap:balance]">
            Feita para impulsionar resultados.
          </h2>
          <p className="mt-6 text-base text-[#4B5563] font-light leading-relaxed">
            Priorizamos soluções pragmáticas que se integram à rotina da sua equipe, eliminando a burocracia técnica e focando naquilo que verdadeiramente impulsiona a empresa.
          </p>
        </div>

        {/* 6 Differentiators Grid in Architectural White with Sharp Black Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIATORS_DATA.map((diff) => (
            <div
              key={diff.number}
              className="p-8 rounded-3xl bg-[#F9FAFB] border border-[#E5E7EB] hover:border-black transition-all duration-300 relative flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <span className="font-mono text-sm text-[#9CA3AF] group-hover:text-black font-bold block mb-4 transition-colors">
                  [{diff.number}]
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-black mb-3">
                  {diff.title}
                </h3>
                <p className="text-sm text-[#4B5563] font-light leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-[10px] text-[#9CA3AF] font-mono font-medium">
                <span>PADRÃO ENGENHARIA</span>
                <span className="text-black uppercase">CONFORMIDADE TOTAL</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
