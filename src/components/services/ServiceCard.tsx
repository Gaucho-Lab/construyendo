import Card from '../ui/Card';
import { Service } from '../../data/services';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onSelect: (serviceId: string) => void;
}

const ServiceCard = ({ service, isSelected }: ServiceCardProps) => {
  return (
    <Card 
      hoverable 
      elevated 
      className={`h-full transition-all duration-300 ${
        isSelected ? 'ring-2 ring-primary ring-offset-2' : ''
      }`}
    >
      {/* <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end">
          <div className="p-4">
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
          </div>
        </div>
      </div> */}
      
      <div className="p-6">
        <h3 className="text-xl text-center font-bold mb-4">{service.title}</h3>
        <div className="flex items-start mb-4">
          <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center mr-4">
            <service.icon className="text-xl text-primary" />
          </div>
          <p className="text-gray-600">{service.description}</p>
        </div>
        
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(service.id)}
          className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all font-semibold"
        >
          {isSelected ? 'Selected' : 'Learn More'}
        </motion.button> */}

        <Link to="/prestamos">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all font-semibold"
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;