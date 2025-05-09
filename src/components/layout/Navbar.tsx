import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Inicio', path: '/construyendo' },
    { name: 'Asociate', path: '/asociate' },
    { name: 'Servicios', path: '/servicios' },
    // { name: 'Préstamos Personales', path: '/prestamos' },
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
              <motion.li key={link.path} variants={linkVariants}>
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
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      isActive 
                        ? 'text-secondary font-semibold text-2xl' 
                        : 'text-white hover:text-secondary transition-colors text-2xl'
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;