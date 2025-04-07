import Hero from '../components/home/Hero';
// import AboutSection from '../components/home/AboutSection';
import ServicesPreview from '../components/home/ServicesPreview';
// import ProjectsShowcase from '../components/home/ProjectsShowcase';
// import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import RapiPago from '../components/home/RapiPago';
import RenovaHO from '@/components/home/RenovaTuHomeOffice';
import HaceteSocio from '@/components/home/HaceteSocio';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HaceteSocio />
      <ServicesPreview />
      {/* <ProjectsShowcase /> */}
      {/* <TestimonialsSection /> */}
      <RapiPago />
      <RenovaHO />
      <CtaSection />
    </>
  );
};

export default HomePage;