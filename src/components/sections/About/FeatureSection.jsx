import { FaReact, FaVuejs } from 'react-icons/fa6';
import { SiPrisma } from 'react-icons/si';
import Cards from '../../shared/Cards';

function FeatureSection() {
  const features = [
    {
      icon: FaReact,
      title: 'React',
      description:
        'Desenvolvimento Front End utilizando a biblioteca React com Vite e Next.js, utilizando boas práticas e construção de componentes reutilizáveis.',
    },
    {
      icon: SiPrisma,
      title: 'Prisma ORM',
      description:
        'Criação de APIs com prisma, utilizando arquiteturas de código atuais, promovendo a escalabilidade e manutenção do código',
    },
    {
      icon: FaVuejs,
      title: 'Vue & Nuxt',
      description:
        'Desenvolvimento Front End utilizando o framework Nuxt com Vue, utilizando boas práticas e construção de componentes reutilizáveis.',
    },
  ];

  return (
    <section className="px-6 md:px-10 lg:px-20 py-10 bg-linear-to-br from-(--primary-color) via-(--secondary-color) to-(--tertiary-color) grid grid-cols-1 md:grid-cols-3 gap-4">
      <Cards items={features} className="p-4" />
    </section>
  );
}

export default FeatureSection;
