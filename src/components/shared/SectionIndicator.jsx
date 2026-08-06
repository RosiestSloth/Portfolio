import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

function SectionIndicator({ sections = [] }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  useEffect(() => {
    if (!sections.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 280;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (!sections || sections.length <= 1) return null;

  return (
    <aside
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center justify-center gap-4 p-3.5 bg-white/80 backdrop-blur-md shadow-xl border border-gray-200/80 rounded-full"
      aria-label="Navegação por seções da página"
    >
      {sections.map((sec, index) => {
        const isActive = activeSection === sec.id;
        const numberFormatted = sec.number || `0${index + 1}`;

        return (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="group relative flex items-center justify-center cursor-pointer focus:outline-none size-6"
            type="button"
            aria-label={`Ir para a seção ${sec.label}`}
          >
            {/* Tooltip centralizado com rótulo e número */}
            <span
              className={`absolute right-10 whitespace-nowrap px-3 py-1 rounded-lg text-xs font-accent font-semibold transition-all duration-200 shadow-sm pointer-events-none flex items-center justify-center text-center ${
                isActive
                  ? 'opacity-100 translate-x-0 bg-(--primary-color) text-white'
                  : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-slate-900/85 text-white'
              }`}
            >
              {numberFormatted} / {sec.label}
            </span>

            {/* Ponto Indicador Centralizado */}
            <div
              className={`relative flex items-center justify-center text-center transition-all duration-300 rounded-full ${
                isActive
                  ? 'size-5 bg-(--primary-color)/20 border border-(--primary-color)'
                  : 'size-3.5 bg-gray-300 hover:bg-(--primary-color)/60'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="pageSectionDot"
                  className="size-2.5 bg-(--primary-color) rounded-full shadow-xs"
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                />
              )}
            </div>
          </button>
        );
      })}
    </aside>
  );
}

export default SectionIndicator;
