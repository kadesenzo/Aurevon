import { siteConfig } from '../site.config';

export function getWhatsAppUrl(customMessage?: string): string {
  const number = siteConfig.contact.whatsappNumber || '5511933548568';
  const text =
    customMessage ||
    'Olá! Gostaria de conversar com um especialista da AUREVON TECHNOLOGY sobre soluções para a minha empresa.';
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(customMessage?: string): void {
  const url = getWhatsAppUrl(customMessage);
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function getProductWhatsAppMessage(productName: string): string {
  return `Olá! Tenho interesse no produto ${productName} da AUREVON TECHNOLOGY. Gostaria de receber mais informações e entrar na lista de interesse prioritária.`;
}

export function getSolutionWhatsAppMessage(solutionTitle: string): string {
  return `Olá! Gostaria de solicitar um diagnóstico e proposta técnica para a solução: ${solutionTitle} na AUREVON TECHNOLOGY.`;
}

export function getSegmentWhatsAppMessage(segmentName: string): string {
  return `Olá! Tenho interesse em soluções da AUREVON TECHNOLOGY para o segmento: ${segmentName}. Gostaria de entender as opções para minha empresa.`;
}

export function getLeadWhatsAppMessage(data: {
  nome: string;
  empresa: string;
  telefone?: string;
  solucao?: string;
  segmento?: string;
  necessidade?: string;
  horario?: string;
}): string {
  const lines: string[] = [
    'Olá! Gostaria de solicitar uma demonstração com a AUREVON TECHNOLOGY.',
    '',
    `*Nome:* ${data.nome || 'Não informado'}`,
    `*Empresa:* ${data.empresa || 'Não informada'}`,
  ];

  if (data.telefone) lines.push(`*Telefone:* ${data.telefone}`);
  if (data.solucao) lines.push(`*Interesse / Solução:* ${data.solucao}`);
  if (data.segmento) lines.push(`*Segmento:* ${data.segmento}`);
  if (data.horario) lines.push(`*Horário preferencial:* ${data.horario}`);
  if (data.necessidade) lines.push(`*Necessidade:* ${data.necessidade}`);

  lines.push('', 'Aguardo retorno de um especialista. Obrigado!');
  return lines.join('\n');
}
