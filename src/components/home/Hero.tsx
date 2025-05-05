import { motion } from 'framer-motion';
import { FaAward, FaUsers } from 'react-icons/fa';
import AnimatedElement from '../ui/AnimatedElement';
import Button from '../ui/Button';

const Hero = () => {
  const achievements = [
    {
      icon: FaAward,
      value: 'XX+',
      label: 'Años de experiencia',
    },
    {
      icon: FaUsers,
      value: 'XX+',
      label: 'Clientes contentos',
    }
  ];

  return (
    <section className="relative min-h-[100svh] md:h-screen flex items-center text-lg py-16 md:py-0">
      {/* Background Image with Overlay */}
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./videos/hero3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/50" />

      <div className="container-custom z-10 relative">
        {/* <div className="grid justify-items-center mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="./assets/images/AMC-HEAD-LOGO.png"
              alt="Asociación Mutual de la Construcción Logo"
              className="max-w-48 md:max-w-64 w-full h-auto"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm font-medium text-white bg-primary/90 px-4 py-1 rounded-full mt-2"
          >
            Asociación Mutual de la Construcción
          </motion.p>
        </div> */}

        {/* Mobile Headline - Visible only on mobile */}
        <div className="block lg:hidden mb-4">
          <AnimatedElement animation="slide-up" delay={0.3} className="mb-4">
            <div className="w-1/2 mx-auto border-t-2 border-primary my-2"></div>
            <h2 className="text-3xl md:text-5xl text-center font-bold mb-2">
              <span className="text-white">CONSTRUÍ TU</span>
              <br />
              <span className="text-secondary">FUTURO</span>
            </h2>
            <div className="w-1/2 mx-auto border-b-2 border-primary my-2"></div>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Content Left - Desktop Only */}
          <div className="hidden lg:flex order-2 lg:order-1 lg:col-span-5 z-10 flex-col justify-center">
            <AnimatedElement animation="slide-up" delay={0.3} className="mb-6">
              <div className="w-3/4 border-t-2 border-primary my-4 ml-auto"></div>
              <h2 className="text-4xl md:text-6xl text-right font-bold mb-2">
                <span className="text-white">CONSTRUÍ TU</span>
                <br />
                <span className="text-secondary">FUTURO</span>
              </h2>
              <div className="w-1/2 border-b-2 border-primary my-4 ml-auto"></div>
            </AnimatedElement>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.slice(0, 2).map((item, index) => (
                <AnimatedElement
                  key={index}
                  animation="fade-in"
                  delay={0.4 + 0.2 * index}
                  className="text-center bg-dark/70 rounded-lg p-3 backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-2">
                    <item.icon className="text-2xl text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{item.value}</h4>
                  <p className="text-white/80 text-xs">{item.label}</p>
                </AnimatedElement>
              ))}
            </div>
          </div>

          {/* Content Right */}
          <div className="order-1 lg:order-2 lg:col-span-7 z-10">
            <AnimatedElement animation="slide-up" delay={0.4} className="p-4 md:p-6 rounded-lg border border-white/20">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white text-base md:text-lg mb-4"
              >
                <span className="text-secondary font-bold underline">Construyendo – Asociación Mutual</span> es una entidad civil constituida por personas inspiradas en la ayuda mutua y el bienestar de nuestros afiliados. Por eso ponemos a su alcance múltiples servicios y prestaciones a fin de cubrir todos los aspectos que hacen a su seguridad y el bienestar de la familia.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-white font-bold mb-6"
              >
                La Mutual está dirigida a toda la comunidad en general, tanto a trabajadores independientes, como a personas en relación de dependencia, contratistas, profesionales, estudiantes, amas de casa, etc.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-6">
                <AnimatedElement animation="slide-up" delay={0.7}>
                  <Button to="/services" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-4 md:px-6 py-2 md:py-3 rounded-md transition-all duration-300 flex items-center justify-center">
                    <span>Descubrí Nuestros Servicios</span>
                  </Button>
                </AnimatedElement>

                <AnimatedElement animation="slide-up" delay={0.8}>
                  <Button to="/contact" className="w-full sm:w-auto bg-transparent border-2 border-white/70 hover:border-white text-white px-4 md:px-6 py-2 md:py-3 rounded-md transition-all duration-300">
                    Contactanos
                  </Button>
                </AnimatedElement>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Mobile Achievements - Visible only on mobile/tablet */}
        <div className="grid grid-cols-2 gap-3 mt-6 lg:hidden">
          {achievements.slice(0, 2).map((item, index) => (
            <AnimatedElement
              key={index}
              animation="fade-in"
              delay={0.9 + 0.1 * index}
              className="text-center bg-dark/80 rounded-lg p-3 backdrop-blur-sm border border-primary/20"
            >
              <div className="flex justify-center mb-1">
                <item.icon className="text-xl text-primary" />
              </div>
              <h4 className="text-lg font-bold text-white">{item.value}</h4>
              <p className="text-white/80 text-xs">{item.label}</p>
            </AnimatedElement>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Hero;