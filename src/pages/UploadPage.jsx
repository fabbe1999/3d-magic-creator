import React from 'react';
import { Upload } from 'lucide-react';

const UploadPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upload Your Image</h1>
      <div className="border-dashed border-2 border-gray-300 rounded-lg p-12 text-center">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-4 text-lg text-gray-600">Drag and drop your image here, or click to select a file</p>
        <input type="file" className="hidden" accept="image/*" />
      </div>
    </div>
  );
};

export default UploadPage;