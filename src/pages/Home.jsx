import { motion } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon, HeartIcon, BoltIcon } from '@heroicons/react/24/outline';

function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold mb-6">
          Your Journey to <span className="gradient-text">Mental Wellness</span> Starts Here
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          Experience personalized AI-powered therapy, mindfulness exercises, and professional support
          tailored to your unique journey.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary flex items-center justify-center mx-auto space-x-2"
        >
          <SparklesIcon className="w-5 h-5" />
          <span>Take Self Assessment</span>
          <ArrowRightIcon className="w-5 h-5" />
        </motion.button>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-6"
        >
          <div className="mb-4 p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 w-fit">
            <BoltIcon className="w-6 h-6 text-primary-light dark:text-primary-dark" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            AI-Powered Support
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Get 24/7 access to our advanced AI therapy system that understands and responds to your unique needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-6"
        >
          <div className="mb-4 p-3 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/10 w-fit">
            <HeartIcon className="w-6 h-6 text-secondary-light dark:text-secondary-dark" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Holistic Approach
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Combine mental wellness with physical fitness and nature connection for complete well-being.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card p-6"
        >
          <div className="mb-4 p-3 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 w-fit">
            <SparklesIcon className="w-6 h-6 text-accent-light dark:text-accent-dark" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Personalized Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Every step of your mental health journey is tailored to your specific needs and goals.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;