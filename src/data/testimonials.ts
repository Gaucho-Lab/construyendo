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
      name: 'Robert Johnson',
      position: 'CEO',
      company: 'Johnson Enterprises',
      content: 'Working with this construction company was a fantastic experience. Their attention to detail and commitment to quality exceeded our expectations. Our new office building was completed on time and within budget, and the craftsmanship is outstanding.',
      avatar: '/assets/images/testimonials/person1.jpg',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Williams',
      position: 'Homeowner',
      company: '',
      content: 'We hired this company for our home renovation project and couldnt be happier with the results. The team was professional, clean, and respectful of our space. They transformed our outdated kitchen into a modern, functional space that we love to spend time in.',
      avatar: '/assets/images/testimonials/person2.jpg',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Director of Operations',
      company: 'Chen Manufacturing',
      content: 'Our factory expansion project was complex, with specific requirements for equipment installation and workflow optimization. This team handled everything expertly, coordinating with our engineers and minimizing disruption to our operations. The new facility has significantly improved our production capacity.',
      avatar: '/assets/images/testimonials/person3.jpg',
      rating: 4,
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      position: 'Store Owner',
      company: 'The Fashion Boutique',
      content: 'The renovation of our retail space was beautifully executed. The construction team understood our vision and helped us create a welcoming environment for our customers. The project manager kept us informed throughout the process, and they completed the work ahead of schedule.',
      avatar: '/assets/images/testimonials/person4.jpg',
      rating: 5,
    },
    {
      id: 5,
      name: 'David Thompson',
      position: 'Property Developer',
      company: 'Thompson Properties',
      content: 'Weve partnered with this construction company on multiple projects over the years, and they consistently deliver high-quality work. Their team is knowledgeable, their pricing is transparent, and theyre always willing to find solutions to unexpected challenges that arise during construction.',
      avatar: '/assets/images/testimonials/person5.jpg',
      rating: 5,
    },
  ];