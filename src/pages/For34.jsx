import { motion } from 'framer-motion';

function For34() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">For 34%</h1>
      <p className="text-gray-600 mb-8">
        Specialized support and resources for our community.
      </p>
    </motion.div>
  );
}

export default For34;