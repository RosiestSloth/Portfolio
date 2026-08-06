import CTASection from '@/components/sections/Works/CTASection';
import HeroSection from '@/components/sections/Works/HeroSection';
import PageTransition from '@/components/shared/PageTransition';
import SectionIndicator from '@/components/shared/SectionIndicator';

function Works() {
  const sections = [
    { id: 'trabalhos', label: 'Trabalhos', number: '01' },
    { id: 'contato', label: 'Contato', number: '02' },
  ];

  return (
    <PageTransition>
      <SectionIndicator sections={sections} />

      <div id="trabalhos">
        <HeroSection />
      </div>
      <div id="contato">
        <CTASection />
      </div>
    </PageTransition>
  );
}

export default Works;
