import { AnimatePresence, motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { FaMagnifyingGlass, FaWandMagicSparkles, FaXmark } from 'react-icons/fa6';
import { SKILLS_DATA, SKILL_CATEGORIES } from '@/data/skillsData';
import BadgeCard from '../../shared/BadgeCard';
import DropdownFilter from '../../shared/DropdownFilter';
import SkillDetailModal from '../../shared/SkillDetailModal';

function SkillSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Mapeamento de categorias para o formato do DropdownFilter
  const filterOptions = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => ({
      label: cat.label,
      value: cat.id,
    }));
  }, []);

  // Filtragem combinada por categoria e busca textual
  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchesCategory =
        activeCategory === 'all' || skill.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        skill.label.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.categoryLabel.toLowerCase().includes(query) ||
        (skill.tags && skill.tags.some((tag) => tag.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="px-6 md:px-10 lg:px-20 py-12 relative max-w-screen overflow-hidden">
      {/* Elementos de fundo em gradiente blur */}
      <div className="absolute -left-40 -top-40 size-96 bg-(--primary-color)/15 -z-50 rounded-full blur-3xl" />
      <div className="absolute -right-40 top-1/4 size-96 bg-(--secondary-color)/15 -z-50 rounded-full blur-3xl" />

      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-(--primary-color)/10 border border-(--primary-color)/20 text-(--primary-color) text-xs font-accent font-semibold mb-3">
            <FaWandMagicSparkles className="size-3.5" />
            <span>02 / Skills & Soft Skills</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-(--tertiary-color)">
            Minhas Skills
          </h2>
        </div>

        {/* Controles de Busca e Filtro por Dropdown (Padrão da Galeria & Trabalhos) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Dropdown Filter */}
          <DropdownFilter
            filters={filterOptions}
            activeFilter={activeCategory}
            onChange={setActiveCategory}
            labelPrefix="Categoria:"
          />

          {/* Campo de Busca em Tempo Real */}
          <div className="relative w-full sm:w-64">
            <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar skill..."
              className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white/90 border border-gray-300 text-sm font-body text-(--tertiary-color) placeholder:text-gray-400 focus:outline-none focus:border-(--primary-color) focus:ring-2 focus:ring-(--primary-color)/20 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                type="button"
                aria-label="Limpar busca"
              >
                <FaXmark className="size-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Conteúdo das Skills */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${searchQuery}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {filteredSkills.length > 0 ? (
            <div>
              <div className="mb-4 flex items-center justify-between text-xs font-accent text-gray-500">
                <span>
                  Exibindo {filteredSkills.length}{' '}
                  {filteredSkills.length === 1 ? 'Skill' : 'Skills'}
                </span>
                <span className="italic">Clique em um card para ver detalhes</span>
              </div>
              <BadgeCard
                item={filteredSkills}
                styles="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 font-body"
                onSelectSkill={(skill) => setSelectedSkill(skill)}
              />
            </div>
          ) : (
            <div className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-2xl border border-dashed border-gray-300 p-8">
              <p className="font-body text-base text-gray-600 mb-2 font-medium">
                Nenhuma habilidade encontrada para os filtros atuais.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-2 text-xs font-accent font-bold text-(--primary-color) hover:underline cursor-pointer"
                type="button"
              >
                Limpar filtros e ver todas
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Modal de Detalhes da Skill */}
      <SkillDetailModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </section>
  );
}

export default SkillSection;
