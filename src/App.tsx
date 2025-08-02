import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">📊 InsightHub</h1>
      <Dashboard />
    </div>
  );
}

export default App;