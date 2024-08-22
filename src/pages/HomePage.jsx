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

    // Create a larger cube with reduced mesh count
    const geometry = new THREE.BoxGeometry(20, 20, 20, 24, 24, 24);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x7F9CB5, // More muted blue color
      wireframe: true,
      transparent: true,
      opacity: 0.4 // Slightly reduced opacity
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position the camera inside the cube
    camera.position.set(0, 0, 5);
    camera.lookAt(new THREE.Vector3(1, 1, 1));

    // Animation loop with slow rotation and camera movement
    let time = 0;
    const animate = () => {
      time += 0.0008; // Slightly slower camera movement
      requestAnimationFrame(animate);
      
      // Rotate the cube
      cube.rotation.x += 0.00015;
      cube.rotation.y += 0.00015;
      
      // Move the camera in a circular path inside the cube
      camera.position.x = Math.sin(time) * 5;
      camera.position.z = Math.cos(time) * 5;
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      
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