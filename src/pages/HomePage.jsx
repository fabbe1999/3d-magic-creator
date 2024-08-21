import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ThreeDElement from '../components/3DElement';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-6 gap-4 opacity-10">
          {[...Array(24)].map((_, index) => (
            <motion.div
              key={index}
              className="w-full h-24"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ThreeDElement
                type={['cube', 'octahedron', 'torus', 'pyramid'][index % 4]}
                color={['#4F46E5', '#7C3AED', '#EC4899', '#3B82F6'][index % 4]}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center z-10">
        <motion.h1
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center justify-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ThreeDElement type="octahedron" color="#4F46E5" />
          3D Model Creator
          <ThreeDElement type="torus" color="#7C3AED" />
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transform your 2D images into stunning 3D models with ease!
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/upload">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Get Started
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="mt-12 flex justify-center space-x-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ThreeDElement type="pyramid" color="#EC4899" />
          <ThreeDElement type="cube" color="#8B5CF6" />
          <ThreeDElement type="torus" color="#3B82F6" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;