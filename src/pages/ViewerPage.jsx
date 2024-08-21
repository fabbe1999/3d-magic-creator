import React from 'react';
import { Button } from "@/components/ui/button";

const ViewerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">3D Viewer</h1>
      <div className="bg-gray-200 dark:bg-gray-700 h-96 rounded-lg flex items-center justify-center mb-6">
        <p className="text-xl text-gray-600 dark:text-gray-300">3D Viewer Placeholder</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
          Rotate
        </Button>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
          Zoom
        </Button>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
          Adjust Detail
        </Button>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
          Change Color
        </Button>
      </div>
    </div>
  );
};

export default ViewerPage;