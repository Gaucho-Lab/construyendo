import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import SectionTitle from '../ui/SectionTitle';
import AnimatedElement from '../ui/AnimatedElement';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ServicesPreview = () => {
  // Show only the first 3 services on the home page
  const previewServices = services.slice(0, 3);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          subtitle=""
          title="Nuestros servicios"
          description="Ofrecemos un rango de servicios de construcción apuntado a satisfacer tus necesidades especificas, residenciales, comerciales e industriales."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {previewServices.map((service, index) => (
            <AnimatedElement
              key={service.id}
              animation="slide-up"
              delay={0.1 * index}
            >
              <Card hoverable elevated className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <service.icon className="text-2xl text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  {/* <Link 
                    to={`/services#${service.id}`} 
                    className="text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Saber Más →
                  </Link> */}
                </div>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="fade-in" delay={0.4} className="flex justify-center mt-12">
          <Button to="/services" size="lg">
            Ver Todos Los Servicios
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ServicesPreview;