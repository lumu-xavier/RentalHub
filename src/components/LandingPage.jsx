import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './LandingPage.css'

export default function LandingPage({ onRoleSelect }) {
  const { login } = useAuth()
  const [showForm, setShowForm] = useState(null)
  const [name, setName] = useState('')

  const handleLogin = (role) => {
    if (name.trim()) {
      login(name, role)
      onRoleSelect(role)
    }
  }

  return (
    <div className="landing">
      <div className="landing-hero">
        <div className="landing-content">
          <h1 className="landing-title">RentalHub</h1>
          <p className="landing-subtitle">Luxury rental experiences made simple</p>
          <p className="landing-description">
            Connect with perfect accommodations or share your premium properties
          </p>

          <div className="role-selector">
            <div className="role-card guest-card">
              <div className="role-icon">🔍</div>
              <h2>Looking for a Stay?</h2>
              <p>Discover amazing rental properties tailored to your needs</p>
              <button
                className="btn btn-primary"
                onClick={() => setShowForm('guest')}
              >
                Continue as Guest
              </button>
            </div>

            <div className="role-card host-card">
              <div className="role-icon">🏠</div>
              <h2>Have a Property?</h2>
              <p>Share your space and earn from your listings</p>
              <button
                className="btn btn-primary"
                onClick={() => setShowForm('host')}
              >
                Continue as Host
              </button>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="auth-modal" onClick={() => setShowForm(null)}>
          <div className="auth-form" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setShowForm(null)}
            >
              ✕
            </button>

            <h3>
              {showForm === 'guest' ? 'Welcome, Guest' : 'Welcome, Host'}
            </h3>
            <p>
              {showForm === 'guest'
                ? 'Find your perfect stay'
                : 'List and manage your properties'}
            </p>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleLogin(showForm)
                }
              }}
            />

            <button
              className="btn btn-primary"
              onClick={() => handleLogin(showForm)}
              disabled={!name.trim()}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
