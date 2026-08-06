import Feature from '@/components/sections/Home/FeatureSection';
import Hero from '@/components/sections/Home/HeroSection';
import Journey from '@/components/sections/Home/JourneySection';
import ServicesSection from '@/components/sections/Home/ServicesSection';
import StatsSection from '@/components/sections/Home/StatsSection';
import PageTransition from '@/components/shared/PageTransition';
import SectionIndicator from '@/components/shared/SectionIndicator';

function Home() {
  const sections = [
    { id: 'inicio', label: 'Início', number: '01' },
    { id: 'destaques', label: 'Destaques', number: '02' },
    { id: 'trajetoria', label: 'Trajetória', number: '03' },
    { id: 'metricas', label: 'Métricas', number: '04' },
    { id: 'servicos', label: 'Serviços', number: '05' },
  ];

  return (
    <PageTransition>
      <SectionIndicator sections={sections} />

      <div id="inicio">
        <Hero />
      </div>
      <div id="destaques">
        <Feature />
      </div>
      <div id="trajetoria">
        <Journey />
      </div>
      <div id="metricas">
        <StatsSection />
      </div>
      <div id="servicos">
        <ServicesSection />
      </div>
    </PageTransition>
  );
}

export default Home;
