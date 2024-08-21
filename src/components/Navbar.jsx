import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Navbar = () => {
  return (
    <nav className="bg-navbar text-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img src="/qualia-studios-logo.svg" alt="Qualia Studios Logo" className="h-8 w-auto" />
            </Link>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">3D Model Creator</span>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navItems.map(({ title, to }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;