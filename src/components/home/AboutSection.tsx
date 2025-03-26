import { FaAward, FaUsers, FaHardHat, FaCheckCircle } from 'react-icons/fa';
import AnimatedElement from '../ui/AnimatedElement';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const AboutSection = () => {
  const achievements = [
    {
      icon: FaAward,
      value: '35+',
      label: 'Años de experiencia',
    },
    {
      icon: FaUsers,
      value: '500+',
      label: 'Clientes contentos',
    },
    {
      icon: FaHardHat,
      value: '850+',
      label: 'Proyectos completados',
    },
    {
      icon: FaCheckCircle,
      value: '25+',
      label: 'Premios de la industria',
    },
  ];

  // const coreValues = [
  //   'Quality Craftsmanship',
  //   'Client Satisfaction',
  //   'Timely Delivery',
  //   'Sustainable Practices',
  //   'Safety First',
  //   'Transparent Communication',
  // ];

  return (
    <section className="section bg-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedElement animation="slide-in-right" className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="./assets/images/construction.jpg"
                alt="Construction team at work site"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {/* <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-3xl font-bold">35+</p>
                <p className="text-sm">Years of Excellence</p>
              </div> */}
            </div>
          </AnimatedElement>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionTitle
              subtitle="About Our Company"
              title="Construyendo – Asociación Mutual"
              description="Es una entidad civil constituida por personas inspiradas en la ayuda mutua y el bienestar de nuestros afiliados. Por eso ponemos a su alcance múltiples servicios y prestaciones a fin de cubrir todos los aspectos que hacen a su seguridad y satisfacción y la de su familia."
            />

            <AnimatedElement animation="slide-up" delay={0.3} className="mb-8">
              <p className="text-gray-600">
              La Mutual está dirigida a toda la comunidad en general, tanto a trabajadores independientes, como a personas en relación de dependencia, contratistas, profesionales, estudiantes, amas de casa, etc.
              </p>
            </AnimatedElement>

            {/* Core Values */}
            {/* <AnimatedElement animation="slide-up" delay={0.4} className="mb-8">
              <h3 className="text-xl font-bold mb-4">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="text-secondary mr-2" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </AnimatedElement> */}

            <AnimatedElement animation="slide-up" delay={0.5}>
              <Button to="/services">
                Discover Our Services
              </Button>
            </AnimatedElement>

            {/* Achievements */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {achievements.map((item, index) => (
                <AnimatedElement
                  key={index}
                  animation="fade-in"
                  delay={0.2 * index}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <item.icon className="text-3xl text-secondary" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold">{item.value}</h4>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;