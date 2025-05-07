import React, { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import AnimatedElement from '../ui/AnimatedElement';
import { FaFileAlt, FaLaptop, FaHandHoldingUsd } from 'react-icons/fa'; // Using themed Font Awesome icons

// Define the props for the TabSection component
interface TabSectionProps {
  className?: string;
  customContent?: boolean; // Set to true if you want to provide custom tab content
  customTabContents?: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
}

const TabSection: React.FC<TabSectionProps> = ({ 
  className = '', 
  customContent = false,
  customTabContents = []
}) => {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState(0);

  // Default tab contents if no custom content is provided
  const defaultTabContents = [
    {
      title: "Mínimos requisitos",
      description: "Para solicitar nuestro préstamos sólo necesitamos: Nombre y apellido, CUIT/DNI, Número de celular, Dirección de correo electrónico",
      icon: <FaFileAlt className="text-2xl" />
    },
    {
      title: "Trámite 100% Online",
      description: "Podés solicitar tu préstamo vía mail a info@construyendo.org.ar o llenando nuestro formulario de contacto aquí.",
      icon: <FaLaptop className="text-2xl" />
    },
    {
      title: "Financiación",
      description: "Con nuestros planes de financiación podrás devolver el monto solicitado en hasta 36 meses.",
      icon: <FaHandHoldingUsd className="text-2xl" />
    }
  ];

  // Use custom tab contents if provided, otherwise use default
  const tabContents = customContent && customTabContents.length > 0 
    ? customTabContents 
    : defaultTabContents;

  return (
    <section className={`w-full py-16 min-h-[400px] bg-white flex items-center justify-center ${className}`}>
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
          {/* Tabs on the left */}
          <div className="md:w-1/3 flex flex-col space-y-4 self-center">
            {tabContents.map((tab, index) => (
              <AnimatedElement
                key={index}
                className="w-full"
                delay={index * 0.1}
              >
                <Button
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 flex items-center ${
                    activeTab === index
                      ? 'bg-orange-900 text-white shadow-lg'
                      : 'bg-gray-200 text-orange-900 hover:bg-orange-600'
                  }`}
                >
                  <span className="font-medium text-center w-full">{tab.title}</span>
                </Button>
              </AnimatedElement>
            ))}
          </div>

          {/* Content on the right */}
          <div className="md:w-2/3 flex items-center justify-center">
            <AnimatedElement 
              key={activeTab} 
              className="w-full" 
            >
              <Card className="p-8 h-full shadow-md rounded-xl flex flex-col items-center">
                {tabContents[activeTab].icon && (
                  <div className="mb-4 text-orange-900 flex justify-center">
                    {tabContents[activeTab].icon}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-orange-500 text-center">
                  {tabContents[activeTab].title}
                </h3>
                <p className="text-gray-800 leading-relaxed text-center">
                  {tabContents[activeTab].description}
                </p>
              </Card>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabSection;