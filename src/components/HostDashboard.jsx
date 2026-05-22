import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { mockProperties, mockBookings } from '../data/mockData'
import HostPropertyForm from './HostPropertyForm'
import './HostDashboard.css'

export default function HostDashboard() {
  const { userProperties, addProperty, userBookings } = useAuth()
  const [activeTab, setActiveTab] = useState('properties')
  const [showForm, setShowForm] = useState(false)

  const totalEarnings = mockProperties.reduce((sum, p) => sum + p.earnings, 0)
  const allPropertyBookings = mockBookings.length

  return (
    <div className="host-dashboard">
      {/* Stats Section */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🏠</div>
          <div className="stat-content">
            <p className="stat-label">Total Properties</p>
            <p className="stat-value">{mockProperties.length}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <p className="stat-label">Total Bookings</p>
            <p className="stat-value">{allPropertyBookings}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <p className="stat-label">Total Earnings</p>
            <p className="stat-value">UGX {(totalEarnings / 1000000).toFixed(1)}M</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="dashboard-tabs">
        <button
          className={`tab-btn ${activeTab === 'properties' ? 'active' : ''}`}
          onClick={() => setActiveTab('properties')}
        >
          🏘️ My Properties
        </button>
        <button
          className={`tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
          onClick={() => setActiveTab('bookings')}
        >
          📅 Bookings
        </button>
        <button
          className={`tab-btn ${activeTab === 'earnings' ? 'active' : ''}`}
          onClick={() => setActiveTab('earnings')}
        >
          💰 Earnings
        </button>
      </div>

      {/* Properties Tab */}
      {activeTab === 'properties' && (
        <div className="properties-section">
          <div className="section-header">
            <h2>Manage Your Properties</h2>
            <button
              className="btn btn-primary"
              onClick={() => setShowForm(true)}
            >
              + Add New Property
            </button>
          </div>

          {showForm && (
            <HostPropertyForm
              onSubmit={(newProperty) => {
                addProperty(newProperty)
                setShowForm(false)
              }}
              onCancel={() => setShowForm(false)}
            />
          )}

          <div className="properties-list">
            {mockProperties.map(property => (
              <div key={property.id} className="property-item">
                <div className="property-image">
                  <img src={property.image} alt={property.name} />
                </div>
                <div className="property-info">
                  <h3>{property.name}</h3>
                  <p className="location">📍 {property.location}</p>
                  <div className="property-details">
                    <span>🛏️ {property.beds} beds</span>
                    <span>🚿 {property.baths} baths</span>
                    <span>⭐ {property.rating}</span>
                  </div>
                </div>
                <div className="property-stats">
                  <p>Price: <strong>UGX {property.price.toLocaleString()}/night</strong></p>
                  <p>Earnings: <strong>UGX {property.earnings.toLocaleString()}</strong></p>
                  <button className="btn btn-secondary">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bookings Tab */}
      {activeTab === 'bookings' && (
        <div className="bookings-section">
          <h2>Property Bookings</h2>
          {mockBookings.length > 0 ? (
            <div className="bookings-list">
              {mockBookings.map(booking => (
                <div key={booking.id} className="booking-item">
                  <div className="booking-info">
                    <h3>{booking.propertyName}</h3>
                    <p>Guest: <strong>{booking.guestName}</strong></p>
                    <p>Dates: <strong>{booking.checkIn} to {booking.checkOut}</strong></p>
                  </div>
                  <div className="booking-stats">
                    <p className="nights">{booking.nights} nights</p>
                    <p className="earnings">UGX {booking.totalPrice.toLocaleString()}</p>
                    <span className={`status ${booking.status}`}>✓ {booking.status}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No bookings yet</p>
            </div>
          )}
        </div>
      )}

      {/* Earnings Tab */}
      {activeTab === 'earnings' && (
        <div className="earnings-section">
          <h2>Earnings Overview</h2>
          <div className="earnings-summary">
            <div className="earnings-card">
              <p className="earnings-label">Total Earnings</p>
              <p className="earnings-amount">UGX {totalEarnings.toLocaleString()}</p>
            </div>
            <div className="earnings-card">
              <p className="earnings-label">This Month</p>
              <p className="earnings-amount">UGX {(totalEarnings * 0.3).toLocaleString()}</p>
            </div>
            <div className="earnings-card">
              <p className="earnings-label">Pending Payouts</p>
              <p className="earnings-amount">UGX {(totalEarnings * 0.1).toLocaleString()}</p>
            </div>
          </div>

          <div className="earnings-detail">
            <h3>Earnings by Property</h3>
            {mockProperties.map(property => (
              <div key={property.id} className="earnings-row">
                <span>{property.name}</span>
                <span>UGX {property.earnings.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
