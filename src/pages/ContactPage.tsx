import ContactBanner from '../components/contact/ContactBanner';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
// import MapLocation from '../components/contact/MapLocation';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedElement from '../components/ui/AnimatedElement';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      <ContactBanner />
      
      <section className="section bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <AnimatedElement animation="fade-in">
                <SectionTitle
                  subtitle="Contactanos"
                  title="Información de contacto"
                  description="Contactá a nustro equipo para recibir asistencia"
                />
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={0.2} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ContactInfo
                    icon={FaPhone}
                    title="Teléfono"
                    content="(341) 152 125253"
                    link="tel:+3412125253"
                  />
                  <ContactInfo
                    icon={FaEnvelope}
                    title="Correo"
                    content="info@contruyendo.org.ar"
                    link="mailto:info@contruyendo.org.ar"
                  />
                  <ContactInfo
                    icon={FaClock}
                    title="Horarios"
                    content="Lun-Vier: 8AM - 6PM"
                    secondLine="Sat: 9AM - 1PM"
                  />
                  <ContactInfo
                    icon={FaMapMarkerAlt}
                    title="Direccion"
                    content="Rioja 1150 - Local 2"
                    secondLine="Rosario, Santa Fe"
                    link="https://maps.google.com"
                  />
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={0.3} className="mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Horarios de Oficina</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                      <span className="font-medium">Lunes - Viernes</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                      <span className="font-medium">Sábados</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between pb-2">
                      <span className="font-medium">Domingos</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-up" delay={0.4} className="mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Seguinos</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/construyendomutual/"
                      className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=543412125253&text=Hola!%20Quisiera%20realizar%20una%20consulta."
                      className="bg-sky-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                      href="https://www.instagram.com/construyendomutual/"
                      className="bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="mailto:info@construyendo.org.ar"
                      className="bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                      aria-label="Email"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            <AnimatedElement animation="slide-in-right">
              <ContactForm />
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedElement animation="fade-in">
            <SectionTitle
              subtitle="Encontranos"
              title="Nuestra Ubicación"
              description="Visita nuestras oficinas para conversar sobre tu proyecto personalmente."
              center
            />
          </AnimatedElement>
          
          {/* <AnimatedElement animation="fade-in" delay={0.2} className="mt-10">
            <MapLocation />
          </AnimatedElement> */}
        </div>
      </section>
    </>
  );
};

export default ContactPage;