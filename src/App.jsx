import { useState } from 'react';
import LandingPage from './components/LandingPage';        // ← Updated
import GuestDashboard from './components/GuestDashboard';
import HostDashboard from './components/HostDashboard';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? '' : 'light'}`}>
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-50 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-2xl flex items-center justify-center text-2xl">
              🏡
            </div>
            <h1 className="text-3xl font-bold tracking-tighter">RentalHub</h1>
          </div>

          <div className="flex items-center gap-8 text-lg">
            <button onClick={() => setCurrentView('landing')} className="hover:text-yellow-400 transition">Home</button>
            <button onClick={() => setCurrentView('guest')} className="hover:text-yellow-400 transition">Explore</button>
            <button onClick={() => setCurrentView('host')} className="hover:text-yellow-400 transition">For Hosts</button>

            <button 
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center text-2xl hover:bg-zinc-800 rounded-full transition"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            <button className="btn-primary px-8 py-3 rounded-2xl font-semibold">
              Become a Host
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {currentView === 'landing' && <LandingPage setCurrentView={setCurrentView} />}
        {currentView === 'guest' && <GuestDashboard />}
        {currentView === 'host' && <HostDashboard />}
      </div>
    </div>
  );
}

export default App;