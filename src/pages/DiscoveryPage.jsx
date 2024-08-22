import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ThreeDElement from '../components/3DElement';

const DiscoveryPage = () => {
  // Mock data for user creations
  const userCreations = [
    { id: 1, title: "Futuristic City", author: "JohnDoe", type: "cube" },
    { id: 2, title: "Ancient Artifact", author: "JaneSmith", type: "sphere" },
    { id: 3, title: "Alien Spaceship", author: "BobJohnson", type: "torus" },
    { id: 4, title: "Mystical Rune", author: "AliceWilliams", type: "pyramid" },
    { id: 5, title: "Quantum Computer", author: "CharlieBrown", type: "cube" },
    { id: 6, title: "Enchanted Forest", author: "EvaGreen", type: "sphere" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Discover Creations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userCreations.map((creation) => (
          <div key={creation.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4 flex justify-center">
              <ThreeDElement type={creation.type} color="#4299E1" />
            </div>
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">{creation.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Created by: {creation.author}</p>
            <Link to={`/model-viewer/${creation.id}`}>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                View Model
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoveryPage;