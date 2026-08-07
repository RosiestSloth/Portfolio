import Carousel from '@/components/shared/Carousel';

function Feature() {
  const items = [
    {
      img: 'img/cards/iPhone_17_Pro_Max.webp',
      title: 'Site iPhone 17 Pro Max',
      description:
        'Um site de vendas de iPhones, com um design moderno e responsivo, utilizando React e Tailwind CSS.',
      linkSite: 'https://i-phone-17-website.vercel.app/',
      linkGitHub: 'https://github.com/RosiestSloth/iPhone-17-Website',
      tags: ['React', 'Tailwind CSS', 'UI/UX Design'],
    },
    {
      img: 'img/cards/Clinica_Sensory.webp',
      title: 'Site Clínica Sensory',
      description:
        'Um site para uma clínica de saúde, com um design moderno e responsivo, utilizando Nuxt e Tailwind CSS.',
      linkSite: 'https://clinica-sensory.vercel.app/',
      linkGitHub: 'https://github.com/RosiestSloth/Clinica-Sensory',
      tags: ['Vue', 'Nuxt', 'Acessibilidade'],
    },
    {
      img: 'img/cards/Feedback_Analytics.webp',
      title: 'Feedback Analytics',
      description:
        'Um sistema de coleta de feedbacks, com um design moderno e responsivo, utilizando React e Tailwind CSS.',
      linkSite: 'https://feedback-analytics.vercel.app/',
      linkGitHub: 'https://github.com/RosiestSloth/Ordem-de-Servicos',
      tags: ['React', 'Tailwind CSS', 'REST API'],
    },
    {
      img: 'img/cards/Invitation.webp',
      title: 'Convite Interativo',
      description:
        'Aplicação web interativa para convites personalizados com animações fluidas e confirmação de presença.',
      linkSite: 'https://i-phone-17-website.vercel.app/',
      linkGitHub: 'https://github.com/RosiestSloth',
      tags: ['React', 'Framer Motion', 'Design System'],
    },
  ];

  return (
    <section className="bg-linear-to-br from-(--secondary-color) to-(--tertiary-color) px-6 md:px-10 lg:px-20 py-12 md:py-18">
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-8">
        Meus Trabalhos
      </h2>
      <p className="font-body text-gray-200 m-4 leading-relaxed text-sm sm:text-base">
        Estes são alguns dos meus projetos mais recentes, onde aplico minhas
        habilidades em desenvolvimento web para criar soluções inovadoras e
        funcionais. Cada projeto reflete meu compromisso com a qualidade e a
        excelência, demonstrando minha capacidade de transformar ideias em
        realidade através do código.
      </p>
      <div className="mb-6">
        <Carousel items={items} />
      </div>
    </section>
  );
}

export default Feature;
