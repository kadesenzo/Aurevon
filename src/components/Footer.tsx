import React from 'react';
import { AurevonLogo } from './AurevonLogo';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../site.config';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenSolutionById: (id: string) => void;
  onOpenProductByName: (name: string) => void;
  onNavigateTo: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenSolutionById,
  onOpenProductByName,
  onNavigateTo,
}) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Sobre nós', href: '#sobre-nos' },
    { label: 'Contato', href: '#demonstracao' },
  ];

  const products = [
    'Aurevon Flow',
    'Aurevon Connect',
    'Aurevon Automate',
    'Aurevon Insight',
    'Aurevon Custom',
  ];

  const solutions = [
    { id: 'desenvolvimento-software', label: 'Desenvolvimento de software' },
    { id: 'automacao-empresarial', label: 'Automação empresarial' },
    { id: 'inteligencia-artificial', label: 'Inteligência artificial' },
    { id: 'dados-business-intelligence', label: 'Dados e inteligência de negócios' },
    { id: 'integracao-tecnologica', label: 'Integração tecnológica' },
    { id: 'manutencao-suporte', label: 'Manutenção e suporte' },
  ];

  return (
    <footer className="bg-[#0B0A0F] text-[#C5C9D0] pt-16 pb-12 text-xs border-t border-white/[0.06] relative overflow-hidden">
      {/* Luxury purple ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[250px] bg-purple-900/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* 5 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.08]">
          {/* Col 1: Brand Lockup */}
          <div className="flex flex-col justify-start">
            <AurevonLogo size="sm" />
            <p className="text-[11px] font-mono tracking-wider uppercase text-[#6B7280] mt-3">
              {siteConfig.slogan}
            </p>
          </div>

          {/* Col 2: Navegação */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigateTo(item.href)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Produtos */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">
              Produtos
            </h4>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => onOpenProductByName(p)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Soluções */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">
              Soluções
            </h4>
            <ul className="space-y-2.5">
              {solutions.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onOpenSolutionById(item.id)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Siga-nos & Fale conosco */}
          <div className="space-y-6">
            <div>
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-3">
                Siga-nos
              </h4>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#C5C9D0] hover:text-white transition-colors font-mono"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{siteConfig.contact.instagramHandle}</span>
              </a>
            </div>

            <div>
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-3">
                Fale conosco
              </h4>
              <div className="space-y-2.5">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors font-mono group"
                  aria-label="E-mail / Gmail oficial"
                >
                  <Mail className="w-3.5 h-3.5 text-violet-400 group-hover:scale-110 transition-transform" />
                  <span className="text-violet-200 group-hover:text-white transition-colors">{siteConfig.contact.email}</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    'Olá! Gostaria de conversar com a equipe da AUREVON TECHNOLOGY.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors font-mono group"
                  aria-label="WhatsApp da AUREVON TECHNOLOGY"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[#C5C9D0] group-hover:text-white">{siteConfig.contact.whatsappFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B7280]">
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de privacidade
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de uso
            </button>
          </div>

          <p className="font-mono">
            © {currentYear} AUREVON TECHNOLOGY. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
