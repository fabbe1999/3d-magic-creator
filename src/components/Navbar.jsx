import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-navbar dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">QS</span>
              </div>
            </Link>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">3D Model Creator</span>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navItems.map(({ title, to }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                {title}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;