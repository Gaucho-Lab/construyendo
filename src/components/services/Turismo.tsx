import { useRef, useEffect } from 'react';
import AnimatedElement from '../ui/AnimatedElement';
// import Card from '../ui/Card';
// import { Link } from 'react-router-dom';
import { turismo } from '@/data/services';

const Turismo = () => {
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
        backgroundImage: "url('./assets/images/turismo.jpg')",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative container mx-auto px-6 z-10">
        {/* Title */}
        <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-16">
          TURISMO CONSTRUYENDO
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 items-center">
          {turismo.map((service, index) => (
            <AnimatedElement
              key={service.id}
              animation="slide-up"
              delay={0.1 * index}
            >
                <div className="p-6 flex flex-col h-full items-center">
                  <div className="p-4 flex items-center justify-center mb-6">
                    <service.icon className="text-7xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>                  
                  <p className='text-center text-white'>{service.description}</p>
                </div>
            </AnimatedElement>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Turismo;