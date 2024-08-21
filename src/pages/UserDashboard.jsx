import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const UserDashboard = ({ user }) => {
  const navigate = useNavigate();
  const savedModels = [
    { id: 1, name: 'Model 1', date: '2024-03-01' },
    { id: 2, name: 'Model 2', date: '2024-03-05' },
    { id: 3, name: 'Model 3', date: '2024-03-10' },
  ];

  const renderModels = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {savedModels.map((model) => (
        <div key={model.id} className={`bg-white dark:bg-gray-800 shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ${!user ? 'filter blur-sm' : ''}`}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40 rounded-md mb-4"></div>
          <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">{model.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Created on: {model.date}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
        {user ? `Welcome, ${user.name}!` : 'User Dashboard'}
      </h1>
      {!user && (
        <div className="mb-8 text-center">
          <p className="text-xl mb-4">Sign up or try it out to start creating and viewing your 3D models!</p>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => navigate('/signup')} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              Sign Up
            </Button>
            <Button onClick={() => navigate('/upload')} className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
              Try It Out
            </Button>
          </div>
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-4">
        {user ? 'Your Saved Models' : 'Sample Models'}
      </h2>
      {renderModels()}
    </div>
  );
};

export default UserDashboard;