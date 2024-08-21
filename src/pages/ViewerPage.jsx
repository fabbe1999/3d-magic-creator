import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Rotate3D, ZoomIn, Paintbrush, Layers } from 'lucide-react';
import ThreeDElement from '../components/3DElement';

const ViewerPage = () => {
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [detail, setDetail] = useState(50);
  const [color, setColor] = useState('#B83280');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">3D Model Viewer</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center h-[500px]">
          <ThreeDElement type="cube" color={color} />
        </div>
        <div className="w-full md:w-1/3 space-y-6 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
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
            <h2 className="text-lg font-semibold mb-2">Detail Level</h2>
            <Slider
              value={[detail]}
              onValueChange={(value) => setDetail(value[0])}
              max={100}
              step={1}
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