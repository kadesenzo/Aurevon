import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InstitutionalSection } from './components/InstitutionalSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ProductsSection } from './components/ProductsSection';
import { SegmentsSection } from './components/SegmentsSection';
import { ProcessSection } from './components/ProcessSection';
import { DemoContactSection } from './components/DemoContactSection';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { ScrollProgress } from './components/ScrollProgress';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieBanner } from './components/CookieBanner';
import {
  SolutionModal,
  ProductModal,
  FastDemoModal,
  PrivacyModal,
  TermsModal,
  HistoryModal,
} from './components/Modals';
import {
  SOLUTIONS_DATA,
  PRODUCTS_DATA,
  SolutionItem,
  ProductItem,
} from './data/siteContent';

export default function App() {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoPreselectedProduct, setDemoPreselectedProduct] = useState<string>('');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const handleOpenDemo = (preselectedProduct?: string) => {
    if (preselectedProduct) {
      setDemoPreselectedProduct(preselectedProduct);
    } else {
      setDemoPreselectedProduct('');
    }
    setIsDemoModalOpen(true);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenSolutionById = (id: string) => {
    const sol = SOLUTIONS_DATA.find((s) => s.id === id);
    if (sol) {
      setSelectedSolution(sol);
    }
  };

  const handleOpenProductByName = (name: string) => {
    const prod = PRODUCTS_DATA.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    if (prod) {
      setSelectedProduct(prod);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0A0F] text-[#F5F7FA] selection:bg-white selection:text-[#0B0A0F] font-sans relative">
      {/* 0. Preloader */}
      <Preloader onComplete={() => {}} />

      {/* 1. Scroll Reading Progress Bar (1px Silver) */}
      <ScrollProgress />

      {/* 2. Header Navigation Bar */}
      <Header onOpenDemo={() => handleOpenDemo()} />

      <main>
        {/* 3. Hero Section (Black #0B0A0F) */}
        <Hero
          onOpenDemo={() => handleOpenDemo()}
          onExploreSolutions={() => handleScrollTo('solucoes')}
        />

        {/* 4. Section: Sobre a AUREVON (Light #F5F7FA) */}
        <InstitutionalSection
          onOpenHistory={() => setIsHistoryOpen(true)}
        />

        {/* 5. Section: Nossas Soluções (Black #0B0A0F) */}
        <SolutionsSection
          onSelectSolution={(solution) => setSelectedSolution(solution)}
        />

        {/* 6. Section: Conheça o Ecossistema AUREVON (Light #F5F7FA) */}
        <ProductsSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onExpressInterest={(productName) => handleOpenDemo(productName)}
          onViewAllProducts={() => handleScrollTo('produtos')}
        />

        {/* 7. Section: Uma Tecnologia. Diferentes Possibilidades. + Diferenciais (Black #0B0A0F) */}
        <SegmentsSection
          onSelectSegment={(segmentName) => handleOpenDemo(segmentName)}
          onExpressInterest={(segmentName) => handleOpenDemo(segmentName)}
        />

        {/* 8. Section: Da Ideia à Evolução - Processo (Light #F5F7FA) */}
        <ProcessSection />

        {/* 9. Section: Seu Próximo Passo Começa Aqui - CTA (Black #0B0A0F) */}
        <DemoContactSection onOpenDemoModal={() => handleOpenDemo()} />
      </main>

      {/* 10. Footer (Black #0B0A0F) */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenSolutionById={handleOpenSolutionById}
        onOpenProductByName={handleOpenProductByName}
        onNavigateTo={(href) => {
          const targetId = href.replace('#', '');
          handleScrollTo(targetId);
        }}
      />

      {/* 11. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 12. Discreet Cookie Banner */}
      <CookieBanner onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Interactive Modals */}
      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onRequestQuote={(solTitle) => handleOpenDemo(solTitle)}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onExpressInterest={(pName) => handleOpenDemo(pName)}
      />

      <FastDemoModal
        isOpen={isDemoModalOpen}
        preselectedProduct={demoPreselectedProduct}
        onClose={() => setIsDemoModalOpen(false)}
        onOpenPrivacy={() => {
          setIsDemoModalOpen(false);
          setIsPrivacyOpen(true);
        }}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
      />
    </div>
  );
}
