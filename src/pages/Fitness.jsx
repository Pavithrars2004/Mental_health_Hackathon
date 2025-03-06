import { motion } from 'framer-motion';

function Fitness() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Mental Fitness</h1>
      <p className="text-gray-600 mb-8">
        Exercises and activities to strengthen your mental well-being.
      </p>
    </motion.div>
  );
}

export default Fitness;