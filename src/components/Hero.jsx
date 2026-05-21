import React, { useState } from 'react'
import './Hero.css'

export default function Hero({ onSearch }) {
  const [location, setLocation] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('1')

  const handleSearch = () => {
    onSearch({ location, checkIn, checkOut, guests })
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Find Your Perfect Stay</h2>
        <p>Discover amazing rental properties across Uganda</p>
        
        <div className="search-box">
          <div className="search-input">
            <label>📍 Location</label>
            <input 
              type="text" 
              placeholder="Where are you going?" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          
          <div className="search-input">
            <label>📅 Check-in</label>
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          
          <div className="search-input">
            <label>📅 Check-out</label>
            <input 
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          
          <div className="search-input">
            <label>👥 Guests</label>
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>
          
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
