import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDElement = ({ type = 'cube', color = '#B83280' }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(100, 100);
    mountRef.current.appendChild(renderer.domElement);

    let geometry;
    switch (type) {
      case 'octahedron':
        geometry = new THREE.OctahedronGeometry(1);
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

    const material = new THREE.MeshPhongMaterial({ 
      color, 
      shininess: 100,
      specular: 0x444444,
      transparent: true,
      opacity: 0.8
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      shape.rotation.x += 0.01;
      shape.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [type, color]);

  return <div ref={mountRef} className="inline-block" />;
};

export default ThreeDElement;