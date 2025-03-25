import { useRef, useEffect } from 'react';

const ParallaxSection = () => {
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
        backgroundImage: "url('/assets/images/rapipago-bg.jpg')",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative container mx-auto px-6 z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          PAGA TUS IMPUESTOS
        </h2>
        
        {/* Images Container - Horizontal on desktop, Vertical on mobile */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {/* First Image */}
          <div className="w-full md:w-1/2 max-w-lg mt-8 md:mt-0 flex justify-center">
            <img 
              src="/assets/images/munipagos.png" 
              alt="Featured content 1" 
              className="h-20"
            />
          </div>
          
          {/* Second Image */}
          <div className="w-full md:w-1/2 max-w-lg mt-8 md:mt-0 flex justify-center">
            <img 
              src="/assets/images/rapipago.png" 
              alt="Featured content 2" 
              className="h-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;