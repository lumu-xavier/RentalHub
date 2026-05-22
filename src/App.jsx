import React, { useState } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import LandingPage from './components/LandingPage'
import Header from './components/Header'
import GuestDashboard from './components/GuestDashboard'
import HostDashboard from './components/HostDashboard'
import './App.css'

function AppContent() {
  const { user, role, logout } = useAuth()
  const [currentRole, setCurrentRole] = useState(role)

  if (!user) {
    return <LandingPage onRoleSelect={setCurrentRole} />
  }

  return (
    <div className="app-layout">
      <Header onLogout={() => {
        logout()
        setCurrentRole(null)
      }} />
      <main className="app-main">
        {currentRole === 'guest' && <GuestDashboard />}
        {currentRole === 'host' && <HostDashboard />}
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 RentalHub. Luxury rental experiences made simple.</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
