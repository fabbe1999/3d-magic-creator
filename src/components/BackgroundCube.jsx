import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BackgroundCube = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(20, 20, 20);
    const material = new THREE.MeshBasicMaterial({
      color: 0x4299E1,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 10;

    sceneRef.current = { scene, camera, renderer, cube };

    const animate = () => {
      if (sceneRef.current) {
        const { renderer, scene, camera, cube } = sceneRef.current;
        requestAnimationFrame(animate);
        cube.rotation.x += 0.0005;
        cube.rotation.y += 0.0005;
        renderer.render(scene, camera);
      }
    };
    animate();

    const handleResize = () => {
      if (sceneRef.current && mountRef.current) {
        const { camera, renderer } = sceneRef.current;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        const { scene, renderer, geometry, material } = sceneRef.current;
        scene.remove(cube);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default BackgroundCube;