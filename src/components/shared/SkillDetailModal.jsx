import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';

function SkillDetailModal({ skill, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (skill) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [skill, onClose]);

  return (
    <AnimatePresence>
      {skill && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="relative w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-200 z-10 text-(--tertiary-color)"
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-modal-title"
          >
            {/* Fechar */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition duration-150 cursor-pointer"
              aria-label="Fechar modal"
            >
              <FaXmark className="size-5" />
            </button>

            {/* Cabeçalho */}
            <div className="flex items-center gap-4 mb-6 pr-8">
              <div className="p-3.5 rounded-2xl bg-(--primary-color)/10 border border-(--primary-color)/20 shadow-inner flex items-center justify-center shrink-0">
                {skill.icon && typeof skill.icon !== 'string' ? (
                  <skill.icon className="size-10 text-(--primary-color)" />
                ) : (
                  <img src={skill.icon} alt={skill.label} className="size-10" />
                )}
              </div>
              <div>
                <h3
                  id="skill-modal-title"
                  className="font-heading text-2xl font-bold text-(--tertiary-color)"
                >
                  {skill.label}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-accent font-semibold px-2.5 py-0.5 rounded-full bg-(--primary-color) text-white">
                    {skill.level}
                  </span>
                  <span className="text-xs font-body text-gray-500 font-medium">
                    {skill.categoryLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Descrição */}
            <div className="space-y-4 font-body">
              <div>
                <h4 className="text-xs font-accent font-bold uppercase tracking-wider text-(--primary-color) mb-1">
                  Visão Geral
                </h4>
                <p className="text-sm leading-relaxed text-(--tertiary-color)/90">
                  {skill.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-accent font-bold uppercase tracking-wider text-(--primary-color) mb-1">
                  Aplicação Prática no Portfólio
                </h4>
                <p className="text-sm leading-relaxed text-(--tertiary-color)/90">
                  {skill.experience}
                </p>
              </div>

              {/* Tags / Ecossistema */}
              {skill.tags && skill.tags.length > 0 && (
                <div>
                  <h4 className="text-xs font-accent font-bold uppercase tracking-wider text-(--primary-color) mb-2">
                    Ecossistema & Ferramentas Relacionadas
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-accent px-3 py-1 rounded-md bg-gray-100 text-(--tertiary-color) font-medium border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Botão OK */}
            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={onClose}
                type="button"
                className="px-5 py-2 text-sm font-accent font-semibold rounded-full bg-(--primary-color) text-white hover:bg-(--primary-color)/90 transition cursor-pointer shadow-md"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default SkillDetailModal;
