import React from 'react';
import { Button } from "@/components/ui/button";

const ExportPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Export Your 3D Model</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Select Export Format</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300">OBJ</button>
          <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300">STL</button>
          <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300">FBX</button>
          <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300">GLTF</button>
        </div>
      </div>
      <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">Download 3D Model</Button>
    </div>
  );
};

export default ExportPage;