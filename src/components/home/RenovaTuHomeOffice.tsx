import { motion } from 'framer-motion';

const RenovaHO = () => {
  return (
    <section className="relative py-20 bg-gray-100 overflow-hidden">      

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center grid justify-items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
                src="/assets/images/HO-image.png"
                alt="Construction team at work site"
                className="max-w-[600px] w-full h-auto"
              />
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
            Renova tu Home-Office
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-orange-800 mb-8 max-w-2xl mx-auto font-bold">
            LAPTOPS | COMPUTADORAS DE ESCRITORIO | ACCESORIOS
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RenovaHO;