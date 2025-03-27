import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Company Info */}
          <div>
            <Link to="/">
              <img 
                src="./assets/logos/company-logo.png" 
                alt="Construction Company" 
                className="h-12 mb-4"
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Construyendo junto a vos desde 1985. 
              Comprometidos con la excelencia y la satisfacción del cliente.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/construyendomutual/" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Facebook">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=543412125253&text=Hola!%20Quisiera%20realizar%20una%20consulta." className="text-gray-300 hover:text-secondary transition-colors" aria-label="WhatsApp">
                <FaWhatsapp className="text-xl" />
              </a>
              <a href="https://www.instagram.com/construyendomutual/" className="text-gray-300 hover:text-secondary transition-colors" aria-label="Instagram">
                <FaInstagram className="text-xl" />
              </a>
              <a href="mailto:info@construyendo.org.ar" className="text-gray-300 hover:text-secondary transition-colors" aria-label="EMail">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Secciones</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/construyendo" className="text-gray-300 hover:text-secondary transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Servicios</Link>
              </li>
              <li>
                <Link to="/loans" className="text-gray-300 hover:text-secondary transition-colors">Prestamos Personales</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Encontranos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-secondary mt-1 mr-3" />
                <span className="text-gray-300">
                  Rioja 1150 - Local 2
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-secondary mr-3" />
                <a href="tel:3412125253" className="text-gray-300 hover:text-secondary transition-colors">
                  (341) 152 125253
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-secondary mr-3" />
                <a href="mailto:info@constructioncompany.com" className="text-gray-300 hover:text-secondary transition-colors">
                  info@contruyendo.org.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Construyendo. All rights reserved.
          </p>
          <div className="text-gray-400 text-sm">
            <span className="mr-4">
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            </span>
            <span>
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            </span>
          </div>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=543412125253&text=Hola%2C+me+comunico+desde+la+website%2C+quisiera+realizar+una+consulta.&type=phone_number&app_absent=0"
          className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-all hover:-translate-y-1 animate-bounce hover:animate-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./assets/images/WhatsApp.svg"
            alt="Contact us on WhatsApp"
            className="w-8 h-8"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;