import React from 'react';
import { Upload } from 'lucide-react';

const UploadPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Upload Your Image</h1>
      <div className="border-dashed border-2 border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center hover:border-blue-500 transition-colors duration-300">
        <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 group-hover:text-blue-500" />
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Drag and drop your image here, or click to select a file</p>
        <input type="file" className="hidden" accept="image/*" />
      </div>
    </div>
  );
};

export default UploadPage;