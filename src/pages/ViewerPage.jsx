import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Rotate3D, ZoomIn, Paintbrush, Layers } from 'lucide-react';

const ViewerPage = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">3D Model Viewer</h1>
      <div ref={mountRef} className="w-full h-[60vh] mb-6"></div>
      <div className="flex space-x-4 mb-4">
        <Button><Rotate3D className="mr-2 h-4 w-4" /> Rotate</Button>
        <Button><ZoomIn className="mr-2 h-4 w-4" /> Zoom</Button>
        <Button><Paintbrush className="mr-2 h-4 w-4" /> Texture</Button>
        <Button><Layers className="mr-2 h-4 w-4" /> Layers</Button>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Zoom Level</h2>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">View Mode</h2>
        <ToggleGroup type="single">
          <ToggleGroupItem value="wireframe">Wireframe</ToggleGroupItem>
          <ToggleGroupItem value="solid">Solid</ToggleGroupItem>
          <ToggleGroupItem value="textured">Textured</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default ViewerPage;