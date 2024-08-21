import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Welcome to 3D Model Creator</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Transform your 2D images into stunning 3D models with ease!</p>
        <Link to="/upload">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;