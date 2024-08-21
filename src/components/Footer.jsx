import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 3D Model Creator. All rights reserved.</p>
          </div>
          <div>
            <Link to="/help" className="text-gray-300 hover:text-white mr-4">Help</Link>
            <Link to="/about" className="text-gray-300 hover:text-white mr-4">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;