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
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(100, 100);
    mountRef.current.appendChild(renderer.domElement);

    let geometry;
    switch (type) {
      case 'octahedron':
        geometry = new THREE.OctahedronGeometry(1, 0);
        break;
      case 'torus':
        geometry = new THREE.TorusGeometry(0.7, 0.3, 16, 100);
        break;
      case 'pyramid':
        geometry = new THREE.ConeGeometry(1, 1, 4);
        break;
      default:
        geometry = new THREE.BoxGeometry(1, 1, 1);
    }

    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(color),
      metalness: 0.2,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
      envMapIntensity: 1.0,
      transparent: true,
      opacity: 0.9,
    });

    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const envTexture = new THREE.CubeTextureLoader().load([
      '/envmap/px.png', '/envmap/nx.png',
      '/envmap/py.png', '/envmap/ny.png',
      '/envmap/pz.png', '/envmap/nz.png'
    ]);
    scene.environment = envTexture;

    camera.position.z = 3;

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      shape.rotation.x += 0.01;
      shape.rotation.y += 0.01;
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