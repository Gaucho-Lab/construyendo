export interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    content: string;
    avatar: string;
    rating: number;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Juan Perez',
      position: 'CEO',
      company: 'Johnson Enterprises',
      content: 'Trabajar con Construyendo fue una experiencia increible. Su atencion al detalle y compromiso con la calidad superaron nuestras expectativas.',
      avatar: '/assets/images/testimonials/person1.jpg',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sofia Ramirez',
      position: 'Propietaria',
      company: '',
      content: 'Contratamos Construyendo para el proyecto de renovacion de nuestra casa, y no podríamos estar más contentos con esa desición. El equipo fue profesional, limpio y respuetuoso de nuestro espacio.',
      avatar: '/assets/images/testimonials/person2.jpg',
      rating: 5,
    },
    {
      id: 3,
      name: 'Lucia Cepas',
      position: 'Directora de Operaciones',
      company: 'Cepas Manufacturing',
      content: 'Nuestra fabrica necesitaba un proyecto de expansion muy complejo, y el equipo de Construyendo se manejo con una gran excelencia. Ahora nuestras instalaciones han incrementado sus capacidades productivas ampliamente.',
      avatar: '/assets/images/testimonials/person3.jpg',
      rating: 4,
    },
    {
      id: 4,
      name: 'Carlos Hernandez',
      position: 'Dueño de Negocio',
      company: 'The Fashion Boutique',
      content: 'La renovacion de nuestro espacio de retail fué excelentemente ejecutada. El equipo entendió nuestra visión y nos ayudó a crear un ambiente de recibimiento para nuestro clientes. El project manager nos mantuvo siempre al tanto a lo largo del proceso.',
      avatar: '/assets/images/testimonials/person4.jpg',
      rating: 5,
    }
  ];