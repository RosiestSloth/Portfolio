import { motion } from 'motion/react';
import {
  FaBriefcase,
  FaDownload,
  FaEnvelope,
  FaEye,
  FaGraduationCap,
  FaLocationDot,
  FaPhone,
  FaRocket,
  FaUser,
  FaWrench,
} from 'react-icons/fa6';
import CTASection from '@/components/sections/Works/CTASection';
import PageTransition from '@/components/shared/PageTransition';
import SectionIndicator from '@/components/shared/SectionIndicator';

function Resume() {
  const sections = [
    { id: 'resumo', label: 'Resumo', number: '01' },
    { id: 'experiencia', label: 'Experiência', number: '02' },
    { id: 'projetos', label: 'Projetos', number: '03' },
    { id: 'formacao', label: 'Formação', number: '04' },
    { id: 'competencias', label: 'Competências', number: '05' },
  ];

  const experiences = [
    {
      role: 'Desenvolvedor Web Freelancer',
      company: 'Correspondente Vianopolino',
      location: 'Vianópolis, GO',
      period: 'Junho de 2024 – Atual',
      highlights: [
        'Desenvolvimento de aplicações web responsivas e otimizadas para motores de busca (SEO).',
        'Manutenção e criação de sistemas de gerenciamento de conteúdo para portais locais.',
      ],
    },
    {
      role: 'Auxiliar Administrativo CTL',
      company: 'Eletromotor Service',
      location: 'Vianópolis, GO',
      period: 'Janeiro de 2025 – Atual',
      highlights: [
        'Otimização de rotinas administrativas através da digitalização e organização eficiente de documentos e fluxos de trabalho.',
        'Suporte direto no atendimento ao cliente e controle rigoroso de ordens de serviço, garantindo agilidade nos processos internos.',
      ],
    },
  ];

  const projects = [
    {
      title: 'Correspondente Vianopolino',
      subtitle: 'Portal de Notícias',
      description:
        'Desenvolvimento de um portal jornalístico utilizando WordPress, focado na disseminação de notícias locais com otimização de SEO e layout altamente responsivo para acessibilidade em dispositivos móveis.',
      techs: ['WordPress', 'SEO', 'Layout Responsivo', 'UX/UI'],
    },
    {
      title: 'Clínica Sensory',
      subtitle: 'Site Vitrine & Acessibilidade',
      description:
        'Criação de interface de alta fidelidade com foco em acessibilidade digital para profissionais de saúde. Aplicação de técnicas modernas de UX/UI para reduzir a taxa de rejeição e facilitar o agendamento de consultas.',
      techs: ['UX/UI Design', 'Figma', 'Acessibilidade Digital', 'React'],
    },
  ];

  return (
    <PageTransition>
      <SectionIndicator sections={sections} />

      <main className="min-h-screen bg-gray-50/50 pb-16">
        <section className="px-6 md:px-10 lg:px-20 py-12 bg-linear-to-b from-white to-gray-50 border-b border-gray-200/80 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-(--primary-color)/10 border border-(--primary-color)/20 text-(--primary-color) text-xs font-accent font-semibold">
                <FaUser className="size-3.5" />
                <span>Currículo Profissional</span>
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-(--tertiary-color)">
                Vinicius Santos Pereira
              </h1>
              <p className="font-accent text-lg font-medium text-(--primary-color)">
                Engenheiro de Software & Desenvolvedor Full Stack / UX/UI
              </p>

              {/* Informações de Contato Rápidas */}
              <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm font-body text-(--tertiary-color)/80">
                <span className="flex items-center gap-1.5">
                  <FaLocationDot className="text-(--primary-color)" />
                  Vianópolis, GO
                </span>
                <span className="flex items-center gap-1.5">
                  <FaPhone className="text-(--primary-color)" />
                  +55 62 9 9284-6807
                </span>
                <span className="flex items-center gap-1.5">
                  <FaEnvelope className="text-(--primary-color)" />
                  vs17012005santos@gmail.com
                </span>
              </div>
            </div>

            {/* BOTÕES DE AÇÃO: Baixar e Visualizar PDF */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="/files/Currículo.pdf"
                download="Curriculo_Vinicius_Santos.pdf"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-(--color-primary) text-white font-accent font-semibold text-sm shadow-md hover:bg-(--color-primary-hover) transition-all duration-200 cursor-pointer"
              >
                <FaDownload className="size-4" />
                <span>Baixar CV (PDF)</span>
              </a>
              <a
                href="/files/Currículo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white text-(--tertiary-color) font-accent font-semibold text-sm border border-gray-300 hover:border-(--primary-color) hover:text-(--primary-color) transition-all duration-200 cursor-pointer shadow-xs"
              >
                <FaEye className="size-4" />
                <span>Visualizar PDF</span>
              </a>
            </div>
          </div>
        </section>

        {/* CONTÉUDO ESTRUTURADO DO CURRÍCULO */}
        <div className="px-6 md:px-10 lg:px-20 pt-12 space-y-16">
          {/* 1. RESUMO PROFISSIONAL */}
          <section id="resumo" className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-(--primary-color)/10 text-(--primary-color)">
                <FaUser className="size-5" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-(--tertiary-color)">
                Resumo Profissional
              </h2>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs backdrop-blur-sm">
              <p className="font-body text-base leading-relaxed text-(--tertiary-color)/90">
                Graduando em Engenharia de Software com sólida base técnica em desenvolvimento{' '}
                <strong className="text-(--tertiary-color)">Full Stack</strong> e{' '}
                <strong className="text-(--tertiary-color)">UX/UI Design</strong>. Experiência no ciclo de vida de desenvolvimento de software, desde a concepção de interfaces acessíveis até a implementação de sistemas escaláveis utilizando tecnologias modernas como{' '}
                <span className="font-semibold text-(--primary-color)">React</span>,{' '}
                <span className="font-semibold text-(--primary-color)">Next.js</span> e{' '}
                <span className="font-semibold text-(--primary-color)">Node.js</span>. Focado na entrega de soluções eficientes que otimizam a experiência do usuário e geram valor direto ao negócio.
              </p>
            </div>
          </section>

          {/* 2. EXPERIÊNCIA PROFISSIONAL */}
          <section id="experiencia" className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-(--primary-color)/10 text-(--primary-color)">
                <FaBriefcase className="size-5" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-(--tertiary-color)">
                Experiência Profissional
              </h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:border-(--primary-color)/30 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-(--tertiary-color)">
                        {exp.role}
                      </h3>
                      <p className="font-accent text-sm font-medium text-(--primary-color)">
                        {exp.company} — {exp.location}
                      </p>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-accent font-semibold text-gray-600 border border-gray-200 shrink-0 w-max">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 font-body text-sm text-(--tertiary-color)/85 leading-relaxed">
                    {exp.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 3. PROJETOS */}
          <section id="projetos" className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-(--primary-color)/10 text-(--primary-color)">
                <FaRocket className="size-5" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-(--tertiary-color)">
                Projetos Relevantes
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj, index) => (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-3">
                      <h3 className="font-heading text-lg font-bold text-(--tertiary-color)">
                        {proj.title}
                      </h3>
                      <span className="text-xs font-accent font-semibold text-(--primary-color)">
                        {proj.subtitle}
                      </span>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-(--tertiary-color)/85 mb-4">
                      {proj.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
                    {proj.techs.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-accent font-medium px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. FORMAÇÃO ACADÊMICA */}
          <section id="formacao" className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-(--primary-color)/10 text-(--primary-color)">
                <FaGraduationCap className="size-5" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-(--tertiary-color)">
                Formação Acadêmica
              </h2>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-heading text-xl font-bold text-(--tertiary-color)">
                    Bacharelado em Engenharia de Software
                  </h3>
                  <p className="font-accent text-sm font-medium text-(--primary-color)">
                    UniEvangélica — Anápolis, GO
                  </p>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-accent font-semibold text-gray-600 border border-gray-200 shrink-0 w-max">
                  Jan 2023 – Dez 2026 (Previsão)
                </span>
              </div>
              <p className="font-body text-sm leading-relaxed text-(--tertiary-color)/85">
                Formação com foco em Engenharia de Requisitos, Arquitetura de Software, Testes Automatizados, Metodologias Ágeis e Desenvolvimento Full Stack.
              </p>
            </div>
          </section>

          {/* 5. COMPETÊNCIAS TÉCNICAS & IDIOMAS */}
          <section id="competencias" className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-(--primary-color)/10 text-(--primary-color)">
                <FaWrench className="size-5" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-(--tertiary-color)">
                Competências & Idiomas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h3 className="font-heading text-base font-bold text-(--tertiary-color) mb-3">
                  Linguagens & Frameworks
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'React',
                    'Next.js',
                    'Vite',
                    'Vue',
                    'Node.js',
                    'TypeScript',
                    'JavaScript',
                    'Prisma',
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-accent font-medium px-3 py-1 rounded-full bg-(--primary-color)/10 text-(--primary-color) border border-(--primary-color)/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h3 className="font-heading text-base font-bold text-(--tertiary-color) mb-3">
                  Ferramentas & Design
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'UX/UI Design',
                    'Figma',
                    'WordPress',
                    'Git',
                    'PostgreSQL',
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-accent font-medium px-3 py-1 rounded-full bg-gray-100 text-(--tertiary-color) border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h3 className="font-heading text-base font-bold text-(--tertiary-color) mb-3">
                  Idiomas
                </h3>
                <div className="space-y-2 text-sm font-body text-(--tertiary-color)">
                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="font-semibold">Português</span>
                    <span className="text-xs font-accent px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                      Nativo
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-semibold">Inglês</span>
                    <span className="text-xs font-accent px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold">
                      Intermediário (B1)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA FINAL DE CONTATO */}
        <div className="mt-20">
          <CTASection />
        </div>
      </main>
    </PageTransition>
  );
}

export default Resume;
