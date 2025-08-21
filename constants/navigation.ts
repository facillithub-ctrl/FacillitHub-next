// Caminho: constants/navigation.ts
export interface NavLink {
  label: string;
  href: string;
}

export interface MegaSection {
  title: string;
  links: NavLink[];
  highlight?: {
    title: string;
    description: string;
  };
}

export interface NavItem {
  label: string;
  href?: string;
  dropdownContent?: {
    columns: 'two-columns' | 'three-columns';
    sections: MegaSection[];
  };
}

export const NAVIGATION_LINKS: NavItem[] = [
  { 
    label: 'Início', 
    href: '/' 
  },
  {
    label: 'Diferenciais',
    dropdownContent: {
      columns: 'two-columns',
      sections: [
        {
          title: 'Nossa Essência',
          links: [
            { label: 'Visão Geral', href: '/diferenciais/visao-geral' },
            { label: 'Missão & Propósito', href: '/diferenciais/missao' },
            { label: 'Valores Fundamentais', href: '/diferenciais/valores' },
            { label: 'Inovação Constante', href: '/diferenciais/inovacao' },
          ],
        },
        {
          title: 'Comprovação',
          links: [
            { label: 'Resultados Reais', href: '/comprovacao/resultados' },
            { label: 'Estudos de Caso', href: '/comprovacao/cases' },
            { label: 'Segurança Avançada', href: '/comprovacao/seguranca' },
            { label: 'IA Inteligente', href: '/comprovacao/ia' },
          ],
        },
      ],
    },
  },
  {
    label: 'Módulos',
    dropdownContent: {
      columns: 'three-columns',
      sections: [
        {
          title: 'Educação',
          links: [
            { label: 'Facillit Edu', href: '/modulos/edu' },
            { label: 'Facillit Write', href: '/modulos/write' },
            { label: 'Facillit Test', href: '/modulos/test' },
            { label: 'Facillit Library', href: '/modulos/library' },
            { label: 'Facillit Play', href: '/modulos/play' },
            { label: 'Facillit Lab', href: '/modulos/lab' },
          ],
        },
        {
          title: 'Produtividade',
          links: [
            { label: 'Facillit Day', href: '/modulos/day' },
            { label: 'Facillit Task', href: '/modulos/task' },
            { label: 'Facillit Finances', href: '/modulos/finances' },
            { label: 'Facillit Create', href: '/modulos/create' },
          ],
          highlight: {
            title: 'Novidade',
            description: 'Facillit AI - Assistente inteligente para todas as suas tarefas.',
          },
        },
        {
          title: 'Comunidade',
          links: [
            { label: 'Facillit Connect', href: '/modulos/connect' },
            { label: 'Facillit Games', href: '/modulos/games' },
            { label: 'Facillit Coach', href: '/modulos/coach' },
            { label: 'Career Center', href: '/modulos/career' },
          ],
        },
      ],
    },
  },
  {
    label: 'Para quem?',
    dropdownContent: {
      columns: 'three-columns',
      sections: [
        { title: 'Pessoas', links: [{ label: 'Estudantes', href: '/para-quem/estudantes' }, { label: 'Profissionais', href: '/para-quem/profissionais' }] },
        { title: 'Instituições', links: [{ label: 'Escolas Básicas', href: '/para-quem/escolas' }, { label: 'Universidades', href: '/para-quem/universidades' }] },
        { title: 'Empresas', links: [{ label: 'Recursos Humanos', href: '/para-quem/rh' }, { label: 'Treinamento Corporativo', href: '/para-quem/treinamento' }] },
      ],
    },
  },
  {
    label: 'Preços',
    dropdownContent: {
      columns: 'two-columns',
      sections: [
        { title: 'Planos', links: [{ label: 'Gratuito - Para sempre', href: '/precos/gratuito' }, { label: 'Premium Individual', href: '/precos/premium' }, { label: 'Institucional', href: '/precos/institucional' }] },
        {
          title: 'Ferramentas',
          links: [{ label: 'Comparar Planos', href: '/precos/comparar' }, { label: 'Calculadora ROI', href: '/precos/roi' }],
          highlight: { title: 'Oferta Especial', description: '30 dias grátis + 50% off no primeiro ano' },
        },
      ],
    },
  },
  {
    label: 'Sobre',
    dropdownContent: {
      columns: 'three-columns',
      sections: [
        { title: 'Empresa', links: [{ label: 'Nossa História', href: '/sobre/historia' }, { label: 'Equipe', href: '/sobre/equipe' }] },
        { title: 'Recursos', links: [{ label: 'Manual da Marca', href: '/sobre/marca' }, { label: 'Comunidade', href: '/sobre/comunidade' }] },
        { title: 'Legal', links: [{ label: 'Privacidade', href: '/sobre/privacidade' }, { label: 'Termos de Uso', href: '/sobre/termos' }] },
      ],
    },
  },
  {
    label: 'Recursos',
    dropdownContent: {
      columns: 'two-columns',
      sections: [
        { title: 'Conteúdo', links: [{ label: 'Blog Educacional', href: '/recursos/blog' }, { label: 'Guias Práticos', href: '/recursos/guias' }] },
        { title: 'Suporte', links: [{ label: 'FAQ Completo', href: '/recursos/faq' }, { label: 'Central de Ajuda', href: '/recursos/ajuda' }] },
      ],
    },
  },
];