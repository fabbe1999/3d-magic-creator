import React from 'react';
import ViewerPage from './ViewerPage';

const ModelViewerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Model Viewer</h1>
      <ViewerPage />
    </div>
  );
};

export default ModelViewerPage;