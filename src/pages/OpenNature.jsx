import { motion } from 'framer-motion';

function OpenNature() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Open Nature</h1>
      <p className="text-gray-600 mb-8">
        Connect with nature for improved mental health and well-being.
      </p>
    </motion.div>
  );
}

export default OpenNature;