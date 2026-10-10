export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  capabilities: string[];
  deliverables: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  headline: string;
  status: 'Em desenvolvimento' | 'Planejado' | 'Sob medida';
  description: string;
  previewNote: string;
  expectedBenefits: string[];
  targetAudience: string;
  architectureHighlights: string[];
}

export interface SegmentItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  useCases: string[];
  operationalGains: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'desenvolvimento-software',
    number: '01',
    title: 'Desenvolvimento de Software',
    shortDescription: 'Soluções digitais personalizadas para processos e necessidades empresariais.',
    fullDescription: 'Criamos softwares web, plataformas corporativas e microsserviços desenhados sob medida para a sua operação. Desenvolvemos com foco em escalabilidade, arquitetura limpa e experiência de usuário de alto nível.',
    iconName: 'Code2',
    capabilities: [
      'Plataformas web corporativas de alto desempenho',
      'Portais administrativos e dashboards de controle',
      'APIs resilientes e arquitetura modular',
      'Sistemas legados modernizados com segurança',
    ],
    deliverables: [
      'Código fonte auditável e documentado',
      'Arquitetura em nuvem configurada',
      'Homologação assistida de ponta a ponta',
    ],
  },
  {
    id: 'automacao-empresarial',
    number: '02',
    title: 'Automação Empresarial',
    shortDescription: 'Redução de tarefas repetitivas e otimização dos fluxos de trabalho.',
    fullDescription: 'Elimine gargalos manuais e retrabalho. Mapeamos jornadas operacionais e construímos automações seguras que interligam e-mails, planilhas, CRMs, ERPs e canais de atendimento em tempo real.',
    iconName: 'Cpu',
    capabilities: [
      'Automação de fluxos operacionais e aprovações',
      'Processamento automatizado de pedidos e cadastros',
      'Integração de canais de atendimento e notificações',
      'Redução de falhas humanas em processos repetitivos',
    ],
    deliverables: [
      'Fluxogramas de automação validados',
      'Rotinas agendadas e triggers em tempo real',
      'Painel de monitoramento de execuções',
    ],
  },
  {
    id: 'inteligencia-artificial',
    number: '03',
    title: 'Inteligência Artificial',
    shortDescription: 'Aplicações inteligentes para apoiar operações, análises e decisões.',
    fullDescription: 'Implementação de modelos de IA e processamento de linguagem natural aplicados a problemas concretos do negócio, como triagem de solicitações, geração de documentos estruturados e análise preditiva.',
    iconName: 'Sparkles',
    capabilities: [
      'Agentes inteligentes para triagem de suporte e operação',
      'Processamento inteligente de documentos e contratos',
      'Pesquisa semântica em bases de conhecimento internas',
      'Modelos de recomendação e suporte à tomada de decisão',
    ],
    deliverables: [
      'Pipelines de IA com controle de latência e custo',
      'Políticas rígidas de privacidade e retenção de dados',
      'Interfaces intuitivas de interação para equipes',
    ],
  },
  {
    id: 'dados-business-intelligence',
    number: '04',
    title: 'Dados e Inteligência de Negócios',
    shortDescription: 'Transformação de dados em informações úteis para a gestão.',
    fullDescription: 'Estruturação de pipelines de dados, consolidação de fontes dispersas e criação de painéis analíticos confiáveis para que gestores tomem decisões com precisão e clareza.',
    iconName: 'BarChart3',
    capabilities: [
      'Centralização de bases de dados heterogêneas',
      'Dashboards executivos com indicadores estratégicos (KPIs)',
      'Relatórios automatizados periódicos',
      'Rastreabilidade e governança de métricas empresariais',
    ],
    deliverables: [
      'Data pipelines estruturados e estáveis',
      'Dashboards em tempo real com níveis de acesso',
      'Documentação de métricas e fórmulas de cálculo',
    ],
  },
  {
    id: 'integracao-tecnologica',
    number: '05',
    title: 'Integração Tecnológica',
    shortDescription: 'Conexão entre sistemas, ferramentas e processos empresariais.',
    fullDescription: 'Conecte softwares legados, plataformas SaaS, bancos de dados e sistemas de terceiros através de conectores seguros e webhooks inteligentes, unificando a cadeia de informação da sua empresa.',
    iconName: 'Network',
    capabilities: [
      'Integração via REST, GraphQL e Webhooks',
      'Sincronização bidirecional de dados cadastrais e financeiros',
      'Filas assíncronas para operações de alta concorrência',
      'Auditoria de transações entre múltiplos softwares',
    ],
    deliverables: [
      'Conectores e middleware documentados',
      'Tratamento automático de falhas e reprocessamento',
      'Relatório de integridade transacional',
    ],
  },
  {
    id: 'manutencao-suporte',
    number: '06',
    title: 'Manutenção e Suporte',
    shortDescription: 'Acompanhamento técnico e evolução das soluções contratadas.',
    fullDescription: 'Garantia de disponibilidade, segurança e evolução contínua da sua infraestrutura e aplicações, com atendimento técnico qualificado e SLAs claros acordados em contrato.',
    iconName: 'ShieldCheck',
    capabilities: [
      'Monitoramento proativo de disponibilidade e erros',
      'Atualizações periódicas de segurança e dependências',
      'Resolução ágil de chamados técnicos',
      'Backups automatizados e planos de contingência',
    ],
    deliverables: [
      'Canal direto para abertura e acompanhamento de chamados',
      'Relatórios mensais de saúde e disponibilidade',
      'Plano estruturado de evolução do sistema',
    ],
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'aurevon-flow',
    name: 'AUREVON FLOW',
    headline: 'Gestão de processos e operações empresariais',
    status: 'Em desenvolvimento',
    description: 'Plataforma modular para estruturar, atribuir e monitorar fluxos de trabalho e etapas operacionais da empresa com visibilidade total e sem atritos.',
    previewNote: 'Produto em fase ativa de engenharia interna. Aberto para empresas interessadas em programa piloto.',
    expectedBenefits: [
      'Padronização clara de cada etapa do processo interno',
      'Redução de tempo em transferências de tarefas entre setores',
      'Rastreabilidade completa de responsáveis, prazos e entregas',
      'Alertas inteligentes para gargalos e vencimentos',
    ],
    targetAudience: 'Empresas que necessitam de rigor operacional e alinhamento de equipes multidisciplinares.',
    architectureHighlights: ['Kanban corporativo dinâmico', 'Trilhas de auditoria imutáveis', 'Gatilhos automáticos entre etapas'],
  },
  {
    id: 'aurevon-connect',
    name: 'AUREVON CONNECT',
    headline: 'Relacionamento com clientes, CRM e organização comercial',
    status: 'Em desenvolvimento',
    description: 'Sistema desenhado para centralizar conversas, oportunidades comerciais e histórico de clientes em um ambiente ágil e sem complexidade desnecessária.',
    previewNote: 'Estruturação de módulos comerciais e integrações com canais em andamento.',
    expectedBenefits: [
      'Visão 360 graus do histórico de cada oportunidade e cliente',
      'Follow-ups organizados para evitar perda de propostas',
      'Integração com canais de comunicação corporativos',
      'Métricas claras de funil de vendas e conversão',
    ],
    targetAudience: 'Times de vendas e gestores comerciais que buscam previsibilidade e controle.',
    architectureHighlights: ['Pipeline visual personalizável', 'Timeline de interações unificada', 'Métricas de ciclo de venda'],
  },
  {
    id: 'aurevon-automate',
    name: 'AUREVON AUTOMATE',
    headline: 'Automação de tarefas, processos e integrações',
    status: 'Em desenvolvimento',
    description: 'Motor de automação programável para conectar sistemas corporativos, disparar rotinas condicionais e eliminar intervenções manuais diárias.',
    previewNote: 'Engine de regras e conectores sob desenvolvimento técnico contínuo.',
    expectedBenefits: [
      'Execução contínua de tarefas repetitivas sem intervenção humana',
      'Conexão segura entre softwares sem necessidade de recodificar tudo',
      'Logs detalhados de cada execução para conformidade e segurança',
      'Economia de horas semanais das equipes operacionais',
    ],
    targetAudience: 'Operações que utilizam múltiplos softwares dispersos e perdem tempo copiando dados.',
    architectureHighlights: ['Engine de triggers em tempo real', 'Fila de reprocessamento seguro', 'Conectores padronizados'],
  },
  {
    id: 'aurevon-insight',
    name: 'AUREVON INSIGHT',
    headline: 'Indicadores, relatórios e inteligência de dados',
    status: 'Planejado',
    description: 'Módulo analítico concebido para consolidar dados operacionais e financeiros em relatórios executivos visuais e acionáveis.',
    previewNote: 'Especificação técnica e roadmap planejados no ecossistema da Aurevon.',
    expectedBenefits: [
      'Dashboards consolidados em tempo real',
      'Cruzamento de indicadores operacionais e comerciais',
      'Exportação executiva rápida em múltiplos formatos',
      'Detecção de tendências e anomalias na operação',
    ],
    targetAudience: 'Diretoria e gestores que precisam de números consolidados para decidir.',
    architectureHighlights: ['Agregação de dados multi-fonte', 'Visualizações executivas limpas', 'Relatórios programados'],
  },
  {
    id: 'aurevon-custom',
    name: 'AUREVON CUSTOM',
    headline: 'Sistemas desenvolvidos sob medida para necessidades específicas',
    status: 'Sob medida',
    description: 'Engenharia completa de ponta a ponta para negócios com modelos operacionais únicos que não se encaixam em softwares prontos de prateleira.',
    previewNote: 'Disponível sob demanda através de diagnóstico técnico aprofundado.',
    expectedBenefits: [
      '100% aderente às regras de negócio e diferenciais da sua empresa',
      'Propriedade integral da solução e código para o contratante',
      'Sem limitações ou mensalidades abusivas por usuário de plataformas prontas',
      'Escalabilidade tecnológica preparada para o crescimento futuro',
    ],
    targetAudience: 'Negócios com fluxos proprietários que exigem vantagem competitiva real.',
    architectureHighlights: ['Arquitetura dedicada', 'Stack moderna sob demanda', 'Segurança e conformidade LGPD'],
  },
];

