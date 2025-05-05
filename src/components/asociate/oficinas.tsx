import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import AnimatedElement from '../ui/AnimatedElement';
import SectionTitle from '../ui/SectionTitle';

interface OfficeCardProps {
  name: string;
  address: string;
  phone?: string;
  hours: string[];
  mapLink?: string;
}

const OfficeCard = ({ name, address, phone, hours, mapLink }: OfficeCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-primary-700 mb-3">{name}</h3>
      
      <div className="space-y-3">
        <div className="flex">
          <FaMapMarkerAlt className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
          <div>
            <p className="text-gray-800">
              {mapLink ? (
                <a 
                  href={mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 transition-colors"
                >
                  {address}
                </a>
              ) : (
                address
              )}
            </p>
          </div>
        </div>
        
        {phone && (
          <div className="flex">
            <FaPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <p className="text-gray-800">
                <a 
                  href={`tel:+${phone.replace(/\D/g, '')}`}
                  className="hover:text-primary-600 transition-colors"
                >
                  {phone}
                </a>
              </p>
            </div>
          </div>
        )}
        
        <div className="flex">
          <FaClock className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
          <div className="space-y-1">
            {hours.map((hour, index) => (
              <p key={index} className="text-gray-700">{hour}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const OficinasSection = () => {
  const offices = [
    {
      name: "Sucursal Centro",
      address: "Mitre 362",
      phone: "3412441459",
      hours: [
        "Lunes a viernes de 8:00 a 19:00 hs",
        "Sábados de 8:30 a 12:30 hs"
      ],
      mapLink: "https://maps.google.com/?q=Mitre+362+Rosario+Santa+Fe"
    },
    {
      name: "Oficina Urquiza",
      address: "Urquiza 1539",
      hours: [
        "Lunes a viernes de 8:00 a 20:00 hs"
      ],
      mapLink: "https://maps.google.com/?q=Urquiza+1539+Rosario+Santa+Fe"
    },
    {
      name: "Oficina Fisherton",
      address: "Av. Eva Perón 8032",
      hours: [
        "Lunes a viernes de 8:30 a 21:00 hs",
        "Sábados de 9:00 a 14:00 hs"
      ],
      mapLink: "https://maps.google.com/?q=Av.+Eva+Perón+8032+Rosario+Santa+Fe"
    },
    {
      name: "Oficina Corrientes",
      address: "Corrientes 430 – PB",
      hours: [
        "Lunes a viernes de 11:00 a 19:00 hs",
        "Sábados de 8:00 a 12:00 hs"
      ],
      mapLink: "https://maps.google.com/?q=Corrientes+430+Rosario+Santa+Fe"
    },
    {
      name: "Club Tiro Suizo",
      address: "Lamadrid 1205",
      hours: [
        "Lunes a viernes de 11:00 a 14:30 hs"
      ],
      mapLink: "https://maps.google.com/?q=Lamadrid+1205+Rosario+Santa+Fe"
    }
  ];

  return (
    <section className="section bg-primary/20">
      <div className="container-custom max-w-7xl">
        <AnimatedElement animation="fade-in">
          <SectionTitle
            subtitle="Nuestras Sucursales"
            title="ACERCATE PERSONALMENTE"
            description="Visítanos en cualquiera de nuestras sucursales para recibir atención personalizada"
            center
          />
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in" delay={0.2} className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <OfficeCard
                key={index}
                name={office.name}
                address={office.address}
                phone={office.phone}
                hours={office.hours}
                mapLink={office.mapLink}
              />
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default OficinasSection;