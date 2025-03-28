import { useState } from 'react';
import LoansBanner from '../components/loans/LoansBanner';
import LoanCalculator from '../components/loans/LoanCalculator';
import LoanForm from '../components/loans/LoanForm';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedElement from '../components/ui/AnimatedElement';
import Card from '../components/ui/Card';
import { FaCheckCircle, FaInfoCircle, FaPercent, FaFileAlt, FaHome, FaTools, FaBuilding } from 'react-icons/fa';
import Button from '../components/ui/Button';

const LoansPage = () => {
  const [calculatedAmount, setCalculatedAmount] = useState<number | null>(null);
  
  const handleCalculatorSubmit = (amount: number) => {
    setCalculatedAmount(amount);
    
    // Scroll to the loan form
    setTimeout(() => {
      const element = document.getElementById('loan-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <LoansBanner />
      
      <section className="section bg-white">
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
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Opciones de Préstamos"
              title="Elegí tu Solución Financiera"
              description="Ofrecemos distintos productos para tus distintas necesidades de construcción on renovación."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <AnimatedElement animation="slide-up" delay={0.1}>
                <Card elevated className="h-full">
                  <div className="p-6">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <FaHome className="text-2xl text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Renovaciones de Hogar</h3>
                    <p className="text-gray-600 mb-4">
                      Remodelaciones de cocina, baños, y otros proyectos.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <FaPercent className="text-secondary mt-1 mr-2 text-sm" />
                        <span className="text-gray-600 text-sm">Intereses desde 5.99% APR</span>
                      </li>
                      <li className="flex items-start">
                        <FaFileAlt className="text-secondary mt-1 mr-2 text-sm" />
                        <span className="text-gray-600 text-sm">Plazos de hasta 7 años</span>
                      </li>
                    </ul>
                    <Button to="#loan-form" variant="outline" fullWidth>
                      Aplicar ahora
                    </Button>
                  </div>
                </Card>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={0.2}>
                <Card elevated className="h-full">
                  <div className="p-6">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <FaBuilding className="text-2xl text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Nueva Construcción</h3>
                    <p className="text-gray-600 mb-4">
                      Financiá la casa de tus sueños o estructura comercial desde cero.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <FaPercent className="text-secondary mt-1 mr-2 text-sm" />
                        <span className="text-gray-600 text-sm">Intereses desde 6.49% APR</span>
                      </li>
                      <li className="flex items-start">
                        <FaFileAlt className="text-secondary mt-1 mr-2 text-sm" />
                        <span className="text-gray-600 text-sm">Plazos hasta 10 años</span>
                      </li>
                    </ul>
                    <Button to="#loan-form" variant="outline" fullWidth>
                      Aplicar ahora
                    </Button>
                  </div>
                </Card>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={0.3}>
                <Card elevated className="h-full">
                  <div className="p-6">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <FaTools className="text-2xl text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Reparaciones de Emergencia</h3>
                    <p className="text-gray-600 mb-4">
                      Financiación rápida para reparaciones inesperadas de techos, fallas, o problemas estructurales.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <FaPercent className="text-secondary mt-1 mr-2 text-sm" />
                        <span className="text-gray-600 text-sm">Intereses desde 7.99% APR</span>
                      </li>
                      <li className="flex items-start">
                        <FaFileAlt className="text-secondary mt-1 mr-2 text-sm" />
                        <span className="text-gray-600 text-sm">Aprobación rápida</span>
                      </li>
                    </ul>
                    <Button to="#loan-form" variant="outline" fullWidth>
                      Aplicar ahora
                    </Button>
                  </div>
                </Card>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
      
      <section id="loan-form" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Aplicar Ahora"
              title="Solicitar un Préstamo Personal"
              description="Completá el formulario de abajo para empexar el proceso de aplicación. Nuestro equipo se pondrá en contacto dentro de 24-48 horas."
              center
            />
            
            <AnimatedElement animation="fade-in" delay={0.2} className="mt-12">
              <LoanForm initialLoanAmount={calculatedAmount} />
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoansPage;