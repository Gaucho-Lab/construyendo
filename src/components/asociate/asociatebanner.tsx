import { motion } from "framer-motion";

const AsociateBanner = () => {
    return (
        <section className="relative h-80 md:h-96 flex items-center">
        {/* Background Image with Overlay */}
        <div className="">
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover" // Added scale-[0.85] to zoom out
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="./videos/asociate2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/50" />
        </div>
  
        {/* Banner Content */}
        <div className="container-custom relative z-10 mt-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-secondary font-semibold text-xl mb-4">
                Sé parte de nuestra comunidad y accedé a todos nuestros beneficios
              </h4>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Asociate
              </h1>
            </motion.div>
  
          </div>
        </div>
      </section>


    );
  };

  export default AsociateBanner;