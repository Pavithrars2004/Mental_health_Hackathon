import { motion } from 'framer-motion';
import { PencilIcon } from '@heroicons/react/24/outline';

function Journal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6 mx-auto p-4 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 w-fit"
        >
          <PencilIcon className="w-8 h-8 text-primary-light dark:text-primary-dark" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">Daily Journal</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Express your thoughts and track your emotional journey in a safe, private space.
        </p>
      </div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="card p-6"
      >
        <textarea
          placeholder="How are you feeling today?"
          className="w-full h-32 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark outline-none transition-all duration-300"
        />
        <button className="btn-primary mt-4">
          Save Entry
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Journal;