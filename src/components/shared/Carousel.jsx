import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
} from 'react-icons/fa6';

function Carousel({ items = [] }) {
  const autoplayRef = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
    },
    [autoplayRef.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Suporte a navegação por teclado (Setas Esquerda / Direita)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      scrollPrev();
    } else if (e.key === 'ArrowRight') {
      scrollNext();
    }
  };

  return (
    <div
      className="relative w-full focus:outline-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carrossel de Projetos"
    >
      {/* Botões de Navegação Flutuantes (shadcn UI style) */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2 z-10">
          <button
            onClick={scrollPrev}
            type="button"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Projeto anterior"
          >
            <FaChevronLeft className="size-4" />
          </button>

          <button
            onClick={scrollNext}
            type="button"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Próximo projeto"
          >
            <FaChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Viewport do Embla Carousel */}
      <div
        className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing p-1"
        ref={emblaRef}
      >
        <div className="flex -ml-4">
          {items.map((item, index) => (
            <div
              key={item.title || index}
              className="pl-4 min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="group h-full bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-gray-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
                {/* Imagem do Projeto */}
                <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-100 aspect-video border border-gray-200">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Título & Descrição */}
                <div className="flex-1 flex flex-col mb-4">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-(--tertiary-color) group-hover:text-(--primary-color) transition-colors mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-(--tertiary-color)/80 line-clamp-3 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Tags Tecnológicas se disponíveis */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-accent font-semibold px-2 py-0.5 rounded-md bg-(--primary-color)/10 text-(--primary-color) border border-(--primary-color)/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Botões de Ação */}
                <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                  {item.linkSite && (
                    <a
                      href={item.linkSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 font-accent font-semibold text-white bg-(--color-primary) hover:bg-(--color-primary-hover) px-3 py-2 text-xs rounded-full transition-all shadow-xs cursor-pointer"
                    >
                      <FaArrowUpRightFromSquare className="size-3" />
                      <span>Ver Site</span>
                    </a>
                  )}

                  {item.linkGitHub && (
                    <a
                      href={item.linkGitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 font-accent font-semibold text-(--tertiary-color) bg-gray-100 hover:bg-gray-200 border border-gray-300 px-3 py-2 text-xs rounded-full transition-all cursor-pointer"
                    >
                      <FaGithub className="size-3.5" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores de Pílula (Pagination Dots) */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            type="button"
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
              index === selectedIndex
                ? 'w-8 bg-white shadow-sm'
                : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
