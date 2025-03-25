import { 
  FaHome, 
  FaHandHoldingUsd, 
  FaCreditCard, 
  FaPiggyBank, 
  FaLaptop, 
  FaPlane, 
  FaTabletAlt, 
  FaGuitar, 
  FaShip,
  FaBicycle,
  FaCarCrash,
  FaPaw,
  FaUserInjured,
  FaSolarPanel,
  FaHouseDamage,
  FaPlaneDeparture,
  FaHotel,
  FaSuitcaseRolling
  } 
  from 'react-icons/fa';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Seguro {
  id: string;
  title: string;
  icon: React.ElementType;
}

export interface Tab {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  features: string[];
  detailedDescription: string;
}

export interface Turismo {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const services: Service[] = [
  {
    id: 'Construyendo Viviendas',
    title: 'Construyendo Viviendas',
    description: 'Construcción en seco. La forma más rápida, segura y eficaz de crear tu hogar.',
    icon: FaHome,
    },
  {
    id: 'Seguros',
    title: 'Seguros',
    description: 'Cuida tu casa, auto y mucho más accediendo a nuestros seguros.​',
    icon: FaHandHoldingUsd,
    },
  {
    id: 'Préstamos personales',
    title: 'Préstamos personales',
    description: 'Accede vía online a tu préstamos de hasta $1.000.000 en 36 meses',
    icon: FaPiggyBank,
    },
  {
    id: 'Viajes',
    title: 'Viajes',
    description: 'Factories, warehouses, and industrial facilities built with precision and durability.',
    icon: FaPlane,
    },
  {
    id: 'Efectivo Ya!',
    title: 'Efectivo Ya!',
    description: 'Comprehensive design services to bring your construction project to life.',
    icon: FaCreditCard,
    },
  {
    id: 'Hogar & Electro',
    title: 'Hogar & Electro',
    description: 'Comprehensive design services to bring your construction project to life.',
    icon: FaLaptop,
    },
];

export const seguros: Seguro[] = [
  {
    id: 'COMPUTADORAS',
    title: 'COMPUTADORAS',
    icon: FaLaptop,
  },
  {
    id: 'TABLETS',
    title: 'TABLETS',
    icon: FaTabletAlt,
  },
  {
    id: 'HOGAR',
    title: 'HOGAR',
    icon: FaHouseDamage,
  },
  {
    id: 'INST. MUSICALES',
    title: 'INST. MUSICALES',
    icon: FaGuitar,
  },
  {
    id: 'TERMOTANQUES SOLARES',
    title: 'TERMOTANQUES SOLARES',
    icon: FaSolarPanel,
  },
  {
    id: 'BICICLETAS',
    title: 'BICICLETAS',
    icon: FaBicycle,
  },
  {
    id: 'ACCIDENTES PERSONALES',
    title: 'ACCIDENTES PERSONALES',
    icon: FaUserInjured,
  },
  {
    id: 'AUTOMÓVIL',
    title: 'AUTOMÓVIL',
    icon: FaCarCrash,
  },
  {
    id: 'EMBARCACIONES',
    title: 'EMBARCACIONES',
    icon: FaShip,
  },
  {
    id: 'MASCOTAS',
    title: 'MASCOTAS',
    icon: FaPaw,
  }

];

export const turismo: Turismo[] = [
  {
    id: 'Destinos',
    title: 'DESTINO',
    description:'Viajá adónde quieras. En Construyendo te ofrecemos las mejores ofertas en destinos nacionales e internacionales.',
    icon: FaPlaneDeparture,
  },
  {
    id: 'Alojamientos',
    title: 'ALOJAMIENTOS',
    description:'Hacemos que tu estadía sea única. Construyendo te hospeda a vos y tu familia en los mejores hoteles.',
    icon: FaHotel,
  },
  {
    id: 'Paquetes',
    title: 'PAQUETES',
    description:'Nuestros paquetes turísticos incluyen todo lo que necesites para hacer de tus vacaciones un momento inolvidable.',
    icon: FaSuitcaseRolling,
  }
]
