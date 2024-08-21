import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDElement = ({ type = 'cube', color = '#B83280' }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio * 2); // Increase pixel ratio for sharper rendering
    renderer.setSize(100, 100);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5; // Increase exposure for brighter rendering
    renderer.outputEncoding = THREE.sRGBEncoding;
    mountRef.current.appendChild(renderer.domElement);

    let geometry;
    switch (type) {
      case 'sphere':
        geometry = new THREE.SphereGeometry(0.8, 32, 32); // Add sphere with high detail
        break;
      case 'torus':
        geometry = new THREE.TorusGeometry(0.7, 0.3, 32, 200); // Increase detail
        break;
      case 'pyramid':
        geometry = new THREE.ConeGeometry(1, 1, 4, 2); // Increase detail
        break;
      case 'cube':
        geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2); // Increase detail
        break;
      default:
        geometry = new THREE.SphereGeometry(0.8, 32, 32); // Default to sphere
    }

    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(color),
      metalness: 0.1,
      roughness: 0.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      reflectivity: 0.8,
      envMapIntensity: 1.2,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide, // Render both sides of the geometry
    });

    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Increase ambient light intensity
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5); // Increase point light intensity
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(hemisphereLight);

    const envTexture = new THREE.CubeTextureLoader().load([
      '/envmap/px.png', '/envmap/nx.png',
      '/envmap/py.png', '/envmap/ny.png',
      '/envmap/pz.png', '/envmap/nz.png'
    ]);
    scene.environment = envTexture;
    scene.background = envTexture; // Add environment as background

    camera.position.z = 2.5; // Move camera closer for a larger view

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      shape.rotation.x += 0.005;
      shape.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [type, color]);

  return <div ref={mountRef} className="inline-block" />;
};

export default ThreeDElement;