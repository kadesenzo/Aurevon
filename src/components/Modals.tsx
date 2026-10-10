import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, FileText, Send, Sparkles, MessageCircle, Mail } from 'lucide-react';
import { SolutionItem, ProductItem } from '../data/siteContent';
import { siteConfig } from '../site.config';
import {
  openWhatsApp,
  getSolutionWhatsAppMessage,
  getProductWhatsAppMessage,
  getLeadWhatsAppMessage,
} from '../utils/whatsapp';

interface SolutionModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onRequestQuote: (solutionTitle: string) => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({
  solution,
  onClose,
  onRequestQuote,
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0B0A0F] border border-[#C5C9D0]/30 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-[#C5C9D0] hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5C9D0] mb-3">
          <span>Serviço Corporativo</span>
          <span aria-hidden="true">·</span>
          <span>AUREVON TECHNOLOGY</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-4">
          {solution.title}
        </h3>

        <p className="text-sm sm:text-base text-[#C5C9D0] font-light leading-relaxed mb-8">
          {solution.fullDescription}
        </p>

        {/* Como Ajudamos & Capacidades */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
            O Que Entregamos:
          </h4>
          <div className="space-y-2">
            {solution.capabilities.map((cap, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C5C9D0]">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Entregáveis */}
        <div className="mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-white mb-2">
            Padrão de Qualidade & Processo:
          </h4>
          <div className="space-y-1.5">
            {solution.deliverables.map((del, i) => (
              <p key={i} className="text-xs text-[#C5C9D0] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>{del}</span>
              </p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onRequestQuote(solution.title);
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 min-h-[46px] text-xs font-semibold uppercase tracking-wider text-[#0B0A0F] bg-white hover:bg-[#F5F7FA] rounded-[8px] transition-colors cursor-pointer"
          >
            <span>Solicitar proposta técnica</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => {
              openWhatsApp(getSolutionWhatsAppMessage(solution.title));
            }}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-5 min-h-[46px] text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600/90 hover:bg-emerald-600 rounded-[8px] transition-all cursor-pointer border border-emerald-500/40 shadow-lg active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onExpressInterest: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onExpressInterest,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0B0A0F] border border-[#C5C9D0]/30 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-[#C5C9D0] hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] font-mono tracking-wider uppercase text-white bg-white/15 px-2.5 py-0.5 rounded-[4px] border border-white/20">
            {product.status}
          </span>
          <span className="text-xs font-mono text-[#C5C9D0]">Ecossistema AUREVON</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-2">
          {product.name}
        </h3>

        <p className="text-xs uppercase tracking-wider text-[#C5C9D0] font-medium mb-6">
          {product.headline}
        </p>

        <p className="text-sm text-[#C5C9D0] font-light leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Note on Roadmap */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-[#C5C9D0] mb-6">
          <strong className="text-white block mb-1">Status do Conceito:</strong>
          {product.previewNote}
        </div>

        {/* Benefícios */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
            Funcionalidades e Benefícios Previstos:
          </h4>
          <div className="space-y-2">
            {product.expectedBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#C5C9D0]">
                <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onExpressInterest(product.name);
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 min-h-[46px] text-xs font-semibold uppercase tracking-wider text-[#0B0A0F] bg-white hover:bg-[#F5F7FA] rounded-[8px] transition-colors cursor-pointer"
          >
            <span>Lista de Interesse</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => {
              openWhatsApp(getProductWhatsAppMessage(product.name));
            }}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-5 min-h-[46px] text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600/90 hover:bg-emerald-600 rounded-[8px] transition-all cursor-pointer border border-emerald-500/40 shadow-lg active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface FastDemoModalProps {
  isOpen: boolean;
  preselectedProduct?: string;
  onClose: () => void;
  onOpenPrivacy: () => void;
}

export const FastDemoModal: React.FC<FastDemoModalProps> = ({
  isOpen,
  preselectedProduct = '',
  onClose,
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    segmento: 'Empresas de médio porte',
    solucao: preselectedProduct || 'Desenvolvimento de Software',
    necessidade: '',
    horario: 'Manhã (09h - 12h)',
    consentimentoLGPD: false,
    honeypot: '', // anti-spam field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.nome.trim()) errs.nome = 'Nome é obrigatório';
    if (!formData.empresa.trim()) errs.empresa = 'Empresa é obrigatória';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'E-mail profissional válido é obrigatório';
    }
    if (!formData.telefone.trim()) errs.telefone = 'Telefone para contato é obrigatório';
    if (!formData.consentimentoLGPD) errs.consentimento = 'É necessário concordar com a política de privacidade';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for bots
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0B0A0F] border border-[#C5C9D0]/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-[#C5C9D0] hover:text-white cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
              Solicitação Recebida com Sucesso
            </h3>
            <p className="text-xs text-[#C5C9D0] max-w-sm mb-6 leading-relaxed font-light">
              Obrigado, <strong className="text-white">{formData.nome}</strong>. Sua solicitação para a empresa <strong className="text-white">{formData.empresa}</strong> foi registrada no sistema da AUREVON TECHNOLOGY.
            </p>

            {/* Direct WhatsApp & Gmail Callout */}
            <div className="w-full max-w-md p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 mb-6 flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase text-emerald-400 tracking-wider font-semibold mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Atendimento Imediato Disponível
              </span>
              <p className="text-xs text-[#C5C9D0] font-light mb-3">
                Deseja falar agora mesmo com o especialista responsável sobre seus processos?
              </p>
              <button
                type="button"
                onClick={() => {
                  openWhatsApp(getLeadWhatsAppMessage(formData));
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-[8px] transition-all shadow-[0_4px_16px_rgba(16,185,129,0.3)] active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Continuar no WhatsApp {siteConfig.contact.whatsappShort}</span>
              </button>

              <a
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`Solicitação de Demonstração - ${formData.empresa}`)}&body=${encodeURIComponent(`Olá equipe da AUREVON TECHNOLOGY,\n\nGostaria de solicitar um diagnóstico corporativo.\n\nNome: ${formData.nome}\nEmpresa: ${formData.empresa}\nTelefone: ${formData.telefone}\nSegmento: ${formData.segmento}\nHorário: ${formData.horario}\nNecessidade: ${formData.necessidade || 'Não informada'}\n\nAtenciosamente,\n${formData.nome}`)}`}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-[11px] font-semibold uppercase tracking-wider text-violet-200 bg-violet-950/40 hover:bg-violet-900/50 rounded-[8px] transition-all border border-violet-500/40 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-violet-400" />
                <span>Enviar dados para {siteConfig.contact.email}</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B0A0F] bg-white rounded-[6px] hover:bg-[#F5F7FA] cursor-pointer"
            >
              Fechar Janela
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot anti-spam */}
            <input
              type="text"
              name="company_title_check"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="mb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#C5C9D0] block mb-1 uppercase">
                AUREVON TECHNOLOGY · DIAGNÓSTICO
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                Solicitar Demonstração
              </h3>
              <p className="text-xs text-[#C5C9D0] mt-1 font-light">
                Entenda como a tecnologia pode ajudar a transformar seus processos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5C9D0] mb-1 font-medium">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full px-3.5 py-2.5 rounded-[6px] bg-white/[0.04] border border-[#C5C9D0]/20 text-sm text-white focus:outline-none focus:border-white"
                />
                {errors.nome && <span className="text-[10px] text-red-400">{errors.nome}</span>}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5C9D0] mb-1 font-medium">
                  Empresa *
                </label>
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  placeholder="Nome da empresa"
                  className="w-full px-3.5 py-2.5 rounded-[6px] bg-white/[0.04] border border-[#C5C9D0]/20 text-sm text-white focus:outline-none focus:border-white"
                />
                {errors.empresa && <span className="text-[10px] text-red-400">{errors.empresa}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5C9D0] mb-1 font-medium">
                  E-mail Profissional *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@empresa.com.br"
                  className="w-full px-3.5 py-2.5 rounded-[6px] bg-white/[0.04] border border-[#C5C9D0]/20 text-sm text-white focus:outline-none focus:border-white"
                />
                {errors.email && <span className="text-[10px] text-red-400">{errors.email}</span>}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5C9D0] mb-1 font-medium">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  placeholder="(DDD) 99999-9999"
                  className="w-full px-3.5 py-2.5 rounded-[6px] bg-white/[0.04] border border-[#C5C9D0]/20 text-sm text-white focus:outline-none focus:border-white"
                />
                {errors.telefone && <span className="text-[10px] text-red-400">{errors.telefone}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5C9D0] mb-1 font-medium">
                  Segmento
                </label>
                <select
                  value={formData.segmento}
                  onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#16161c] border border-[#C5C9D0]/20 text-xs text-white focus:outline-none focus:border-white"
                >
                  <option value="Empresas de médio porte">Empresas de médio porte</option>
                  <option value="Saúde">Saúde & Clínicas</option>
                  <option value="Oficinas automotivas">Oficinas automotivas</option>
                  <option value="Construção civil">Construção civil</option>
                  <option value="Outro">Outro segmento</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5C9D0] mb-1 font-medium">
                  Melhor Horário para Contato
                </label>
                <select
                  value={formData.horario}
                  onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#16161c] border border-[#C5C9D0]/20 text-xs text-white focus:outline-none focus:border-white"
                >
                  <option value="Manhã (09h - 12h)">Manhã (09h - 12h)</option>
                  <option value="Tarde (14h - 18h)">Tarde (14h - 18h)</option>
                  <option value="Qualquer horário">Qualquer horário comercial</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C5C9D0] mb-1 font-medium">
                Necessidade Operacional
              </label>
              <textarea
                rows={2}
                value={formData.necessidade}
                onChange={(e) => setFormData({ ...formData, necessidade: e.target.value })}
                placeholder="Descreva brevemente o gargalo ou projeto que deseja avaliar..."
                className="w-full px-3.5 py-2 rounded-[6px] bg-white/[0.04] border border-[#C5C9D0]/20 text-sm text-white focus:outline-none focus:border-white resize-none"
              />
            </div>

            {/* LGPD Consent Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-[#C5C9D0]">
                <input
                  type="checkbox"
                  checked={formData.consentimentoLGPD}
                  onChange={(e) => setFormData({ ...formData, consentimentoLGPD: e.target.checked })}
                  className="mt-0.5 rounded border-[#C5C9D0]/30 text-white focus:ring-0"
                />
                <span>
                  Concordo com o tratamento dos dados informados para fins de contato corporativo e diagnóstico, conforme a{' '}
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="text-white underline hover:text-[#C5C9D0] focus:outline-none"
                  >
                    Política de Privacidade
                  </button>
                  .*
                </span>
              </label>
              {errors.consentimento && (
                <span className="text-[10px] text-red-400 block mt-1">{errors.consentimento}</span>
              )}
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 min-h-[48px] text-xs font-semibold uppercase tracking-wider text-[#0B0A0F] bg-white hover:bg-[#F5F7FA] rounded-[8px] transition-colors cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Validando envio...' : 'Enviar Solicitação de Demonstração'}
                <Send className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  openWhatsApp(
                    getLeadWhatsAppMessage({
                      nome: formData.nome || 'Interessado',
                      empresa: formData.empresa || 'Empresa',
                      telefone: formData.telefone,
                      solucao: formData.solucao,
                      segmento: formData.segmento,
                      necessidade: formData.necessidade,
                      horario: formData.horario,
                    })
                  );
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 min-h-[44px] text-xs font-medium tracking-wider text-[#C5C9D0] hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/15 hover:border-emerald-500/50 rounded-[8px] transition-all cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Ou solicitar via WhatsApp {siteConfig.contact.whatsappShort}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export const PrivacyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0B0A0F] border border-[#C5C9D0]/30 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[85vh] text-[#C5C9D0] text-xs sm:text-sm leading-relaxed space-y-4">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-[#C5C9D0] hover:text-white cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-white font-mono uppercase text-xs mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>AUREVON TECHNOLOGY · Governança e Boas Práticas</span>
        </div>

        <div className="p-3 bg-white/[0.04] border border-[#C5C9D0]/20 rounded-lg text-xs text-[#C5C9D0] font-mono mb-4">
          <strong className="text-white block mb-0.5">Nota de Governança:</strong>
          Texto provisório sujeito a revisão jurídica formal pré-lançamento.
        </div>

        <h3 className="font-display text-2xl font-bold uppercase text-white mb-4">
          Política de Privacidade
        </h3>

        <p>
          A <strong>AUREVON TECHNOLOGY</strong> mantém firme compromisso com a segurança da informação, privacidade e integridade no tratamento de dados fornecidos por clientes e interessados em suas soluções digitais.
        </p>

        <h4 className="font-bold text-white text-sm pt-2">1. Coleta de Informações</h4>
        <p>
          Os dados submetidos voluntariamente em nossos canais de demonstração, lista de interesse e contato (nome, empresa, e-mail corporativo, telefone e necessidades de operação) são utilizados unicamente para viabilizar atendimento consultivo e diagnósticos de processos.
        </p>

        <h4 className="font-bold text-white text-sm pt-2">2. Boas Práticas e Segurança</h4>
        <p>
          Adotamos boas práticas técnicas de criptografia, controle estrito de acesso e retenção mínima de informações, não comercializando e não repassando dados a terceiros para fins de marketing.
        </p>

        <h4 className="font-bold text-white text-sm pt-2">3. Canais de Contato</h4>
        <p>
          Dúvidas sobre o tratamento de informações corporativas podem ser encaminhadas ao e-mail oficial:{' '}
          <strong className="text-white">{siteConfig.contact.email}</strong>.
        </p>

        <div className="pt-4 border-t border-white/[0.08]">
          <p className="text-[11px] text-[#6B7280] font-mono">
            Ano de vigência: {new Date().getFullYear()} · AUREVON TECHNOLOGY
          </p>
        </div>
      </div>
    </div>
  );
};

export const TermsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0B0A0F] border border-[#C5C9D0]/30 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[85vh] text-[#C5C9D0] text-xs sm:text-sm leading-relaxed space-y-4">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-[#C5C9D0] hover:text-white cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-white font-mono uppercase text-xs mb-2">
          <FileText className="w-4 h-4" />
          <span>AUREVON TECHNOLOGY · Condições de Serviço</span>
        </div>

        <div className="p-3 bg-white/[0.04] border border-[#C5C9D0]/20 rounded-lg text-xs text-[#C5C9D0] font-mono mb-4">
          <strong className="text-white block mb-0.5">Nota de Governança:</strong>
          Texto provisório sujeito a revisão jurídica formal pré-lançamento.
        </div>

        <h3 className="font-display text-2xl font-bold uppercase text-white mb-4">
          Termos de Uso
        </h3>

        <p>
          Este site institucional apresenta os serviços e conceitos tecnológicos desenvolvidos e planejados pela <strong>AUREVON TECHNOLOGY</strong>.
        </p>

        <h4 className="font-bold text-white text-sm pt-2">1. Natureza das Soluções e Produtos</h4>
        <p>
          Os produtos identificados como "EM DESENVOLVIMENTO" ou "PLANEJADO" refletem o roadmap interno de engenharia. O cadastramento em listas de interesse não constitui compromisso contratual de contratação ou compra até a formalização de proposta comercial e instrumento contratual definitivo.
        </p>

        <h4 className="font-bold text-white text-sm pt-2">2. Propriedade Intelectual</h4>
        <p>
          A marca, o símbolo oficial "A", a identidade visual, as marcas dos produtos do ecossistema e as publicações são de titularidade da AUREVON TECHNOLOGY.
        </p>

        <div className="pt-4 border-t border-white/[0.08]">
          <p className="text-[11px] text-[#6B7280] font-mono">
            Ano de vigência: {new Date().getFullYear()} · AUREVON TECHNOLOGY
          </p>
        </div>
      </div>
    </div>
  );
};

export const HistoryModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0B0A0F] border border-[#C5C9D0]/30 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[85vh] text-[#C5C9D0] text-xs sm:text-sm leading-relaxed space-y-4">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-[#C5C9D0] hover:text-white cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-white font-mono uppercase text-xs mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Institucional · História & Fundamentos</span>
        </div>

        <div className="p-3 bg-white/[0.04] border border-[#C5C9D0]/20 rounded-lg text-xs text-[#C5C9D0] font-mono mb-4">
          <strong className="text-white block mb-0.5">Nota Editorial:</strong>
          Histórico institucional provisório em fase de formalização oficial.
        </div>

        <h3 className="font-display text-2xl font-bold uppercase text-white mb-4">
          Nossa História
        </h3>

        <p>
          A <strong>AUREVON TECHNOLOGY</strong> nasce da convicção de que empresas em crescimento necessitam de tecnologia desenhada com rigor arquitetural, e não soluções de prateleira genéricas que exigem adaptações forçadas.
        </p>

        <p>
          Nossa atuação concentra-se em conectar engenharia de software de ponta, automação de fluxos operacionais e governança de dados para transformar gargalos reais em processos estáveis, seguros e escaláveis.
        </p>

        <div className="space-y-3 pt-2">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider">Pilares Fundamentais:</h4>
          <ul className="space-y-2 list-disc pl-4 text-xs text-[#C5C9D0]">
            <li><strong>Inovação:</strong> Soluções modernas e escaláveis.</li>
            <li><strong>Confiabilidade:</strong> Segurança e boas práticas em todas as fases.</li>
            <li><strong>Resultados:</strong> Foco direto na eficiência operacional.</li>
            <li><strong>Parceria:</strong> Transparência e relacionamento próximo.</li>
            <li><strong>Evolução:</strong> Melhoria contínua de processos e sistemas.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
