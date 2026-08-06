import { FaBookOpen, FaDumbbell, FaGamepad, FaHeart } from 'react-icons/fa6';
import Cards from '../../shared/Cards';

function BeyondTheCodeSection() {
  const items = [
    {
      icon: FaGamepad,
      title: 'Jogos',
      description:
        'Adoro jogar e me expressar por meio de jogos criativos como Minecraft e Hytale. Também gosto de jogos de tabuleiro e experiências cooperativas.',
    },
    {
      icon: FaBookOpen,
      title: 'Leitura',
      description:
        'Adoro mergulhar em diferentes estilos literários e enriquecer minha imaginação com as histórias que encontro em cada leitura.',
    },
    {
      icon: FaDumbbell,
      title: 'Academia',
      description:
        'Não é apenas um hobby, mas uma parte essencial da minha saúde e bem-estar.',
    },
  ];

  return (
    <section className="px-6 md:px-10 lg:px-20 py-12">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-(--primary-color)/10 border border-(--primary-color)/20 text-(--primary-color) text-xs font-accent font-semibold mb-3">
        <FaHeart className="size-3.5" />
        <span>03 / Além do Código</span>
      </div>
      <h2 className="font-heading text-3xl font-bold mb-6 text-(--tertiary-color)">
        Interesses Pessoais & Hobbies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Cards items={items} className="items-center p-4" />
      </div>
    </section>
  );
}

export default BeyondTheCodeSection;
