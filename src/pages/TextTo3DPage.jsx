import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TextTo3DPage = () => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the prompt to your backend or AI service
    console.log('Generating 3D model from prompt:', prompt);
    // After processing, you would navigate to the ModelViewerPage or ProcessingPage
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Generate 3D Model from Text</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <Input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your 3D model..."
          className="mb-4"
        />
        <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
          Generate 3D Model
        </Button>
      </form>
    </div>
  );
};

export default TextTo3DPage;