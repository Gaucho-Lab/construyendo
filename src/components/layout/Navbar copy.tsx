import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { services } from '@/data/services';
import './Navbar.css'; // Asegúrate de crear este archivo CSS

const Navbar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Cerrar el menú de servicios cuando se hace clic fuera
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && event.target instanceof Node && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const navLinks = [
    { name: 'Inicio', path: '/construyendo' },
    { name: 'Asociate', path: '/asociate' },
    { name: 'Servicios', path: '/servicios', hasSubmenu: true },
    { name: 'Contacto', path: '/contacto' },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0, 
      height: 'auto',
      transition: { duration: 0.3 }
    }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-light shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom max-w-7xl">
        <motion.nav 
          className="flex items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={navbarVariants}
        >
          <Link to="/construyendo" className="z-50">
            <img 
              src="./assets/logos/logo-amc.png" 
              alt="Construction Company" 
              className="h-10 md:h-20 bg-light/30"
            />
          </Link>

          {/* Desktop Menu */}
          <motion.ul className="hidden md:flex space-x-8" variants={navbarVariants}>
            {navLinks.map((link) => (
              <motion.li 
                key={link.path} 
                variants={linkVariants}
                className="relative"
              >
                {link.hasSubmenu ? (
                  <div ref={dropdownRef} className="dropdown-wrapper inline-block relative">
                    {/* Usamos NavLink para mantener la funcionalidad de navegación */}
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        `${isActive ? 'text-secondary font-semibold' : `${isScrolled ? 'text-dark' : 'text-white'} hover:text-primary`} transition-colors service-link`
                      }
                      onMouseEnter={() => setIsServicesOpen(true)}
                    >
                      {link.name}
                    </NavLink>
                    
                    <motion.div 
                      className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 py-2 ${isServicesOpen ? 'block' : 'hidden'}`}
                      initial="hidden"
                      animate={isServicesOpen ? "visible" : "hidden"}
                      variants={dropdownVariants}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {services.map((service) => (
                        <Link 
                          key={service.id}
                          to={`/servicios/${service.route}`}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                ) : (
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      isActive 
                        ? 'text-secondary font-semibold' 
                        : `${isScrolled ? 'text-dark' : 'text-white'} hover:text-primary transition-colors`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden z-50 text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen 
              ? <FaTimes className={isScrolled ? 'text-dark' : 'text-white'} /> 
              : <FaBars className={isScrolled ? 'text-dark' : 'text-white'} />
            }
          </button>

          {/* Mobile Menu */}
          <motion.div 
            className="fixed inset-0 bg-primary md:hidden flex items-center justify-center"
            initial="closed"
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            variants={mobileMenuVariants}
          >
            <ul className="flex flex-col items-center space-y-8 w-full px-6">
              {navLinks.map((link) => (
                <li key={link.path} className="w-full">
                  {link.hasSubmenu ? (
                    <div className="w-full">
                      <NavLink
                        to={link.path}
                        className={({ isActive }) => 
                          isActive 
                            ? 'text-secondary font-semibold text-2xl block w-full text-center mb-2' 
                            : 'text-white hover:text-secondary transition-colors text-2xl block w-full text-center mb-2'
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </NavLink>
                      
                      <button
                        onClick={toggleServicesMenu}
                        className="text-white hover:text-secondary transition-colors text-lg w-full text-center mb-2 italic"
                      >
                        Ver todos los servicios
                      </button>
                      
                      {isServicesOpen && (
                        <ul className="bg-white/10 rounded-md py-2 w-full">
                          {services.map((service) => (
                            <li key={service.id} className="my-2">
                              <NavLink 
                                to={`/servicios/${service.route}`}
                                className={({ isActive }) => 
                                  isActive 
                                    ? 'text-secondary font-semibold text-lg block px-4 py-1' 
                                    : 'text-white hover:text-secondary text-lg block px-4 py-1'
                                }
                                onClick={(e) => {
                                  // Aseguramos que el evento sea manejado correctamente
                                  e.stopPropagation();
                                  setIsMobileMenuOpen(false);
                                  setIsServicesOpen(false);
                                }}
                              >
                                {service.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        isActive 
                          ? 'text-secondary font-semibold text-2xl block w-full text-center' 
                          : 'text-white hover:text-secondary transition-colors text-2xl block w-full text-center'
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar2;