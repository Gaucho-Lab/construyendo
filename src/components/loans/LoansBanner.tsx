import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { FaCheckDouble } from 'react-icons/fa';

const LoansBanner = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Features data
  const features = [
    {
      title: "Mínimos Requisitos",
    },
    {
      title: "Proceso Simple",
    },
    {
      title: "Depósito Inmediato",
    }
  ];

  return (
    <section className="relative  flex flex-col justify-center" aria-label="Préstamos Personales">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          aria-hidden="true"
        >
          <source src="./videos/handshake.mp4" type="video/mp4" />
        </video>
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-dark/80 animate-pulse" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/60" />
      </div>

      {/* Banner Content */}
      <div className="container-custom relative z-10 py-12 md:py-16 flex flex-col items-center">
        <div className="max-w-4xl text-center">

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-8"
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Préstamos Personales
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Solicita tu préstamo de hasta $1.000.000 de manera segura y recibilo directamente en tu CBU.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            className="mb-12 flex justify-center"
          >
          </motion.div>

          {/* Features */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 mx-auto w-full max-w-5xl"
            initial="hidden"
            animate="visible"
            custom={4}
          >
            {features.map((feature, index) => (
              <AnimatedElement 
                key={index} 
                animation="slide-up" 
                delay={0.1 * (index + 1)}
              >
                <div className="grid justify-items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 border border-white/20">
                  <FaCheckDouble className='text-white mb-2'/>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
              </AnimatedElement>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoansBanner;