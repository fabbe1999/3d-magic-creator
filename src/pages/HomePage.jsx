import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ThreeDElement from '../components/3DElement';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center justify-center">
          <ThreeDElement type="cube" color="#4F46E5" />
          Welcome to 3D Model Creator
          <ThreeDElement type="sphere" color="#7C3AED" />
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Transform your 2D images into stunning 3D models with ease!</p>
        <Link to="/upload">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">Get Started</Button>
        </Link>
        <div className="mt-8 flex justify-center space-x-4">
          <ThreeDElement type="pyramid" color="#EC4899" />
          <ThreeDElement type="cube" color="#8B5CF6" />
          <ThreeDElement type="sphere" color="#3B82F6" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;