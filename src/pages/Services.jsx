import HeroSection from '@/components/sections/Services/HeroSection';
import ProcessSection from '@/components/sections/Services/ProcessSection';
import CTASection from '@/components/sections/Works/CTASection';
import PageTransition from '@/components/shared/PageTransition';
import SectionIndicator from '@/components/shared/SectionIndicator';

function Services() {
  const sections = [
    { id: 'servicos', label: 'Serviços', number: '01' },
    { id: 'processo', label: 'Processo', number: '02' },
    { id: 'contato', label: 'Contato', number: '03' },
  ];

  return (
    <PageTransition>
      <SectionIndicator sections={sections} />

      <div id="servicos">
        <HeroSection />
      </div>
      <div id="processo">
        <ProcessSection />
      </div>
      <div id="contato">
        <CTASection />
      </div>
    </PageTransition>
  );
}

export default Services;
