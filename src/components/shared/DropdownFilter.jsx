import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { FaChevronDown, FaFilter } from 'react-icons/fa6';

function DropdownFilter({
  filters,
  activeFilter,
  onChange,
  labelPrefix = 'Filtrar por:',
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('[data-dropdown]')) setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeLabel =
    filters.find((f) => f.value === activeFilter)?.label ?? 'Todos';

  const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

  return (
    <div data-dropdown className="relative w-max">
      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...transition, delay: 0.3 }}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-3 px-5 py-2.5 rounded-full text-white font-accent font-semibold text-sm bg-(--color-primary) shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:bg-(--color-primary-hover) transition duration-100 cursor-pointer"
        type="button"
      >
        <FaFilter className="w-3.5 h-3.5 shrink-0" />
        {labelPrefix && (
          <span className="text-white/60 font-normal">{labelPrefix}</span>
        )}
        <span>{activeLabel}</span>
        <FaChevronDown
          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
        />
      </motion.button>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full mt-2 left-0 w-full z-50 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100"
          >
            {filters.map((filter) => (
              <li key={filter.value}>
                <button
                  onClick={() => {
                    onChange(filter.value);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 text-sm font-accent font-semibold transition duration-100 cursor-pointer
                    ${
                      activeFilter === filter.value
                        ? 'bg-(--primary-color) text-white pointer-events-none'
                        : 'text-(--tertiary-color) hover:bg-gray-200'
                    }`}
                  type="button"
                >
                  {filter.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropdownFilter;
