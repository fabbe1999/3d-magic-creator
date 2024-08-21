import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Rotate3D, ZoomIn, Paintbrush, Layers } from 'lucide-react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ViewerPage = () => {
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [color, setColor] = useState('#B83280');
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const cubeRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    rendererRef.current = renderer;

    // Cube setup
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({ color: color });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 10);
    scene.add(light);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      scene.remove(cube);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y = rotation * (Math.PI / 180);
    }
  }, [rotation]);

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.zoom = zoom;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [zoom]);

  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.material.color.setHex(parseInt(color.slice(1), 16));
    }
  }, [color]);

  const handleResize = () => {
    if (cameraRef.current && rendererRef.current && canvasRef.current) {
      cameraRef.current.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">3D Model Viewer</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center h-[500px]">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
        <div className="w-full lg:w-1/3 space-y-6 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <div>
            <h2 className="text-lg font-semibold mb-2">Rotate</h2>
            <Slider
              value={[rotation]}
              onValueChange={(value) => setRotation(value[0])}
              max={360}
              step={1}
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Zoom</h2>
            <Slider
              value={[zoom]}
              onValueChange={(value) => setZoom(value[0])}
              min={0.5}
              max={2}
              step={0.1}
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Color</h2>
            <ToggleGroup type="single" value={color} onValueChange={setColor}>
              <ToggleGroupItem value="#B83280" aria-label="Pink">
                <div className="w-6 h-6 rounded-full bg-[#B83280]" />
              </ToggleGroupItem>
              <ToggleGroupItem value="#3B82F6" aria-label="Blue">
                <div className="w-6 h-6 rounded-full bg-[#3B82F6]" />
              </ToggleGroupItem>
              <ToggleGroupItem value="#10B981" aria-label="Green">
                <div className="w-6 h-6 rounded-full bg-[#10B981]" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              <Rotate3D className="mr-2 h-4 w-4" /> Rotate
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              <ZoomIn className="mr-2 h-4 w-4" /> Zoom
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              <Layers className="mr-2 h-4 w-4" /> Adjust Detail
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              <Paintbrush className="mr-2 h-4 w-4" /> Change Color
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewerPage;