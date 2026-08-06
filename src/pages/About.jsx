import BeyondTheCodeSection from '@/components/sections/About/BeyondTheCodeSection';
import CTASection from '@/components/sections/About/CTASection';
import FeatureSection from '@/components/sections/About/FeatureSection';
import Hero from '@/components/sections/About/HeroSection';
import SkillSection from '@/components/sections/About/SkillSection';
import PageTransition from '@/components/shared/PageTransition';
import SectionIndicator from '@/components/shared/SectionIndicator';

function About() {
  const sections = [
    { id: 'visao-geral', label: 'Visão Geral', number: '01' },
    { id: 'habilidades', label: 'Skills & Habilidades', number: '02' },
    { id: 'alem-do-codigo', label: 'Além do Código', number: '03' },
  ];

  return (
    <PageTransition>
      {/* Indicador de Seção Lateral Direito (Desktop) */}
      <SectionIndicator sections={sections} />

      <div id="visao-geral">
        <Hero />
      </div>
      <FeatureSection />
      <div id="habilidades">
        <SkillSection />
      </div>
      <div id="alem-do-codigo">
        <BeyondTheCodeSection />
      </div>
      <CTASection />
    </PageTransition>
  );
}

export default About;
