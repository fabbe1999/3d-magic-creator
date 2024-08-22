import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../hooks/useTheme';

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-dark-100 text-gray-900 dark:text-gray-100 min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;