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
      case 'sphere':
        geometry = new THREE.SphereGeometry(1, 32, 32);
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
      specular: 0x111111
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
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