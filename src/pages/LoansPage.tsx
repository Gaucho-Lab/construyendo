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
                subtitle="Personal Loans"
                title="Financing Solutions for Your Construction Projects"
                description="We offer flexible financing options to help you bring your construction dreams to life. Our personal loan services are designed to make your project affordable and manageable."
              />
              
              <AnimatedElement animation="slide-up" delay={0.2} className="mb-8">
                <p className="text-gray-600">
                  Whether you're planning a home renovation, a new construction project, or need funding for unexpected repairs, our loan programs provide competitive rates and personalized solutions tailored to your specific needs.
                </p>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-2" />
                    <span>Competitive interest rates</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-2" />
                    <span>Fast approval process</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-2" />
                    <span>Flexible repayment terms</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-2" />
                    <span>No prepayment penalties</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-2" />
                    <span>Personalized service</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="text-secondary mt-1 mr-2" />
                    <span>Expert financial guidance</span>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="fade-in" delay={0.4}>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary mb-6">
                  <div className="flex items-start">
                    <FaInfoCircle className="text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-semibold">Loan amounts from $5,000 to $250,000</p>
                      <p className="text-sm text-gray-600">
                        Terms from 12 to 120 months, subject to approval and creditworthiness.
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
              subtitle="Loan Options"
              title="Choose the Right Financing Solution"
              description="We offer several loan products designed to meet different construction and renovation needs."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <AnimatedElement animation="slide-up" delay={0.1}>
                <Card elevated className="h-full">
                  <div className="p-6">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <FaHome className="text-2xl text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Home Renovation</h3>
                    <p className="text-gray-600 mb-4">
                      Perfect for kitchen remodels, bathroom updates, and other home improvement projects.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <FaPercent className="text-secondary mt-1 mr-2 text-sm" />
                        <span className="text-gray-600 text-sm">Rates from 5.99% APR</span>
                      </li>
                      <li className="flex items-start">
                        <FaFileAlt className="text-secondary mt-1 mr-2 text-sm" />
                        <span className="text-gray-600 text-sm">Terms up to 7 years</span>
                      </li>
                    </ul>
                    <Button to="#loan-form" variant="outline" fullWidth>
                      Apply Now
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
                    <h3 className="text-xl font-bold mb-3">New Construction</h3>
                    <p className="text-gray-600 mb-4">
                      Finance your dream home or commercial building project from the ground up.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <FaPercent className="text-secondary mt-1 mr-2 text-sm" />
                        <span className="text-gray-600 text-sm">Rates from 6.49% APR</span>
                      </li>
                      <li className="flex items-start">
                        <FaFileAlt className="text-secondary mt-1 mr-2 text-sm" />
                        <span className="text-gray-600 text-sm">Terms up to 10 years</span>
                      </li>
                    </ul>
                    <Button to="#loan-form" variant="outline" fullWidth>
                      Apply Now
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
                    <h3 className="text-xl font-bold mb-3">Emergency Repairs</h3>
                    <p className="text-gray-600 mb-4">
                      Quick funding for unexpected repairs like roof leaks, HVAC failures, or structural issues.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <FaPercent className="text-secondary mt-1 mr-2 text-sm" />
                        <span className="text-gray-600 text-sm">Rates from 7.99% APR</span>
                      </li>
                      <li className="flex items-start">
                        <FaFileAlt className="text-secondary mt-1 mr-2 text-sm" />
                        <span className="text-gray-600 text-sm">Fast approval in 48 hours</span>
                      </li>
                    </ul>
                    <Button to="#loan-form" variant="outline" fullWidth>
                      Apply Now
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
              subtitle="Apply Now"
              title="Request a Personal Loan"
              description="Fill out the form below to start your loan application process. Our team will review your information and contact you within 24-48 hours."
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