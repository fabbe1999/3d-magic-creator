import React from 'react';

const ViewerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">3D Viewer</h1>
      <div className="bg-gray-200 dark:bg-gray-700 h-96 rounded-lg flex items-center justify-center">
        <p className="text-xl text-gray-600 dark:text-gray-300">3D Viewer Placeholder</p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Controls</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded hover:from-blue-600 hover:to-purple-700 transition-all duration-300">Rotate</button>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded hover:from-blue-600 hover:to-purple-700 transition-all duration-300">Zoom</button>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded hover:from-blue-600 hover:to-purple-700 transition-all duration-300">Adjust Detail</button>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded hover:from-blue-600 hover:to-purple-700 transition-all duration-300">Change Color</button>
        </div>
      </div>
    </div>
  );
};

export default ViewerPage;