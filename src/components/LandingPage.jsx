import React from 'react';

const LandingPage = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Find Your Perfect <span className="text-yellow-400">Stay</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Luxury rentals, guest houses, and premium properties in Kampala and beyond. 
            Connecting hosts with guests who appreciate excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentView('guest')}
              className="btn-primary px-10 py-4 rounded-2xl text-lg font-semibold flex items-center gap-3 mx-auto sm:mx-0"
            >
              Browse Properties
              <span>→</span>
            </button>
            
            <button 
              onClick={() => setCurrentView('host')}
              className="px-10 py-4 rounded-2xl text-lg font-semibold border border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"
            >
              List Your Property
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-400 flex items-center gap-2">
          Scroll to explore <span className="text-xl">↓</span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-black/50 border-b border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold text-yellow-400">150+</h3>
            <p className="text-gray-400 mt-2">Premium Properties</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-yellow-400">2.4K</h3>
            <p className="text-gray-400 mt-2">Happy Guests</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-yellow-400">98%</h3>
            <p className="text-gray-400 mt-2">Satisfaction Rate</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-yellow-400">24/7</h3>
            <p className="text-gray-400 mt-2">Support</p>
          </div>
        </div>
      </div>

      {/* Featured Properties Teaser */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Luxury Stays</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* You can expand these cards later */}
          {[1,2,3].map((i) => (
            <div key={i} className="property-card glass-card rounded-3xl overflow-hidden cursor-pointer" onClick={() => setCurrentView('guest')}>
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811" 
                alt="Luxury Penthouse" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Modern Kampala Penthouse</h3>
                <p className="text-yellow-400 font-medium">UGX 250,000 / night</p>
                <p className="text-gray-400 text-sm mt-2">Kampala • 3 beds • 4.9 ★</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;