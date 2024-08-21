import React from 'react';

const ModelViewerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">3D Model Viewer</h1>
      <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
        <p className="text-xl text-gray-600">3D Model Viewer Placeholder</p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Controls</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Rotate</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded">Zoom</button>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded">Adjust Detail</button>
          <button className="bg-purple-500 text-white py-2 px-4 rounded">Change Color</button>
        </div>
      </div>
    </div>
  );
};

export default ModelViewerPage;