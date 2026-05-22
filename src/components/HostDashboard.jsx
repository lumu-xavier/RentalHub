import React from 'react';

const HostDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-10 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-bold">Host Dashboard</h1>
            <p className="text-gray-400 text-xl mt-2">Welcome back! Manage your properties</p>
          </div>
          <button className="btn-primary px-8 py-4 rounded-2xl text-lg font-semibold">
            + Add New Property
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-8 rounded-3xl">
            <p className="text-gray-400">Total Properties</p>
            <h3 className="text-6xl font-bold text-yellow-400 mt-2">5</h3>
          </div>
          <div className="glass-card p-8 rounded-3xl">
            <p className="text-gray-400">Total Bookings</p>
            <h3 className="text-6xl font-bold text-yellow-400 mt-2">12</h3>
          </div>
          <div className="glass-card p-8 rounded-3xl">
            <p className="text-gray-400">Total Earnings</p>
            <h3 className="text-6xl font-bold text-yellow-400 mt-2">UGX 16.0M</h3>
          </div>
        </div>

        {/* My Properties */}
        <h2 className="text-3xl font-bold mb-6">My Properties</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811" 
              alt="Penthouse" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Modern Kampala Penthouse</h3>
              <p className="text-yellow-400">UGX 150,000 / night</p>
              <button className="mt-6 w-full btn-primary py-3 rounded-2xl">Manage Property</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostDashboard;