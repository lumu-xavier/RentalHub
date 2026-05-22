import React, { useState } from 'react'
import { mockProperties, mockBookings, mockReviews } from '../data/mockData'
import { useAuth } from '../context/AuthContext'
import GuestPropertyCard from './GuestPropertyCard'
import PropertyDetailsModal from './PropertyDetailsModal'
import './GuestDashboard.css'

export default function GuestDashboard() {
  const { favorites, addFavorite, userBookings, addBooking, reviews, addReview } = useAuth()
  const [activeTab, setActiveTab] = useState('browse')
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [searchLocation, setSearchLocation] = useState('')
  const [priceRange, setPriceRange] = useState(300000)
  const [filteredProperties, setFilteredProperties] = useState(mockProperties)

  const handleSearch = () => {
    let filtered = mockProperties
    if (searchLocation) {
      filtered = filtered.filter(p =>
        p.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
        p.name.toLowerCase().includes(searchLocation.toLowerCase())
      )
    }
    filtered = filtered.filter(p => p.price <= priceRange)
    setFilteredProperties(filtered)
  }

  const handleBookNow = (property, checkIn, checkOut) => {
    const nights = Math.ceil(
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
    )
    addBooking({
      propertyId: property.id,
      propertyName: property.name,
      guestName: 'You',
      checkIn,
      checkOut,
      nights,
      totalPrice: property.price * nights,
      status: 'confirmed'
    })
    setSelectedProperty(null)
  }

  return (
    <div className="guest-dashboard">
      {/* Navigation Tabs */}
      <div className="dashboard-tabs">
        <button
          className={`tab-btn ${activeTab === 'browse' ? 'active' : ''}`}
          onClick={() => setActiveTab('browse')}
        >
          🔍 Browse Properties
        </button>
        <button
          className={`tab-btn ${activeTab === 'favorites' ? 'active' : ''}`}
          onClick={() => setActiveTab('favorites')}
        >
          ❤️ Favorites ({favorites.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
          onClick={() => setActiveTab('bookings')}
        >
          📅 My Bookings ({userBookings.length})
        </button>
      </div>

      {/* Browse Tab */}
      {activeTab === 'browse' && (
        <div className="browse-section">
          <div className="search-container">
            <div className="search-controls">
              <div className="search-field">
                <label>📍 Location</label>
                <input
                  type="text"
                  placeholder="Search by location or property name..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>

              <div className="search-field">
                <label>💰 Max Price: UGX {priceRange.toLocaleString()}</label>
                <input
                  type="range"
                  min="50000"
                  max="300000"
                  step="10000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                />
              </div>

              <button className="btn btn-primary" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>

          <div className="properties-grid">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(property => (
                <GuestPropertyCard
                  key={property.id}
                  property={property}
                  isFavorite={favorites.includes(property.id)}
                  onFavorite={() => addFavorite(property.id)}
                  onView={() => setSelectedProperty(property)}
                />
              ))
            ) : (
              <div className="no-results">
                <p>No properties found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Favorites Tab */}
      {activeTab === 'favorites' && (
        <div className="favorites-section">
          {favorites.length > 0 ? (
            <div className="properties-grid">
              {mockProperties
                .filter(p => favorites.includes(p.id))
                .map(property => (
                  <GuestPropertyCard
                    key={property.id}
                    property={property}
                    isFavorite={true}
                    onFavorite={() => addFavorite(property.id)}
                    onView={() => setSelectedProperty(property)}
                  />
                ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>❤️ No favorites yet</p>
              <p>Start adding properties you love!</p>
            </div>
          )}
        </div>
      )}

      {/* Bookings Tab */}
      {activeTab === 'bookings' && (
        <div className="bookings-section">
          {userBookings.length > 0 ? (
            <div className="bookings-list">
              {userBookings.map(booking => (
                <div key={booking.id} className="booking-card">
                  <div className="booking-header">
                    <h3>{booking.propertyName}</h3>
                    <span className={`status ${booking.status}`}>
                      ✓ {booking.status}
                    </span>
                  </div>
                  <div className="booking-details">
                    <p>📅 {booking.checkIn} to {booking.checkOut}</p>
                    <p>🛏️ {booking.nights} nights</p>
                    <p className="price">💰 UGX {booking.totalPrice.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>📅 No bookings yet</p>
              <p>Browse properties and make your first booking!</p>
            </div>
          )}
        </div>
      )}

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyDetailsModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onBook={handleBookNow}
          isGuest={true}
        />
      )}
    </div>
  )
}
