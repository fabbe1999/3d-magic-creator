import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Info, HelpCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p>&copy; 2024 Qualia Studios. All rights reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://discord.gg/your-invite-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              <MessageCircle size={20} />
              <span>Join Discord Community</span>
            </a>
            <div className="flex space-x-4">
              <Link to="/help" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
                <HelpCircle className="mr-1 h-4 w-4" />
                Help
              </Link>
              <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
                <Info className="mr-1 h-4 w-4" />
                About
              </Link>
              <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
                <Mail className="mr-1 h-4 w-4" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;