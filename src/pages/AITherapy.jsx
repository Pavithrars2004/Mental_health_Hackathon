import { motion } from 'framer-motion';

function AITherapy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Therapy</h1>
      <p className="text-gray-600 mb-8">
        Experience personalized therapeutic support powered by advanced AI.
      </p>
    </motion.div>
  );
}

export default AITherapy;