export const SEGMENTS_DATA: SegmentItem[] = [
  {
    id: 'saude',
    name: 'Saúde',
    subtitle: 'Clínicas, centros de diagnóstico e consultórios especializados',
    description: 'Mercado de interesse focado na organização de jornadas de pacientes, automações administrativas, triagem e ferramentas seguras em conformidade com normas do setor.',
    useCases: [
      'Agendamento digital e lembretes automatizados para redução de faltas',
      'Organização de prontuários e fluxos internos de atendimento',
      'Painéis de gestão de salas, escalas e faturamento de procedimentos',
    ],
    operationalGains: [
      'Padronização da experiência do paciente',
      'Redução de tempo administrativo da equipe de recepção',
      'Segurança e privacidade no tratamento de dados',
    ],
  },
  {
    id: 'oficinas-automotivas',
    name: 'Oficinas Automotivas',
    subtitle: 'Centros automotivos, oficinas mecânicas e frotas',
    description: 'Segmento estratégico para implementação de controle rigoroso de ordens de serviço, agendamentos, histórico veicular e comunicação transparente com proprietários.',
    useCases: [
      'Ordens de serviço digitais com registro de fotos e diagnósticos',
      'Acompanhamento de status de reparo em tempo real via canais digitais',
      'Controle de peças utilizadas e previsão de revisões preventivas',
    ],
    operationalGains: [
      'Aumento da confiança e transparência percebida pelo cliente',
      'Controle apurado do tempo de box e produtividade da oficina',
      'Fidelização através de lembretes automáticos de manutenção',
    ],
  },
  {
    id: 'construcao-civil',
    name: 'Construção Civil',
    subtitle: 'Construtoras, incorporadoras e gerenciadoras de obras',
    description: 'Aplicação voltada para organização de canteiros, gestão de fornecedores, cronogramas físico-financeiros, diários de obra e medições estruturadas.',
    useCases: [
      'Diário de obra digital com registro geolocalizado e fotos',
      'Gestão de solicitações de suprimentos e aprovações de compra',
      'Acompanhamento de prazos de etapas e medições de empreiteiros',
    ],
    operationalGains: [
      'Menos desvios entre o cronograma planejado e o executado',
      'Centralização de documentos técnicos e alvarás',
      'Comunicação sem ruídos entre canteiro e escritório central',
    ],
  },
  {
    id: 'medio-porte',
    name: 'Empresas de Médio Porte',
    subtitle: 'Distribuidores, indústrias leves e prestadores de serviços B2B',
    description: 'Mercado de foco para empresas que já ultrapassaram o estágio inicial e sofrem com planilhas desconexas, necessitando de profissionalização digital e integrações.',
    useCases: [
      'Unificação de fluxos entre financeiro, comercial e operacional',
      'Automação de faturamento, conciliação e emissão de propostas',
      'Dashboards executivos com dados em tempo real para a diretoria',
    ],
    operationalGains: [
      'Eliminação de silos operacionais e informações desencontradas',
      'Capacidade de crescer o faturamento sem inflar o quadro administrativo',
      'Governança corporativa fortalecida para novos passos',
    ],
  },
];

