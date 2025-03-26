import { useRef, useEffect } from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';
import { seguros } from '@/data/services';

const Seguros = () => {
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
        backgroundImage: "url('./assets/images/family.jpg')",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative container mx-auto px-6 z-10">
        {/* Title */}
        <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-16">
        Seguros Construyendo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {seguros.map((service, index) => (
            <AnimatedElement
              key={service.id}
              animation="slide-up"
              delay={0.1 * index}
            >
              <Card hoverable elevated className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <service.icon className="text-7xl text-orange-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>                  
                  <Link 
                    to={`/services#${service.id}`} 
                    className="text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </Card>
            </AnimatedElement>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Seguros;