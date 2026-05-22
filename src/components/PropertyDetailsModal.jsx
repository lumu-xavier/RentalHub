import React, { useState } from 'react'
import './PropertyDetailsModal.css'

export default function PropertyDetailsModal({
  property,
  onClose,
  onBook,
  isGuest = true
}) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')

  const handleBook = () => {
    if (checkIn && checkOut) {
      onBook(property, checkIn, checkOut)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="modal-image">
          <img src={property.image} alt={property.name} />
        </div>

        <div className="modal-body">
          <div className="modal-header">
            <div>
              <h1>{property.name}</h1>
              <p className="location">📍 {property.location}</p>
              <div className="rating-section">
                <span className="rating">⭐ {property.rating}</span>
                <span className="reviews">({property.reviews} reviews)</span>
              </div>
            </div>
            <div className="price-tag">
              <span className="amount">UGX {property.price.toLocaleString()}</span>
              <span className="period">/night</span>
            </div>
          </div>

          <div className="modal-specs">
            <div className="spec-item">
              <span className="spec-icon">🛏️</span>
              <div>
                <p className="spec-label">Beds</p>
                <p className="spec-value">{property.beds}</p>
              </div>
            </div>
            <div className="spec-item">
              <span className="spec-icon">🚿</span>
              <div>
                <p className="spec-label">Baths</p>
                <p className="spec-value">{property.baths}</p>
              </div>
            </div>
            <div className="spec-item">
              <span className="spec-icon">🏘️</span>
              <div>
                <p className="spec-label">Type</p>
                <p className="spec-value">{property.type}</p>
              </div>
            </div>
          </div>

          <div className="modal-section">
            <h3>About</h3>
            <p>{property.description}</p>
          </div>

          <div className="modal-section">
            <h3>Amenities</h3>
            <div className="amenities-grid">
              {property.amenities.map((amenity, idx) => (
                <div key={idx} className="amenity-item">
                  <span>✓</span>
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          {isGuest && (
            <div className="booking-section">
              <h3>Make a Booking</h3>
              <div className="booking-form">
                <div className="form-group">
                  <label>Check-in</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Check-out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={handleBook}
                disabled={!checkIn || !checkOut}
              >
                Book Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
