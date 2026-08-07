import { motion } from 'motion/react';
import { useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import DropdownFilter from '@/components/shared/DropdownFilter';
import OptimizedImage from '@/components/shared/OptimizedImage';
import Cards from '../../shared/Cards';

function HeroSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'Todos', value: 'all', title: 'Todos os trabalhos' },
    { label: 'Front End', value: 'front-end', title: 'Trabalhos Front End' },
    { label: 'Design', value: 'design', title: 'Trabalhos de Design' },
    { label: 'Full Stack', value: 'full-stack', title: 'Trabalhos Full Stack' },
  ];

  const cardsData = [
    {
      title: 'Site iPhone 17 Pro Max',
      description:
        'Um site de e-commerce para o lançamento do iPhone 17 Pro Max, focado em design moderno e experiência de usuário.',
      category: ['front-end'],
      image: '/img/cards/iPhone_17_Pro_Max.webp',
      skills: ['Tailwindcss', 'React.js', 'Design'],
      link: 'https://i-phone-17-website.vercel.app/',
    },
    {
      title: 'Clinica Sensory',
      description:
        'Um site para a Clinica Sensory, focado em acessibilidade e experiência de usuário, utilizando as melhores práticas de desenvolvimento web.',
      category: ['front-end'],
      image: '/img/cards/Clinica_Sensory.webp',
      skills: ['React.ts', 'Figma', 'Tailwindcss'],
      link: 'https://clinica-sensory.vercel.app/',
    },
    {
      title: 'Feedback Analytics',
      description:
        'Uma aplicação de análise de feedbacks, focada em arquitetura de software escalável e experiência de usuário intuitiva.',
      category: ['full-stack', 'front-end', 'design'],
      image: '/img/cards/Feedback_Analytics.webp',
      skills: ['React.js', 'Node.js', 'Design'],
      link: 'https://feedback-analytics.vercel.app/',
    },
    {
      title: 'Convite de Aniversário',
      description:
        'Um convite digital para um aniversário, focado em design criativo e experiência de usuário envolvendo.',
      category: ['design', 'front-end'],
      image: '/img/cards/Invitation.webp',
      skills: ['React', 'Design', 'Tailwindcss'],
      link: 'https://convite-de-anivers-rio-khaki.vercel.app/',
    },
    {
      title: 'Nexus CRM Figma Design',
      description:
        'A prototipagem de um projeto focado em CRM da empresa Nexus Company, com design system completo.',
      category: ['design', 'front-end'],
      image: '/img/works/nexus-crm.webp',
      skills: ['Figma', 'Design'],
      link: 'https://www.figma.com/design/isnL6i1wxp2Ix6XSuYmQh0/Avex-Company?node-id=0-1&t=tYdAhajRaU9YXpsJ-1',
    },
  ];

  const filteredCards = cardsData.filter((card) => {
    if (activeFilter === 'all') return true;
    const categories = Array.isArray(card.category)
      ? card.category
      : [card.category];
    return categories.includes(activeFilter);
  });

  const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className="px-6 md:px-10 lg:px-20 pt-10 bg-gray-50 lg:pt-30">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="font-heading text-3xl font-bold mb-4 text-(--tertiary-color)"
        >
          Trabalhos Selecionados
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.15 }}
          className="text-(--tertiary-color)/90 mb-6 font-body"
        >
          Uma demonstração dos meus trabalhos, focando em arquitetura de
          software, escalabilidade e experiência de usuário.
        </motion.p>

        {/* Filtro */}
        <DropdownFilter
          filters={filters}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
        />

        <div>
          <p className="text-xs text-(--tertiary-color)/40 font-body mt-6 mb-4 uppercase tracking-widest">
            {filters.find((f) => f.value === activeFilter)?.title}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Cards
              items={filteredCards}
              className="flex-col"
              renderContent={(item) => (
                <>
                  <motion.a
                    initial="hidden"
                    whileHover="visible"
                    href={item.link}
                    target="_blank"
                    className="w-full aspect-4/2 relative overflow-hidden cursor-pointer"
                    rel="noopener"
                    aria-label={`Ver projeto ${item.title}`}
                  >
                    <OptimizedImage
                      className="absolute inset-0 size-full shadow-md object-cover border border-white rounded-tr-md rounded-tl-md"
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={300}
                      loading="lazy"
                    />
                    <motion.div
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                      className="bg-black/80 absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div
                        variants={{
                          hidden: { scale: 0 },
                          visible: { scale: 1 },
                        }}
                        className="text-white text-3xl"
                      >
                        <FaArrowUpRightFromSquare />
                      </motion.div>
                    </motion.div>
                  </motion.a>

                  <div className="p-4 flex flex-col gap-2">
                    <div className="flex flex-row gap-2 items-center justify-center">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-(--primary-color) text-white text-xs font-medium px-2 py-1 rounded w-full text-center"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-heading text-lg font-semibold mt-4 text-(--tertiary-color)">
                      {item.title}
                    </h3>
                    <p className="text-(--tertiary-color)/90 mt-2 font-body">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 font-body hover:underline block"
                    >
                      Visualizar Projeto
                    </a>
                  </div>
                </>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
