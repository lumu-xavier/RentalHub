import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🏠</span>
          <h1>RentalHub</h1>
        </div>
        <nav className="nav">
          <a href="#listings">Explore</a>
          <a href="#about">About</a>
          <button className="signin-btn">Sign In</button>
          <button className="host-btn">Become a Host</button>
        </nav>
      </div>
    </header>
  )
}