export const DIFFERENTIATORS_DATA = [
  {
    number: '01',
    title: 'Soluções orientadas a problemas reais',
    description: 'Não desenvolvemos tecnologia por modismo. Cada linha de código e fluxo implementado responde a um gargalo real e mensurável da sua empresa.',
  },
  {
    number: '02',
    title: 'Tecnologia alinhada aos objetivos do negócio',
    description: 'Entendemos que software é meio, não fim. Nossas soluções são concebidas para apoiar os planos estratégicos e o crescimento da sua organização.',
  },
  {
    number: '03',
    title: 'Experiência digital moderna',
    description: 'Interfaces cinematográficas, limpas e objetivas. Seus colaboradores e clientes utilizam sistemas agradáveis, rápidos e intuitivos.',
  },
  {
    number: '04',
    title: 'Processos mais organizados',
    description: 'Substituímos improvisos por padrões confiáveis. Criamos trilhas estruturadas onde cada responsável sabe exatamente o que fazer.',
  },
  {
    number: '05',
    title: 'Possibilidade de personalização',
    description: 'Diferente de sistemas engessados de prateleira, adaptamos arquiteturas e telas para respeitar as particularidades do seu segmento.',
  },
  {
    number: '06',
    title: 'Foco em eficiência e evolução contínua',
    description: 'Acompanhamos a maturidade da solução ao longo do tempo, garantindo manutenção proativa, atualizações e suporte dedicado.',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Diagnóstico',
    subtitle: 'Imersão nos desafios operacionais',
    description: 'Mapeamos o cenário atual da sua empresa, identificando gargalos, ferramentas em uso e os objetivos centrais a serem alcançados.',
    deliverables: ['Documento de diagnóstico operacional', 'Mapeamento de riscos e requisitos', 'Escopo preliminar da solução'],
  },
  {
    step: '02',
    title: 'Estratégia',
    subtitle: 'Arquitetura e planejamento técnico',
    description: 'Desenhamos a melhor rota tecnológica: ferramentas ideais, modelo de dados, fluxos de integração e cronograma realista de entregas.',
    deliverables: ['Especificação funcional', 'Protótipo navegável das interfaces', 'Plano de implementação por marcos'],
  },
  {
    step: '03',
    title: 'Desenvolvimento',
    subtitle: 'Engenharia e integração rigorosa',
    description: 'Construção da solução utilizando stacks modernas, arquitetura escalável e testes rigorosos de integridade e segurança.',
    deliverables: ['Ambiente de homologação ativo', 'Módulos construídos e integrados', 'Validação técnica contínua'],
  },
  {
    step: '04',
    title: 'Implementação',
    subtitle: 'Homologação e treinamento assistido',
    description: 'Colocamos a solução em produção de forma segura, orientando os colaboradores e garantindo a correta adoção no dia a dia.',
    deliverables: ['Migração e validação de dados', 'Capacitação prática das equipes', 'Entrada em operação assistida'],
  },
  {
    step: '05',
    title: 'Evolução',
    subtitle: 'Suporte contínuo e melhorias',
    description: 'Monitoramos a estabilidade e oferecemos suporte técnico e novos aprimoramentos conforme o plano contratado pela empresa.',
    deliverables: ['SLA de atendimento técnico', 'Atualizações de segurança', 'Planejamento de melhorias incrementais'],
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'O que a AUREVON TECHNOLOGY faz?',
    answer: 'A AUREVON TECHNOLOGY é uma empresa de tecnologia focada em impulsionar negócios por meio de desenvolvimento de software sob medida, automação empresarial, inteligência de dados, integração entre sistemas e consultoria tecnológica.',
  },
  {
    question: 'Quais empresas podem contratar as soluções?',
    answer: 'Atendemos empresas que buscam profissionalizar processos, eliminar tarefas manuais e desenvolver ferramentas digitais para sustentar seu crescimento, com especial foco em médias empresas, clínicas de saúde, oficinas automotivas, construção civil e prestadores de serviços B2B.',
  },
  {
    question: 'A AUREVON desenvolve sistemas personalizados?',
    answer: 'Sim. Além do nosso ecossistema de produtos planejados (Flow, Connect, Automate, Insight), oferecemos o serviço AUREVON CUSTOM, criando soluções 100% adaptadas às particularidades da sua operação.',
  },
  {
    question: 'Como funciona o processo de contratação?',
    answer: 'Iniciamos com uma reunião de diagnóstico sem compromisso para entender seus desafios. Com base nisso, estruturamos uma proposta técnica e comercial transparente, detalhando escopo, prazos, investimento e cronograma de implementação.',
  },
  {
    question: 'Os produtos possuem mensalidade?',
    answer: 'O modelo comercial depende do tipo de contratação. Nossos produtos proprietários são estruturados em planos de subscrição e suporte, enquanto projetos sob medida envolvem investimento de desenvolvimento com plano opcional de evolução e manutenção contínua.',
  },
  {
    question: 'É possível solicitar uma demonstração?',
    answer: 'Sim! Você pode preencher o formulário no final da página ou clicar em "Fale com um especialista" para agendar uma apresentação com um consultor técnico da Aurevon.',
  },
  {
    question: 'Como funciona o suporte técnico?',
    answer: 'Disponibilizamos canais diretos para abertura de chamados técnicos, monitoramento proativo de disponibilidade e níveis de serviço (SLA) estabelecidos de acordo com o plano contratado.',
  },
  {
    question: 'Como entrar em contato oficial com a AUREVON?',
    answer: 'Você pode entrar em contato diretamente pelo formulário deste site, pelo e-mail institucional techaurevon@gmail.com ou pelo nosso Instagram oficial @aurevon_tech.',
  },
];

export const INSTITUTIONAL_PILLARS = [
  {
    name: 'Inovação',
    description: 'Soluções modernas e escaláveis construídas com as melhores práticas de engenharia global.',
  },
  {
    name: 'Confiabilidade',
    description: 'Segurança, estabilidade e conformidade em todas as etapas do desenvolvimento.',
  },
  {
    name: 'Resultados',
    description: 'Tecnologia orientada a gerar eficiência operacional e impacto real no crescimento.',
  },
  {
    name: 'Parceria',
    description: 'Relacionamento próximo, transparente e com comunicação clara sem rodeios técnicos.',
  },
  {
    name: 'Evolução',
    description: 'Melhoria contínua e visão antecipada de tendências para manter sua empresa à frente.',
  },
];
