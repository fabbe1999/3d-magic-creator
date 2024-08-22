import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Rotate3D, ZoomIn, Paintbrush, Layers, Download, Pause, Play } from 'lucide-react';

const ModelViewerPage = () => {
  const navigate = useNavigate();
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);
  const [zoom, setZoom] = useState(50);
  const [viewMode, setViewMode] = useState('solid');
  const [rotationSpeed, setRotationSpeed] = useState(0.01);
  const [isRotating, setIsRotating] = useState(true);
  const MIN_ROTATION_SPEED = 0;
  const MAX_ROTATION_SPEED = 0.02;

  const handleExport = () => {
    navigate('/export');
  };

  const toggleRotation = () => {
    setIsRotating((prev) => !prev);
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const material = new THREE.MeshPhysicalMaterial({ 
      color: 0x00ff00,
      metalness: 0.8,
      roughness: 0.1,
      clearcoat: 0.7,
      clearcoatRoughness: 0.05,
      reflectivity: 1,
      envMapIntensity: 1.5,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);
    wireframe.visible = false;

    const pointLight = new THREE.PointLight(0xffffff, 1.2, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-5, 10, 7);
    scene.add(directionalLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    sceneRef.current = { scene, camera, renderer, controls, cube, wireframe };

    const animate = () => {
      if (sceneRef.current) {
        const { renderer, scene, camera, controls } = sceneRef.current;
        animationRef.current = requestAnimationFrame(animate);
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let lastTime = 0;
    const animateRotation = (time) => {
      if (sceneRef.current && sceneRef.current.cube) {
        const deltaTime = time - lastTime;
        lastTime = time;
        
        if (isRotating) {
          sceneRef.current.cube.rotation.x += rotationSpeed * (deltaTime / 16.67);
          sceneRef.current.cube.rotation.y += rotationSpeed * (deltaTime / 16.67);
        }
        sceneRef.current.renderer.render(sceneRef.current.scene, sceneRef.current.camera);
      }
      sceneRef.current.rotationAnimationId = requestAnimationFrame(animateRotation);
    };

    sceneRef.current.rotationAnimationId = requestAnimationFrame(animateRotation);

    return () => {
      if (sceneRef.current && sceneRef.current.rotationAnimationId) {
        cancelAnimationFrame(sceneRef.current.rotationAnimationId);
      }
    };
  }, [isRotating, rotationSpeed]);

  useEffect(() => {
    if (sceneRef.current && sceneRef.current.camera) {
      sceneRef.current.camera.zoom = zoom / 50;
      sceneRef.current.camera.updateProjectionMatrix();
    }
  }, [zoom]);

  useEffect(() => {
    if (sceneRef.current && sceneRef.current.cube && sceneRef.current.wireframe) {
      const { cube, wireframe } = sceneRef.current;
      switch (viewMode) {
        case 'wireframe':
          cube.visible = false;
          wireframe.visible = true;
          break;
        case 'solid':
          cube.visible = true;
          wireframe.visible = false;
          cube.material.map = null;
          break;
        case 'textured':
          cube.visible = true;
          wireframe.visible = false;
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
        <div className="grid grid-cols-1 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Controls</h2>
            <div className="flex flex-wrap gap-2">
              <Button size="sm"><Rotate3D className="mr-2 h-4 w-4" /> Rotate</Button>
              <Button size="sm"><ZoomIn className="mr-2 h-4 w-4" /> Zoom</Button>
              <Button size="sm"><Paintbrush className="mr-2 h-4 w-4" /> Texture</Button>
              <Button size="sm"><Layers className="mr-2 h-4 w-4" /> Layers</Button>
              <Button size="sm" onClick={toggleRotation}>
                {isRotating ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                {isRotating ? 'Stop Rotation' : 'Start Rotation'}
              </Button>
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
          <div>
            <h2 className="text-lg font-semibold mb-2">Rotation Speed</h2>
            <Slider
              value={[rotationSpeed]}
              onValueChange={(value) => setRotationSpeed(value[0])}
              min={MIN_ROTATION_SPEED}
              max={MAX_ROTATION_SPEED}
              step={0.0001}
              className="w-full"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">View Mode</h2>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={viewMode === 'wireframe' ? 'default' : 'outline'}
                onClick={() => setViewMode('wireframe')}
              >
                Wireframe
              </Button>
              <Button
                size="sm"
                variant={viewMode === 'solid' ? 'default' : 'outline'}
                onClick={() => setViewMode('solid')}
              >
                Solid
              </Button>
              <Button
                size="sm"
                variant={viewMode === 'textured' ? 'default' : 'outline'}
                onClick={() => setViewMode('textured')}
              >
                Textured
              </Button>
            </div>
          </div>
          <div>
            <Button onClick={handleExport} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              <Download className="mr-2 h-4 w-4" /> Export Model
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelViewerPage;