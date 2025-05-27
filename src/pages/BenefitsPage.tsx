import AnimatedElement from "@/components/ui/AnimatedElement";
import BenefitsBanner from "@/components/benefits/BenefitsBanner";
import SectionTitle from "@/components/ui/SectionTitle";

interface BenefitCardProps {
    image?: string,
    title: string;
    description: string;
    button?: React.ReactNode;
  }

export const BenefitCard = ({ image, title, description, button }: BenefitCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-primary-600 mb-4 flex justify-center">
        <img src={image} className="max-w-[300px] max-h-[180px]"></img>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      
      {button && (
        <div className="mt-4">
          {button}
        </div>
      )}
    </div>
  );
};

const BenefitsPage = () => {
  return (
    <>
        <BenefitsBanner />
      <section className="section">
        <div className="container-custom max-w-7xl">

          <AnimatedElement animation="fade-in">
            <SectionTitle
              subtitle=""
              title="Mirá todos los beneficios que podes aprovechar"
              description="Descubrí todas las ventajas de formar parte de nuestra mutual"
              center
            />
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.2} className="mt-12 grid justify-items-center">
            <div className="grid grid-cols-1 gap-6 max-w-3xl">
              <BenefitCard   
                image="./assets/images/europtica.jpeg"
                title="Europtica"
                description="20% de descuento en efectivo y 10% de descuento con débito"
              />
              <BenefitCard 
                image="./assets/images/ovalo.png"
                title="El Óvalo Sports"
                description="20% de descuento en alquiler de canchas, cumpleaños infantiles y en la academia formativa"
              />
            </div>
          </AnimatedElement>
        </div>
      </section>
      
    </>
  );
};

export default BenefitsPage;