import {
  FaComments,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaLightbulb,
  FaListCheck,
  FaNodeJs,
  FaPaintbrush,
  FaReact,
  FaRotate,
  FaUsers,
  FaVuejs,
} from 'react-icons/fa6';
import { SiPrisma, SiTailwindcss, SiVitest } from 'react-icons/si';

export const SKILL_CATEGORIES = [
  { id: 'all', label: 'Todas as Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & DB' },
  { id: 'tools', label: 'Design & Tools' },
  { id: 'soft', label: 'Soft Skills' },
];

export const SKILLS_DATA = [
  // Frontend
  {
    id: 'react',
    label: 'React',
    category: 'frontend',
    categoryLabel: 'Frontend',
    icon: FaReact,
    level: 'Avançado',
    tags: ['Vite', 'Next.js', 'Hooks', 'Context API', 'State Management'],
    description:
      'Construção de aplicações SPA e SSR modernas com foco em performance, reutilização de componentes e ótima experiência do usuário.',
    experience:
      'Utilizado no desenvolvimento de interfaces reativas complexas, landing pages interativas e integração com APIs REST.',
  },
  {
    id: 'tailwind',
    label: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Frontend',
    icon: SiTailwindcss,
    level: 'Avançado',
    tags: ['Design System', 'Responsividade', 'Dark Mode', 'Design Tokens'],
    description:
      'Estilização acelerada baseada em utilitários e design tokens semânticos, garantindo layouts elegantes e totalmente responsivos.',
    experience:
      'Criação de design systems customizados, micro-interações fluidas e layouts acessíveis para múltiplos dispositivos.',
  },
  {
    id: 'vue',
    label: 'Vue.js & Nuxt',
    category: 'frontend',
    categoryLabel: 'Frontend',
    icon: FaVuejs,
    level: 'Avançado',
    tags: ['Nuxt', 'Composition API', 'Pinia', 'Vue Router'],
    description:
      'Desenvolvimento de aplicações reativas utilizando a arquitetura flexível do Vue.js e recursos de SSR com Nuxt.',
    experience:
      'Construção de portais e dashboards modulares focados em manutenibilidade e tempo de resposta rápido.',
  },

  // Backend & DB
  {
    id: 'node',
    label: 'Node.js',
    category: 'backend',
    categoryLabel: 'Backend & DB',
    icon: FaNodeJs,
    level: 'Intermediário',
    tags: ['Express', 'REST APIs', 'Autenticação', 'Middleware'],
    description:
      'Criação de APIs robustas, escaláveis e eficientes no servidor utilizando JavaScript/TypeScript e arquiteturas modernas.',
    experience:
      'Desenvolvimento de rotas seguras, serviços de backend com tratamento de erros e integração com serviços externos.',
  },
  {
    id: 'prisma',
    label: 'Prisma ORM',
    category: 'backend',
    categoryLabel: 'Backend & DB',
    icon: SiPrisma,
    level: 'Iniciante',
    tags: ['Migrations', 'Type-Safety', 'Modelagem de Dados', 'Queries'],
    description:
      'Mapeamento objeto-relacional seguro contra erros de tipagem para interagir com bancos de dados relacionais de forma intuitiva.',
    experience:
      'Modelagem de esquemas complexos, criação de migrações estruturadas e otimização de consultas ao banco.',
  },
  {
    id: 'sql',
    label: 'SQL & Databases',
    category: 'backend',
    categoryLabel: 'Backend & DB',
    icon: FaDatabase,
    level: 'Intermediário',
    tags: ['PostgreSQL', 'MySQL', 'SQLite', 'Indexação'],
    description:
      'Estruturação de bancos de dados relacionais, criação de queries performáticas e manutenção da integridade dos dados.',
    experience:
      'Construção e gerenciamento de relacionamentos entre tabelas para suporte às regras de negócio das aplicações.',
  },

  // Tools & Design
  {
    id: 'figma',
    label: 'Figma & UI/UX',
    category: 'tools',
    categoryLabel: 'Design & Tools',
    icon: FaFigma,
    level: 'Avançado',
    tags: ['Wireframing', 'Prototipagem', 'Design Systems', 'Micro-Interações'],
    description:
      'Design de interfaces intuitivas, prototipagem navegável de alta fidelidade e criação de tokens visuais alinhados às necessidades dos usuários.',
    experience:
      'Planejamento de fluxos de navegação, arquitetura de informação e passagem de assets diretamente para o desenvolvimento.',
  },
  {
    id: 'git',
    label: 'Git & GitHub',
    category: 'tools',
    categoryLabel: 'Design & Tools',
    icon: FaGitAlt,
    level: 'Avançado',
    tags: ['Versionamento', 'Pull Requests', 'Branching Strategy', 'CI/CD'],
    description:
      'Controle de versão rigoroso e colaboração eficiente em projetos de software com pipelines limpos.',
    experience:
      'Gerenciamento de repositórios, revisão de código e manutenção do histórico de versões.',
  },
  {
    id: 'vitest',
    label: 'Vitest & Testes',
    category: 'tools',
    categoryLabel: 'Design & Tools',
    icon: SiVitest,
    level: 'Intermediário',
    tags: ['Unit Testing', 'Component Testing', 'Mocking', 'Coverage'],
    description:
      'Garantia da qualidade do software por meio de testes unitários e de componentes rápidos e automatizados.',
    experience:
      'Validação de funções utilitárias e componentes reativos para prevenir regressões no código.',
  },

  // Soft Skills
  {
    id: 'comunicacao',
    label: 'Comunicação',
    category: 'soft',
    categoryLabel: 'Soft Skills',
    icon: FaComments,
    level: 'Interpessoal',
    tags: ['Clareza', 'Escuta Ativa', 'Apresentação', 'Feedback'],
    description:
      'Transmissão clara de ideias técnicas para equipes multidisciplinares e alinhamento transparente de expectativas.',
    experience:
      'Facilitação de conversas estratégicas, apresentações de soluções e feedbacks construtivos.',
  },
  {
    id: 'trabalho-equipe',
    label: 'Trabalho em Equipe',
    category: 'soft',
    categoryLabel: 'Soft Skills',
    icon: FaUsers,
    level: 'Interpessoal',
    tags: ['Colaboração', 'Empatia', 'Sinergia', 'Suporte'],
    description:
      'Trabalho colaborativo e integração harmoniosa com designers, desenvolvedores e stakeholders.',
    experience:
      'Resolução coletiva de desafios e fortalecimento do clima positivo em projetos em equipe.',
  },
  {
    id: 'resolucao-problemas',
    label: 'Resolução de Problemas',
    category: 'soft',
    categoryLabel: 'Soft Skills',
    icon: FaLightbulb,
    level: 'Analítico',
    tags: ['Pensamento Crítico', 'Debugging', 'Orientação a Resultados'],
    description:
      'Abordagem analítica para identificar gargalos de software e propor soluções eficientes e criativas.',
    experience:
      'Desmontagem de problemas complexos em etapas gerenciáveis para entrega rápida de valor.',
  },
  {
    id: 'adaptabilidade',
    label: 'Adaptabilidade',
    category: 'soft',
    categoryLabel: 'Soft Skills',
    icon: FaRotate,
    level: 'Interpessoal',
    tags: ['Aprendizado Rápido', 'Flexibilidade', 'Novas Tecnologias'],
    description:
      'Capacidade de aprender rapidamente novas ferramentas e se adaptar a mudanças de requisitos com agilidade.',
    experience:
      'Constante atualização com as melhores práticas do mercado e adoção de novas stacks quando necessário.',
  },
  {
    id: 'organizacao',
    label: 'Organização',
    category: 'soft',
    categoryLabel: 'Soft Skills',
    icon: FaListCheck,
    level: 'Gestão',
    tags: ['Priorização', 'Clean Code', 'Prazos', 'Documentação'],
    description:
      'Estruturação metódica do código e de prioridades para garantir a pontualidade na entrega e facilidade de leitura.',
    experience:
      'Mapeamento de tarefas e documentação técnica consistente para facilitá o onboarding e manutenção.',
  },
  {
    id: 'criatividade',
    label: 'Criatividade',
    category: 'soft',
    categoryLabel: 'Soft Skills',
    icon: FaPaintbrush,
    level: 'Inovação',
    tags: ['Out of the Box', 'UI Aesthetics', 'Ideação', 'Design Thinking'],
    description:
      'Aplicação de insights estéticos e abordagens inovadoras para criar soluções visuais envolventes e memoráveis.',
    experience:
      'Transformação de conceitos abstratos em interfaces vibrantes, fluidas e encantadoras.',
  },
];
