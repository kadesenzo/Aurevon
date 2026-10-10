import React, { useState } from 'react';
import { FAQ_DATA } from '../data/siteContent';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-[#F8F9FA] text-[#080808] border-t border-[#E5E7EB] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs tracking-[0.35em] uppercase text-[#6B7280] font-mono block mb-3">
            08 · Dúvidas Frequentes & Diretrizes
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight leading-[1.05] [text-wrap:balance]">
            Perguntas frequentes.
          </h2>
          <p className="mt-4 text-base text-[#4B5563] font-light leading-relaxed">
            Respostas diretas sobre nosso modelo de trabalho, desenvolvimento de soluções e modalidades de contratação.
          </p>
        </div>

        {/* Accordion List in Clean Crisp Light Layout */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#E5E7EB] transition-all duration-200 overflow-hidden shadow-sm hover:border-black/30"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-6 focus:outline-none focus-visible:ring-1 focus-visible:ring-black"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-black">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-black text-white border-black'
                        : 'bg-[#F4F5F7] text-black border-[#D1D5DB]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#F3F4F6] animate-in fade-in-50 duration-200">
                    <p className="text-sm text-[#4B5563] font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
