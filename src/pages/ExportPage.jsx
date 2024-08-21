import React from 'react';
import { Button } from "@/components/ui/button";

const ExportPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Export Your 3D Model</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Select Export Format</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gray-200 py-2 px-4 rounded">OBJ</button>
          <button className="bg-gray-200 py-2 px-4 rounded">STL</button>
          <button className="bg-gray-200 py-2 px-4 rounded">FBX</button>
          <button className="bg-gray-200 py-2 px-4 rounded">GLTF</button>
        </div>
      </div>
      <Button size="lg">Download 3D Model</Button>
    </div>
  );
};

export default ExportPage;