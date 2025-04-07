import { useRef, useEffect } from 'react';

const HaceteSocio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    
    const handleParallax = () => {
      // Check if section is in viewport
      const rect = section.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport) {
        // Calculate how far the section is scrolled into view
        const scrollPercentage = 1 - (rect.top / window.innerHeight);
        const parallaxOffset = Math.min(50, scrollPercentage * 50);
        
        // Apply the background position
        section.style.backgroundPositionY = `${parallaxOffset}%`;
      }
    };
    
    // Set initial position
    handleParallax();
    
    // Add scroll listener
    window.addEventListener('scroll', handleParallax);
    
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-24 lg:py-32 bg-cover bg-center"
      style={{
        backgroundImage: "url('./assets/images/socios.jpg')",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      
      {/* Content Container - Centered with max-width */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          {/* Title - Taking 50% width on medium screens and up */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-7xl font-bold text-white text-center md:text-right">
              HACETE <br/>SOCIO
            </h2>
          </div>
          
          {/* Vertical Divider - Only visible on md screens and up */}
          <div className="hidden md:block h-64 w-[2px] bg-white/80 mx-4"></div>
          
          {/* Paragraphs - Taking 50% width on medium screens and up */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="font-bold text-white/90">
              Contamos con un medio de asociación gratuito, donde la única condición es llenar el formulario de inscripción con los datos requeridos, fotocopia de la primera y segunda hojas de su D.N.I. y un impuesto o servicio a su nombre.
            </p>
            <p className="text-white/90">
              Contamos con un medio de asociación gratuito, donde la única condición es llenar el formulario de inscripción con los datos requeridos, fotocopia de la primera y segunda hojas de su D.N.I. y un impuesto o servicio a su nombre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaceteSocio;