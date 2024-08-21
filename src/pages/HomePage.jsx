import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to 3D Model Creator</h1>
        <p className="text-xl text-gray-600 mb-8">Transform your 2D images into stunning 3D models with ease!</p>
        <Link to="/upload">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;