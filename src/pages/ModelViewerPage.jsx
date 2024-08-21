import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Rotate3D, ZoomIn, Paintbrush, Layers } from 'lucide-react';

const ModelViewerPage = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const [zoom, setZoom] = useState(50);
  const [viewMode, setViewMode] = useState('solid');

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    sceneRef.current = { scene, camera, renderer, controls, cube };

    const animate = () => {
      if (sceneRef.current) {
        const { renderer, scene, camera, controls, cube } = sceneRef.current;
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        controls.update();
        renderer.render(scene, camera);
      }
    };
    animate();

    const handleResize = () => {
      if (sceneRef.current && mountRef.current) {
        const { camera, renderer } = sceneRef.current;
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && sceneRef.current) {
        mountRef.current.removeChild(sceneRef.current.renderer.domElement);
      }
      if (sceneRef.current) {
        sceneRef.current.controls.dispose();
        sceneRef.current.renderer.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (sceneRef.current && sceneRef.current.camera) {
      sceneRef.current.camera.zoom = zoom / 50;
      sceneRef.current.camera.updateProjectionMatrix();
    }
  }, [zoom]);

  useEffect(() => {
    if (sceneRef.current && sceneRef.current.cube) {
      const { cube } = sceneRef.current;
      switch (viewMode) {
        case 'wireframe':
          cube.material.wireframe = true;
          break;
        case 'solid':
          cube.material.wireframe = false;
          cube.material.map = null;
          break;
        case 'textured':
          cube.material.wireframe = false;
          // Add texture logic here if needed
          break;
        default:
          break;
      }
    }
  }, [viewMode]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">3D Model Viewer</h1>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div ref={mountRef} className="w-full h-[50vh] mb-6 rounded-lg overflow-hidden"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Controls</h2>
            <div className="flex flex-wrap gap-2">
              <Button size="sm"><Rotate3D className="mr-2 h-4 w-4" /> Rotate</Button>
              <Button size="sm"><ZoomIn className="mr-2 h-4 w-4" /> Zoom</Button>
              <Button size="sm"><Paintbrush className="mr-2 h-4 w-4" /> Texture</Button>
              <Button size="sm"><Layers className="mr-2 h-4 w-4" /> Layers</Button>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Zoom Level</h2>
            <Slider
              value={[zoom]}
              onValueChange={(value) => setZoom(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">View Mode</h2>
          <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value)}>
            <ToggleGroupItem value="wireframe">Wireframe</ToggleGroupItem>
            <ToggleGroupItem value="solid">Solid</ToggleGroupItem>
            <ToggleGroupItem value="textured">Textured</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

export default ModelViewerPage;