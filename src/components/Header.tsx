import React, { useState, useEffect } from 'react';
import { AurevonLogo } from './AurevonLogo';
import { Menu, X, MessageCircle, Mail } from 'lucide-react';
import { siteConfig } from '../site.config';
import { openWhatsApp } from '../utils/whatsapp';

interface HeaderProps {
  onOpenDemo: (preselectedProduct?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const [activeNav, setActiveNav] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-nos', 'solucoes', 'produtos', 'demonstracao'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Soluções', href: '#solucoes', id: 'solucoes' },
    { label: 'Produtos', href: '#produtos', id: 'produtos' },
    { label: 'Sobre nós', href: '#sobre-nos', id: 'sobre-nos' },
    { label: 'Contato', href: '#demonstracao', id: 'demonstracao' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveNav(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0A0F]/80 backdrop-blur-2xl border-b border-white/[0.08] py-4 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio', 'inicio')}
          className="flex items-center focus:outline-none cursor-pointer"
          aria-label="AUREVON TECHNOLOGY"
        >
          <AurevonLogo size="sm" />
        </a>

        {/* Center: Nav links with clean active state matching mockup */}
        <nav
          className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase font-medium"
          aria-label="Navegação Principal"
        >
          {navLinks.map((link) => {
            const isActive = activeNav === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-white' : 'text-[#8E9299] hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-[1.5px] bg-gradient-to-r from-violet-400 via-[#C5C9D0] to-violet-300 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.7)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Rounded Outline Pill Button matching Mockup (iOS glass) + WhatsApp */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={() => onOpenDemo()}
            className="px-5 py-2 min-h-[40px] text-xs font-medium tracking-wider text-white bg-white/[0.04] backdrop-blur-xl border border-white/30 hover:border-violet-400/80 hover:shadow-[0_0_18px_rgba(168,85,247,0.25)] rounded-full transition-all duration-200 hover:bg-white/10 active:scale-95 cursor-pointer"
          >
            Fale com um especialista
          </button>

          <button
            onClick={() => openWhatsApp('Olá! Gostaria de conversar com a AUREVON TECHNOLOGY.')}
            aria-label="Falar pelo WhatsApp (11) 93354-8568"
            title="WhatsApp: (11) 93354-8568"
            className="p-2 min-h-[40px] min-w-[40px] rounded-full bg-white/[0.04] border border-white/20 hover:border-emerald-400 text-[#C5C9D0] hover:text-emerald-400 transition-all flex items-center justify-center hover:bg-emerald-500/10 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#A8ADB4] hover:text-white"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#080808]/98 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.id)}
              className="py-2 text-sm uppercase tracking-wider text-white border-b border-white/[0.05]"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemo();
            }}
            className="w-full mt-2 py-3 text-xs uppercase tracking-wider font-semibold text-black bg-white rounded-full cursor-pointer"
          >
            Fale com um especialista
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openWhatsApp('Olá! Gostaria de falar com a AUREVON TECHNOLOGY.');
            }}
            className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-white bg-emerald-600/90 hover:bg-emerald-600 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp {siteConfig.contact.whatsappShort}</span>
          </button>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="w-full py-2.5 text-xs tracking-wider text-violet-300 bg-violet-950/40 border border-violet-500/30 rounded-full flex items-center justify-center gap-2 font-mono hover:bg-violet-900/40 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-violet-400" />
            <span>{siteConfig.contact.email}</span>
          </a>
        </div>
      )}
    </header>
  );
};
