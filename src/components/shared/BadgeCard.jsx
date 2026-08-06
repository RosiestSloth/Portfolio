function BadgeCard({ item, styles = 'grid-cols-2 md:grid-cols-3', onSelectSkill }) {
  return (
    <div
      className={`w-full grid ${styles} gap-4 items-center justify-center p-2 sm:p-4`}
    >
      {item.map((skill, index) => {
        const isClickable = Boolean(onSelectSkill);

        return (
          <div
            key={skill.id || index}
            onClick={() => onSelectSkill && onSelectSkill(skill)}
            onKeyDown={(e) => {
              if (onSelectSkill && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                onSelectSkill(skill);
              }
            }}
            role={isClickable ? 'button' : undefined}
            tabIndex={isClickable ? 0 : undefined}
            aria-label={`Ver detalhes da habilidade ${skill.label}`}
            className={`group relative size-full p-4 sm:p-5 border flex flex-col items-center justify-center text-center shadow-md rounded-xl backdrop-blur-md transition-all duration-300 ${
              isClickable
                ? 'cursor-pointer border-gray-300 hover:border-(--primary-color) bg-white/70 hover:bg-white hover:-translate-y-1.5 hover:shadow-lg hover:shadow-(--primary-color)/10'
                : 'border-(--tertiary-color)/30 bg-linear-to-br from-white/20 to-[#999999]/20 shadow-[0_0px_8px_rgba(0,0,0,0.15)]'
            }`}
          >
            {/* Tag de nível discreta no topo */}
            {skill.level && (
              <span className="absolute top-2 right-2 text-[10px] font-accent font-semibold px-2 py-0.5 rounded-full bg-(--primary-color)/10 text-(--primary-color) border border-(--primary-color)/20 opacity-90 group-hover:opacity-100 group-hover:bg-(--primary-color) group-hover:text-white transition duration-200">
                {skill.level}
              </span>
            )}

            {/* Ícone com animação de escala suave */}
            <div className="mb-2.5 p-2 rounded-xl bg-gray-50/80 group-hover:bg-(--primary-color)/10 transition duration-300">
              {skill.icon && typeof skill.icon !== 'string' ? (
                <skill.icon className="size-8 text-(--primary-color) group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <img
                  src={skill.icon}
                  alt={skill.label}
                  className="size-8 group-hover:scale-110 transition-transform duration-300"
                />
              )}
            </div>

            {/* Nome da Skill */}
            <span className="font-body text-base sm:text-lg font-semibold text-(--tertiary-color) group-hover:text-(--primary-color) transition-colors">
              {skill.label}
            </span>

            {/* Categoria curta/Tag extra se houver */}
            {skill.categoryLabel && (
              <span className="mt-1 text-xs font-accent text-gray-500 font-medium">
                {skill.categoryLabel}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default BadgeCard;
