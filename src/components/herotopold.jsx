import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
        <div className="text-white p-4 sm:p-6 md:p-10 max-w-2xl mb-6 sm:mb-10 ml-4 sm:ml-10">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
            Your Reliable Partner in Plastic Manufacturing
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-4">
            Precision-crafted PET Preforms & Bottles.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4">
            Since 1997, we've powered packaging, industrial, and robotics
            solutions with high-quality injection and blow molding technology.
          </p>
          <button className="bg-white text-black px-5 py-2 rounded font-semibold hover:bg-transparent hover:text-white border border-white transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </motion.div>
  );
}
