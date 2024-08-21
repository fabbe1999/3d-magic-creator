import React from 'react';
import { Progress } from "@/components/ui/progress";

const ProcessingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Processing Your Image</h1>
      <div className="max-w-md mx-auto">
        <Progress value={33} className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600" />
        <p className="text-center text-lg text-gray-600 dark:text-gray-300">Creating your 3D model... Please wait.</p>
      </div>
    </div>
  );
};

export default ProcessingPage;