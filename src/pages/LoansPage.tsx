// import { useState } from 'react';
import LoansBanner from '../components/loans/LoansBanner';
// import LoanCalculator from '../components/loans/LoanCalculator';
import LoanForm from '../components/loans/LoanForm';
// import SectionTitle from '../components/ui/SectionTitle';
import AnimatedElement from '../components/ui/AnimatedElement';
import Card from '../components/ui/Card';
// import { FaPercent, FaFileAlt, FaHome, FaTools, FaBuilding } from 'react-icons/fa';
// import Button from '../components/ui/Button';

const LoansPage = () => {
  // const [calculatedAmount, setCalculatedAmount] = useState<number | null>(null);
  
  // const handleCalculatorSubmit = (amount: number) => {
  //   setCalculatedAmount(amount);
    
  //   // Scroll to the loan form
  //   setTimeout(() => {
  //     const element = document.getElementById('loan-form');
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }, 100);
  // };

  return (
    <>
      <LoansBanner />
      
      {/* <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Préstamos Personales"
                title="Soluciones Financieras Para Tus Proyectos de Construcción"
                description="Ofrecemos opciones flexibles para ayudarte a hacer realidad tus ideas de construcción."
              />
              
              <AnimatedElement animation="slide-up" delay={0.2} className="mb-8">
                <p className="text-gray-600">
                  Estas planeando un proyecto de renovación de tu hogar, reparación o una nueva construcción? Nuestro programa de préstamos ofrece intereses competitivos y soluciones personalizadas hechas para tus necesidades específicas.
                </p>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-2" />
                    <span>Tasas de Interés Competitivas</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-2" />
                    <span>Proceso de Aprobación Rápido</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-2" />
                    <span>Términos de Pago Flexibles</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-2" />
                    <span>Sin Penalidades de Cancelación</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-2" />
                    <span>Servicio Personalizado</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-2" />
                    <span>Equipo de Expertos Preparados Para Ayudarte</span>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="fade-in" delay={0.4}>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary mb-6">
                  <div className="flex items-start">
                    <FaInfoCircle className="text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-semibold">Montos que van desde $5,000 a $250,000</p>
                      <p className="text-sm text-gray-600">
                        Plazos de 12 a 120 meses, sujeto a aprobación y historial crediticio.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            <AnimatedElement animation="slide-in-right">
              <LoanCalculator onSubmit={handleCalculatorSubmit} />
            </AnimatedElement>
          </div>
        </div>
      </section> */}
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* <SectionTitle
              subtitle="Opciones de Préstamos"
              title="Elegí tu Solución Financiera"
              description="Ofrecemos distintos productos para tus distintas necesidades de construcción on renovación."
              center
            /> */}
            <div className="w-3/4 mx-auto border-t-4 border-primary my-2"></div>
            <h2 className='text-4xl text-primary text-center'>CÓMO OBTENER TU PRÉSTAMO PASO A PASO</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <AnimatedElement animation="slide-up" className='p-2' delay={0.1}>
              <Card elevated className="h-full">
                    <p className="text-primary mt-4 text-center">
                      - Paso 1 -
                    </p>
                    <div className='flex justify-center'>
                      <img
                        src="./assets/images/PASO-1.png"
                        alt="Contact us on WhatsApp"
                        className="w-32 mt-4"
                      />
                    </div>
                    <div className='px-4'>
                      <h3 className="text-xl font-bold mt-4 text-center">LLENÁ EL FORMULARIO</h3>
                      <p className="text-primary my-2 text-center">
                        Realizá una solicitud online llenando el formulario debajo. 
                      </p>
                    </div>
                </Card>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" className='p-2' delay={0.2}>
                <Card elevated className="h-full">
                    <p className="text-primary mt-4 text-center">
                      - Paso 2 -
                    </p>
                    <div className='flex justify-center'>
                      <img
                        src="./assets/images/PASO-2.png"
                        alt="Contact us on WhatsApp"
                        className="w-32 mt-4"
                      />
                    </div>
                    <div className='px-4'>
                      <h3 className="text-xl font-bold mt-4 text-center my-auto">RECIBÍ TU RESPUESTA</h3>
                      <p className="text-primary my-4 text-center">
                      Recibirás nuestra confirmación de aprobación o rechazo vía teléfono o email. 
                      </p>
                    </div>
                </Card>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" className='p-2' delay={0.3}>
              <Card elevated className="h-full">
                    <p className="text-primary mt-4 text-center">
                      - Paso 3 -
                    </p>
                    <div className='flex justify-center'>
                      <img
                        src="./assets/images/PASO-3.png"
                        alt="Contact us on WhatsApp"
                        className="w-32 mt-4"
                      />
                    </div>
                    <div className='px-4'>
                      <h3 className="text-xl font-bold mt-4  text-center my-auto">OBTENÉ TU DINERO</h3>
                      <p className="text-primary my-4 text-center">
                      Aprobada la operación y trámites administrativos, podrás retirar tu dinero. 
                      </p>
                    </div>
                </Card>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
      
      <section id="loan-form" className="section bg-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="w-3/4 mx-auto border-t-4 border-primary my-2"></div>
            <h2 className='text-4xl text-primary text-center'>SOLICITÁ TU PRÉSTAMO PERSONAL AQUÍ</h2>
            
            <AnimatedElement animation="fade-in" delay={0.2} className="mt-12">
              <LoanForm initialLoanAmount={0} />
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoansPage;