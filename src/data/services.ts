import { 
  FaShoppingCart, 
  FaLaptopHouse, 
  FaUmbrellaBeach, 
  FaHeartbeat, 
  FaHardHat, 
  FaMoneyBillWave, 
  FaShieldAlt,
  FaLaptop, 
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
    description2: string; // Nueva propiedad añadida
    icon: React.ElementType;
    imgs: string;
    route: string;
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
    id: 'proveeduria',
    title: 'Proveeduria',
    description: 'Acceso a productos de consumo diario con precios preferenciales para asociados.',
    description2: 'Acceso a productos de consumo diario con precios preferenciales y opciones de financiamiento exclusivas para asociados. Contamos con una amplia variedad de alimentos, artículos de limpieza, perfumería y más, todo en un solo lugar y con la posibilidad de comprar en cuotas sin interés con tarjetas seleccionadas. Además, ofrecemos entregas a domicilio y promociones semanales para maximizar tu ahorro.',
    icon: FaShoppingCart,
    imgs: 'proveeduria',
    route: 'proveeduria'
  },
  {
    id: 'electrodomesticos',
    title: 'Electrodomésticos',
    description: 'Tecnología para el hogar con facilidades de pago y garantía extendida.',
    description2: 'Equipá tu hogar con nuestra amplia gama de electrodomésticos de primeras marcas con facilidades de pago y garantía extendida. Desde televisores, heladeras y lavarropas hasta pequeños electrodomésticos para cocina, encontrarás todo lo que necesitas para mejorar tu calidad de vida. Ofrecemos asesoramiento especializado y financiación en cuotas para hacer tu compra más accesible.',
    icon: FaLaptopHouse,
    imgs: 'electrodomesticos',
    route: 'electrodomesticos'
  },
  {
    id: 'turismo',
    title: 'Turismo',
    description: 'Paquetes nacionales e internacionales con tarifas preferenciales.',
    description2: 'Descubrí el mundo con nuestros paquetes turísticos nacionales e internacionales diseñados con tarifas preferenciales y financiamiento exclusivo. Trabajamos con las mejores operadoras para ofrecerte experiencias únicas, desde escapadas de fin de semana hasta vacaciones de ensueño. Nuestro equipo especializado te asesorará en cada paso, desde la elección del destino hasta el regreso a casa.',
    icon: FaUmbrellaBeach,
    imgs: 'turismo',
    route: 'turismo'
  },
  {
    id: 'asistencia',
    title: 'Asistencia al Viajero',
    description: 'Cobertura médica y asistencia integral para viajes seguros.',
    description2: 'Viajá tranquilo con nuestra cobertura médica internacional y asistencia integral al viajero. Ofrecemos protección completa que incluye atención médica de emergencia, medicamentos, traslados sanitarios, compensación por pérdida de equipaje y asistencia legal en el exterior. Nuestros planes se adaptan a todo tipo de viajes, ya sean de negocios, familiares o de aventura, para que solo te preocupes por disfrutar.',
    icon: FaHeartbeat,
    imgs: 'asistencia',
    route: 'asistencia'
  },
  {
    id: 'construccion',
    title: 'Construcción y Refacción',
    description: 'Soluciones integrales para construcción y mejoras en tu hogar.',
    description2: 'Hacé realidad el sueño de tu casa propia o renovála con nuestras soluciones integrales de construcción y refacción. Ofrecemos sistemas de construcción tradicional y en seco, con asesoramiento técnico profesional y opciones de financiamiento adaptadas a tu presupuesto. Nuestros especialistas te acompañan desde el diseño del proyecto hasta la finalización de la obra, garantizando calidad y cumplimiento de plazos.',
    icon: FaHardHat,
    imgs: 'construction',
    route: 'construccion'
  },
  {
    id: 'prestamos-personales',
    title: 'Préstamos Personales',
    description: 'Créditos de hasta $1.000.000 con aprobación rápida y mínimos requisitos.',
    description2: 'Cumplí tus proyectos con nuestros préstamos personales de hasta $1.000.000 en 36 cuotas con mínimos requisitos y aprobación rápida. Ya sea para refaccionar tu hogar, comprar un vehículo, financiar estudios o consolidar deudas, te ofrecemos tasas preferenciales y un proceso simple y transparente. Con simulador online, podés calcular tu cuota mensual y recibir el dinero en tu cuenta en 24 horas tras la aprobación.',
    icon: FaMoneyBillWave,
    imgs: 'prestamos',
    route: 'prestamos-personales'
  },
  {
    id: 'seguros-patrimoniales',
    title: 'Seguros Patrimoniales, Vida y Ahorro',
    description: 'Protección completa para tu patrimonio, familia y futuro.',
    description2: 'Asegurá lo que más te importa con nuestros planes de seguros patrimoniales, de vida y ahorro. Protegemos tu hogar, vehículos y bienes personales contra diferentes riesgos, mientras te ofrecemos opciones para asegurar el bienestar financiero de tu familia con seguros de vida y planes de ahorro programado. Trabajamos con las principales compañías aseguradoras para brindarte la mejor cobertura con primas accesibles y atención personalizada en caso de siniestros.',
    icon: FaShieldAlt,
    imgs: 'seguros-patrimoniales',
    route: 'seguros-patrimoniales'
  }
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
