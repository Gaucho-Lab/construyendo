import SectionTitle from '../components/ui/SectionTitle';
import AnimatedElement from '../components/ui/AnimatedElement';
import { FaIdCard, FaUsers, FaHandshake } from 'react-icons/fa';
import OficinasSection from '@/components/asociate/oficinas';
import AsociateBanner from '@/components/asociate/asociatebanner';

import { IconType } from 'react-icons';

interface BenefitCardProps {
    icon: IconType;
    title: string;
    description: string;
  }
  
  interface PlanCardProps {
    title: string;
    price: string;
    features: string[];
    recommended?: boolean;
  }
  
// const AsociateBanner = () => {
//   return (
//     <div className="relative bg-primary py-20 md:py-32">
//       <div className="container-custom text-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Asociate</h1>
//         <p className="text-lg text-white/80 max-w-2xl mx-auto">
//           Sé parte de nuestra comunidad y accede a todos nuestros beneficios
//         </p>
//       </div>
//       <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' }}></div>
//     </div>
//   );
// };


const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-primary-600 mb-4">
        <Icon className="text-4xl" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const PlanCard = ({ title, price, features, recommended }: PlanCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden`}>
      {recommended && (
        <div className="bg-primary-500 text-white text-center py-1 font-medium">
          Recomendado
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="text-3xl font-bold text-primary-600 mb-4">
          ${price} <span className="text-sm text-gray-500 font-normal">/mes</span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pb-6">
        <button className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${recommended ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>
          Asociate ahora
        </button>
      </div>
    </div>
  );
};

const AsociatePage = () => {
  return (
    <>
      <AsociateBanner />
      
      <section className="section">
        <div className="container-custom max-w-7xl">
          <AnimatedElement animation="fade-in">
            <SectionTitle
              subtitle="Beneficios"
              title="¿Por qué asociarte con nosotros?"
              description="Descubre todas las ventajas de formar parte de nuestra mutual"
              center
            />
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.2} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <BenefitCard 
                icon={FaHandshake}
                title="Respaldo financiero"
                description="Accede a préstamos personales con tasas preferenciales y planes adaptados a tus necesidades."
              />
              <BenefitCard 
                icon={FaUsers}
                title="Comunidad solidaria"
                description="Forma parte de una red de apoyo mutuo con valores compartidos y compromiso social."
              />
              <BenefitCard 
                icon={FaIdCard}
                title="Descuentos exclusivos"
                description="Obtén descuentos especiales en comercios asociados y servicios de salud complementarios."
              />
            </div>
          </AnimatedElement>
        </div>
      </section>

      <OficinasSection />
      
      
      <section className="section">
        <div className="container-custom max-w-7xl">
          <AnimatedElement animation="fade-in">
            <SectionTitle
              subtitle="Planes"
              title="Opciones de asociación"
              description="Elige el plan que mejor se adapte a tus necesidades"
              center
            />
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.2} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PlanCard 
                title="Plan Básico"
                price="1500"
                features={[
                  "Credencial de socio",
                  "Acceso a préstamos básicos",
                  "Descuentos en comercios adheridos",
                  "Participación en eventos"
                ]}
              />
              <PlanCard 
                title="Plan Familiar"
                price="2500"
                features={[
                  "Credencial para titular y familia",
                  "Acceso a préstamos preferenciales",
                  "Descuentos ampliados en comercios",
                  "Servicios de asistencia médica básica",
                  "Participación en eventos y talleres"
                ]}
              />
              <PlanCard 
                title="Plan Premium"
                price="3500"
                features={[
                  "Credencial para titular y familia",
                  "Acceso prioritario a préstamos",
                  "Descuentos exclusivos en comercios",
                  "Servicios de asistencia médica completa",
                  "Cobertura en eventos de emergencia",
                  "Talleres y capacitaciones sin costo"
                ]}
              />
            </div>
          </AnimatedElement>
        </div>
      </section>
      
      
    </>
  );
};

export default AsociatePage;