import { motion } from 'motion/react';
import { FaCode, FaGaugeHigh, FaPalette } from 'react-icons/fa6';
import Cards from '../../shared/Cards';

const items = [
  {
    icon: FaCode,
    title: 'Desenvolvimento Web',
    description:
      'Aplicações web customizadas construídas com React, Vue e arquiteturas modernas otimizadas para melhor performance.',
  },
  {
    icon: FaPalette,
    title: 'UX/UI Design',
    description:
      'Interfaces criadas com foco em usabilidade, comunicação e acessibilide construídas com foco em usabilidade e interatividade.',
  },
  {
    icon: FaGaugeHigh,
    title: 'Melhoria Contínua',
    description:
      'Manter seu website atualizado, seguro e funcionando sem problemas com melhorias contínuas e otimização de desempenho.',
  },
];

function HeroSection() {
  const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className="px-6 md:px-10 lg:px-20 py-10 mt-10 lg:mt-20">
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="text-(--primary-color) text-sm font-semibold tracking-wider"
          >
            SOLUÇÕES & QUALIDADE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-(--tertiary-color) mb-4"
          >
            Meus Serviços Especializados
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="text-(--tertiary-color) font-body mb-6"
          >
            Contribuindo e construindo projetos escaláveis, profissionais e de
            alta performance. Da prototipação inicial ao deploy final.
          </motion.p>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transition, delay: 0.3 }}
            className="mt-4 object-cover rounded-md border-2 border-(--primary-color) md:hidden"
            src="/img/FeedbackAnalytics.webp"
            alt="Feedback Analytics"
            width={600}
            height={400}
            loading="lazy"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
            className="flex flex-col mt-4 gap-4"
          >
            <Cards
              items={items}
              renderContent={(item) => (
                <div className="flex flex-row items-center gap-3 p-4">
                  <item.icon className="size-12 text-(--primary-color) shrink-0" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-(--tertiary-color)">
                      {item.title}
                    </h3>
                    <p className="text-(--tertiary-color)/90 mt-1 font-body text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, delay: 0.3 }}
          className="flex-1 relative overflow-hidden rounded-l-md border-2 border-(--primary-color) border-r-0 -right-6 md:-right-10 lg:-right-20 hidden md:block"
        >
          <img
            className="absolute right-0 w-full h-full object-cover object-left"
            src="/img/FeedbackAnalytics.webp"
            alt="Feedback Analytics"
            width={800}
            height={600}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
