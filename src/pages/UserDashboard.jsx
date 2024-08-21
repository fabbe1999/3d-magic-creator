import React from 'react';

const UserDashboard = () => {
  const savedModels = [
    { id: 1, name: 'Model 1', date: '2024-03-01' },
    { id: 2, name: 'Model 2', date: '2024-03-05' },
    { id: 3, name: 'Model 3', date: '2024-03-10' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedModels.map((model) => (
          <div key={model.id} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40 rounded-md mb-4"></div>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">{model.name}</h3>
            <p className="text-sm text-gray-600">Created on: {model.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;