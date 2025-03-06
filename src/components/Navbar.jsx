import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold gradient-text">MindfulAI</span>
          </NavLink>
          
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/journal" className="nav-link">
              Journal
            </NavLink>
            <NavLink to="/fitness" className="nav-link">
              Fitness
            </NavLink>
            <NavLink to="/ai-therapy" className="nav-link">
              AI Therapy
            </NavLink>
            <NavLink to="/open-nature" className="nav-link">
              Open Nature
            </NavLink>
            <NavLink to="/for-34" className="nav-link">
              For 34%
            </NavLink>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;