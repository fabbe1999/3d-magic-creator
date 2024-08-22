import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import * as THREE from 'three';

const HomePage = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create a larger, higher fidelity cube
    const geometry = new THREE.BoxGeometry(12, 12, 12, 32, 32, 32);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x4299E1,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 20;

    // Animation loop with slow rotation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.0005;
      cube.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Dispose of Three.js objects
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-dark-100">
      <div ref={mountRef} className="absolute inset-0 z-0" />
      <div className="text-center z-10 mb-8">
        <motion.h1
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text flex items-center justify-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          3D Model Creator
          <motion.span
            className="ml-2 text-xs font-bold bg-red-600 text-white dark:text-gray-900 px-1.5 py-0.5 rounded-full transform rotate-12 inline-block"
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
    </div>
  );
};

export default HomePage;