import { motion } from 'framer-motion';

const ServicesBanner = () => {
  return (
    <section className="relative h-80 md:h-96 flex items-center">
      {/* Background Image with Overlay */}
      <div className="">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./videos/services-banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/50" />
      </div>

      {/* Banner Content */}
      <div className="container-custom relative z-10 mt-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-secondary font-semibold text-xl mb-4">
            Viviendas en seco
            </h4>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            El sueño de la casa propia es posible.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-200">
            Nuestro sistema de viviendas modulares te permite tener tu hogar en 60 días.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;