import { useState } from 'react';
import GalleryCategory from '@/components/sections/Gallery/GalleryCategory';
import HeroSection from '@/components/sections/Gallery/HeroSection';
import CTASection from '@/components/sections/Works/CTASection';
import DropdownFilter from '@/components/shared/DropdownFilter';
import PageTransition from '@/components/shared/PageTransition';
import SectionIndicator from '@/components/shared/SectionIndicator';
import { galleryCategories } from '@/data/galleryData';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories =
    activeFilter === 'all'
      ? galleryCategories
      : galleryCategories.filter((cat) => cat.id === activeFilter);

  const filters = [
    { label: 'Todos', value: 'all' },
    ...galleryCategories.map((cat) => ({
      label: cat.title,
      value: cat.id,
    })),
  ];

  const sections = [
    { id: 'galeria', label: 'Galeria', number: '01' },
    { id: 'contato', label: 'Contato', number: '02' },
  ];

  return (
    <PageTransition>
      <SectionIndicator sections={sections} />

      <main className="min-h-screen bg-gray-50">
        <div id="galeria">
          <HeroSection />

          {/* Filtros por categoria */}
          <div className="px-6 md:px-10 lg:px-20 pb-4">
            <DropdownFilter
              filters={filters}
              activeFilter={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          {/* Categorias */}
          <div className="pb-10">
            {filteredCategories.map((category) => (
              <GalleryCategory
                key={category.id}
                title={category.title}
                description={category.description}
                photos={category.photos}
              />
            ))}
          </div>
        </div>

        <div id="contato">
          <CTASection />
        </div>
      </main>
    </PageTransition>
  );
}

export default Gallery;
