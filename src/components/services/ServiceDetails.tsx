import { motion } from 'framer-motion';
import { useState } from 'react';
import { Service } from '../../data/services';
import AnimatedElement from '../ui/AnimatedElement';
import Button from '../ui/Button';

interface ServiceDetailsProps {
  service: Service;
}

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-8">
      <AnimatedElement animation="fade-in">
        <div className="bg-gray-100 p-6 rounded-lg mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-lg overflow-hidden shadow-lg">
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <AnimatedElement animation="slide-up" delay={0.1}>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={0.2}>
                <div className="mb-6">
                  <div className="flex">
                    <service.icon className="text-4xl text-primary mr-4" />
                    <p className="text-lg">{service.description}</p>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={0.3}>
                <div className="border-t border-gray-300 pt-6">
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </AnimatedElement>

      <AnimatedElement animation="slide-up" delay={0.4}>
        <div className="mb-6">
          <div className="border-b border-gray-300">
            <div className="flex flex-wrap">
              <button
                className={`py-3 px-5 font-semibold border-b-2 transition-colors ${
                  activeTab === 'overview'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-primary'
                }`}
                onClick={() => handleTabChange('overview')}
              >
                Overview
              </button>
              <button
                className={`py-3 px-5 font-semibold border-b-2 transition-colors ${
                  activeTab === 'benefits'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-primary'
                }`}
                onClick={() => handleTabChange('benefits')}
              >
                Benefits
              </button>
              <button
                className={`py-3 px-5 font-semibold border-b-2 transition-colors ${
                  activeTab === 'process'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-primary'
                }`}
                onClick={() => handleTabChange('process')}
              >
                Our Process
              </button>
            </div>
          </div>
        </div>
      </AnimatedElement>

      <AnimatedElement animation="fade-in" delay={0.5}>
        <div className="mb-8">
          {activeTab === 'overview' && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">Service Overview</h3>
              <p className="text-gray-700">
                Our experienced team brings together the skills, knowledge, and commitment necessary to deliver exceptional results on every project. We work closely with our clients to understand their unique requirements and tailor our approach accordingly, ensuring that your specific needs are met with precision and care.
              </p>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">Benefits of Our Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Expert Craftsmanship</h4>
                  <p className="text-gray-700">
                    Our skilled professionals bring years of experience and specialized training to every project, ensuring superior quality and attention to detail.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Transparent Communication</h4>
                  <p className="text-gray-700">
                    We maintain open lines of communication throughout the project, keeping you informed of progress and addressing any concerns promptly.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Timely Completion</h4>
                  <p className="text-gray-700">
                    We understand the importance of deadlines and work efficiently to complete your project on schedule without compromising quality.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Cost Efficiency</h4>
                  <p className="text-gray-700">
                    Our experience allows us to optimize resources and minimize waste, providing excellent value without sacrificing quality.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Process</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Initial Consultation</h4>
                    <p className="text-gray-700">
                      We begin by understanding your vision, requirements, and constraints, establishing a solid foundation for the project.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Planning & Design</h4>
                    <p className="text-gray-700">
                      Our team develops detailed plans and designs, considering functionality, aesthetics, and regulatory requirements.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Project Execution</h4>
                    <p className="text-gray-700">
                      With careful coordination and skilled craftsmanship, we bring the plans to life, maintaining quality control throughout.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Final Inspection & Delivery</h4>
                    <p className="text-gray-700">
                      We conduct thorough inspections to ensure everything meets our high standards before handing over the completed project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </AnimatedElement>

      <AnimatedElement animation="fade-in" delay={0.6} className="flex justify-center mt-12">
        <Button to="/contact" size="lg">
          Get a Quote for This Service
        </Button>
      </AnimatedElement>
    </div>
  );
};

export default ServiceDetails;