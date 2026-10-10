/**
 * AUREVON TECHNOLOGY - Configurações Gerais do Site
 * 
 * Todas as informações provisórias e dados oficiais pendentes de confirmação
 * jurídica e comercial ficam centralizados aqui para fácil manutenção.
 */

export const siteConfig = {
  // Dados Institucionais
  brandName: 'AUREVON TECHNOLOGY',
  slogan: 'Tecnologia que impulsiona empresas.',
  
  // Contatos Oficiais
  contact: {
    email: 'techaurevon@gmail.com', // E-mail oficial / Gmail AUREVON TECHNOLOGY
    gmail: 'techaurevon@gmail.com',
    secondaryEmail: 'contato@aurevon.com.br',
    whatsappNumber: '5511933548568', // WhatsApp oficial AUREVON TECHNOLOGY
    whatsappRaw: '11933548568',
    whatsappFormatted: '+55 (11) 93354-8568',
    whatsappShort: '(11) 93354-8568',
    instagramHandle: '@aurevon_tech',
    instagramUrl: 'https://instagram.com/aurevon_tech',
    city: 'Brasil',
  },

  // Flags de Governança e Conteúdo
  flags: {
    showSocialProof: false, // Regra inegociável: Não inventar números, clientes, depoimentos ou logos
    showPrices: false, // Produtos são conceitos em desenvolvimento/planejamento, sem precificação
    allowDirectSales: false, // Apenas captação de lista de interesse
  },

  // Status dos Produtos no Ecossistema
  productStatus: {
    flow: 'EM DESENVOLVIMENTO' as const,
    connect: 'EM DESENVOLVIMENTO' as const,
    automate: 'EM DESENVOLVIMENTO' as const,
    insight: 'PLANEJADO' as const,
    custom: 'PLANEJADO' as const, // Sistemas sob medida sob demanda
  },

  // Status dos Segmentos
  segmentStatus: {
    saude: 'EM DESENVOLVIMENTO' as const,
    automotivo: 'EM DESENVOLVIMENTO' as const,
    construcao: 'EM DESENVOLVIMENTO' as const,
    medioPorte: 'EM DESENVOLVIMENTO' as const,
  },

  // Textos Institucionais (Sugeridos, editáveis conforme alinhamento de diretoria)
  institutional: {
    missao: 'Transformar desafios em soluções tecnológicas que geram valor para os negócios.',
    visao: 'Ser referência em tecnologia, impulsionando o futuro dos negócios.',
    valores: 'Inovação, transparência, compromisso e excelência.',
    posicionamento: 'Soluções digitais sob medida para empresas que pensam à frente.',
    compromisso: 'Entregar tecnologia com qualidade, suporte e foco no crescimento dos nossos clientes.',
  },

  // Endpoint de Formulários (Configurável para backend / webhook de CRM)
  formEndpoint: '/api/lead-capture',
};
