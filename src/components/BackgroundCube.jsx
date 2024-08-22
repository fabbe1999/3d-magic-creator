import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BackgroundCube = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef({});

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshBasicMaterial({
      color: 0x4299E1, // Muted blue color from the existing palette
      wireframe: true,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 50;

    sceneRef.current = { scene, camera, renderer, cube };

    const animate = () => {
      if (sceneRef.current.cube && sceneRef.current.renderer && sceneRef.current.scene && sceneRef.current.camera) {
        sceneRef.current.cube.rotation.x += 0.0005;
        sceneRef.current.cube.rotation.y += 0.0005;
        sceneRef.current.renderer.render(sceneRef.current.scene, sceneRef.current.camera);
      }
      sceneRef.current.animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (sceneRef.current.camera && sceneRef.current.renderer) {
        sceneRef.current.camera.aspect = window.innerWidth / window.innerHeight;
        sceneRef.current.camera.updateProjectionMatrix();
        sceneRef.current.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current.animationFrameId) {
        cancelAnimationFrame(sceneRef.current.animationFrameId);
      }
      if (sceneRef.current.scene && sceneRef.current.cube) {
        sceneRef.current.scene.remove(sceneRef.current.cube);
      }
      if (sceneRef.current.geometry) {
        sceneRef.current.geometry.dispose();
      }
      if (sceneRef.current.material) {
        sceneRef.current.material.dispose();
      }
      if (sceneRef.current.renderer) {
        sceneRef.current.renderer.dispose();
      }
      if (mountRef.current && sceneRef.current.renderer) {
        mountRef.current.removeChild(sceneRef.current.renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default BackgroundCube;