import React, { useState } from 'react';
import rentals from '../data/rentals';   // We'll create/update this

const GuestDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');

  const filtered = rentals.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (locationFilter === 'All' || p.location.includes(locationFilter))
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Discover Premium Stays</h1>
          <p className="text-xl text-gray-400">Handpicked luxury rentals across Uganda</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <input
            type="text"
            placeholder="Search by name, location or type..."
            className="flex-1 bg-zinc-900 border border-yellow-500/30 rounded-3xl px-8 py-5 text-lg focus:border-yellow-400 focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className="bg-zinc-900 border border-yellow-500/30 rounded-3xl px-8 py-5 text-lg"
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="All">All Locations</option>
            <option value="Kampala">Kampala</option>
            <option value="Entebbe">Entebbe</option>
            <option value="Jinja">Jinja</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(property => (
            <div key={property.id} className="property-card glass-card rounded-3xl overflow-hidden group cursor-pointer">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-5 right-5 bg-black/80 px-4 py-1.5 rounded-full text-sm font-medium">
                  {property.price}
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-2">{property.title}</h3>
                <p className="text-yellow-400 text-lg">{property.location}</p>
                <div className="flex justify-between mt-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⭐</span>
                    <span className="text-xl">{property.rating}</span>
                  </div>
                  <button className="btn-primary px-8 py-3 rounded-2xl">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestDashboard;