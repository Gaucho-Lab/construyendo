import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ServicesBanner from '../components/services/ServicesBanner';
import ServiceCard from '../components/services/ServiceCard';
import ServiceDetails from '../components/services/ServiceDetails';
import { services } from '../data/services';
import AnimatedElement from '../components/ui/AnimatedElement';
import SectionTitle from '../components/ui/SectionTitle';
import Seguros from '@/components/services/Seguros';
import TabSection from '@/components/services/TabSection';
import Turismo from '@/components/services/Turismo';


const ServicesPage = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Check for a hash in the URL to determine if a specific service should be shown
  useEffect(() => {
    if (location.hash) {
      const serviceId = location.hash.slice(1);
      setSelectedService(serviceId);
      
      // Scroll to the service details section
      setTimeout(() => {
        const element = document.getElementById('service-details');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location]);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    
    // Scroll to the service details section
    setTimeout(() => {
      const element = document.getElementById('service-details');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Find the selected service object
  const selectedServiceObject = services.find(service => service.id === selectedService);

  return (
    <>
      <ServicesBanner />
      
      <section className="section bg-light">
        <div className="container-custom">
          <SectionTitle
            title="Nuestros Servicios"
            description="Ofrecemos servicios para la construccion de alta calidad, para obras residenciales, comerciales e industriales."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <AnimatedElement
                key={service.id}
                animation="slide-up"
                delay={0.1 * index}
              >
                <ServiceCard
                  service={service}
                  isSelected={selectedService === service.id}
                  onSelect={handleServiceSelect}
                />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <Seguros />

      <TabSection />

      <Turismo />

      {selectedService && selectedServiceObject && (
        <section id="service-details" className="section bg-white">
          <div className="container-custom">
            <ServiceDetails service={selectedServiceObject} />
          </div>
        </section>
      )}
    </>
  );
};

export default ServicesPage;