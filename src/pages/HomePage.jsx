import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import ThreeDElement from '../components/3DElement';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center z-10 mb-8">
        <motion.h1
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center justify-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          3D Model Creator
          <motion.span
            className="ml-2 text-xs font-bold bg-red-600 text-white px-1.5 py-0.5 rounded-full transform rotate-12 inline-block"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 12 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            BETA
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transform your ideas into 3D models with ease
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/upload">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Image to 3D
            </Button>
          </Link>
          <Link to="/text-to-3d">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
              Text to 3D
            </Button>
          </Link>
        </motion.div>
      </div>
      <div className="flex justify-center space-x-8 mt-12">
        <ThreeDElement type="cube" color="#A0AEC0" />
        <ThreeDElement type="pyramid" color="#ED64A6" />
        <ThreeDElement type="torus" color="#4299E1" />
      </div>
    </div>
  );
};

export default HomePage;